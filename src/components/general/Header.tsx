import React from 'react';
import s from "./Header.module.css"
import peleng from "../../assets/images/peleng.svg"
import "./Header.css"

export const Header = () => {
    return (
        <div className={"header"}>
            <img className={"logo"} src={peleng}/>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <li className={"mainPage"}>
                        <a className="menu__item" href="#">ГЛАВНАЯ
                            <span className={"plus"}>+</span>
                            <span className={"minus"}>-</span>
                        </a>
                        <ul className="second__menu__items">
                            <li className={"news"}>
                                <a href="#" className="menu__item">Новости
                                    <span className={"plus"}>+</span>
                                    <span className={"minus"}>-</span>
                                </a>
                                <ul className="third__menu__items">
                                <li><a href="#" className="menu__item">Все новости</a></li>
                                    <li><a href="#" className="menu__item">День качества</a></li>
                                    <li><a href="#" className="menu__item">Видеосюжеты</a></li>
                                    <li><a href="#" className="menu__item">Мероприятия</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="menu__item">Опросы</a></li>
                            <li><a href="#" className="menu__item">Приказы и распоряжения</a></li>
                        </ul>
                    </li>
                    <li><a className="menu__item" href="#">О КОМПАНИИ</a></li>
                    <li><a className="menu__item" href="#">КАТАЛОГИ</a></li>
                    <li><a className="menu__item" href="#">СПРАВОЧНИКИ</a></li>
                    <li><a className="menu__item" href="#">СОТРУДНИКУ</a></li>
                </ul>
            </div>
        </div>
    );
};