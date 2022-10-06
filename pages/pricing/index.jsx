import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  /**Aqui van loss hijoos */
  return (
    <MainLayout>
        <h2>Pricing-Page</h2>
        <h1 className={'title'}>
          {/*Ir a <a href="/">Home</a>*/}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact/index.jsx</code>
        </p>
    </MainLayout>
  )
}