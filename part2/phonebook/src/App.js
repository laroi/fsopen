import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <div>{persons.map(x=>(<h3>{x.name} {x.number}</h3>))}</div>
    </div>
  )
}

export default App
