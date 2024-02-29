import React, {useState} from 'react';
import s from "./Header.module.css"
import peleng from "../../assets/images/peleng.svg"
import menuIcon from "../../assets/images/free-icon-menu-4254068.png";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const [isVisible,setIsVisible] = useState(false)
    return (
        <div className={s.header}>
            <img className={s.logo} src={peleng}/>
            <nav className={s.mobileMenuPicture} onClick={() => setIsVisible(true)}>
                <img src={menuIcon} width={"50px"} height={"50px"}/>
            </nav>
            {isVisible && <div className={s.mobileMenu}>
                <div className={s.item}>
                    <button className={"closeBtn"} onClick={() => setIsVisible(false)}>X</button>
                    <NavLink to={'/profile'}>
                        ГЛАВНАЯ</NavLink>
                    <div className={s.bugerMenu}>
                        <div className={s.bugerMenuSecondary}>
                            <a>Новости</a>
                            <div className={s.bugerMenuSecondaryItems}>
                                <a>Все новости</a>
                                <a>День качества</a>
                                <a>Видеосюжеты</a>
                                <a>Мероприятия</a>
                            </div>
                        </div>
                        <a>Опросы</a>
                        <a>Приказы и распоряжения</a>
                    </div>
                </div>
                <div className={s.item}><NavLink to={'/dialogs'}>О КОМПАНИИ</NavLink></div>
                <div className={s.item}><NavLink to={'/users'}>КАТАЛОГИ</NavLink></div>
                <div className={s.item}><NavLink to={'/news'}>СПРАВОЧНИКИ</NavLink></div>
                <div className={s.item}><NavLink to={'/music'}>СОТРУДНИКУ</NavLink></div>
            </div>}
        </div>
    );
};