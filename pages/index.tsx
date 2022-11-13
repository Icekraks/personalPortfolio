
import { useEffect, useState } from 'react';
import LandingLayout from '../components/landingLayout'
import staticInfo from './../staticInfo';
import {clsx} from 'clsx';

export default function LandingPage() {
  const [titleIndex,setTitleIndex] = useState(0);


  useEffect(()=>{
    const TimeoutComponent = setTimeout(()=>{
      const textPrint = setInterval(()=>{
        setTitleIndex((titleIndex) => {
          if(titleIndex === staticInfo.name.length){
            clearInterval(textPrint);
            return titleIndex;
          } else {
            return titleIndex + 1;
          }
        });
      },500);
    },1000)
    return ()=>{
      clearTimeout(TimeoutComponent);
    }
  },[]);

  return (
    <LandingLayout>
      <div className='c-landing-page'>
        <div className='c-landing-page__inner'>
          <h1 className={clsx(['c-landing-page__title',
          titleIndex === staticInfo.name.length?'is-gold':''])}>
            {staticInfo.name.substring(0, titleIndex)}
          </h1>
 
          <a className='c-landing-page__button o-button' href='/home'>
            Click Me
          </a>
        </div>
      </div>
    </LandingLayout>
  )
}
