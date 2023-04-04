import React from 'react'

const NavBar = ({ namesCountries, handleSearch, allsCountries }) => {
    return (
        <div className='NavBar__Content'>
            <h2 className="NavBar__Title">Discover Countries</h2>
            <form onSubmit={handleSearch}>
                <div className='NavBar__Content--Search'> {/*selectbox*/}
                    <div className="Select" id='select'>
                        <div className="Contenido__Select">
                            <box-icon name='search'></box-icon>
                            <h5 className='Select__Titulo'>Search Country...</h5>   {/*titulo*/}
                        </div>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="Options" id="options">
                        <a href="#" className="Option">
                            <div>
                                {allsCountries?.map((item, index) => (
                                    <div key={index} className='Content__Option'>
                                        <img src={item.flags.svg} alt={item.flags.alt} />
                                        <h3 className="Option__Title">{item.name.common}</h3>
                                    </div>
                                ))}
                            </div>
                        </a>
                    </div>
                </div>
                <datalist id="countries">
                    {namesCountries.map((name, index) => (
                        <option key={index} value={name} />
                    ))}
                </datalist>
            </form>
            <div className='NavBar__Content--Icons'>
                <box-icon name='moon'></box-icon>
                <box-icon name='sun'></box-icon>
                <box-icon name='menu-alt-right'></box-icon>
            </div>
        </div>
    )
}

export default NavBar