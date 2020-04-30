import React, { Component } from 'react';
import {
    Container,
    Col,
    InputGroup,
    Input,
    Button
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
		this.props.history.push("/results");
	}

	render() {
		return(
			<Container>
				<InputGroup>
					<Col xs={7}>
						<InputGroup addontype="append">
							<Input className="form-control" placeholder="Search" type="text" value={this.state.word} onChange={this.updateInput}/>
							<Button className="btn btn-danger nc-icon nc-zoom-split" onClick={this.redirectSearch}/>
							{/* resultados */}
						</InputGroup>	
					</Col>		
				</InputGroup>
			</Container>
		)
	}
}

export default withRouter(SearchBars);