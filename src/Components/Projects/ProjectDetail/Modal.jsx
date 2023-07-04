import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Modal = ({ uniqueId }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("projectDetail.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const data = datas.find((sd) => sd?.id === uniqueId);

  console.log(data);

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-[#0f0d22e1]"
        >
          <div className="text-center">
            <Carousel>
              <div className=" relative ">
                <img src={data?.image1} />
              </div>
              <div className=" relative ">
                <img src={data?.image2} />
              </div>
              <div className=" relative ">
                <img src={data?.image3} />
              </div>
              <div className=" relative ">
                <img src={data?.image4} />
              </div>
            </Carousel>
          </div>

          <div className="text-white space-y-5">
            <h2 className="text-2xl font-semibold">Name: {data?.name}</h2>
            <p className="font-semibold">
              <h3 className="text-xl">Used Technology:</h3>
              <p className="px-4">
                {data?.technology.map((tn) => (
                  <span key={tn}>{tn}, </span>
                ))}
              </p>
            </p>
            <div className="">
              <p className=" text-xl font-semibold">
                Fetchers fo this website:
              </p>
              <ul className=" list-disc px-6">
                {data?.fetchers.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 flex-col md:flex-row justify-start mt-8">
            <Link
              to={data?.clientCode}
              className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-4 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold"
              target="_blanc"
            >
              Client Code Link
            </Link>
            <Link
              to={data?.sarverCode}
              className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-4 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold"
              target="_blanc"
            >
              Server Code Link
            </Link>
            <Link
              to={data?.livesite}
              className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-4 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold"
              target="_blanc"
            >
              Live site
            </Link>
          </div>

          <div className="text-end mt-6">
            <button className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-4 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold text-xl">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
