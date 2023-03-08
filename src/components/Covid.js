import React, { useState,useEffect } from 'react';


function Covid() {
    const getCovidData = async () => {
    
        const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
        const actualData = await res.json();
        console.log(actualData.TG.delta)
        setData(actualData.TG.delta);
        
    }

    const [data,setData]=useState({})
    useEffect(() => {
        getCovidData()
    }, [])

    return (
        <React.Fragment>
            
            <div>
                <div class="p-2 bg-light border" >
                    <nav class="navbar-dark bg-dark" style={{padding:'13px'}}>
                        
                        <h2><span style={{ color: 'red' }}>LIVE&nbsp;&nbsp; </span>   COVID-19 TRACKER APP</h2>
                        
                    </nav>
                </div>

                <div class="p-2 bg-light border" >
                    <nav class="navbar-dark bg-dark">

                        <div class="container">

                            <div class="row ">
                                <div class="col text-center col1">
                                    <p class="fs-3">
                                        <span class="fs-5">OUR</span> STATE
                                    </p>
                                    <p class="fs-1">

                                        TELANGANA
                                    </p>
                                </div>
                                <div class="col col2">
                                    <p class="fs-3">
                                        <span class="fs-5">TOTAL</span> CONFIRMED
                                    </p>
                                    <p class="fs-1">

                                        {data.confirmed}
                                    </p>
                                </div>
                                <div class="col col3">
                                    <p class="fs-3">
                                        <span class="fs-5">TOTAL</span> DEATHS
                                    </p>
                                    <p class="fs-1">

                                    {data.deceased}
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col3">
                                    <p class="fs-3">
                                        <span class="fs-5">TOTAL</span> RECOVERED
                                    </p>
                                    <p class="fs-1">

                                    {data.recovered}
                                    </p>
                                </div>
                                <div class="col col5">
                                    <p class="fs-3">
                                        <span class="fs-5">TOTAL</span> TESTED
                                    </p>
                                    <p class="fs-1">

                                    {data.tested}
                                    </p>
                                </div>
                                <div class="col col6">
                                    <p class="fs-3">
                                        <span class="fs-5">TOTAL</span> VACCINATED
                                    </p>
                                    <p class="fs-1">
   
                                    {data.vaccinated1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Covid