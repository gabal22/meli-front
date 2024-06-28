import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import meliLogo from '../assets/Logo_ML.png';
import searchIcon from '../assets/ic_Search.png';

export const Header = () => {
    const [ value, setValue ] = useState('')
    const navigateTo = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        navigateTo(`/items?search=${value}`);
    }


  return (
    <header className='nav-header'>
        <div className="nav-header__container">
            <div className="nav-header__logo">
                <a href="/"><img src={meliLogo} alt="Mercado Libre Colombia - Donde comprar y vender de todo" /></a>
            </div>
            <div className="nav-header__search">
                <form onSubmit={handleSearch}>
                    <input type="text"
                           name="header-search"
                           id="header-search"
                           placeholder='Nunca dejes de buscar'
                           aria-label="Nunca dejes de buscar"
                           autoComplete='off'
                           onChange={(e) => setValue(e.target.value)} />
                    <button type="submit"><img src={searchIcon} alt="search icon" /></button>
                </form>
            </div>
        </div>
    </header>
  )
}
