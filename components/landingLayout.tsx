
import Head from 'next/head'
import { ReactNode } from 'react'


type Props = {
  children?: ReactNode
}
export default function LandingLayout({children}:Props){
  return(
    <div className='c-page-wrapper'>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu"/>
        <title>Icekraks Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='c-page-wrapper__main'>
        {children}
      </main>
    </div>
  )
}