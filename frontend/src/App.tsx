import './App.css';
import NavBar from './components/NavBar';
import type { NavItem } from './components/NavBar';
import profileImg from './assets/profileImg.png';
import AboutMe from './components/AboutMe';
import Container from './components/Container';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Line from './components/Line';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          <Line />
          <Projects />
          <Line />
          <Contact />
        </Container>
        <Footer />
      </div>
    )
}

export default App
