import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold">Kaleb's Portfolio</h1>
                <ul className="flex gap-6 text-lg">
                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                    <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
