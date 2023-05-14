import ratings from "../assets/icons/rating.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2-copy-0.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile2.jpg";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile1} alt="Customer Pic" />
            <h2>Inna</h2>
            <p>"Nice!"</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile2} alt="Customer Pic" />
            <h2>Boris</h2>
            <p>"It`s was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile3} alt="Customer Pic" />
            <h2>Pavel</h2>
            <p>"You have to try it!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profile4} alt="Customer Pic" />
            <h2>Nina</h2>
            <p>"Awesome!"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
