import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useState } from 'react';

const clientId =
  '31743908995-hb3mhot1v6pcl96s339j4uunreeapgkv.apps.googleusercontent.com';

function LogoutHooks() {
    const [msg, setMsg] = useState();
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    const msg = 'Logged out Successfully';
    setMsg(msg)
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
        <p>{msg}</p>
    
        <button onClick={signOut} className="button">
        <img src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/master/public/icons/google.svg" alt="google login" className="icon"></img>

        <span className="buttonText">Sign out</span>
        </button>
    </div>
  );
}

export default LogoutHooks;