import React, {Component, Fragment} from 'react';
import Navigation from "../components/Navigation";
import TopBanner from "../components/TopBanner";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <TopBanner />
            </Fragment>
        );
    }
}

export default HomePage;
