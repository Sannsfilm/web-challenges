import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">About Me Wikipedia</h2>
      <label htmlFor="inputField">Hello is hello</label>
      <input type="text" id="inputField" />
      <a
        className="article__link"
        href="https://en.m.wikipedia.org/wiki/Wikipedia"
      >
        Wikipedia
      </a>
    </article>
  );
}

// an <article> as a wrapper HTML element with the class article
// an <h2> with the class article__title and a text of your choice
// a <label> and <input> tag connected with id and htmlFor (!) attributes
// an <a> tag with the class article__link as well as text content and href attribute of your choice (What about a Wikipedia article?)
