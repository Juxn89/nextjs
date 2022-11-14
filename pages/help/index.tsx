import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout';

const index = () => {
  return (
    <MainLayout>
      <h1>Help Page</h1>
      <h1 className={'title'}>
          Go to <Link href="/">home</Link>
      </h1>
    </MainLayout>
  )
}

export default index;