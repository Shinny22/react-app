import React from 'react'
import Nav from './Nav'
import Aboutus from './Aboutus'
import { Footer } from './Footer'

interface Props {
    
}

const AboutUsView = () => {
    return (
        <div>
            <Nav/>
            <Aboutus/>
            <Footer/>
        </div>
    )
}

export default AboutUsView
