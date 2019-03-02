import React, { Component } from 'react';

class App extends Component {

  state = {
    searchTerm: '',
    searchResults: []
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json => this.handleSearchResults(json))
  }

  handleSearchResults = results => {
    this.setState({searchResults: results.items})
  }


  render() {
    return (
      <div>
        <h1>BOOK FINDER</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder="Search by book title or author..." onChange={this.handleChange} />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}

export default App;
