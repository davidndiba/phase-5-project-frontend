import React from "react";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <>
      <div>
        <div className="banner_container page_banner_container">
          <div className="site_tagline">
            <h1 className="tagline">Our Programs</h1>
            <p>Little by little, family by family,
               we can do so much good
               on so many levels
            </p>
          </div>
          <img
            src="https://www.wfpusa.org/wp-content/uploads/2017/01/CAR_20140330_WFP-Rein_Skullerud_D4A8291-1024x681.jpg"
            alt="Banner"
            className="banner page_banner"
          />
        </div>
      </div>

      <div className="inspirational_text">
        <p>Our programs are geared towards creating a better life for the less privileged children.</p>
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

export default Programs;

// t is estimated that there are over 100 million orphans worldwide (UNICEF).1 To give you an idea of the enormity of the numbers compare it with the population of the United States which is just a little over 325 million; or the current population of Russia -145 million. Over 100 million children would equal the combined populations of New York City, Los Angles, Chicago and 47 other of the largest cities in the USA, plus the combined populations of Ireland, Norway, Denmark, France, Greece Nicaragua and Costa Rica. These are not just numbers and statistics, these are CHILDREN! - distressed, struggling and with little hope in the world.
// According to UNICEF, almost 5700 children become orphans every day due to war, natural disaster, poverty, disease, stigma and medical needs.
// According to the World Health Organization (WHO), in 2017, 15,000 children under the age of 5 died every day; that is equivalent to 1 child every 17 seconds. 2.7 million children die every year in the first month of life.
// Every 15 seconds, another child becomes an AIDS orphan in Africa
// 60% of orphan girls will become victims of the sex trade. 10-15% or orphan children will commit suicide before age 18. 70% of orphan boys in Eastern Europe will become criminals.
// 250,000 children are adopted annually but 14,050,000 orphan children will grow up and age out of the orphan care system without ever having been part of a loving family. That means that every day 38,493 children will age out of an orphanage.2 That’s one orphan every 2.2 seconds who will leave an orphanage or foster care with no family to belong to and no place to call home. Less than 1% of all orphan children will be adopted. Who will care for the rest of the millions of orphaned, abandoned and homeless children?
// Russia – It is estimated that since the fall of the Iron Curtain there are between 1 and 4 million homeless children in Russia. There are 30,000 children living on the streets and in the sewers and subways in Moscow (see the Google video- “The Children of Leningradsky”). At around age 16 or 17, orphans are forced to leave the orphanage system and enter the world with limited education and minimal support. Within the first five years, almost 90% of these orphans end up in crime, prostitution, drug and alcohol addiction, or commit suicide. In Ukraine and Russia 10% -15% of children who age out of an orphanage commit suicide before age 18; 60% of the girls are lured into prostitution; 70% of the boys become hardened criminals. Another Russian study reported that of the 15,000 orphans aging out of state-run institutions every year, 10% committed suicide, 5,000 were unemployed, 6,000 were homeless and 3,000 were in prison within three years.