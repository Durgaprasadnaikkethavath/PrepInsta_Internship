import React, { useEffect, useState } from "react";
import UploadNovelForm from "./UploadNovelForm";
import "./App.css";

const App = () => {
  const [currentView, setCurrentViews] = useState("home");
  // const [novels, setNovels] = useState([]);
  const [selectNovel, setSelectNovel] = useState(null);

  const handleViewChanges = (view) => {
    setCurrentViews(view);
  };
  const [novels, setNovels] = useState(() => {
    const savedNovels = localStorage.getItem("novels");
    return savedNovels ? JSON.parse(savedNovels) : [];
  });

  useEffect(() => {
    localStorage.setItem("novels", JSON.stringify(novels));
  }, [novels]);

  return (
    <section className="container">
      {currentView === "home" && (
        <div className="novel_container">
          <div className="heading_box">
            <h1 className="heading">Novel Blog</h1>
            <button
              className="upload_btn"
              onClick={() => handleViewChanges("upload")}
            >
              Upload New Novel
            </button>
          </div>

          <ul className="novel_details">
            {novels.map((novel, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectNovel(novel);
                  handleViewChanges("details");
                }}
              >
                {novel.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentView === "upload" && (
        <UploadNovelForm
          onSubmit={(novel) => {
            setNovels([...novels, novel]);
            handleViewChanges("home");
          }}
        />
      )}

      {currentView === "details" && selectNovel && (
        <div className="novel_box">
          <div className="view_novel">
            <h2>{selectNovel.title}</h2>
            <p className="author">-Author: {selectNovel.author}</p>
            <p className="genre">Genre: {selectNovel.genre}</p>
            <p className="summary">{selectNovel.summary}</p>

            <button
              className="back_home"
              onClick={() => handleViewChanges("home")}
            >
              Back To Home
            </button>
          </div>
          <div>
            <img
              className="img"
              src={selectNovel.imageURL}
              alt={selectNovel.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
