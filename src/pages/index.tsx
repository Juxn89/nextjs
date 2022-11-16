import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '@components/layouts';

export const HomePage: NextPage = () => {
  return (
    <Layout title='List of pokemons'>
      <Button color='success'>
        Hello World :)
      </Button>        
    </Layout>
  )
}

export default HomePage;
