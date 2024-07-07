import { useRef, useState } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Button from "../../components/Button/Button";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const handleAnimationComplete = () => {
    setAnimationComplete(!animationComplete);
  };

  const toastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_k01np7p",
        "template_rtzommq",
        formRef.current,
        "f-7uTHYJZW6zRGUqz"
      );
      toast.success("Mail sent successfully!", toastOptions);
    } catch (error) {
      toast.error("Unable to send mail!", toastOptions);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
        id="contact"
      >
        <div className="text-container">
          <h1>
            Lets work <br /> together
          </h1>
          <div className="text-item-container">
            <div className="text-item">
              <h2>Mail</h2>
              <span>077satyamsharma@gmail.com</span>
            </div>
            <div className="text-item">
              <h2>Phone</h2>
              <span>+916392173619</span>
            </div>
            <div className="text-item">
              <h2>Address</h2>
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        <div className="form-container">
          <motion.div
            className="phone-icon"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            onAnimationComplete={handleAnimationComplete}
            style={{
              zIndex: animationComplete ? -1 : 1,
            }}
          >
            <svg
              width="500px"
              height="500px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
                stroke="#9400FF"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <Button label={"Submit"}/>
          </motion.form>
        </div>
      </motion.div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
};

export default Contact;
