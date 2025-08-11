import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                />
                Sign up with Google
            </button>
        </div>
    );
};

export default SocialLogin;