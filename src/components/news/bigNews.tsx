import React from 'react';
import s from "./bigNews.module.css"
import {NewsInfo} from "./newsInfo";
import img_23fev from "../../assets/images/23fev.jpg"

export const BigNews = () => {
    return (
        <div className={s.bigNews}>
            <div>
                <img className={s.bigNewsImg}
                    src={img_23fev}
                    width={"400px"}
                    height={"100%"}
                />
            </div>
            <div className={s.bigNewsContent}>
                <div>
                    <h2>С Днем защитника Отечества!</h2>
                    <p>Дорогие мужчины Пеленга!</p>
                    <p>Администрация, профсоюзный комитет и женская половина ОАО "Пеленг" поздравляют вас с Днем
                        защитника
                        Отечества.</p>
                </div>
                <NewsInfo hot={true}/>
            </div>
        </div>
    );
};