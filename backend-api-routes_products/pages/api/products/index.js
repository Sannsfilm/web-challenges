import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const products = getAllProducts();
    response.status(200).json(products);
  } else {
    response.status(405).json({ message: "Method Not Allowed" });
  }
}


// ### Create the API

// #### Endpoint for All Listings

// Create an api route which returns all products.

// - Create the file structure `pages/api/products/index.js`.
// - Switch to `/api/products/index.js`; import the `getAllProducts` function from `/services/productServices.js`.
// - Write a handler function which responds
//   - with a `200` status code and
//   - with the return value of `getAllProducts`, parsed with the `.json()` method.