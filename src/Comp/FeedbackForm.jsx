import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RatingSelect from "./RatingSelect";
import CircularProgress from "@mui/material/CircularProgress";

const FeedbackForm = ({
  addFeedback,
  actualEdit,
  setEditMode,
  editMode,
  editState,
  reverse,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [text, setText] = useState("");
  const [textUpdate, setTextUpdate] = useState("");
  const [rating, setRating] = useState(1);
  const [watchState, setwatchState] = useState(false);

  useEffect(() => {
    setTextUpdate(localStorage.getItem("text"));
  }, [editMode]);

  var watching = "-" + watch("text");

  const onSubmit = (res) => {
    console.log(rating);

    rating === undefined ? setRating(1) : setRating(rating);

    if (watching.replace("-", "").trim().length >= 10) {
      const newFeedback = { text: watching.replace("-", "").trim(), rating };

      editMode ? actualEdit(newFeedback) : addFeedback(newFeedback);

      setText("");
      setTextUpdate("");
      setwatchState(!watchState);
      if (editMode) {
        setEditMode(!editMode);
      }
    }
  };

  return (
    <div id="form" className="container">
      <div className={reverse ? "card-form-dark" : "card-form"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>How would you like to rate our service? </h2>
          <RatingSelect
            editMode={editMode}
            editState={editState}
            reverse={reverse}
            select={(rating) => setRating(rating)}
          ></RatingSelect>
          <div className="input-group">
            <input
              autoComplete="off"
              style={{
                color: reverse ? "white" : "black",
                backgroundColor: reverse ? "rgba(0, 0, 0, 0.1)" : "white",
              }}
              {...register("text", {
                minLength: 10,
                onChange: (e) => {
                  setwatchState(false);
                  editMode
                    ? setTextUpdate(e.target.value)
                    : setText(e.target.value);
                },
              })}
              value={editMode ? textUpdate : text}
              placeholder="write a review "
              type="text"
            ></input>
            <a style={{textDecoration:'none' , color:'inherit' }} href='#edit'>
            <button
              className={reverse ? "btn btn-secondary" : "btn btn-primary"}
              // disabled={watching.trim().length <= 10 &&  editState.text.trim().length <= 10}

              disabled={
                editMode
                  ? editState.text.trim().length <= 10
                  : watching.trim().length <= 10 || watchState
              }
              type="submit"
            >
             Send 
              <span>
                {editMode ? (
                  <CircularProgress
                    sx={{ marginLeft:'10px', color: reverse ? "#03001e" : "#f12711" }}
                    size={20}
                  />
                ) : (
                  <></>
                )}
              </span>
              {/* {editMode
                ? (editState.text.trim().length <= 10).toString()
                : (watching.trim().length <= 10).toString()} */}
            </button></a>
          </div>
          {/* <p>watching length is less? {(watching.trim().length <= 10 || watchState ).toString()}</p>
         <p> rating undef {(rating == undefined).toString()}</p>
         <p>watchState {watchState.toString()}</p>
         <p>watching {(watching.trim().length <= 10 ).toString()}</p>
         <p>editState {editMode?  editState.text: ''}</p>
         <p>textUpdate  {textUpdate}</p>
        <p>edit text len {editMode? (editState.text.length ) : ''}</p> 
        <p>textUpdate length {textUpdate.length}</p> */}

          {/* {editMode ? (editState.text.trim().length <= 10).toString() : ""} */}
          {editMode ? (
            editState.text.length == textUpdate.length ? (
              <p style={{ color: "#FF736E" }}>
                You must edit the present review
              </p>
            ) : (
              <></>
            )
          ) : null}

          {watching && editMode ? (
            textUpdate.trim().length <= 10 ? (
              <p style={{ color: "#FF736E" }}>
                Review must have 10 characters needed to submit
              </p>
            ) : (
              <></>
            )
          ) : watching.trim().length <= 10 ? (
            <p style={{ color: "#FF736E" }}>
              Review must have 10 characters needed to submit
            </p>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
