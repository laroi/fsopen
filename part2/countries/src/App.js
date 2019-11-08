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
			{props.cont.map(x=><div key={x.alpha2Code}>{x.name}</div>)}
		</div>
	)
}

const Detail = (prop) => {

	return(
		<div>
			<h2>{prop.name}</h2>
			<p>capital {prop.capital}</p>
			<p>population {prop.population}</p>
			<h3>languages</h3>
			<ul>
			{prop.languages.map(x=><li key={x.iso639_1}>{x.name}</li>)}
			</ul>
			<img height="150" width="150" src={prop.flag}/>
		</div>
	)

}
function App() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

	   useEffect(() => {
		  axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
			  setCountries(response.data)
			})
		}, [])
	const conts = search ? countries.filter(x=>x.name.toLowerCase().includes(search.toLowerCase())) : countries;
	let el;
	if (conts.length > 5) {
		el = <More/>
	}
	else if (conts.length === 1 ) {
		el = <Detail {...conts[0]}/>
	}
	else {
		el = <List cont={conts}/>
	}
  return (
    <div className="App">
        find countries <input autoFocus value={search} onChange={(e)=> {setSearch(e.target.value);}}/>
		{el}
    </div>
  );
}

export default App;
