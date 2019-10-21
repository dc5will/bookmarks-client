import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    page: "list",
    error: null
  };

  changePage = page => {
    this.setState({ page });
  };

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
      page: "list"
    });
  };

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  };

  componentDidMount() {
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setBookmarks)
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <main className="App">
        <h1>Bookmarks!</h1>
        <p>testing 123</p>
      </main>
    );
  }
}

export default App;
