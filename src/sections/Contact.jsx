import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import profImage from "/images/profile/profile.png";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("rajankhadkaa0809@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full px-0 sm:px-4 md:px-10 ">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="Have questions or ideas? Let’s talk!"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5 ">
            <div className="flex-left card-border rounded-xl p-2 sm:p-4 md:p-10">
              <h1 className="font-semibold text-3xl">More about me</h1>
              <div className="flex flex-col text-lg">
                <p className=" mt-6 text-gray-400 ">
                  {/* <p className="text-lg max-w-[290px] mt-6 text-gray-400"> */}
                  I’m a dedicated developer skilled in React Native, MERN stack,
                  and Next.js, looking for internships to work with the best.
                  <br /> <br /> When I’m not developing, I sketch app ideas,
                  watch classic movies for fun, and keep an eye on tech trends
                  to stay ahead of the game.
                </p>

                {/* <div className="img-div border-2 border-gray-800 bg-none">
                  <img
                    className="img-profile"
                    // src="../../assets/profile-2.jpg"
                    src={profImage}
                    // src="/img"
                    alt="Image"
                  />
                </div> */}
                <div className="flex gap-2 mt-8 items-center text-gray-300">
                  <EnvelopeIcon
                    style={{ height: 19, width: 19 }}
                    className="sm:size-[18px]"
                  />
                  <p className="">rajankhadkaa0809@gmail.com</p>
                </div>
              </div>
              <button className="w-full mt-6" onClick={handleEmailCopy}>
                <div className="px-4 py-4 rounded-lg bg-black-200 hover:bg-gray-700 flex justify-center items-center relative cursor-pointer overflow-hidden group ">
                  <div className="bg-circle" />
                  <p className="text">
                    {copied ? "Email Copied!" : "Copy Email"}
                  </p>
                  {/* <div className="arrow-wrapper">
                    <img
                      src="/images/arrow-down.svg"
                      //   className="-rotate-90"
                      alt="arrow"
                    />
                  </div> */}
                </div>
              </button>
            </div>
          </div>
          <div className="xl:col-span-7">
            <div className="flex-center card-border rounded-xl p-2 sm:p-4 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    className="placeholder-gray-500 "
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your-email@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="placeholder-gray-500 "
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Rajan, Lets work together."
                    rows="4"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        className="-rotate-90"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
