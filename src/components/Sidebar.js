import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    let [calendarSubmenuVisible, setCalendarSubMenu] = React.useState(false);
    let [folderSubmenuVisible, setFolderSubMenu] = React.useState(false);
    let [analysticSubmenuVisible, setAnalysticSubMenu] = React.useState(false);
    let [pagesSubmenuVisible, setPagesSubMenu] = React.useState(false);
    let [mailboxSubmenuVisible, setMailboxSubMenu] = React.useState(false);

    return (
        <>
            {/* sidebar Start */}
            <aside className="sidebar">
                <div className="scroller">
                    <div>
                        <a onClick={e => e.preventDefault()} href="-" title="My Theme" className="logo">
                            <img src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="My Theme" />
                        </a>
                    </div>
                    <nav className="main-navigation">
                        <ul>
                            <li className="active">
                                <Link to="/Dashboard" title="Dashboard">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/dashboard.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/dashboard-primary.svg'} alt="" />
                                    </i>Dashboard
                                </Link>
                            </li>
                            <li className={"has-menu " + (calendarSubmenuVisible ? 'open ' : '')}>
                                <a onClick={e => {
                                    e.preventDefault();
                                    setCalendarSubMenu(!calendarSubmenuVisible);
                                    setFolderSubMenu(false); setAnalysticSubMenu(false); setPagesSubMenu(false); setMailboxSubMenu(false);
                                }} href="-" title="Calendar">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/calendar.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/calendar-primary.svg'} alt="" />
                                    </i>Calendar
							    </a>
                                <ul>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 11">SubLink 11</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 12">SubLink 12</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 13">SubLink 13</a></li>
                                </ul>
                            </li>
                            <li className={"has-menu " + (folderSubmenuVisible ? 'open' : '')}>
                                <a onClick={e => {
                                    e.preventDefault();
                                    setFolderSubMenu(!folderSubmenuVisible);
                                    setCalendarSubMenu(false); setAnalysticSubMenu(false); setPagesSubMenu(false); setMailboxSubMenu(false);
                                }} href="-" title="Folder">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/folder.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/folder-primary.svg'} alt="" />
                                    </i>Folder
							    </a>
                                <ul>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 11">SubLink 11</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 12">SubLink 12</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 13">SubLink 13</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 14">SubLink 14</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 15">SubLink 15</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 16">SubLink 16</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 17">SubLink 17</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 18">SubLink 18</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 19">SubLink 19</a></li>
                                </ul>
                            </li>
                            <li className={"has-menu " + (analysticSubmenuVisible ? 'open' : '')}>
                                <a onClick={e => {
                                    e.preventDefault();
                                    setAnalysticSubMenu(!analysticSubmenuVisible);
                                    setCalendarSubMenu(false); setFolderSubMenu(false); setPagesSubMenu(false); setMailboxSubMenu(false);
                                }} href="-" title="Analytics">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/analytics.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/analytics-primary.svg'} alt="" />
                                    </i>
								Analytics</a>
                                <ul>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 11">SubLink 11</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 12">SubLink 12</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 13">SubLink 13</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 14">SubLink 14</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 15">SubLink 15</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 16">SubLink 16</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 17">SubLink 17</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 18">SubLink 18</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 19">SubLink 19</a></li>
                                </ul>
                            </li>
                            <li className={"has-menu " + (pagesSubmenuVisible ? 'open' : '')} >
                                <a onClick={e => {
                                    e.preventDefault();
                                    setPagesSubMenu(!pagesSubmenuVisible);
                                    setCalendarSubMenu(false); setFolderSubMenu(false); setAnalysticSubMenu(false); setMailboxSubMenu(false);
                                }} href="-" title="Pages">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/pages.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/pages-primary.svg'} alt="" />
                                    </i>Pages
    							</a>
                                <ul>
                                    <li><Link to="/Innerpage" title="InnerPage">InnerPage</Link></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 12">SubLink 12</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 13">SubLink 13</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 14">SubLink 14</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 15">SubLink 15</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 19">SubLink 19</a></li>
                                </ul>
                            </li>
                            <li className={"has-menu " + (mailboxSubmenuVisible ? 'open' : '')}>
                                <a onClick={e => {
                                    e.preventDefault();
                                    setMailboxSubMenu(!mailboxSubmenuVisible);
                                    setCalendarSubMenu(false); setFolderSubMenu(false); setAnalysticSubMenu(false); setPagesSubMenu(false);
                                }} href="-" title="Mailbox">
                                    <i className="nav-icon">
                                        <img className="default" src={process.env.PUBLIC_URL + '/assets/images/mailbox.svg'} alt="" />
                                        <img className="active" src={process.env.PUBLIC_URL + '/assets/images/mailbox-primary.svg'} alt="" />
                                    </i>Mailbox
							    </a>
                                <ul>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 11">SubLink 11</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 12">SubLink 12</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 13">SubLink 13</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 14">SubLink 14</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 15">SubLink 15</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 16">SubLink 16</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 17">SubLink 17</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 18">SubLink 18</a></li>
                                    <li><a onClick={e => e.preventDefault()} href="-" title="SubLink 19">SubLink 19</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            {/* sidebar end */}
            <div className="overlayer" onClick={() => document.body.classList.remove('toggle-nav', 'toggle-search')}></div>
        </>
    );
};
export default Sidebar;