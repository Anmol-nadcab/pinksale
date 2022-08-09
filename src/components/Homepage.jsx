import React from 'react'
import '../css/homepage.css'
import '../css/homestyle.css'
import { Link } from "react-router-dom";
import ConnectHeader from './ConnectHeader';
import $ from 'jquery';

export default function Homepage() {

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
                <li><Link className="link_name" to="/launchpad">LaunchPad</Link></li>
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
            <span className="text container-fluid">

              <div className='containerr text-center'>

                <h1 className='mt-5'>The Launchpad Protocol for Everyone!</h1>

                <div className='fs-5 mt-4 '>PinkSale helps everyone to create their own tokens and token sales in few seconds.</div >
                <div className='fs-5'>Tokens created on PinkSale will be verified and published on explorer websites.</div  >
              </div>

              <div className='containerr  mt-5 text-center'>
                <span className='btn btn-light me-3'>
                  Create Now
                </span>

                <span className='btn ms-3 btn-light'>
                  Learn More
                </span>
              </div>

          

              <div class="containerr  mt-5   center">
  <div class="row">
    
    <div class="col-sm mt-4" >
    <div class="card setborder" >
    <div class="card-body text-center py-5">
<b className='font256 '>$264.1M</b>
    <p class="card-text">Total Liquidity Raised </p>
    
  </div>
</div>
    </div>
    <div class="col-sm mt-4" >
    <div class="card setborder" >
    <div class="card-body text-center py-5">
<b className='font256 '>11844</b>
    <p class="card-text">Total Projects</p>
    
  </div>
</div>
    </div>
    <div class="col-sm mt-4" >
    <div class="card setborder" >
  <div class="card-body text-center py-5">
<b className='font256 '>$278.8M</b>
    <p class="card-text">Total Values Locked</p>
    
  </div>
</div>
    </div>
    <div class="col-sm mt-4" >
    <div class="card setborder" >
    <div class="card-body text-center  py-5">
<b className='font256 '>1.2M</b>
    <p class="card-text">Total Participants</p>
    
  </div>
</div>
    </div>
     
  </div>
</div>



<div className='containerr text-center'>

<h1 className='mt-5'>A Suite of Tools for Token Sales.</h1>

<div className='fs-5 mt-4 '>A suite of tools were built to help you create your own tokens and launchpads in a fast, simple </div >
<div className='fs-5'>and cheap way, with no prior code knowledge required and 100% decentralized!</div  >
</div>




<div class="containerr mt-5   center">
<div class="row">

<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
  <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Deflationary

</b>
<p class="card-text">Generate deflationary tokens with tax and/or charity functions. </p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Customization</b>
<p class="card-text">Create a token sale for your own custom token easily.</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Launchpad </b> 
<p class="card-text">Use the token you mint to create a launchpad with just a few clicks</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center  py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Branding
</b>
<p class="card-text">Adding logo, social links, description, listing on PinkSale.</p>

</div>
</div>
</div>

</div>
</div>



<div class="containerr mt-5   center">
<div class="row">

<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
  <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Management

</b>
<p class="card-text">The portal to help you easily update content for your launchpad. </p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Community</b>
<p class="card-text">Promote your launchpad to thousands of buyers on PinkSale.</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Locking </b> 
<p class="card-text">Lock your liquidity to PinkSwap, PancakeSwap after presale.</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center  py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>Standard</b>
<p class="card-text">Total Participants</p>

</div>
</div>
</div>

</div>
</div>

    
<div className='containerr text-center'>

<h1 className='mt-5'>A Growing Protocol Ecosystem.</h1>

<div className='fs-5 mt-4 '>We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon  </div >
<div className='fs-5'>PinkLock, PinkSwap, we Pink everything!</div  >
</div>


<div class="containerr mt-5   center">
<div class="row">

<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
  <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkMoon



</b>
<p class="card-text">The best launchpad for professional teams </p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkSale</b>
<p class="card-text">Promote your launchpad to thousands of buyers on PinkSale.</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkSwap </b> 
<p class="card-text">Lock your liquidity to PinkSwap, PancakeSwap after presale.</p>

</div>
</div>
</div>
<div class="col">
<div class="card setborder cardSet" >
<div class="card-body text-center  py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkLock</b>
<p class="card-text">Total Participants</p>

</div>
</div>
</div>

</div>
</div>

<div class=  " mt-5 mx-auto last-two ">
<div class="row ">

<div class="col-sm">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
  <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkMoon



</b>
<p class="card-text">The best launchpad for professional teams </p>

</div>
</div>
</div>
<div class="col-sm">
<div class="card setborder cardSet" >
<div class="card-body text-center py-5">
   <img src="./images/pinkmoon.png"  height={"70px"} alt="" />
  <br/>
<b className='font256 '>PinkSale</b>
<p class="card-text">Promote your launchpad to thousands of buyers on PinkSale.</p>

</div>
</div>
</div>



</div>
</div>


<div className='container text-center fw-lighter lh-1 mt-5 fs-6'>
  <div>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any 
    </div>
    <div>product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any </div> 
    <div>material provided or published.</div>
    </div>


            </span> <br />
          </div>
        </section>
      </div>




    </>
  )
}
