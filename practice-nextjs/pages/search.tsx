import SearchForm from '@/components/SearchForm';
import ProductList from '@/components/ProductList';
import axios from '@/lib/axios';

export async function getServerSideProps(context: any) {
  const q = context.query['q'];

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results ?? [];

  return {
    props: {
      q,
      products,
    },
  };
}

export default function Search({ q, products }: any) {
  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
