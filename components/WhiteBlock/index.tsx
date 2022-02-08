import clsx from 'clsx';
import styles from "./WhiteBlock.module.scss";
import React from "react";

 type PropsType = {
   className? : string
 }
export const WhiteBlock:React.FC<PropsType> = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
