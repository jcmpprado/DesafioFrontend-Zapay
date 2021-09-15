import Routes from "../Routes/routes";
import './index.css'

function NavBar() {
    return (
        <div className="NavBarContainer">
            <nav className="listaLancamento">
                <img src={('https://www.todoestudo.com.br/wp-content/uploads/2018/03/SpaceX-logo.jpg')} alt="logoSpaceX" width="120" />
                <Routes />
            </nav>
        </div>
    );
}

export default NavBar;