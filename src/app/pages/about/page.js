import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h3>About Me</h3>
        <p>
          I'm a junior software engineer with a deep passion for every facet of development and ICT. My journey in the tech world has been driven by curiosity and a relentless pursuit of knowledge.
        </p>

        <h3>About This Application</h3>
        <p>
          Welcome to my Books Search Application! This project uses the Open Library API to allow users to search for books based on titles or keywords. It's built using Next.js, incorporating the Ant Design component library for a polished user interface. The application features a Home Screen with a search bar for easy navigation, displaying search results in a table format with pagination. Users can explore detailed book information, including titles, authors, publication dates, descriptions, and cover images, on the Book Details Screen.
        </p>

        <h3>Tech Stack</h3>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>Ant Design</li>
          <li>Axios</li>
          <li>Redux</li>
        </ul>
        
        <h3>Deployment</h3>
        <p>
          This application is hosted on GitHub and deployed on Vercel
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
