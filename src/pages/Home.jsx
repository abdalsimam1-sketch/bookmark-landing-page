import { useState } from "react";
import heroPic from "../assets/images/illustration-hero.svg";
import featurePic from "../assets/images/illustration-features-tab-1.svg";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import { LoremIpsum } from "lorem-ipsum";
import logo from "../assets/images/logo-bookmark.svg";
export const Home = () => {
  const lorem = new LoremIpsum();
  const [activeFeature, setActiveFeature] = useState();
  const faqs = [
    {
      question: "What is Bookmark",
      answer:
        "Bookmark is a tool that helps you organize your bookmarks efficiently",
    },
    {
      question: "How can i request a new browser",
      answer: lorem.generateWords(),
    },
    { question: "Is there a mobile app", answer: lorem.generateWords() },
    {
      question: "What about other Chronium browsers",
      answer: lorem.generateWords(),
    },
  ];
  return (
    <>
      <main>
        <section className="hero-section d-flex px-5 justify-content-around ">
          <div className="col-md-4 d-flex flex-column justify-content-center">
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
        <section className="features-section text-center px-5 mb-5">
          <div className="col-md-6 mx-auto mb-5">
            <h1>Features</h1>
            <p className="text-muted ">
              Our aim is to make it quick and easy for you to access your
              favorites websites. Your bookmarks sync between your devices so
              you can access them on the go{"."}
            </p>
          </div>
          <div className="d-flex gap-5 justify-content-center mb-5">
            <div className="btn">Simple Bookmarking</div>
            <div className="btn">Speedy Searching</div>
            <div className="btn">Easy Sharing</div>
          </div>
          <div className="d-flex  gap-3 justify-content-around">
            <div>
              <img src={featurePic} alt="feature pic" className="img-fluid" />
            </div>
            <div className="col-md-5 ">
              <h1>Bookmark in one click</h1>
              <p className="text-muted">
                Organize your bookmarks however you like.Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favorite sites
              </p>
            </div>
          </div>
        </section>
        <section className="download-section text-center ">
          <div className="col-md-5 mx-auto ">
            <h1>Download the extension</h1>
            <p className="text-muted">
              We've got more browsers in the pipeline.Please do let us know is
              youve got a favorite you'd like us to prioritize
            </p>
          </div>
          <div className="cards d-flex  justify-content-around col-md-7 mx-auto ">
            <div className="card shadow">
              <div className="card-body p-5">
                <img src={chrome} alt="" className="mx-auto" />
                <h5>Add to Chrome</h5>
                <p className="text-muted">Minimum version 62</p>
              </div>
              <footer className="card-footer">
                <button className="downloads-btn btn">
                  Add & Install Extension
                </button>
              </footer>
            </div>
            <div
              className="card shadow"
              style={{ transform: "translateY(50px)" }}
            >
              <div className="card-body p-5">
                <img src={firefox} alt="" className="mx-auto" />
                <h5>Add to Firefox</h5>
                <p className="text-muted">Minimum version 55</p>
              </div>
              <footer className="card-footer">
                {" "}
                <button className="downloads-btn btn">
                  Add & Install Extension
                </button>
              </footer>
            </div>
            <div
              className="card shadow "
              style={{ transform: "translateY(100px)" }}
            >
              <div className="card-body p-5">
                <img src={opera} alt="" className="mx-auto" />
                <h5>Add to Opera</h5>
                <p className="text-muted">Minimum version 46</p>
              </div>
              <footer className="card-footer">
                {" "}
                <button className="downloads-btn btn">
                  Add & Install Extension
                </button>
              </footer>
            </div>
          </div>
        </section>

        <section className="faq-section col-md-6 mx-auto text-center">
          <div>
            <h1 className="">Frequently Asked Questions</h1>
            <p className="text-muted">
              How are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>
          {faqs.map((faq, index) => (
            <h3 key={index}>{faq.question}</h3>
          ))}
        </section>

        <section className="contact-section p-5 text-center text-white">
          <div className="col-md-6 mx-auto mb-4">
            {" "}
            <h4>35,000+ ALREADY JOINED</h4>
            <h1 className="">Stay up-to-date with what we're doing</h1>
          </div>
          <div className="contact-input d-flex gap-3 justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email address"
            />
            <button className="btn contact-btn">Contact Us</button>
          </div>
        </section>

        <footer className="footer p-5 text-white d-flex justify-content-around ">
          <div className="d-flex gap-4">
            <img src={logo} alt="" className="bg-white " />
            <a href="">FEATURES</a>
            <a href="">PRICING</a>
            <a href="">CONTACT</a>
          </div>
          <div className="d-flex gap-4">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </footer>
      </main>
    </>
  );
};
