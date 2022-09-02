import "./Search.css";

function Search() {
  return (
    <input
      className="header__search"
      type="text"
      autocapitalize="none"
      autocomplete="off"
      autocorrect="off"
      name="search_query"
      tabindex="0"
      spellcheck="false"
      placeholder="Search"
    />
  );
}

export default Search;
