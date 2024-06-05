import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌Banana", color: "yellow" },
    { id: 1, name: "🥭 Mango", color: "green" },
    { id: 2, name: "🍉 Watermelon", color: "red" },
    { id: 3, name: "🫐 Blueberries", color: "blue" },
    { id: 4, name: "🍍 Pineapple", color: "orange" },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </li>
        );
      })}
    </ul>
  );
}
