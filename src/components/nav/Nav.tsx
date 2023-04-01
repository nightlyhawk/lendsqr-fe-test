import { Button } from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import magglass from './magGlass.svg'
import notif from './notify.svg'
import logo from './logo.svg'
import profile from './profile.png'


export const Nav = () => {
    return (
        <nav>
                <h1>
                    <img src={logo} alt='logo' />
                </h1>
                <ul className='search' >
                <li>
                    <input type="text" name='search' placeholder='search' className='input-hgt' />
                </li>
                <li>
                    <Button variant='btn-tertiary' type='button'> 
                    <img src={magglass} alt="search"/>
                    </Button>
                </li>         
                </ul>   
                <ul>
                <li className='text-secondary list-pad' >Docs</li>
                <li className='list-pad' ><img src={notif} alt="notifications"/> </li>
                <li><img src={profile} alt='profile' className='circle' />
                </li>
                <li className='text-secondary list-pad' >Adedeji  <FontAwesomeIcon icon={icon({name: 'caret-down', style: 'solid'})} /></li>
                </ul>
        </nav>
    )
}
// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})