import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const AllRandomCharacter = () => {
  const { data, isLoading } = useSWR("api/random-character/", fetcher);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!data) {
    return <h1>No data available</h1>;
  }

  return (
    <>
      <h1>
        Random character
        <p>fistName: {data.firstname}</p>
        <p>lastName: {data.lastName}</p>
        <p>twitter: {data.twitter}</p>
        <p>geohash: {data.geohash}</p>
      </h1>
    </>
  );
};

export default AllRandomCharacter;
