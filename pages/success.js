import { useState } from "react"
import Link from "next/link";
const Home=()=>{
 const [blockchain,setBlockchain]=useState("");
 const [email,setEmail]=useState("");
 const [tokenname,setTokenname]=useState("");
 const [smbol,setSymbol]=useState("");
 const [coinimage,setCoinimage]=useState("");
 const [decimals,setDecimals]=useState("");
 
 const ROUTE_POST_ID_pev = "/step4";
 return(   
    <content>
    <div class="step-1 confirmation">
      <div class="row float-left w-100 m-0">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-5">
          <div class="step-content">
            <h2>Confirmation</h2>
            <p><span>Successfully minted Silly Coin Tokens</span></p>
          </div>
          <div class="form-step-1">
            <div class="form-group">
              <label for="exampleInputEmail1">Mint Transaction Hash</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0xef3351231g56df1fds...77898sdfm"/>   
              <img src="images/copy.png" class="file-icon"/>                   
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Contract Address</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0xef3351231g56df1fds...77898sdfm"/>   
              <img src="images/copy.png" class="file-icon"/>                   
            </div>
            <div class="attribute">
              <p>Coins Minted <span>200 Silly</span></p>
              <p>Fee Paid  <span>1 Silly</span></p>
              <p>Gas Paid  <span>11620254821 Gwei</span></p>
            </div>                    
          </div>
          <div class="attribute-btn">
              <a href="#" class="all-button">Add to Metamask</a>
              <a href="#" class="all-button">View Mint Profile</a>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 d-flex">
          <img src="images/coin.png" class="m-auto"/>
        </div>
        <div class="next-btn">
        <div className="all-button back-button">
          <Link href={{pathname: ROUTE_POST_ID_pev }}>Back </Link>
          </div>
          <a href="#" class="all-button" data-toggle="modal" data-target="#exampleModal3">Landing Page Generator</a>
          <a href="#" class="all-button">Liquidity Calculator</a>
          <a href="#" class="all-button">Whitepaper</a>  
        </div>
      </div>
    </div>
  </content>  


 )
}
export default Home