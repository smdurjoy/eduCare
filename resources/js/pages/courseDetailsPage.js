import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import CourseDetails from "../components/CourseDetails";

class CourseDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state = {
            courseId: match.params.courseId,
        }
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <CourseDetails id={this.state.courseId}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;
