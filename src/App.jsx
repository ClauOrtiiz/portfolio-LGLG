import React from 'react';
import './App.css';

import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
// import { Skills } from './componentes/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Experience } from './components/experience/experience';

export default function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                {/* <Skills /> */}
                <Experience />
                <Contact />
                <Footer />
            </main>

        </>
    )
}