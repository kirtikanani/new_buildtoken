import { useState } from "react"
import Link from "next/link";
const Home=()=>{
 const [blockchain,setBlockchain]=useState("");
 const [email,setEmail]=useState("");
 const [tokenname,setTokenname]=useState("");
 const [smbol,setSymbol]=useState("");
 const [coinimage,setCoinimage]=useState("");
 const [decimals,setDecimals]=useState("");
 
 const ROUTE_POST_ID_done = "/success";
 return(   
    <content>
    <div className="step-1">
      <div className="step-content">
        <h2>Overview</h2>
      </div>
      <div className="level level4">
        <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
        <p>PROGRESS</p>
        
      </div>
      <hr/>
      <div className="row float-left w-100 m-0">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-3">
          <div className="over-title">
            <h2>Available Modules</h2>
            <p>Simply drag and drop the desired module(s) into your coin to install.</p>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
          <div className="module">
            <h2>Module Name</h2>
            <img src="images/module-icon.png"/>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-3">
          <div className="over-title">
            <h2>Installed Modules</h2>
            <p>Overview of the modules installed</p>
          </div>
          <div className="module burnable">
            <h2>Burnable </h2>
            <img src="images/module-icon-white.png"/>
          </div>
          <div className="module mintable">
            <h2>Mintable</h2>
            <img src="images/module-icon-white.png"/>
          </div>
          <div className="module tokenomics" >
            <h2>Tokenomics</h2>
            <img src="images/module-icon-white.png"/>
          </div>
          <div className="tokenomics-content">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tokenomics Property 1"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tokenomics Property 2"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tokenomics Property 3"/>
            </div>
          </div>
          <div className="module airdrop">
            <h2>Airdrop</h2>
            <img src="images/module-icon-white.png"/>
          </div>
          <div className="tokenomics-content airdrop-content">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Airdrop Property 1"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Airdrop Property 2"/>
            </div>
          </div>
          
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-3">
          <div className="over-title">
            <h2>Properties</h2>
            <p>Properties of the token you are creating</p>
          </div> 
          <div className="chart">                 
            <div className="wrapper">
              <div className="d1"><div><span>25%</span></div></div>
              <div className="d2"><div><span>25%</span></div></div>
              <div className="d3"><div><span>25%</span></div></div>
              <div className="d4"><div><span>25%</span></div></div>                   
            </div>
          </div>
          <div className="form-step-1 form-step-3">
            <div className="form-group">
              <label for="exampleInputEmail1">Buy Tax (%)</label> 
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" value="0"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Sell Tax (%)</label> 
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" value="0"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Transfer Tax (%) </label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" value="0"/>
            </div>
          </div>
        </div>
        <div className="next-btn">
        <div className="all-button">
          <Link href={{pathname: ROUTE_POST_ID_done }}>Done </Link>
          </div>
        </div>
      </div>
    </div>
  </content>


 )
}
export default Home