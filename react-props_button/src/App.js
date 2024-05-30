import React from "react";
import "./styles.css";

export default function App() {
  return ( 
    <button>
    <ButtonElement
      color = {"red"}
      disabled = {}
      text = {}
    />
    </button>
  );
}

export function ButtonElement(color, disabled, text) {
return (
<button onClick={text} style={{height: "100px"}}>
{color}
{disabled}
{text}

</button>
);
}







// Tasks
// 1. A Simple Button Component
// Look at the ./src/App.js file: the App component returns a default heading element that you need to replace with a custom component.

// Your task is to write a Button component which takes three props color, disabled, and text and renders a button with the given color, text and disabled state.

// You can use the following hints as guideline:

// Write a Button component inside of the src/App.js.

// It accepts three props: color, disabled, and text (make sure to destructure them).
// It returns an HTML button element which
// renders its text according to the text prop,
// has its disabled attribute set according to the disabled prop, and
// uses the color prop to set the text color of the button
// 💡 Note: use inline styling with the help of the style attribute: style={{height: "100px"}}

// 💡 Additional hint: If you want to set the background color via a prop, you need to use camelCase backgroundColor instead of kebab-case background-color.

// Inside of the return statement of your App component, replace the heading with your Button component and pass it the props as you wish.
// 🎉 Congratulations, you have created a very flexible button component!

// However, clicking a button without anything happening is pretty useless, right? Let's fix that!


