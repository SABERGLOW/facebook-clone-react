import React from 'react'
import "./Login.css";
import logo from "./assets/logo512honeycomb.png"
import textLogo from "./assets/PhasebookTextLogo.png"
import { Button } from '@mui/material';
import {auth, provider, signInWithPopup} from "./firebase.js"
import {actionTypes} from "./reducer.js"
import {useStateValue} from "./StateProvider.js"

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch ] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {                
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user
                })
                // redux action? --> dispatch({ type: SET_USER, user });
            })
            .catch((error) => {
                //const errorCode = error.code;
                //const errorMessage = error.message;
                //const email = error.email;
                // If required console log this
            });
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img src={logo} alt='Phasebook logo' />
                <img src={textLogo} alt='Phasebook text logo' />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>

    )
}

export default Login