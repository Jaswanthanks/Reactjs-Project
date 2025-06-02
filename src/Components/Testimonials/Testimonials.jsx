import React, { useRef } from "react";
import nextbtn from "../../assets//next-icon.png";
import backbtn from "../../assets//back-icon.png";
import userprof1 from "../../assets/user-1.png";
import userprof2 from "../../assets/user-2.png";
import userprof3 from "../../assets/user-3.png";
import userprof4 from "../../assets/user-4.png";

import "./Testimonials.css";
const Testimonials = () => {
    const slider = useRef();
    let rf = 0;

    const slideforward = () => {
        if(rf > -50){
            rf -=25;
        }
        slider.current.style.transform = `translate(${rf}%)`
    };
    const slideBackward = () => {
        if(rf < 0){
            rf +=25;
        }
        slider.current.style.transform = `translateX(${rf}%)`
    };


  return (
    <div className="testimonials">
      <img src={nextbtn} alt="" className="next-btn" onClick={slideforward} />
      <img src={backbtn} alt="" className="back-btn"  onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={userprof1} alt="user1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions i have ever made . The suportive community, state of
                the art facilities, and commitment of the academic excellence
                have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={userprof2} alt="user2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions i have ever made . The suportive community, state of
                the art facilities, and commitment of the academic excellence
                have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={userprof3} alt="user3" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions i have ever made . The suportive community, state of
                the art facilities, and commitment of the academic excellence
                have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={userprof4} alt="user4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decisions i have ever made . The suportive community, state of
                the art facilities, and commitment of the academic excellence
                have truly exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
