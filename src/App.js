import "./App.css";
import Header from "./Comp/Header";
import FeedbackList from "./Comp/FeedbackList";
import { useEffect, useState } from "react";
import FeedbackStats from "./Comp/FeedbackStats";
import FeedbackForm from "./Comp/FeedbackForm";
import About from "./Comp/pages/About";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import { Button, Fab} from "@mui/material";
// import MUISwitch from "./Comp/MUISwitch";
function App() {
  const [Feedback, setFeedback] = useState();
  const [editState, setEditState] = useState();
  const [editMode, setEditMode] = useState(false);
  const [reverse, setReverse] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    await axios
      .get(
        `https://623971b363fdd477ac12bbe2.mockapi.io/Feedback?sortBy=index&order=asc`
      )
      .then((res) => setFeedback(res.data));
  };
  const editFeedback = (item) => {
    setEditState(item);
    setEditMode(!editMode);
  };

  const actualEdit = async (newFeedback) => {
    var editID = localStorage.getItem("id");

    console.log(Feedback);

    await axios
      .put(
        `https://623971b363fdd477ac12bbe2.mockapi.io/Feedback/${editID}`,
        newFeedback
      )
      .then((res) => {
        console.log(editID, res.data, newFeedback);
        // changeElement(editID, "rating", newFeedback.rating);
        setEditMode(!editMode);
        callApi();

        // const newFeedback1= Feedback.filter((i)=> i.id !== editID ) this was bullshit that i was doing ,no need for it

        //   setFeedback(newFeedback1)

        //   setFeedback([res.data , ...Feedback] )
      });
  };

  var handleDelete = (id, rating) => {
    if (
      window.confirm(
        `Are you sure you want to delete feedback with rating ${rating}?`
      )
    ) {
      axios
        .delete(`https://623971b363fdd477ac12bbe2.mockapi.io/Feedback/${id}`)
        .then((res) => console.log(res.data));
      const newFeedback = Feedback.filter((i) => i.id !== id);
      console.log(newFeedback);
      console.log(Feedback);

      setFeedback(newFeedback);
    }
  };
  const addFeedback = (newFeedback) => {
    axios
      .post(`https://623971b363fdd477ac12bbe2.mockapi.io/Feedback`, newFeedback)
      .then((res) => {
        setFeedback([res.data, ...Feedback]);
        console.log(Feedback);
      });
  };

  //   function changeElement(id, key, value){
  //   var changedId = -1;
  //   var arrReturned = Feedback.forEach(function(element, index){
  //     if (element['id'] == id)
  //     {
  //       element[key] = value;
  //       changedId = index; //push the changed index into the array
  //     }
  //   });
  //   var element = Feedback.splice(changedId, 1);
  //   Feedback.unshift(element[0])
  //   setFeedback(Feedback)
  //   console.log(Feedback)
  // }

  return (
    <Router>
      {/* {reverse ? (
        <Fab size="small" onClick={() => setReverse(!reverse)}>
          <LightModeIcon />
        </Fab>
      ) : (
        <Fab  size="small" onClick={() => setReverse(!reverse)}>
          <NightlightIcon />
        </Fab>
      )} */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              {Feedback && (
                <>
                  <Header
                    text="Garry Feedback App"
                    reverse={reverse}
                    setReverse={setReverse}
                  ></Header>
                  <FeedbackStats data={Feedback} />
                  <FeedbackForm
                    editState={editState}
                    actualEdit={actualEdit}
                    setEditMode={setEditMode}
                    editMode={editMode}
                    reverse={reverse}
                    addFeedback={addFeedback}
                  ></FeedbackForm>
                  <div className="container">
                    <FeedbackList
                      data={Feedback}
                      editMode={editMode}
                      editFeedback={editFeedback}
                      handleDelete={handleDelete}
                      reverse={reverse}
                    />
                  </div>
                </>
              )}
            </>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <>
              <Header
                text="Garry Feedback App"
                reverse={reverse}
                setReverse={setReverse}
              ></Header>
              <About reverse={reverse} />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
