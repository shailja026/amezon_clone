import React from "react";
import Navbar from "../Component/Navbar";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <div>
      <Navbar />
      <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/AugART/Acq/PEAdayof/PC_Hero_3000x1200_ft._CB599318118_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/apay/KA_3000._CB600347170_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/August/PC_hero_1_2x._CB599488352_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/0-PC_Hero_2x._CB594150943_.jpg"
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/apay/MA_3000._CB600347170_.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
     </div>
    </div>
  );
}

export default Home;
