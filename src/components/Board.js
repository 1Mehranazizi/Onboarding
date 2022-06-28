import React from "react";

const Board = ({ boardData, allData, plusStep }) => {
  return (
    <div className="board">
      <div className="left-board">
        <div className="text-board">
          <h2 className="title">{boardData.title}</h2>
          <p className="text">{boardData.description}</p>
        </div>
        <div className="buttons-board">
          <button className="btn" onClick={plusStep}>
            Next
          </button>
          <div className="pagination">
            {allData.map((item) => (
              <span
                key={item.id}
                className={item.id === boardData.id ? "active" : ""}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="right-board">
        <video
          src={boardData.video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Board;
