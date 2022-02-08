import { createContext, useState } from 'react'
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep'
import { EnterNameStep } from '../components/steps/EnterNameStep'
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep'
import { TwitterStep } from '../components/steps/TwitterStep'
import { WelcomeStep } from '../components/steps/WelcomeStep'
import { EnterCodeStep } from '../components/steps/EnterCodeStep'

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,

}
type MainContextProps ={
  onNextstep: ()=>void
  step:number
}

export const  MainContext = createContext<MainContextProps>({} as MainContextProps)


const Home = () => {
  const [step, setStep]= useState<number>(0)
  // @ts-ignore
  const Step = stepsComponents[step]
  const onNextstep =()=>{
    setStep((prev)=> prev + 1)
  }
  return (
      <MainContext.Provider value={{step, onNextstep}}>
        <Step/>
      </MainContext.Provider>
  )
}

export default Home
