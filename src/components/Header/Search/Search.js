import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  updateSearch = (searchTerm) => {
    this.setState({ searchTerm });
  }





  render() {
    const { searchTerm } = this.state
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed"
            value={searchTerm}
            onChange={(e) => this.updateSearch(e.target.value)} />

          <SearchIcon id="Search__icon" onClick={this.updateSearch} />
        </div>

      </section>
    )
  }
}