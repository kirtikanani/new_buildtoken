import { useState } from "react"
import Link from "next/link";
const Home=()=>{
 const [blockchain,setBlockchain]=useState("");
 const [email,setEmail]=useState("");
 const [tokenname,setTokenname]=useState("");
 const [smbol,setSymbol]=useState("");
 const [coinimage,setCoinimage]=useState("");
 const [decimals,setDecimals]=useState("");
 const ROUTE_POST_ID = "/step2";
 return(   
    <content>
            <div className="leader-menu">
              <ul>
                <li>Recently Added</li>
                <li>Best Performing</li>
                <li>Highest Price Change</li>
                <li>Market Cap</li>
                <li>Highest Volume</li>
                <li>Top Trending</li>
              </ul>
            </div>
            <div className="listing">
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>01</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon1.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart-blue.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>02</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon2.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>03</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon3.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart-blue.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>04</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon4.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>05</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon5.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
              <div className="list-box">
                <ul>
                  <li><div className="list-content"><h2>06</h2></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/list-icon6.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><h3>Name Goes Here</h3></div></li>
                  <li><div className="list-content"><span>Date Launched</span><p>January 02 2021</p></div></li>
                  <li><div className="list-content"><span>Current Price</span><p>0.007</p></div></li>
                  <li><div className="list-content"><span>24H%</span><p>27%</p></div></li>
                  <li><div className="list-content"><span>7D%</span><p>407%</p></div></li>
                  <li><div className="list-content"><span>24Hr Volume</span><p>$19,337,932</p></div></li>
                  <li><div className="list-content"><span>Holders</span><p>178,994</p></div></li>
                  <li className="d-flex"><div className="list-content d-flex"><img src="images/heart-blue.png" className="m-auto"/></div></li>
                  <li><div className="list-content"><a href="#" className="all-button">View Launchpad</a></div></li>
                </ul>
              </div>
            </div>
          </content>  


 )
}
export default Home