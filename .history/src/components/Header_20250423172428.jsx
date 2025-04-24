import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md py-4">
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
                {/* Logo/Brand Name (Left-aligned) */}
                <h1 className="text-5xl font-bold tracking-tight">Kaleb's Portfolio</h1>

                {/* Navigation Links (Right-aligned) */}
                <ul className="flex space-x-6 text-lg"> {/* Reduced space between items */}
                    {['Home', 'About', 'Projects', 'Contact', 'Blogs'].map((page) => ( // Add Blogs here
                        <li key={page}>
                            <Link
                                to={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
