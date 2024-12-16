import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <div className='menu'>
            <NavLink to='/saat'>Saat</NavLink>
            <NavLink to='/taymer'>Taymer</NavLink>
            <NavLink to='/saniyeolcen'>SaniyeOlcen</NavLink>
        </div>
    )
}
