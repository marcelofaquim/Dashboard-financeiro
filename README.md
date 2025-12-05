# 📊 Dashboard Financeiro

Um mini dashboard interativo para controle de gastos pessoais, desenvolvido em **React + Vite** com **Chart.js**.  
O projeto simula um painel bancário, ideal para demonstrar habilidades de front-end em cenários como Itaú e Santander.

---

## 🚀 Funcionalidades

- **Resumo da conta**: saldo atual, limite e rendimento mensal.
- **Transações recentes**: lista filtrada por semana ou mês.
- **Gráfico de pizza**: distribuição dos gastos por categoria (Contas, Alimentação, Supermercado, Lazer, Transporte).
- **Gráfico de linha**: evolução do saldo ao longo do tempo.
- **Conselhos inteligentes**: sugestões de economia baseadas na categoria de maior gasto.
- **Dark Mode**: alternância de tema claro/escuro.
- **Responsividade**: adaptado para desktop e mobile.

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/)
- [CSS Grid/Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) para layout
- [Vercel](https://vercel.com/) para deploy

---

## 📂 Estrutura do projeto

src/ ├── components/ │ ├── Sidebar.jsx │ ├── Dashboard.jsx │ ├── Transactions.jsx │ ├── SpendPie.jsx │ ├── BalanceLine.jsx │ ├── Advice.jsx │ └── FilterPeriod.jsx ├── data/ │ └── transactions.js ├── styles/ │ └── styles.css ├── App.jsx └── main.jsx


---

## ▶️ Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dashboard-financeiro.git
   cd dashboard-financeiro

O projeto está disponível em produção via Vercel: https://vercel.com/marcelo-faquim-dos-anjos-projects/dashboard-financeiro

