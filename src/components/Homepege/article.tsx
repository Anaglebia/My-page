import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

// Tipando as propriedades do componente
interface ArticleProps {
    title: string;
    description: string;
    date: string;
    link: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, date, link }) => {
    return (
        <div className="homepage-article">
            <div className="homepage-article-content">
                <div className="homepage-article-date">
                    |&nbsp;&nbsp;&nbsp;{date}
                </div>
                <div className="homepage-article-title">{title}</div>
                <div className="homepage-article-description">
                    {description}
                </div>
                <div className="homepage-article-link">
                    <Link to={link}>
                        Read article{" "}
                        <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faChevronRight}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Article;
