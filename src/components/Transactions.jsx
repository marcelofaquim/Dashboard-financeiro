import { transactions } from '../data/transaction';


function filterByPeriod(list, period) {
    const now = new Date();
    return list.filter((t) => {
        const date = new Date(t.data);
        if(period === 'semana') {
            const diff = (now - date) /(100 * 60 * 60 * 24);
            return diff <=7;
        }
        if (period === 'mes') {
            const diff = (now - date) /(100 * 60 * 60 * 24);
            return diff <=30;
        }
        return true;
        });
    }


export default function Transaction({ period }) {
    const filtered = filterByPeriod(transactions, period);

    return(
        <div className="card">
            <h3>Transações</h3>
            <div className="transactions-list">
                {transactions.slice(0, 5).map((t, i) => (
                    <div className="tx-item" key={i}>
                        <div className="tx-left">
                            <span className="tx-cat">{t.categoria}</span>
                            <span className="tx-desc">{t.descricao}</span>
                        </div>
                            <div className="tx-value">R$ {t.valor.toFixed(2)}</div>
                        </div>
                ))}
            </div>
            <div className="actions">
                <span className="badge">{filtered.length} transações</span>
                <a className="link" href="#">Ver tudo</a>
            </div>
        </div>
    );
}