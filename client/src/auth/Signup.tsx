// import React from 'react'
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "../component/GoogleLoginButton";
import { useSetRecoilState } from "recoil";
import { authvalueAtom } from "../store/atom";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../API_URL";
import { ToastContainer, toast } from "react-toastify";

export default function Signup() {
  const [username, getUsername] = useState("");
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const [token, setToken] = useState("");

  function handlesignup() {
    alert("successful signed up");
  }
  async function onPress1(e: any) {
    toast.loading("please wait signing in ...", {
      position: "bottom-left",
    });
    e.preventDefault();
    const response = await axios.post(
      `${API_URL}/api/v1/user/signup`,
      {
        name: username,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    localStorage.setItem("username", username);
    localStorage.setItem("token", data);
    console.log(data);
    setToken(data);
  }

  if (token) {
    return <>{window.open("/mainpage", "_self")}</>;
  }

  const setAuth = useSetRecoilState(authvalueAtom) || "";
  return (
    <>
      <div className="h-screen flex justify-center flex-col">
        <div className="">
          <form className="max-w-sm mx-auto">
            <div className="text-3xl font-semibold text-center">
              Create an account
            </div>
            <div className="text-slate-400 text-center">
              Already have an account?{" "}
              <Link
                className="underline pl-1"
                to=""
                onClick={() => setAuth("login")}
              >
                Login
              </Link>{" "}
            </div>
            <div className="w-full font-medium my-4">
              <GoogleLoginButton onloginSuccess={handlesignup} />
            </div>
            <div className="text-center text-slate-400">
              -------- OR continue with ----------
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">Username</label>
              <input
                type="text"
                id="username"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your username"
                required
                onChange={(e) => getUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
                onChange={(e) => getEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e) => getPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center cursor-pointer"
                onClick={onPress1}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
