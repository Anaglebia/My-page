
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./styles/card.css";

interface CardProps {
    icon: IconProp;
    title: string;
    body: string;
}

const Card: React.FC<CardProps> = ({ icon, title, body }) => {
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-header">
                    <div className="card-icon">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className="card-title">{title}</div>
                </div>
                <div className="card-body">
                    <div className="card-text">{body}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
