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
        <section id="home">
          <AboutMe name="Milkovics Szebasztián" description="Coding is not just my work, it's my hobby too."/>
        </section>
        <Container backgoundColor="bg-gray-950" id="about">
          <section id="skills">
            <Skills />
          </section>
          <Line />
          <section id="projects">
            <Projects />
          </section>
          <Line />
          <section id="contact">
            <Contact />
          </section>
        </Container>
        <Footer />
      </div>
    )
}

export default App
