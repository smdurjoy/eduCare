import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import TopBanner from "../components/TopBanner";
import CourseTopic from "../components/courseTopic";
import TopCourses from "../components/topCourses";
import Loading from "../components/Loading";
import TotalCount from "../components/totalCount";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <TopBanner />
                <CourseTopic />
                <TopCourses />
                <TotalCount />
            </Fragment>
        );
    }
}

export default HomePage;
