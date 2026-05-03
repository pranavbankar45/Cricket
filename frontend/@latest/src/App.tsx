
import { useEffect } from 'react';
import './App.css'
import 
// import Login from "./Pages/Login.tsx"
// import Profile from "./Pages/Profile."
 CreateProfile from "./Pages/CreateProfile.tsx"
import Login from './Pages/Login.tsx';
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
      <Login/>
      {/* <CreateProfile/> */}
    </div>
    </>
  )
}

export default App
