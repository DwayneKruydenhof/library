"use client";

import React from 'react';
import Image from 'next/image';
import profilePic from '../../../assets/profile-pic.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="profile">
        <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
        <div className="profile-text">
          <h2>Application</h2>
          <p>
            The Magic Library application allows users to search for and view details about various books. It&apos;s built using modern web technologies including Next.js, React, and Ant Design.
          </p>
          <h2>Developer</h2>
          <p>
            This application was developed by a passionate Junior Front-End Developer who is eager to learn and improve. They&apos;re skilled in various technologies and have a keen interest in every facet of development and ICT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
