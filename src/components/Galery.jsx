import React from 'react'

const Galery = ({ allsCountries }) => {


    return (
            <div className="Gallery__Content">
                {allsCountries?.map((item, index) => (
                    <div key={index} className='Gallery__Content--Card'>
                        <img src={item.flags.svg} alt={item.flags.alt} />
                        <h3>{item.name.common}</h3>
                    </div>
                ))}
            </div>
    )
}

export default Galery