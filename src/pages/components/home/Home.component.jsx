import React from 'react'
import Common from '../../../components/Common/Common.component'
import app from '../../../images/home3.jpg'

const Home = () =>{
    return (
        <>
        <Common 
            name="Grow your business with" 
            imgsrc={app} 
            visit="/services"  
            btname={"Get Started"}
        />
        </>
    )
}
export default Home