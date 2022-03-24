import React, { useState } from "react";
import Card from "./Shared/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
const FeedbackItem = ({
  item,
  editMode,
  reverse,
  handleDelete,
  editFeedback,
}) => {
  const [choice, setChoice] = useState(true);

  return (
    <>
      <Card reverse={reverse} editMode={editMode}>
        <div className="num-display">{item.rating}</div>

        <button
          onClick={() => {
            editFeedback(item);
            localStorage.setItem("text", item.text);
            localStorage.setItem("rating", item.rating);
            localStorage.setItem("id", item.id);
          }}
          style={{ marginRight: "20px" }}
          className="edit"
        >
          <a href="#form">
            {editMode ? (
              item.id === localStorage.getItem("id") ? (
                <CancelIcon htmlColor="#ff6a95" />
              ) : (
                <EditIcon htmlColor="#ff6a95" />
              )
            ) : (
              <EditIcon htmlColor="#ff6a95" />
            )}
          </a>
        </button>

        <button
          className="close"
          onClick={() => {
            handleDelete(item.id, item.rating);
            setChoice(!choice);
          }}
        >
          <DeleteIcon htmlColor="#ff6a95" />
        </button>
        <div  className="text-display">
          {item.text}
        </div>
      </Card>
    </>
  );
};

export default FeedbackItem;
