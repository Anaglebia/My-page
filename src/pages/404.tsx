import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const NotFound: React.FC = () => {
    const navigate = useNavigate(); // Adicionado para navegação em vez de usar <a>

    useEffect(() => {
        document.title = `404 | ${INFO.main.title}`;
    }, []);

    return (
        <div className="not-found page-content">
            <NavBar active="" />
            <div className="content-wrapper">
                <div className="notfound-logo-container">
                    <div className="projects-logo">
                        <Logo width={46} />
                    </div>
                </div>
                <div className="notfound-container">
                    <div className="notfound-message">
                        <div className="notfound-title">
                            Oops! <FontAwesomeIcon icon={faFaceSadTear} />
                        </div>
                        <div className="not-found-message">
                            We can't seem to find the page you're looking for.
                            <br />
                            The requested URL "{window.location.href}" was not found on this server.
                        </div>
                        <button
                            className="not-found-link"
                            onClick={() => navigate("/")}
                        >
                            Go back to the home page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
