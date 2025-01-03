import React from "react";
import { Link } from "react-router-dom";
import Bia from '../../assets/bia.jpeg.jpg';

// import INFO from "../../data/user";

import "./styles/logo.css";


interface LogoProps {
    width: number;
    link?: boolean; 
}

const Logo: React.FC<LogoProps> = ({ width, link = true }) => {
    const imageElement = (
        <img src={Bia} alt="logo" className="logo" width={width} />
        // <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
    );

    return <>{link ? <Link to="/">{imageElement}</Link> : imageElement}</>;
};

export default Logo;
