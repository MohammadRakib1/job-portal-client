import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import suitcase1 from '../assets/images/suitcase.webp'


const Footer = () => {
    return (
        <footer className="bg-white text-slate-700 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
                    {/* Logo and description */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img className='h-12 mr-2' src={suitcase1} alt="" />
                            <h2 className="text-xl font-bold text-blue-900">JobPortal</h2>
                        </div>
                        <p className="text-sm mb-4">
                            JobPortal is the heart of the design community and the best resource
                            to discover and connect with designers and jobs worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-blue-900 mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold text-blue-900 mb-3">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Feature</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Credit</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="font-semibold text-blue-900 mb-3">Quick links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">iOS</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">Desktop</a></li>
                        </ul>
                    </div>

                    {/* More */}
                    <div>
                        <h3 className="font-semibold text-blue-900 mb-3">More</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                {/* Download App Section */}
                <div className="border-t py-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="mb-4 md:mb-0">
                        <p>Download our Apps and get extra 15% Discount on your first Order...!</p>
                        <div className="flex space-x-4 mt-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg"
                                alt="App Store"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="h-10"
                            />
                        </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-col items-center md:items-end text-xs text-slate-500 space-y-1 md:space-y-0 md:space-x-6 md:flex-row">
                        <span>© 2022. JobBox all right reserved</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Security</a>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-6 right-6">
                <button className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition">
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;