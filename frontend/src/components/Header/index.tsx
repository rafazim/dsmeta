import icon from '../../assets/img/Logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/rafazim"> Rafael Zim</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
