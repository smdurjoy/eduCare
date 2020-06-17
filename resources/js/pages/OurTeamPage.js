import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/banner";

class OurTeamPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

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
