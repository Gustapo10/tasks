import React from "react";
import "./App.css";
import e_logo from "./images/OG_Philadelphia_Eagles.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
                <h1
                    style={{
                        height: "50px",
                        fontSize: "25px",
                        color: "gold",
                        backgroundColor: "darkgreen"
                    }}
                >
                    By: Chimezie Ugbuaja
                </h1>
            </header>
            ;
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>{" "}
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    border: "5px solid red",
                                    padding: "1px",
                                    backgroundColor: "white"
                                }}
                            >
                                <div>
                                    <ul>
                                        <li>
                                            This is{" "}
                                            <span style={{ color: "red" }}>
                                                colored text
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            The image on the right is the Eagles
                                            logo.
                                        </li>
                                        <li>
                                            This is looking pretty good so far.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            Second column.
                            <div>
                                <img
                                    src={e_logo}
                                    alt="Eagles Logo"
                                    width="250"
                                    height="125"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
