import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../app'
import { linkThunks, selectLinks } from '../app/features'
import AppBar from '../components/AppBar/AppBar'

const Home: NextPage = () => {

  const links = useSelector(selectLinks);
  const dispatch = useDispatch();

  useEffect(() => void dispatch(linkThunks.list()), [dispatch])

  return (
    <div className='min-h-screen min-w-full flex flex-col items-stretch'>
      <Head>
        <title>WMS-3</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header><AppBar title='WMS-3' /></header>
      <main className='flex-1 flex flex-col items-center justify-items-center'>{
        links.map(link => <div className='flex-auto flex items-center' key={link.id}><div className='flex flex-col'><p className='text-center text-4xl'>{link.title}</p><p className='text-center text-xl'>{link.description}</p><a className='text-center' href={link.url}>{link.url}</a></div></div>)
      }</main>
      <footer><div className='bg-slate-200 h-16 flex items-center px-4'><p>This is the footer</p></div></footer>
    </div>
  )
}

export default Home
