import { login, register } from "@/services/authServices";
import { AuthContextProps, DecodedTokenProps, UserProps } from "@/types";
import {  createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {jwtDecode} from "jwt-decode";
import { router } from "expo-router";



export const AuthContext = createContext<AuthContextProps>({
    token: null,
    user: null,
    signIn: async() => {},
    signUp: async()=> {},
    signOut: async()=> {},
    updateToken: async()=>{}
})

export const AuthProvider = ({children}:{children: ReactNode})=>{
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserProps | null>(null)
    
    useEffect(()=>{
        loadToken()
    },[])

    const loadToken = async() =>{
        const storedToken = await AsyncStorage.getItem('token')
        if(storedToken){
            try {

                const decode = jwtDecode<DecodedTokenProps>(storedToken)
                console.log("decoded token: ", decode)

                if(decode.exp && decode.exp < Date.now() / 1000){
                    // token has expired, navigate to welcome page
                    await AsyncStorage.removeItem('token')
                    gotoWelcomePage()
                }
                // user is logged in
                setToken(storedToken)
                setUser(decode.user)
                gotoHomePage()
                
            } catch (error) {
                gotoWelcomePage()
                console.log('Failed to decode Token: ', error)
            }
        }else{
            gotoWelcomePage()
        
        }
    }
    

    const gotoHomePage = () =>{
        // this wait is only for showing splash screen 
        setTimeout(()=>{
            router.replace('../(main)/home')
        }, 1500)
        
    }

    const gotoWelcomePage = () =>{
       setTimeout(()=>{
            router.replace('./(auth)/welcome')
        }, 1500)
    }

    const updateToken = async(token:string) =>{
        if(token){

            setToken(token)
            await AsyncStorage.setItem('token', token)
            // decode token
            const decode = jwtDecode<DecodedTokenProps>(token)
            console.log("decoded token: ", decode)
            setUser(decode.user)
        }
    }
    const signIn = async(email:string, password:string) =>{
        const response = await login(email, password)
        await updateToken(response.token)
        router.replace('../(main)/home')
        console.log(response)
    
        
    }

    const signUp = async(email:string, password:string, name:string, avatar?:string | null) =>{

        const response =  await register(email, password, name, avatar) 
        await updateToken(response.token)
        router.replace('../(main)/home')
    
    }

    const signOut = async() =>{

        setToken(null)
        setUser(null)
        await AsyncStorage.removeItem('token')
        router.replace('./(auth)/welcome')
     }

    return (
        <AuthContext.Provider value={{ token, user, signIn, signUp, signOut, updateToken}}>
            {children}
        </AuthContext.Provider>

    )
};

export const  useAuth = () => useContext(AuthContext)