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
      <div className="step-1">
        <div className="step-content">
          <h2>Step 1</h2>
          <p><span>Basic token information 12 </span><br/>Tell us the basics about the token you are building.</p>
        </div>
        <div className="level">
          <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" ></div>
          <p>PROGRESS</p>
        
        </div>
        <hr/>
        <div className="row float-left w-100 m-0">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
            <div className="form-step-1">
               <div className="form-group">
                <label for="exampleInputEmail1">Blockchain</label>
                <select className="form-control">
                  <option selected>Etheruem - Ropsten</option>
                  <option value="1">Etheruem - Ropsten</option>
                  <option value="2">Etheruem - Ropsten</option>
                  <option value="3">Etheruem - Ropsten</option>
                </select>                     
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Token Name</label><small id="emailHelp" className="form-text text-muted">Choose a name for your token</small>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>                      
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Symbol</label><small id="emailHelp" className="form-text text-muted">Choose symbol for your token</small>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g. “BTC”"/>                      
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Coin Image</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Choose image..."/>   
                <img src="images/file-icon.png" className="file-icon"/>                   
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Decimals</label><small id="emailHelp" className="form-text text-muted">Insert the decimal precision of your token</small>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="8 - 18"/>                      
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0">
            <img src="images/coin.png" className="m-auto"/>
          </div>
          <div className="next-btn">
            <div className="all-button">
          <Link href={{pathname: ROUTE_POST_ID }}>Next </Link>
          </div>
          </div>
        </div>
      </div>
      </content>


 )
}
export default Home