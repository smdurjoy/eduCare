import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Contact from "../components/contact";
import Banner from "../components/banner";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner title="Contact Us"/>
                <Contact />
            </Fragment>
        );
    }
}

export default ContactPage;
