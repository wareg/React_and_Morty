import React, { useState, useEffect } from 'react'

function LandingPage() {
	const [type, setType] = useState("");
	const [datas, setDatas] = useState([]);
	const [pageNum, setPageNum] = useState([]);
	//Az oldalszám lekéréshez majd a useData.js fájlt kell megvizsgálni

	//A fecth most lekéri a kiírandó adatokat (setDatas), és a pagination számokat (setPageNum)
	useEffect(() => {
		if (type.length > 0) {
			fetch(`https://rickandmortyapi.com/api/${type}/?page=1`)
				.then((response) => response.json())
				.then((json) => { setDatas(json.results); setPageNum(json.info) });
		}
	}, [type]);

	function delText() {
		let landing = document.getElementById("landing-text");
		landing ? landing.remove() : console.log("");
	}

	//Ez kreálja a pagination számokat, ha a type useState tartalma változik
	const pagination = () => {
		if (type.length > 0) {
			return (
				Array(pageNum.pages).fill(1).map((x, y) => { return x + y }).map((item, index) => {
					return <span className="pagNums" id={"page" + index} key={index}> [{item}] </span>;
				})
			)
		}
	}

	return (
		<>
			<div>Logo helye</div>

			<button onClick={() => { setType("character"); delText() }}>Characters</button>
			<button onClick={() => { setType("location"); delText() }}>Locations</button>

			<div id="content">
				<p id="landing-text">töltelék szöveg</p>
				<h1 id="mainH">{type}</h1>
				<div id="cards-container">
					{pagination()}

					{datas.map((item, index) => {
						return <div key={index}>Ide kerül a {item.id}. {type} kártya komponens</div>;
					})}
				</div>
			</div>
		</>
	);
}

export default LandingPage;