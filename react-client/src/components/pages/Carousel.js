import React, {render} from "react";
import { Carousel } from "react-bootstrap";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

   // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  // handleSelect(selectedIndex, e) {
  //    this.setState({
  //     index: selectedIndex,
  //     direction: e.direction,
  //     slide: true
  //   });
  //}

  render() {
   // const { index, direction, slide } = this.state;

    return (
   <Carousel>
        <Carousel.Item>
          <img width={"100%"} height={200} alt="900x500" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <Carousel.Caption>
            <h3>We Can give some detial</h3>
            <p>Feed Will come from backend </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={200} alt="900x500" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"  />
          <Carousel.Caption>
            <h3>We Can give some detial</h3>
            <p>Feed Will come from backend </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={200} alt="900x500" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"  />
          <Carousel.Caption>
            <h3>We Can give some detial</h3>
            <p>Feed Will come from backend </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default ControlledCarousel;
