import { Badge, Button, Menu, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {

    // Notification
    const [notificationAnchor, setNotificationAnchor] = React.useState(null);
    const notificationHandleClick = (event) => {
        setNotificationAnchor(event.currentTarget);
    }
    const notificationHandleClose = () => {
        setNotificationAnchor(null);
    }

    // Message
    const [messageAnchor, setMessagAnchor] = React.useState(null);
    const messageHandleClick = (event) => {
        setMessagAnchor(event.currentTarget);
    }
    const messageHandleClose = () => {
        setMessagAnchor(null);
    }

    // User
    const [userAnchor, setUserAnchor] = React.useState(null);
    const userHandleClick = (event) => {
        setUserAnchor(event.currentTarget);
    }
    const userHandleClose = () => {
        setUserAnchor(null);
    }

    // logout
    const history = useHistory();
    const logout = (e) => {
        history.push("/login");
    }
    return (
        <>
            {/* header start */}
            <header className="header">
                <div className="left-part">
                    {/* Menu Button Start */}
                    <Button className="menu-btn d-lg-none" onClick={() => document.body.classList.toggle('toggle-nav')}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/menu.svg'} alt="Open Menu" />
                    </Button>
                    {/* Menu Button End */}
                    <a onClick={e => e.preventDefault()} href="-" className="nav-brand d-lg-none" title="Infinity">
                        <img className="d-sm-inline-block d-none" src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="Infinity" />
                        <img className="d-sm-none" src={process.env.PUBLIC_URL + '/assets/images/logo-primary.svg'} alt="Infinity" />
                    </a>
                    {/* Header Search Start */}
                    <div className="header-search">
                        <TextField placeholder="Search..." />
                    </div>
                    {/* Header Search End */}
                </div>
                <div className="right-part">

                    {/* Search Start */}
                    <Button title="Search" className="btn-icon search-btn d-lg-none" onClick={() => {
                        document.body.classList.remove('toggle-nav');
                        document.body.classList.toggle('toggle-search');
                    }}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/search-grey.svg'} alt="Search" />
                    </Button>
                    {/* Search End */}

                    {/* Notification Dropdown Start */}
                    <div className="alert-dropdown">
                        <Button aria-controls="notificationMenu" aria-haspopup="true" className="btn-icon btn" onClick={notificationHandleClick}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/notification.svg'} alt="" />
                            <Badge variant="dot"></Badge>
                        </Button>
                        <Menu
                            id="notificationMenu"
                            anchorEl={notificationAnchor}
                            open={Boolean(notificationAnchor)}
                            className="default-menu"
                            keepMounted
                            onClose={notificationHandleClose}
                        >
                            <div className="alert-header">
                                Notifications
                            </div>
                            <div className="all-alerts">
                                <MenuItem onClick={notificationHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={notificationHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={notificationHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={notificationHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={notificationHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                            </div>
                            <div className="alert-footer">
                                Show All <img src={process.env.PUBLIC_URL + '/assets/images/chevron-down.svg'} alt="" />
                            </div>
                        </Menu>
                    </div>
                    {/* Notification Dropdown End */}

                    {/* Message Dropdown Start */}
                    <div className="alert-dropdown">
                        <Button aria-controls="messageMenu" aria-haspopup="true" className="btn-icon btn" onClick={messageHandleClick}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/message.svg'} alt="" />
                            <Badge variant="dot"></Badge>
                        </Button>
                        <Menu
                            id="messageMenu"
                            anchorEl={messageAnchor}
                            className="default-menu"
                            open={Boolean(messageAnchor)}
                            keepMounted
                            onClose={messageHandleClose}
                        >
                            <div className="alert-header">
                                chats
                            </div>
                            <div className="all-alerts">
                                <MenuItem onClick={messageHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={messageHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={messageHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={messageHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                                <MenuItem onClick={messageHandleClose}>
                                    <i>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/inner-notification.svg'} alt="" />
                                    </i>
                                    <span>Suzzeth Bungaos tagged you and
                                        18 others in a post</span>
                                    <em>Oct 3, 2017 9:00 PM</em>
                                </MenuItem>
                            </div>
                            <div className="alert-footer">
                                Show All <img src={process.env.PUBLIC_URL + '/assets/images/chevron-down.svg'} alt="" />
                            </div>
                        </Menu>
                    </div>
                    {/* Message Dropdown End */}

                    {/* Profile Dropdown Start */}
                    <div className="user-dropdown">

                        <Button aria-controls="userMenu" aria-haspopup="true" className="btn btn-icon" onClick={userHandleClick}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/avtar.png'} alt="" />
                            <span>Urvi Thesiya</span>
                        </Button>
                        <Menu
                            anchorEl={userAnchor}
                            id="userMenu"
                            keepMounted
                            open={Boolean(userAnchor)}
                            onClose={userHandleClose}
                            className="default-menu user-menu"
                        >
                            <MenuItem onClick={userHandleClose} title="Profile">Profile</MenuItem>
                            <MenuItem onClick={userHandleClose} title="Settings">Settings</MenuItem>
                            <MenuItem onClick={userHandleClose} title="Change Password">Change Password</MenuItem>
                            <MenuItem onClick={logout} title="Logout">Logout</MenuItem>
                        </Menu>
                    </div>
                    {/* Profile Dropdown End */}
                </div>
            </header>
            {/* header end */}
        </>
    );
};
export default Header;