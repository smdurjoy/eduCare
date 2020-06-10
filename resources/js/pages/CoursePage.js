import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Courses from "../components/courses";
import TopBanner from "../components/TopBanner";
import Banner from "../components/banner";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner />
                <Courses />
            </Fragment>
        );
    }
}

export default CoursePage;
