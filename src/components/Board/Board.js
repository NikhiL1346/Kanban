import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editable/Editable";
import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = (event) => {
    // Prevent click event from propagating to document
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={handleDropdownClick}
        > 
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              className="board_dropdown1"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard(props.board.id)}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}//function as a prop
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board; 