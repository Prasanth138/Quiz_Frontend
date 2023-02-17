import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Spinner } from "react-bootstrap";

const Card = () => {
    const [index, setIndex] = useState(0);
    const [datas, setDatas] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const URL = "https://quiz-backend-seven.vercel.app";

    const handleSelected = (item) => {
        setSelectedItem(item);
    }

    const handleCompare = (answer) => {
        if (answer === selectedItem) {
            setScore(score + 1);
        }
        setSelectedItem('');
        setIndex(index + 1);
    }

    useEffect(() => {
        axios.get(`${URL}/getQuestions`).then((res) => {
            setDatas(res.data);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="container"style={showAnswers? {"marginTop":"40px"} : {"marginTop":"110px"} }>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card shadow-lg rounded">
                        <div className="card-header bg-info text-light">
                            <h4 className="text-center mb-0">Quiz</h4>
                        </div>
                        <div className="card-body">
                        {isLoading ? (
                                <div className="text-center">
                                    <Spinner animation="border" variant="primary" />
                                </div>
                            ) :
                             datas.length > 0 && index < datas.length && !showAnswers  ? (
                        <div className="card-text">
                            <h5 className="mb-4">{datas[index].question}</h5>
                            <div className="form-check mb-2" onClick={() => handleSelected(datas[index].option1)}>
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={selectedItem === datas[index].option1} readOnly />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">{datas[index].option1}</label>
                            </div>
                            <div className="form-check mb-2" onClick={() => handleSelected(datas[index].option2)}>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={selectedItem === datas[index].option2} readOnly />
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">{datas[index].option2}</label>
                            </div>
                             <div className="form-check mb-2" onClick={() => handleSelected(datas[index].option3)}>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={selectedItem === datas[index].option3} readOnly />
                                  <label className="form-check-label" htmlFor="flexRadioDefault3">{datas[index].option3}</label>
                            </div>
                            <div className="text-center">
                              <button className="btn btn-primary" onClick={() => handleCompare(datas[index].answer)} disabled={!selectedItem}>Next</button>
                            </div>
                         </div> ) : (
                             <div className="card-text result text-center">
                                 <h5>You have completed the quiz!</h5>
                                 <p className="mt-3">Your score: {score} / {datas.length}</p>
                                 <button className="btn btn-info mt-3 mx-3" onClick={() => {
                                       setIndex(0);
                                       setScore(0);
                                       setShowAnswers(false);
                                 }}>Try Again</button>
                                 <button className="btn btn-info mt-3 mx-3" onClick={() => setShowAnswers(true)}>Show Answers</button>
                                     {showAnswers && (
                                     <Table datas={datas} selectedItem={selectedItem} />
                                     )}
                                </div>
                                 )} 
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
