import React, { useEffect } from "react";

import { VscGithub } from "react-icons/vsc";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  console.log(user);
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        await getAccessTokenSilently();
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated]);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="container flex flex-row items-center justify-between shadow-2xl animate__animated animate__fadeInDown p-5 ">
      <VscGithub className="mr-4 h-10 w-10" />
      <h1 className="text-lg text-indigo-600 ">Resume Builder 2.0</h1>
      <div className="flex flex-row ">
        {!isAuthenticated ? (
          <button
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        ) : (
          <button
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
