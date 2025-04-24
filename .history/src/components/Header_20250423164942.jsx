import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white px-6 py-4 shadow-lg">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold tracking-tight">Kaleb's Portfolio</h1>
                <ul className="flex gap-6 text-lg">
                    {['Home', 'About', 'Projects', 'Contact'].map((page) => (
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
