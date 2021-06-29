import "./App.css";
import logo from "./images/Rick-and-Morty-Season-4-Ep6.jpg";
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import CharacterCard from './components/CharacterCard';
import LocationCard from './components/Location';


function App() {

	const [type, setType] = useState("");
	const [datas, setDatas] = useState([]);
	const [pageNum, setPageNum] = useState([]);
	const [actualPage, setActualPageNbr] = useState(1);
  
  const [extraDatas, setExtraDatas] = useState([]);
  const [extraDatasTemp, setExtraDatasTemp] = useState([]);
  const [scrollPageNumber, setScrollPageNumber] = useState(2);

	//A fecth most lekéri a kiírandó adatokat (setDatas), és a pagination számokat (setPageNum)
	useEffect(() => {
		if (type.length > 0) {
			fetch(`https://rickandmortyapi.com/api/${type}/?page=${actualPage}`)
				.then((response) => response.json())
				.then((json) => { setDatas(json.results); setPageNum(json.info) });
    }
    setExtraDatas([]);
	}, [type, actualPage]);

	useEffect(() => {
		if (type.length > 0 && scrollPageNumber <= pageNum.pages) {
      	fetch(`https://rickandmortyapi.com/api/${type}/?page=${scrollPageNumber}`)
				.then((response) => response.json())
        .then((json) => { setExtraDatasTemp(json.results) });
    }
	}, [type, scrollPageNumber, pageNum]);

	function delText() {
		let landing = document.getElementById("landing-text");
		landing ? landing.remove() : console.log("");
	}

	//Ez kreálja a pagination számokat, ha a type useState tartalma változik
	const pagination = () => {
		if (type.length > 0) {
			return (
				Array(pageNum.pages).fill(1).map((x, y) => { return x + y }).map((item, index) => {
          return <Pagination className="pagNums" actualPage={actualPage} number={setPageNumber} 
          id={index} key={index}/>;
				})
			)
		}
	}


	function setPageNumber (params) {
    let actualP = Number(params.target.value);
    setActualPageNbr(actualP); 
    setScrollPageNumber(actualP + 1)
  }
  
  let newPageNbr = actualPage;

  const prevNext = (e) => {
    newPageNbr = Number(actualPage) + Number(e);
    if (newPageNbr > pageNum.pages || newPageNbr < 1 ) {
      console.log("nem lapozhatounk itt tovabb");
    } else {
      setActualPageNbr(newPageNbr);
    }
  }



  function anotherTwenty (params) {

    if (scrollPageNumber < pageNum.pages+1) { 
      setExtraDatas([...extraDatas, ...extraDatasTemp]);
      setScrollPageNumber(scrollPageNumber + 1);
      } else {
       console.log("the end :)");
    }     

  }




  return (
    <div id="root">
      <div id="top-wrapper">
        <img src={logo} alt="logo"></img>
        <div id="button-container">
          <button onClick={() => { setType("character"); setActualPageNbr(1); setScrollPageNumber(2); delText() }}>Karakterek</button>
          <button onClick={() => { setType("location"); setActualPageNbr(1); setScrollPageNumber(2); delText() }}>Helyszínek</button>
        </div>

        <div id="landing-text">
          <p>Üdvözöllek a Rick és Morty univerzumban. <br></br>
            Ezen az oldalon a Rick és Morty karakterek és helyszínek teljes listáját lehet kilistázni.<br></br>
            A kártyára kattintva részletes információt kaphatsz a karakterről vagy a helyszínről.
          </p>
        </div>
      </div>


      <div className="cards-wrapper">
        <div className="theCardsDiv">
          {datas.map((item, index) => {
            if (item.location) {
              return <CharacterCard datas={item} unique={index} key={index} />
            } else {
              return <LocationCard datas={item} unique={index} key={index} />	
            }
          })}
        </div>   
      </div>


      <div className="cards-wrapper">
        <div className="theCardsDiv">  
          {extraDatas.map((item, index) => {
            if (item.location) {
              return <CharacterCard datas={item} key={index} />
            } else {
              return <LocationCard datas={item} key={index} />	
            }
          })}
        </div>
      </div>

      <div id="pagination-bar">
        <div id="pagiN">
          { type.length > 0 ? <button onClick={() => { prevNext(-1) }}>Prev</button> : ""}
          {pagination()}
          { type.length > 0 ? <button onClick={() => { prevNext(1) }}>Next</button> : ""}
        </div>
      </div>
      
      {type.length > 0 ? <button id="extraDataBtn" className="tempBtn" onClick={() => { anotherTwenty() }}>Újabb 20 kártya</button> : ""}
    
    </div>

  );
}

export default App;
