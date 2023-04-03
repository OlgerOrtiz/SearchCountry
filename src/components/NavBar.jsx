import React from 'react'

const NavBar = ({ countryNames, handleSearch }) => {
    return (
        <div className='NavBar__Content'>
            <div className='NavBar__Input'>
                <box-icon name='search'></box-icon>
                <form onSubmit={handleSearch}>
                    <input
                        id="input"
                        type="text"
                        placeholder='  Search...'
                        autoComplete="off"
                        list="countries"
                    />
                    <datalist id="countries">
                        {countryNames.map((name, index) => (
                            <option key={index} value={name} />
                        ))}
                    </datalist>
                </form>
                {/* <button className="NavBar__btn">Search</button> */}
            </div>
                <div className='NavBar__Menu'>
                <box-icon name='menu-alt-right' size='36px'></box-icon>
                </div>
        </div>
    )
}

export default NavBar