import React from 'react'
import Card from '../../../components/card/Card.component'
import serviceData from '../../../db/data'

const Services = () =>{
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Our Services </h1>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className=" col-10 mx-auto">
                        <div className="row ">
                            
                                {
                                    serviceData.map((data,index) => {
                                        console.log(data)
                                        return <Card key={index}
                                            imgsrc={data['imgsrc']}
                                            title={data.title}
                                            /> 
                                    })
                                }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services