import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import About from "../components/About";
import Footer from "../components/Footer";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Banner title="About Us"/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;
