import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";

class OurTeamPage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Banner title="Our Team"/>
            </Fragment>
        );
    }
}

export default OurTeamPage;
