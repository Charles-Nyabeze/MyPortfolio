import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utils/screenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import "./Testimonial.css";
import man from "../../../src/img/Testimonial/img4tw.jpg";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import ripple from "../../../src/img/Testimonial/rpx.jpg";
import inner from "../../../src/img/Testimonial/ivc.jpg";
import agora from "../../../src/img/Testimonial/agoraa.jpg";


export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"My Highlishgts"}
        subHeading={"cool stuff I've done"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Learnt how to master trading in 4 months and now run a 6+ figure portfolio.
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>0xCharles1</h5>
                    <p>NFTs</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Created a 300+ person group of the greatest minds from the ages of 15-25.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={inner} alt="no internet connection"></img>
                    <h5>Inner Circle</h5>
                    <p>Creating</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Dropped out of University to found a Web3 Company along side my childhood friend.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={agora} alt="no internet connection"></img>
                    <h5>Agora Labs</h5>
                    <p>Founding</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Joined a VC to learn Venture Capital for 12 weeks along side like minded individuals.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={ripple} alt="no internet connection"></img>
                    <h5>RippleX</h5>
                    <p>VC</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
