import React, {useState, useEffect, useContext} from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import {useQuery, useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    ...initOptions
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [auth0Client, setAuth0] = useState();
    const [loading, setLoading] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);
    const QUERY_PERSON = gql`
        query queryPerson($googleId: String) {
            person(google_id: $googleId) {
                google_id
                email
                verified_email
                name
                given_name
                family_name
                picture
                locale
            }
        }
    `;
    const CREATE_PERSON = gql`
        mutation createPerson {
            create_person(
                person_data: {
                    google_id: "115306037822201585694"
                    email: "alice@gmail.com"
                    verified_email: true
                    name: "Alice T"
                    given_name: "Alice"
                    family_name: "Taylor"
                    picture: "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg"
                    locale: "en"
                }
            ) {
                person {
                    google_id
                    email
                    verified_email
                    name
                    given_name
                    family_name
                    picture
                    locale
                }
                ok
                message
            }
        }
    `;
    function Person({googleId}) {
        const {error, data} = useQuery(QUERY_PERSON, {
            variables: {googleId},
        });

        if (error) {
            alert(error.message);
        }
        console.log('data: ', data);
        // if (data.person == null) {
        //     // first time user logic should be triggered here
        //     // const [createPerson, {data}] = useMutation(CREATE_PERSON);
        // }
        return null;
    }
    useEffect(() => {
        const initAuth0 = async () => {
            const auth0FromHook = await createAuth0Client(initOptions);
            setAuth0(auth0FromHook);

            if (window.location.search.includes('code=')) {
                const {appState} = await auth0FromHook.handleRedirectCallback();
                onRedirectCallback(appState);
            }

            const isAuthenticated = await auth0FromHook.isAuthenticated();

            setIsAuthenticated(isAuthenticated);

            if (isAuthenticated) {
                const user = await auth0FromHook.getUser();
                setUser(user);
                console.log(user.name, ' logged in');
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
        console.log(user.name, ' logged in');
        setIsAuthenticated(true);
    };

    const handleRedirectCallback = async () => {
        setLoading(true);
        await auth0Client.handleRedirectCallback();
        const user = await auth0Client.getUser();
        setLoading(false);
        setIsAuthenticated(true);
        setUser(user);
        console.log(user.name, ' logged in');
    };

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
                loginWithRedirect: (...p) =>
                    auth0Client.loginWithRedirect(...p),
                getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
                getTokenWithPopup: (...p) =>
                    auth0Client.getTokenWithPopup(...p),
                logout: (...p) => auth0Client.logout(...p),
            }}
        >
            {user ? <Person googleId={user.sub} /> : null}

            {children}
        </Auth0Context.Provider>
    );
};
