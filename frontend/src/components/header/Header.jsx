import React from "react";
import "./Header.css";
import {useNavigate} from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/cart");
  }

  return (
    <div className="header">
        <div><h3>Auth APP</h3></div>
        <div>
          <button onClick={handleClick}>cart</button>
        </div>
    </div>
  );
};

export default Header;
