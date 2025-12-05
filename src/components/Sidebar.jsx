export default function Sidebar({ theme, setTheme }) {
    return (
        <aside className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li>Inicio</li>
                <li>Transações</li>
                <li>Configurações</li>
            </ul>

            <div className="theme-toggle">
                <label>Tema:</label>
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                />    
            </div>
        </aside>
    );
}