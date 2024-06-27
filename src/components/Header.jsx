import meliLogo from '../assets/Logo_ML.png';
import searchIcon from '../assets/ic_Search.png';

export const Header = () => {
  return (
    <header className='nav-header'>
        <div className="nav-header__container">
            <div className="nav-header__logo">
                <a href="/"><img src={meliLogo} alt="Mercado Libre Colombia - Donde comprar y vender de todo" /></a>
            </div>
            <div className="nav-header__search">
                <form>
                    <input type="text" name="header-search" id="header-search" placeholder='Nunca dejes de buscar' autoComplete='off' />
                    <button type="button"><img src={searchIcon} alt="search icon" /></button>
                </form>
            </div>
        </div>
    </header>
  )
}
