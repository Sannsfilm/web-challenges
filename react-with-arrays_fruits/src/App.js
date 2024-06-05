import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 Banana", color: "yellow" },
    { id: 1, name: "🥭 Mango", color: "green" },
    { id: 2, name: "🍉 Watermelon", color: "red" },
    { id: 3, name: "🫐 Blueberries", color: "blue" },
    { id: 4, name: "🍍 Pineapple", color: "orange" },
    { id: 5, name: "🥥 Coconut", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          id={fruit.id}
          name={fruit.name}
          color={fruit.color}
        />
      ))}
    </div>
  );
}
