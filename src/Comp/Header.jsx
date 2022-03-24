import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import MUISwitch from "./MUISwitch";
import InfoIcon from "@mui/icons-material/Info";
const Header = ({ text, bgColor, textColor, reverse, setReverse }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // boxShadow:'0 10px 10px  #FFF',
    marginBottom: "20px",
    borderRadius: " 0 0 40px 40px"
  };

  return (
    <>
      <div style={headerStyles}>
        <Toolbar>
          {" "}
          <h2 style={{ marginRight: "50px" }}>
            {" "}
            <Link style={{ color: "#960062", textDecoration: "none" }} to="/">
              {text}
            </Link>
          </h2>
          <h4
            style={{
              marginRight: "20px",
              color: "red",
              textDecoration: "none"
            }}
          >
            <Link to="/about">
              <InfoIcon fontSize="large" />{" "}
            </Link>
          </h4>
          <MUISwitch
            sx={{ boxShadow: "30px" }}
            reverse={reverse}
            setReverse={setReverse}
          />
        </Toolbar>
      </div>
    </>
  );
};

Header.defaultProps = {
  text: "feedback",
  bgColor: "#fff",
  textColor: "#960062"
};
export default Header;
