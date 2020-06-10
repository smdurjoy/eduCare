import React, {Component, Fragment} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import navIcon from '../../images/navIcon.svg';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            navBarTitle: 'navTitle',
            navBarBack: 'navBackground',
            navBarItem: 'navItem',
            social: "ml-auto social"
        }

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        if(window.scrollY>100) {
            this.setState({navBarTitle:'navTitleScroll', navBarBack:'navBackgroundScroll', navBarItem: 'navItemScroll', social: 'ml-auto socialScroll'})
        }
        else {
            this.setState({navBarTitle:'navTitle', navBarBack:'navBackground', navBarItem: 'navItem', social: "ml-auto social"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar fixed="top" variant="dark" className={this.state.navBarBack}>
                    <Navbar.Brand className={this.state.navBarTitle}> <img src={navIcon}/> eLearning</Navbar.Brand>
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link> <NavLink className={this.state.navBarItem} to="/">Home</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} to="/courses">Courses</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} to="/ourTeam">Our Team</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                        <Nav.Link> <NavLink className={this.state.navBarItem} className="purchasesBtn" to="/contact">Purchase</NavLink></Nav.Link>
                    </Nav>
                    <div>
                        <a href="#" className={this.state.social}> <i class="fab fa-facebook-f"></i> </a>
                        <a href="#" className={this.state.social}> <i class="fab fa-twitter"></i> </a>
                        <a href="#" className={this.state.social}> <i class="fab fa-youtube"></i> </a>
                        <a href="#" className={this.state.social}> <i class="fab fa-instagram"></i> </a>
                        <a href="#" className={this.state.social}> <i class="fas fa-search"></i> </a>
                    </div>
                </Navbar>
            </Fragment>
        );
    }
}

export default Navigation;
