import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); //this is how fast the text gets typed and delted
    const [index, setIndex] = useState(1);
    const toRotate = [ "Back end Developer", "CS Graduate", "Proud Veteran" ]; //the text that appears
    const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
    } else {
        setIndex(prevIndex => prevIndex + 1);
    }
}

return (
    <section className="banner" id="home">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{"Hi I'm Joe! "} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Back end Developer", "CS Graduate", "Proud Veteran" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Determined and ambitious Jr. software developer with a focus in back-end development. A former team leader whose demonstrated work ethic and attention to detail was crucial in being awarded multiple honors 
                    from the United States Military. A personable team player and problem solver who collaborates with others to drive success.</p>
                    <button onClick={() => window.open("https://www.linkedin.com/in/josephkois/")}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
        </Row>
        </Container>
    </section>
    )
}