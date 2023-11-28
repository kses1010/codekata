import axios from '@/lib/axios';
import SizeReviewList, { SizeReview } from '@/components/SizeReviewList';
import Image from 'next/image';
import styles from '@/styles/Product.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

export type ProductType = {
  id: number,
  name: string,
  imgUrl: string,
  price: number,
}

export async function getServerSideProps(context: any) {
  const productId = context.params['id'];
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/size_reviews/?product_id=${productId}`);
  const sizeReviews = res.data.results ?? [];

  return {
    props: {
      product,
      sizeReviews,
    },
  };
}

export default function Product({ product, sizeReviews: initialSizeReviews }: any) {
  const [sizeReviews, setSizeReviews] = useState<SizeReview[]>(initialSizeReviews);
  const [formValue, setFormValue] = useState({
    size: 'M',
    sex: 'male',
    height: 173,
    fit: 'good',
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const sizeReview = {
      ...formValue,
      productId: product.id
    };
    const res = await axios.post('/size_reviews/', sizeReview);
    const newSizeReview = res.data;
    setSizeReviews((prevSizeReviews) => [
      newSizeReview,
      ...prevSizeReviews
    ]);
  }

  async function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  async function handleChange(name: string, value: string) {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  if (!product) return null; // 로딩화면

  return (
    <div>
      <h1>{product.name}</h1>
      <div className={styles.image}>
        <Image fill src={product.imgUrl} alt={product.name} />
      </div>
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
