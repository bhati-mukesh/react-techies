import React from 'react'
import Common from '../../../components/Common/Common.component'
import app from '../../../images/home.jpg'

const About = () =>{
    return (
        <>
        <Common 
            name="Welcome to About Page" 
            imgsrc={app} 
            visit="/contact"  
            btname={"Contact Now"}
        />
        </>
    )
}
export default About