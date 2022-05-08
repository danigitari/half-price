<template>
  <body>

  <header id="site-header" class="site-header__v1">
    <div class="topbar border-bottom d-none d-md-block">
      <div class="container-fluid px-2 px-md-5 px-xl-8d75">
        <div class="topbar__nav d-md-flex justify-content-between align-items-center">
          <ul class="topbar__nav--left nav ml-md-n3">
            <li class="nav-item"><a  class="nav-link link-black-100"><i class="glph-icon flaticon-question mr-2"></i>Can we help you?</a></li>
            <li class="nav-item"><a href="tel:+1246-345-0695" class="nav-link link-black-100"><i class="glph-icon flaticon-phone mr-2"></i>+254 703 647424</a></li>
          </ul>
          <ul class="topbar__nav--right nav mr-md-n3">
            <li class="nav-item"><a  class="nav-link link-black-100"><i class="glph-icon flaticon-pin"></i></a></li>
            <li class="nav-item"><a  class="nav-link link-black-100"><i class="glph-icon flaticon-switch"></i></a></li>
            <li class="nav-item"><a  class="nav-link link-black-100"><i class="glph-icon flaticon-heart"></i></a></li>
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

              <a id="sidebarNavToggler1" href="javascript:;" role="button" class="nav-link link-black-100 position-relative" aria-controls="sidebarContent1" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent1" data-unfold-type="css-animation" data-unfold-overlay='{
                                    "className": "u-sidebar-bg-overlay",
                                    "background": "rgba(0, 0, 0, .7)",
                                    "animationSpeed": 500
                                }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                <span class="position-absolute bg-dark width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-white font-size-n9 right-0">3</span>
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
            <a id="sidebarNavToggler2" href="javascript:;" role="button" class="cat-menu" aria-controls="sidebarContent2" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent2" data-unfold-type="css-animation" data-unfold-overlay='{
                            "className": "u-sidebar-bg-overlay",
                            "background": "rgba(0, 0, 0, .7)",
                            "animationSpeed": 100
                        }' data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft" data-unfold-duration="100">
              <svg width="20px" height="18px">
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)" d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z" />
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)" d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z" />
                <path fill-rule="evenodd" fill="rgb(25, 17, 11)" d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z" />
              </svg>
            </a>
          </div>
          <div class="site-branding pr-md-4">
            <a href="index.html" class="d-block mb-1">
              <img width="50%" src="https://i0.wp.com/halfpricedbooks.co.ke/wp-content/uploads/2021/06/cropped-cropped-cropped-Logo-1.jpeg?fit=83%2C75&amp;ssl=1">
            </a>
          </div>
          <div class="site-navigation mr-auto d-none d-xl-block">
            <ul class="nav">
              <li class="nav-item active">
                <a @click="goToHome" class="nav-link link-black-100 mx-4 px-0 py-5 active font-weight-medium d-flex align-items-center ">
                  Home
                </a>

              </li>
              <!--<li class="nav-item"><a href="categories.html" class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">Categories</a></li>-->
              <li class="nav-item dropdown">
                <a id="shopDropdownInvoker" @click="goToShop" class="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#shopDropdownMenu" data-unfold-type="css-animation" data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                  Shop
                </a>
                <ul id="shopDropdownMenu" class="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900" aria-labelledby="shopDropdownInvoker">
                  <li><a @click="goToCart" class="dropdown-item link-black-100">Shop cart</a></li>

                </ul>
              </li>
              <li class="nav-item"><a @click="goToAbout" class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">About Us</a></li>

              <li class="nav-item"><a @click="goToContact" class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium border-bottom border-primary border-width-2">Contact Us</a></li>
            </ul>
          </div>
          <ul class="d-md-none nav mr-md-n3 ml-auto">
            <li class="nav-item">

              <a id="sidebarNavToggler9" href="javascript:;" role="button" class="px-2 nav-link link-black-100" aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9" data-unfold-type="css-animation" data-unfold-overlay='{
                                    "className": "u-sidebar-bg-overlay",
                                    "background": "rgba(0, 0, 0, .7)",
                                    "animationSpeed": 500
                                }' data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
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
                <input class="form-control bg-white-100 min-width-380 py-2d75 height-4 border-white-100" type="search" placeholder="Search for Books" aria-label="Search">
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
            <button type="button" class="close ml-auto" aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
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
            <button type="button" class="close ml-auto" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
              <span aria-hidden="true">Close <i class="fas fa-times ml-2"></i></span>
            </button>
          </div>


          <div class="js-scrollbar u-sidebar__body">
            <div class="u-sidebar__content u-header-sidebar__content">
              <form class="">

                <div id="login" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i class="flaticon-user mr-3 font-size-5"></i>Account</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel" class="form-label" for="signinEmail">Username or email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail" placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com" aria-describedby="signinEmailLabel" required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinPasswordLabel" class="form-label" for="signinPassword">Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="password" id="signinPassword" placeholder="" aria-label="" aria-describedby="signinPasswordLabel" required>
                      </div>
                    </div>

                    <div class="d-flex justify-content-between mb-5 align-items-center">

                      <div class="js-form-message">
                        <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                          <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" required>
                          <label class="custom-control-label" for="termsCheckbox">
<span class="font-size-2 text-secondary-gray-700">
Remember me
</span>
                          </label>
                        </div>
                      </div>

                      <a class="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium" href="javascript:;" data-target="#forgotPassword" data-link-group="idForm" data-animation-in="fadeIn">Forgot Password?</a>
                    </div>
                    <div class="mb-4d75">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Sign In</button>
                    </div>
                    <div class="mb-2">
                      <a href="javascript:;" class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium" data-target="#signup" data-link-group="idForm" data-animation-in="fadeIn">Create Account</a>
                    </div>
                  </div>
                </div>

                <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i class="flaticon-resume mr-3 font-size-5"></i>Create Account</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel1" class="form-label" for="signinEmail1">Email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail1" placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com" aria-describedby="signinEmailLabel1" required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinPasswordLabel1" class="form-label" for="signinPassword1">Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="password" id="signinPassword1" placeholder="" aria-label="" aria-describedby="signinPasswordLabel1" required>
                      </div>
                    </div>


                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signupConfirmPasswordLabel" class="form-label" for="signupConfirmPassword">Confirm Password *</label>
                        <input type="password" class="form-control rounded-0 height-4 px-4" name="confirmPassword" id="signupConfirmPassword" placeholder="" aria-label="" aria-describedby="signupConfirmPasswordLabel" required>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Create Account</button>
                    </div>
                    <div class="text-center mb-4">
                      <span class="small text-muted">Already have an account?</span>
                      <a class="js-animation-link small" href="javascript:;" data-target="#login" data-link-group="idForm" data-animation-in="fadeIn">Login
                      </a>
                    </div>
                  </div>
                </div>


                <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">

                  <header class="border-bottom px-4 px-md-6 py-4">
                    <h2 class="font-size-3 mb-0 d-flex align-items-center"><i class="flaticon-question mr-3 font-size-5"></i>Forgot Password?</h2>
                  </header>

                  <div class="p-4 p-md-6">

                    <div class="form-group mb-4">
                      <div class="js-form-message js-focus-state">
                        <label id="signinEmailLabel3" class="form-label" for="signinEmail3">Email *</label>
                        <input type="email" class="form-control rounded-0 height-4 px-4" name="email" id="signinEmail3" placeholder="creativelayers088@gmail.com" aria-label="creativelayers088@gmail.com" aria-describedby="signinEmailLabel3" required>
                      </div>
                    </div>

                    <div class="mb-3">
                      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">Recover Password</button>
                    </div>
                    <div class="text-center mb-4">
                      <span class="small text-muted">Remember your password?</span>
                      <a class="js-animation-link small" href="javascript:;" data-target="#login" data-link-group="idForm" data-animation-in="fadeIn">Login
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
            <button type="button" class="close ml-auto" aria-controls="sidebarContent1" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent1" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
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
                  <a href="" class="d-block"><img :src=book.image class="img-fluid" width="120" height="183"
                                                  alt="image-description"></a>


                  <!--                  <div class="media-body ml-4d875">-->
                  <!--                    <div class="text-primary text-uppercase font-size-1 mb-1 text-truncate"><a href="">Hard-->
                  <!--                      Cover</a></div>-->

                  <!--                    <h2 class="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2">-->
                  <!--                      <a href="" class="text-dark">{{-->
                  <!--                          book.title-->
                  <!--                        }}</a>-->
                  <!--                    </h2>-->
                  <!--                    <div class="font-size-2 mb-1 text-truncate"><a href="" class="text-gray-700">-->
                  <!--                      {{ book.author }}</a></div>-->
                  <!--                    <div class="price d-flex align-items-center font-weight-medium font-size-3">-->
                  <!--                      <span class="woocommerce-Price-amount amount">{{ book.quantity }} x <span-->
                  <!--                          class="woocommerce-Price-currencySymbol">Ksh </span>{{ book.price }}</span>-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                  <div class="media-body ml-3 woocommerce-mini-cart-item__content">
                    <div class="text-primary text-uppercase font-size-1 mb-1 text-truncate">
                      <a href="">{{ book.category }}</a></div>
                    <h2 class="woocommerce-loop-product__title h6 ">
                      <p href="">
                        {{ book.name }} </p>
                    </h2>
                    <div class="font-size-2 mb-1 text-truncate"><a href="" class="text-gray-700">
                      {{ book.author }}</a></div>
                    <span class="woocommerce-Price-amount amount">
                                    {{ book.quantity }} ×
                    <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">KSh</span>&nbsp;{{ book.price }}</span>
                  </span>
                  </div>



                  <div class="mt-3 ml-3">
                    <a href="" class="text-dark"><i @click="removeProductFromCart(book)" class="fas fa-times"></i></a>
                  </div>
                </div>
              </div>
              <div class="px-4 py-5 px-md-6 d-flex justify-content-between align-items-center font-size-3">
                <h4 class="mb-0 font-size-3">Subtotal:</h4>
                <div class="font-weight-medium"> Ksh {{ subtotal }}</div>
              </div>
              <div class="px-4 mb-8 px-md-6">
                <button @click="router.push({name: 'halfprice_cart'})" type="submit" class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4">View Cart</button>
                <button type="submit" class="btn btn-block py-4 rounded-0 btn-dark"
                        @click="router.push({ name: 'halfprice_checkout', params: { books_in_cart,books} })">Checkout
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
                    <li class="has-submenu" v-for="(category,index) in categories" :key="index">
                      <a href="#" data-submenu="off-pages">{{ category.name }}</a>

                    </li>


                  </ul>
                </div>
              </div>

            </div>
          </div>>

        </div>
      </div>
    </div>
  </aside>



  <main id="content">
    <div class="py-3 py-lg-7">
      <h6 class="font-weight-medium font-size-7 text-center my-1">Contact Us</h6>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819095872331!2d36.81972411426504!3d-1.2823354990646956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11c24baf9073%3A0x1b05ff0d7499371a!2sHalf%20Priced%20Books!5e0!3m2!1sen!2ske!4v1649325124452!5m2!1sen!2ske" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="container">
      <div class="space-bottom-1 space-bottom-lg-2">
        <div class="pb-4">
          <div class="col-lg-8 mx-auto">
            <div class="bg-white mt-n10 mt-md-n13 pt-5 pt-lg-7 px-3 px-md-5 pl-xl-10 pr-xl-3">
              <div class="ml-xl-4">
                <div class="mb-4 mb-lg-7">
                  <h6 class="font-weight medium font-size-10 mb-4 mb-lg-7">Contact Information</h6>
                  <p class="font-weight-medium font-italic">We will answer any questions you may have about our online sales, rights or partnership service right here.
                  </p>
                </div>
                <div class="mb-4 mb-lg-8">
                  <div class="row">
                    <div class="col-md-4">
                      <h6 class="font-weight-medium font-size-4 mb-4">CBD Branch</h6>
                      <address class="font-size-2 mb-5">
<span class="mb-2 font-weight-normal text-dark">
BIHI Towers, Moi Avenue,2nd Flr Shop No.5, <br> Nairobi, Kenya
</span>
                      </address>
                      <div>
                        <a href="mailto:halfpricebooks2019@gmail.com" class="font-size-2 d-block link-black-100 mb-1">halfpricebooks2019@gmail.com
                        </a>
                        <a href="tel:+254 703 647424" class="font-size-2 d-block link-black-100">+254 703 647424</a>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <h6 class="font-weight-medium font-size-4 mb-4">Lavington Mall</h6>
                      <address class="font-size-2 mb-5">
<span class="mb-2 font-weight-normal text-dark">
Lavington Mall, James Gichuru Road, Lavington, <br> Nairobi, Kenya
</span>
                      </address>
                      <div>
                        <a href="mailto:halfpricebooks2019@gmail.com" class="font-size-2 d-block link-black-100 mb-1">halfpricebooks2019@gmail.com</a>
                        <a href="tel:+254 703 647424" class="font-size-2 d-block link-black-100">+254 703 647424</a>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <h6 class="font-weight-medium font-size-4 mb-4">Village Market</h6>
                      <address class="font-size-2 mb-5">
<span class="mb-2 font-weight-normal text-dark">
Limuru Road, Village Market, New Wing, Nairobi, Kenya
</span>
                      </address>
                      <div>
                        <a href="mailto:halfpricebooks2019@gmail.com" class="font-size-2 d-block link-black-100 mb-1">halfpricebooks2019@gmail.com</a>
                        <a href="tel:+254 703 647424" class="font-size-2 d-block link-black-100">+254 703 647424</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-5 mb-xl-9 pb-xl-1">
                  <h6 class="font-size-4 font-weight-medium">Social Media</h6>
                  <ul class="list-unstyled mb-0 d-flex">
                    <li class="btn pl-0">
                      <a class="link-black-100" href="contact.html#">
                        <span class="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li class="btn">
                      <a class="link-black-100" href="contact.html#">
                        <span class="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li class="btn">
                      <a class="link-black-100" href="contact.html#">
                        <span class="fab fa-youtube"></span>
                      </a>
                    </li>
                    <li class="btn">
                      <a class="link-black-100" href="contact.html#">
                        <span class="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li class="btn">
                      <a class="link-black-100" href="contact.html#">
                        <span class="fab fa-pinterest"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 class="font-weight-medium font-size-10 mb-3 pb-xl-1">Get In Touch</h6>
                  <form class="js-validate" novalidate="novalidate">
                    <div class="row">

                      <div class="col-sm-6 mb-5">
                        <div class="js-form-message">
                          <label for="exampleFormControlInput1">Name</label>
                          <input id="exampleFormControlInput1" type="text" class="form-control rounded-0" name="name" aria-label="Jack Wayley" required="" data-error-class="u-has-error" data-msg="Please enter your name." data-success-class="u-has-success">
                        </div>
                      </div>


                      <div class="col-sm-6 mb-5">
                        <div class="js-form-message">
                          <label for="exampleFormControlInput2">Email</label>
                          <input id="exampleFormControlInput2" type="email" class="form-control rounded-0" name="email" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success">
                        </div>
                      </div>

                      <div class="col-sm-12 mb-5">
                        <div class="js-form-message">
                          <label for="exampleFormControlInput3">Subject</label>
                          <input id="exampleFormControlInput3" type="email" class="form-control rounded-0" name="email" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success">
                        </div>
                      </div>
                      <div class="col-sm-12 mb-5">
                        <div class="js-form-message">
                          <div class="input-group flex-column">
                            <label for="exampleFormControlInput4">Details please! Your review helps other shoppers.</label>
                            <textarea id="exampleFormControlInput4" class="form-control rounded-0 pl-3 font-size-2 placeholder-color-3" rows="6" cols="77" name="text" placeholder="What did you like or dislike? What should other shoppers know before buying?" aria-label="Hi there, I would like to ..." required="" data-msg="Please enter a reason." data-error-class="u-has-error" data-success-class="u-has-success"></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="col d-flex justify-content-lg-start">
                        <button type="submit" class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60">Sumbit Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

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
                  <img src="https://i0.wp.com/halfpricedbooks.co.ke/wp-content/uploads/2021/06/cropped-cropped-cropped-Logo-1.jpeg?fit=83%2C75&amp;ssl=1">
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
                <option value="one" selected>Ksh  USD</option>
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
import {onMounted, ref, defineComponent, computed} from "vue";
import CategoriesService from "../services/categories.service";
import {useStore} from 'vuex'
import BooksService from "@/services/books.service";
import Shop from "./halfprice_shop"


export default defineComponent({
  props: ['reload'],

  components : {
    Shop,
  },
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
      $("#notification-modal").modal('show')
      setTimeout(hideNotification, 1500)
    }
    const hideNotification = () => {
      $("#notification-modal").modal('hide')
    }
    const books_in_cart = computed(() =>
        store.getters.getTotalCartItems
    )

    const removeFromCart = (book) => {
      store.commit('REMOVE_FROM_CART', book)
    }
    const removeProductFromCart = (book) => {
      store.commit('REMOVE_PRODUCT_FROM_CART', book)
    }
    const totalProducts = ref()
    const searchProducts = ref()
    const fetchBooks = async () => {
      BooksService.fetchBooks().then(response => {
        console.log(response.data)
        products.value = response.data
        searchProducts.value = products.value
        totalProducts.value = products.value.length
        console.log(products.value)
        let newProducts = products.value.forEach(product =>
            product.quantity = 0
        )
        console.log(newProducts, "why?")
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
    const search_term = ref()
    const searching = ref(false)
    const totalSearchProducts = ref()
    const search = () => {
      store.commit('GET_SEARCH_TERM', search_term.value)
      router.push('/halfprice_shop')

    }

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
      removeProductFromCart,
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
      searching,
      search_term,
      totalSearchProducts,
      search,
      totalProducts,
      searchProducts,

    }
  }
})
</script>