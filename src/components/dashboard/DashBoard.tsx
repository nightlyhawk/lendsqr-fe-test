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




export const DashBoard = () => {
    return(
        <div>
            <ul>
                <div><img src={brief} alt="" />Switch Organization</div>
                <li>
                <img src={home} alt="" />Dashboard
                    <ul>
                        <li>CUSTOMER
                            <ul>
                                <li><img src={use} alt="" />Users</li>
                                <li><img src={guarant} alt="" />Guarantors</li>
                                <li><img src={loans} alt="" /> Loans</li>
                                <li><FontAwesomeIcon icon={icon({name: "handshake", style: 'regular'})} />Decision Models</li>
                                <li><img src={pig} alt="" />Savings</li>
                                <li><img src={req} alt="" />Loan Request</li>
                                <li><img src={useC} alt="" />List</li>
                                <li><img src={karma} alt="" />Karma</li>
                            </ul>
                        </li>
                        <li>BUISNESSES
                        <ul>
                                <li><img src={brief} alt="" />Organization</li>
                                <li><img src={loanP} alt="" />Loan Products</li>
                                <li><img src={saving} alt="" />Savings Products</li>
                                <li><FontAwesomeIcon icon={icon({name: "coins", style: 'solid'})} />Fees and Charges</li>
                                <li><img src={trans} alt="" />Transactions</li>
                                <li><img src={serve} alt="" />Services</li>
                                <li><img src={servU} alt="" />Service Accounts</li>
                                <li><img src={scroll} alt="" />Settlements</li>
                                <li><FontAwesomeIcon icon={icon({name: "chart-column", style: 'solid'})} />Reports</li>
                            </ul>
                        </li>
                        <li>SETTINGS
                            <ul>
                                <li><img src={prev} alt="" />Preferences</li>
                                <li><img src={fnp} alt="" />Fees and Pricing</li>
                                <li><img src={log} alt="" />Audit Logs</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
{/* <li><FontAwesomeIcon icon={icon({name: "handshake", style: 'regular'})} />Decision Models</li>
                                <li><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": ",}} />Savings</li>
                                <li><FontAwesoimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Loan Request</li>
                                <li><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />White List</li>
                                <li><FontAimg src={} alt="" style={{"--fa-primary-opacity": "0.4", "--fa-secondary-opacity": "01",}} />Karma</li> */}