import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const products = getAllProducts();
    response.status(200).json(products);
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}
