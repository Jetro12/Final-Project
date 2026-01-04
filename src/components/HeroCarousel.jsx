import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        id: "indonesia",
        title: "INDONESIA",
        subtitle: "Breathtaking islands & volcano views",
        hero: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbs: [
            "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    {
        id: "thailand",
        title: "THAILAND",
        subtitle: "Temples, beaches, and street food",
        hero: "https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbs: [
            "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/615327/pexels-photo-615327.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    {
        id: "bali",
        title: "BALI",
        subtitle: "Turquoise waters & calm escapes",
        hero: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1600",
        thumbs: [
            "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
];

export default function HeroCarousel() {
    const [index, setIndex] = useState(0);
    const slide = slides[index];
    const dots = useMemo(() => slides.map((s) => s.id), []);

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="roamerHeroStage">
            <div className="roamerHeroCard">
                <div className="roamerTopbar">
                    <div className="roamerBrand">
                        <span className="roamerBrandMark">➤</span>
                        <span>Roamer</span>
                    </div>

                    <div className="roamerLinks">
                        <Link to="/" className="roamerLink">Home</Link>
                        <Link to="/destinations" className="roamerLink">Destinations</Link>
                        <Link to="/booking/indonesia" className="roamerLink">Booking</Link>
                        <Link to="/auth" className="roamerLink roamerLinkPill">Sign in</Link>
                    </div>
                </div>

                <div className="roamerMain" style={{ backgroundImage: `url(${slide.hero})` }}>
                    <div className="roamerOverlay" />

                    <div className="roamerLeft">
                        <div className="roamerKicker">Explore the world</div>
                        <div className="roamerTitle">{slide.title}</div>
                        <div className="roamerSub">{slide.subtitle}</div>

                        <div className="roamerActions">
                            <Link className="roamerBtn" to="/destinations">Explore</Link>
                            <button type="button" className="roamerBtn ghost" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
                                Next
                            </button>
                        </div>

                        <div className="roamerDots">
                            {dots.map((d, i) => (
                                <button
                                    key={d}
                                    type="button"
                                    className={`roamerDot ${i === index ? "active" : ""}`}
                                    onClick={() => setIndex(i)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="roamerRight">
                        {slide.thumbs.map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                className={`roamerThumb t${i + 1}`}
                                onClick={() => setIndex((index + 1) % slides.length)}
                            >
                                <img src={src} alt="preview" />
                                <div className="roamerPlay">▶</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
