  import React from 'react'
  import '../css/homepage.css'
  import '../css/launchpad.css'
  import ConnectHeader from './ConnectHeader';

  import $ from 'jquery';

  import { Link } from "react-router-dom";

  export default function Launchpad() {

    var NameCall = 0;
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

    function setName() {
      if (NameCall == 0) {
        document.getElementById("hideNAMe").style.display = "block";
        NameCall = 1;
      }
      else if (NameCall == 1) {
        document.getElementById("hideNAMe").style.display = "none";
        NameCall = 0;
      }
    }
    const arr = [1, 2, 3, 4, 5, 6, 8, , 8, 8, 8, , 8, 8, 8, 8]

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

                <div className='container'>
                  <h1> Current Presales</h1>

                  <nav className=' text-center container d-flex justify-content-center'>
                    <div class="nav nav-tabs  text-center " id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All LaunchPad</button>
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Advanced Mode</button>
                      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">My Contributions</button>
                    </div>
                  </nav>
                  <div class="tab-content container d-flex " id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                      <div class="container mt-5">
                        <div class="row">
                          <div class="col">
                            <input className='inputSetter' type="text" />
                          </div>
                          <div class="col">
                            <select className='selectDeco'>

                              <option value="1">KYC</option>
                              <option value="2">Upcoming</option>
                              <option value="3">Inprogress</option>
                              <option value="1">Failed </option>
                              <option value="1">Endend</option>
                              <option value="1">Canceled</option>


                            </select>
                            <select className='mx-4 selectDeco'>
                              <option selected value="0">No Filter</option>
                              <option value="1">Hard Cap </option>
                              <option value="2"> soft Cap</option>
                              <option value="3">Lp Percent</option>
                              <option value="1"> Start Time </option>
                              <option value="1">End Time</option>

                            </select>

                          </div>

                        </div>
                      </div>



                      <div class="container">
                        <div class="row">
                          <div class="col">
                            <div className='container mt-5  text-start '>

                              <div className='p-4   card-container bg-light' >
                                <div class="container mb-3 d-flex justify-content-between">
                                  <img className='setImg' src="./images/512x512.png" height={"60px"} alt="" srcset="" />

                                  <b className='SetCOnt '>upcoming</b>
                                </div>


                                <div>
                                  <h4 className=''>Nut2Earn</h4>
                                  <div>1 BNB = 200 NUT</div>

                                  <div className='mt-3'> Soft/Hard</div>
                                  <span style={{ fontFamily: "arial", fontSize: "25px", fontWeight: "bold" }} className='my-3   SetCOnt'>500 BNB - 1,000 BNB</span>
                                  <div className='mt-3'>  Progress (0.00%)</div>
                                  <div className='mb-3'> <progress style={{ width: "100%" }} id="file" value="32" max="100"> 32% </progress></div>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>liquidity %</b>
                                  <b>70%</b>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>Lockup Time:</b>
                                  <b>370 days</b>

                                </div>

                                <div className='d-flex justify-content-between mt-3'>
                                  <b> sale start  in</b>   <span className='btn btn-light'> <Link to="/poolpage">View pool</Link></span></div>
                              </div>

                            </div>

                          </div>
                          <div class="col">
                            <div className='container mt-5  text-start '>

                              <div className='p-4   card-container bg-light'>
                                <div class="container mb-3 d-flex justify-content-between">
                                  <img className='setImg' src="./images/512x512.png" height={"60px"} alt="" srcset="" />

                                  <b className='SetCOnt '>upcoming</b>
                                </div>


                                <div>
                                  <h4 className=''>Nut2Earn</h4>
                                  <div>1 BNB = 200 NUT</div>

                                  <div className='mt-3'> Soft/Hard</div>
                                  <span style={{ fontFamily: "arial", fontSize: "25px", fontWeight: "bold" }} className='my-3   SetCOnt'>500 BNB - 1,000 BNB</span>
                                  <div className='mt-3'>  Progress (0.00%)</div>
                                  <div className='mb-3'> <progress style={{ width: "100%" }} id="file" value="32" max="100"> 32% </progress></div>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>liquidity %</b>
                                  <b>70%</b>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>Lockup Time:</b>
                                  <b>370 days</b>

                                </div>

                                <div className='d-flex justify-content-between mt-3'>
                                  <b> sale start  in</b>   <span className='btn btn-light'> View pool</span></div>


                              </div>

                            </div>

                          </div>
                          <div class="col">
                            <div className='container mt-5  text-start '>

                              <div className='p-4   card-container bg-light'>
                                <div class="container mb-3 d-flex justify-content-between">
                                  <img className='setImg' src="./images/512x512.png" height={"60px"} alt="" srcset="" />

                                  <b className='SetCOnt '>upcoming</b>
                                </div>


                                <div>
                                  <h4 className=''>Nut2Earn</h4>
                                  <div>1 BNB = 200 NUT</div>

                                  <div className='mt-3'> Soft/Hard</div>
                                  <span style={{ fontFamily: "arial", fontSize: "25px", fontWeight: "bold" }} className='my-3   SetCOnt'>500 BNB - 1,000 BNB</span>
                                  <div className='mt-3'>  Progress (0.00%)</div>
                                  <div className='mb-3'> <progress style={{ width: "100%" }} id="file" value="32" max="100"> 32% </progress></div>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>liquidity %</b>
                                  <b>70%</b>

                                </div>

                                <div class="container d-flex justify-content-between">
                                  <b>Lockup Time:</b>
                                  <b>370 days</b>

                                </div>


                                <div className='d-flex justify-content-between mt-3'>
                                  <b> sale start  in</b>   <span className='btn btn-light'> View pool</span></div>
                              </div>

                            </div>

                          </div>
                        </div>
                      </div>



                    </div>


                    <div class="tab-pane mt-5 fade container table-responsive " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div>

                        <table class="table fw-light    " >
                          <thead>
                            <tr>
                              <th className='px-0 set-Color' scope="col" >Name <input type="text setWidth" onClick={setName} readOnly placeholder="&#x1F50D;" style={{ width: "180px", border: "none", outline: "none", textAlign: "right", backgroundColor: "#e7f9f0" }} />


                                <div className='setPOPup ps-3' id='hideNAMe'>
                                  <div>
                                    <input type="text" className='mt-3 hovInput' style={{ width: "200px" }} />
                                  </div>
                                  <div><input className='me-3 hovInput mt-3' type="checkbox" /><span className='fw-light'>BSC</span></div>
                                  <div><input className='me-3 hovInput  ' type="checkbox" /> <span className='fw-light'>BSC</span></div>
                                  <div><input className='me-3 hovInput  ' type="checkbox" /> <span className='fw-light'>BSC</span></div>
                                  <div><input className='me-3 hovInput  ' type="checkbox" /> <span className='fw-light'>BSC</span></div>
                                  <div><input className='me-3 hovInput  ' type="checkbox" /> <span className='fw-light'>BSC</span></div>

                                </div> </th>
                              <th className='set-Color' scope="col">HC</th>
                              <th className='set-Color' scope="col">Coin</th>
                              <th className='set-Color' scope="col">Initial Cap</th>
                              <th className='set-Color' scope="col">Kyc Audit</th>
                              <th className='set-Color' scope="col">Status</th>
                              <th className='set-Color' scope="col">Links</th>
                              <th className='set-Color' scope="col">TG Online</th>
                              <th className='set-Color' scope="col">Countdown</th>
                              <th className='set-Color' scope="col">view</th>

                            </tr>
                          </thead>
                          <tbody>

                            {
                              arr.map((element, index) => {
                                return (
                                  <>
                                    <tr>

                                      <td><img height={"40px"} src="./images/ic-bsc.419dfaf2.png" alt="" /> <span className='mx-5'> Neloverse</span></td>
                                      <td>	464K</td>
                                      <td>BUSD</td>
                                      <td>$22.1M</td>
                                      <td>
                                        &#9989;
                                        &#9989;</td>
                                      <td><progress value={"25px"}></progress></td>
                                      <td><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> </td>
                                      <td>93 / 810</td>
                                      <td>39:20:33:14
                                      </td>
                                      <td style={{ color: "#10AD83" }}>
                                        View
                                      </td>

                                    </tr>
                                  </>
                                )
                              })
                            }



                          </tbody>
                        </table>


                      </div>
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
