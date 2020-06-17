import React, {Component, Fragment} from 'react';
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class Privacy extends Component {
    constructor() {
        super();
        this.state = {
            privacy_policy: "",
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get('/privacyData').then((response) => {
            if(response.status == 200) {
                this.setState({privacy_policy: response.data[0]['privacy_policy'], isLoading: false})
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
                                { ReactHtmlParser(this.state.privacy_policy) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Privacy;
