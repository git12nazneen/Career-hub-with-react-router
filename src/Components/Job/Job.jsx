import { MdLocationPin } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
           
            <div className="card w-96 bg-base-200 shadow-xl">
            <figure> <img  src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex ">
                    <button className="px-5 py-2 font-extrabold border rounded bg-violet-200 border-gray-500 mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded bg-violet-200 border-gray-500">{job_type}</button>
                </div>
                <div>
                    <div className="flex mt-4">
                        <h2 className=" flex mr-5"><MdLocationPin className="text-2xl">  </MdLocationPin >{location}</h2>
                        <h2 className=" flex"><CiDollar className="text-2xl"> </CiDollar>{salary}</h2>
                        </div>
                </div>
                <div className="card-actions ">
               <Link to={`/job/${id}`}>
               <button className="btn btn-primary">View details</button>
               </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Job;