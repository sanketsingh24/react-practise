import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as action from '../actions/actions'
import { Card, CardText, CardHeader, CardTitle } from 'reactstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.Ne_addA= 0;
    this.Ne_addDV= 0;
    this.Ne_val= 0;
    }   
  


  calcValue (id) {
    let _this = this;
    switch (id) {
        case "inputA":
            _this.props.updateA(Number(document.getElementById(id).value))
            _this.props.updateNe();
            _this.props.updateBr();
            break;
        case "inputB":
            _this.props.updateB(Number(document.getElementById(id).value))
            _this.props.updateNe();
            _this.props.updateBr();
            break;
        case "inputC":
            _this.props.updateC(Number(document.getElementById(id).value))
            _this.props.updateNe();
            _this.props.updateBr();
            break;
        case "inputM":
            _this.props.updateM(Number(document.getElementById(id).value))
            _this.props.updateNe();
            _this.props.updateBr();
            break;
        
        default:
            break;
    }
  }

  toggleNSave() {
    let _this = this;
    
    this.props.addPos(_this.props.pos);
    let tbl_str = "<tr>\
				<td>" + this.props.pos + "</td>\
				<td>" + this.props.A + "</td>\
				<td>" + this.props.B + "</td>\
				<td>" + this.props.DP + "%</td>\
				<td>" + this.props.DV + "</td>\
				<td>" + this.props.B + "</td>\
            </tr>";
    document.getElementById("resTbl").innerHTML += tbl_str;	
    
    this.props.updateA(0);
    this.props.updateB(0);
    this.props.updateC(0);
    this.props.updateM(0);
    this.props.updateNe();
    this.props.updateBr();

    this.props.toggle();   
    console.log("inhere");
  }

  cancel () {
    this.props.updateA(0);
    this.props.updateB(0);
    this.props.updateC(0);
    this.props.updateM(0);
    this.props.updateNe();
    this.props.updateBr();

    this.props.toggle();
  }

  render() {
    return (
        <div>
            <Col md="12">
                <Col md="3">&nbsp;</Col>
                <Col md="12">
                    <center><h3>Shop Purpose Calculator</h3></center>
                    <div >
                            <Col md="12">
                                <Col className="form-group">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">A</InputGroupAddon>
                                        <Input placeholder="Please input A" type="number" step="1" id="inputA" onChange={this.calcValue.bind(this,"inputA")} />
                                    </InputGroup>
                                </Col>
                            </Col>
                            <Col md="12">
                                <Col className="form-group">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">B</InputGroupAddon>
                                        <Input placeholder="Please input B" type="number" step="1" id="inputB" onChange={this.calcValue.bind(this,"inputB")} />
                                    </InputGroup>
                                </Col>
                            </Col>
                        <Col md="12">
                                <Col className="form-group">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">C</InputGroupAddon>
                                        <Input placeholder="Please input C" type="number" step="1" id="inputC" onChange={this.calcValue.bind(this,"inputC")} />
                                    </InputGroup>
                                </Col>
                            </Col>
                            <Col md="12">
                                <Col  className="form-group">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">M</InputGroupAddon>
                                    <Input placeholder="Please input M" type="number" step="1" id="inputM" onChange={this.calcValue.bind(this,"inputM")} />
                                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                                </InputGroup>
                                </Col>
                            </Col>
                        <Col md="12">
                                <Col className="form-group">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">DP</InputGroupAddon>
                                        <Input type="number" readOnly step="1" id="inputDP" value={this.props.DP} />
                                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </Col>
                            <Col md="12">
                                <Col  className="form-group">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">DV</InputGroupAddon>
                                        <Input type="number" readOnly step="1" id="inputDV" value={this.props.DV} />
                                    </InputGroup>
                                </Col>
                            </Col>
                        <Col md="12">
                            <Col md="10">
                                <Col className="form-group">
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                            <th>#</th>
                                            <th>A</th>
                                            <th>D</th>
                                            <th>B</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Ne</td>
                                            <td>{this.props.Ne_A}</td>
                                            <td>{this.props.Ne_D}</td>
                                            <td>{this.props.Ne_B}</td>
                                            </tr>
                                            <tr>
                                            <td>M</td>
                                            <td>{this.props.M_A}</td>
                                            <td>{this.props.M_D}</td>
                                            <td>{this.props.M_B}</td>
                                            </tr>
                                            <tr>
                                            <td>Br</td>
                                            <td>{this.props.Br_A}</td>
                                            <td>{this.props.Br_D}</td>
                                            <td>{this.props.Br_B}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Col>
                            <Col md="12">	
                                <Col md="12" className="form-group">
                                    <Button color="primary" onClick={this.toggleNSave.bind(this)}>Save</Button>{' '}
                                    <Button color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
                                </Col>
                            </Col>
                        </Col>
                    </div>
                </Col>
            </Col>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  A: state.A,
  B: state.B,
  C: state.C,
  M: state.M,
  DP: state.DP,
  DV: state.DV,
  Ne_A: state.Ne_A,
  Ne_B: state.Ne_B,
  Ne_D: state.Ne_D,
  Br_A: state.Br_A,
  Br_B: state.Br_B,
  Br_D: state.Br_D,
  M_A: state.M_A,
  M_B: state.M_B,
  M_D: state.M_D,
  pos: state.pos,
  Ne_addA: state.Ne_addA,
  Ne_addDV: state.Ne_addDV
})

const mapDispatchToProps = dispatch => ({
  updateA: value => dispatch(action.updateA(value)),
  updateB: value => dispatch(action.updateB(value)),
  updateC: value => dispatch(action.updateC(value)),
  updateM: value => dispatch(action.updateM(value)),
  updateBr: () => dispatch(action.updateBr()),
  updateNe: () => dispatch(action.updateNe()),
  addPos: value => dispatch(action.addPos(value)),
  addTable: (A, DV) => dispatch(action.addTable(A, DV))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);