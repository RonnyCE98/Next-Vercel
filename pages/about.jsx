import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    /**Aqui van loss hijoos */
        <MainLayout>
          {/**Layout anidado */}
          <DarkLayout>
            <h2>About-Page</h2>
            <h1 className={'title'}>
              {/*Ir a <a href="/">Home</a>*/}
              Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
              Get started by editing{' '}
              <code className={'code'}>pages/about.jsx</code>
            </p>
          </DarkLayout>
        </MainLayout>       
  )
}
