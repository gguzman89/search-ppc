import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';
import CardsResults from '../components/results/CardsResults';

export default class ResultsPage extends Component {
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
                    <h2 className="title">Found 5 matches to "styrofoam"</h2>
                </div>
                <CardsResults/>
            </Container>
			</>
		)
	}
}