import React from "react";
import "./gg.css";

function GG() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Thumbnail"
          className="card-image"
        />
        <div className="card-hover-content">
          <h3>Dan Da Dan</h3>
          <p>
            สุดแปลก • ห้ามฮา • สยองขวัญ
          </p>
          <button className="watch-now-button">รับชมตอนนี้</button>
        </div>
      </div>
    </div>
  );
}

export default GG;
