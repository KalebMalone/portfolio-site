import React from 'react';

const Contact = () => {
    return (
        <section className="p-6 max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>

            {/* Contact Information */}
            <div className="mb-6">
                <p className="text-xl mb-2">You can reach out to me via these platforms:</p>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kalebmalone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span role="img" aria-label="LinkedIn" className="mr-2">🔗</span>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discord.com/users/kaleb7771"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span role="img" aria-label="Discord" className="mr-2">🎮</span>
                            Discord
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:kaleb.malone@example.com"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span role="img" aria-label="Email" className="mr-2">📧</span>
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/kalebmalone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span role="img" aria-label="GitHub" className="mr-2">🐙</span>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>

            {/* Form Section */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Or Send Me a Message!</h3>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
