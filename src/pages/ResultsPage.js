import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';
import CardsResults from '../components/results/CardsResults';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" , amount: 0, 
      results: [
        {'nro': 'Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags.'},
        {'nro': 'Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags22.'},
        {'nro': 'Disposable Foam Container Toolkit – NRCM'},
        {'nro': 'Disposable Foam Container Toolkit by Natural Resources Council of Maine'},
        {'nro': 'Disposable Foam Container Toolkit – NRCM322'},
      ]};
  }

  componentDidMount() {
    this.getQuery();
    this.setState({amount: this.state.results.length});
  }

  getQuery() {
    const {match: { params }} = this.props;
    this.setState({query: params.word});
  }

	render() {
		return(
			<>
        {/* navbar | header*/}
        <div className="content-center mt-0"/>
            <Container fluid>
                <br/>
                <br/>
                <SearchBars/>
                <div className="title-brand">
                    <h2 className="title">Found {this.state.amount} matches to <cite title="Source Title">"{this.state.query}"</cite></h2>
                </div>
                <CardsResults results={this.state.results}/>
            </Container>
			</>
		)
	}
}