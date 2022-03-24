import React from 'react';

const About = () => {
  return (
    <>
      <section className="content-section bg-light" id="about">
        <div className="container px-4 px-lg-5 text-center">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10">
              <h2 style={{ color: "#000" }}>Stylish Portfolio is the perfect theme for your next project!</h2>
              <p className="lead mb-5">
                This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
                <a href="https://unsplash.com/">Unsplash</a>
                !
              </p>
              <a className="btn btn-dark btn-xl" href="#services">What We Offer</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
