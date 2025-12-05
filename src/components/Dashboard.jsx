import { useState } from 'react';
import SpendPie from './SpendPie.jsx';
import Transactions from './Transactions.jsx';
import FilterPeriod from './FilterPeriod.jsx';
import BalanceLine from './BalanceLine.jsx';

export default function Dashboard() {
  const [period, setPeriod] = useState('mes')

  const balance = 1234.56;
  const rendimentoMensal = 0.6; // exemplo: 0.6% no mês
  const limite = 5000; // exemplo

  return (
    <main className="main">
      <div className="grid">
        <div className="left-col">
          <div className="card">
            <h3>Resumo da conta</h3>
            <div className="summary-balance">R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            <div className="summary-meta">
              Limite: R$ {limite.toLocaleString('pt-BR')}
              &nbsp;•&nbsp; Rendimento: {rendimentoMensal}% este mês
            </div>
          </div>

          <FilterPeriod onChange={setPeriod} />
          <Transactions period={period} />
          <BalanceLine period={period} />
        </div>

        <div className="right-col">
          <SpendPie period={period}/>
          
        </div>
      </div>
    </main>
  );
}
