import React from 'react';
import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo'
import styles from './ChooseAvatarStep.module.scss';
import {MainContext} from "../../../pages";
import {Avatar} from "../../avatar";


export const ChooseAvatarStep:React.FC= () => {
    let [avatarURL, setAvatarURL] = React.useState<string>('http://ecscggo.com/assets/images/users/1.jpg')
    let inputFileRef = React.useRef<HTMLInputElement>(null)
    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>)=>{
        // @ts-ignore
        const file = event.target.files[0]
        if(file){
            const imageUrl = URL.createObjectURL(file)
            setAvatarURL(imageUrl)
        }
    }
    let {onNextstep}= React.useContext(MainContext)
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Archakov Dennis!"
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar_wrapper}>
          <Avatar src={avatarURL} width={'80px'} height={'80px'}/>
        </div>
        <div className="mb-30">
          <label  htmlFor="image" className={styles.label_style + " link cup"}>
            Choose a different photo
          </label>
        </div>
        <input ref={inputFileRef} onChange={handleChangeImage} id="image"  type="file" hidden />
        <Button onClick={onNextstep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
