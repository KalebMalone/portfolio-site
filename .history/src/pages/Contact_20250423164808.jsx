const Contact = () => {
    return (
        <section className="p-6 max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded"
                />
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="p-3 border border-gray-300 rounded"
                ></textarea>
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
