import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import ReactHtmlParser from "react-html-parser";

class Refund extends Component {
    constructor() {
        super();
        this.state = {
            refund_policy: "",
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get('/refundData').then((response) => {
            if(response.status == 200) {
                this.setState({refund_policy: response.data[0]['refund_policy'], isLoading: false})
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
                                { ReactHtmlParser(this.state.refund_policy) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Refund;
