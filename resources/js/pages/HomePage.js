import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import TopBanner from "../components/TopBanner";
import CourseTopic from "../components/courseTopic";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <TopBanner />
                <CourseTopic />
            </Fragment>
        );
    }
}

export default HomePage;
