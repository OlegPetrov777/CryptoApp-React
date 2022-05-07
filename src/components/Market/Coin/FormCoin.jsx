import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


let FormCoin = (props) => {
    let count = 0;

    return (
        <Form>
            <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                <Form.Label>
                    Your money ({props.currentCoin.name}s)
                </Form.Label>

                <Col sm="10">
                    {/* КОЛИЧЕСТВО ДЕНЕГ ПОЛЬЗОВАТЕЛЯ */}
                    <Form.Control readOnly placeholder={props.myCoins[props.currentCoin.symbol]}/>
                    <Form.Label>{}</Form.Label>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                    {/* КУРС */}
                    Count for convert (price: {props.currentPrice})
                </Form.Label>

                <Col sm="10">
                    <Form.Control min={"0"} type="number" onChange={e => count = e.target.value}/>
                </Col>
            </Form.Group>

            <Button type={"submit"} onClick={() => {
                props.convertCoins(count);
            }}>Buy</Button>
        </Form>
    )
}

export default FormCoin