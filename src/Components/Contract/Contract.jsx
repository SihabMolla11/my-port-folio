import Lottie from "lottie-react";
import contract from "../../assets/lotties/contract.json";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contract = () => {
  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   console.log(name, email, message);
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zfyfye5",
        "template_78vgphg",
        form.current,
        "ucmg1nWnbeEolJ2dM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="my-container mt-20 pb-6">
        <h2 className="text-4xl text-white font-bold text-center mb-10 " data-aos="fade-down">
          Contract
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full" data-aos="fade-right">
            <Lottie animationData={contract} loop={true} />
          </div>
          <div className="w-full" data-aos="fade-left">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" bg-[#e073d73a] p-12 rounded-xl"
            >
              <h2 className="text-center text-white font-bold my-5 text-2xl">
                Contract Form
              </h2>
              <small className="text-white mx-2">Name: </small>
              <input
                type="text"
                name="user_name"
                autoComplete="off"
                required
                placeholder="Write Your Name"
                className="w-full bg-[#06031660] border-[2px] border-[#f561fa] text-white p-2 font-semibold rounded-lg focus:outline-none focus:border-[#a506aa]"
              />
              <br /> <br />
              <small className="text-white mx-2">Email: </small>
              <input
                type="Email"
                name="user_email"
                autoComplete="off"
                placeholder="Type your Email"
                className="w-full bg-[#06031660] border-[2px] border-[#f561fa] text-white p-2 font-semibold rounded-lg focus:outline-none focus:border-[#a506aa] "
                required
              />
              <br /> <br />
              <small className="text-white mx-2">Message: </small>
              <textarea
                name="message"
                placeholder="Type your message"
                required
                autoComplete="off"
                className="w-full h-32 bg-[#06031660] border-[2px] border-[#f561fa] text-white p-2 font-semibold rounded-lg focus:outline-none focus:border-[#a506aa]  "
              />
              <input
                type="submit"
                value="send message"
                className="badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-2 text-md border-[#ff83f0] text-[#ffffff] hover:text-white font-semibold border-2 rounded-md w-full cursor-pointer mt-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
