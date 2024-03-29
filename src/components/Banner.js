import { Container, Row, Col } from 'react-bootstrap';

export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Blodzik`}<span className='wrap'>web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
                        <button onCanPlay={() => console.log('connect')}>Let's connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}