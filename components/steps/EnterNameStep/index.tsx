import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterNameStep.module.scss';
import React from 'react';
import {MainContext} from "../../../pages";

export const EnterNameStep = () => {
    let [inputValue, stInputValue]= React.useState<string>('')
    let onChangeInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
        stInputValue(event.target.value)
    }
    const btnDisabled = !inputValue
    let {onNextstep}= React.useContext(MainContext)
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={onChangeInput}
            value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button onClick={onNextstep} disabled={btnDisabled}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
