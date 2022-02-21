import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import AppBar from '@components/AppBar'
import { prisma } from "app";
import Sidebar from '@components/Sidebar';
import Warehouses from '@components/Warehouses';
import { useSelector } from 'react-redux';
import { appState } from '@app/features/app';

interface Props {
  warehouses: Warehouse[]
}

const Home: NextPage<Props> = ({ warehouses }) => {

  const { sidebar } = useSelector(appState);

  return (
    <div>
      <Head>
        <title>WMS-3</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen min-w-full flex flex-col items-stretch'>
        <header><AppBar title='WMS-3' warehouses={warehouses} /></header>
        <main className='flex-1 flex flex-col items-stretch'>
          <div className='flex-1 flex flex-row items-stretch'>
            <div className={`ease-in-out transition delay-150 lg:basis-2/12 md:basis-3/12 sm:basis-11/12' ${sidebar ? 'visible' : 'hidden'}`}><Sidebar /></div>
            <div className='flex flex-col items-center justify-items-center w-full'><Warehouses warehouses={warehouses} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const warehouses = await prisma.warehouse.findMany();
  return { props: { warehouses: warehouses.map((w): Warehouse => ({ ...w, createdAt: w.createdAt.toISOString(), updatedAt: w.updatedAt.toISOString() })) } }
}
