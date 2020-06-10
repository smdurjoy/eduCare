import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Contact from "../components/contact";
import Banner from "../components/banner";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner />
                <Contact />
            </Fragment>
        );
    }
}

export default ContactPage;
