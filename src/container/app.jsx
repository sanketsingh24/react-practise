import React, { Component } from 'react';
import { Col, Card, CardHeader, Button, Table } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dialog from './modal';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div id="mainDiv" className="">
            <Col md="12">
                    <Col md="3">&nbsp;</Col>
                    <Col md="6">
                        <Card className="panel panel-default">
                            <CardHeader className="panel-heading shadow-pan">
                                <center><h3>Shop Purpose Calculator</h3></center>
                            </CardHeader>
                            <div className="panel-body shadow-pan">
                                <Col md="2" className="form-group">
                                    <Dialog />
                                </Col>
                                <Col className="form-group shadow-tbl">
                                    <Col md="12" className="ht-tbl">
                                        <Table bordered>
                                            <thead className="tblHeading">
                                                <tr>
                                                <th>Pos</th>
                                                <th>A</th>
                                                <th>B</th>
                                                <th>DP</th>
                                                <th>DV</th>
                                                <th>B</th>
                                                </tr>
                                            </thead>
                                            <tbody id="resTbl">
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <Col md="8">&nbsp;</Col>
                                    <Col md="4">
                                        <Table bordered>
                                            <tbody>
                                                <tr>
                                                    <td>Ne</td>
                                                    <td id="Ne_addA"></td>
                                                    <td id="Ne_addDV"></td>
                                                    <td id="Ne_val"></td>
                                                </tr>
                                                <tr>
                                                    <td>M</td>
                                                    <td id="M_A"></td>
                                                    <td id="M_DV"></td>
                                                    <td id="M_val"></td>
                                                </tr>
                                                <tr>
                                                    <td>Br</td>
                                                    <td id="Br_A"></td>
                                                    <td id="Br_DV"></td>
                                                    <td id="Br_val"></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Col>
                            </div>
                        </Card>
                    </Col>
            </Col>

        </div>
        )
    }
}

/**
 * <i className="closeBtn" id="closeBtn" onClick={this.closeBtn}><img src="btn_close.png"/></i>
                                
 */