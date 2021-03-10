import React, {useEffect, useState} from 'react';
import Keycloak from "keycloak-js";
import jwt_decode from "jwt-decode";

const Secured = () => {
  //initial keycloack
  const _kc = Keycloak('/keycloak.json');

  const [keycloak, setKeycloak] = useState(null);

  useEffect(() => {
    _kc.init({onLoad: 'login-required'}).then(authenticated => {
        if (authenticated) {
            setKeycloak(_kc);
        }
    })
  }, [])

  const doLogin = _kc.login;

  const doLogout = _kc.logout;

  const getIdToken = () => {
    if (keycloak) {
        return keycloak.idToken;
    }
  }

  const getToken = () => {
      if (keycloak) {
          return keycloak.token;
      }
  }

  return (
    <>
        <h1>Secured</h1>
        <p onClick={() => doLogout()}>Logout</p>
        <p>idToken: {JSON.stringify(getIdToken())}</p>
        <p>token: {JSON.stringify(getToken())}</p>
    </>
  );
}

export default Secured;
