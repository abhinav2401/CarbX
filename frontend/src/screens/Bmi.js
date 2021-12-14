import React, { useState } from "react";
import { Container, Row, Col, url } from "react-bootstrap";
import './Bmi.css'


const Bmi = () => {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Enter valid details");
        }
    };
    return (
        <>
            <div className="bmiCard">
                <Container className=' d-flex justify-content-center ' style={{ height: "100vh" }}>
                    <div className="bmiDiv" >
                        <h1 className="text-center">BMI Calculator</h1>

                        <div class="card mx-3 " style={{ width: "20rem" }}>
                            <div class="card-body">
                                <Col>
                                    <Row>
                                        <h5>Height:</h5>
                                        <input
                                            type="text"
                                            onChange={(e) => setHeight(e.target.value)}
                                            placeholder="height in cm"
                                        />
                                    </Row>
                                    <Row>
                                        <h5>Weight:</h5>
                                        <input
                                            type="text"
                                            onChange={(e) => setWeight(e.target.value)}
                                            placeholder="Weight in kg"
                                        />
                                    </Row>
                                </Col>

                                <button class="btn btn-primary my-2" onClick={handleBmi}>Calculate</button>
                                <h5>{bmi}</h5>
                                <h6>{info}</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );

};


export default Bmi;