import { Button } from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from './logo.svg'
import profile from './profile.png'


export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={logo} alt='logo' />
                </li>
                <li>
                    <input type="text" />
                    <Button variant='btn-tertiary' type='button'> 
                    <FontAwesomeIcon icon={icon({name: 'magnifying-glass', style: 'solid'})} />
                    </Button>
                </li>
                <li>Docs</li>
                <li><FontAwesomeIcon icon={icon({name: 'bell', style: 'solid'})} /></li>
                <li><img src={profile} alt='profile' />
                <FontAwesomeIcon icon={icon({name: 'caret-down', style: 'solid'})} />
                <p>Adedeji</p>
                </li>
            </ul>
        </nav>
    )
}
// icon({name: 'user', style: 'solid'})
// icon({name: 'user', style: 'regular'})
// icon({name: 'twitter', style: 'brands'})