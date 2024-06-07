import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags((tags) => [...tags, newTag]);
  }

  //   Fungsi ini menerima newTag sebagai argumen.
  // Menggunakan fungsi pembaruan state setTags dengan callback (tags) => [...tags, newTag].
  // Callback ini mengambil array tags yang ada, lalu mengembalikan array baru yang berisi semua tag yang ada plus newTag.
  // Dengan kata lain, fungsi ini menambahkan newTag ke akhir array tags.

  function handleDeleteTag(tagToDelete) {
    setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  }

  //   Fungsi ini menerima tagToDelete sebagai argumen.
  // Menggunakan setTags dengan callback tags.filter((tag) => tag !== tagToDelete).
  // Callback filter membuat array baru yang hanya berisi tag yang tidak sama dengan tagToDelete.
  // Dengan kata lain, fungsi ini menghapus tagToDelete dari array tags.

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
