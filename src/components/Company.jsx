import React from 'react'
import AboutUs from './AboutUs';
import pic from  './images/de9f63a2b123aeb3e3b63f4613fe8f4b.jpg'

const Company = () => {
  return (
    <div>
      <h1>Vintage Gem Old Money Fits</h1> <br />
      <img src={pic} alt="" /> <br />
      <b>About us </b>
      <p>
        At Vintage Gem Old Money Fits, we embody the timeless elegance and
        understated luxury of old money style. Rooted in tradition yet refined
        for the modern world, our collections are a tribute to heritage,
        quality, and sophistication.
      </p>
      <br />
      <b>Our Heritage</b>
      <p>
        Born from a deep appreciation for classic tailoring and enduring
        craftsmanship, our brand is inspired by the effortless grace of
        generations past. We believe that true luxury is not loud but rather
        distinguished by its refinement, attention to detail, and impeccable
        quality.
      </p>
      <br />
      <b>Our Philosophy</b>
      <p>
        Style is a legacy. Our pieces are designed for those who understand that
        elegance is not dictated by trends but by tradition. We champion the art
        of subtlety—luxurious fabrics, timeless silhouettes, and an unwavering
        commitment to excellence.
      </p>
      <br />
      <b>A Legacy of Elegance</b>
      <p>
        Vintage Gem Old Money Fits is more than a label—it’s a lifestyle. It’s for those
        who appreciate the quiet confidence of a well-tailored blazer, the
        enduring appeal of fine wool, and the distinction of old-world charm in
        a modern era. Step into a world where elegance is effortless, and
        refinement is a way of life.
      </p>
      <hr />
      <AboutUs/>
    </div>
  );
}

export default Company