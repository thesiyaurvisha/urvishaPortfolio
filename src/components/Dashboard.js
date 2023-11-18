import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from './Table';

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Mp-Theme-18 | Dashboard</title>
            </Helmet>
            <div className="wrapper">
                {/* Header Start */}
                <Header />
                {/* Header End */}
                {/* Sidebar Start */}
                <Sidebar />
                {/* Sidebar End */}
                <main className="main-content">
                    <div className="current-page">
                        <img src={process.env.PUBLIC_URL + '/assets/images/dashboardpage-title.svg'} alt="" />Dashboard
                    </div>
                    {/* Statistics card block start */}
                    <div className="row">
                        {/* laptop card */}
                        <div className="col-xl-3 col-md-6">
                            <a onClick={e => e.preventDefault()} href="-" title="Total Leads" className="small-card purple">
                                <img src={process.env.PUBLIC_URL + '/assets/images/laptop.svg'} alt="" />
                                <p>Laptop</p>
                                <h4 className="count">15329</h4>
                                <img className="top-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                                <img className="bottom-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                            </a>
                        </div>
                        {/* desktop card */}
                        <div className="col-xl-3 col-md-6">
                            <a onClick={e => e.preventDefault()} href="-" title="Total Leads" className="small-card blue">
                                <img src={process.env.PUBLIC_URL + '/assets/images/desktop.svg'} alt="" />
                                <p>Desktop</p>
                                <h4 className="count">5692</h4>
                                <img className="top-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                                <img className="bottom-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                            </a>
                        </div>
                        {/* android card */}
                        <div className="col-xl-3 col-md-6">
                            <a onClick={e => e.preventDefault()} href="-" title="Total Leads" className="small-card orange"
                            >
                                <img src={process.env.PUBLIC_URL + '/assets/images/mobile.svg'} alt="" />
                                <p>Android</p>
                                <h4 className="count">2598</h4>
                                <img className="top-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                                <img className="bottom-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                            </a>
                        </div>
                        {/* iPhone card */}
                        <div className="col-xl-3 col-md-6">
                            <a onClick={e => e.preventDefault()} href="-" title="Total Leads" className="small-card green">
                                <img src={process.env.PUBLIC_URL + '/assets/images/iPhone.svg'} alt="" />
                                <p>iPhone</p>
                                <h4 className="count">6981</h4>
                                <img className="top-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                                <img className="bottom-circle" src={process.env.PUBLIC_URL + '/assets/images/card-bg.svg'} alt="" />
                            </a>
                        </div>
                    </div >
                    {/* Statistics card block end */}

                    {/* Grid start */}
                    <div className="card-block mb-0" >
                        <h4 className="card-title">Table Data</h4>
                        <Table />
                    </div>
                </main >
            </div >
        </>
    );
};
export default Dashboard;