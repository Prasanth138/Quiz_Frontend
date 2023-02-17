import React from 'react'

const renderTable = ({datas,selectedItem}) => {
    return (
        <div className="card-text">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Question</th>
            {/* <th>Your Answer</th> */}
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.question}</td>
              {/* <td>{selectedItem[index]}</td> */}
              <td>{data.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default renderTable