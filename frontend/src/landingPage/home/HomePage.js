import React from 'react';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccounts from '../OpenAccount';

import Hero from './Hero';

function HomePage() {
    return (  
    <>
    <Hero></Hero>
    <Stats></Stats>
    <Pricing></Pricing>
    <Education></Education>
    <OpenAccounts></OpenAccounts>
    </>
    );
}

export default HomePage;