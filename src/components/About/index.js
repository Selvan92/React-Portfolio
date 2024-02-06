import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "225px", height: "225px", borderRadius: '50%'}} alt="profile" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Orci sagittis eu volutpat odio facilisis mauris.Pellentesque habitant morbi tristique senectus et netus et. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Mauris augue neque gravida in fermentum et sollicitudin ac. Tempor orci d.
          </p>
          <p> Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Nullam vehicula ipsum a arcu cursus. Integer quis auctor elit sed vulputate mi sit. Gravida arcu ac tortor dignissim convallis aenean et tortor. Amet mattis vulputate enim nulla aliquet porttitor. Diam sit amet nisl suscipit adipiscing bibendum. Habitant morbi tristique senectus et netus. Amet facilisis magna etiam tempor orci eu lobortis. Porta nibh venenatis cras sed felis. Consequat interdum varius sit amet mattis vulputate enim nulla. Aliquam sem et tortor consequat. In massa tempor nec feugiat nisl pretium..</p>
          
        </div>
      </div>
    </section>
  );
}

export default About;
