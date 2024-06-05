import { Link } from "react-router-dom";

const Project = ({ project, setUniqueId }) => {
    //   console.log(project);

    return (
        <>
            <div className="card drop-shadow-xl hover:-translate-y-4 transition duration-500 ease-in-out w-full  bg-[#00000080] shadow-xl text-white">
                <figure>
                    <img className="" src={project.image} alt="Shoes" />
                </figure>
                <div className="card-body space-y-4">
                    <h2 className="text-2xl font-semibold">{project?.name}</h2>
                    <p className="font-semibold">{project?.detail} </p>
                    <div className="card-actions justify-end">
                        <button className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-3 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold">
                            <Link to={project?.livesite} target="_blanck">
                                Live Site
                            </Link>
                        </button>
                        <button
                            onClick={() => setUniqueId(project?.id)}
                            className="badge badge-outline hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-3 text-md border-[#860C78] text-[#e7abff] hover:text-white font-semibold"
                        >
                            <button
                                className=""
                                onClick={() => window.my_modal_4.showModal()}
                            >
                                open modal
                            </button>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
