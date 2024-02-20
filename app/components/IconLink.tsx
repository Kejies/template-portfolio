import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faGithub, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {portfolio} from "../../portfolio.json";
import Link from 'next/link';
interface SocialMedia {
    [platform: string]: { icon: string; url: string };
  }
  
  interface Portfolio {
    title: string;
    header_title: string;
    icon: string;
    name: string;
    description: string;
    image_hero: string;
    socialMedia: SocialMedia;
  }
const IconLink = () => {
    const portfolioData: Portfolio = portfolio;

    return (
        <div className="flex justify-center mt-3">
        {Object.entries(portfolioData.socialMedia).map(([platform, { url, icon }], index) => (
            <Link href={url} key={index} target="_blank" className={`btn btn-circle ${icon === 'faLinkedin' ? 'hover:bg-blue-700' : icon === 'faInstagram' ? 'hover:bg-fuchsia-400' : 'hover:bg-black'} mr-2 border-black border-2 bg-indigo-500`}>
              <FontAwesomeIcon icon={icon === 'faXTwitter' ? faXTwitter : icon === 'faInstagram' ? faInstagram : icon === 'faTiktok' ? faTiktok : icon === 'faLinkedin' ? faLinkedin : icon === 'faGithub' ? faGithub : faGlobe}  size="xl" color="white" />
            </Link>
          ))}
        </div>
    )
}
export default IconLink;