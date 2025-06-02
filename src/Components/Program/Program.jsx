import React from "react";
import "./Program.css";

import Program1 from "../../assets//program-1.png";
import Program2 from "../../assets//program-2.png";
import Program3 from "../../assets//program-3.png";
import program_icon1 from "../../assets//program-icon-1.png";
import program_icon2 from "../../assets//program-icon-2.png";
import program_icon3 from "../../assets//program-icon-3.png";

const Program = () => {
  return (
    <div className="programs" id="program">
      <div class="program">
        <img src={Program1} alt="prog1" />
        <div className="caption">
          <img src={program_icon1} alt="icon1" />
          <p>Graduation Program</p>
        </div>
      </div>
      <div class="program">
        <img src={Program2} alt="prog2" />
        <div className="caption">
          <img src={program_icon2} alt="icon2" />
          <p>Masters Program</p>
        </div>
      </div>
      <div class="program">
        <img src={Program3} alt="prog3" />
        <div className="caption">
          <img src={program_icon3} alt="icon3" />
          <p>Post Degree Program</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
