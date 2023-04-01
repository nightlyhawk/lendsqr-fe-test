import { Button } from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from './logo.svg'
import profile from './profile.png'


export const Nav = () => {
    return (
        <nav>
                <h1>
                    <img src={logo} alt='logo' />
                </h1>
                <ul>
                <li>
                    <input type="text" name='search' placeholder='search' className='input-hgt' />
                </li>
                <li>
                <Button variant='btn-tertiary' type='button'> 
                    <FontAwesomeIcon icon={icon({name: 'magnifying-glass', style: 'solid'})} />
                    </Button>
                </li>         
                </ul>   
                <li className='text-secondary' >Docs</li>
                <li><FontAwesomeIcon icon={icon({name: 'bell', style: 'solid'})} /></li>
                <li><img src={profile} alt='profile' className='circle' />
                </li>
                <li className='text-secondary' >Adedeji  <FontAwesomeIcon icon={icon({name: 'caret-down', style: 'solid'})} /></li>
        </nav>
    )
}
// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})