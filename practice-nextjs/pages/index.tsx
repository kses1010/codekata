import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import Head from 'next/head';
import axios from '@/lib/axios';

export async function getStaticProps() {
  const res = await axios.get('/products');
  const products = res.data.results;

  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }: any) {
  return (
    <div>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <h1>Codeitmall</h1>
      <SearchForm initialValue='' />
      <ProductList products={products} />
    </div>
  );
}
