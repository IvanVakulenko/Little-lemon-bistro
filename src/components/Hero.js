import restaurantFood from "../assets/images/restaurantFood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <h1>Little Lemon Bistro</h1>
          <h2>Ukraine</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut pulvinar augue. Fusce ac semper ante, vel aliquam felis. Aenean quis sodales dui, quis condimentum dolor. Aenean finibus ultricies commodo.
          </p>

          <Link to="/reservations">
            <button id="button" to="/reservations">
              Reserve
            </button>
          </Link>
        </div>

        <div className="featured">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>
      </div>
    </>
  );
};

export default Hero;
