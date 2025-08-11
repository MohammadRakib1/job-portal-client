import Lottie from 'lottie-react';
import signInLottieData from '../../assets/signIn.json';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 gap-9">
            <div className="w-full max-w-md space-y-6">
                <p className='text-center text-blue-600'>Wellcome back</p>
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Member Login
                </h2>
                <p className="text-center text-gray-500">
                    Access to all features. No credit card required.
                </p>

                <SocialLogin></SocialLogin>

                <div className="flex items-center justify-center">
                    <span className="border-t border-gray-300 w-1/5"></span>
                    <span className="text-gray-400 text-sm px-2">Or continue with</span>
                    <span className="border-t border-gray-300 w-1/5"></span>
                </div>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="agree"
                            className="mt-1 mr-2"
                        />
                        <label className="text-sm text-gray-700">
                            Remenber me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Don't have an Account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>
            <div className='w-80'>
                <Lottie animationData={signInLottieData}></Lottie>
            </div>
        </div>
    );
};

export default SignIn;