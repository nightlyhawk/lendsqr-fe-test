import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import loans from './Loansbag.svg';
import loanP from './loan.svg';
import saving from './savings.svg';
import trans from './icontransact.svg';
import serve from './galaxy.svg';
import servU from './user-cog.svg';
import prev from './sliders.svg';
import fnp from './badge-percent.svg';
import log from './clipboard-list.svg';
import req from './req.svg';
import pig from './piggy-bank.svg';
import useC from './user-check.svg';
import karma from './clipboard-list.svg';
import guarant from './users.svg';
import use from './user-friends.svg';
import home from './home.svg';
import brief from './briefcase.svg';
import scroll from './scroll.svg';
import { NavLink } from 'react-router-dom';




export const DashBoard = () => {
    return(
        <div className='dash'>
                <h2><img src={brief} alt="" />Switch Organization</h2>
                <h3>
                <img src={home} alt="" />Dashboard
                </h3>
                        <h3>CUSTOMER</h3>
                            <ul>
                                <NavLink to="list" ><img src={use} alt="" />Users</NavLink>
                                <NavLink to="" ><img src={guarant} alt="" />Guarantors</NavLink>
                                <NavLink to=""><img src={loans} alt="" /> Loans</NavLink>
                                <NavLink to="" ><FontAwesomeIcon icon={icon({name: "handshake", style: 'regular'})} />Decision Models</NavLink>
                                <NavLink to="" ><img src={pig} alt="" />Savings</NavLink>
                                <NavLink to="" ><img src={req} alt="" />Loan Request</NavLink>
                                <NavLink to="" ><img src={useC} alt="" />List</NavLink>
                                <NavLink to="" ><img src={karma} alt="" />Karma</NavLink>
                            </ul>
                        
                        <h3>BUISNESSES</h3>
                        <ul>
                                <NavLink to="" ><img src={brief} alt="" />Organization</NavLink>
                                <NavLink to="" ><img src={loanP} alt="" />Loan Products</NavLink>
                                <NavLink to=""><img src={saving} alt="" />Savings Products</NavLink>
                                <NavLink to="" ><FontAwesomeIcon icon={icon({name: "coins", style: 'solid'})} />Fees and Charges</NavLink>
                                <NavLink to="" ><img src={trans} alt="" />Transactions</NavLink>
                                <NavLink to="" ><img src={serve} alt="" />Services</NavLink>
                                <NavLink to="" ><img src={servU} alt="" />Service Accounts</NavLink>
                                <NavLink to="" ><img src={scroll} alt="" />Settlements</NavLink>
                                <NavLink to="" ><FontAwesomeIcon icon={icon({name: "chart-column", style: 'solid'})} />Reports</NavLink>
                            </ul>
                        
                        <h3>SETTINGS</h3>
                            <ul>
                                <NavLink to="" ><img src={prev} alt="" />Preferences</NavLink>
                                <NavLink to="" ><img src={fnp} alt="" />Fees and Pricing</NavLink>
                                <NavLink to="" ><img src={log} alt="" />Audit Logs</NavLink>
                            </ul>
        </div>
    )
}
{/* <NavLink><FontAwesomeIcon icon={icon({name: "handshake", style: 'regular'})} />Decision Models</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": ",}} />Savings</NavLink>
                                <NavLink><FontAwesoimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Loan Request</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />White List</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Karma</NavLink> */}