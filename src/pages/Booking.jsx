import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
    const { id } = useParams();
    const [form, setForm] = useState({
        start: "",
        end: "",
        travellers: 1,
    });

    function update(key, value) {
        setForm((p) => ({ ...p, [key]: value }));
    }

    function submit(e) {
        e.preventDefault();
        alert(`Booked ${id} from ${form.start} to ${form.end} for ${form.travellers} traveller(s).`);
    }

    return (
        <div className="page">
            <section className="section">
                <h2>Booking: {id}</h2>

                <form className="form" onSubmit={submit}>
                    <label>
                        Start date
                        <input className="input" type="date" value={form.start} onChange={(e) => update("start", e.target.value)} required />
                    </label>

                    <label>
                        End date
                        <input className="input" type="date" value={form.end} onChange={(e) => update("end", e.target.value)} required />
                    </label>

                    <label>
                        Travellers
                        <input className="input" type="number" min="1" value={form.travellers} onChange={(e) => update("travellers", Number(e.target.value))} />
                    </label>

                    <button className="btn" type="submit">Confirm booking</button>
                </form>
            </section>
        </div>
    );
}
