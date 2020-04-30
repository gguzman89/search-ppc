import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';

export default class SearchPage extends Component {
  render() {
      return(
          <>
            {/* navbar */}
            <div className="content-center mt-0"/>
                <Container fluid>
                  <br/>
                  <br/>
                  <SearchBars/>
                </Container>
          </>
      )
  }
}