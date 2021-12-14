import React from 'react'
import { Container, Row, CarouselItem, button } from 'react-bootstrap'
import './Homescreen.css'
const Homescreen = () => {
    return (
        <div>

            {/* carousel start */}
            <Row>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner " >
                        <div class="carousel-item active">
                            <img src="../../images/1.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/2.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/3.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </Row>

            {/* // carousel end */}

            <h2 className='text-center my-3'>Latest Products</h2>
            <Container>
                <hr></hr>
                <Row className='my-3'>
                    <div class="card mx-3 " style={{ width: "18rem" }}>
                        <img src="../../images/pasta.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/salad.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/tomato.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/tasty.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </Row>
            </Container>



            <h2 className='text-center my-3'>Key Features</h2>
            <div className='keydiv'>
                <Container className='keyContainer'>
                    <Row className='my-3'>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f7.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Healthy Diet Planning</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f2.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Diets and Nutrients</h5>

                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f3.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Beautiful Visual Design</h5>

                            </div>
                        </div>
                        <div class="card mx-3 keyCard" style={{ width: "18rem" }}>
                            <img src="../../images/f4.png" class="card-img-top img-responsive" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Digital Coach/Tracker</h5>

                            </div>
                        </div>
                    </Row>
                </Container>
            </div>



            <Container>

                <h2 className='text-center my-4'>-Testimonials-</h2>

                <hr></hr>
                <Row className='my-3 d-flex justify-content-center'>

                    <div class="card mx-3 " style={{ width: "18rem" }}>
                        <img src="../../images/t1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/t2.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card mx-3" style={{ width: "18rem" }}>
                        <img src="../../images/t3.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Homescreen
