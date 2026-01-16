// import { Session, User, JWT } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       role?: string | null; // Add role to Session['user']
//     };
//   }

//   interface User {
//     role?: string | null; // Add role to User
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     role?: string | null; // Add role to JWT
//     email?: string | null; // Add email to JWT
//   }
// }
// import { DefaultSession, DefaultUser } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email?: string | null;
//       name?: string | null;
//       image?: string | null;
//       role?: string;
//     } & DefaultSession["user"];
//   }

//   interface User extends DefaultUser {
//     id: string;
//     role?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     email?: string | null;
//     role?: string;
//   }
// }
// import { DefaultSession, DefaultUser } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email?: string | null;
//       name?: string | null;
//       image?: string | null;
//       role?: string;
//       location?: string;
//     } & DefaultSession["user"];
//   }

//   interface User extends DefaultUser {
//     id: string;
//     role?: string;
//     location?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     email?: string | null;
//     role?: string;
//     location?: string;
//   }
// }
////////////////////////////////////////////////
///////Phone otp
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      role?: string;
      location?: string;
      phoneNumber?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role?: string;
    location?: string;
    phoneNumber?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email?: string | null;
    role?: string;
    location?: string;
    phoneNumber?: string | null;
  }
}
