import axios from "axios";
import React from "react";
import {useState} from "react";
  

const CreateQuestion = () => {
  const [question, setQuestion]= useState({
    question : "",
    option1 : "",
    option2 : "",
    option3 : "",
    answer : ""
  })
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setQuestion((prevState)=>({
      ...prevState,
      [name] : value
    }))
  }

  const handleCreate =async() => {
     await axios.post("https://quiz-backend-seven.vercel.app/createQuestion", question).then((res)=>{
      if(res){
        alert("Question Created !!");
        setQuestion({
          question : "",
          option1 : "",
          option2 : "",
          option3 : "",
          answer : ""
        })
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <div className="container col-md-4 mx-auto mt-5">
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="question" name="question" value={question.question} onChange={handleChange} placeholder="Enter Question"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="option1" name="option1" value={question.option1} onChange={handleChange} placeholder="Enter Option 1"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="option2" name="option2" value={question.option2} onChange={handleChange} placeholder="Enter Option 2"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="option3" name="option3" value={question.option3} onChange={handleChange} placeholder="Enter Option 3"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="answer" name="answer" value={question.answer} onChange={handleChange} placeholder="Enter Answer"/>
        </div>
        <button type="button" className="btn btn-info" onClick={()=>handleCreate()}>Create</button>
      </form>
      </div>
    </>
  );
};

export default CreateQuestion;
