import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs, setJobs] = useState([])
    const [datalength, setDatalength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])   
    
    return (
        <div>
            <div>
            <h2 className="text-5xl text-center">Featured Jobs</h2>
            <p className="text-center my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, datalength).map(job => <Job
                    job={job}
                    key={job.id}
                    ></Job>)
                }
            </div>
            <div className={datalength == jobs.length && 'hidden'}><button 
            onClick={()=>setDatalength(jobs.length)}
            className="btn bg-purple-500 text-white mx-auto my-8">See all jobs</button></div>
        </div>
    );
};

export default Featured;