import React, { useState } from 'react'






const Contact = () =>{

    const [data, setData] = useState({
        fullname:'',
        phone: '',
        email:'',
        message: ''
    })

    const formSubmit = (e) =>{
        e.preventDefault()
        alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone} and email is ${data.email}, here is what I want to say ${data.message}.`)
    
    }
    
    const inputEvent = (event) => {
        const { name, value } = event.target
        setData((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    return (
        <>
        <div className="my-5 ">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input type="text" class="form-control" id="fullname" name="fullname" required 
                            value={data.fullname} onChange={inputEvent}  placeholder="Enter Your Name" />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" name="phone" required placeholder="Enter 
                            Your Mobile Number" value={data.phone} onChange={inputEvent}   />
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" id="email" name="email" required 
                            value={data.email} onChange={inputEvent}  placeholder="Enter Your Email " />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea rows="3" class="form-control" id="message" name="message" required 
                            value={data.message} onChange={inputEvent}  placeholder="Enter Your Name" />
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                    </form>    
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact