// import { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// // Mock in-memory database
// const mockDatabase: Record<string, { role?: string }> = {};

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           scope: "openid email profile", // Explicitly request email and profile scopes
//         },
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth", // Redirect to /auth for sign-in
//     error: "/auth/error", // Redirect to custom error page for OAuth errors
//   },
//   callbacks: {
//     async session({ session, token }: { session: any; token: any }) {
//       // Add role to session from token or mock database
//       if (token.email && mockDatabase[token.email]?.role) {
//         session.user.role = mockDatabase[token.email].role;
//       } else {
//         session.user.role = null; // Explicitly set to null if no role
//       }
//       return session;
//     },
//     async jwt({ token, user }: { token: any; user?: any }) {
//       // Add role and email to token when user signs in
//       if (user?.email) {
//         token.email = user.email;
//         if (mockDatabase[user.email]?.role) {
//           token.role = mockDatabase[user.email].role;
//         }
//       }
//       return token;
//     },
//     async signIn({
//       user,
//       account,
//       profile,
//     }: {
//       user: any;
//       account: any;
//       profile?: any;
//     }) {
//       // Log for debugging
//       console.log("SignIn callback:", { user, account, profile });
//       if (account?.provider === "google" && user?.email) {
//         // Initialize user in mock database if not exists
//         if (!mockDatabase[user.email]) {
//           mockDatabase[user.email] = { role: null };
//         }
//         return true; // Allow sign-in
//       }
//       return false; // Deny sign-in if conditions not met
//     },
//   },
//   debug: true, // Enable debug logs for OAuth issues
// };
// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.role = user.role || "user";
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email as string;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth",
//     error: "/auth/error",
//   },
//   debug: process.env.NODE_ENV === "development",
// };

// export default NextAuth(authOptions);
// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.role = user.role || "user";
//         token.location = user.location || "Not set";
//         console.log("JWT callback: Token updated", {
//           id: token.id,
//           role: token.role,
//           location: token.location,
//         });
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         session.user.role = token.role;
//         session.user.location = token.location;
//         console.log("Session callback: Session updated", {
//           id: session.user.id,
//           role: session.user.role,
//           location: session.user.location,
//         });
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth",
//     error: "/auth/error",
//   },
//   debug: process.env.NODE_ENV === "development",
// };

// export default NextAuth(authOptions);
////////////////////////////////////Phone Otp

// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: "Phone",
//       credentials: {
//         phoneNumber: { label: "Phone Number", type: "text" },
//         uid: { label: "Firebase UID", type: "text" },
//         name: { label: "Name", type: "text" },
//         email: { label: "Email", type: "text" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.uid || !credentials?.phoneNumber) {
//           console.log("Phone auth: Missing UID or phoneNumber");
//           return null;
//         }
//         try {
//           return {
//             id: credentials.uid,
//             email: credentials.email || null,
//             name: credentials.name || credentials.phoneNumber,
//             phoneNumber: credentials.phoneNumber,
//             role: "user",
//             location: "Not set",
//           };
//         } catch (error) {
//           console.error("Phone auth error:", error);
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXT_AUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.role = user.role || "user";
//         token.location = user.location || "Not set";
//         token.phoneNumber = user.phoneNumber || null;
//         console.log("JWT callback: Token updated", {
//           id: token.id,
//           role: token.role,
//           phoneNumber: token.phoneNumber,
//         });
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//         session.user.email = token.email;
//         session.user.role = token.role;
//         session.user.location = token.location;
//         session.user.phoneNumber = token.phoneNumber;
//         console.log("Session callback: Session updated", {
//           id: session.user.id,
//           role: session.user.role,
//           phoneNumber: session.user.phoneNumber,
//         });
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/accounts",
//     error: "/auth/error",
//   },
//   debug: process.env.NODE_ENV === "development",
// };

// export default NextAuth(authOptions);
//////////////////////////////////////////////////////////////////////////////
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

if (!process.env.NEXT_AUTH_SECRET && process.env.NODE_ENV === "production") {
  console.error("Missing NEXT_AUTH_SECRET in production");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Phone",
      credentials: {
        phoneNumber: { label: "Phone Number", type: "text" },
        uid: { label: "Firebase UID", type: "text" },
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.uid || !credentials?.phoneNumber) {
          console.log("Phone auth: Missing UID or phoneNumber");
          return null;
        }
        try {
          return {
            id: credentials.uid,
            email: credentials.email || null,
            name: credentials.name || credentials.phoneNumber,
            phoneNumber: credentials.phoneNumber,
            role: "user",
            location: "Not set",
          };
        } catch (error) {
          console.error("Phone auth error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role || "user";
        token.location = user.location || "Not set";
        token.phoneNumber = user.phoneNumber || null;
        console.log("JWT callback: Token updated", {
          id: token.id,
          role: token.role,
          phoneNumber: token.phoneNumber,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.location = token.location;
        session.user.phoneNumber = token.phoneNumber;
        console.log("Session callback: Session updated", {
          id: session.user.id,
          role: session.user.role,
          phoneNumber: session.user.phoneNumber,
        });
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/accounts",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
