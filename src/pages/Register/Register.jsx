import React, { useContext } from 'react';
import registerLottieData from '../../assets/register.json';
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Start for free Today
                </h2>
                <p className="text-center text-gray-500">
                    Access to all features. No credit card required.
                </p>

                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Sign up with Google
                </button>

                <div className="flex items-center justify-center">
                    <span className="border-t border-gray-300 w-1/5"></span>
                    <span className="text-gray-400 text-sm px-2">Or continue with</span>
                    <span className="border-t border-gray-300 w-1/5"></span>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

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
                            Agree our terms and policy{" "}
                            <a href="#" className="text-blue-600 underline">
                                Learn more
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
            <div className='w-96'>
                <Lottie animationData={registerLottieData}></Lottie>
            </div>
        </div>
    );
};

export default Register;