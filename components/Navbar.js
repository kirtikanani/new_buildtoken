

const Navbar = ()=>{
    return(
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 p-0 d-flex">
        <div class="side-bar">
          <div class="logo">
            <a href="#"><img src="/images/logo.png" alt="" title=""/></a>
          </div>
          <div class="menu">
            <ul>
              <li><a href="#"><img src="/images/menu-icon1.png"/>Home</a></li>
              <li><a href="#"><img src="/images/menu-icon2.png"/>Hangar</a></li>
              <li><a href="#"><img src="/images/menu-icon3.png"/>Launchpad</a></li>
              <li><a href="#"><img src="/images/menu-icon4.png"/>Mission Control</a></li>
              <li><a href="#"><img src="/images/menu-icon5.png"/>Upcoming Launches</a></li>
              <li><a href="#"><img src="/images/menu-icon6.png"/>Leaderboards</a></li>
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