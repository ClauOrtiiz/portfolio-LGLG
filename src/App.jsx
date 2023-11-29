import React from 'react';
import './App.css';

import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Project } from './components/projects/projects';
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
                <Project />
                <Experience />
                <Contact />
                <Footer />
            </main>

        </>
    )
}