const Projects = () => {
    return (
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">My E-Commerce Store</h3>
            <p className="text-gray-700">A React + Flask e-commerce app with product listings, search, and user orders.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Movie Explorer</h3>
            <p className="text-gray-700">A frontend project using React Router to navigate movie, actor, and director pages.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  