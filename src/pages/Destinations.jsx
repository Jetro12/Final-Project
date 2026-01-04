import { useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard";

const destinations = [
    { id: "bali", name: "Bali", country: "Indonesia", region: "Asia", video: "/videos/bali.mp4" },
    { id: "paris", name: "Paris", country: "France", region: "Europe", video: "/videos/paris.mp4" },
    { id: "tokyo", name: "Tokyo", country: "Japan", region: "Asia", video: "/videos/tokyo.mp4" },
    { id: "cairo", name: "Cairo", country: "Egypt", region: "Africa", video: "/videos/cairo.mp4" },
];

export default function Destinations() {
    const [q, setQ] = useState("");
    const [region, setRegion] = useState("All");

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return destinations.filter((d) => {
            const matchesQuery =
                !query ||
                d.name.toLowerCase().includes(query) ||
                d.country.toLowerCase().includes(query);
            const matchesRegion = region === "All" || d.region === region;
            return matchesQuery && matchesRegion;
        });
    }, [q, region]);

    return (
        <div className="page">
            <section className="section">
                <h2>Find your next trip</h2>

                <div className="toolbar">
                    <input
                        className="input"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search destination or country…"
                    />
                    <select className="input" value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option>All</option>
                        <option>Europe</option>
                        <option>Asia</option>
                        <option>Africa</option>
                        <option>Americas</option>
                    </select>
                </div>

                <div className="grid3">
                    {filtered.map((d) => <DestinationCard key={d.id} destination={d} />)}
                </div>

                {filtered.length === 0 && (
                    <p className="muted" style={{ marginTop: 16 }}>
                        No destinations found. Try a different search.
                    </p>
                )}
            </section>
        </div>
    );
}
