const Phonebook = ({contacts}) => {
  return (
    <ul>
      {contacts.map((person) => (
        <li key={person.name}>
          {person.name}: {person.number}
        </li>
      ))} 
    </ul>
  )
}

export default Phonebook