
import { useEffect } from 'react';
import './App.css'
// import Login from "./Pages/Login.tsx"
// import Profile from "./Pages/Profile."
import CreateProfile from "./Pages/CreateProfile.tsx"
function App() {

  async function test(){
    const res=await fetch("http://localhost:3000/test",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        body:JSON.stringify({data:"Hello world"})
      }
    })
    console.log("res",res);
  }

  useEffect(()=>{
    test();
  },[])

  return (
    <>
    <div className='w-screen flex justify-center items-center '>
      {/* <Login/> */}
      {/* <Profile/> */}
      <CreateProfile/>
    </div>
    </>
  )
}

export default App
