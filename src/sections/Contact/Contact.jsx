import "./Contact.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
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
  const formRef = useRef();

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
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <Button label={"Submit"} />
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
