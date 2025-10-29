import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen font-serif">
      {/* Left Section */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#232d2f] text-[#e58b1d] p-40 text-center">
        <h3 className="text-xl mb-2">Welcome to...</h3>
        <h1 className="text-5xl font-bold mb-8">IntelliGrade!</h1>

        <div className="relative w-56 h-56 mb-8">
          <Image
            src="/images/image.png"
            alt="IntelliGrade Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#89473b] text-white px-8">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-2xl font-semibold text-center">Student Login</h2>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="john.doe@email.com"
              className="w-full rounded-xl px-4 py-2 text-black outline-none bg-white"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="font-medium">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="************"
              className="w-full rounded-xl px-4 py-2 text-black outline-none bg-white"
            />
          </div>

          {/* Button */}
          <Link
            href="/dashboard"
            className="block w-full mt-4 text-center rounded-xl bg-[#232d2f] py-2 text-white transition hover:bg-[#2f3a3b]"
          >
            Log In
          </Link>

          {/* Register Link */}
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold underline">
              Register here
            </Link>
          </p>

          {/* Instructor Link */}
          <p className="text-center">
            Are you an instructor?{" "}
            <Link href="/instructor" className="font-semibold underline">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
