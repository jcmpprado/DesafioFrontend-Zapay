import {Link} from 'react-router-dom';
import './index.css'

function NavBar() {
    return (
        <div className="NavBarContainer">
            <nav className="listaLancamento">
                <img src={('https://www.todoestudo.com.br/wp-content/uploads/2018/03/SpaceX-logo.jpg')} alt="logoSpaceX" width="120" />                  

                
            <Link to="/">Último Lançamento </Link>
            <Link to="/proximoslancamentos"> Próximos Lançamentos </Link>
            <Link to="/lancamentospassados"> Lançamentos Passados </Link>

              
            </nav>
        </div>
    );
}

export default NavBar;