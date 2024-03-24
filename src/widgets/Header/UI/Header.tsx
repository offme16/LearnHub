import cls from './Header.module.scss';
import logo from '../../../shared/assets/LH-logo.svg';
import arrow from '../../../shared/assets/down_arrow.svg';
import prof_icon from '../../../shared/assets/proficon.svg';
import { NavLink } from 'react-router-dom';
import Button from 'shared/UI/Button/Button';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className={cls.header}>
            <div className={cls.header_logo}>
                <img src={logo} alt='logo'/>
                <NavLink to={'/'}><h1>LEARNHUB</h1></NavLink>
            </div>
            <div className={cls.header_navigate}>
                <NavLink to={'/'} className={cls.header_navigate__item}>ТЕСТИРОВАНИЕ</NavLink>
                <NavLink to={'/'} className={cls.header_navigate__item}>ЧАТ-БОТ</NavLink>
                <NavLink to={'/'} className={cls.header_navigate__item}>ВАКАНСИИ</NavLink>
            </div>
            {!true ? <Button>Войти</Button> :  <div className={cls.header_profile} onClick={toggleOpen}>
                <div className={cls.header_profile__img}><img src={prof_icon} alt='avatar'/></div>
                <img src={arrow} alt='arrow' className={cls.header_profile__arrow}/> 
                {isOpen && (
                        <div className={cls.header_profile__links}>
                            <div className={cls.profile_links__item}><NavLink to="/profile">Профиль</NavLink></div>
                            <div className={cls.profile_links__item}><NavLink to="/logout">Выйти</NavLink></div>
                        </div>
                    )}           
            </div>}
        </header>
)};
export default Header;