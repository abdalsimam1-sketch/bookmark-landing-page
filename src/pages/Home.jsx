import { useState } from "react";
import heroPic from "../assets/images/illustration-hero.svg";
import featurePic from "../assets/images/illustration-features-tab-1.svg";

export const Home = () => {
  const [activeFeature, setActiveFeature] = useState();
  return (
    <>
      <main>
        <section className="hero-section d-flex px-5 ">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            {" "}
            <h1>A Simple Bookmark Manager</h1>
            <p className="text-muted">
              A clean and simple interface to organize your favorite
              websites.Open a new browser tab and see your sites load instantly.
              Try it for free.
            </p>
            <div className="hero-btns d-flex gap-3">
              <button className="btn hero-btn-1" style={{ minWidth: "5rem" }}>
                Get it on Chrome
              </button>
              <button className="btn hero-btn-2">Get it on FireFox</button>
            </div>
          </div>
          <div className="">
            <img src={heroPic} alt="" className="img-fluid" />
          </div>
        </section>
        <section className="features-section text-center ">
          <div className="col-md-6 mx-auto">
            <h1>Features</h1>
            <p className="text-muted ">
              Our aim is to make it quick and easy for you to access your
              favorites websites. Your bookmarks sync between your devices so
              you can access them on the go{"."}
            </p>
          </div>
          <div className="d-flex gap-5 justify-content-center">
            <div className="btn">Simple Bookmarking</div>
            <div className="btn">Speedy Searching</div>
            <div className="btn">Easy Sharing</div>
          </div>
          <div>
            <div>
              <img src={featurePic} alt="feature pic" />
            </div>
            <div>
              <h1>Bookmark in one click</h1>
              <p className="text-muted">
                Organize your bookmarks however you like.Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favorite sites
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
