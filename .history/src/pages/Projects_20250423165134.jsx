const Projects = () => {
    const projects = [
      {
        title: "My E-Commerce Store",
        description: "React + Flask app with product listings, search, and user orders.",
      },
      {
        title: "Movie Explorer",
        description: "Frontend project using React Router for a movie database explorer.",
      },
    ];
  
    return (
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-shadow p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{proj.title}</h3>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  