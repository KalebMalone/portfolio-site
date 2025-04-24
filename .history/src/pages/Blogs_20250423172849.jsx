import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">My Blogs</h2>
            <p className="text-xl mb-6">Here are some of my recent blog posts:</p>
            <ul>
                <li>
                    <a
                        href="https://medium.com/@kalebmalone7/introduction-to-flask-mail-89cccfeba067"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Introduction to Flask-Mail
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@kalebmalone7/intro-to-authentication-and-authorization-67c5082f1454"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Intro to Authentication and Authorization
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@kalebmalone7/sql-and-orm-a-guide-to-simplifying-database-management-96f84c878888"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SQL and ORM: A Guide to Simplifying Database Management
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@kalebmalone7/mastering-async-and-await-6d5a32b640b9"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mastering Async and Await
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@kalebmalone7/the-dom-c04c42e8f43d"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The DOM: Understanding the Document Object Model
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Blogs;
