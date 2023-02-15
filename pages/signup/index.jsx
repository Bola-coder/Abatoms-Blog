import React, { useEffect } from "react";
import Link from "next/link";
import UseFormik from "../../utils/UseFormik";
// import Image from "next/image";
// import SignupBg from "./../../assets/signup_bg.svg";

const Signup = () => {
  const { formik } = UseFormik();
  useEffect(() => {
    console.log(formik);
  });
  return (
    <section className="w-7/12 m-auto h-[80vh] bg-slate-800 mt-7">
      {/* <div className="basis-1/3 h-full w-full">
        <Image
          src={SignupBg}
          alt="alt for signup"
          height={640}
          className="object-cover"
        />
      </div> */}
      <div className="basis-2/3 h-full px-12">
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}
        <div className="p-4 pt-12">
          <h3 className="font-bold text-3xl tracking-wider">Welcome</h3>
          <p className="font-light tracking-widest mb-2">
            Let&apos;s sign you up quickly
          </p>
        </div>
        <form className="mx-4 flex flex-col w-10/12">
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="text"
              placeholder="Enter your name"
              autoFocus={false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              id="name"
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="email"
              placeholder="Enter your email"
              autoFocus={false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              id="email"
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="password"
              placeholder="Enter Password"
              autoFocus={false}
              autoComplete="new-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>
          <div className="mb-5 w-11/12 bg-red-900">
            <input
              type="text"
              placeholder="Confirm Password"
              autoFocus={false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              id="passwordConfirm"
              className="p-2 px-5 border-2 border-green-400 bg-slate-800 w-full outline-none"
            />
          </div>
          <div className="flex w-11/12 justify-between">
            <button className="p-2 px-5 border-2 rounded-sm border-green-400 text-slate-800 bg-green-400 w-4/12 font-bold text-2xl tracking-wide hover:bg-green-500">
              SUBMIT
            </button>
            <p className="p-1">
              Already have an account? <br />{" "}
              <span className="text-green-300 font-bold cursor-pointer">
                <Link href="/login">login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
