const Search = ({ searchFilter, setSearchFilter }) => {
  return (
    <div>
      filter shown with &nbsp; 
      <input 
        placeholder='Search...'
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)} 
      />
    </div>
  )
}

export default Search