"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!name || !email || !password || !confirmPassword) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // ✅ Call your backend API to create user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setSuccessMsg("✅ Account created! Redirecting to login...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setErrorMsg(data.message || "❌ Registration failed.");
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg("Something went wrong. Try again later.");
    }
  }

  async function handleGoogleRegister() {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100svh-409px)] py-10 bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="p-6 bg-white rounded-2xl shadow-lg w-full max-w-sm space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h1>

        {/* Error / Success Message */}
        {errorMsg && (
          <p className="text-red-600 text-sm text-center">{errorMsg}</p>
        )}
        {successMsg && (
          <p className="text-green-600 text-sm text-center">{successMsg}</p>
        )}

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password with Toggle */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            "Register"
          )}
        </button>

        <div className="text-center text-gray-500">or</div>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            "Sign up with Google"
          )}
        </button>

        {/* Extra Link */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
