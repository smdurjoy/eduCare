import React, {Component, Fragment} from 'react';
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class About extends Component {
    constructor() {
        super();
        this.state = {
            about_us: "",
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get('/aboutData').then((response) => {
            if(response.status == 200) {
                this.setState({about_us: response.data[0]['about_us'], isLoading: false})
            } else {
                this.setState({isLoading: false, isError: true})
            }
        }).catch((error) => {
            this.setState({isLoading: false, isError: true})
        })
    }

    render() {
        if(this.state.isLoading == true) {
            return <Loading/>
        } else if(this.state.isError == true) {
            return <WentWrong/>
        } else {
            return (
                <Fragment>
                    <Container className="information">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                { ReactHtmlParser(this.state.about_us) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default About;
