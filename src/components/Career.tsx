import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Application (MCA)</h4>
                <h5>Dayananda Sagar College of Engineering</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Currently pursuing MCA (CGPA: 9.15).
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>K.K Wagh Computer Science College</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Completed BCA (CGPA: 8.56). Built strong fundamentals in Software Engineering, OOP, DSA, and DBMS.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate (12th)</h4>
                <h5>Gokhale Education Society</h5>
              </div>
              <h3>2019 - 2021</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate with 80%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
