import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";

class PrivacyPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Banner title="Privacy Policy"/>
                <Privacy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;
