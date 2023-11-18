import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

function Tablegird() {
    return (
        <>
            <div className="table-responsive">
                <Table className="primary-grid">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Task</TableCell>
                            <TableCell align="right" className="text-center">User Type</TableCell>
                            <TableCell align="right" className="text-center" width="100">Status</TableCell>
                            <TableCell align="right" className="text-center" width="80">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell scope="row">Jane smith</TableCell>
                            <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                            <TableCell align="right" className="text-center">Admin</TableCell>
                            <TableCell align="right" className="text-center">
                                <span className="status-badge success">Active</span>
                            </TableCell>
                            <TableCell align="right" className="btn-list text-center text-nowrap">
                                <div>
                                    <Button className="btn btn-icon" title="Edit">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/edit.svg'} alt="" />
                                    </Button>
                                    <Button className="btn btn-icon" title="Delete">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/delete.svg'} alt="" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Jane smith</TableCell>
                            <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                            <TableCell align="right" className="text-center">User</TableCell>
                            <TableCell align="right" className="text-center">
                                <span className="status-badge danger">Inactive</span>
                            </TableCell>
                            <TableCell align="right" className="btn-list text-center text-nowrap">
                                <div>
                                    <Button className="btn btn-icon" title="Edit">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/edit.svg'} alt="" />
                                    </Button>
                                    <Button className="btn btn-icon" title="Delete">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/delete.svg'} alt="" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Jane smith</TableCell>
                            <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                            <TableCell align="right" className="text-center">User</TableCell>
                            <TableCell align="right" className="text-center">
                                <span className="status-badge success">Active</span>
                            </TableCell>
                            <TableCell align="right" className="btn-list text-center text-nowrap">
                                <div>
                                    <Button className="btn btn-icon" title="Edit">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/edit.svg'} alt="" />
                                    </Button>
                                    <Button className="btn btn-icon" title="Delete">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/delete.svg'} alt="" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Jane smith</TableCell>
                            <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                            <TableCell align="right" className="text-center">Admin</TableCell>
                            <TableCell align="right" className="text-center">
                                <span className="status-badge danger">Inactive</span>
                            </TableCell>
                            <TableCell align="right" className="btn-list text-center text-nowrap">
                                <div>
                                    <Button className="btn btn-icon" title="Edit">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/edit.svg'} alt="" />
                                    </Button>
                                    <Button className="btn btn-icon" title="Delete">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/delete.svg'} alt="" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell scope="row">Jane smith</TableCell>
                            <TableCell align="right">Lorem ipsum dolor sit amet.</TableCell>
                            <TableCell align="right" className="text-center">Admin</TableCell>
                            <TableCell align="right" className="text-center">
                                <span className="status-badge success">Active</span>
                            </TableCell>
                            <TableCell align="right" className="btn-list text-center text-nowrap">
                                <div>
                                    <Button className="btn btn-icon" title="Edit">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/edit.svg'} alt="" />
                                    </Button>
                                    <Button className="btn btn-icon" title="Delete">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/delete.svg'} alt="" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Start table footer */}
                <div className="primary-grid-footer">
                    <span className="record-details">showing 5 results from 200</span>
                    <Pagination count={10} color="primary" />
                </div>
                {/* End table footer */}
            </div>
        </>
    );
};

export default Tablegird;