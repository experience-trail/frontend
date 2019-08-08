import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);
  
const QUERY_PERSON = gql`query queryPerson {
  person(google_id: "115306037822201585694") {
    google_id
    email
    verified_email
    name
    given_name
    family_name
    picture
    locale
  }
}`;
export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  function QueryPerson() {
    const { loading, error, data } = useQuery(QUERY_PERSON);
    // console.log(user, "user");
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log("data", data);
    
    return (null
      // <select name="dog" onChange={onDogSelected}>
      //   {data.dogs.map(dog => (
      //     <option key={dog.id} value={dog.breed}>
      //       {dog.breed}
      //     </option>
      //   ))}
      // </select>
    );
  }
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  
 

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
        // console.log(user, ' logged in');
        QueryPerson()
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    // console.log(user, ' logged in');
    QueryPerson()
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
    // console.log(user, ' logged in');
    QueryPerson()
  };
  
  // function QueryPerson() {
  //   const { loading, error, data } = useLazyQuery(QUERY_PERSON);
  //   // console.log(user, "user");
  //   if (loading) return 'Loading...';
  //   if (error) return `Error! ${error.message}`;
  //   console.log("data", data);
  //   return (null
  //     // <select name="dog" onChange={onDogSelected}>
  //     //   {data.dogs.map(dog => (
  //     //     <option key={dog.id} value={dog.breed}>
  //     //       {dog.breed}
  //     //     </option>
  //     //   ))}
  //     // </select>
  //   );
  // }
  
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
