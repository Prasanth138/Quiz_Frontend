import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
    const [index,setIndex]= useState(0);
    const [datas,setDatas]= useState([]);
    const [selectedItem,setSelectedItem]= useState('');
    const URL="http://localhost:5000";

    const handleSelected = (item) => {
        setSelectedItem(item);
    }

    const handleCompare = (answer) => {
      if(answer === selectedItem){
        alert("Correct");
        setIndex(index + 1);
      }else{
        alert("Wrong");
      }
    }
    useEffect(()=>{
        axios.get(`${URL}/getQuestions`).then((res)=>{
            setDatas(res.data);
      }).catch((err)=>{
        console.log(err);
      })  
  },[])
    return (
      <>
        <div className="col-md-4 mx-auto" style={{marginTop:"8%"}}>
              <div className="card" >
                <div className="card-body CardQuiz">
                  { datas[index]?
                  <>
                    <h5 className="card-title">{datas[index]?.question}</h5>
                  <div className="card-text py-2">
                    <div className="form-check" onClick={()=>handleSelected(datas[index]?.option1)}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={datas[index]?.option1}/>
                      <label className="form-check-label" >{datas[index]?.option1}</label>
                    </div>
                  </div>
                  <div className="card-text py-2">
                    <div className="form-check" onClick={()=>handleSelected(datas[index]?.option2)}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={datas[index]?.option2}/>
                      <label className="form-check-label" >{datas[index]?.option2}</label>
                    </div>
                  </div>
                  <div className="card-text py-2">
                    <div className="form-check" onClick={()=>handleSelected(datas[index]?.option3)}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={datas[index]?.option3}/>
                      <label className="form-check-label" >{datas[index]?.option3}</label>
                    </div>
                  </div>
                  <div className="col-md-4 mx-auto">
                  <a href="#" className="btn btn-primary" onClick={()=>handleCompare(datas[index]?.answer)}>Next</a>
                  </div>
                  </>:
                  <> 
                  <p className="text-success">Congragulations !!!</p>
                  <a href="#" className="btn btn-info" onClick={()=>{setIndex(0)}}>Try Again</a>
                  </>
                  }
                </div>
              </div>
              </div> 
      </>
    );
}

export default Card;