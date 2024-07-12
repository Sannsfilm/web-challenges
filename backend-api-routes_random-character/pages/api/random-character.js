import Chance from "chance";

const chance = new Chance();
export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  if (request.method === "GET") {
    response.status(200).json(character);
  }
}

//    const { data , isLoading } = useSWR("chancejs.com/web/`${fistName}/{lastName}`", fetcher);

// if (isLoading) {
//     return <h1>Loading...</h1>;
//    }

//    if (!data) {
//     return <h1>No data available</h1>
//    }
//   };
