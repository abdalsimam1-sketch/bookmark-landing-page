import { useState } from "react";
import heroPic from "../assets/images/illustration-hero.svg";
import featurePic1 from "../assets/images/illustration-features-tab-1.svg";
import featurePic2 from "../assets/images/illustration-features-tab-2.svg";
import featurePic3 from "../assets/images/illustration-features-tab-3.svg";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import { LoremIpsum } from "lorem-ipsum";
import logo from "../assets/images/logo-bookmark.svg";
export const Home = () => {
  const lorem = new LoremIpsum();
  const [activeFeature, setActiveFeature] = useState("simple");
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaqs = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

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

  const features = {
    simple: {
      img: featurePic1,
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how youmanage your favorite sites",
    },
    speedy: {
      img: featurePic2,
      title: "Intelligent search",
      text: "Our powerful search feature will help you find sites in no time at all.No need to trawl through all of your bookmarks ",
    },
    easy: {
      img: featurePic3,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others.Create a sharable link that you can send at the click of a button",
    },
  };
  return (
    <>
      <main className="">
        <section className="hero-section d-flex flex-column flex-md-row px-5 justify-content-center ">
          <div className="col-md-4 d-flex flex-column justify-content-center order-2 order-md-1 text-center text-md-start">
            {" "}
            <h1>A Simple Bookmark Manager</h1>
            <p className="text-muted">
              A clean and simple interface to organize your favorite
              websites.Open a new browser tab and see your sites load instantly.
              Try it for free.
            </p>
            <div className="hero-btns d-flex gap-3 mx-auto mx-md-0 mb-4">
              <button className="btn hero-btn-1" style={{ minWidth: "5rem" }}>
                Get it on Chrome
              </button>
              <button className="btn hero-btn-2">Get it on FireFox</button>
            </div>
          </div>
          <div className=" order-1 order-md-2">
            <img src={heroPic} alt="" className="img-fluid" />
          </div>
        </section>
        <section className="features-section text-center px-5 mb-5">
          <div className="col-md-6 mx-auto mb-5 text-center">
            <h1>Features</h1>
            <p className="text-muted ">
              Our aim is to make it quick and easy for you to access your
              favorites websites. Your bookmarks sync between your devices so
              you can access them on the go{"."}
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center  mb-5 gap-md-5">
            <div
              className={`card btn ${activeFeature === "simple" ? "active" : ""}`}
              onClick={() => setActiveFeature("simple")}
            >
              Simple Bookmarking
            </div>
            <div
              className={`card btn ${activeFeature === "speedy" ? "active" : ""}`}
              onClick={() => setActiveFeature("speedy")}
            >
              Speedy Searching
            </div>
            <div
              className={`card btn ${activeFeature === "easy" ? "active" : ""}`}
              onClick={() => setActiveFeature("easy")}
            >
              Easy Sharing
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row  gap-3 justify-content-center">
            <div>
              <img
                src={features[activeFeature].img}
                alt="feature pic"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5  text-md-start d-flex flex-column justify-content-center">
              <h1>{features[activeFeature].title}</h1>
              <p className="text-muted">{features[activeFeature].text}</p>
              <button className="btn more-info align-self-md-start ">
                More Info
              </button>
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
          <div className="cards d-flex flex-column flex-md-row col-md-7 mx-auto gap-5 mb-5">
            <div className="card shadow col-10 mx-auto col-md-6 col-lg-4 ">
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
            <div className="card shadow col-10 mx-auto col-md-6 col-lg-4 ">
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
            <div className="card shadow  col-10 mx-auto col-md-6 col-lg-4">
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

        <section className="faq-section col-md-6 mx-auto mb-5 ">
          <div className="text-center">
            <h1 className="">Frequently Asked Questions</h1>
            <p className="text-muted ">
              How are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>
          {faqs.map((faq, index) => {
            const isOpen = openFaqs.includes(index);
            return (
              <div
                className="mx-5  "
                key={index}
                style={{ borderBottom: "1px solid grey" }}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleFaqs(index)}
                >
                  {" "}
                  <p> {faq.question}</p>
                  <i className="bi bi-chevron-down arrow-down fs-2 text-primary"></i>
                  {}
                </div>
                {isOpen && (
                  <div
                    className="answers text-muted rounded"
                    style={{ border: "1px solid grey" }}
                  >
                    {" "}
                    <p className="">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
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

        <footer className="footer p-5 text-white d-flex flex-column  flex-md-row justify-content-around align-items-center gap-4 ">
          <div className="d-flex  flex-column flex-md-row align-items-center  gap-4">
            <img
              src={logo}
              alt=""
              className="bg-white "
              style={{ width: "10rem" }}
            />
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
