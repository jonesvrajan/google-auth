import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useState } from 'react';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '31743908995-hb3mhot1v6pcl96s339j4uunreeapgkv.apps.googleusercontent.com';

function LoginHooks() {
  const [msg, setMsg] = useState();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    
     const msg =  `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
     setMsg(msg)
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
    <p>{msg}</p>
    <button onClick={signIn} className="button">
      <img src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/master/public/icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
    </div>
  );
 
}

export default LoginHooks;