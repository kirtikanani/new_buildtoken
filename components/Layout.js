import Navbar from './Navbar'
import Topbar from './Topbar'
import Head from 'next/head'

const Layout=({ children })=> {

  

  return (
    <>
     <Head>
            <title>welcome</title>
<meta name="description" content="Tilestore Template" />
<meta name="keywords" content="Tilestore, WooCommerce, bootstrap, html template, Tilestore template"/>
<meta name="author" content="Tilestore" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'/>

<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico"/>
<link rel="icon" type="img/png" href="img/favicon.png"/>
<link rel="apple-touch-icon" href="img/favicon.png"/>

<link href="css/bootstrap.min.css" rel="stylesheet"/>

<link rel="stylesheet" href="/css/style.css" type="text/css" />

<link rel="stylesheet" href="/css/responsi.css"></link>
        </Head>
        <div class="main">
    <div class="row float-left w-100 m-0 d-flex">
      <Navbar/>
     
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 p-0">
        <div className="page-content">
          <Topbar/>
         { children }
         </div>
            </div>
      </div>
      </div>
    </>
  )
}
export default Layout