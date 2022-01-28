import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import SearchBar from "./searchBar";

class App extends React.Component {
  state = { image: [] };
  async onSearchSubmit(term) {
    console.log("from parent", term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: " Client-ID NUfsXQymnQhL9bGM5KPxOPn4afBVipzxh3TidIIqTKI",
      },
    });
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
