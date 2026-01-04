// src/components/DestinationCard.jsx
import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
    return (
        <div className="card">
            <div className="cardMedia">
                <img src={destination.image} alt={`${destination.name}`} />
            </div>

            <div className="cardBody">
                <div className="cardTitle">
                    {destination.name} <span className="muted" style={{ fontWeight: 700 }}>· {destination.country}</span>
                </div>

                <div className="pillRow">
                    <span className="pill">{destination.region}</span>
                    <span className="pill">From £{destination.fromPrice}</span>
                </div>

                <Link className="btn" to={`/booking/${destination.id}`}>Book</Link>
            </div>
        </div>
    );
}
