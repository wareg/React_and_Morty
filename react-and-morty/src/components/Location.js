import React from 'react';


function showMoreDatas(props) {

  let closeX = `<span id="closeBtn" class="close cursor">×</span>`;

  document.body.insertAdjacentHTML("beforeend", `
  <div id="myModal" class="modal" style="display: flex;">
    <div class="modal-content">
      <div class="inner">
          <div><span>Név:</span> ${props.datas.name}</div>
          <div><span>Hely:</span> ${props.datas.type}</div>
          <div><span>Dimenzió:</span> ${props.datas.dimension}</div>
          <div><span>Szereplők itt:</span> ${props.datas.residents.length}</div>

        
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




function LocationCard(props) {

  
  return (


    <div className="small-card" id={"s-card" + props.unique} data-animation-offset={'1.'+props.unique}>
      <h2><span>Név:</span> {props.datas.name}</h2>
      <p><span>type:</span> {props.datas.type}</p>
      <button onClick={() => { showMoreDatas(props) }}>részletek</button>
    </div>

  )
}

export default LocationCard;

