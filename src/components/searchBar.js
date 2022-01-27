import react from "react";
import React from "react";
import ReactDom from "react-dom";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label>Image search</label>
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
