import './App.css';
import NavBar from './components/NavBar';
import type { NavItem } from './components/NavBar';
import profileImg from './assets/profileImg.png';
import AboutMe from './components/AboutMe';

const navItems: NavItem[] = [
    { label: 'Home', href: '#home', enable: true },
    { label: 'About', href: '#about', enable: true },
    { label: 'Projects', href: '#projects', enable: true },
    { label: 'Skills', href: '#skills', enable: true },
    { label: 'Contact', href: '#contact', enable: true },
];

function App() {
    return (
      <div className="w-full min-h-screen m-0 p-0 bg-gray-950">
        <NavBar items={navItems} profileImg={profileImg} />
        <AboutMe name="Milkovics Szebasztián" description="Coding is not just my hob, it's my hobby too."/>
      </div>
    )
}

export default App
