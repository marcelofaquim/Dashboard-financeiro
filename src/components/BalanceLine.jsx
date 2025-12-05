import { useMemo } from 'react';
import { transactions } from '../data/transaction.js';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function filterByPeriod(list, period) {
  const now = new Date();
  return list.filter((t) => {
    const d = new Date(t.data);
    const diffDays = (now - d) / (1000 * 60 * 60 * 24);
    return period === 'semana' ? diffDays <= 7 : diffDays <= 30;
  });
}

function dailySeries(list) {
  // Agrupa por dia e soma gastos, depois calcula saldo acumulado (exemplo partindo de 2000)
  const baseSaldo = 2000;
  const byDay = new Map();
  for (const t of list) {
    const key = new Date(t.data).toISOString().slice(0, 10);
    byDay.set(key, (byDay.get(key) || 0) + t.valor);
  }
  const days = Array.from(byDay.keys()).sort();
  let saldo = baseSaldo;
  const labels = [];
  const values = [];
  for (const day of days) {
    saldo -= byDay.get(day);
    labels.push(day.split('-').reverse().join('/')); // dd/mm/aaaa
    values.push(Number(saldo.toFixed(2)));
  }
  return { labels, values };
}

export default function BalanceLine({ period }) {
  const filtered = useMemo(() => filterByPeriod(transactions, period), [period]);
  const { labels, values } = useMemo(() => dailySeries(filtered), [filtered]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Saldo acumulado',
        data: values,
        borderColor: '#38bdf8',
        backgroundColor: '#38bdf877',
        tension: 0.25,
        pointRadius: 3,
      },
    ],
  };

  return (
    <div className="card">
      <h3>Evolução do saldo</h3>
      <Line
        data={data}
        options={{
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: false } },
        }}
      />
    </div>
  );
}
