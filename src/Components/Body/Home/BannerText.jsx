import { BiArrowToBottom } from "react-icons/bi";

const BannerText = () => {
  return (
    <div >
      <div className="text-white font-bold space-y-5">
        <h2 className="text-3xl">Hello I am</h2>
        <h2 className=" text-4xl">SIHAB UDDIN MOLLA</h2>
      </div>
      <button className=" mt-5 flex gap-2 items-center uppercase p-2 border-2 rounded-md font-semibold text-white bg-none hover:bg-white hover:text-[#0193FF] transition duration-300 ease-in-out">
        Download my resume <BiArrowToBottom className="text-2xl" />
      </button>
    </div>
  );
};

export default BannerText;
