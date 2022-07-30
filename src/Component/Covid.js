import React, { useEffect, useState } from 'react'

function Covid() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {

        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
            const actualData = await res.json();
            console.log(actualData.BR.total)
            setData(actualData.BR.total)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getCovidData()
    }, [])

    return (
        <>

            <div className="grey-bg container-fluid">
                <section id="minimal-statistics">
                    <div className="row">
                        <div className="col-12 mt-3 mb-1">
                            <h1 className="text-uppercase text-center text-primary"> Bihar Covid Data   Test</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'red' }} className="mr-2">{data.confirmed}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'red' }}>Confirmed</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'greenyellow' }} className="mr-2">{data.deceased}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'greenyellow' }}>Deceased</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'green' }} className="mr-2">{data.recovered}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'green' }}>Recovered</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'orange' }} className="mr-2">{data.tested}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'orange' }}>Tested</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'green' }} className="mr-2">{data.vaccinated1}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'green' }}>Vaccinated1</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body cleartfix">
                                        <div className="media align-items-stretch">
                                            <div className="align-self-center">
                                                <h1 style={{ color: 'green' }} className="mr-2">{data.vaccinated2}</h1>
                                            </div>
                                            <div className="media-body">
                                                <h3 style={{ color: 'green' }}>Vaccinated2</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


export default Covid
