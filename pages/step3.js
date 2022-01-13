import { useState } from "react"
import Link from "next/link";
const Home=()=>{
 const [blockchain,setBlockchain]=useState("");
 const [email,setEmail]=useState("");
 const [tokenname,setTokenname]=useState("");
 const [smbol,setSymbol]=useState("");
 const [coinimage,setCoinimage]=useState("");
 const [decimals,setDecimals]=useState("");
 const ROUTE_POST_ID_next = "/step4";
 const ROUTE_POST_ID_pev = "/step2";
 return(   
    <content>
            <div className="step-1">
              <div className="step-content">
                <h2>Step 3</h2>
                <p><span>Coin Features</span><br/>Choose the additional functionality you want added to your smart contract code.</p>
              </div>
              <div className="level level3">
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                <p>PROGRESS</p>
                
              </div>
              <hr/>
              <div className="row float-left w-100 m-0">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0">
                  <div className="form-step-1 form-step-3">
                    <div className="form-check">
                      <img src="images/check-blue.png"/>
                      <label className="form-check-label" for="defaultCheck1">
                        Transaction Fee<span>Charge a fee for each transaction that takes place.</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <img src="images/check.png"/>
                      <label className="form-check-label" for="defaultCheck1">
                        Mint Function<span>Add the ability to mint additional tokens.</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <img src="images/check.png"/>
                      <label className="form-check-label" for="defaultCheck1">
                        Burn Function<span>Add the ability to burn your tokens.</span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Description</label> <small id="emailHelp" className="form-text text-muted">Add description for your token</small>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Website</label> <small id="emailHelp" className="form-text text-muted">Optional</small>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Twitter </label><small id="emailHelp" className="form-text text-muted">Optional</small>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>                      
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Telegram </label><small id="emailHelp" className="form-text text-muted">Optional</small>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>     
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0 d-flex">
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