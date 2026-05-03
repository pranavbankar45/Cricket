
import { Trophy, User, PlayCircle, UserKey } from "lucide-react";

const Login = () => {

async function handleLogin() {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "JohnDoe", // Replace with actual input value
        password: "password123" // Replace with actual input value
      })
    });

    const data = await response.json();
    console.log("Login response:", data);
  } catch (error) {
    console.error("Error during login:", error);
  }
}

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#0a2e0a] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a4d1a] to-[#051a05] font-sans">
      {/* Main Stadium Card */}
      <div className="bg-[#1e3a1e] border-4 border-[#ccff00] w-full max-w-md p-8 rounded-[3rem] shadow-[0_0_50px_rgba(204,255,0,0.2)] relative overflow-hidden">
        
        {/* Playful Cricket Decoration */}
        <div className="absolute -top-6 -right-6 opacity-20 rotate-12">
          <Trophy size={120} color="#ccff00" />
        </div>

        <div className="flex flex-col items-center gap-8 relative z-10">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#ccff00] italic tracking-tighter uppercase leading-none">
              The Pavilion
            </h1>
            <p className="text-white/60 text-sm mt-2 font-medium uppercase tracking-widest">
              Ready for your next innings?
            </p>
          </div>

          <div className="w-full flex flex-col gap-5">
            {/* Name Input */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ccff00] group-focus-within:scale-110 transition-transform" size={20} />
              <input
                type="text"
                placeholder="Player Name"
                className="w-full py-4 pl-12 pr-4 bg-[#0a1a0a] text-white border-2 border-transparent focus:border-[#ccff00] outline-none rounded-2xl transition-all placeholder:text-white/30"
              />
            </div>

            {/* Email/Pass Input */}
            <div className="relative group">
                
              <UserKey  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ccff00] group-focus-within:scale-110 transition-transform" size={20} />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full py-4 pl-12 pr-4 bg-[#0a1a0a] text-white border-2 border-transparent focus:border-[#ccff00] outline-none rounded-2xl transition-all placeholder:text-white/30"
              />
            </div>

            {/* Submit Button */}
            <button
            onClick={handleLogin}
              type="submit"
              className="mt-4 py-4 px-8 self-center bg-[#e63946] hover:bg-[#ff4d5a] text-white font-bold text-lg rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_5px_0_rgb(150,30,40)] hover:shadow-[0_2px_0_rgb(150,30,40)] flex items-center gap-3 group"
            >
              Step onto the Field
              <PlayCircle className="group-hover:translate-x-1 transition-transform" size={22} />
            </button>
          </div>

          {/* Footer tagline */}
          <p className="text-[#ccff00]/50 text-xs font-bold uppercase tracking-tighter">
            Join 1M+ Players Worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;