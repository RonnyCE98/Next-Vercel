
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
export default function Home() {
  return (
    /**Aqui van loss hijoos */
        <MainLayout>
          {/**Se coloca asi ya que pertenece al 'tittle' pertenece a un css  global */}
        <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>
          {/*Ir a <a href="/about">About</a>*/}
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
        </MainLayout>
  )
}
