import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from '@/lib/axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get('/products');
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

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
