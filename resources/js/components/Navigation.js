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
                <Navbar fixed="top" variant="dark" className={this.state.navBarBack} expand="md">
                    <Navbar.Brand className={this.state.navBarTitle}> <img src={navIcon}/> eLearning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/" activeStyle={{color:"#5fa2ff"}}>Home</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/courses" activeStyle={{color:"#5fa2ff"}}>Courses</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/ourTeam" activeStyle={{color:'#5fa2ff'}}>Our Team</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink className={this.state.navBarItem} to="/contact" activeStyle={{color:'#5fa2ff'}}>Contact</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className={this.state.navBarItem} className="purchasesBtn" to="/contact">Class Room</NavLink></Nav.Link>
                        </Nav>
                        <div>
                            <a href="#" className={this.state.social}> <i className="fab fa-facebook-f"></i> </a>
                            <a href="#" className={this.state.social}> <i className="fab fa-twitter"></i> </a>
                            <a href="#" className={this.state.social}> <i className="fab fa-youtube"></i> </a>
                            <a href="#" className={this.state.social}> <i className="fab fa-instagram"></i> </a>
                            <a href="#" className={this.state.social}> <i className="fas fa-search"></i> </a>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Navigation;
