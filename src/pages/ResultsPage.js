import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';
import CardsResults from '../components/results/CardsResults';

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" , amount: 0 };
  }

  componentDidMount() {
    this.getQuery();
  }

  getQuery() {
    const {match: { params }} = this.props;
    this.setState({query: params.word});
    this.setState({amount: params.word.length});
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
                <CardsResults/>
            </Container>
			</>
		)
	}
}