import React from 'react'
import "./Login.css";
import logo from "../../assets/logo512honeycomb.png"
import textLogo from "../../assets/PhasebookTextLogo.png"
import { Button } from '@mui/material';
import {auth, provider, signInWithPopup} from "../Firebase/firebase";
import {actionTypes} from "../Context API/reducer.js"
import {useStateValue} from "../Context API/StateProvider.js"

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch ] = useStateValue();

    const signIn = () => {
        /**
         * Signs in the user using the given authentication provider.           
         * @param {Object} auth - The authentication object.           
         * @param {Object} provider - The authentication provider object.           
         * @returns None           
         */
        signInWithPopup(auth, provider)
            .then((result) => {                
                dispatch({
                    type: actionTypes.SET_USER,
                    user:result.user
                })
            })
            /**
             * A function that handles the error that is thrown when the user's email or other parameters regarding login are invalid.           
             * @param {Error} error - the error object that is thrown when the user's email is invalid.           
             * @returns None           
             */
            .catch((error) => {
                // eslint-disable-next-line
                const errorCode = error.code;
                // eslint-disable-next-line
                const errorMessage = error.message;
                // eslint-disable-next-line
                const email = error.email;
                // If required console log this
            });
    };

    return (
        /**
         * The login component.       
         * The div shall have the login__logo that is our Phasebook logo
         * and it also has a text logo "Phasebook"
         * followed by our "Sign In" button which takes us to Google Auth Sign In Pop Up
         */
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