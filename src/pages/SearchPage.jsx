import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';
import CardsResults from '../components/results/CardsResults';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "" , amount: 0,
      results: [], showDiv: false
    };

    this.updateInput = this.updateInput.bind(this);
    this.redirectSearch = this.redirectSearch.bind(this);
  }

  updateInput(event){
		this.setState({searchQuery: event.target.value});
  }

  redirectSearch() {
		setTimeout(() => {
			// query
			// save results
      const resultsxs = [
        {'nro': 'Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags.'},
        {'nro': 'Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags22.'},
        {'nro': 'Disposable Foam Container Toolkit – NRCM'},
        {'nro': 'Disposable Foam Container Toolkit by Natural Resources Council of Maine'},
        {'nro': 'Disposable Foam Container Toolkit – NRCM322'},
      ]
      this.setState({ results: resultsxs })
      this.setState({amount: this.state.results.length});
      this.setState({ showDiv: true })
		}, 1000);
  }
  render() {
      return(
          <>
            <div className="content-center mt-0"/>
                <Container fluid>
                  <br/>
                  <br/>
                  <SearchBars 
                    onChange={this.updateInput}
                    searchQuery={this.state.searchQuery}
                    onClick={this.redirectSearch}
                  />
                  <CardsResults
                    results={this.state.results}
                    searchQuery={this.state.searchQuery}
                    amount={this.state.amount}
                    showDiv={this.state.showDiv}
                  />
                </Container>
          </>
      )
  }
}

export default SearchPage;