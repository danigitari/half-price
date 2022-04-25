<template>
  <body>
  <header id="site-header" class="site-header__v1">
    <div class="topbar border-bottom d-none d-md-block">
      <div class="container-fluid px-2 px-md-5 px-xl-8d75">
        <div class="topbar__nav d-md-flex justify-content-between align-items-center">
          <ul class="topbar__nav--left nav ml-md-n3">
            <li class="nav-item"><a href="" class="nav-link link-black-100"><i
                class="glph-icon flaticon-question mr-2"></i>Can we help you?</a></li>
            <li class="nav-item"><a href="tel:+1246-345-0695" class="nav-link link-black-100"><i
                class="glph-icon flaticon-phone mr-2"></i>+254 703 647424</a></li>
          </ul>
          <ul class="topbar__nav--right nav mr-md-n3">
            <li class="nav-item"><a href="" class="nav-link link-black-100"><i
                class="glph-icon flaticon-pin"></i></a></li>
            <li class="nav-item"><a href="" class="nav-link link-black-100"><i
                class="glph-icon flaticon-switch"></i></a></li>
            <li class="nav-item"><a href="" class="nav-link link-black-100"><i
                class="glph-icon flaticon-heart"></i></a></li>
            <!--
            <li class="nav-item">

            <a id="sidebarNavToggler" href="javascript:;" role="button" class="nav-link link-black-100" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation" data-unfold-overlay='{
                                                "className": "u-sidebar-bg-overlay",
                                                "background": "rgba(0, 0, 0, .7)",
                                                "animationSpeed": 500
                                            }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
            <i class="glph-icon flaticon-user"></i>
            </a>

            </li>
            -->
            <li class="nav-item">

              <a id="sidebarNavToggler1" href="javascript:;" role="button"
                 class="nav-link link-black-100 position-relative" aria-controls="sidebarContent1" aria-haspopup="true"
                 aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
                 data-unfold-target="#sidebarContent1" data-unfold-type="css-animation" data-unfold-overlay='{
                                    "className": "u-sidebar-bg-overlay",
                                    "background": "rgba(0, 0, 0, .7)",
                                    "animationSpeed": 500
                                }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
                 data-unfold-duration="500">
                <span
                    class="position-absolute bg-dark width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-white font-size-n9 right-0"> {{
                    books_in_cart
                  }} </span>
                <i class="glph-icon flaticon-icon-126515"></i>
              </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="masthead border-bottom position-relative" style="margin-bottom: -1px;">
      <div class="container-fluid px-3 px-md-5 px-xl-8d75 py-2 py-md-0">
        <div class="d-flex align-items-center position-relative flex-wrap">
          <div class="offcanvas-toggler mr-4 mr-lg-8">
            <a id="sidebarNavToggler2" href="javascript:;" role="button" class="cat-menu"
               aria-controls="sidebarContent2" aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
               data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent2" data-unfold-type="css-animation"
               data-unfold-overlay='{
                            "className": "u-sidebar-bg-overlay",
                            "background": "rgba(0, 0, 0, .7)",
                            "animationSpeed": 100
                        }' data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft"
               data-unfold-duration="100">
              <svg width="20px" height="18px">
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                      d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"/>
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                      d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"/>
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                      d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"/>
              </svg>
            </a>
          </div>
          <div class="site-branding pr-md-4">
            <a href="index.html" class="d-block mb-1">
              <img width="50%" src="assets/img/hfb_logo.webp">
            </a>
          </div>
          <div class="site-navigation mr-auto d-none d-xl-block">
            <ul class="nav">

              <li @click="goToHome" class="nav-item active">
                <a class="nav-link link-black-100 mx-4 px-0 py-5 active font-weight-medium d-flex align-items-center border-bottom border-primary border-width-2">
                  Home
                </a>

              </li>

              <!--<li class="nav-item"><a href="categories.html" class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">Categories</a></li>-->

              <li class="nav-item dropdown">

                <a id="shopDropdownInvoker" @click="goToShop"
                   class="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"
                   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
                   data-unfold-target="#shopDropdownMenu" data-unfold-type="css-animation" data-unfold-duration="200"
                   data-unfold-delay="50" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
                   data-unfold-animation-out="fadeOut">
                  Shop
                </a>

                <ul id="shopDropdownMenu" class="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900"
                >
                  <li><a @click="goToCart" class="dropdown-item link-black-100">Shop cart</a></li>

                </ul>
              </li>


              <li class="nav-item"><a @click="goToAbout"
                                      class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">About Us</a>
              </li>


              <li class="nav-item"><a @click="goToContact"
                                      class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">Contact Us</a>
              </li>

            </ul>
          </div>
          <ul class="d-md-none nav mr-md-n3 ml-auto">
            <li class="nav-item">

              <a id="sidebarNavToggler9" href="javascript:;" role="button" class="px-2 nav-link link-black-100"
                 aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
                 data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9"
                 data-unfold-type="css-animation" data-unfold-overlay='{
                                    "className": "u-sidebar-bg-overlay",
                                    "background": "rgba(0, 0, 0, .7)",
                                    "animationSpeed": 500
                                }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
                 data-unfold-duration="500">
                <i class="glph-icon flaticon-user"></i>
              </a>

            </li>
          </ul>
          <div class="site-search ml-xl-0 ml-md-auto w-r-100 my-2 my-xl-0">
            <form class="form-inline">
              <div class="input-group">
                <div class="input-group-prepend">
                  <i class="glph-icon flaticon-loupe input-group-text py-2d75 bg-white-100 border-white-100"></i>
                </div>
                <input class="form-control bg-white-100 min-width-380 py-2d75 height-4 border-white-100" type="search"
                       placeholder="Search for Books" aria-label="Search">
              </div>
              <button class="btn btn-outline-success my-2 my-sm-0 sr-only" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>

  <aside id="sidebarContent9" class="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler9">
    <div class="u-sidebar__scroller">
      <div class="u-sidebar__container">
        <div class="u-header-sidebar__footer-offset">

          <div class="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4">
            <button type="button" class="close ml-auto" aria-controls="sidebarContent9" aria-haspopup="true"
                    aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent9" data-unfold-type="css-animation"
                    data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
                    data-unfold-duration="500">
              <span aria-hidden="true">Close <i class="fas fa-times ml-2"></i></span>
            </button>
          </div>


        </div>
      </div>
    </div>
  </aside>


  <aside id="sidebarContent" class="u-sidebar u-sidebar__lg" aria-labelledby="sidebarNavToggler">
    <div class="u-sidebar__scroller">
      <div class="u-sidebar__container">
        <div class="u-header-sidebar__footer-offset">

          <div class="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4">
            <button type="button" class="close ml-auto" aria-controls="sidebarContent" aria-haspopup="true"
                    aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent" data-unfold-type="css-animation"
                    data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
                    data-unfold-duration="500">
              <span aria-hidden="true">Close <i class="fas fa-times ml-2"></i></span>
            </button>
          </div>


          <div class="js-scrollbar u-sidebar__body">
            <div class="u-sidebar__content u-header-sidebar__content">
              <form class="">

                <div id="login" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i
                        class="flaticon-user mr-3 font-size-5"></i>Account</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel" class="form-label" for="signinEmail">Username or email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail"
                               placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com"
                               aria-describedby="signinEmailLabel" required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinPasswordLabel" class="form-label" for="signinPassword">Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="password"
                               id="signinPassword" placeholder="" aria-label="" aria-describedby="signinPasswordLabel"
                               required>
                      </div>
                    </div>

                    <div class="d-flex justify-content-between mb-5 align-items-center">

                      <div class="js-form-message">
                        <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                          <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox"
                                 required>
                          <label class="custom-control-label" for="termsCheckbox">
<span class="font-size-2 text-secondary-gray-700">
Remember me
</span>
                          </label>
                        </div>
                      </div>

                      <a class="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium"
                         href="javascript:;" data-target="#forgotPassword" data-link-group="idForm"
                         data-animation-in="fadeIn">Forgot Password?</a>
                    </div>
                    <div class="mb-4d75">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Sign In</button>
                    </div>
                    <div class="mb-2">
                      <a href="javascript:;"
                         class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                         data-target="#signup" data-link-group="idForm" data-animation-in="fadeIn">Create Account</a>
                    </div>
                  </div>
                </div>

                <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i
                        class="flaticon-resume mr-3 font-size-5"></i>Create Account</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel1" class="form-label" for="signinEmail1">Email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail1"
                               placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com"
                               aria-describedby="signinEmailLabel1" required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinPasswordLabel1" class="form-label" for="signinPassword1">Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="password"
                               id="signinPassword1" placeholder="" aria-label="" aria-describedby="signinPasswordLabel1"
                               required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signupConfirmPasswordLabel" class="form-label" for="signupConfirmPassword">Confirm
                          Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="confirmPassword"
                               id="signupConfirmPassword" placeholder="" aria-label=""
                               aria-describedby="signupConfirmPasswordLabel" required>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Create Account</button>
                    </div>
                    <div class="text-center mb-4">
                      <span class="small text-muted">Already have an account?</span>
                      <a class="js-animation-link small" href="javascript:;" data-target="#login"
                         data-link-group="idForm" data-animation-in="fadeIn">Login
                      </a>
                    </div>
                  </div>
                </div>


                <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i
                        class="flaticon-question mr-3 font-size-5"></i>Forgot Password?</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel3" class="form-label" for="signinEmail3">Email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail3"
                               placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com"
                               aria-describedby="signinEmailLabel3" required>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Recover Password</button>
                    </div>
                    <div class="text-center mb-4">
                      <span class="small text-muted">Remember your password?</span>
                      <a class="js-animation-link small" href="javascript:;" data-target="#login"
                         data-link-group="idForm" data-animation-in="fadeIn">Login
                      </a>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </aside>


  <aside id="sidebarContent1" class="u-sidebar u-sidebar__xl" aria-labelledby="sidebarNavToggler1">
    <div class="u-sidebar__scroller js-scrollbar">
      <div class="u-sidebar__container">
        <div class="u-header-sidebar__footer-offset">

          <div class="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4">
            <button type="button" class="close ml-auto" aria-controls="sidebarContent1" aria-haspopup="true"
                    aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent1" data-unfold-type="css-animation"
                    data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"
                    data-unfold-duration="500">
              <span aria-hidden="true">Close <i class="fas fa-times ml-2"></i></span>
            </button>
          </div>


          <div class="u-sidebar__body">
            <div class="u-sidebar__content u-header-sidebar__content">

              <header class="border-bottom px-4 px-md-6 py-4">
                <h2 class="font-size-3 mb-0 d-flex align-items-center"><i
                    class="flaticon-icon-126515 mr-3 font-size-5"></i>Your shopping bag ({{ books_in_cart }})</h2>
              </header>


              <div class="px-4 py-5 px-md-6 border-bottom" v-for="book in books" :key="book.id">
                <div class="media">
                  <a href="" class="d-block"><img :src=book.image class="img-fluid"
                                                             alt="image-description"></a>
                  <div class="media-body ml-4d875">
                    <div class="text-primary text-uppercase font-size-1 mb-1 text-truncate"><a href="">Hard
                      Cover</a></div>
                    <h2 class="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2">
                      <a href="" class="text-dark">{{
                          book.title
                        }}</a>
                    </h2>
                    <div class="font-size-2 mb-1 text-truncate"><a href="" class="text-gray-700">
                      {{ book.author }}</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount">{{ book.quantity }} x <span
                          class="woocommerce-Price-currencySymbol">$</span>{{ book.price }}</span>
                    </div>
                  </div>
                  <div class="mt-3 ml-3">
                    <a href="" class="text-dark"><i class="fas fa-times"></i></a>
                  </div>
                </div>
              </div>
              <div class="px-4 py-5 px-md-6 d-flex justify-content-between align-items-center font-size-3">
                <h4 class="mb-0 font-size-3">Subtotal:</h4>
                <div class="font-weight-medium"> {{ subtotal }}</div>
              </div>
              <div class="px-4 mb-8 px-md-6">
                <!--                <button type="submit" class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4">View Cart</button>-->
                <button type="submit" class="btn btn-block py-4 rounded-0 btn-dark"
                        @click="router.push({ name: 'halfprice_cart', params: { books_in_cart,books} })">Checkout
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </aside>


  <aside id="sidebarContent2" class="u-sidebar u-sidebar__md u-sidebar--left" aria-labelledby="sidebarNavToggler2">
    <div class="u-sidebar__scroller js-scrollbar">
      <div class="u-sidebar__container">
        <div class="u-header-sidebar__footer-offset">

          <div class="u-sidebar__body">
            <div class="u-sidebar__content u-header-sidebar__content">

              <header class="border-bottom px-4 px-md-5 py-4 d-flex align-items-center justify-content-between">
                <h2 class="font-size-3 mb-0">SHOP BY CATEGORY</h2>

                <div class="d-flex align-items-center">
                  <button type="button" class="close ml-auto" aria-controls="sidebarContent2" aria-haspopup="true"
                          aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false"
                          data-unfold-target="#sidebarContent2" data-unfold-type="css-animation"
                          data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft"
                          data-unfold-duration="500">
                    <span aria-hidden="true"><i class="fas fa-times ml-2"></i></span>
                  </button>
                </div>

              </header>

              <div class="border-bottom">
                <div class="zeynep pt-4">
                  <ul>
                    <li class="has-submenu">
                      <a href="" data-submenu="off-pages">Pages</a>
                      <div id="off-pages" class="submenu">
                        <div class="submenu-header" data-submenu-close="off-pages">
                          <a href="">Pages</a>
                        </div>
                        <ul>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-home">Home Pages</a>
                            <div id="off-home" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-home">
                                <a href="">Home Pages</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="index.html">Home v1</a>
                                </li>
                                <li>
                                  <a href="home-v2.html">Home v2</a>
                                </li>
                                <li>
                                  <a href="home-v3.html">Home v2</a>
                                </li>
                                <li>
                                  <a href="home-v3.html">Home v3</a>
                                </li>
                                <li>
                                  <a href="home-v4.html">Home v4</a>
                                </li>
                                <li>
                                  <a href="home-v5.html">Home v5</a>
                                </li>
                                <li>
                                  <a href="home-v6.html">Home v6</a>
                                </li>
                                <li>
                                  <a href="home-v7.html">Home v7</a>
                                </li>
                                <li>
                                  <a href="home-v8.html">Home v8</a>
                                </li>
                                <li>
                                  <a href="home-v9.html">Home v9</a>
                                </li>
                                <li>
                                  <a href="home-v10.html">Home v10</a>
                                </li>
                                <li>
                                  <a href="home-v11.html">Home v11</a>
                                </li>
                                <li>
                                  <a href="home-v12.html">Home v12</a>
                                </li>
                                <li>
                                  <a href="home-v13.html">Home v13</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-single-product">Single Product</a>
                            <div id="off-single-product" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-single-product">
                                <a href="">Single Product</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="">Single Product v1</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v2.html">Single Product v2</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v3.html">Single Product v3</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v4.html">Single Product v4</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v5.html">Single Product v5</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v6.html">Single Product v6</a>
                                </li>
                                <li>
                                  <a href="../shop/single-product-v7.html">Single Product v7</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-shop-pages">Shop Pages</a>
                            <div id="off-shop-pages" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-shop-pages">
                                <a href="">Shop Pages</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="../shop/cart.html">Shop cart</a>
                                </li>
                                <li>
                                  <a href="../shop/checkout.html">Shop checkout</a>
                                </li>
                                <li>
                                  <a href="../shop/my-account.html">Shop My Account</a>
                                </li>
                                <li>
                                  <a href="../shop/order-received.html">Shop Order Received</a>
                                </li>
                                <li>
                                  <a href="../shop/order-tracking.html">Shop Order Tracking</a>
                                </li>
                                <li>
                                  <a href="../shop/store-location.html">Shop Store Location</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-shop-list">Shop List</a>
                            <div id="off-shop-list" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-shop-list">
                                <a href="">Shop List</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="../shop/v1.html">Shop List v1</a>
                                </li>
                                <li>
                                  <a href="../shop/v2.html">Shop List v2</a>
                                </li>
                                <li>
                                  <a href="../shop/v3.html">Shop List v3</a>
                                </li>
                                <li>
                                  <a href="../shop/v4.html">Shop List v4</a>
                                </li>
                                <li>
                                  <a href="../shop/v5.html">Shop List v5</a>
                                </li>
                                <li>
                                  <a href="../shop/v6.html">Shop List v6</a>
                                </li>
                                <li>
                                  <a href="../shop/v7.html">Shop List v7</a>
                                </li>
                                <li>
                                  <a href="../shop/v8.html">Shop List v8</a>
                                </li>
                                <li>
                                  <a href="../shop/v9.html">Shop List v9</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-blog">Blog</a>
                            <div id="off-blog" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-blog">
                                <a href="">Blog</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="../blog/blog-v1.html">Blog v1</a>
                                </li>
                                <li>
                                  <a href="../blog/blog-v2.html">Blog v2</a>
                                </li>
                                <li>
                                  <a href="../blog/blog-v3.html">Blog v3</a>
                                </li>
                                <li>
                                  <a href="../blog/blog-single.html">Blog Single</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="has-submenu">
                            <a href="" data-submenu="off-others">Others</a>
                            <div id="off-others" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="off-others">
                                <a href="">Others</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="../others/404.html">404</a>
                                </li>
                                <li>
                                  <a href="../others/about.html">About Us</a>
                                </li>
                                <li>
                                  <a href="../others/authors-list.html">Authors List</a>
                                </li>
                                <li>
                                  <a href="">Authors Single</a>
                                </li>
                                <li>
                                  <a href="../others/coming-soon.html">Coming Soon</a>
                                </li>
                                <li>
                                  <a href="../others/contact.html">Contact Us</a>
                                </li>
                                <li>
                                  <a href="../others/faq.html">FAQ</a>
                                </li>
                                <li>
                                  <a href="../others/pricing-table.html">Pricing Table</a>
                                </li>
                                <li>
                                  <a href="../others/terms-conditions.html">Terms Conditions</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li class="px-5">
                            <a href="../../documentation/index.html"
                               class="btn btn-primary mb-3 mb-md-0 mb-xl-3 mt-4 font-size-2 btn-block">Documentation</a>
                          </li>
                          <li class="px-5 mb-4">
                            <a href="../../starter/index.html" class="btn btn-secondary font-size-2 btn-block mb-2">Starter</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="art-photo">Arts & Photography</a>
                      <div id="art-photo" class="submenu">
                        <div class="submenu-header" data-submenu-close="art-photo">
                          <a href="">Arts & Photography</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Architecture</a>
                          </li>
                          <li>
                            <a href="">Business of Art</a>
                          </li>
                          <li>
                            <a href="">Collections, Catalogs & Exhibitions</a>
                          </li>
                          <li>
                            <a href="">Decorative Arts & Design</a>
                          </li>
                          <li>
                            <a href="">Drawing</a>
                          </li>
                          <li>
                            <a href="">Fashion</a>
                          </li>
                          <li>
                            <a href="">Graphic Design</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="biography">Biographies & Memoirs</a>
                      <div id="biography" class="submenu">
                        <div class="submenu-header" data-submenu-close="biography">
                          <a href="">Biographies & Memoirs</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="children">Children's Books</a>
                      <div id="children" class="submenu">
                        <div class="submenu-header" data-submenu-close="children">
                          <a href="">Children's Books</a>
                        </div>
                        <ul>
                          <li class="has-submenu">
                            <a href="" data-submenu="electronics">Electronics</a>
                            <div id="electronics" class="submenu js-scrollbar">
                              <div class="submenu-header" data-submenu-close="electronics">
                                <a href="">Electronics</a>
                              </div>
                              <ul class="">
                                <li>
                                  <a href="">Camera & Photo</a>
                                </li>
                                <li>
                                  <a href="">Home Audio</a>
                                </li>
                                <li>
                                  <a href="">Tv & Video</a>
                                </li>
                                <li>
                                  <a href="">Computers & Accessories</a>
                                </li>
                                <li>
                                  <a href="">Car & Vehicle Electronics</a>
                                </li>
                                <li>
                                  <a href="">Portable Audio & Video</a>
                                </li>
                                <li>
                                  <a href="">Headphones</a>
                                </li>
                                <li>
                                  <a href="">Accessories & Supplies</a>
                                </li>
                                <li>
                                  <a href="">Video Projectors</a>
                                </li>
                                <li>
                                  <a href="">Office Electronics</a>
                                </li>
                                <li>
                                  <a href="">Wearable Technology</a>
                                </li>
                                <li>
                                  <a href="">Service Plans</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="">Books</a>
                          </li>
                          <li>
                            <a href="">Video Games</a>
                          </li>
                          <li>
                            <a href="">Computers</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="computers">Computers & Technology</a>
                      <div id="computers" class="submenu">
                        <div class="submenu-header" data-submenu-close="computers">
                          <a href="">Computers & Technology</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="cookbook">Cookbooks, Food & Wine</a>
                      <div id="cookbook" class="submenu">
                        <div class="submenu-header" data-submenu-close="cookbook">
                          <a href="">Cookbooks, Food & Wine</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="sciencemath">Education & Teaching</a>
                      <div id="sciencemath" class="submenu">
                        <div class="submenu-header" data-submenu-close="sciencemath">
                          <a href="">Education & Teaching</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="health">Health, Fitness & Dieting</a>
                      <div id="health" class="submenu">
                        <div class="submenu-header" data-submenu-close="health">
                          <a href="">Health, Fitness & Dieting</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="history">History</a>
                      <div id="history" class="submenu">
                        <div class="submenu-header" data-submenu-close="history">
                          <a href="">History</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="romance">Romance</a>
                      <div id="romance" class="submenu">
                        <div class="submenu-header" data-submenu-close="romance">
                          <a href="">Romance</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href=" ">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="sports">Sports & Outdoors</a>
                      <div id="sports" class="submenu">
                        <div class="submenu-header" data-submenu-close="sports">
                          <a href="">Sports & Outdoors</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="has-submenu">
                      <a href="" data-submenu="travel">Travel</a>
                      <div id="travel" class="submenu">
                        <div class="submenu-header" data-submenu-close="travel">
                          <a href="">Travel</a>
                        </div>
                        <ul>
                          <li>
                            <a href="">Istanbul</a>
                          </li>
                          <li>
                            <a href="">Mardin</a>
                          </li>
                          <li>
                            <a href="">Amed</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="px-4 px-md-5 pt-5 pb-4 border-bottom">
                <h2 class="font-size-3 mb-3">HELP & SETTINGS </h2>
                <ul class="list-group list-group-flush list-group-borderless">
                  <li class="list-group-item px-0 py-2 border-0"><a href="" class="h-primary">Your
                    Account</a></li>
                  <li class="list-group-item px-0 py-2 border-0"><a href="" class="h-primary">Help</a></li>
                  <li class="list-group-item px-0 py-2 border-0"><a href="" class="h-primary">Sign In</a>
                  </li>
                </ul>
              </div>
              <div class="px-4 px-md-5 py-5">
                <select class="custom-select mb-4 rounded-0 pl-4 height-4 shadow-none text-dark">
                  <option selected>English (United States)</option>
                  <option value="1">English (UK)</option>
                  <option value="2">Arabic (Saudi Arabia)</option>
                  <option value="3">Deutsch</option>
                </select>
                <select class="custom-select mb-4 rounded-0 pl-4 height-4 shadow-none text-dark">
                  <option selected>$ USD</option>
                  <option value="1">د.إ AED</option>
                  <option value="2">¥ CNY</option>
                  <option value="3">€ EUR</option>
                </select>

                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a class="h-primary pr-2 font-size-2" href="">
                      <span class="fab fa-facebook-f btn-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="h-primary pr-2 font-size-2" href="">
                      <span class="fab fa-google btn-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="h-primary pr-2 font-size-2" href="">
                      <span class="fab fa-twitter btn-icon__inner"></span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="h-primary pr-2 font-size-2" href="">
                      <span class="fab fa-github btn-icon__inner"></span>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </aside>


  <section class="space-bottom-3">
    <div class="bg-gray-200 space-2 space-lg-0 bg-img-hero"
         style="">
      <div class="container">
        <div class="js-slick-carousel u-slick"
             data-pagi-classes="text-center u-slick__pagination position-absolute right-0 left-0 mb-n8 mb-lg-4 bottom-0">
          <div class="js-slide">
            <div class="hero row min-height-588 align-items-center">
              <div class="col-lg-7 col-wd-6 mb-4 mb-lg-0">
                <div class="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
                  <p class="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2"
                     data-scs-animation-in="fadeInUp" data-scs-animation-delay="200">The Bookworm Editors'</p>
                  <h2 class="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300">
                    <span class="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
                    <span class="hero__title-line-2 font-weight-bold d-block">February</span>
                  </h2>
                  <a href="../shop/v1.html" class="btn btn-dark btn-wide rounded-0 hero__btn"
                     data-scs-animation-in="fadeInLeft" data-scs-animation-delay="400">See More</a>
                </div>
              </div>
              <div class="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay="500">
                <img class="img-fluid" src="https://placehold.it/800x420" alt="image-description">
              </div>
            </div>
          </div>
          <div class="js-slide">
            <div class="hero row min-height-588 align-items-center">
              <div class="col-lg-7 col-wd-6 mb-4 mb-lg-0">
                <div class="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
                  <p class="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2"
                     data-scs-animation-in="fadeInUp" data-scs-animation-delay="200">The Bookworm Editors'</p>
                  <h2 class="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300">
                    <span class="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
                    <span class="hero__title-line-2 font-weight-bold d-block">February</span>
                  </h2>
                  <a href="../shop/v1.html" class="btn btn-dark btn-wide rounded-0 hero__btn"
                     data-scs-animation-in="fadeInLeft" data-scs-animation-delay="400">See More</a>
                </div>
              </div>
              <div class="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay="500">
                <img class="img-fluid" src="https://placehold.it/800x420" alt="image-description">
              </div>
            </div>
          </div>
          <div class="js-slide">
            <div class="hero row min-height-588 align-items-center">
              <div class="col-lg-7 col-wd-6 mb-4 mb-lg-0">
                <div class="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
                  <p class="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2"
                     data-scs-animation-in="fadeInUp" data-scs-animation-delay="200">The Bookworm Editors'</p>
                  <h2 class="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300">
                    <span class="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
                    <span class="hero__title-line-2 font-weight-bold d-block">February</span>
                  </h2>
                  <a href="../shop/v1.html" class="btn btn-dark btn-wide rounded-0 hero__btn"
                     data-scs-animation-in="fadeInLeft" data-scs-animation-delay="400">See More</a>
                </div>
              </div>
              <div class="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay="500">
                <img class="img-fluid" src="https://placehold.it/800x420" alt="image-description">
              </div>
            </div>
          </div>
          <div class="js-slide">
            <div class="hero row min-height-588 align-items-center">
              <div class="col-lg-7 col-wd-6 mb-4 mb-lg-0">
                <div class="media-body mr-wd-4 align-self-center mb-4 mb-md-0">
                  <p class="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2"
                     data-scs-animation-in="fadeInUp" data-scs-animation-delay="200">The Bookworm Editors'</p>
                  <h2 class="hero__title font-size-14 mb-4" data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300">
                    <span class="hero__title-line-1 font-weight-regular d-block">Featured Books of the</span>
                    <span class="hero__title-line-2 font-weight-bold d-block">February</span>
                  </h2>
                  <a href="../shop/v1.html" class="btn btn-dark btn-wide rounded-0 hero__btn"
                     data-scs-animation-in="fadeInLeft" data-scs-animation-delay="400">See More</a>
                </div>
              </div>
              <div class="col-lg-5 col-wd-6" data-scs-animation-in="fadeInRight" data-scs-animation-delay="500">
                <img class="img-fluid" src="https://placehold.it/800x420" alt="image-description">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="space-bottom-3">
    <div class="container">
      <header class="mb-5 d-md-flex justify-content-between align-items-center">
        <h2 class="font-size-7 mb-3 mb-md-0">Featured Categories</h2>
        <a href="" class="h-primary d-block">All Categories <i class="glyph-icon flaticon-next"></i></a>
      </header>
      <ul class="list-unstyled my-0 row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-wd-5">
        <li class="product-category col mb-4 mb-xl-0" v-for="category in categories" :key="category.id">
          <div class="product-category__inner bg-indigo-light px-6 py-5">
            <div class="product-category__icon font-size-12 text-primary-indigo"><i
                class="glyph-icon flaticon-gallery"></i></div>
            <div class="product-category__body">
              <h3 class="text-truncate font-size-3">{{ category.name }}</h3>
              <a href="" class="stretched-link text-dark">Shop Now</a>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </section>
  <section class="space-bottom-3">
    <div class="container">
<!--      <header class="mb-5 d-md-flex justify-content-between align-items-center">-->
<!--        <h2 class="font-size-7 mb-3 mb-md-0">Bestselling Books</h2>-->
<!--        <a href="../shop/v1.html" class="h-primary d-block">View All <i class="glyph-icon flaticon-next"></i></a>-->
<!--      </header>-->
<!--      <div class="js-slick-carousel products no-gutters border-top border-left border-right"-->
<!--           data-pagi-classes="d-xl-none text-center position-absolute right-0 left-0 u-slick__pagination mt-4 mb-0"-->
<!--           data-arrows-classes="d-none d-xl-block u-slick__arrow u-slick__arrow-centered&#45;&#45;y"-->
<!--           data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-inner u-slick__arrow-inner&#45;&#45;left ml-lg-n10"-->
<!--           data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-inner u-slick__arrow-inner&#45;&#45;right mr-lg-n10"-->
<!--           data-slides-show="5" data-responsive='[{-->
<!--                   "breakpoint": 1500,-->
<!--                   "settings": {-->
<!--                     "slidesToShow": 4-->
<!--                   }-->
<!--                },{-->
<!--                   "breakpoint": 1199,-->
<!--                   "settings": {-->
<!--                     "slidesToShow": 3-->
<!--                   }-->
<!--                },{-->
<!--                   "breakpoint": 992,-->
<!--                   "settings": {-->
<!--                     "slidesToShow": 2-->
<!--                   }-->
<!--                }, {-->
<!--                   "breakpoint": 768,-->
<!--                   "settings": {-->
<!--                     "slidesToShow": 1-->
<!--                   }-->
<!--                }, {-->
<!--                   "breakpoint": 554,-->
<!--                   "settings": {-->
<!--                     "slidesToShow": 1-->
<!--                   }-->
<!--                }]'>-->

<!--        <div class="product col" v-for="product in products" :key="product.id" >-->
<!--          <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--            <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--              <div class="woocommerce-loop-product__thumbnail">-->
<!--                <a href="" class="d-block">-->
<!--                  <img :src=product.image-->
<!--                    class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                    alt="image-description" style="height: 120px"></a>-->
<!--              </div>-->
<!--              <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                </div>-->
<!--                <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                  <a href="">{{ product.name }}</a></h2>-->
<!--                <div class="font-size-2  mb-1 text-truncate"><a href=""-->
<!--                                                                class="text-gray-700">{{ product.author }}</a></div>-->
<!--                <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                  <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{{ product.price }}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="product__hover d-flex align-items-center">-->
<!--                <a @click="addToCart(product)"-->
<!--                   class="text-uppercase text-dark h-dark font-weight-medium mr-auto">-->
<!--                  <span class="product__add-to-cart">ADD TO CART </span>-->
<!--                  <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                </a>-->
<!--                <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                  <i class="flaticon-switch"></i>-->
<!--                </a>-->
<!--                <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                  <i class="flaticon-heart"></i>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
    </div>
  </section>
  <section class="space-bottom-3">
    <header class="mb-4 container">
      <h2 class="font-size-7 text-center">Featured Books</h2>
    </header>
    <div class="container">
      <ul class="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
          id="featuredBooks" role="tablist">
        <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
          <a class="nav-link px-0 active" id="featured-tab" data-toggle="tab" href="featured" role="tab"
             aria-controls="featured" aria-selected="true">Featured</a>
        </li>
        <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
          <a class="nav-link px-0" id="onsale-tab" data-toggle="tab" href="onsale" role="tab"
             aria-controls="onsale" aria-selected="false">On Sale</a>
        </li>
        <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
          <a class="nav-link px-0" id="mostviewed-tab" data-toggle="tab" href="mostviewed" role="tab"
             aria-controls="mostviewed" aria-selected="false">Most Viewed</a>
        </li>
      </ul>
      <div class="tab-content" id="featuredBooksContent">
        <div class="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
          <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
            <li class="product col" v-for="product in products" :key="product.id">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block">
                      <img :src="product.image"
                            class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                            alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">
                        {{ product.name }}
                      </a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">{{ product.author }}</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>{{ product.price }}</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a @click="addToCart(product)"
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
<!--            <li class="product col">-->
<!--              <div class="c">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">The Overdue Life of Amy Byler</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">All You Can Ever Know: A Memoir</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose-->
<!--                        Everyday</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">The Overdue Life of Amy Byler</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">All You Can Ever Know: A Memoir</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col d-xl-none d-wd-block">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose-->
<!--                        Everyday</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col d-xl-none d-wd-block">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">The Overdue Life of Amy Byler</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col d-xl-none d-wd-block">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">All You Can Ever Know: A Memoir</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li class="product col d-xl-none d-wd-block">-->
<!--              <div class="product__inner overflow-hidden p-3 p-md-4d875">-->
<!--                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">-->
<!--                  <div class="woocommerce-loop-product__thumbnail">-->
<!--                    <a href="" class="d-block"><img src="https://placehold.it/120x180"-->
<!--                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"-->
<!--                                                                                  alt="image-description"></a>-->
<!--                  </div>-->
<!--                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">-->
<!--                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>-->
<!--                    </div>-->
<!--                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">-->
<!--                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>-->
<!--                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"-->
<!--                                                                    class="text-gray-700">Jay Shetty</a></div>-->
<!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
<!--                      <span class="woocommerce-Price-amount amount"><span-->
<!--                          class="woocommerce-Price-currencySymbol">$</span>29</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="product__hover d-flex align-items-center">-->
<!--                    <a href=""-->
<!--                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"-->
<!--                       data-placement="right" title="ADD TO CART">-->
<!--                      <span class="product__add-to-cart">ADD TO CART</span>-->
<!--                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>-->
<!--                    </a>-->
<!--                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-switch"></i>-->
<!--                    </a>-->
<!--                    <a href="" class="h-p-bg btn btn-outline-primary border-0">-->
<!--                      <i class="flaticon-heart"></i>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
          </ul>
        </div>
        <div class="tab-pane fade" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
          <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab-pane fade" id="mostviewed" role="tabpanel" aria-labelledby="mostviewed-tab">
          <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-wd-6 border-top border-left my-0">
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Think Like a Monk: Train Your Mind for Peace and Purpose
                        Everyday</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">The Overdue Life of Amy Byler</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">All You Can Ever Know: A Memoir</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="product col d-xl-none d-wd-block">
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                  <div class="woocommerce-loop-product__thumbnail">
                    <a href="" class="d-block"><img src="https://placehold.it/120x180"
                                                                                  class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                                                  alt="image-description"></a>
                  </div>
                  <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                    <div class="text-uppercase font-size-1 mb-1 text-truncate"><a href="">Paperback</a>
                    </div>
                    <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                      <a href="">Broken Faith: Inside the Word of Faith...</a></h2>
                    <div class="font-size-2  mb-1 text-truncate"><a href="others/authors-single.html"
                                                                    class="text-gray-700">Jay Shetty</a></div>
                    <div class="price d-flex align-items-center font-weight-medium font-size-3">
                      <span class="woocommerce-Price-amount amount"><span
                          class="woocommerce-Price-currencySymbol">$</span>29</span>
                    </div>
                  </div>
                  <div class="product__hover d-flex align-items-center">
                    <a href=""
                       class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                       data-placement="right" title="ADD TO CART">
                      <span class="product__add-to-cart">ADD TO CART</span>
                      <span class="product__add-to-cart-icon font-size-4"><i class="flaticon-icon-126515"></i></span>
                    </a>
                    <a href="" class="mr-1 h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-switch"></i>
                    </a>
                    <a href="" class="h-p-bg btn btn-outline-primary border-0">
                      <i class="flaticon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <footer>
    <div class="border-top space-top-3">
      <div class="border-bottom pb-5 space-bottom-lg-3">
        <div class="container">

          <div class="space-bottom-2 space-bottom-md-3">
            <div class="text-center mb-5">
              <h5 class="font-size-7 font-weight-medium">Join Our Newsletter</h5>
              <p class="text-gray-700">Signup to be the first to hear about exclusive deals, special offers and upcoming
                collections</p>
            </div>

            <div class="form-row justify-content-center">
              <div class="col-md-5 mb-3 mb-md-2">
                <div class="js-form-message">
                  <div class="input-group">
                    <input type="text" class="form-control px-5 height-60 border-dark" name="name" id="signupSrName"
                           placeholder="Enter email for weekly newsletter." aria-label="Your name" required=""
                           data-msg="Name must contain only letters." data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>
              </div>
              <div class="col-sm-2 ml-md-2">
                <button type="submit" class="btn btn-dark rounded-0 btn-wide py-3 font-weight-medium">Subscribe
                </button>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-lg-4 mb-6 mb-lg-0">
              <div class="pb-6">
                <a href="index.html" class="d-inline-block mb-5">
                  <img src="assets/img/hfb_logo.webp">
                </a>
                <address class="font-size-2 mb-5">
<span class="mb-2 font-weight-normal text-dark">
BIHI Towers, Moi Avenue, 2nd Flr Shop No.5, Nairobi.
Limuru Road, Village Market, New Wing, Nairobi, Kenya.
</span>
                </address>
                <div class="mb-4">
                  <a href="mailto:sale@bookworm.com" class="font-size-2 d-block link-black-100 mb-1">halfpricebooks2019@gmail.com

                  </a>
                  <a href="tel:+1246-345-0695" class="font-size-2 d-block link-black-100">+254 703 647424</a>
                </div>
                <ul class="list-unstyled mb-0 d-flex">
                  <li class="btn pl-0">
                    <a class="link-black-100" href="">
                      <span class="fab fa-instagram"></span>
                    </a>
                  </li>
                  <li class="btn">
                    <a class="link-black-100" href="">
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li class="btn">
                    <a class="link-black-100" href="">
                      <span class="fab fa-youtube"></span>
                    </a>
                  </li>
                  <li class="btn">
                    <a class="link-black-100" href="">
                      <span class="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li class="btn">
                    <a class="link-black-100" href="">
                      <span class="fab fa-pinterest"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Explore</h4>
              <ul class="list-unstyled mb-0">
                <li class="pb-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">About
                    as</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Sitemap</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                     href="">Bookmarks</a>
                </li>
                <li class="pt-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Sign
                    in/Join</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Customer Service</h4>
              <ul class="list-unstyled mb-0">
                <li class="pb-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Help
                    Center</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Returns</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Product
                    Recalls</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Accessibility</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Contact
                    Us</a>
                </li>
                <li class="pt-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Store
                    Pickup</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Policy</h4>
              <ul class="list-unstyled mb-0">
                <li class="pb-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Return
                    Policy</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Terms Of
                    Use</a>
                </li>
                <li class="py-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                     href="">Security</a>
                </li>
                <li class="pt-2">
                  <a class="widgets-hover transition-3d-hover font-size-2 link-black-100" href="">Privacy</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Categories</h4>
              <ul class="list-unstyled mb-0">
                <li class="pt-2">
                  <a v class="widgets-hover transition-3d-hover font-size-2 link-black-100" href=""> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="space-1">
        <div class="container">
          <div class="d-lg-flex text-center text-lg-left justify-content-between align-items-center">

            <p class="mb-3 mb-lg-0 font-size-2">©2020 Half Priced Books. All rights reserved</p>

            <div class="ml-auto d-lg-flex align-items-center">
              <div class="mb-4 mb-lg-0 mr-5">
                <img class="img-fluid" src="" alt="Image-Description">
              </div>

              <select class="js-select selectpicker dropdown-select mb-3 mb-lg-0"
                      data-style="border px-4 py-2 rounded-0 height-5 outline-none shadow-none form-control font-size-2"
                      data-dropdown-align-right="true">
                <option value="one" selected>English (United States)</option>

              </select>


              <select class="js-select selectpicker dropdown-select ml-md-3"
                      data-style="border px-4 py-2 rounded-0 height-5 outline-none shadow-none form-control font-size-2"
                      data-dropdown-align-right="true" data-width="fit">
                <option value="one" selected>$ USD</option>
                <option value="two">KSH</option>

              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  </body>
</template>
<script>
import Toastify from 'toastify-js'
import {useRouter} from 'vue-router'
import {onMounted, ref, defineComponent, computed, watch} from "vue";
import CategoriesService from "../services/categories.service";
import {useStore} from 'vuex'
import BooksService from "@/services/books.service";


export default defineComponent({
  props: ['reload'],
  setup: function () {

    const store = useStore()
    const router = useRouter()
    const products = ref()
    const categories = ref()
    const cart = ref([])
    const goToCart = () => {
      router.push("/halfprice_cart")
    }
    const goToShop = () => {
      router.push("/halfprice_shop")
    }
    const goToHome = () => {
      router.push("/")
    }
    const goToAbout = () => {
      router.push("/halfprice_about")
    }
    const goToContact = () => {
      router.push("/halfprice_contact")
    }
    const addToCart = (book) => {

      book.quantity++
      store.commit('ADD_TO_CART', book)
      Toastify({
        text: "successfully added to cart",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
      console.log(books)
      console.log(books_in_cart)
    }
    const books_in_cart = computed(() =>
        store.getters.getTotalCartItems
    )

    const removeFromCart = (book) => {
      store.commit('REMOVE_FROM_CART', book)
    }

    const fetchBooks = async () => {
      BooksService.fetchBooks().then(response => {
        console.log(response.data)
        products.value = response.data
        console.log(products.value)
        let newProducts = products.value.forEach(product  =>
          product.quantity = 0
         )
        console.log(newProducts , "why?")
      })
    }
    const fetchCategories = async () => {
      CategoriesService.fetchCategories().then(response => {
        console.log(response.data)
        categories.value = response.data
      })

    }
    const books = computed(() =>
        store.getters.getCartItems)

    const subtotal = computed(() =>
        store.getters.getTotalCost
    )


    onMounted(() => {
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
      }

      fetchCategories()
      fetchBooks()


    })
    // watch (
    //     ()=> props.reload,
    //     ()=> {
    //       if(props.reload == true){
    //
    //         window.location.reload()
    //       }
    //     }
    // )


    return {
      router,
      books,
      removeFromCart,
      fetchCategories,
      categories,
      products,
      cart,
      addToCart,
      subtotal,
      books_in_cart,
      goToHome,
      goToShop,
      goToCart,
      goToAbout,
      fetchBooks,
      goToContact,

    }
  }
})
</script>