<template>
  <body class="left-sidebar">

  <header id="site-header" class="site-header__v1">
    <div id="notification-modal" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content">

          <div class="modal-body ">
            <div class=" " style="font-size: 15px">
              successfully added to cart
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="topbar border-bottom d-none d-md-block">
      <div class="container-fluid px-2 px-md-5 px-xl-8d75">
        <div class="topbar__nav d-md-flex justify-content-between align-items-center">
          <ul class="topbar__nav--left nav ml-md-n3">
            <li class="nav-item"><a href="#" class="nav-link link-black-100"><i
                class="glph-icon flaticon-question mr-2"></i>Can we help you?</a></li>
            <li class="nav-item"><a href="tel:+1246-345-0695" class="nav-link link-black-100"><i
                class="glph-icon flaticon-phone mr-2"></i>+254 703 647424</a></li>
          </ul>
          <ul class="topbar__nav--right nav mr-md-n3">
            <li class="nav-item"><a href="#" class="nav-link link-black-100"><i class="glph-icon flaticon-pin"></i></a>
            </li>
            <li class="nav-item"><a href="#" class="nav-link link-black-100"><i
                class="glph-icon flaticon-switch"></i></a></li>
            <li class="nav-item"><a href="#" class="nav-link link-black-100"><i
                class="glph-icon flaticon-heart"></i></a></li>
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
            <a href="" class="d-block mb-1">
              <img width="50%" src="https://i0.wp.com/halfpricedbooks.co.ke/wp-content/uploads/2021/06/cropped-cropped-cropped-Logo-1.jpeg?fit=83%2C75&amp;ssl=1">
            </a>
          </div>
          <div class="site-navigation mr-auto d-none d-xl-block">
            <ul class="nav">
              <li class="nav-item active">
                <a @click="goToHome"
                   class="nav-link link-black-100 mx-4 px-0 py-5 active font-weight-medium d-flex align-items-center ">
                  Home
                </a>

              </li>
              <!--<li class="nav-item"><a href="categories.html" class="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium">Categories</a></li>-->
              <li class="nav-item dropdown">
                <a id="shopDropdownInvoker"
                   class="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center border-bottom border-primary border-width-2"
                   aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
                   data-unfold-target="#shopDropdownMenu" data-unfold-type="css-animation" data-unfold-duration="200"
                   data-unfold-delay="50" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp"
                   data-unfold-animation-out="fadeOut">
                  Shop
                </a>
                <ul id="shopDropdownMenu" class="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900"
                    aria-labelledby="shopDropdownInvoker">
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
                </div>

                <input v-model="search_term"
                       class="form-control bg-white-100 min-width-380 py-2d75 height-4 border-white-100" type="search"
                       placeholder="Search for Books" aria-label="Search">
                <i @click="search(search_term)"
                   class="glph-icon flaticon-loupe input-group-text py-2d75 border-gray-800"></i>
              </div>
              <button class="btn btn-success my-2 my-sm-0 sr-only">Search</button>
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

            <div v-if="books_in_cart">
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


  <div class="page-header border-bottom mb-8">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center py-4">
        <nav class="woocommerce-breadcrumb font-size-2">
          <a href="/" class="h-primary">Home</a>
          <span class="breadcrumb-separator mx-1"><i class="fas fa-angle-right"></i></span>
          <a href="" class="h-primary">Shop</a>
          <span v-if="searching" class="breadcrumb-separator mx-1"><i class="fas fa-angle-right"></i></span>
          <a v-if="searching" href="" class="h-primary">Search results for "{{search_term}}"</a>
        </nav>
      </div>
    </div>
  </div>
  <div class="site-content space-bottom-3" id="content">
    <div class="container">
      <div class="row">
        <div id="primary" class="content-area order-2">
          <div
              class="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left">
            <div class="shop-control-bar__left mb-4 m-lg-0">
              <p v-if="searching" class="woocommerce-result-count m-0">Showing 1 – {{ totalSearchProducts }} of
                {{ totalSearchProducts }} results</p>
              <p v-else class="woocommerce-result-count m-0">Showing 1 – {{ totalProducts }} of {{ totalProducts }}
                results</p>
            </div>
            <div class="shop-control-bar__right d-md-flex align-items-center">
              <form class="woocommerce-ordering mb-4 m-md-0" method="get">

                <select @change="changeFilterOptions" class="js-select selectpicker dropdown-select orderby" name="orderby"
                        data-style="border-bottom shadow-none outline-none py-2">
                  <option value="default" selected="selected">Default sorting</option>
                  <option value="new">Sort by newness</option>
                  <option value="low"  > <a > Sort by price: low to high </a> </option>
                  <option value="high"  > <a > Sort by price: high to low </a> </option>
                </select>

              </form>
<!--              <form class="number-of-items ml-md-4 mb-4 m-md-0 d-none d-xl-block" method="get">-->

<!--                <select class="js-select selectpicker dropdown-select orderby" name="orderby"-->
<!--                        data-style="border-bottom shadow-none outline-none py-2" data-width="fit">-->
<!--                  <option value="show10">Show 10</option>-->
<!--                  <option value="show15">Show 15</option>-->
<!--                  <option value="show20" selected="selected">Show 20</option>-->
<!--                  <option value="show25">Show 25</option>-->
<!--                  <option value="show30">Show 30</option>-->
<!--                </select>-->

<!--              </form>-->
              <ul class="nav nav-tab ml-lg-4 justify-content-center justify-content-md-start ml-md-auto" id="pills-tab"
                  role="tablist">
                <li class="nav-item border">
                  <a class="nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center active"
                     id="pills-one-example1-tab" data-toggle="pill" href="v1.html#pills-one-example1" role="tab"
                     aria-controls="pills-one-example1" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px"
                         height="17px">
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,0.000 L3.000,0.000 L3.000,3.000 L-0.000,3.000 L-0.000,0.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,0.000 L10.000,0.000 L10.000,3.000 L7.000,3.000 L7.000,0.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M14.000,0.000 L17.000,0.000 L17.000,3.000 L14.000,3.000 L14.000,0.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,7.000 L3.000,7.000 L3.000,10.000 L-0.000,10.000 L-0.000,7.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,7.000 L10.000,7.000 L10.000,10.000 L7.000,10.000 L7.000,7.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M14.000,7.000 L17.000,7.000 L17.000,10.000 L14.000,10.000 L14.000,7.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,14.000 L3.000,14.000 L3.000,17.000 L-0.000,17.000 L-0.000,14.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,14.000 L10.000,14.000 L10.000,17.000 L7.000,17.000 L7.000,14.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M14.000,14.000 L17.000,14.000 L17.000,17.000 L14.000,17.000 L14.000,14.000 Z"/>
                    </svg>
                  </a>
                </li>
                <li class="nav-item border">
                  <a class="nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center"
                     id="pills-two-example1-tab" data-toggle="pill" href="v1.html#pills-two-example1" role="tab"
                     aria-controls="pills-two-example1" aria-selected="false">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px"
                         height="17px">
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,0.000 L3.000,0.000 L3.000,3.000 L-0.000,3.000 L-0.000,0.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,0.000 L23.000,0.000 L23.000,3.000 L7.000,3.000 L7.000,0.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,7.000 L3.000,7.000 L3.000,10.000 L-0.000,10.000 L-0.000,7.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,7.000 L23.000,7.000 L23.000,10.000 L7.000,10.000 L7.000,7.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M-0.000,14.000 L3.000,14.000 L3.000,17.000 L-0.000,17.000 L-0.000,14.000 Z"/>
                      <path fill-rule="evenodd" fill="rgb(25, 17, 11)"
                            d="M7.000,14.000 L23.000,14.000 L23.000,17.000 L7.000,17.000 L7.000,14.000 Z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-one-example1" role="tabpanel"
                 aria-labelledby="pills-one-example1-tab">

              <ul class="products list-unstyled row no-gutters row-cols-2 row-cols-lg-4 row-cols-wd-4 border-top border-left mb-6">
                <li class="product col" v-for="product in searchProducts" :key="product.id">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                      <div class="woocommerce-loop-product__thumbnail">
                        <a class="d-block"><img :src=product.image
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="woocommerce-loop-product__body product__body pt-3 bg-white">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md  text-height-2 crop-text-2 h-dark">
                          <a>{{ product.name }}</a></h2>
                        <div class="font-size-2  mb-1 text-truncate"><a href="" class="text-gray-700">{{
                            product.author
                          }}</a></div>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>{{ product.price }}</span>
                        </div>
                      </div>
                      <div class="product__hover d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <a class="mr-1 h-p-bg btn btn-outline-primary border-0"><i @click="addToCart(product)"
                                                                                     class="flaticon-icon-126515"></i></a>
                        </a>

                      </div>
                    </div>
                  </div>
                </li>

              </ul>

            </div>
            <div class="tab-pane fade" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab">

              <ul class="products list-unstyled mb-6">
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">The Overdue Life of Amy Byler</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">All You Can Ever Know: A Memoir</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">The Cinderella Reversal</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">Scot Under the Covers: The Wild Wicked</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">Winter Garden</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="product product__list">
                  <div class="product__inner overflow-hidden p-3 p-md-4d875">
                    <div class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative">
                      <div class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0">
                        <a class="d-block"><img src="https://placehold.it/150x226"
                                                class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                                                alt="image-description"></a>
                      </div>
                      <div class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0">
                        <div class="text-uppercase font-size-1 mb-1 text-truncate"><a>Paperback</a></div>
                        <h2 class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark">
                          <a tabindex="0">Call Me By Your Name</a></h2>
                        <div class="font-size-2  mb-2 text-truncate"><a href="../others/authors-single.html"
                                                                        class="text-gray-700">Jay Shetty</a></div>
                        <p class="font-size-2 mb-2 crop-text-2">After disappearing for three years, Artemis Fowl has
                          returned to a life different from the one he left. And spends his days teaching his twin
                          siblings the</p>
                        <div class="price d-flex align-items-center font-weight-medium font-size-3">
                          <span class="woocommerce-Price-amount amount"><span
                              class="woocommerce-Price-currencySymbol">$</span>29</span>
                        </div>
                      </div>
                      <div class="col-md-auto d-flex align-items-center">
                        <a class="text-uppercase text-dark h-dark font-weight-medium mr-4" data-toggle="tooltip"
                           data-placement="right" title="" data-original-title="ADD TO CART">
                          <span class="product__add-to-cart">ADD TO CART</span>
                          <span class="product__add-to-cart-icon font-size-4"><i
                              class="flaticon-icon-126515"></i></span>
                        </a>
                        <a class="mr-1 h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-switch"></i>
                        </a>
                        <a class="h-p-bg btn btn-outline-primary border-0">
                          <i class="flaticon-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </div>
          </div>

          <!--          <nav aria-label="Page navigation example">-->
          <!--            <ul class="pagination pagination__custom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >Previous</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >1</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >2</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item active" aria-current="page"><a class="page-link" >3</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >4</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >5</a></li>-->
          <!--              <li class="flex-shrink-0 flex-md-shrink-1 page-item"><a class="page-link" >Next</a></li>-->
          <!--            </ul>-->
          <!--          </nav>-->
        </div>
        <div id="secondary" class="sidebar widget-area order-1" role="complementary">
          <div id="widgetAccordion">
            <div id="woocommerce_product_categories-2"
                 class="widget p-4d875 border woocommerce widget_product_categories">
              <div id="widgetHeadingOne" class="widget-head">
                <a class="d-flex align-items-center justify-content-between text-dark" data-toggle="collapse"
                   data-target="#widgetCollapseOne" aria-expanded="true" aria-controls="widgetCollapseOne">
                  <h3 class="widget-title mb-0 font-weight-medium font-size-3">Categories</h3>
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
              <div id="widgetCollapseOne" class="mt-3 widget-content collapse show" aria-labelledby="widgetHeadingOne"
                   data-parent="#widgetAccordion">
                <ul class="product-categories">
                  <li class="cat-item cat-item-9 cat-parent" v-for="category in categories" :key="category">
                    <a @click="getCategoryProducts(category)"> {{ category.name }}</a>

                  </li>

                </ul>
              </div>
            </div>

            <div id="woocommerce_price_filter-2" class="widget p-4d875 border woocommerce widget_price_filter">
              <div id="widgetHeadingTwo" class="widget-head">
                <a class="d-flex align-items-center justify-content-between text-dark" data-toggle="collapse"
                   data-target="#widgetCollapseTwo" aria-expanded="true" aria-controls="widgetCollapseTwo">
                  <h3 class="widget-title mb-0 font-weight-medium font-size-3">Filter by price</h3>
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
              <div id="widgetCollapseTwo" class="mt-4 widget-content collapse show" aria-labelledby="widgetHeadingTwo"
                   data-parent="#widgetAccordion">
                <form method="get" action="https://themes.woocommerce.com/storefront/shop/halfprice_shop.vue">
                  <div class="price_slider_wrapper">
                    <div class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                         style="">
                      <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
                      <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                            style="left: 0%;"></span><span class="ui-slider-handle ui-state-default ui-corner-all"
                                                           tabindex="0" style="left: 98%;"></span></div>
                    <div class="price_slider_amount">
                      <input type="text" id="min_price" name="min_price" value="2" data-min="2" placeholder="Min price"
                             style="display: none;">
                      <input type="text" id="max_price" name="max_price" value="1495" data-max="1495"
                             placeholder="Max price" style="display: none;">
                      <button type="submit" class="button d-none">Filter</button>
                      <div class="mx-auto price_label mt-2" style="">
                        Price: <span class="from">£2</span> — <span class="to">£1,495</span>
                      </div>
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
                <option value="one" selected>Ksh USD</option>
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
import {useRouter, useRoute} from 'vue-router'
import {onMounted, ref, defineComponent, computed, unref} from "vue";
import CategoriesService from "../services/categories.service";
import {useStore} from 'vuex'
import BooksService from "@/services/books.service";
import Home from "./halfprice_home"


export default defineComponent({
  name: 'Shop',
  props: ['home_search_term'],
  components: {
    Home,
  },
  setup: function () {

    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const products = ref()
    const searchProducts = ref()
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
    const totalProducts = ref()

    const fetchBooks = async () => {
      BooksService.fetchBooks().then(response => {
        console.log(response.data)
        products.value = response.data
        totalProducts.value = products.value.length
        searchProducts.value = response.data
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
    const changeFilterOptions = (event) => {
      filterOptions(event.target.value)

    }
    const filterOptions = (option) => {
      if(option == 'new'){
        searchProducts.value = products.value
        let filteredProducts = searchProducts.value.filter(product => product.status == "New")
        searchProducts.value = filteredProducts
        totalSearchProducts.value = searchProducts.value.length
      }
      if(option == 'high'){

        sortByPriceHighToLow()
      }
      if(option == 'low'){
        sortByPriceLowToHigh()
      }
    }
    const totalSearchProducts = ref()
    const books = computed(() =>
        store.getters.getCartItems)

    const subtotal = computed(() =>
        store.getters.getTotalCost
    )
    const removeProductFromCart = (book) => {
      store.commit('REMOVE_PRODUCT_FROM_CART', book)
    }

    const search_value = computed(() =>
        store.getters.getSearchTerm)

    const search_term = ref()
    const searching = ref(false)
    const searchFilter = () => {
      let searchTerm = computed(() => {
        store.getters.getSearchTerm
      })
      search(searchTerm)
    }

    const search = (search_term) => {

      searching.value = true

      searchProducts.value = products.value

      let filteredProducts = searchProducts.value.filter(product => {
        return product.name.toLowerCase().includes(search_term) || product.author.toLowerCase().includes(search_term) || product.price.toLowerCase().includes(search_term) || product.category.toLowerCase().includes(search_term)
      })
      searchProducts.value = filteredProducts
      totalSearchProducts.value = searchProducts.value.length
      console.log("searched")
    }
    const sortByPriceHighToLow = () => {
      searchProducts.value = products.value
      let filteredProducts =  searchProducts.value.sort((higher,lower ) => lower.price - higher.price )
      searchProducts.value = filteredProducts
      totalSearchProducts.value = searchProducts.value.length

      console.log(filteredProducts)

    }
    const sortByPriceLowToHigh = () => {

      searchProducts.value = products.value
      let filteredProducts =  searchProducts.value.sort(( higher,lower ) => higher.price - lower.price )
      console.log(filteredProducts)
      searchProducts.value = filteredProducts
      totalSearchProducts.value = searchProducts.value.length


    }
    const getCategoryProducts = (category) => {
      console.log(category)
      searchProducts.value = products.value
      let filteredProducts = searchProducts.value.filter(product => product.category === category.name)
      searchProducts.value = filteredProducts
      totalSearchProducts.value = searchProducts.value.length
    }
    onMounted(async () => {
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
      }
      await fetchCategories()
      await fetchBooks()


      console.log(unref(search_value))

      // await search(unref(search_value))


    })

    return {
      router,
      route,
      totalProducts,
      searching,
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
      removeProductFromCart,
      search,
      search_term,
      search_value,
      searchProducts,
      totalSearchProducts,
      sortByPriceLowToHigh,
      sortByPriceHighToLow,
      changeFilterOptions,
      searchFilter,
      getCategoryProducts,

    }
  }
})
</script>