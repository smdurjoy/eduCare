import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Terms from "../components/Terms";
import Footer from "../components/Footer";

class TermsPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Banner title="Terms and Condition"/>
                <Terms/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;
