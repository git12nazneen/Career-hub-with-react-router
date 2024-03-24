import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    console.log(id, jobs)

    const notify = () => {
        saveJobApplication(idInt)
        toast("Apply jobs done !");
    }

    return (
        <div>
        
            <div className="grid gap-5 md:grid-cols-4 my-10 ">
            <div className="border md:col-span-3 p-7">
                <h2 className="mb-5 font-light "><span className="font-bold">Job description:</span> {job.job_description}</h2>
                <h2 className="mb-5 font-light"><span className="font-bold">Job responsibility</span>{job.job_responsibility}</h2>
                <h2>
                <span className="font-bold">Educational_requirements:</span>
                </h2>
                <h2 className="mb-5 font-light">{job.educational_requirements}</h2>
                <h2>
                <span className="font-bold">Experiences:</span>
                </h2>
                <h2 className="mb-5 font-light">{job.experiences}</h2>
            </div>
            <div className="border md:col-span-1 p-7 bg-gray-200">
                <h2 className="mb-5">Job details</h2>
                <hr />
                <h3 className="mb-3">Salary {job.salary}</h3>
                <h3 className="mb-2">Job Title :{job.job_title}</h3>
                <h3 className="mb-5">Conttact Information</h3>
                    <hr />
                <h3 className="mb-2">Phone :{job.contact_information.phone}</h3>
                <h3 className="mb-2">Email : {job.contact_information.email}</h3>
                <h3 className="mb-2">Address : {job.contact_information.address}</h3>
                <button onClick={notify} className="px-5 py-2 font-extrabold border rounded bg-violet-400 border-gray-500">Apply now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;