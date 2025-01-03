
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './articles.css';


interface ArticleProps {
    date: string;
    title: string;
    description: string;
    link: string;
}

const Article: React.FC<ArticleProps> = ({ date, title, description, link }) => {
    return (
        <div className="article">
            <div className="article-left-side">
                <div className="article-date">{date}</div>
            </div>

            <Link to={link}>
                <div className="article-right-side">
                    <div className="article-title">{title}</div>
                    <div className="article-description">{description}</div>
                    <div className="article-link">
                        Read Article{" "}
                        <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faChevronRight}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Article;
