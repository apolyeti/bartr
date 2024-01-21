import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    // callbacks: {
    //     async signIn({account, profile}) {
    //         if (account.provider === "google") {
    //             return profile.email_verified && profile.email.endsWith("@example.com")
    //         }
    //     }
    // },
    callbacks: {
        async signIn({ account, profile }) {
            console.log("signIn", account, profile);
            return true;
        }
    }
})

export { handler as GET, handler as POST };
