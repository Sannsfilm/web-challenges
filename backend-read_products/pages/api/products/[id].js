import Product from "@/db/models/product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // const product = products.find((product) => product.id === id);

  if (request.method === "GET") {
    const product = await Product.findById(id);
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
      // return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
