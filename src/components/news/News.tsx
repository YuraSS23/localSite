import React from 'react';
import {BigNews} from "./bigNews";
import {SmallNews} from "./smallNews";
import s from "./news.module.css"
import int_img from "../../assets/images/preview_int_bitva600х400.jpg"
import olimp_img from "../../assets/images/preview_olimp.jpg"
import rules_img from "../../assets/images/prev_b24_pravila.png"
import rect_img from "../../assets/images/rect11169.jpg"
import {NavLink} from "react-router-dom";


export const News = () => {
    return (
        <div className={s.news}>
            <BigNews/>
            <div className={s.smallNews}>
                <SmallNews text={"Интеллектуальная битва Пеленга 2024"}
                           imgLink={int_img}/>
                <SmallNews text={"Правила работы в Битрикс24"}
                           imgLink={rules_img}/>
                <SmallNews text={"Первая олимпиада БГУИР-Пеленг"}
                           imgLink={olimp_img}/>
                <SmallNews text={"Сотрудник года 2023 - победители"}
                           imgLink={rect_img}/>
            </div>
        </div>
    );
};