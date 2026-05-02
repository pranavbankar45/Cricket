import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="bg-red-900 min-h-screen w-screen text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-600 h-20 px-20 fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-red-300">
          Logout
        </h1>
        <h1 className="text-2xl font-bold">Jersey No : 45</h1>
      </nav>

      {/* Main Section */}
      <section className="pt-28 flex justify-center items-center">
        <div className="bg-gray-950 border border-white rounded-xl p-10 w-[750px] shadow-lg">

          {/* Top Layout */}
          <div className="flex gap-10">

            {/* Profile Image */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 border border-white rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-sm">Profile Image</p>
                )}
              </div>

              <input
                type="file"
                className="text-sm"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            {/* Name + About */}
            <div className="flex flex-col gap-5 flex-1">

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md bg-gray-800 border border-white focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                placeholder="About me..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="p-3 h-24 rounded-md bg-gray-800 border border-white focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              />

            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex gap-10 mt-10">

            {/* Match History */}
            <div className="w-1/2 border border-white rounded-md p-4 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <h2 className="font-bold mb-2">Match History</h2>
              <p className="text-sm opacity-70">
                No matches played yet...
              </p>
            </div>

            {/* Personal Info */}
            <div className="w-1/2 border border-white rounded-md p-4 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <h2 className="font-bold mb-2">Personal Info</h2>
              <p className="text-sm opacity-70">
                Add your details here...
              </p>
            </div>

          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600 transition">
              Save Profile
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Profile;