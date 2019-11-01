import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('');
  const handleSubmit = (e) => {
      if (persons.find(x =>x.name===newName)) {
        alert(`${newName} is already added to the phonebook`);
        e.preventDefault();
        return false;
      }
      setPersons([...persons, {name:newName, number:newNumber}]);
      setNewName('');
      setNewNumber('');
      e.preventDefault();
  }

  const Filter = (props) => {
      return (
        <div>
          Filter shown with: <input autofocus value={filter} onChange={(e)=> {setFilter(e.target.value);}}/>
        </div>
      )
  };
  const PersonForm = (props) => {
      return (
          <div>
          <h1>Add New</h1>
          <form onSubmit={handleSubmit}>
            <div>
              name: <input value={newName} onChange={(e)=>{setNewName(e.target.value.trim());}}/>
          </div>
          <div>
              number: <input value={newNumber} onChange={(e)=>{setNewNumber(e.target.value.trim());}}/>

            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          </div>
      )
  };
  const Numbers = (props) => {
      let src = [...persons];
      if (filter) {
        src = persons.filter(x=>x.name.toLowerCase().includes(filter.toLowerCase()))
      }
      return (
          <div>{src.map(x=>(<h3>{x.name} {x.number}</h3>))}</div>
      )
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter/>
      <PersonForm/> 
      <h2>Numbers</h2>
      <Numbers/> 
    </div>
  )
}

export default App
