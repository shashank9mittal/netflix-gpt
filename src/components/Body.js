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
    <div className='h-full'>
      <RouterProvider router={appRoter}></RouterProvider>
    </div>
  );
};
export default Body;
