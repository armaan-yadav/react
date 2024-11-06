import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="h-screen bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] flex items-center justify-center">
      <div className="h-[80%] w-[80%] bg-[#f7fafd] flex">
        <img
          src="https://plus.unsplash.com/premium_photo-1667126445804-79202e10a28a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[50%]"
          alt="Background"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="px-5 py-6 flex flex-col gap-5 w-[50%]  justify-center"
        >
          <h1 className="text-3xl font-bold text-center">Welcome broooo :) </h1>
          <input
            type="text"
            className="outline-none bg-transparent border-b-2 border-black w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="outline-none bg-transparent border-b-2 border-black w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="outline-none bg-transparent border-b-2 border-black w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="outline-none bg-transparent border-b-2 border-black w-full"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] py-4 rounded-md text-lg transition-all duration-300 ease-in-out hover:to-[#a1c4fd] hover:from-[#c2e9fb]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
