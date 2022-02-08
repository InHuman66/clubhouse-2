import React from "react";
import classes from './avatar.module.scss';
import clsx from "clsx";
import styles from "./avatar.module.scss";
import {url} from "inspector";

type propsType ={
    src: string
    width: string
    height: string
    className?: string
    isVoice?: boolean
}

export const Avatar:React.FC<propsType > = ({src, width, height, className,isVoice}) => {
    return (
        <div
            style={{width, height, backgroundImage: `url(${src})`}}
            className={clsx(styles.avatar, isVoice ? styles.avatarBorder : '', className, 'd-ib')}
        >
        </div>
    );
};