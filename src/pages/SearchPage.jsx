import React, {Component} from 'react';
import { Container } from 'reactstrap';

// components
import SearchBars from '../components/search/SearchBars';

export default class SearchPage extends Component {
    render() {
        return(
            <>
                {/* navbar */}
                {/* <div className="page-header section-dark"> */}
                    <div className="filter"/>
                    <div className="content-center mt-0"/>
                        <Container>
                            <div className="title-brand">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <SearchBars/>
                        </Container>
                {/* </div> */}
            </>
        )
    }
}