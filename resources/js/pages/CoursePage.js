import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Courses from "../components/courses";
import TopBanner from "../components/TopBanner";
import Banner from "../components/banner";
import Footer from "../components/Footer";

class CoursePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner title="Our Courses"/>
                <Courses />
                <Footer />
            </Fragment>
        );
    }
}

export default CoursePage;
