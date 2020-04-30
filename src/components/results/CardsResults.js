import React, { Component } from 'react';
import { 
	Card,
  CardBody,
  Container,
  CardLink
} from 'reactstrap';


export default class CardsResults extends Component {
	render() {
		return(
			<>
        <Container>
          <Card>
            <CardBody>
              <CardLink href="/#/">
                <h6> Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags.</h6>
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardLink href="/#/">
                <h6>Marshall Islands prohibit the importation, manufacturing, sale and distribution of styrofoam cups and plates, disposable plastic cups and plates, and plastic shopping bags.</h6>
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardLink href="/#/">
                <h6>Disposable Foam Container Toolkit – NRCM</h6>
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardLink href="/#/">
                <h6>Disposable Foam Container Toolkit by Natural Resources Council of Maine</h6>
              </CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardLink href="/#/">
                <h6>Disposable Foam Container Toolkit - NRCM</h6>
              </CardLink>
            </CardBody>
          </Card>
        </Container>
			</>
		)
	}
}