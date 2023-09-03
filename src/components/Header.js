import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='w-full absolute p-6 bg-gradient-to-b from-black  flex justify-between items-center'>
      <img
        className='w-48 '
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='Logo'
      />
      {user && (
        <div
          className='p-2 bg-red-700 text-white border border-red-700 rounded-full cursor-pointer'
          onClick={handleSignOut}
        >
          SM
        </div>
      )}
    </div>
  );
};
export default Header;
