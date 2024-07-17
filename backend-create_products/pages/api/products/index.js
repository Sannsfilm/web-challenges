import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  // handle the GET request - - READ
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  // handle the "POST" request - - CREATE

  if (request.method === "POST") {
    try {
      const productData = request.body;

      // erstelle einen neuen product in der Datenbank

      await Product.create(productData);

      console.log("THE BODY", productData);

      response.status(201).json({ status: "Product created!" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
