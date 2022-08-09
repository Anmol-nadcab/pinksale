import React from 'react'
import '../css/homepage.css'
import $ from 'jquery';
import ConnectHeader from './ConnectHeader';
import { Link } from 'react-router-dom';

export default function Leader() {

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
      <div class="wrapper">
        <div class="sidebar">
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
                <span className="link_name">LuunchPad</span>
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


        <section class="home-section">
        <ConnectHeader/>
          <div class="home-content">
            <i class='bx bx-menu'></i>
            <span class="text container-fluid">

              <div className='container  bg-white'>


                <nav className='  container bg-white p-0'>
                  <div class="nav nav-tabs  text-center " id="nav-tab" role="tablist">
                    <button class="nav-link setTabNew active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All LaunchPad</button>
                    <button class="nav-link setTabNew " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Advanced Mode</button>
                    <button class="nav-link setTabNew " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">My Contributions</button>
                  </div>
                </nav>
                <div class="tab-content container bg-white " id="nav-tabContent">
                  <div class="tab-pane fade show active table-responsive" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">


                    <div className='pt-5 mt-5'>
                      <div className='d-flex justify-content-between'> <div> <span>1</span> <span><img height={"50px"} src="./images/bafybeibtqg2kldnxybwmerorydebpebp5unxmmhmpo56h4hmxtpm5ukdve.ipfs.infura-ipfs.png" alt="" /></span> <span><span> <span>LinkDao</span> <span class="ml-2 is-size-7">LKD</span></span> <span> <span className=' ps-3 text-success fw-light setSize'>52121.34101435677 BUSD

                      </span> <span className='fw-light setSize'> 

                        Listing time:

                        </span>  <span className=' text-success fw-light setSize'>2022.08.08 06:38

                        </span></span></span></div>

                        <div className='d-flex justify-content-between '>

                        <div class="flex-wrapper">
  <div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart orange">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="30, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">30%</text>
    </svg>
 
  </div>
</div> <span className='ms-5 mt-3'  > View Pool </span>
                        </div>

                      </div>
                    </div>
                    





                  </div>


                  <div class="tab-pane mt-5 fade container table-responsive " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                  </div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>




              </div>




            </span> <br />
          </div>
        </section>
      </div>




    </>
  )
}
