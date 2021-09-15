import './index.css'
import {LanPas} from '../Pages/LanPas'

function NavBar() {
    return (
        <div className="NavBarContainer">
            <nav className="listaLancamento">
                <img src={('https://www.todoestudo.com.br/wp-content/uploads/2018/03/SpaceX-logo.jpg')} alt="logoSpaceX" width="120" />
                <ul>
                    <li><a href="../Pages/ProLan/index.js">Próximo Lançamento</a></li>
                    <li><a href="../Pages/ProsLan/index.js">Próximos Lançamentos</a></li>
                    <li><a href="../Pages/LanPas/App.js">Lançamentos Passados</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;