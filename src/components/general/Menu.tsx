import React from 'react'
import s from "./Menu.module.css"
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
            <nav className={s.mainMenu}>
                <div className={s.menuContainer}>
                    <div className={s.item}>
                        <NavLink to={'/profile'}>
                            ГЛАВНАЯ</NavLink>
                        <div className={s.bugerMenu}>
                            <div className={s.bugerMenuSecondary}>
                                Новости
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
                </div>
            </nav>
    );
};