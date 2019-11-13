import React, { useState, useEffect } from 'react'
import {get, post, put, del} from './services';
const Filter = (props) => {
      return (
        <div>
          Filter shown with: <input value={props.filter} onChange={(e)=> {props.setFilter(e.target.value);}}/>
        </div>
      )
  };
  const PersonForm = (props) => {
      return (
          <div>
          <h1>Add New</h1>
          <form onSubmit={props.handleSubmit}>
            <div>
              name: <input value={props.newName} onChange={(e)=>{props.setNewName(e.target.value.trim());}}/>
          </div>
          <div>
              number: <input value={props.newNumber} onChange={(e)=>{props.setNewNumber(e.target.value.trim());}}/>

            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          </div>
      )
  };
  const Numbers = (props) => {
      let src = [...props.persons];
      if (props.filter) {
        src = props.persons.filter(x=>x.name.toLowerCase().includes(props.filter.toLowerCase()))
      }
      return (
          <div>{src.map(x=>(<h3 key={x.id}>{x.name} {x.id} {x.number}<button onClick={()=> {props.delHandler(x.id)}}>Delete</button></h3>))}</div>
      )
  };
const App = () => {
  const [ persons, setPersons] = useState([
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('');
  const handleSubmit = (e) => {
      const exists = persons.find(x => x.name === newName);
      if (exists) {
        if (window.confirm(`${newName} is already added to the phonebook, do you want to replace the old number with new one?`)) {
            put(`http://localhost:3001/persons/${exists.id}`, {name: newName, number:newNumber})
            .then(()=> {
                 setNewName('');
                  setNewNumber('');

            })
        }
        e.preventDefault();
        return false;
      }
      const id = persons[persons.length -1].id+1
      const newObj = {id: id, name:newName, number:newNumber}
      post(`http://localhost:3001/persons`, newObj )
      .then(()=> {
          setPersons([...persons, newObj]);
          setNewName('');
          setNewNumber('');
      })
      
      e.preventDefault();
  }
    const delHandler = (e) => {
        const index = persons.findIndex(x=>x.id === e)
        if (index > -1) {
            if (window.confirm(`Do you really want to delete ${persons[index].name}`)) {

            del(`http://localhost:3001/persons/${persons[index].id}`)
            .then(()=> {
                let _persons = [...persons];
                const delObj = _persons.splice(index);
                console.log(delObj)
                setPersons([..._persons])
            })
        }
        }
    }
  
  useEffect(()=> {
      get('http://localhost:3001/persons')
      .then(data=>setPersons(data))
  }, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} handleSubmit={handleSubmit}/> 
      <h2>Numbers</h2>
      <Numbers filter={filter} delHandler={delHandler} persons={persons}/> 
    </div>
  )
}

export default App
