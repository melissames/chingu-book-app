import React, { Component } from 'react';
import BookList from './BookList.js'

class BooksContainer extends Component {

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
      .then(json => this.setState({searchResults: json.items}))
  }

  render() {
    return (
      <div>
        <div className='centered title-text'>
          <h1>BOOK FINDER</h1>
        </div>
        <form className='centered' onSubmit={this.handleSubmit}>
          <input type='text' className='search-bar' placeholder="Search by book title or author..." onChange={this.handleChange} />
          <input type='submit' className='submit-button' value='Search' />
        </form>
        <BookList />
      </div>
    );
  }
}

export default BooksContainer;
