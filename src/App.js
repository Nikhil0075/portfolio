import React from 'react';
import './App.css';

// Header component
function Header() {
  return (
    <header>
      <h1>Nikhil Ranjan Murmu</h1>
      <div className="links">
        <a href="https://github.com/Nikhil0075">GitHub</a>
        <a href="https://www.linkedin.com/in/nikhil0075/">LinkedIn</a>
        <a href="https://www.kaggle.com/nikhilranjanmurmu">Kaggle</a>
      </div>
    </header>
  );
}

// Education component
function Education() {
  return (
    <section>
      <h2><u>Education</u></h2>
      <ul>
        <li>B.TECH., CIVIL - NIT Rourkela (CGPA: 7.86/10)</li>
        <li>INTERMEDIATE - Deepika English Medium School, Rourkela (Percentage: 78%)</li>
        <li>HIGH SCHOOL - Seven Hills Residential School, Sambalpur (Percentage: 80%)</li>
      </ul>
    </section>
  );
}

// Skills component
function Skills() {
  return (
    <section>
      <h2><u>Skills</u></h2>
      <ul><li><h3>Languages</h3></li></ul>
      <p>Python, HTML, CSS, JavaScript</p>
      <ul><li><h3>Libraries</h3></li></ul>
      <p>NumPy, Pandas, SKlearn, Matplotlib, TensorFlow, React</p>
      <ul><li><h3>Softwares</h3></li></ul>
      <p>Jupiter, VS code, Blender</p>
      <ul><li><h3>Languages</h3></li></ul>
      <p>English, Hindi, Odia</p>
      <ul><li><h3>Others</h3></li></ul>
      <p>Leadership, Time management, Event management</p>
    </section>
  );
}

// WorkExperience component
function WorkExperience() {
  const experiences = [
    {
      date: "APRIL 2022",
      title: "HAWKVISUM Blender Developer (Internship)",
      description: "Blender Developer Intern at Hawkvism. Made meaningful contributions, enhanced skills, collaborated on VR projects, gained industry experience.",
      techStacks: ["Blender", "Substance Painter"]
    },
    {
      date: "2022‐2023",
      title: "SKILLEDSET Blender Developer (Internship)",
      description: "Interned at Skilled Set as a Blender Developer, prioritizing industrial safety via AR and VR integration. Created immersive simulations and real‐time alerts, effectively minimizing machinery risks.",
      techStacks: ["Blender", "Unity", "Substance Painter"]
    }
  ];

  return (
    <section>
      <h2><u>Work Experience</u></h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <h3>{experience.date}</h3>
          <ul>
            <li><h4>{experience.title}{experience.links}</h4></li>
          </ul>
          <p>{experience.description}</p>
          <p><strong>Tech Stacks:</strong> {experience.techStacks.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}
function Achievements() {
  const achievements = [
    "EXL EQ 2023 National Finalist: my team was one of the top six finalists of EXL EQ 2023 organized by EXL Services",
    "Shell AI 2023: Ranked top 40 globally in a hackathon with a supply chain model for biomass from 2418 locations."
  ];

  return (
    <section>
      <h2><u>Achievements/Awards</u></h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

// Projects component
function Projects() {
  const projects = [
    {
      date: "APR 2024",
      title: "NLP classification",
      description: "Used text tokenization and embedding methos to pre-process the text and add tensorflow different neural network methods to target the labels.",
      techStacks: ["Pandas", "numpy","Tensorflow", "Tensorflow-hub"],
      links: <a href="https://github.com/Nikhil0075/nlp_classification"> (Link)</a>
    },
    {
      date: "AUG 2023",
      title: "Biomass forecasting and supply chain ML",
      description: "Implement MILP to minimize transport costs from farms to bio refinery, using historical data for biomass forecasting, with constraints on demand and site numbers.",
      techStacks: ["Goubi Optimizer", "KNN", "Pulp"],
      links: <a href="https://github.com/Nikhil0075/shellai"> (Link)</a>
    },
    {
      date: "JULY 2023",
      title: "Library Restful Api",
      description: "Developed RESTful API for a library system, enhancing functionality, improving user experience, and ensuring seamless data communication.",
      techStacks: ["MongoDB", "JavaScript", "React"],
      links: <a href="https://github.com/Nikhil0075/Library_Restful_Api"> (Link)</a>
    },
    {
      date: "JUNE 2023",
      title: "PM2.5 Prediction Project",
      description: "Used Prophet algorithm to forecast PM2.5 in 30 Indian cities, trained with 3 years of data.",
      techStacks: ["Pandas", "Scikit‐learn", "FB Prophet"],
      links: <a href="https://github.com/Nikhil0075/EXL-EQ-"> (Link)</a>
    }
  ];

  return (
    <section>
      <h2><u>Projects</u></h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.date}</h3>
          <ul>
            <li><h4>{project.title}{project.links}</h4></li>
          </ul>
          <p>{project.description}</p>
          <p><strong>Tech Stacks:</strong> {project.techStacks.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>B.Tech. | NIT Rourkela</p>
      <p>Final Year, Civil Engg.</p>
      <p>DOB: 27 OCT 2001</p>
      <p>Contact: +91‐8480774879</p>
      <p>Email: nikhilranjanmurmu75@gmail.com</p>
    </footer>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Skills />
      <WorkExperience />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
