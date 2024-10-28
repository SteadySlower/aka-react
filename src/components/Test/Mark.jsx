import React from 'react';
import {
    TbCircleNumber1,
    TbCircleNumber1Filled,
    TbCircleNumber2,
    TbCircleNumber2Filled,
    TbCircleNumber3,
    TbCircleNumber3Filled,
    TbCircleNumber4,
    TbCircleNumber4Filled,
} from "react-icons/tb";
import style from "./DoTest.module.scss"

function Mark({ number, isSelected, color }) {
    switch (number) {
        case 1:
            return isSelected ? (
                <TbCircleNumber1Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber1 className={style.circle} style={color && {"color": color}} />
            );
        case 2:
            return isSelected ? (
                <TbCircleNumber2Filled className={style.circleChosen} />
            ) : (
                <TbCircleNumber2 className={style.circle} style={color && {"color": color}} />
            );
        case 3:
            return isSelected ? (
                <TbCircleNumber3Filled className={style.circleChosen} style={color && {"color": color}} />
            ) : (
                <TbCircleNumber3 className={style.circle} style={color && {"color": color}} />
            );
        case 4:
            return isSelected ? (
                <TbCircleNumber4Filled className={style.circleChosen} style={color && {"color": color}} />
            ) : (
                <TbCircleNumber4 className={style.circle} style={color && {"color": color}} />
            );
        default:
            return isSelected ? (
                <TbCircleNumber1Filled className={style.circleChosen} style={color && {"color": color}} />
            ) : (
                <TbCircleNumber1Filled className={style.circle} style={color && {"color": color}} />
            );
    }
}

export default Mark;