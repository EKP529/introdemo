import Note from "./components/Note"
import { useState } from "react"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a very important note')
  const [showAll, setShowAll] = useState(false)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          type="text" 
          placeholder="Add a new note" 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App