import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hallo</Button>
      <Button>Please</Button>
      <Button>Clicked</Button>
      <Button>Me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

// For now, there is a Button component in the ./src/App.js which is rendered several times.

// Unfortunately, all buttons show the same text; supposing that different buttons do different things in an application, this is not really a reuseable component.

// Let's use the children prop to make the component more flexible!

// Task
// Switch to the ./src/App.js file and

// in the Button component, receive the children prop as parameter; make sure to destructure it.
// replace the "Click me!" text with the children prop (don't forget the curly braces {}).
// in the App component, change the Button elements from being self-closing to have an opening and closing tag.
// add text of your choice between the opening and closing tags of the Button elements (use different texts to see any difference in the browser!)
// 🎉 Congratulations, you can now use the children prop to create really flexible components!
