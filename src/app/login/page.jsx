"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
      window.location.href = "/products"; // redirect after login
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
        <p className="text-gray-600 mb-6">
          Sign in to access your dashboard and manage products.
        </p>

        {/* Email/Password Form */}
        <form
          onSubmit={handleEmailLogin}
          className="flex flex-col gap-4 mb-4 text-black"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 border rounded-lg"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-500 mb-4">or</p>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full gap-3 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 font-medium hover:bg-gray-200 transition"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
