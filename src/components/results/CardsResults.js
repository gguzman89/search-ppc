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

		return(
			<>
        <Container>
          {results}
        </Container>
			</>
		)
	}
}

export default CardsResults;