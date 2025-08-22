// lib/auth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy login check
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "admin"
        ) {
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        // Return null if login fails
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // optional: redirect to custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Next.js App Router API route handlers
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
