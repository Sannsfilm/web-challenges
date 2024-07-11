import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AllListingPage = () => {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No data available</h1>;
  }

  return (
    <>
      <h1>Products🧡 💛 💚 💙 💜 🖤</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>currency: {product.currency}</p>
            <p>category: {product.category}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllListingPage;

// ### Create the Frontend

// You have now prepared two api routes: let's use them to display the data on two pages, an overview and a details page for our products!

// #### All Listings Page

// - Create the file `/pages/products/index.js`.

// - Import the `useSWR` hook, create a fetcher and fetch `/api/products`.

// - Map over the fetched `data` object to create a list of all products where you display their information.

// - Switch to the browser and open `/products`: you should now see a (rarely styled) list of all products.

// ✨ Great work, you've consumed your own api route to display its data in the frontend!
