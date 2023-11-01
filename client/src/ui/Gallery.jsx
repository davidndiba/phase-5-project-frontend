import gallery1 from "../assets/Gallery/gallery1.jpg";
import gallery2 from "../assets/Gallery/gallery2.jpg";
import gallery3 from "../assets/Gallery/gallery3.jpg";
import gallery4 from "../assets/Gallery/gallery4.jpg";
import gallery5 from "../assets/Gallery/gallery5.jpg";
import gallery6 from "../assets/Gallery/gallery6.jpg";
import gallery7 from "../assets/Gallery/gallery7.jpg";
import gallery8 from "../assets/Gallery/gallery8.jpg";
import gallery9 from "../assets/Gallery/gallery9.jpg";
import gallery10 from "../assets/Gallery/gallery10.jpg";
import gallery11 from "../assets/Gallery/gallery11.jpg";
import gallery12 from "../assets/Gallery/gallery12.jpg";

function Gallery() {
  return (
    <>
      <div className="featured">
        <h2 className="heading">What We Do</h2>
        <h1 className="sub-heading">
          Help put a smile on a dull face.
        </h1>

        <div class="gallery">
          <figure class="gallery-item">
            <img src={gallery1} alt="Gallery" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery2} alt="Gallery" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery3} alt="Gallery" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery4} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery5} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery6} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery7} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery8} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery9} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery10} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery11} alt="Gallery" />
          </figure>{" "}
          <figure class="gallery-item">
            <img src={gallery12} alt="Gallery" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Gallery;
