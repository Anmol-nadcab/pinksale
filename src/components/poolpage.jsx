import React from 'react'
import '../css/homepage.css'
import '../css/homestyle.css'
import ConnectHeader from './ConnectHeader';
import { Link } from "react-router-dom";

import $ from 'jquery';

export default function Poolpage() {

  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  /* sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  }); */
  $(function () {
    /* console.log("width: "+ document.body.clientWidth); */

    resizeScreen();
    $(window).resize(function () {
      resizeScreen();
    });
    $('.bx-menu').click(function () {

      // 點選選單按鈕時，大螢幕為新增或移除.close，小螢幕新增或移除.small-screen預設有.close，
      if (document.body.clientWidth > 400) {
        $('.sidebar').toggleClass('close');
      } else {
        $('.sidebar').toggleClass('small-screen');
      }
    });

    function resizeScreen() {
      // 大螢幕.sidebar預設為沒有.close，小螢幕.sidebar預設為有.close
      if (document.body.clientWidth < 400) {
        $('.sidebar').addClass('close');
      } else {
        $('.sidebar').removeClass('close');
      }
    }
  });


  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="logo-details mx-4">
            <img src="./images/pinkswap.a95de4f3.png" height={"40px"} alt="" />
            <span className="mx-2  logo_name">Pinksale</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Home</span>
              </Link>
              <ul className="sub-menu blank">
                <li><Link className="link_name" to="">Home</Link></li>
              </ul>
            </li>


            <li>
              <Link to="/launchpad">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">LaunchPad</span>
              </Link>
              <ul className="sub-menu blank">
                <li><Link className="link_name" to="">LaunchPad</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/private">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Private Sale List</span>
              </Link>
              <ul className="sub-menu blank">
                <li><Link className="link_name" to="/private">Private Sale List</Link></li>
              </ul>
            </li>

             <li>
              <Link to="/leaderboard">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Leaderboard</span>
              </Link>
              <ul className="sub-menu blank">
                <li><Link className="link_name" to="/leaderboard">Leaderboard</Link></li>
              </ul>
            </li>
             <li>
              <Link to="/airdrop">
                <i className='bx bx-grid-alt'></i>
                <span className="link_name">Airdrop</span>
              </Link>
              <ul className="sub-menu blank">
                <li><Link className="link_name" to="/airdrop">Airdrop</Link></li>
              </ul>
            </li>
          </ul>
        </div>


        <section className="home-section">
        <ConnectHeader/>
          <div className="home-content  ">
            <i className='bx bx-menu'></i>
            <span className="text ">
            <div className="container my-5 mt-5 ">
  <div className="row   d-flex justify-content-between">
    <div className="col-sm-7 bg-light p-5">
      <div className=''>
      
  <div class="row">
    <div class="col-sm-2 text-start">
    <img className='mx-3' src="./images/pinkmoon.png" height={"70px"} alt="" />
    </div>
    <div class="col-sm-8 text-start">
    <b className='fs-3 fw-light'>   Floki Rescue Presale </b>  <span className='btn btn-warning ms-3'> KYC</span> <span className='btn btn-primary'> Audit</span><div>
    <div className='ms-5 ps-5 fs-5'><i className="fa-brands fa-facebook"></i> <i className=" mx-3 fa-brands fa-google-plus-g"></i><i className="fa-brands fa-twitter"></i></div>
    </div>
    </div>
    <div class="col-sm-2 text-end">
     <b className='setCont'>upcoming</b>
    </div>

    <div style={{fontSize:"15px"}} className="mt-5" >


    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83",}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Presale Address</span>
    </div>
    <div class="col-sm text-end">
    <span className='text-success'>0x2631Cad510f425C6127d1c7c9A8A1B8727BdA4F4 </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Token Name</span> 
    </div>
    <div class="col-sm text-end">
    <span className='text-success'>Floki Rescue </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Token Symbol</span>
    </div>
    <div class="col-sm text-end">
    <span className='text-success'>FRC </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Token Decimals</span> 
    </div>
    <div class="col-sm text-end">
     
    <span className='text-success'>18 </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Token Address</span> 
    </div>
    <div class="col-sm text-end">
    <span className='text-success'>0xa8573750B67A60010Fd6491e30C1f987D6d51Ab5 </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    <span  className='fs-6 fw-light'>Total Supply</span>
    </div>
    <div class="col-sm text-end">
    <span className='text-success'>100,000,000,000 FRC </span>
    </div>
    </div>

    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Tokens For Presale
    </div>
    <div class="col-sm text-end">
    60,000,000,000 FRC
    </div>
    </div>


    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Tokens For Liquidity
    </div>
    <div class="col-sm text-end">
    31,752,000,000 FRC
    </div>
    </div>



    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Presale Rate	
    </div>
    <div class="col-sm text-end">
    1 BNB = 300,000,000 FRC
    </div>
    </div>




    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Listing Rate
    </div>
    <div class="col-sm text-end">
    1 BNB = 270,000,000 FRC
    </div>
    </div>




    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Initial Market Cap (estimate)
    </div>
    <div class="col-sm text-end">
    $117,078
    </div>
    </div>




    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Soft Cap
    </div>
    <div class="col-sm text-end">
    100 BNB
    </div>
    </div>


    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Hard Cap
    </div>
    <div class="col-sm text-end">
    200 BNB
    </div>
    </div>




    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Unsold Tokens
    </div>
    <div class="col-sm text-end">
    Burn
    </div>
    </div>




    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Presale Start Time
    </div>
    <div class="col-sm text-end">
    2022.08.09 13:00 (UTC)
    </div>
    </div>



    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Presale End Time
    </div>
    <div class="col-sm text-end">
    2022.08.10 13:00 (UTC)
    </div>
    </div>


    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">Listing On
    
    </div>
    <div class="co-sm text-end">
    Pancakeswap
    </div>
    </div>


    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Liquidity Percent
    </div>
    <div class="col-sm text-end">
    60%
    </div>
    </div>





    <div class="row py-3" style={{borderBottom:"0.8px solid #10AD83"}} >
    <div class="col-sm">
    Liquidity Lockup Time
    </div>
    <div class="col-sm text-end">
    180 days after pool ends
    </div>
    </div>
 
 

   
 

    </div>
  
</div>



      </div>
    </div>
    <div className="  col-sm-4   ">
      <div className='bg-light py-5 text-center'>
        <span className='setmsg'> Make sure the website is pinksale.finance!</span>
        <div className='mt-5 mb-3'>
        Presale Starts In
        </div>
        <div>
            <span className='setCube'>09</span>   <span className='setCube'>09</span>   <span className='setCube'>09</span>   <span className='setCube'>09</span>
        </div>
       <div className='mt-4'>
       <label for="file">Downloading progress:</label><br>
        </br>
<progress id="file" value="32" max="100"> 32% </progress> 
       </div>
       <div>
        <div>Amount</div>
       <div className='mergeButton ms-3 d-flex' style={{paddingInline:"0px !important" ,margin:"1px" ,}}> <input type="text " className=' SetInputButton' /> <span className='btn btn-success'> MAX</span></div>
       <div  className='text-start ms-3 mt-3'>
        <span className='btn btn-success'>
Connect Wallet
        </span>
       </div>
       </div>
      </div>


      <div className='bg-white fw-light mt-5 py-2 px-3 '>

        <div className='m-3 d-flex setBottomBorder justify-content-between '> <b>Status</b>  <span className='text-success'>incoming</span> </div>
        <div className='m-3 d-flex setBottomBorder justify-content-between '> <b>Sale type</b> <span className='text-success'>Whitelist Only</span> </div>
        <div className='m-3 d-flex setBottomBorder justify-content-between '> <b>Minimum Buy</b>  <span>0.2 BNB</span> </div>
        <div className='m-3 d-flex setBottomBorder justify-content-between '> <b>Maximum Buy</b>  <span>1 BNB</span> </div>




      </div>
    

    </div>
  
  </div>
</div>

            </span> <br />
          </div>
        </section>
      </div>




    </>
  )
}

