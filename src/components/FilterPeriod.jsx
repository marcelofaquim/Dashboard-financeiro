import { useState } from "react";

export default function FilterPeriod({onChange }) {
    const [period, setPeriod] = useState('mes');

    const handleChange = (e) => {
        setPeriod(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="card">
            <h3>Filtrar os periodo</h3>
            <select value={period} onChange={handleChange}>
                <option value="Semana">Ultima Semana</option>
                <option value="mes">Ultimo mês</option>
            </select>
        </div>
    );
}
