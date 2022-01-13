import { useState } from "react"
import Link from "next/link";

const Home=()=>{
 const [blockchain,setBlockchain]=useState("");
 const [email,setEmail]=useState("");
 const [tokenname,setTokenname]=useState("");
 const [smbol,setSymbol]=useState("");
 const [coinimage,setCoinimage]=useState("");
 const [decimals,setDecimals]=useState("");
 const ROUTE_POST_ID_next = "/step3";
 const ROUTE_POST_ID_pev = "/";
 return(   
    <content>
    <div className="step-1">
      <div className="step-content">
        <h2>Step 2</h2>
        <p><span>Tokenomics</span><br/>Create the rules around supply and limits of your token.</p>
      </div>
      <div className="level level2">
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" ></div>
        <p>PROGRESS</p>
       
      </div>
      <hr/>
      <div className="row float-left w-100 m-0">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
          <div className="form-step-1">
             <div className="form-group">
              <label for="exampleInputEmail1">Initial Supply <span>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your token initial supply"/> 
              <img src="images/up-down-arr.png" className="file-icon"/>                     
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Maximum Supply <span>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>                      
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">TokenStarter Fee</label><small id="emailHelp" className="form-text text-muted text-muted2">Mint charges a fee in tokens of 0.5% initial supply</small>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0.046 TKNS"/>                      
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Supply Type</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fixed"/>   
              <img src="images/down-arr.png" className="file-icon"/>                   
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0">
          <img src="images/coin.png" className="m-auto"/>
        </div>
        <div className="next-btn">
         
          <div className="all-button back-button">
          <Link href={{pathname: ROUTE_POST_ID_pev }}>Back </Link>
          </div>
          <div className="all-button">
          <Link href={{pathname: ROUTE_POST_ID_next }}>Next </Link>
          </div>
        </div>
      </div>
    </div>
  </content>  


 )
}
export default Home