import { createClient } from '@supabase/supabase-js';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const supabaseUrl = 'https://unsneidkckzvbnfqqzyo.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;
                const { data: { user }, error } = await supabase.auth.signIn({ email, password });

                if (error) {
                    throw new Error(error.message);
                }

                if (user) {
                    return { id: user.id, email: user.email };
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error'
    },
    session: {
        jwt: true
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            return session;
        }
    }
});