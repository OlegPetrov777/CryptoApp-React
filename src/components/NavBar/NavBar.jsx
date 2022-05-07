import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


let NavBar = (props) => {
    return (<Nav fill variant="tabs" defaultActiveKey="/home">
        <NavDropdown title="Bitcoin (₿)" id="nav-dropdown">
            <NavDropdown.Item eventKey="1.1" onClick={() => props.onPageChanged("bitcoin", "usd")}>USD</NavDropdown.Item>
            <NavDropdown.Item eventKey="1.2" onClick={() => props.onPageChanged("bitcoin", "eth")}>ETH</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Ethereum (◊)" id="nav-dropdown">
            <NavDropdown.Item eventKey="2.1" onClick={() => props.onPageChanged("ethereum", "usd")}>USD</NavDropdown.Item>
            <NavDropdown.Item eventKey="2.2" onClick={() => props.onPageChanged("ethereum", "btc")}>BTC</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Dollar ($)" id="nav-dropdown">
            <NavDropdown.Item eventKey="3.1" onClick={() => props.onPageChanged("uniswap-state-dollar", "btc")}>BTC</NavDropdown.Item>
            <NavDropdown.Item eventKey="3.2" onClick={() => props.onPageChanged("uniswap-state-dollar", "eth")}>ETH</NavDropdown.Item>
        </NavDropdown>
    </Nav>)


}

export default NavBar;
