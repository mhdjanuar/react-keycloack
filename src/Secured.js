import React, {useEffect, useState} from 'react';
import Keycloak from "keycloak-js";
import jwt_decode from "jwt-decode";

const Secured = () => {
  //initial keycloack
  const _kc = Keycloak('/keycloak.json');

  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // goto page login from keycloak
    _kc.init({onLoad: 'login-required'}).then(authenticated => {
        if (authenticated) {
            setKeycloak(_kc);
            setAuthenticated(authenticated);
        }
    })
  }, [])

  const doLogin = _kc.login;

  const getIdToken = () => {
    // get id token from keycloack
    if (keycloak) {
        return keycloak.idToken;
    }
  }

  const getToken = () => {
    // get token from keycloack
      if (keycloak) {
          return keycloak.token;
      }
  }

  return (
    <>
        <h1>Secured</h1>
        {authenticated && <p onClick={() => keycloak.logout()}>Logout</p>}
        <p>idToken: {JSON.stringify(getIdToken())}</p>
        <p>token: {JSON.stringify(getToken())}</p>
    </>
  );
}

export default Secured;
