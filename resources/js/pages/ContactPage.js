import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Contact from "../components/contact";
import Banner from "../components/banner";
import Footer from "../components/Footer";

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner title="Contact Us"/>
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactPage;
