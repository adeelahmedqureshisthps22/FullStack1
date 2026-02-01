function About() {
  return (
    <div className="container">
      <div className="card">
        <h2>About FullStack1</h2>
        <p>
          This is a modern fullstack application built with:
        </p>
        <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
          <li>React for the frontend</li>
          <li>Vite for fast development and building</li>
          <li>Express.js for the backend API</li>
          <li>Node.js runtime</li>
        </ul>
      </div>

      <div className="card">
        <h3>Features</h3>
        <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
          <li>Modular project structure</li>
          <li>API integration</li>
          <li>Routing with React Router</li>
          <li>RESTful API endpoints</li>
          <li>Environment-based configuration</li>
        </ul>
      </div>
    </div>
  )
}

export default About
