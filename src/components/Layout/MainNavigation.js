
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import img from "./LOGOS.png";

function MainNavigation() {
 

  return (
    <header className={classes.header}>
      <div className={classes.logo}> <img alt="logo" src={img} /></div>
      <nav>
        <ul>
          <li>
             <NavLink to='/welcome'> <p>Stroški </p></NavLink>
          </li>
          <li>
            <NavLink to='/dodaj-element'><p>Ustvari nov predmet</p></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;