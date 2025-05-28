import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import profImage from "/images/other-images/profile.png";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

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
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ email: "", message: "" });
      alert("Email sent successfully.");
    } catch (error) {
      console.log("EmailJS Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full">
        <TitleHeader
          title="Let’s Connect"
          sub="Have questions or ideas? Let’s talk!"
        />
        <div className="grid-12-cols">
          <div className="xl:col-span-6 ">
            <div className="flex-left card-border rounded-xl p-6 md:p-10">
              <h1 className="font-semibold mt-2 lg:mt-0 text-2xl md:text-3xl">
                More about me
              </h1>
              <div className="flex flex-col text-lg">
                <p className=" mt-6 text-gray-400 ">
                  {/* <p className="text-lg max-w-[290px] mt-6 text-gray-400"> */}
                  I’m a dedicated Full-Stack developer skilled in MERN and
                  Next.js, looking for internships where I can grow, contribute,
                  and learn from real-world projects.
                  <br /> <br /> When I’m not developing, I sketch app ideas,
                  watch classic movies for fun, and keep an eye on tech trends.
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
                <div className="px-4 py-4 rounded-lg border-2 border-black-200  bg-none hover:bg-black-200 transition-colors duration-200 flex justify-center items-center relative cursor-pointer overflow-hidden group ">
                  {/* <div className="bg-circle" /> */}
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
          <div className="xl:col-span-6">
            <div className="flex-center card-border rounded-xl p-6 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    className="placeholder-zinc-600 text-base bg-zinc-900"
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
                    className="placeholder-zinc-600 text-base bg-zinc-900"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Rajan, Lets work together."
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/other-images/arrow-down.svg"
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
