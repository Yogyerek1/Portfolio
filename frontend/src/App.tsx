import './App.css';
import NavBar from './components/NavBar';
import type { NavItem } from './components/NavBar';
import profileImg from './assets/profileImg.png';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', enable: true },
  { label: 'About', href: '#about', enable: true },
  { label: 'Projects', href: '#projects', enable: true },
  { label: 'Skills', href: '#skills', enable: true },
  { label: 'Contact', href: '#contact', enable: true },
];

function App() {
  return (
    <>
      <NavBar items={navItems} profileImg={profileImg} />
    </>
  )
}

export default App
