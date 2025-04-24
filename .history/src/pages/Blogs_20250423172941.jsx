import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">My Blogs</h2>
            <p className="text-xl mb-6">Here are some of my recent blog posts:</p>
            <ul className="space-y-6"> {/* Added space between items */}
                <li>
                    <h3 className="text-2xl font-semibold mb-2">
                        <a
                            href="https://medium.com/@kalebmalone7/introduction-to-flask-mail-89cccfeba067"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Introduction to Flask-Mail
                        </a>
                    </h3>
                    <p className="text-lg text-gray-700">
                        In this blog, I dive into how to use Flask-Mail to send emails in your Flask applications. I cover the basics of setting up Flask-Mail and provide a sample use case.
                    </p>
                </li>
                <li>
                    <h3 className="text-2xl font-semibold mb-2">
                        <a
                            href="https://medium.com/@kalebmalone7/intro-to-authentication-and-authorization-67c5082f1454"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Intro to Authentication and Authorization
                        </a>
                    </h3>
                    <p className="text-lg text-gray-700">
                        This post covers the foundational concepts of authentication and authorization in web applications. I discuss how to implement both securely in your projects.
                    </p>
                </li>
                <li>
                    <h3 className="text-2xl font-semibold mb-2">
                        <a
                            href="https://medium.com/@kalebmalone7/sql-and-orm-a-guide-to-simplifying-database-management-96f84c878888"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SQL and ORM: A Guide to Simplifying Database Management
                        </a>
                    </h3>
                    <p className="text-lg text-gray-700">
                        Learn how to simplify database management with SQL and ORM (Object-Relational Mapping). This blog introduces key concepts and best practices for working with databases.
                    </p>
                </li>
                <li>
                    <h3 className="text-2xl font-semibold mb-2">
                        <a
                            href="https://medium.com/@kalebmalone7/mastering-async-and-await-6d5a32b640b9"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mastering Async and Await
                        </a>
                    </h3>
                    <p className="text-lg text-gray-700">
                        Explore the concept of async programming in JavaScript. In this post, I explain how to use `async` and `await` for better handling of asynchronous tasks and promises.
                    </p>
                </li>
                <li>
                    <h3 className="text-2xl font-semibold mb-2">
                        <a
                            href="https://medium.com/@kalebmalone7/the-dom-c04c42e8f43d"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The DOM: Understanding the Document Object Model
                        </a>
                    </h3>
                    <p className="text-lg text-gray-700">
                        This post covers the basics of the DOM, its structure, and how to interact with it using JavaScript. It’s essential for any web developer working with client-side code.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Blogs;
