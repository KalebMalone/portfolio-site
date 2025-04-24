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
                    <li className="flex items-center text-blue-600">
                        <span role="img" aria-label="Discord" className="mr-2">🎮</span>
                        Discord: <span className="ml-2 font-mono">kaleb7771</span>
                    </li>
                    <li>
                        <a
                            href="mailto:kalebmalone7@gmail.com"
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span role="img" aria-label="Email" className="mr-2">📧</span>
                            kalebmalone7@gmail.com
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
);
};

export default Contact;
