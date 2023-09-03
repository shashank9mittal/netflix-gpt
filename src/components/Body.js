import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const appRoter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  return (
    <div className=''>
      <RouterProvider router={appRoter}></RouterProvider>
    </div>
  );
};
export default Body;
