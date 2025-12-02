import './App.css';
import NavBar from './components/NavBar';
import type { NavItem } from './components/NavBar';
import profileImg from './assets/profileImg.png';
import AboutMe from './components/AboutMe';
import Container from './components/Container';
import Skills from './components/Skills';
import Projects from './components/Projects';

const navItems: NavItem[] = [
    { label: 'Home', href: '#home', enable: true },
    { label: 'About', href: '#about', enable: true },
    { label: 'Skills', href: '#skills', enable: true },
    { label: 'Projects', href: '#projects', enable: true },
    { label: 'Contact', href: '#contact', enable: true },
];

function App() {
    return (
      <div className="w-full min-h-screen m-0 p-0 bg-gray-950">
        <NavBar items={navItems} profileImg={profileImg} />
        <AboutMe name="Milkovics Szebasztián" description="Coding is not just my work, it's my hobby too."/>
        <Container backgoundColor="bg-gray-950">
          <Skills />
          <div className="flex justify-center my-6">
            <hr className="w-5/6 border-t-2 border-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          </div>
          <Projects />
        </Container>
      </div>
    )
}

export default App
