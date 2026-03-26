import React from 'react';
import OpenAccounts from '../OpenAccount';
import Hero from './Hero'
import Signup from './Signup';
import Investment from './Investment';
import StepAccount from './StepAccount';
import Pricing from './Pricing';
import Explore from './Explore';
import FAQ from './FAQ';


function SignUpPage() {
    return (  
        <>
        <Hero/>
        <Signup/>
        <Investment/>
        <StepAccount/>
        <Pricing/>
        <Explore/>
        <FAQ/>
        <OpenAccounts/>

        </>
    );
}

export default SignUpPage;
