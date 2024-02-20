import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import portfolio from '../../portfolio.json';
const Project = () => {
    const data = portfolio.MyProjects;
    return (
        <div id="project">
            <div className="hero min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-3xl py-3">
                        <FontAwesomeIcon icon={faCircleDot} size='sm' /> {data.title}
                    </h1>
                    <span className="text-sm font-semibold">{data.description}</span>
                    <div className="flex flex-wrap p-10 justify-center">
                        {data.projects.map((project, index) => (                            
                        <div className="card w-80 h-96 bg-base-100 shadow-xl mr-2 mb-3" key={index}>
                            <figure><Image src={`/images/project/${project.image}`} alt="Shoes" width={400} height={400} className="shadow-2xl shadow-fuchsia-800"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" href={project.viewLink}>View</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;