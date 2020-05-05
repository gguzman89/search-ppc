import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.redirectSearch = this.redirectSearch.bind(this);
  }

  updateInput(event){
		this.setState({searchQuery: event.target.value});
		console.log(this.state);
  }

  redirectSearch() {
		setTimeout(() => {
			// query
			// save results
			this.props.history.push("/results/" + this.state.searchQuery);
		}, 1000);
	}

  render() {
      return(
          <>
            {/* navbar */}
            <div className="content-center mt-0"/>
                <Container fluid>
                  <br/>
                  <br/>
                  <SearchBars 
                    onChange={this.updateInput}
                    searchQuery={this.state.searchQuery}
                    onClick={this.redirectSearch}
                  />
                </Container>
          </>
      )
  }
}

export default SearchPage;