import { useRouter } from 'next/router';
import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query: string) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    if (typeof q === 'string') {
      getProducts(q);
    }
  }, [q]);

  if (typeof q !== 'string') {
    return null;
  }

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
