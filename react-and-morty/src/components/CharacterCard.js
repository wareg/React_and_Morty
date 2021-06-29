import React from 'react';

function showMoreDatas(props) {

  let closeX = `<span id="closeBtn" class="close cursor">×</span>`;

  document.body.insertAdjacentHTML("beforeend", `
  <div id="myModal" class="modal" style="display: flex;">
    <div class="modal-content">
      <div class="inner">
          <div><img src="${props.datas.image}"></div>
          <div><span>Név:</span> ${props.datas.name}</div>
          <div><span>Hely:</span> ${props.datas.location.name}</div>
          <div><span>Orig.:</span> ${props.datas.origin.name}</div>
          <div><span>Faj:</span> ${props.datas.species}</div>
          <div><span>Gender:</span> ${props.datas.gender}</div>
          <div><span>Type:</span> ${props.datas.type}</div>
        
          ${closeX}
          
      </div>
    </div>
  </div>`)

  closeModal();

}

function closeModal() {
  let closeX = Array.from(document.querySelectorAll("#closeBtn"));
  closeX.map(x => x.addEventListener("click", omg))
}

function omg() {
  let xxx = Array.from(document.querySelectorAll("#myModal"));
  xxx.map(x => x.style.display = "none")
}



function CharacterCard(props) {
  return (
    <div className="small-card" id={"s-card" + props.unique}>
      <h2>{props.datas.name}</h2>
      <div className="card-bottom">
        <div className="card-data">
          <p><span>Hely:</span> {props.datas.location.name}</p>
          <p><span>Faj:</span> {props.datas.species}</p>
          <button onClick={() => { showMoreDatas(props) }}>részletek</button>
        </div>
        <div><img src={props.datas.image} alt={props.datas.name} /></div>
      </div>
    </div>






  )
}

export default CharacterCard;

