import React, { Component } from 'react';
import {
  Container,
  Col,
  InputGroup,
  Input,
  Button,
	Row
} from 'reactstrap'
import { withRouter } from 'react-router-dom';

class SearchBars extends Component {
	constructor(props){
		super(props);
		this.state = {word: ""};

		this.updateInput = this.updateInput.bind(this);
		this.redirectSearch = this.redirectSearch.bind(this);
	}

	updateInput(event){
		this.setState({word: event.target.value})
		console.log(event.target.value);
	}

	redirectSearch() {
		this.props.history.push("/results/" + this.state.word);
	}

	render() {
		return(
			<Container>
					<Row>
            <Col className="offset-1 col-md-10 mt-4">
              <InputGroup addontype="append">
                <Input className="form-control" placeholder="Search" type="text" value={this.state.word} onChange={this.updateInput}/>
                <Button variant="outline-secondary" onClick={this.redirectSearch}>
                <i className="nc-icon nc-zoom-split" />
                </Button>
                {/* resultados for "styrofoam"*/}
              </InputGroup>
            </Col>
          </Row>
			</Container>
		)
	}
}

export default withRouter(SearchBars);