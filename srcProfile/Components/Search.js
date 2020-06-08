function Search() {
  const [userQuery, setUserQuery] = useState('');
  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
    console.log(userQuery);
  };
  const searchQuery = () => {
    window.open(`https://www.google.com/?q=${userQuery}`, '_blank');
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };
  return (
    <div className="container " style={{ marginTop: '1.5rem' }}>
      <div className="form d-flex  " style={{ margin: 'auto' }}>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
          style={{
            border: '2px solid orange',

            width: '80%'
          }}
        />
        <button onClick={searchQuery} className="btn text-white btn-block btn-primary" style={{ width: '20%' }}>
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
