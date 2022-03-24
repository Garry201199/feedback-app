import React from "react";
import { Link ,NavLink} from "react-router-dom";
import Card from "../Shared/Card";

const About = ({ reverse }) => {
  return (
    <div className="container">
      <div className={reverse ? "card-form-dark" : "card-form"}>
        <h1>About This Project</h1>
        <p>
          This is about a React App to leave a feedback of product or service
        </p>
        <span>Version : 1.0.0</span>

        <h3>
          <NavLink
            to="/"
            style={{color: reverse? 'teal' : 'purple'}}
          >
            Back to home
          </NavLink>
          {/* <Link to="/">Back to home</Link> */}
        </h3>
      </div>
    </div>
  );
};

export default About;
