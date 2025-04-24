import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">My Blogs</h2>
            <p className="text-xl">Here are some of my recent blog posts:</p>
            {/* You can add actual blog links here */}
            <ul>
                <li>
                    <a href="https://example.com/blog1" className="text-blue-500">Blog Post 1</a>
                </li>
                <li>
                    <a href="https://example.com/blog2" className="text-blue-500">Blog Post 2</a>
                </li>
                {/* Add more blogs as needed */}
            </ul>
        </div>
    );
};

export default Blogs;
