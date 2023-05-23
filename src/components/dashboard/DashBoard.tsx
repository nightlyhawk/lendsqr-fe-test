import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import sack from './sack 1.svg';
import loanP from './loans.svg';
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
import handshake from './handshake-regular 1.svg';
import next from './np_next_2236826_000000 2.svg';
import coins from './coins-solid 1.svg';
import chartbar from './chart-bar 2.svg'
import { NavLink } from 'react-router-dom';




export const DashBoard = () => {
    return(
        <div className='dash text-secondary'>
                <h2><img className='icon' src={brief} alt="" />Switch Organization<img className='icon' src={next} alt="" /></h2>
                <h3>
                <img className='icon' src={home} alt="" />Dashboard
                </h3>
                        <h3>CUSTOMER</h3>
                        
                                <NavLink to="list" ><img className='icon' src={use} alt="" />Users</NavLink>
                                <NavLink to="" ><img className='icon' src={guarant} alt="" />Guarantors</NavLink>
                                <NavLink to=""><img className='icon' src={sack} alt="" />Loans</NavLink>
                                <NavLink to="" ><img className='icon' src={handshake} alt="" />Decision Models</NavLink>
                                <NavLink to="" ><img className='icon' src={pig} alt="" />Savings</NavLink>
                                <NavLink to="" ><img className='icon' src={req} alt="" />Loan Request</NavLink>
                                <NavLink to="" ><img className='icon' src={useC} alt="" />List</NavLink>
                                <NavLink to="" ><img className='icon' src={karma} alt="" />Karma</NavLink>
                            
                        
                        <h3>BUISNESSES</h3>
                    
                                <NavLink to="" ><img className='icon' src={brief} alt="" />Organization</NavLink>
                                <NavLink to="" ><img className='icon' src={loanP} alt="" />Loan Products</NavLink>
                                <NavLink to=""><img className='icon' src={saving} alt="" />Savings Products</NavLink>
                                <NavLink to="" ><img className='icon' src={coins} alt="" />Fees and Charges</NavLink>
                                <NavLink to="" ><img className='icon' src={trans} alt="" />Transactions</NavLink>
                                <NavLink to="" ><img className='icon' src={serve} alt="" />Services</NavLink>
                                <NavLink to="" ><img className='icon' src={servU} alt="" />Service Accounts</NavLink>
                                <NavLink to="" ><img className='icon' src={scroll} alt="" />Settlements</NavLink>
                                <NavLink to="" ><img className='icon' src={chartbar} alt="" />Reports</NavLink>
                            
                        
                        <h3>SETTINGS</h3>
                        
                                <NavLink to="" ><img className='icon' src={prev} alt="" />Preferences</NavLink>
                                <NavLink to="" ><img className='icon' src={fnp} alt="" />Fees and Pricing</NavLink>
                                <NavLink to="" ><img className='icon' src={log} alt="" />Audit Logs</NavLink>
                            
        </div>
    )
}
{/* <NavLink><FontAwesomeIcon icon={icon({name: "handshake", style: 'regular'})} />Decision Models</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": ",}} />Savings</NavLink>
                                <NavLink><FontAwesoimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Loan Request</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />White List</NavLink>
                                <NavLink><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Karma</NavLink> */}