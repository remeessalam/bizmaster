import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { companyDetails } from "../constant";

const LandingContact = () => {
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from COGNITEK",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        // navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  const { pathname } = useLocation();
  return (
    <div className="bg-dark2">
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contact Us
                </span>
                <h2 className="sec-title style2 text-white">Get In Touch</h2>
                <p className="mb-40 text-white">
                  {pathname === "/rpa-development" &&
                    `Automate your business operations with Cognitek.`}
                  {pathname === "ai-calling-development" &&
                    `Every call matters. Let Cognitek make every interaction count.`}
                </p>
                <div className="social-btn style5 text-white">
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="contact-form">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-border"
                      style={{ color: "white" }}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p style={{ color: "#ff6262" }}>{errors.name.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-border"
                      style={{ color: "white" }}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p style={{ color: "#ff6262" }}>{errors.email.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border"
                      style={{ color: "white" }}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p style={{ color: "#ff6262" }}>{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control style-border"
                      style={{ color: "white" }}
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />
                    {errors.subject && (
                      <p style={{ color: "#ff6262" }}>
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-border"
                      style={{ color: "white" }}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p style={{ color: "#ff6262" }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button
                      disabled={spinner}
                      type="submit"
                      className="global-btn w-100"
                    >
                      {spinner ? "Sending..." : "Send Now"}
                      <img
                        src="assets/img/icon/right-icon.svg"
                        alt="COGNITEK SOLUTIONS"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
