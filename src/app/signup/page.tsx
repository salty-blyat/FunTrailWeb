
const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
            {/* Left Side - Promotional Banner */}
            <div className="hidden md:flex  w-full md:w-1/2 h-[550px] ml-5 relative bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/image_login/s.webp')" }}>
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                <div className="relative z-10 text-white p-8 md:p-16">
                    <h3 className="text-2xl font-bold mb-4">FUN Trails</h3>
                    
                    {/* <div className="absolute bottom-3 left-4">
                        <img src="path/to/illustration.png" alt="Illustration" className="w-40 h-40" />
                    </div> */}
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-white md:min-h-screen">
                <h2 className="text-3xl font-bold mb-5 text-center md:text-left">Sign Up</h2>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Password"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.1.304-.21.598-.326.881"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Confirm Password"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.1.304-.21.598-.326.881"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-700">
                        Sign In
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>
                        Already a Member?{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
                <div className="text-center my-4">
                    <span className="text-gray-500">Or</span>
                </div>
                <div className="flex space-x-4 justify-center">
                    <button className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600">
                       G
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                        f
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
