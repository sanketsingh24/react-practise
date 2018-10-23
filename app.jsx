import React from 'react';
import ReactDOM from 'react-dom';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col, div} from 'reactstrap';
import { Card, CardText, CardHeader, CardTitle } from 'reactstrap';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.setA = 0.0;
		this.setB = 1.0;
		this.setC = 0.0;
		this.setM = 0.0;
		this.getDV = 0.0;
		this.getDP = 0.0;
		this.Ne_A = 0.0;
		this.Ne_B = 0.0;
		this.Ne_D = 0.0;
		this.M_A = 0.0;
		this.M_B = 0.0;
		this.M_D = 0.0;
		this.Br_A = 0.0;
		this.Br_B = 0.0;
		this.Br_D = 0.0;
		this.Ne_addA = 0.0;
		this.Ne_addDV = 0.0;
		this.Ne_val = 0.0;
		this.pos = 0;
		this.tbl_str = "";
		this.toFixedNum = 2;

		this.calcValue = this.calcValue.bind(this);
		this.insertVal = this.insertVal.bind(this);
		this.initTable = this.initTable.bind(this);
		this.showTable = this.showTable.bind(this);
		this.getValue = this.getValue.bind(this);
		this.selectProfit = this.selectProfit.bind(this);
		this.selectLoss = this.selectLoss.bind(this);
		this.selectCalc = this.selectCalc.bind(this);
		this.closeBtn = this.closeBtn.bind(this);
		this.state = {};
	}

	getValue(){
		// Get input A, B, C, M, DP, DV
		this.setA = Number(document.getElementById("inputA").value);
		this.setB = Number(document.getElementById("inputB").value);
		this.setC = Number(document.getElementById("inputC").value);
		this.setM = Number(document.getElementById("inputM").value);
		this.getDV = Number(document.getElementById("inputDV").value);
		this.getDP = Number(document.getElementById("inputDP").value);
	}

	calcValue() {

		this.getValue();

		//Calculate
		this.getDV = this.setB - this.setA;
		this.getDP = (1 - this.setA / this.setB) * 100;
		this.getDV = this.getDV.toFixed(this.toFixedNum);
		this.getDP = this.getDP.toFixed(this.toFixedNum);

		this.Ne_A = this.setA;
		this.Ne_B = this.setB;
		this.Ne_D = this.setB - this.setA;

		this.M_A = this.setA * this.setM / 100;
		this.M_B = this.setB * this.setM / 100;
		this.M_D = this.Ne_D * this.setM / 100;
		this.M_A = this.M_A.toFixed(this.toFixedNum);
		this.M_B = this.M_B.toFixed(this.toFixedNum);
		this.M_D = this.M_D.toFixed(this.toFixedNum);

		this.Br_A = Number(this.Ne_A) + Number(this.M_A);
		this.Br_B = Number(this.Ne_B) + Number(this.M_B);
		this.Br_D = Number(this.Ne_D) + Number(this.M_D);
		this.Br_A = this.Br_A.toFixed(this.toFixedNum);
		this.Br_B = this.Br_B.toFixed(this.toFixedNum);
		this.Br_D = this.Br_D.toFixed(this.toFixedNum);

		//Set state
		this.setState({

		});
	}

	initTable(){
		this.pos = 0;
		this.Ne_addA = 0;
		this.Ne_addDV = 0;
		this.Ne_val = this.Ne_addA + this.Ne_addDV;
		document.getElementById("resTbl").innerHTML = "";	
		document.getElementById("Ne_addA").innerHTML = "";
		document.getElementById("Ne_addDV").innerHTML = "";
		document.getElementById("Ne_val").innerHTML = "";
	}

	showTable(){

		this.getValue();
	
		this.Ne_addA += this.setA;
		this.Ne_addDV += this.getDV;
		this.Ne_val = this.Ne_addA + this.Ne_addDV;

		this.pos += 1;
		document.getElementById("mainDiv").className = "showDiv1";
		document.getElementById("calcDiv").className = "hideDiv";

		this.tbl_str += "<tr>\
				<td>" + this.pos + "</td>\
				<td>" + this.setA + "</td>\
				<td>" + this.setB + "</td>\
				<td>" + this.getDP + "%</td>\
				<td>" + this.getDV + "</td>\
				<td>" + this.setB + "</td>\
			</tr>";
		document.getElementById("resTbl").innerHTML = this.tbl_str;	
		document.getElementById("Ne_addA").innerHTML = this.Ne_addA;
		document.getElementById("Ne_addDV").innerHTML = this.Ne_addDV;
		document.getElementById("Ne_val").innerHTML = this.Ne_val;
	}

	insertVal(){
		document.getElementById("calcDiv").className = "showDiv2";
	}
	selectProfit(){
		this.initTable();
		document.getElementById("mainDiv").className = "showDiv1";
	}
	selectLoss(){
		this.initTable();
		document.getElementById("mainDiv").className = "showDiv1";
	}
	selectCalc(){
		document.getElementById("mainDiv").className = "showDiv1";
	}

	closeBtn(){
		document.getElementById("mainDiv").className = "hideDiv";
	}

	render() {
		return (
			<Col md="12">
				<div id="selectDiv" className="col-md-12 showDiv">
					<Col md="12">
							<Card className="panel panel-default">
								<div className="panel-body shadow-pan">
									<Col md="12">
										<Col md="12">
											<Col md="10">&nbsp;</Col>
											<Col md="2">
												<b>Home Log</b>
											</Col>
										</Col>
										<Col md="12">
											<Col md="3">
												<Col className="form-group">
													<Button color="primary" className="btn-size" onClick={this.selectProfit}>Profit</Button>{' '}
												</Col>
											</Col>
										</Col>
										<Col md="12">
											<Col md="3">
												<Col className="form-group">
													<Button color="primary" className="btn-size" onClick={this.selectLoss}>Loss</Button>{' '}
												</Col>
											</Col>
										</Col>
										<Col md="12">
											<Col md="3">
												<Col className="form-group">
													<Button color="primary" className="btn-size" onClick={this.selectCalc}>Calculator</Button>{' '}
												</Col>
											</Col>
										</Col>
									</Col>
								</div>
							</Card>
					</Col>
				</div>
				<div id="calcDiv" className="hideDiv">
					<Col md="12">
						<Col md="3">&nbsp;</Col>
						<Col md="6">
							<Card className="panel panel-default">
								<CardHeader className="panel-heading shadow-pan">
									<center><h3>Shop Purpose Calculator</h3></center>
								</CardHeader>
								<div className="panel-body shadow-pan">
									<Col md="12">
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>A</InputGroupAddon>
													<Input placeholder="Please input A" type="number" step="1" id="inputA" onChange={this.calcValue} />
												</InputGroup>
											</Col>
										</Col>
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>B</InputGroupAddon>
													<Input placeholder="Please input B" type="number" step="1" id="inputB" onChange={this.calcValue} />
												</InputGroup>
											</Col>
										</Col>
									</Col>
									<Col md="12">
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>C</InputGroupAddon>
													<Input placeholder="Please input C" type="number" step="1" id="inputC" onChange={this.calcValue} />
												</InputGroup>
											</Col>
										</Col>
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>M</InputGroupAddon>
													<Input placeholder="Please input M" type="number" step="1" id="inputM" onChange={this.calcValue} />
													<InputGroupAddon>%</InputGroupAddon>
												</InputGroup>
											</Col>
										</Col>
									</Col>
									<Col md="12">
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>DP</InputGroupAddon>
													<Input type="number" readOnly step="1" id="inputDP" value={this.getDP} />
													<InputGroupAddon>%</InputGroupAddon>
												</InputGroup>
											</Col>
										</Col>
										<Col md="6">
											<Col className="form-group">
												<InputGroup>
													<InputGroupAddon>DV</InputGroupAddon>
													<Input type="number" readOnly step="1" id="inputDV" value={this.getDV} />
												</InputGroup>
											</Col>
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
											            <td>{this.Ne_A}</td>
											            <td>{this.Ne_D}</td>
											            <td>{this.Ne_B}</td>
											          </tr>
											          <tr>
											            <td>M</td>
											            <td>{this.M_A}</td>
											            <td>{this.M_D}</td>
											            <td>{this.M_B}</td>
											          </tr>
											          <tr>
											            <td>Br</td>
											            <td>{this.Br_A}</td>
											            <td>{this.Br_D}</td>
											            <td>{this.Br_B}</td>
											          </tr>
											        </tbody>
											    </Table>
											</Col>
										</Col>
										<Col md="2">	
											<Col className="form-group">
												<Button className="btn-pos" color="primary" onClick={this.showTable}>O K</Button>{' '}
											</Col>
										</Col>
									</Col>
								</div>
							</Card>
						</Col>
					</Col>
				</div>
				<div id="mainDiv" className="hideDiv">
					<Col md="12">
							<Col md="3">&nbsp;</Col>
							<Col md="6">
								<Card className="panel panel-default">
									<CardHeader className="panel-heading shadow-pan">
										<i className="closeBtn" id="closeBtn" onClick={this.closeBtn}><img src="btn_close.png"/></i>
										<center><h3>Shop Purpose Calculator</h3></center>
									</CardHeader>
									<div className="panel-body shadow-pan">
										<Col md="2" className="form-group">
											<Button color="primary" onClick={this.insertVal}>Calculator</Button>{' '}
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
			</Col>
			);
	}
}

export default App;