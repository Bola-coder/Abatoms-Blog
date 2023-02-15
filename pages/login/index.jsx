import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import SignupBg from "./../../assets/signup_bg.svg";

const Login = () => {
  return (
    <section className="w-7/12 m-auto h-[60vh] bg-slate-800 mt-7">
      {/* <div className="basis-1/3 h-full w-full">
        <Image
          src={SignupBg}
          alt="alt for signup"
          height={640}
          className="object-cover"
        />
      </div> */}
      <div className="basis-2/3 h-full px-12">
        <div className="p-4 pt-12">
          <h3 className="font-bold text-3xl tracking-wider">Welcome</h3>
          <p className="font-light tracking-widest mb-2">
            Let&apos;s log you up quickly
          </p>
        </div>
        <form className="mx-4 flex flex-col w-10/12">
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="email"
              placeholder="Enter your email"
              autoFocus={false}
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="password"
              placeholder="Enter Password"
              autoFocus={false}
              autoComplete="new-password"
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>

          <div className="flex w-11/12 justify-between">
            <button className="p-2 px-5 border-2 rounded-sm border-green-400 text-slate-800 bg-green-400 w-4/12 font-bold text-2xl tracking-wide hover:bg-green-500">
              SUBMIT
            </button>
            <p className="p-1">
              Don&apos;t have an account? <br />{" "}
              <span className="text-green-300 font-bold cursor-pointer">
                <Link href="/signup">signup</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
