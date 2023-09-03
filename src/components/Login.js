import { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const divStyle = {
    backgroundImage: `url(${BG_IMG_URL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  function validate(email_val, password_val) {
    if (!email_val) {
      setErrMsg("Enter Email");
      return;
    }
    if (!password_val) {
      setErrMsg("Enter Password");
      return;
    }
    setErrMsg(null);
  }
  function toggleSignIn() {
    setIsSignIn(!isSignIn);
  }
  const handleButtonClick = () => {
    validate(email.current.value, password.current.value);
    if (errMsg) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage);
        });
    }
  };

  return (
    <div className=' bg-cover bg-center ' style={divStyle}>
      <Header></Header>
      <div className='h-full flex justify-center items-center'>
        <div className='bg-black  w-3/12  bg-opacity-90 rounded-md '>
          <div className='mx-auto w-8/12 my-8'>
            <div className='text-white text-3xl w-full'>
              {isSignIn ? "Sign In" : "Sign Up"}
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='my-4 '>
              <input
                ref={email}
                type='email'
                placeholder='Email Address'
                className='p-2 my-4 w-full bg-slate-700 text-white'
              ></input>
              <input
                ref={password}
                type='password'
                placeholder='Enter Password'
                className='p-2 my-4 w-full bg-slate-700 text-white'
              ></input>
              <div className='text-red-600 text-lg'>{errMsg}</div>
              <button
                className='bg-red-500 text-white py-2 w-full my-4 hover:bg-red-700'
                onClick={handleButtonClick}
              >
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
