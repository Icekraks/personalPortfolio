import Head from 'next/head'
import { ReactNode } from 'react'
import FooterComponent from './globals/footerComponent'
import Navigation from './globals/navigationComponent'
import {clsx} from 'clsx';

type Props = {
  children?: ReactNode
}
export default function Layout({children}:Props){
  const randomLight = Math.random() < 0.5;

  return(
    <div className={clsx(['c-page-wrapper',!randomLight ? 'is-dark':''])}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu"/>
        <title>Icekraks Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>

      <main className='c-page-wrapper__main'>
        {children}
      </main>
      <FooterComponent/>
    </div>
  )
}