import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* <p className={styles.sectionSubText}>Harshwardhan Natu</p> */}
        <div className="mt-12 flex flex-col gap-4">
        <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/resume-list-checklist-detail-note-paper-biodata-profile-office-32201.png?f=webp&w=256"
              alt="Instagram"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              <a
                href="https://drive.google.com/file/d/1WQN9V5fr0Jc-oeQoTjU4VDUGjbFiLX_2/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-52-151106.png?f=webp&w=256"
              alt="Instagram"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              <a
                href="https://www.instagram.com/sangharxxshhh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sangharxxshhh
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-53-189787.png?f=webp&w=256"
              alt="Twitter"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              <a
                href="https://twitter.com/sangharshhhxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sangharshhhxx
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/contact-13-99830.png?f=webp&w=256"
              alt="Instagram"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              {/* <a
                href="https://www.instagram.com/sangharxxshhh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                +91 8169218862
              {/* </a> */}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-email-613-461703.png?f=webp&w=256"
              alt="Instagram"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              {/* <a
                href="https://www.instagram.com/sangharxxshhh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                harsh07natu@gmail.com
              {/* </a> */}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-194-789838.png?f=webp&w=256"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <p className="text-white font-medium ml-4">
              <a
                href="https://www.linkedin.com/in/harshwardhan-natu-55474a203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harshwardhan Natu
              </a>
            </p>
          </div>
        </div>
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form> */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
