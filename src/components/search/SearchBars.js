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
  constructor(props) {
    super(props)

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.props.onClick();
    }
  }

	render() {
		return(
			<Container>
					<Row>
            <Col className="offset-1 col-md-10 mt-4">
              <InputGroup addontype="append">
                <Input
                  className="form-control"
                  placeholder="Search"
                  type="text"
                  value={this.props.value}
                  onChange={this.props.onChange}
                  onKeyDown={this.keyPress}
                  />
                <Button variant="outline-secondary" onClick={this.props.onClick}>
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