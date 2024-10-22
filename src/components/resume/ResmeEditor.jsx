import React from 'react';
import './ResumeEditor.css';

function ResumeEditor() {
  
    return (
        <div className="resume-container">
          
            <header className="resume-header">
                <h1>GUNTREDDI SIVA SANKARA VARAPRASAD</h1>
                <p>Email: sivasankaraguntreddi@gmail.com | Phone: 7569950702 | Location: Vizianagaram</p>
                <p>
                    <a href="https://github.com/siva-sankara" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                    <a href="https://siva-portfolio-nu.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a> |
                    <a href="https://linkedin.com/in/Sivasankara-_g" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </header>

            <section className="resume-section">
                <h2>Education</h2>
                <ul>
                    <li>Bachelor of Technology in Computer Science, Aditya Institute of Technology And Management (AITAM), 2020 - present, CGPA: 9.07</li>
                    <li>12th Boards, Nirmala Junior College, 2018 - 2020, CGPA: 9.82</li>
                    <li>10th Board, Sri Krishna School, 2018, CGPA: 9.8</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Skills</h2>
                <p>HTML, CSS, JavaScript, React.js (Web development), React Native (Android development), Node.js, Express, MongoDB, MySQL, Git & GitHub, C++</p>
            </section>

            <section className="resume-section">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Code-Overflow</h3>
                    <p>06/2023 - present</p>
                    <p><a href="https://stack-overflow-lac.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a></p>
                    <p>Implemented various enhancements to improve user engagement and satisfaction. Integrated AI-powered chatbot.</p>
                    <p>Technologies: HTML, CSS, JavaScript, React.js, Node.js, MongoDB</p>
                </div>
                <div className="project">
                    <h3>Shop-Ease</h3>
                    <p>12/2022 - 01/2023</p>
                    <p><a href="https://food-application-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a></p>
                    <p>Developed an E-Commerce Frontend, transforming online shopping into a seamless experience.</p>
                    <p>Technologies: HTML, CSS, JavaScript, React.js, Node.js</p>
                </div>
                <div className="project">
                    <h3>Infosys Springboard - Clone</h3>
                    <p><a href="https://myfirstreact-clone.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a></p>
                    <p>Replicated the design of the Infosys Springboard website using HTML, CSS, and React.js</p>
                </div>
            </section>

            <section className="resume-section">
                <h2>Internships</h2>
                <div className="internship">
                    <h3>Crowntail - Online</h3>
                    <p>10/2023 - 12/2023, Frontend - React.js Developer</p>
                    <p>Worked on Project Narayani, designing a visually appealing and functional website for oil products.</p>
                </div>
                <div className="internship">
                    <h3>Juvariya Technologies</h3>
                    <p>12/2023 - present, Frontend - Android Developer</p>
                    <p>Developed a React Native mobile app named FANFUN, with a focus on user experience.</p>
                </div>
            </section>

            <section className="resume-section">
                <h2>Certificates</h2>
                <ul>
                    <li>MERN Stack Training Completion Certificate from Null Classes</li>
                    <li>Completed NCC - 'C' Certificate</li>
                </ul>
            </section>

            <section className="resume-section">
                <h2>Organizations</h2>
                <p>National Cadet Corps - Engaged in training during the Army Attachment Camp - HYD, developing skills in leadership, teamwork, and discipline.</p>
            </section>
        </div>
    );
}

export default ResumeEditor;