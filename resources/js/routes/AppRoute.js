import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import CoursePage from "../pages/CoursePage";
import OurTeamPage from "../pages/OurTeamPage";
import ContactPage from "../pages/ContactPage";
import CourseDetailsPage from "../pages/courseDetailsPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import PrivacyPage from "../pages/PrivacyPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/courses" component={CoursePage}/>
                    <Route exact path="/ourTeam" component={OurTeamPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/courseDetails/:courseId/:courseName" component={CourseDetailsPage}/>
                    <Route exact path="/refund" component={RefundPolicyPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
