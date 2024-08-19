"use client";
import emailjs from "@emailjs/browser";
import img from "assets/contact/contact.svg";
import SectionHeader from "components/section-header";
import Image from "next/image";
import { useRef } from "react";
import { Box, Button, Container } from "theme-ui";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_icnxth8", "template_e92qbfj", form.current, {
        publicKey: "Dh0HzYkiVYLzRZFtY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("email send");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Box
      id="contact"
      sx={{ variant: "section.testimonial" }}
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <Container css={{ textAlign: "center" }}>
        <SectionHeader
          slogan="Contact Us "
          title="If you need feel free contact us."
        />
      </Container>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 data-aos="fade-right" data-aos-duration="2000" className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p data-aos="fade-right" data-aos-duration="2500" className="mb-2 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <p data-aos="fade-right" data-aos-duration="3000" className=" mb-2 text-base font-medium text-body-color">
               phone: +686-119-7876
              </p>
              <p data-aos="fade-right" data-aos-duration="3500" className="mb-12 text-base font-medium text-body-color">
                email: solutions@bigroup.mx
              </p>

              <form data-aos="fade-up" data-aos-duration="3000" ref={form} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div data-aos="zoom-in"  className="w-full px-4">
                    <Button variant="primary">Submit</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="w-full px-4 lg:w-1/2 xl:w-1/2">
            {/* <NewsLatterBox /> */}
            <Image
              className="w-full"
              src={img}
              width={140}
              height={30}
              alt="contact image"
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
