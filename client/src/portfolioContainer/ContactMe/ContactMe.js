import React, { useState } from "react";
import Typed from "react-typed"
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utils/screenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import Footer from "../../portfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
          <Typed
                        strings={[
                                "Lets Chat!",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            />          
          </h2>{" "}
        </div>
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Tweet @ Me: @0xCharles1</label>
            <br></br>

            <label htmlFor="email">Email Me @: charlesnnyabeze@gmail</label>
                            <br></br>
            <label htmlFor="message">Follow me On IG: charles.beze</label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
