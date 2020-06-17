import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Refund from "../components/Refund";
import Footer from "../components/Footer";

class RefundPolicyPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Banner title="Refund Policy"/>
                <Refund/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicyPage;
