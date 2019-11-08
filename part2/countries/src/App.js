import React, { useState, useEffect } from 'react'
import axios from 'axios';


const More = () => {
	return (
		<div>Too many matches, specify another filter</div>
	)
}

const List = (props) => {
	return (
		<div>
			{props.cont.map(x=><div key={x.alpha2Code}>{x.name} <button onClick={props.show(x)}>show</button></div>)}
		</div>
	)
}

const Detail = (props) => {
	return(
		<div>
			<h2>{props.name}</h2>
			<p>capital {props.capital}</p>
			<p>population {props.population}</p>
			<h3>languages</h3>
			<ul>
			{props.languages.map(x=><li key={x.iso639_1}>{x.name}</li>)}
			</ul>
			<img height="150" width="150" src={props.flag}/>
		</div>
	)

}
function App() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCont, setSelectedCont] = useState('');

	   useEffect(() => {
		  axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
			  setCountries(response.data)
			})
		}, [])
	const conts = search ? countries.filter(x=>x.name.toLowerCase().includes(search.toLowerCase())) : countries;
    const show = (cont) => {
        return () => {
           setSelectedCont(cont)
        }
    }
	let el;
	if (conts.length > 5) {
		el = <More/>
	}
	else if (conts.length === 1 ) {
		el = <Detail {...conts[0]}/>
	}
	else {
		el = <List show={show} cont={conts}/>
	}
    const det = (selectedCont && conts.length>1 && conts.length <6) ? <Detail {...selectedCont}/> : null
  return (
    <div className="App">
        find countries <input autoFocus value={search} onChange={(e)=> {setSearch(e.target.value); setSelectedCont('')}}/>
		{el}
        <div>
        {det}
        </div>
    </div>

  );
}

export default App;
