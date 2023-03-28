import { useState } from "react";
import Image from "next/image";
import titanIcon from "@/../public/images/titanIcon.png";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`w-full h-full bg-gray-100 flex-grow flex flex-col gap-12 items-center justify-center`}
    >
      <div
        className={`w-[50ch] h-[80%] bg-gray-50 p-8 rounded-2xl  flex flex-col gap-4 shadow-lg`}
      >
        {error && <div className={`p-6 bg-red-300/20 text-gray-500 rounded-2xl`}>Error: {error}</div>}
        <h1 className={`font-bold text-2xl`}>Login To Your Account</h1>
        <input
          className={`w-full h-12 focus:!outline-none outline outline-gray-400/10 focus:ring-rose-500 focus:ring transition-all rounded-xl px-4 py-2 font-medium`}
          value={email}
          // add a % sign to the end of the number
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setError("");
          }}
        />
        <input
          className={`w-full h-12 focus:!outline-none outline outline-gray-400/10 focus:ring-rose-500 focus:ring transition-all rounded-xl px-4 py-2 font-medium`}
          value={password}
          type={"password"}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
            setError("");
          }}
        />
        <button
          className={`w-full h-12 bg-rose-500 text-white rounded-xl`}
          onClick={() => {
            fetch(`http://localhost:4000/auth`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }).then(async (res) => {
              if (res.ok) {
                const token = await res.text();
                localStorage.setItem("token", token);
                router.push("/");
              } else {
                setError((await res.json()).message);
                
              }
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
