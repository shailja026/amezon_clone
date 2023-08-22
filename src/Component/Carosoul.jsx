import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Carosoul() {
  return (
    <Carousel
      data-bs-theme="dark"
      interval={3000}
      w-100
      style={{ marginBottom: "-25rem", zIndex: "-1" }}
    >
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
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/MonsoonOffers/Non-CBCC_Monsoon-offer-PC_Hero_3000x1200._CB598617707_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Rakshak/PC_Hero/3000x1200_V3._CB598224072_.jpg"
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
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/apay/MA_3000._CB600347160_.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosoul;
