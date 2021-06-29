import React from 'react';




function Pagination(props) {

  let actualClass = "button";
  if (props.actualPage === props.id + 1) {
    actualClass = "active";
  }

  return (
    <div className="btnDiv">

    <button className={actualClass} onClick={props.number} value={props.id + 1}>{props.id + 1}</button>

    </div>
  )
}

export default Pagination;

