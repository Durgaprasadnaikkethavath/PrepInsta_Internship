import React, { useState } from "react";
import "./UploadNovel.css";

const UploadNovelForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, genre, summary, imageURL });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Upload Your Novel</h1>
      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author: </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Genre: </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Summary: </label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="upload_btn">
        Upload Novel
      </button>
    </form>
  );
};

export default UploadNovelForm;
