import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags((tags) => [...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  }

  // function handleAddTag(newTag) {
  //   setTags([{ id: uid(), ...newTag }, ...Tags]);
  // } ??

  // function handleDeleteTag(id) {
  //   const tagToKeep = tag.filter((tag) => {
  //     return tag.id !== id;
  //   });

  return (
    <main className="app">
      <Form handleAddTag={handleAddTag} />
      <List handleDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}
