import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container" id="achievements">
      <div className="career-container">
        <h2>
          My <span>Achievements &</span>
          <br /> Hackathons
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitor - CodeClash 2.0</h4>
                <h5>Guru Gobind Singh Indraprastha Univ.</h5>
              </div>
              <h3>Nov 2025</h3>
            </div>
            <p>
              Competed in the CodeClash 2.0 coding challenge, demonstrating proficiency in algorithmic problem solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Participant - Claude Solve-A-Thon</h4>
                <h5>IIIT Nagpur</h5>
              </div>
              <h3>Oct 2025</h3>
            </div>
            <p>
              Participated as “Team 404 Squad” in the national-level AI hackathon organized by IIIT Nagpur.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1st Place - Web Dev Hackathon</h4>
                <h5>Sir M. Visvesvaraya Institute of Tech</h5>
              </div>
              <h3>March 2025</h3>
            </div>
            <p>
              Secured 1st place as “Team 404 Squad” by architecting and deploying a full-fledged social awareness platform.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finalist - FedEx SMART Hackathon</h4>
                <h5>IIT Madras</h5>
              </div>
              <h3>Jan 2025</h3>
            </div>
            <p>
              Selected as a Finalist for developing an innovative “Green Routing” solution to reduce logistics carbon footprint.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;
