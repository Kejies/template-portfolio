import Link from "next/link";
import portfolio from "../../portfolio.json";
import Image from "next/image";
interface Portfolio {
    header_title: string;
    icon: string;
}
const Navbar = () => {
    const portfolioData: Portfolio = portfolio.portfolio;
    return(
        <nav className="navbar bg-gray-200 sticky top-0 z-50">
          <div className="navbar-start sticky top-0 z-50">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-gray-900">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='#about'>About Me</Link></li>
                <li><Link href='/#skills'>Skills</Link></li>
                <li><Link href='/#project'>Project</Link></li>
              </ul>
            </div>
            <Link className="btn btn-ghost flex items-center space-x-3 rtl:space-x-reverse text-gray-900" href="/">
            <Image src={`/images/${portfolioData.icon}`} width={40} height={40} alt="logo"/>
            <h1 className="text-2xl xl:ml-24">PortFolio</h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl text-gray-900">
            <li><Link href='/'>Home</Link></li>
                <li><Link href='/#about'>About Me</Link></li>
                <li><Link href='/#skills'>Skills</Link></li>
                <li><Link href='/#project'>Project</Link></li>
            </ul>
          </div>
        </nav>
    );
}
export default Navbar;