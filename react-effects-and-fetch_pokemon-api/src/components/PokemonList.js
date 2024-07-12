import { useEffect } from "react";

function MyComponent({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]); // This effect runs only when `title` changes

  return <div>{title}</div>;
}
