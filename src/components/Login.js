import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const bgImg =
    "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Set the height and other styles as needed
  };
  const [isSignIn, setIsSignIn] = useState(true);
  function toggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className=' bg-cover bg-center ' style={divStyle}>
      <Header></Header>
      <div className='h-full flex justify-center items-center'>
        <div className='bg-black  w-3/12 h-1/2 bg-opacity-90 rounded-md '>
          <div className='mx-auto w-8/12 my-8'>
            <div className='text-white text-3xl w-full'>
              {isSignIn ? "Sign In" : "Sign Up"}
            </div>

            <form className='my-4 '>
              <input
                type='email'
                placeholder='Email Address'
                className='p-2 my-4 w-full bg-slate-700 text-white'
              ></input>
              <input
                type='password'
                placeholder='Enter Password'
                className='p-2 my-4 w-full bg-slate-700 text-white'
              ></input>
              <button className='bg-red-500 text-white py-2 w-full my-4 hover:bg-red-700'>
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>

            {isSignIn ? (
              <div className='text-white text-sm w-full'>
                New to Netflix?{" "}
                <span
                  className='hover:text-red-700 cursor-pointer'
                  onClick={toggleSignIn}
                >
                  Sign Up Now
                </span>
              </div>
            ) : (
              <div className='text-white text-sm w-full'>
                Already a Member?{" "}
                <span
                  className='hover:text-red-700 cursor-pointer'
                  onClick={toggleSignIn}
                >
                  Sign In Now
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
