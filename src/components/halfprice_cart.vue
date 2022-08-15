<template>
  <body class="right-sidebar woocommerce-cart">
  <div id="payment-modal" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl" style="width: 800px;height: 260px ">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="mr-auto" style="font-size: 20px;">Make Payment</h2>
        </div>
        <div class="modal-body ">
          <iframe
              :src="iframe_url"
              width="100%"
              height="250px"
              scrolling="yes"
              frameBorder="0"
          >
            <p>Browser unable to load iFrame</p>
          </iframe>
        </div>
        <div class="modal-footer text-right">
          <button
              type="button"
              class="btn w-48"
              @click="closeModal"
          >
            Cancel
          </button>
          <span class="ml-2"></span>
          <button
              type="button"
              class="btn btn-primary w-48"
              style="background-color: #0c5460"
              @click="completePayment"
          >
            Complete Payment
          </button>
        </div>

      </div>
    </div>
  </div>
  <header id="site-header" class="site-header__v1">
    <div class="topbar border-bottom d-none d-md-block">
      <div class="container-fluid px-2 px-md-5 px-xl-8d75">
        <div class="topbar__nav d-md-flex justify-content-between align-items-center">
          <ul class="topbar__nav--left nav ml-md-n3">
            <li class="nav-item"><a  class="nav-link link-black-100"><i
                class="glph-icon flaticon-question mr-2"></i>Can we help you?</a></li>
            <li class="nav-item"><a href="tel:+1246-345-0695" class="nav-link link-black-100"><i
                class="glph-icon flaticon-phone mr-2"></i>+254 703 647424</a></li>
          </ul>
          <ul class="topbar__nav--right nav mr-md-n3">
            <li class="nav-item"><a  class="nav-link link-black-100"><i
                class="glph-icon flaticon-pin"></i></a></li>
            <li class="nav-item"><a  class="nav-link link-black-100"><i
                class="glph-icon flaticon-switch"></i></a></li>
            <li class="nav-item"><a  class="nav-link link-black-100"><i
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
                    total_cart_items
                  }}</span>
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
              <img width="50%" src="https://i0.wp.com/halfpricedbooks.co.ke/wp-content/uploads/2021/06/cropped-cropped-cropped-Logo-1.jpeg?fit=83%2C75&amp;ssl=1">
            </a>
          </div>
          <div class="site-navigation mr-auto d-none d-xl-block">
            <ul class="nav">

              <li @click="goToHome" class="nav-item active">
                <a class="nav-link link-black-100 mx-4 px-0 py-5 active font-weight-medium d-flex align-items-center border-bottom border-primary border-width-2">
                  Home
                </a>

              </li>

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
                    class="flaticon-icon-126515 mr-3 font-size-5"></i>Your shopping bag ({{ total_cart_items }})</h2>
              </header>


              <div v-if="total_cart_items">
                <div class="px-4 py-5 px-md-6 border-bottom" v-for="book in books" :key="book.id">
                  <div class="media">
                    <a href="" class="d-block"><img :src=book.image class="img-fluid" width="120" height="183"
                                                    alt="image-description"></a>

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
                    <span class="woocommerce-Price-currencySymbol">Ksh </span>&nbsp;{{ book.price }}</span>
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
                  <button @click="router.push({name: 'halfprice_cart'})" type="submit"
                          class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4">View Cart
                  </button>
                  <button type="submit" class="btn btn-block py-4 rounded-0 btn-dark"
                          @click="router.push({ name: 'halfprice_checkout', params: { books_in_cart,books} })">Checkout
                  </button>
                </div>
              </div>
              <div v-else >
                <div class="woocommerce-mini-cart__empty-message pt-2 text-center">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACcCAIAAAB3FTesAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDBDQzcwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMDBDQzgwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkIwRDVENDBFMEYxMUVBOUM3QkM1MDNFRTIzMjEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzEwMENDNjBFMTIxMUVBOUM3QkM1MDNFRTIzMjEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk3kXrQAABTwSURBVHja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" width="40" class="d-inline-block mb-2" alt="Empty cart">
                  <p class="text-muted font-size-sm mb-0">No products in the cart.</p>
                </div>
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
          </div>

        </div>
      </div>
    </div>
  </aside>


  <div class="page-header border-bottom">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center py-4">
        <h1 class="page-title font-size-3 font-weight-medium m-0 text-lh-lg">Checkout</h1>
        <nav class="woocommerce-breadcrumb font-size-2">
          <a  class="h-primary">Home</a>
          <span class="breadcrumb-separator mx-1"><i class="fas fa-angle-right"></i></span>
          <a  class="h-primary">Shop</a>
          <span class="breadcrumb-separator mx-1"><i class="fas fa-angle-right"></i></span>Cart
        </nav>
      </div>
    </div>
  </div>
  <div class="site-content bg-punch-light overflow-hidden" id="content">
    <div class="container">
      <header class="entry-header space-top-2 space-bottom-1 mb-2">
        <h1 class="entry-title font-size-7">Your cart: {{ total_cart_items }} items</h1>
      </header>
      <div class="row pb-8">
        <div id="primary" class="content-area">
          <main id="main" class="site-main ">
            <div class="page type-page status-publish hentry">

              <div class="entry-content">
                <div class="woocommerce">
                  <form class="woocommerce-cart-form table-responsive">
                    <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                      <thead>
                      <tr>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Total</th>
                        <th class="product-remove">&nbsp;</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr class="woocommerce-cart-form__cart-item cart_item" v-for="book in books" :key="book.id">
                        <td class="product-name" data-title="Product">
                          <div class="d-flex align-items-center">
                            <a >
                              <img :src="book.image"
                                   class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" width="120" height="182" alt="">
                            </a>
                            <div class="ml-3 m-w-200-lg-down">
                              <a href="">{{ book.title }} </a>
                              <a href="" class="text-gray-700 font-size-2 d-block" tabindex="0">{{ book.author }}</a>
                            </div>
                          </div>
                        </td>
                        <td class="product-price" data-title="Price">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">Ksh </span>{{ book.price }}</span>
                        </td>
                        <td class="product-quantity" data-title="Quantity">
                          <div class="quantity d-flex align-items-center">

                            <div class="border px-3 width-120">
                              <div class="js-quantity">
                                <div class="d-flex align-items-center">
                                  <label class="screen-reader-text sr-only">Quantity</label>
                                  <a @click="decreaseBookQuantity(book)" class="js-minus text-dark" href="javascript:;">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         width="10px" height="1px">
                                      <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                                            d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"/>
                                    </svg>
                                  </a>
                                  <input type="number"
                                         class="input-text qty text js-result form-control text-center border-0"
                                         step="1" min="1" max="100" name="quantity" v-model="book.quantity" title="Qty">
                                  <a @click="increaseBookQuantity(book)" class="js-plus text-dark" href="javascript:;">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                         width="10px" height="10px">
                                      <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                                            d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"/>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </td>
                        <td class="product-subtotal" data-title="Total">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">Ksh </span>{{ book.quantity * book.price }}</span>
                        </td>
                        <td class="product-remove">
                          <a  class="remove" aria-label="Remove this item">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="15px" height="15px">
                              <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                                    d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z"/>
                            </svg>
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td colspan="5" class="actions">

                          <button @click="clearCart"  value="Clear cart" > Clear cart</button>
                          <input type="hidden" id="_wpnonce" name="_wpnonce" value="db025d7a70"><input type="hidden"
                                                                                                       name="_wp_http_referer"
                                                                                                       value="/storefront/cart/">
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>

            </div>
          </main>
        </div>
        <div id="secondary" class="sidebar cart-collaterals order-1" role="complementary">
          <div id="cartAccordion" class="border border-gray-900 bg-white mb-5">
            <div class="p-4d875 border">
              <div id="cartHeadingOne" class="cart-head">
                <a class="d-flex align-items-center justify-content-between text-dark" 
                   data-toggle="collapse" data-target="#cartCollapseOne" aria-expanded="true"
                   aria-controls="cartCollapseOne">
                  <h3 class="cart-title mb-0 font-weight-medium font-size-3">Cart Totals</h3>
                  <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="2px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"/>
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="15px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"/>
                  </svg>
                </a>
              </div>
              <div id="cartCollapseOne" class="mt-4 cart-content collapse show" aria-labelledby="cartHeadingOne"
                   data-parent="#cartAccordion">
                <table class="shop_table shop_table_responsive">
                  <tbody>
                  <tr class="cart-subtotal">
                    <th>Subtotal</th>
                    <td data-title="Subtotal"><span class="woocommerce-Price-amount amount"><span
                        class="woocommerce-Price-currencySymbol">Ksh </span>{{ subtotal }}</span></td>
                  </tr>
                  <tr class="order-shipping">
                    <th>Shipping</th>
                    <td data-title="Shipping">Free Shipping</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="p-4d875 border">
              <div id="cartHeadingTwo" class="cart-head">
                <a class="d-flex align-items-center justify-content-between text-dark" 
                   data-toggle="collapse" data-target="#cartCollapseTwo" aria-expanded="true"
                   aria-controls="cartCollapseTwo">
                  <h3 class="cart-title mb-0 font-weight-medium font-size-3">Shipping</h3>
                  <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="2px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"/>
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="15px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"/>
                  </svg>
                </a>
              </div>
              <div id="cartCollapseTwo" class="mt-4 cart-content collapse show" aria-labelledby="cartHeadingTwo"
                   data-parent="#cartAccordion">

                <ul id="shipping_method">
                  <li>
                    <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate1"
                           value="flat_rate:1" class="shipping_method">
                    <label for="shipping_method_0_flat_rate1">Free shipping</label>
                  </li>
                  <li>
                    <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate2"
                           value="flat_rate:2" class="shipping_method" checked="checked">
                    <label for="shipping_method_0_flat_rate2">Flat rate: <span
                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>15</span></label>
                  </li>
                  <li>
                    <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate3"
                           value="flat_rate:2" class="shipping_method" checked="checked">
                    <label for="shipping_method_0_flat_rate3">Local pickup:: <span
                        class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>8</span></label>
                  </li>
                </ul>

                <span class="font-size-2">Shipping to Turkey.</span><a 
                                                                       class="font-weight-medium h-primary ml-3 font-size-2">Change
                Address</a>
              </div>
            </div>
            <div class="p-4d875 border">
              <div id="cartHeadingThree" class="cart-head">
                <a class="d-flex align-items-center justify-content-between text-dark" 
                   data-toggle="collapse" data-target="#cartCollapseThree" aria-expanded="true"
                   aria-controls="cartCollapseThree">
                  <h3 class="cart-title mb-0 font-weight-medium font-size-3">Coupon</h3>
                  <svg class="mins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="2px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"/>
                  </svg>
                  <svg class="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       width="15px" height="15px">
                    <path fill-rule="evenodd" fill="rgb(22, 22, 25)"
                          d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"/>
                  </svg>
                </a>
              </div>
              <div id="cartCollapseThree" class="mt-4 cart-content collapse show" aria-labelledby="cartHeadingThree"
                   data-parent="#cartAccordion">
                <div class="coupon">
                  <label for="coupon_code">Coupon:</label>
                  <input type="text" name="coupon_code" class="input-text" id="coupon_code" value=""
                         placeholder="Coupon code" autocomplete="off">
                  <input type="submit" class="button" name="apply_coupon" value="Apply coupon">
                </div>
              </div>
            </div>
            <div class="p-4d875 border">
              <table class="shop_table shop_table_responsive">
                <tbody>
                <tr class="order-total">
                  <th>Total</th>
                  <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><span
                      class="woocommerce-Price-currencySymbol">Ksh </span>{{ subtotal }}</span></strong></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div @click="goToCheckout" class="wc-proceed-to-checkout">
            <button class="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4">Proceed to
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


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
import {useStore} from "vuex";
import {defineComponent, computed, reactive, ref, onMounted} from "vue";
import {useRouter} from "vue-router";


export default defineComponent({
  setup() {
    // const cart_items = computed(()=> {
    //   return props.books_in_cart
    // })
    const store = useStore()
    const showing = ref(false)
    const router = useRouter()
    const formData = reactive({

      Amount: 0,
      Remarks: '',
      TransactionDesc: '',
      AccountReference: ''
    })
    const iframe_url = ref("")
    const makePayment = () => {
      formData.Amount = subtotal.value
      formData.Remarks = "cart items"
      formData.TransactionDesc = "asdf"
      formData.reference = "cart items"

      const base64 = btoa(JSON.stringify(formData));
      console.log("base64");
      console.log("base64", base64);
      console.log("Amount : ", formData.Amount)
      console.log("Remarks : ", formData.Remarks)
      console.log("TransactionDesc : ", formData.TransactionDesc)
      console.log("AccountReference : ", formData.reference)


      iframe_url.value = "https://swypepay.io/terra/#/iframe/" + base64;
      showing.value = true

      $('#payment-modal').modal('show')

    }

    const books = computed(() =>
        store.getters.getCartItems
    )
    const total_cart_items = computed(() =>
        store.getters.getTotalCartItems
    )
    const clearCart = () => {
      store.commit('CLEAR_CART')
    }
    const subtotal = computed(() =>
        store.getters.getTotalCost)
    const closeModal = () => {

      $('#payment-modal').modal('hide');

      // cash("#payment-modal").modal("hide");
    }
    const completePayment = () => {
      makePayment()
      $('#payment-modal').modal('hide');

    }

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
    const goToCheckout = () => {
      router.push("/halfprice_checkout")
    }
    const increaseBookQuantity = (book) => {
      book.quantity ++
      store.commit('ADD_TO_CART', book)

    }
    const decreaseBookQuantity = (book) => {
      book.quantity --
      store.commit('ADD_TO_CART', book)

    }
    onMounted( ()=> {
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
      }
    })
    return {
      store,
      router,
      total_cart_items,
      subtotal,
      closeModal,
      makePayment,
      completePayment,
      iframe_url,
      books,
      showing,
      goToHome,
      goToShop,
      goToCart,
      goToAbout,
      goToContact,
      goToCheckout,
      increaseBookQuantity,
      decreaseBookQuantity,
      clearCart,

    }
  }


})

</script>