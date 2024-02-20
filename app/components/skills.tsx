import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import portfolio from '../../portfolio.json';

const Skills = () => {
    const data = portfolio.MySkills;
  return (
    <div id='skills'>
      <div className="hero min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl py-3"><FontAwesomeIcon icon={faCircleDot} size='sm' /> Skills</h1>
          <div className="flex flex-wrap p-10 justify-center">
            <div className="card card-side bg-base-200 shadow-sm shadow-fuchsia-800 mb-3 md:pr-10">
              <div className="card-body">
                <h1 className={`text-center font-bold text-xl ${data.description ? null : 'pb-5'}`}>{data.title}</h1>
                {data.description ? <span className="text-center font-semibold text-sm pb-5">{data.description}</span>:null}
                <ul className="flex flex-wrap">
                  {data.skills.map((skill, index) => (
                    <li key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-3 flex mb-2">
                      <Image src={`/images/skills/${skill.image}`} width={50} height={50} className='mr-2' alt='logo' />
                      <div>
                        <h1 className="text-xl font-bold">{skill.title}</h1>
                        <span>{skill.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
