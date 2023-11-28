import Link from 'next/link';
import styles from '@/styles/ProductList.module.css';
import { ProductType } from '@/pages/items/[id]';
import Image from 'next/image';

interface Props {
  products: ProductType[];
}

export default function ProductList({ products = [] }: Props) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/items/${product.id}`}>
            <div className={styles.image}>
              <Image
                fill
                src={product.imgUrl}
                alt={product.name}
              />
            </div>
            <span className={styles.productName}>{product.name}</span>
            <br />
            {product.price}원
          </Link>
        </li>
      ))}
    </ul>
  );
}
