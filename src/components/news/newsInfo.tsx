import React from 'react';
import s from "./newsInfo.module.css";
import views from "../../assets/images/views.svg"
import comment from "../../assets/images/comment.svg"
import pin from "../../assets/images/pin.svg"
import hot from "../../assets/images/hot.svg"

type NewsInfoPropsType = {
    hot?: boolean
    pin?: boolean
}

export const NewsInfo = (props: NewsInfoPropsType) => {
    return (
        <div className={s.lowBlock}>
            <div className={s.newsInfo}>
                <span>16.06.2024</span>
                <img src={views} width={"15px"} height={"15px"}/>
                <span>1321</span>
                <img src={comment} width={"15px"} height={"15px"}/>
                <span>2</span>
            </div>
            {props.hot && <img src={hot} width={"15px"} height={"15px"}/>}
            {props.pin && <img src={pin} width={"15px"} height={"15px"}/>}
        </div>
    );
};