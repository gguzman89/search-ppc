import React, { Component } from 'react';
import { 
	Card,
  CardBody,
  Container,
  CardLink
} from 'reactstrap';

const Result = ({results}) => {
  return (
    <Card>
    <CardBody>
      <CardLink href="/#/">
        <h6>{results}</h6>
      </CardLink>
    </CardBody>
  </Card>
  )
}

class CardsResults extends Component {
	render() {
    const results = this.props.results.map((item, i) =>
      <Result key={i} results={item.nro} />
    );
    const showDiv = this.props.showDiv;
		return(
			<>
        { showDiv &&
        <div className="title-brand">
          <h2 className="title">Found {this.props.amount} matches to <cite title="Source Title">"{this.props.searchQuery}"</cite></h2>
        </div>
        }
        <Container>
          {results}
        </Container>
			</>
		)
	}
}

export default CardsResults;