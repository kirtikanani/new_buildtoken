import Link from "next/link";
import { useRouter } from "next/router";
const ROUTE_Leaderboards = "/leaderboard";
const ROUTE_Home = "/";
const Navbar = ()=>{
  const router = useRouter();

    return(
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 p-0 d-flex">
        <div class="side-bar">
          <div class="logo">
            <a href="#"><img src="/images/logo.png" alt="" title=""/></a>
          </div>
          <div class="menu">
            <ul>
              <li className={router.pathname == ROUTE_Home ? "active" : ""}><a href="#"><img src="/images/menu-icon1.png"/><Link href={{pathname: ROUTE_Home }} >Home</Link></a></li>
              <li><a href="#"><img src="/images/menu-icon2.png"/>Hangar</a></li>
              <li><a href="#"><img src="/images/menu-icon3.png"/>Launchpad</a></li>
              <li><a href="#"><img src="/images/menu-icon4.png"/>Mission Control</a></li>
              <li><a href="#"><img src="/images/menu-icon5.png"/>Upcoming Launches</a></li>
              <li className={router.pathname == ROUTE_Leaderboards ? "active" : ""}><img src="/images/menu-icon6.png"/><Link href={{pathname: ROUTE_Leaderboards }} >Leaderboards</Link></li>
              <li><a href="#"><img src="/images/menu-icon7.png"/>My Watchlist</a></li>
              <li><a href="#"><img src="/images/menu-icon8.png"/>Build Your Token</a></li>
            </ul>
          </div>
          <div class="help">
            <hr/>
            <img src="images/help-icon.png"/>
            <p>Help & Getting Started</p>
          </div>
        </div>
      </div>
        

    )
}

export default   Navbar