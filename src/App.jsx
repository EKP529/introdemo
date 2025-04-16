import { useState } from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName && person.number === newNumber)) {
      alert(`This contact is already added to phonebook`)
      return
    } 
    const copy = [...persons]
    if (copy.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        copy[copy.findIndex(person => person.name === newName)].number = newNumber
      }
      return
    } else if (copy.some(person => person.number === newNumber)) {
      if (window.confirm(`${newNumber} is already added to phonebook, replace the old name with a new one?`)) {
        copy[copy.findIndex(person => person.number === newNumber)].name = newName
      }
      return
    } else {
      copy.push({ name: newName, number: newNumber })
    }
    setPersons(copy)
    setNewName('')
    setNewNumber('')
  }
  
  const contactsToShow = filter.length === 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Search Phonebook</h2>
      <Search searchFilter={filter} setSearchFilter={setFilter} />
      <h2>Add a new contact</h2>
      <AddContact 
        handleSubmit={addContact} 
        contactName={newName} 
        setContactName={setNewName} 
        contactNum={newNumber} 
        setContactNum={setNewNumber}
      />
      <h2>Contacts</h2>
      <Phonebook contacts={contactsToShow} />
    </div>
  )
}

export default App