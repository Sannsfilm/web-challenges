import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: productDetail, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Error loading product</h1>;
  }

  if (!productDetail) {
    return <h1>No Product available</h1>;
  }

  return (
    <>
      <h1>Product</h1>
      <ul>
        <li>
          <h2>Name: {productDetail.name}</h2>
          <p>Description: {productDetail.description}</p>
          <p>Price: {productDetail.price}</p>
          <p>Currency: {productDetail.currency}</p>
          <p>Category: {productDetail.category}</p>
        </li>
      </ul>
      <Link href="/products">Back to all our products</Link>
    </>
  );
}
