import { useMemo } from 'react';
import { transactions } from '../data/transaction';
import { Pie } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

function filterByPeriod(list, period) {
  const now = new Date();
  return list.filter((t) => {
    const d = new Date(t.data);
    const diffDays = (now -d) /(1000 * 60 * 60 * 24);
    return period === 'semana' ? diffDays <= 7 : diffDays <= 30;
  })
}

function aggregateByCategory(list) {
  const map = new Map();
  for (const t of list) {
    map.set(t.categoria, (map.get(t.categoria) || 0) + t.valor);
  }
  const labels = Array.from(map.keys());
  const values = Array.from(map.values());
  return { labels, values };
}

export default function SpendPie({ period }) {
  const filtered = useMemo(() => filterByPeriod(transactions, period), [period]);
  const { labels, values } = useMemo(() => aggregateByCategory(filtered), [filtered]);

  const colors = ['#4bc0c0', '#ffcd56', '#ff6384', '#36a2eb', '#a78bfa', '#f59e0b'];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((_, i) => colors[i % colors.length]),
        borderWidth: 0,
      },
    ],
  };

  const total = values.reduce((acc, v) => acc + v, 0);
  const topIndex = values.indexOf(Math.max(...values));
  const topCategory = labels[topIndex];
  const topPercent = total ? Math.round((values[topIndex] / total) * 100) : 0;

  return (
    <div className="card">
      <h3>Gastos por categoria</h3>
      <div className="pie-wrapper">
        <Pie
          data={data}
          options={{
            plugins: {
              legend: { position: 'bottom' },
              tooltip: { enabled: true },
            },
          }}
        />
      </div>
      <p className="summary-meta">
        Maior gasto: <strong>{topCategory}</strong> ({topPercent}% do total)
      </p>
    </div>
  );
}

