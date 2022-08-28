import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from "typewriter-effect";

import Slider from "../Slider";
import prince1 from "../../assets/img/rocket4.png";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {<TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "kjflsdfjldskfjlsdfkjl"}>
                                    <h1>
                                        <Typewriter
                                            options={{
                                                // strings: ['Hi, I´m Luis Pérez, Full Stack Web Developer', 'Hola, soy Luis Pérez. Desarrollador Web Full Stack'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(`Hi, `).pauseFor(1250).start()
                                                    .typeString(`I'm Luis Pérez. `).pauseFor(1250).start()
                                                    .typeString(`Full stack web developer.`).pauseFor(1250).start()
                                                    .typeString(``).pauseFor(1250).deleteAll().start()
                                                    .typeString(`Hola, `).pauseFor(1250).start()
                                                    .typeString(`soy Luis Pérez. `).pauseFor(1250).start()
                                                    .typeString(`Desarrollador web full stack.`).pauseFor(1250).deleteAll().start()
                                            }}
                                        />

                                    </h1>
                                    <p>From Perú to the world, Convierto ideas en activos digitales.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Slider/>
                        {/* <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={prince1} alt="Header Img" />
                                </div>}
                        </TrackVisibility> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
