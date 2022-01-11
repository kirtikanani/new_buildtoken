

const Topbar = ()=>{
    return(
        <header className="header">
      <div className="title">
        <img src="images/title-logo.png"/>
        <h2>Build Your Token</h2>
      </div>  
      <div className="profile">
        <ul>
          <li><a href="#"> <img src="images/search-icon.png"/></a></li>
          <li className="bell"><a href="#"> <img src="images/bell-icon.png"/><label>12</label></a></li>
          <li><a href="#" className="user"><div className="user-box"><img src="images/profile.png"/><span>0x2b13..3356</span></div></a></li>
        </ul>
      </div>        
    </header> 
        

    )
}

export default   Topbar