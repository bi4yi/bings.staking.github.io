<!DOCTYPE html>
<html lang="en" >


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bings Staking | Dapp</title>
    <link rel="shortcut icon" type="image/png" href="/stake/log.png"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="../assets/fonts/css/font-awesome.min.css" />
     <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="../assets/css/style.css" />
    <link rel="stylesheet" href="../assets/css/responsive.css" />
      <link rel="stylesheet" href="../assets/plugins/animate.css-master/animate.min.css">
       <link href="../assets/plugins/lightbox2-master/dist/css/lightbox.css" rel="stylesheet">
      <link href="../assets/css/video-js.css" rel="stylesheet">
       <link href="../assets/plugins/jquery-date-range-picker-master/dist/daterangepicker.min.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="../assets/plugins/slick-1.8.0/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="../assets/plugins/slick-1.8.0/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="../assets/plugins/slider/css/normalize.min.css" media="screen, print" />
    <link rel="stylesheet" type="text/css" href="../assets/plugins/slider/css/smartslider.min.css" media="screen, print" />   
    <script src="assets/touchswipe/jquery.min.js"></script>
    <script src="assets/touchswipe/jquery.touch-swipe.min.js"></script>
    <script src="assets/web/assets/jquery/jquery-ui.js"></script>
 
 
    
    <style type="text/css">
        .n2-ss-spinner-simple-white-container {
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -20px;
            background: #fff;
            width: 20px;
            height: 20px;
            padding: 10px;
            border-radius: 50%;
            z-index: 1000;
        }

        .n2-ss-spinner-simple-white {
            outline: 1px solid RGBA(0, 0, 0, 0);
            width: 100%;
            height: 100%;
        }

        .n2-ss-spinner-simple-white:before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -11px;
            margin-left: -11px;
        }

        .n2-ss-spinner-simple-white:not(:required):before {
            content: '';
            border-radius: 50%;
            border-top: 2px solid #333;
            border-right: 2px solid transparent;
            animation: n2SimpleWhite .6s linear infinite;
            -webkit-animation: n2SimpleWhite .6s linear infinite;
        }
        .img_logo{
            max-width: 253px;
        }
        .faq_container{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .faq_container > div{
            width: 100%;
        }
        .author-img > img {
            width: 120px;
        }
        .social-list{
            width: 30px;
        }
        .bg_color{
            background-color: #181728 !important;
        }
        .st-tabs .tab-content .left_col{
            padding: 40px ;
        }
        .st-tabs .tab-content .pt_94{
            padding-top: 36px;
        }
        .in_icom{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .in_icom a img{
            margin-left: 5px;
            margin-bottom: 2px;
            cursor: pointer;
        }
        .ConversionPopup {
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            z-index: 10000;
            padding: 20px 25px;
            border-radius: 15px;
            color: #333;
            background-color: #fff;
            box-shadow: 0px 5px 22px 3px #ccc;
            border: 1px solid #ccc;
            display: none;
            min-width: 180px;
            text-align: center;
        }
        .header-line-wrapper .header-wrapper .table .table-row .table-cell .main-menu .menu .link_phone{
            display: none !important;
        }
        @media only screen and (max-width: 992px) {
            .faq_container{
                display: inherit;
                grid-template-columns: 1fr 1fr;
            }
            .header-line-wrapper .header-wrapper .table .table-row .table-cell .main-menu .menu .link_phone{
                display: block !important;
            }

        }
        @media only screen and (max-width: 400px) {
            .blog-section .item-info{
                padding: 30px 20px;
            }
        }
        @keyframes n2SimpleWhite {
            to {
                transform: rotate(360deg);
            }
        }

        @-webkit-keyframes n2SimpleWhite {
            to {
                -webkit-transform: rotate(360deg);
            }
        }
    </style>
   
    <script type="text/javascript" src="../assets/plugins/slider/js/n2-j.min.js"></script>
    <script type="text/javascript" src="../assets/plugins/slider/js/nextend-gsap.min.js"></script>
    <script type="text/javascript" src="../assets/plugins/slider/js/nextend-frontend.min.js"></script>
    <script type="text/javascript" src="../assets/plugins/slider/js/smartslider-frontend.min.js"></script>
    <script type="text/javascript" src="../assets/plugins/slider/js/smartslider-simple-type-frontend.min.js"></script>
    <script type="text/javascript" src="../assets/plugins/slider/js/nextend-webfontloader.min.js"></script>

    <script type="text/javascript">
        N2R('documentReady', function ($) {

            nextend.fontsDeferred = $.Deferred();
            if (nextend.fontsLoaded) {
                nextend.fontsDeferred.resolve();
            } else {
                nextend.fontsLoadedActive = function () {
                    nextend.fontsLoaded = true;
                    nextend.fontsDeferred.resolve();
                };
                var intercalCounter = 0;
                nextend.fontInterval = setInterval(function () {
                    if (intercalCounter > 3 || document.documentElement.className.indexOf('wf-active') !==
                        -1) {
                        nextend.fontsLoadedActive();
                        clearInterval(nextend.fontInterval);
                    }
                    intercalCounter++;
                }, 1000);
            }
        });
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2BKDCX5BES"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2BKDCX5BES');
    </script>
</head>

<body>
  
      <div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <center><b><font color="red">This platform not yet in production mode , just a demo !</font></b></center>
</div>
    
    <!-- HEADER START -->
    <div class="header-line-wrapper">
        <header class="header-wrapper fixed-top plr100">
            <div class="table height-100p">
                <div class="table-row">
                    <div class="table-cell valign-middle text-left">
                        <a href="home" class="logo">
                            <img src="../assets/images/logo.png" alt="" class=" img-responsive inline-block img_logo">
                        </a>
                    </div>
                    <div class="table-cell valign-top text-center vm-sm">
                        <div class="main-menu">
                            <span class="toggle_menu">
                                <span></span>
                            </span>
                                                        <ul class="menu clearfix">
                                <li class="inline-block">
                                    <a href="https://bings.network/">
                                        Home
                                    </a>
                                </li>
                                <li class="inline-block">
                                    <a href="https://docs.bings.network/">
                                        Docs
                                    </a>
                                </li>
                                <li class="inline-block">
                                    <a href="https://bscscan.com/address/0xf7012816941ac0b356f0ae4a7066afcbd1212318">
                                        Contract
                                    </a>
                               </li>
                               <li class="inline-block">
                                    <a href="https://bings.tryethernal.com/">
                                        Mainnet explorer
                                    </a>
                                </li>
                                
                                <li class="inline-block">
                                
                                
                                <li class="inline-block link_phone">
                                    <a href="game/index.html" target="_black">
                                        Wallet
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <div class="table-cell valign-middle text-right">
                        <div class="right-bl" >    
                          
                        
                            
                             <button type="button" class="btn gradient color-black plr60 ptb19 hidden-sm hidden-xs" id="btn-connect">Wallet Connect</button>
                            <button type="button" class="btn gradient color-black  plr60 ptb19" id="btn-disconnect" style="display:none;">Disconnect</button>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div class="ConversionPopup" id="ConversionPopup"></div>
    <!-- HEADER END -->
