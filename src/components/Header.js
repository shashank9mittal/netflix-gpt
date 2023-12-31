import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, deleteUser } from "../store/userSlice";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid, email }));
        navigate("/browse");
      } else {
        dispatch(deleteUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='w-full px-6 bg-gradient-to-b from-black  flex justify-between items-center z-50 fixed top-0'>
      <img className='w-48 ' src={LOGO_URL} alt='Logo' />
      {user && (
        <div className='flex justify-around items-center'>
          <button
            className='bg-red-700 text-white py-2 px-4 mx-6 hover:bg-red-900 cursor-pointer rounded-sm'
            onClick={() => {
              dispatch(toggleGptSearchView());
            }}
          >
            Netflix GPT
          </button>

          <div
            title='Sign Out'
            className='p-2 bg-red-700 text-white border border-red-700 rounded-full cursor-pointer'
            onClick={handleSignOut}
          >
            SM
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
