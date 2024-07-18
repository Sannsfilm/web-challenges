import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, seitIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    console.log("Update Product", productData);

    const response = await fetch(`api/products/{id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`api/products/${id}`, {
      method: `DELETE`,
    });
    if (response.ok) {
      router.push("/");
      return;
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <button
        type="button"
        onClick={() => {
          seitIsEditMode(!isEditMode);
        }}
      >
        <span role="img" aria-label="A pencil">
          ✏️
        </span>
      </button>
      <button onClick={handleDeleteProduct} disabled={isEditMode}>
        <span role="img" aria-label="A cross indicating deletion">
          ❌
        </span>
      </button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEdit}
          value={data.Product}
          isEditMode={true}
        />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
