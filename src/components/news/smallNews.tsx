import React from 'react';
import s from "./smallNews.module.css"
import {NewsInfo} from "./newsInfo";

type SmallNewsPropsType = {
    text: string
    imgLink: string
}

export const SmallNews = (props: SmallNewsPropsType) => {
    return (
        <div className={s.smallNews}>
            <div>
                <img className={s.smallNewsPicture} src={props.imgLink}/>
            </div>
            <div className={s.newsContent}>
                <p>{props.text}</p>
                <NewsInfo pin={true}/>
            </div>
        </div>
    );
};