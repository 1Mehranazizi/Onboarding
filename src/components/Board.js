import React from "react";

import Video from "../assets/video/1.mp4";

const Board = () => {
  return (
    <div className="board">
      <div className="left-board">
        <div className="text-board">
          <h2 className="title">test test</h2>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            neque aut dolor, architecto voluptates deserunt sapiente explicabo
            reiciendis quibusdam et? Consequatur fugit reprehenderit esse ullam
            culpa mollitia earum autem quas.
          </p>
        </div>
        <div className="buttons-board">
          <button className="btn">Next</button>
          <div className="pagination">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="right-board">
        <video autoPlay loop muted width={350} height={350}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Board;
