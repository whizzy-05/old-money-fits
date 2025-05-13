import React from 'react'
import ig from "./images/in.png"
import fb from "./images/fb.png";
import x from "./images/x.png";

export const AboutUs  = () => {
  return (
    <div className="footer-section" style={{ backgroundColor: '#2c2f36' }}>
    <section className="row py-5 px-3">
      {/* Column 1 */}
      <div className="col-md-4 text-white vintage-font">
        <h4 className="text-center">About Us</h4>
        <p>
          For our services visit our offices in Nairobi. Afia Centre, Second Floor.
        </p>
        <p>
          We also provide retail and wholesale services. Delivery is available countrywide with no charges at all...
        </p>
      </div>
  
      {/* Column 2 */}
      <div className="col-md-4 text-light vintage-font">
        <h4 className="text-center">For More Information</h4>
        <form>
          <input type="email" placeholder="Enter your Email" className="form-control mb-3 vintage-input" />
          <textarea placeholder="Leave a comment" rows="7" className="form-control mb-3 vintage-input"></textarea>
          <input type="submit" value="Send Message" className="btn btn-outline-light w-100" />
        </form>
      </div>
  
      {/* Column 3 */}
      <div className="col-md-4 text-light vintage-font text-center">
        <h4>Stay Connected</h4>
        <div className="social-icons mb-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Twitter" className="social-icon" />
          </a>
        </div>
        <p>
          Follow us @Vintage Gem Old Money Fits. THANK YOU.
        </p>
      </div>
    </section>
  
    <div className="text-center py-3 border-top border-light">
      <b className="text-light">Developed by Amani, &copy;2025. All Rights Reserved.</b>
    </div>
  </div>
  );
}
export default AboutUs;

