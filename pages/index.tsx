import type { NextPage } from 'next'
import Head from 'next/head'
import AppBar from '../components/AppBar/AppBar'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen min-w-full flex flex-col items-stretch'>
      <Head>
        <title>WMS-3</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header><AppBar title='WMS-3' /></header>
      <main className='flex-1 flex flex-row items-center justify-items-center'><div className='flex-auto'><p className='text-center'>This is the main content</p></div></main>
      <footer><div className='bg-slate-200 h-16 flex items-center px-4'><p>This is the footer</p></div></footer>
    </div>
  )
}

export default Home
