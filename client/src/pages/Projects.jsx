import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div>
        <div className="banner_container page_banner_container">
          <div className="site_tagline">
            <h1 className="tagline">Our Projects</h1>
            <p>Striving to provide helpless children
               with basic necessities through programs</p>
          </div>
          <img
            src="https://media.istockphoto.com/id/143922546/photo/group-of-african-orphan-children.jpg?s=612x612&w=0&k=20&c=RpKm-4iCJGJ_6ukzmMDxk1lTXhGp7VoYchb_sBLKqtY="
            alt="Banner"
            className="banner page_banner"
          />
        </div>
      </div>

      <div className="inspirational_text">
        <p>
          It is every child’s right to receive the love, care, and attention of their family, community, or even a stranger.
        </p>
      </div>

      <div className="image_grid">
        <div className="image_row">
          <div className="image_with_text">
            <h1 className="image_heading">Our Mission</h1>
            <Link to="/about/our-mission"> {/* Update the link to use the nested route */}
              <img
                src="https://i.pinimg.com/236x/6e/03/41/6e03412340ef8f4e1e190e6eada11cc6.jpg"
                alt="Image 1"
                className="image"
              />
            </Link>
          </div>
          <div className="image_with_text">
            <h1 className="image_heading">What We Do</h1>
            <Link to="/about/what-we-do">
              <img
                src="https://i.pinimg.com/236x/eb/89/5a/eb895af209ae428d348fd8d225e1fab5.jpg"
                alt="Image 2"
                className="image"
              />
            </Link>
          </div>
        </div>

        <div className="image_row">
          <div className="image_with_text">
            <h1 className="image_heading">Financial Information</h1>
            <Link to="/about/financial-information">
              <img
                src="https://i.pinimg.com/236x/65/eb/cd/65ebcd140f9715ef229b9d97a29dfc65.jpg"
                alt="Image 3"
                className="image"
              />
            </Link>
          </div>
          <div className="image_with_text">
            <h1 className="image_heading">Donate Here</h1>
            <Link to="/about/donate-here">
              <img
                src="https://i.pinimg.com/236x/de/6a/40/de6a400eb5cb3cb98679093535abe3a4.jpg"
                alt="Image 4"
                className="image"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="links">
        <a href="link_to_mpesa">M-Pesa</a>
        <a href="link_to_worldvision">World Vision</a>
      </div>
    </>
  );
}

export default Projects;