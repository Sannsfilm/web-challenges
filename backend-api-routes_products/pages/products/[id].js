import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: ProductDetail, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Error loading product</h1>;
  }

  if (!ProductDetail) {
    return <h1>No Product available</h1>;
  }

  return (
    <>
      <h1>Product</h1>
      <ul>
        <li>
          <h2>Name: {ProductDetail.name}</h2>
          <p>Description: {ProductDetail.description}</p>
          <p>Price: {ProductDetail.price}</p>
          <p>Currency: {ProductDetail.currency}</p>
          <p>Category: {ProductDetail.category}</p>
        </li>
      </ul>
      <Link href="/products">Back to all our products</Link>
    </>
  );
}
