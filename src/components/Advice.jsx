import { useMemo } from 'react';
import { transactions } from '../data/transactions.js';

function getAdvice(list) {
  const totals = list.reduce((acc, t) => {
    acc[t.categoria] = (acc[t.categoria] || 0) + t.valor;
    return acc;
  }, {});

  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const [topCat, topVal] = entries[0] || ['-', 0];

  // Sugestões simples baseadas em categoria líder
  let tips = [];
  if (topCat === 'Contas') {
    tips = [
      'Renegocie planos de internet e telefonia.',
      'Troque lâmpadas por LED e monitore consumo de energia.',
      'Desative serviços que você não usa (streamings, seguros extras).',
    ];
  } else if (topCat === 'Alimentação') {
    tips = [
      'Defina um teto semanal para restaurantes.',
      'Planeje refeições e cozinhe em casa 3x por semana.',
      'Evite delivery em dias úteis, concentre em finais de semana.',
    ];
  } else if (topCat === 'Supermercado') {
    tips = [
      'Compre itens não perecíveis em atacado.',
      'Use lista e cumpra o orçamento por visita.',
      'Compare preços em apps antes de ir.',
    ];
  } else if (topCat === 'Lazer') {
    tips = [
      'Priorize eventos gratuitos na cidade.',
      'Troque passeios caros por parques/feiras locais.',
      'Estabeleça um limite mensal fixo para lazer.',
    ];
  } else {
    tips = [
      'Revise sua categoria principal e estabeleça metas mensais.',
      'Acompanhe o gasto semanalmente para não estourar o orçamento.',
      'Use um método 50/30/20 para distribuir renda.',
    ];
  }

  const reduction = Math.round(topVal * 0.15);
  return { topCat, topVal, tips, reduction };
}

export default function Advice() {
  const { topCat, tips, reduction } = useMemo(() => getAdvice(transactions), []);

  return (
    <div className="card advice">
      <h3>Como economizar</h3>
      <p>
        Categoria com maior gasto: <strong>{topCat}</strong>. Se você reduzir ~15% nessa categoria,
        pode economizar cerca de <strong>R$ {reduction.toFixed(2)}</strong> por mês.
      </p>
      <ul>
        {tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <p className="summary-meta">
        Dica rápida: monitore semanalmente e ajuste metas conforme o resultado.
      </p>
    </div>
  );
}

