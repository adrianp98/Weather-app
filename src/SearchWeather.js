const SearchWeather = (props) => {
  return (
    <div className="searchWeather">
      <form>
        <label html="searchWeather">Szukaj: </label>
        <input
          type="text"
          id="searchWeather"
          placeholder="np. Gdańsk"
          onChange={(e) => props.filterWeather(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchWeather;
