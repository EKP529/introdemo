const AddContact = ({handleSubmit, contactName, setContactName, contactNum, setContactNum}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input
            value={contactName} 
            placeholder='Enter a name'
            onChange={(event) => setContactName(event.target.value)}
          />
        </div>
        <div>
          number: 
          <input
            type='tel'
            placeholder='Enter a number'
            value={contactNum} 
            onChange={(event) => setContactNum(event.target.value)} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default AddContact