import React from "react";

const Login = () => {
  return <div className="text-2xl text-red-500 h-screen w-screen flex items-center justify-center ">
    <div className="bg-[#657a00] w-[30%] h-[50%]">
        <div className="mx-10 my-10  rounded-2xl flex flex-col gap-15">

            <input type="text " placeholder="Enter Your Name " 
            className="py-2 px-4  bg-[#1400c6] 0 text-gold border-none outline-none rounded-2xl m-"/>

            <input type="text " placeholder="Enter Your Name " 
            className="py-2 px-4 bg-[#1400c6] text-gold border-none outline-none rounded-2xl "/>

            <button type="text " placeholder="Enter Your Name "  type="submit"
            className="py-2 px-4 self-center bg-[#1400c6] text-gold border-none outline-none rounded-2xl  inline w-fit">Login & Signup</button>

        </div>
    </div>
    
  </div>;
};


export default Login;
