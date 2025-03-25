import React from 'react'
import ig from "./images/in.png"
import fb from "./images/fb.png";
import x from "./images/x.png";

export const AboutUs  = () => {
  return (
    <div>
      <section class="row bg-light">
        <div class="col-md-4 text-dark">
          <h4 class="text-center">About Us</h4>
          <p>
            For our services visit our offices in Nairobi.Afia centre second
            floor
          </p>
          <p>
            We also provide retail and wholesale services.Delivery is country
            wide with no charges at all.For more information about us and our
            services reach out our websites on facebook, instagram and twitter.
          </p>
        </div>
        <div class="col-md-4 text-dark">
          <b>For More Information</b>
          <form action="">
            <input
              type="email"
              placeholder="Enter your Email"
              class="form-control"
            />
            <br />
            <textarea
              placeholder="Leave a comment"
              rows="7"
              class="form-control"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Send Message"
              class="btn btn-outline-success"
            />
          </form>
        </div>
        <div class="col-md-4">
          <h4 class="text-center text-dark">Stay Connected</h4>
          <br />
          <a href="#">
            <img src={x} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={ig} alt="" />
          </a>
          <a href="#">
            <img src={fb} alt="" />
          </a>
          <br />
          <p class="text-dark">
            Follow us on all social media platforms @Vintage Gem Old Money
            Fits.THANK YOU
          </p>
        </div>
        <div class="bg-dark text-center">
          <b class="text-light">
            Developed by Amani, &copy;2025 .All rights Reserved
          </b>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;

