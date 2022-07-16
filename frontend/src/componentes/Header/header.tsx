import logo from '../../assets/img/logo.svg'
import './style.css'

function Header(){
    return(
        <header>
        <div className="header-banner-ds">
            <img src={logo} alt="banner"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por<a href="https://github.com/lkportal" target="_blank">@LkPortal</a>
            </p>
        </div>
    </header>

    )
}

 export default Header