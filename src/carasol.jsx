import Carousel from 'react-bootstrap/Carousel';
import image1 from './assets/post__1.webp';
import image2 from './assets/post__2.webp';
import image3 from './assets/post__3.webp';


function IndividualIntervalsExample() {
    return (
      <Carousel>
        <Carousel.Item interval={900}> {/* First slide - 1 second */}
          <img
            className="d-block w-100"
            src={image2} 
            alt="First slide"
            style={{ height: '600px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={900}> {/* Second slide - 0.5 seconds */}
          <img
            className="d-block w-100"
            src={image1} 
            alt="Second slide"
            style={{ height: '600px', objectFit: 'scale-down' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={900}> {/* Third slide - 2 seconds */}
          <img
            className="d-block w-100"
            src={image3} 
            alt="Third slide"
            style={{ height: '600px', objectFit: 'cover ' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default IndividualIntervalsExample;