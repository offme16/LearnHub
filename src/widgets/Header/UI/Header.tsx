import cls from './Header.module.scss';
import logo from '../../../shared/assets/LH-logo.svg';
import arrow from '../../../shared/assets/down_arrow.svg';
import prof_icon from '../../../shared/assets/proficon.svg';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Button from 'shared/UI/Button/Button';
import { useRef, useState } from 'react';
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { getAuth } from 'entities/User';


const Header = () => {
    const isAuth = useSelector(getAuth);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const id = 1;

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const btnRef = useRef<HTMLDivElement>(null);

    const selectRef = useOutsideClick<HTMLDivElement>(() => {
        setIsOpen(false)
    },[btnRef?.current])

    return (
        <header className={cls.header}>
            <div className={cls.header_logo}>
                <img src={logo} alt='logo'/>
                <NavLink to={'/'}><h1>LEARNHUB</h1></NavLink>
            </div>
            <div className={cls.header_navigate}>
                <NavLink to={`/tasks`} className={cls.header_navigate__item}>ТЕСТИРОВАНИЕ</NavLink>
                <NavLink to={'/'} className={cls.header_navigate__item}>ЧАТ-БОТ</NavLink>
                <NavLink to={'/'} className={cls.header_navigate__item}>ВАКАНСИИ</NavLink>
            </div>
            {!isAuth ? <Button onClick={() => navigate('/login')}>Войти</Button>
                   : <div ref={btnRef} className={cls.header_profile} onClick={toggleOpen}>
                <div className={cls.header_profile__img}><img src={prof_icon} alt='avatar'/></div>
                <img src={arrow} alt='arrow' className={cls.header_profile__arrow}/> 
                {isOpen && (
                        <div className={cls.header_profile__links} ref={selectRef}>
                            <div className={cls.profile_links__item}><NavLink to= {`/profile/${id}`}>Профиль</NavLink></div>
                            <div className={cls.profile_links__item}><NavLink to="/logout">Выйти</NavLink></div>
                        </div>
                    )}           
            </div>}
        </header>
)};
export default Header;