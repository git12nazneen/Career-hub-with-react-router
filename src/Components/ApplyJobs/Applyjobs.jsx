import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";


const Applyjobs = () => {
    const jobs = useLoaderData();
    
    const [jobApply, setJobApply] = useState([])
    const [ displayJob, setDisplayJob] = useState([])

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJob(jobApply);
        }
        else if(filter === 'remote'){
            const remoteJobs = jobApply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = jobApply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsiteJobs)
        }
    }

    console.log(jobs)
    useEffect(()=>{
        const storedjobs = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = [];
            for(const id of storedjobs){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setJobApply(jobsApplied);
            setDisplayJob(jobsApplied);
            // console.log(jobs, storedjobs,jobsApplied)
        }
    },[jobs])

    return (
        <div>
            <h2 className="text-2xl font-extrabold">Applied Jobs {jobApply.length}</h2>

            <div className="border mt-10 mb-24 p-5 bg-purple-200">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
                </details>
            </div>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        
                        <span className="mr-6 my-10">{job.job_title}
                        </span>

                        <span> {job.company_name} : {job.remote_or_onsite}</span>
                    
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Applyjobs;