import { transactions } from '../data/transaction';

export default function Transaction() {
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
                <span className="badge">5 mais recentes</span>
                <a className="link" href="#">Ver tudo</a>
            </div>
        </div>
    );
}