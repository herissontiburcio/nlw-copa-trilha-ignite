import { createContext, ReactNode, useState, useEffect } from "react";
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    IsUserLoading: boolean;
    signIn: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps) ;

export function AuthContextProvider({ children }){
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [IsUserLoading, setIsUserLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '102344569321-0a8kiant3g3nml8p030ic2mc8fca7fer.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    });


async function signIn() {
    try {
        setIsUserLoading(true);
        await promptAsync();
    } catch (error) {
        console.log(error);
        throw error;
        
    } finally {
        setIsUserLoading(false);
    }

}

async function signInWithGoogle(access_token: string) {
    console.log("TOKEN DE AUTENTICAÇÃO ===>", access_token);
}

useEffect(() => {
    if(response?.type === 'success' && response.authentication?.accessToken) {
        signInWithGoogle(response.authentication.accessToken);

    }

},[response]);


    return (
        <AuthContext.Provider value={{
            signIn, 
            IsUserLoading,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}