"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import toast from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [contact, setContact] = useState([]);

  //   FAQS
  const faqData = [
    {
      id: 1,
      question: "What is the typical process for starting a design project?",
      answer:
        "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
      show: true,
    },
    {
      id: 2,
      question: "How long does a typical interior design project take?",
      answer:
        "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
      show: false,
    },
    {
      id: 3,
      question: "Can I incorporate my existing furniture into the new design?",
      answer:
        "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
      show: false,
    },
    {
      id: 4,
      question: "What should I expect during the design consultation?",
      answer:
        "Our process starts with a consultation to discuss your vision, followed by planning, design presentation, and implementation to achieve your ideal space.",
      show: false,
    },
  ];

  //   Partnerts
  const partnerLogos = [
    "images/partners/pa5.png",
    "images/partners/pa1.png",
    "images/partners/pa2.png",
    "images/partners/pa3.png",
    "images/partners/pa4.png",
    "images/partners/pa6.png",
  ];

  const setttings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleContact = async (e) => {
    e.preventDefault();
    if (
      !contact.name.trim() ||
      !contact.email.trim() ||
      !contact.phone.trim() ||
      !contact.location.trim() ||
      !contact.description.trim()
    ) {
      toast.error("All fields are required.");
      return;
    }
    const bodydata = {
      name: contact.name,
      email: contact.email,
      location: contact.location,
      phone: contact.phone,
      description: contact.description,
      protype: "R Interior",
    };

    try {
      const response = await axios.post(
        "https://api.rfirms.com/v1/rc/web/enquiry/addenquiry",
        bodydata,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      const _data = response.data;
      toast.success(_data.message);

      setContact({
        name: "",
        location: "",
        email: "",
        phone: "",
        description: "",
      });
      const modal = window.bootstrap.Modal.getInstance(
        document.getElementById("myFormModal")
      );
      if (modal) modal.hide();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  // Clear form on modal open
  useEffect(() => {
    const modalEl = document.getElementById("myFormModal");

    const handleOpen = () => {
      setContact({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    };

    if (modalEl) {
      modalEl.addEventListener("shown.bs.modal", handleOpen);
    }

    return () => {
      if (modalEl) {
        modalEl.removeEventListener("shown.bs.modal", handleOpen);
      }
    };
  }, []);

  return (
    <>
      <div className="hero hero-video" id="homeSection">
        <div className="hero-bg-video">
          <video
            src="images/myBuiding.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">inspired interiors</h3>
                  <h1 className="text-anime-style-2" data-cursor="-opaque">
                    Designing your dream spaces, one room at a time
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We specialize in creating personalized, functional, and
                    stylish interiors that reflect your unique vision.
                  </p>
                </div>
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#aboutSection" className="btn-default">
                    explore more
                  </a>
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myFormModal"
                    className="btn-default btn-highlighted"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about-us" id="aboutSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-images">
                <div className="about-img-1">
                  <figure className="image-anime ">
                    <img
                      src="images/about-img-1.jpg"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
                <div className="about-img-2">
                  <figure className="image-anime ">
                    <img
                      src="images/about-img-2.jpg"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="experience-counter">
                    <h3>
                      <span className="counter">15</span>+
                    </h3>
                    <p>Years of experience</p>
                  </div>
                </div>
                <div className="feedback-counter">
                  <p>
                    <span className="counter">95</span>%
                  </p>
                  <h3>positive feedback</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our passion for design, your
                    <span>vision realized</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our dedicated team of designers works closely with you to
                    understand your vision and bring it to life with thoughtful
                    attention to detail. Whether it's transforming a single room
                    or an entire home.
                  </p>
                </div>
                <div className="about-us-content-body">
                  <div className="about-us-content-info">
                    <div
                      className="about-us-content-list wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <ul>
                        <li>creative expertise</li>
                        <li>client-centered approach</li>
                      </ul>
                    </div>
                    <div
                      className="about-us-content-btn wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <a href="#serviceSection" className="btn-default">
                        read more
                      </a>
                    </div>
                  </div>
                  <div className="about-us-contact-list">
                    <div
                      className="about-contact-item wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon-box">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="about-contact-content">
                        <p>need any help?</p>
                        <h3>
                          <a href="tel:+919888472333" className="text-dark">
                            +91 988 847 2333
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why chooose use */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    A behind the scenes look at <span>our agency</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    From concept to completion, discover how we bring your
                    vision to life with innovation, collaboration, and expert
                    craftsmanship.
                  </p>
                </div>
                <div className="why-choose-item-list">
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/icon-why-choose-1.svg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>tailored design solutions</h3>
                      <p>
                        We provide personalized interior design services that
                        reflect your unique vision and lifestyle.
                      </p>
                    </div>
                  </div>
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/icon-why-choose-2.svg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Seamless Project Management</h3>
                      <p>
                        We handle the entire design process, from concept to
                        completion, with flawless execution.
                      </p>
                    </div>
                  </div>
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon-box">
                      <img
                        src="images/icon-why-choose-3.svg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Client-Centered Collaboration</h3>
                      <p>
                        Your input is valued throughout the entire process,
                        ensuring your vision is fully realized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-images">
                <div className="why-choose-img-box-1">
                  <div className="why-choose-img-1">
                    <figure className="image-anime ">
                      <img
                        src="images/why-choose-img-1.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="why-choose-img-2">
                    <figure className="image-anime ">
                      <img
                        src="images/why-choose-img-2.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="why-choose-img-box-2">
                  <div className="why-choose-img-3">
                    <figure className="image-anime ">
                      <img
                        src="images/why-choose-img-3.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="why-choose-img-4">
                    <figure className="image-anime ">
                      <img
                        src="images/why-choose-img-4.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seriveces */}
      <div className="our-services" id="serviceSection">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Stylish spaces tailored to <span>your budget</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our expert designers collaborate with you to create interiors
                  that fit your needs and your budget perfectly.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="service-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img
                        src="images/service-1.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </a>
                </div>
                <div className="service-btn">
                  <a href="#">Starting at 3.57L*</a>
                </div>
                <div className="service-content">
                  <h3>
                    <a href="#">2BHK – Smart &amp; Stylish Living</a>
                  </h3>
                  <p>
                    Perfectly designed for modern couples or small families, our
                    2BHK interiors offer a harmonious blend of style
                  </p>
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myFormModal"
                    className="btn-default mt-2"
                  >
                    GET FREE QUOTE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img
                        src="images/service-2.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </a>
                </div>
                <div className="service-btn">
                  <a href="#">Starting at 4.45L*</a>
                </div>
                <div className="service-content">
                  <h3>
                    <a href="#">3BHK – Spacious Comfort Design</a>
                  </h3>
                  <p>
                    Tailored for growing families, our 3BHK packages combine
                    ample space with chic design elements.{" "}
                  </p>
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myFormModal"
                    className="btn-default  mt-2"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img
                        src="images/service-3.jpg"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </figure>
                  </a>
                </div>
                <div className="service-btn">
                  <a href="#">Starting at 4.45L*</a>
                </div>
                <div className="service-content">
                  <h3>
                    <a href="#">4BHK – Luxury That Reflects You</a>
                  </h3>
                  <p>
                    Experience premium living with our 4BHK solutions ideal for
                    large families or luxury seekers.
                  </p>
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myFormModal"
                    className="btn-default  mt-2"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div style={{ backgroundColor: "#fdb6311f" }} className="our-project">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-5">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp mt-3 pt-3">
                  "End-to-end Solutions
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Complete Interior Solutions
                  <span> Hassle-Free</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-7">
              {/* Section Title Content Start */}
              <div className="section-title-content">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  From concept to creation, we handle everything design,
                  execution, and delivery. Our end-to-end interior services
                  ensure a smooth experience tailored to your style and needs.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Project Item Boxes start */}
              <div className="row project-item-boxes align-items-center">
                <div className="col-md-3 project-item-box architecture bedroom">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img loading="lazy" src="images/Kitchen.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Modular Kitchen</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 project-item-box interior kitchen">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service3.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Modern Living Space</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-3 project-item-box furniture architecture">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service4.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Modern Twin Beds Bedroom Design</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-3 project-item-box kitchen bedroom">
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service5.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Warm Wood Kitchen Design</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-3 project-item-box architecture bedroom">
                  {/* Project Item Start */}
                  <div className="project-item wow fadeInUp">
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service6.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Bedroom with Botanical Wall Mural</a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 project-item-box interior kitchen">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service8.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Contemporary Interior Design View</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-3 project-item-box furniture architecture">
                  {/* Project Item Start */}
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service7.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Overhead Living Space Perspective</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
                <div className="col-md-3 project-item-box kitchen bedroom">
                  <div
                    className="project-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="project-image">
                      <div className="project-featured-image">
                        <figure className="image-anime">
                          <img
                            loading="lazy"
                            decoding="async"
                            src="images/service9.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="project-content">
                      <h2>
                        <a>Modern Bedroom with Sliding Wardrobe</a>
                      </h2>
                    </div>
                  </div>
                  {/* Project Item End */}
                </div>
              </div>
              {/* Project Item Boxes End */}
            </div>
          </div>
        </div>
      </div>

      <div className="how-we-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">how we work</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  From concept to completion in<span> our work</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content dark-section">
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our comprehensive approach guides you through each phase of
                  the design process, from initial brainstorming and
                  conceptualization.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="how-we-work-list">
                <div className="how-we-work-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-1.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>01. initial consultation</h3>
                    <p>
                      We start with a one-on meeting to understand your vision
                      preferences and requirement.
                    </p>
                  </div>
                </div>
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-2.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>02. design planning</h3>
                    <p>
                      This involves selecting materials, and layouts,
                      furnishings, as well as creating 3D renderings.
                    </p>
                  </div>
                </div>
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-3.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>03. project execution</h3>
                    <p>
                      With the design plans in this place, we manage and
                      coordinate all aspects of the projects.
                    </p>
                  </div>
                </div>
                <div
                  className="how-we-work-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <img src="images/icon-how-we-work-4.svg" alt="" />
                  </div>
                  <div className="how-we-work-content">
                    <h3>04. final review</h3>
                    <p>
                      After completing project we conduct a thorough walkthrough
                      with you to review the space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="our-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="our-faqs-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">asked question</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Have your any question look <span>here now</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Nostra turma dedicata consilium arctius operatur ut visionem
                    tuam intelligat et eam ad vitam adducat cum magna cura in
                    singula
                  </p>
                </div>
                <div className="faq-accordion" id="accordion">
                  {faqData.map((item, index) => (
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay={`${index * 0.2}s`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${
                            item.show ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={item.show ? "true" : "false"}
                          aria-controls={`collapse${item.id}`}
                        >
                          <span>{item.id}.</span> {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          item.show ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-md-block">
              <div className="our-faqs-image">
                <figure className="image-anime ">
                  <img
                    src="images/faqs-image.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="our-clients" id="Partnerss">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-clients-box">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">our clients</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Our trusted partners
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We collaborate with top tier, trusted partners to bring you
                    quality materials, reliable services, and timeless designs
                    <br /> ensuring your home gets nothing but the best.
                  </p>
                </div>
                {/* Section Title End */}
                {/* Client Logo Slider Start */}
                <div className="our-client-slider mt-5">
                  <Slider {...setttings2}>
                    {partnerLogos.map((logo, index) => (
                      <div key={index} className="px-2">
                        <div className="client-logo border rounded shadow-sm">
                          <img
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="img-fluid"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div id="contactSection" className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.6531681021515!2d78.32257327516695!3d17.476306783426168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzM0LjciTiA3OMKwMTknMzAuNSJF!5e0!3m2!1sen!2sin!4v1750854759118!5m2!1sen!2si"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-form">
                <div className="section-title">
                  <h3 className="wow fadeInUp">contact form</h3>
                  <h2 className="">
                    We would love to hear <br />
                    <span>from you</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="contact-form">
                  <form
                    id="contactForm"
                    onSubmit={(e) => handleContact(e)}
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="row">
                      <div className="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          name="name"
                          value={contact.name}
                          className="form-control"
                          onChange={(e) => handleChange(e)}
                          placeholder="Name*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 mb-2">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={contact.email}
                          onChange={(e) => handleChange(e)}
                          placeholder="Email Address*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          value={contact.phone}
                          minLength={10}
                          maxLength={10}
                          onChange={(e) => handleChange(e)}
                          placeholder="Phone*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 mb-2">
                        <input
                          type="text"
                          name="location"
                          className="form-control"
                          value={contact.location}
                          onChange={(e) => handleChange(e)}
                          placeholder="Location*"
                          required
                        />
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <textarea
                          name="description"
                          className="form-control"
                          value={contact.description}
                          onChange={(e) => handleChange(e)}
                          rows={4}
                          placeholder="Enter Description..."
                        />
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="btn-default">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* social */}
      <div className="social-container">
        <div className="socials">
          <a
            href={`https://wa.me/9515462333?text=Hi`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="label">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram"></i>
            <span className="label">Instagram</span>
          </a>
        </div>
      </div>

      {/* <a
        href="https://wa.me/9515462333?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fa-brands fa-whatsapp fa-2x" aria-hidden="true" />
      </a> */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        id="scrollTopBtn"
        className="scroll-top-icon"
      >
        <i className="fa-solid fa-arrow-up fa-1x" aria-hidden="true" />
      </a>

      {/* Modal */}
      <div
        className="modal fade"
        id="myFormModal"
        tabIndex={-1}
        aria-labelledby="myFormModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0 m-0">
              <div className="row p-0 m-0">
                <div className="col-md-4 d-none d-md-block p-0 m-0">
                  <div className="row p-0 m-0">
                    <div className="col-lg-12 p-0 m-0">
                      <div className="service-item wow fadeInUp mb-0">
                        <div className="service-image">
                          <a href="#" data-cursor-text="View">
                            <figure
                              style={{ height: 420 }}
                              className="image-anime"
                            >
                              <img
                                style={{ height: 420 }}
                                src="images/service-1.jpg"
                                alt=""
                              />
                            </figure>
                          </a>
                        </div>
                        <div className="service-btn">
                          <a href="#">Starting at 3.57L*</a>
                        </div>
                        <div className="service-content">
                          <h3>
                            <a href="#">2BHK – Smart &amp; Stylish Living</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 p-0 m-0">
                  <div
                    style={{ marginRight: 21, marginLeft: 21 }}
                    className="contact-us-form mt-4"
                  >
                    <div className="section-title">
                      <button
                        style={{ float: "right" }}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                      <h2
                        style={{ fontSize: 26 }}
                        className="text-anime-style-2"
                        data-cursor="-opaque"
                      >
                        We would love to hear
                        <span>from you</span>
                      </h2>
                      <p
                        className="wow fadeInUp mt-0"
                        style={{ fontSize: 14 }}
                        data-wow-delay="0.2s"
                      >
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>
                    <div className="contact-form">
                      <form
                        id="contactForm"
                        onSubmit={(e) => handleContact(e)}
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="row">
                          <div className="form-group col-md-6 mb-2">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              value={contact.name}
                              onChange={(e) => handleChange(e)}
                              placeholder="Name*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 mb-2">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={contact.email}
                              onChange={(e) => handleChange(e)}
                              placeholder="Email Address*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 mb-2">
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              value={contact.phone}
                              minLength={10}
                              maxLength={10}
                              onChange={(e) => handleChange(e)}
                              placeholder="Phone*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 mb-2">
                            <input
                              type="text"
                              name="location"
                              className="form-control"
                              value={contact.location}
                              onChange={(e) => handleChange(e)}
                              placeholder="Location*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-12 mb-3">
                            <textarea
                              name="description"
                              className="form-control"
                              value={contact.description}
                              onChange={(e) => handleChange(e)}
                              rows={4}
                              placeholder="Enter Description..."
                            />
                          </div>
                          <div className="col-md-12 text-center mb-3">
                            <button type="submit" className="btn-default">
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
