const FAKE_COVID_PAGE_DOM: string = `
<!DOCTYPE html>
<!--[if lt IE 9]><html class="lte-ie8 govuk-template" lang="en"><![endif]--><!--[if gt IE 8]><!--><html class="govuk-template" lang="en">
<!--<![endif]-->
  <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta property="og:description" content="Latest travel advice for Bangladesh including how coronavirus (COVID-19) is affecting travel and entry requirements at this time as well as safety and security and local laws and customs">
<meta property="og:title" content="Entry requirements - Bangladesh travel advice">
<meta property="og:url" content="https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements">
<meta property="og:type" content="article">
<meta property="og:site_name" content="GOV.UK">
<meta name="twitter:card" content="summary">
<meta name="description" content="Latest travel advice for Bangladesh including how coronavirus (COVID-19) is affecting travel and entry requirements at this time as well as safety and security and local laws and customs">
<meta name="govuk:taxon-slugs" content="living-in-bangladesh,travelling-to-bangladesh">
<meta name="govuk:taxon-slug" content="living-in-bangladesh">
<meta name="govuk:taxon-ids" content="7ae55a0e-e4d2-49ab-8364-c0aa307bf70b,bf1d7b8c-3845-4c28-b8e8-e920978b837a">
<meta name="govuk:taxon-id" content="7ae55a0e-e4d2-49ab-8364-c0aa307bf70b">
<meta name="govuk:themes" content="world/all">
<meta name="govuk:analytics:organisations" content="&lt;D1315&gt;">
<meta name="govuk:content-has-history" content="true">
<meta name="govuk:content-id" content="266ca3b6-752f-400b-91c0-8b9c3c433d2d">
<meta name="govuk:schema-name" content="travel_advice">
<meta name="govuk:publishing-application" content="travel-advice-publisher">
<meta name="govuk:format" content="travel_advice">
<meta name="csrf-token" content="GHav-Ov25mf1Kxddq5moUaNQiJIQfvm0uXmCVhBhpJRcvLsLhzNjZD9vbt9xGaAFNamKeGrqas_tsKmdtu_JNw">
    <meta charset="utf-8">
    <title lang="en">
      Entry requirements - Bangladesh travel advice - GOV.UK
  </title>

    <script src="https://www.gov.uk/assets/static/govuk_publishing_components/vendor/lux/lux-measurer-2953485ff03af7b9ea4c6a6170eeae0e42d13011e7ab0d7f31552c6c68b1ea08.js" async="async"></script>
    <script src="https://www.gov.uk/assets/static/govuk_publishing_components/rum-loader-e1f6e34550176df772357c41481daec62093a0adc77ddaca6671f8607dd4c345.js" async="async"></script>

    <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="0pKHfQvZypfwluhuDOV82Kj82cNbGO+C7ag1BOF5FfmslYtdy+fqiFRyyb8znmtSb2gCFo17WQzavKNr49VQXA==">

    <link rel="stylesheet" media="all" href="https://www.gov.uk/assets/static/application-eeefd93bb4e3a40533688e62bae6a241ff74802cba07f6da687198e517c4b13e.css">
    <link rel="stylesheet" media="print" href="https://www.gov.uk/assets/static/print-9c2fcb462904250f78858369ad2a644eeb16c3e0beafc9f253d3fa08b23d1314.css">
    <!--[if lt IE 9]><script src="https://www.gov.uk/assets/static/govuk_publishing_components/ie-a4524544a53d57a7e259b4bb966b9c32557c98c920b77e52d09304642b68401a.js" crossorigin="anonymous" integrity="sha256-pFJFRKU9V6fiWbS7lmucMlV8mMkgt35S0JMEZCtoQBo="></script><![endif]-->
    <link rel="shortcut icon" href="https://www.gov.uk/assets/static/favicon-6921a31b023a41929073393bdad00077436c3835994079bcd2e437261875b2fc.ico" type="image/x-icon">
    <link rel="mask-icon" href="https://www.gov.uk/assets/static/govuk-mask-icon-de738c3fcce8ce2a91b67e89787090dc24a5cda0275ab6b75f6226c5b9619d3d.svg" color="#0b0c0c">
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.gov.uk/assets/static/govuk-apple-touch-icon-180x180-ea1cbb1cbbeddfff275dfa6e8e46b84cd530892df79dc4882a8f99b802b49a90.png">
    <link rel="apple-touch-icon" sizes="167x167" href="https://www.gov.uk/assets/static/govuk-apple-touch-icon-167x167-181e404a50c572923285fb83f0fbd78da6b4e38e3ce52f8e6b8e29da8586450a.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://www.gov.uk/assets/static/govuk-apple-touch-icon-152x152-02457fcdcee8d309276305af2233d41bfb8fd055e855727d355e61bce7ffa9bb.png">
    <link rel="apple-touch-icon" href="https://www.gov.uk/assets/static/govuk-apple-touch-icon-a318f305290c523aed80082456175b46c95350c0eeac93f42e78a71c7a55544e.png">

    <meta name="theme-color" content="#0b0c0c">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta property="og:image" content="https://www.gov.uk/assets/static/govuk-opengraph-image-a1f7d89ffd0782738b1aeb0da37842d8bd0addbd724b8e58c3edbc7287cc11de.png">

    
  <link rel="stylesheet" media="screen" href="/assets/government-frontend/application-0e6f1b796b951ca0e07ce65f537ba3045e163b208c897f53b1fd4f36993385cc.css">
<link rel="stylesheet" media="print" href="/assets/government-frontend/print-7e5d5687b824df6b00986ff3e8a7989532e6e7a4b0e747f70338c308b60285f7.css">
<link rel="alternate" type="application/atom+xml" title="Recent updates for Bangladesh" href="/foreign-travel-advice/bangladesh.atom">
<link rel="canonical" href="https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements">
<meta name="govuk:rendering-application" content="government-frontend">
</head>
  <body class="gem-c-layout-for-public govuk-template__body">
    <script>
      document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
    </script>
    <a class="gem-c-skip-link govuk-skip-link govuk-!-display-none-print" href="#content">Skip to main content</a>


    <div id="global-cookie-message" class="gem-c-cookie-banner govuk-clearfix" data-module="cookie-banner" role="region" aria-label="cookie banner" data-nosnippet>
  <div class="govuk-cookie-banner js-banner-wrapper" role="region" aria-label="Cookies on GOV.UK">
    <div class="gem-c-cookie-banner__message govuk-cookie-banner__message govuk-width-container">
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
          <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on GOV.UK</h2>
          <div class="govuk-cookie-banner__content">
            <p class="govuk-body">We use some essential cookies to make this website work.</p>
<p class="govuk-body">We???d like to set additional cookies to understand how you use GOV.UK, remember your settings and improve government services.</p>
<p class="govuk-body">We also use cookies set by other sites to help us deliver content from their services.</p>
          </div>
        </div>
      </div>
          <div class="govuk-button-group">
            


  <button class="gem-c-button govuk-button" type="submit" data-module="gem-track-click" data-accept-cookies="true" data-track-category="cookieBanner" data-track-action="Cookie banner accepted" data-cookie-types="all">Accept additional cookies</button>


            


  <button class="gem-c-button govuk-button" type="submit" data-module="gem-track-click" data-reject-cookies="true" data-track-category="cookieBanner" data-track-action="Cookie banner rejected">Reject additional cookies</button>


            <a class="govuk-link" href="/help/cookies">View cookies</a>
          </div>
    </div>
  </div>
  <div class="gem-c-cookie-banner__confirmation govuk-width-container" tabindex="-1" hidden>
    <p class="gem-c-cookie-banner__confirmation-message" role="alert">You can <a class="govuk-link" data-module="gem-track-click" data-track-category="cookieBanner" data-track-action="Cookie banner settings clicked from confirmation" href="/help/cookies">change your cookie settings</a> at any time.</p>
    <div class="govuk-button-group">
      <button class="gem-c-cookie-banner__hide-button govuk-button" data-hide-cookie-banner="true" data-module="gem-track-click" data-track-category="cookieBanner" data-track-action="Hide cookie banner">Hide this message</button>
    </div>
  </div>
</div>


        <header role="banner" class="gem-c-layout-super-navigation-header">
  <div class="gem-c-layout-super-navigation-header__container govuk-width-container govuk-clearfix">
    <div class="gem-c-layout-super-navigation-header__header-logo">
      <a class="govuk-header__link govuk-header__link--homepage" data-module="gem-track-click" data-track-action="logoLink" data-track-category="headerClicked" data-track-label="https://www.gov.uk" data-track-dimension="GOV.UK" data-track-dimension-index="29" href="https://www.gov.uk" id="logo" title="Go to the GOV.UK homepage">
        <span class="govuk-header__logotype">
          <!--[if gt IE 8]><!-->
          <svg aria-hidden="true" class="govuk-header__logotype-crown gem-c-layout-super-navigation-header__logotype-crown" focusable="false" height="30" viewbox="0 0 132 97" width="36" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6H55.5s6.4 7.2 7.9 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z" fill="currentColor" fill-rule="evenodd">
            </path>
          </svg>
          <!--<![endif]-->
          <!--[if IE 8]>
          <img src="https://www.gov.uk/assets/static/govuk-logotype-crown-0cdbde943be3a6518a5d7c00b607d134f4d5e3d0e8c68a1bfa2dc81f1f3edc4e.png" alt="" class="govuk-header__logotype-crown-fallback-image" width="36" height="32">
          <![endif]-->
          <span class="govuk-header__logotype-text">
            GOV.UK
          </span>
        </span>
      </a>
    </div>
    <nav aria-labelledby="super-navigation-menu-heading" class="gem-c-layout-super-navigation-header__content" data-module="super-navigation-mega-menu">
      <h2 id="super-navigation-menu-heading" class="govuk-visually-hidden">
        Navigation menu
      </h2>
      <button aria-controls="super-navigation-menu" aria-expanded="true" aria-label="Hide navigation menu" class="gem-c-layout-super-navigation-header__navigation-top-toggle-button" data-text-for-hide="Hide navigation menu" data-text-for-show="Show navigation menu" data-toggle-desktop-group="hidden" data-toggle-mobile-group="top" data-tracking-key="menu" hidden id="super-navigation-menu-toggle" type="button">
        <span class="gem-c-layout-super-navigation-header__navigation-top-toggle-button-inner">
          Menu
        </span>
      </button>
      <ul id="super-navigation-menu" class="gem-c-layout-super-navigation-header__navigation-items">
          <li class="gem-c-layout-super-navigation-header__navigation-item gem-c-layout-super-navigation-header__navigation-item--with-children">
            <div class="gem-c-layout-super-navigation-header__navigation-toggle-wrapper govuk-clearfix">
              <a class="gem-c-layout-super-navigation-header__navigation-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse" data-track-dimension="Topics" data-track-dimension-index="29" href="/browse">Topics</a>
                <button aria-controls="super-navigation-menu__section-12f70fb4" aria-expanded="false" aria-label="Show Topics menu" class="gem-c-layout-super-navigation-header__navigation-second-toggle-button" data-text-for-hide="Hide Topics menu" data-text-for-show="Show Topics menu" data-toggle-desktop-group="top" data-toggle-mobile-group="second" data-tracking-key="topics" hidden="hidden" id="super-navigation-menu__section-12f70fb4-toggle" type="button">
                  <span class="gem-c-layout-super-navigation-header__navigation-second-toggle-button-inner">Topics</span>
</button>            </div>
              <div hidden class="gem-c-layout-super-navigation-header__navigation-dropdown-menu" id="super-navigation-menu__section-12f70fb4">
                <div class="govuk-width-container gem-c-layout-super-navigation-header__width-container">
                  <div class="govuk-grid-row">
                    <div class="govuk-grid-column-one-third-from-desktop">
                        <p class="govuk-body-l gem-c-layout-super-navigation-header__menu-description">
                          Find information and services
                        </p>
                    </div>
                    <div class="govuk-grid-column-two-thirds-from-desktop">
                          <ul class="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--topics">
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/benefits" data-track-dimension="Benefits" data-track-dimension-index="29" href="/browse/benefits">Benefits</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/births-deaths-marriages" data-track-dimension="Births, death, marriages and care" data-track-dimension-index="29" href="/browse/births-deaths-marriages">Births, death, marriages and care</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/business" data-track-dimension="Business and self-employed" data-track-dimension-index="29" href="/browse/business">Business and self-employed</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/childcare-parenting" data-track-dimension="Childcare and parenting" data-track-dimension-index="29" href="/browse/childcare-parenting">Childcare and parenting</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/citizenship" data-track-dimension="Citizenship and living in the UK" data-track-dimension-index="29" href="/browse/citizenship">Citizenship and living in the UK</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/coronavirus" data-track-dimension="Coronavirus (COVID???19)" data-track-dimension-index="29" href="/coronavirus">Coronavirus (COVID???19)</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/justice" data-track-dimension="Crime, justice and the law" data-track-dimension-index="29" href="/browse/justice">Crime, justice and the law</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/disabilities" data-track-dimension="Disabled people" data-track-dimension-index="29" href="/browse/disabilities">Disabled people</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/driving" data-track-dimension="Driving and transport" data-track-dimension-index="29" href="/browse/driving">Driving and transport</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/education" data-track-dimension="Education and learning" data-track-dimension-index="29" href="/browse/education">Education and learning</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/employing-people" data-track-dimension="Employing people" data-track-dimension-index="29" href="/browse/employing-people">Employing people</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/environment-countryside" data-track-dimension="Environment and countryside" data-track-dimension-index="29" href="/browse/environment-countryside">Environment and countryside</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/housing-local-services" data-track-dimension="Housing and local services" data-track-dimension-index="29" href="/browse/housing-local-services">Housing and local services</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/tax" data-track-dimension="Money and tax" data-track-dimension-index="29" href="/browse/tax">Money and tax</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/abroad" data-track-dimension="Passports, travel and living abroad" data-track-dimension-index="29" href="/browse/abroad">Passports, travel and living abroad</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/visas-immigration" data-track-dimension="Visas and immigration" data-track-dimension-index="29" href="/browse/visas-immigration">Visas and immigration</a>
                                
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" data-module="gem-track-click" data-track-action="topicsLink" data-track-category="headerClicked" data-track-label="/browse/working" data-track-dimension="Working, jobs and pensions" data-track-dimension-index="29" href="/browse/working">Working, jobs and pensions</a>
                                
                              </li>
                          </ul>
                    </div>
                  </div>
                </div>
              </div>
</li>          <li class="gem-c-layout-super-navigation-header__navigation-item gem-c-layout-super-navigation-header__navigation-item--with-children">
            <div class="gem-c-layout-super-navigation-header__navigation-toggle-wrapper govuk-clearfix">
              <a class="gem-c-layout-super-navigation-header__navigation-item-link" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/news-and-communications" data-track-dimension="Government activity" data-track-dimension-index="29" href="/search/news-and-communications">Government activity</a>
                <button aria-controls="super-navigation-menu__section-31e8861d" aria-expanded="false" aria-label="Show Government activity menu" class="gem-c-layout-super-navigation-header__navigation-second-toggle-button" data-text-for-hide="Hide Government activity menu" data-text-for-show="Show Government activity menu" data-toggle-desktop-group="top" data-toggle-mobile-group="second" data-tracking-key="governmentactivity" hidden="hidden" id="super-navigation-menu__section-31e8861d-toggle" type="button">
                  <span class="gem-c-layout-super-navigation-header__navigation-second-toggle-button-inner">Government activity</span>
</button>            </div>
              <div hidden class="gem-c-layout-super-navigation-header__navigation-dropdown-menu" id="super-navigation-menu__section-31e8861d">
                <div class="govuk-width-container gem-c-layout-super-navigation-header__width-container">
                  <div class="govuk-grid-row">
                    <div class="govuk-grid-column-one-third-from-desktop">
                        <p class="govuk-body-l gem-c-layout-super-navigation-header__menu-description">
                          Search for a department and find out what the government is doing
                        </p>
                    </div>
                    <div class="govuk-grid-column-two-thirds-from-desktop">
                          <ul class="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--government-activity">
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/government/organisations" data-track-dimension="Departments" data-track-dimension-index="29" href="/government/organisations">Departments</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Departments, agencies and public bodies</p>
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/news-and-communications" data-track-dimension="News" data-track-dimension-index="29" href="/search/news-and-communications">News</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">News stories, speeches, letters and notices</p>
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/guidance-and-regulation" data-track-dimension="Guidance and regulation" data-track-dimension-index="29" href="/search/guidance-and-regulation">Guidance and regulation</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Detailed guidance, regulations and rules</p>
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/research-and-statistics" data-track-dimension="Research and statistics" data-track-dimension-index="29" href="/search/research-and-statistics">Research and statistics</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Reports, analysis and official statistics</p>
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/policy-papers-and-consultations" data-track-dimension="Policy papers and consultations" data-track-dimension-index="29" href="/search/policy-papers-and-consultations">Policy papers and consultations</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Consultations and strategy</p>
                              </li>
                              <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                                <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/search/transparency-and-freedom-of-information-releases" data-track-dimension="Transparency" data-track-dimension-index="29" href="/search/transparency-and-freedom-of-information-releases">Transparency</a>
                                <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Data, Freedom of Information releases and corporate reports</p>
                              </li>
                          </ul>
                        <hr class="gem-c-layout-super-navigation-header__navigation-second-footer-break govuk-section-break govuk-section-break--visible">
                        <ul class="gem-c-layout-super-navigation-header__navigation-second-footer-list">
                            <li class="gem-c-layout-super-navigation-header__navigation-second-footer-item">
                              <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-footer-link" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/government/how-government-works" data-track-dimension="How government works" data-track-dimension-index="29" href="/government/how-government-works">How government works</a>
                            </li>
                            <li class="gem-c-layout-super-navigation-header__navigation-second-footer-item">
                              <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-footer-link" data-module="gem-track-click" data-track-action="governmentactivityLink" data-track-category="headerClicked" data-track-label="/government/get-involved" data-track-dimension="Get involved" data-track-dimension-index="29" href="/government/get-involved">Get involved</a>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
</li>      </ul>

      <button aria-controls="super-search-menu" aria-expanded="true" aria-label="Hide search menu" class="gem-c-layout-super-navigation-header__search-toggle-button" data-text-for-hide="Hide search menu" data-text-for-show="Show search menu" data-toggle-mobile-group="top" data-toggle-desktop-group="top" data-tracking-key="search" hidden id="super-search-menu-toggle" type="button">
        <span class="govuk-visually-hidden">
          Search GOV.UK
        </span>
        
<svg class="gem-c-layout-super-navigation-header__search-toggle-button-link-icon" width="27" height="27" viewbox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" stroke-width="3"></circle>
  <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" stroke-width="3"></line>
</svg>
        <span aria-hidden="true" class="gem-c-layout-super-navigation-header__navigation-top-toggle-close-icon" focusable="false">
          ??
        </span>
      </button>

      <div id="super-search-menu" class="gem-c-layout-super-navigation-header__search-items">
        <h3 class="govuk-visually-hidden">
          Search
        </h3>
        <div class="gem-c-layout-super-navigation-header__search-item">
          <a class="gem-c-layout-super-navigation-header__search-item-link" href="/search">
            <span class="gem-c-layout-super-navigation-header__search-item-link-text">
              Search GOV.UK
            </span>
            <svg class="gem-c-layout-super-navigation-header__search-item-link-icon" width="27" height="27" viewbox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <circle cx="10.0161" cy="10.0161" r="8.51613" stroke="currentColor" stroke-width="3"></circle>
              <line x1="15.8668" y1="16.3587" x2="25.4475" y2="25.9393" stroke="currentColor" stroke-width="3"></line>
            </svg>
          </a>
        </div>

        <div class="govuk-width-container gem-c-layout-super-navigation-header__search-and-popular">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
              <form class="gem-c-layout-super-navigation-header__search-form" id="search" action="/search" method="get" role="search" aria-label="Site-wide">
                
<div class="gem-c-search govuk-!-display-none-print  gem-c-search--large gem-c-search--on-white gem-c-search--separate-label" data-module="gem-toggle-input-class-on-focus">
    <label for="search-main-6ff8bc01" class="govuk-label govuk-label--m">Search GOV.UK</label>
  <div class="gem-c-search__item-wrapper">
    <input enterkeyhint="search" class="gem-c-search__item gem-c-search__input js-class-toggle" id="search-main-6ff8bc01" name="q" title="Search" type="search" value="">
    <div class="gem-c-search__item gem-c-search__submit-wrapper">
      <button class="gem-c-search__submit" type="submit" data-track-category="headerClicked" data-track-action="searchSubmitted" data-track-label="/search/all" data-track-dimension="Search on GOV.UK" data-track-dimension-index="29" data-module="gem-track-click" enterkeyhint="search">
        Search
        
<svg class="gem-c-search__icon" width="27" height="27" viewbox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" stroke-width="3"></circle>
  <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" stroke-width="3"></line>
</svg>
</button>    </div>
  </div>
</div>

              </form>
            </div>
          </div>
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
              <h3 class="govuk-heading-m">Popular on GOV.UK</h3>
              <ul class="govuk-list">
                  <li class="gem-c-layout-super-navigation-header__popular-item">
                    <a class="govuk-link gem-c-layout-super-navigation-header__popular-link" data-module="gem-track-click" data-track-action="popularLink" data-track-category="headerClicked" data-track-label="/coronavirus" data-track-dimension="Coronavirus (COVID-19)" data-track-dimension-index="29" href="/coronavirus">Coronavirus (COVID-19)</a>
                  </li>
                  <li class="gem-c-layout-super-navigation-header__popular-item">
                    <a class="govuk-link gem-c-layout-super-navigation-header__popular-link" data-module="gem-track-click" data-track-action="popularLink" data-track-category="headerClicked" data-track-label="/brexit" data-track-dimension="Brexit: check what you need to do" data-track-dimension-index="29" href="/brexit">Brexit: check what you need to do</a>
                  </li>
                  <li class="gem-c-layout-super-navigation-header__popular-item">
                    <a class="govuk-link gem-c-layout-super-navigation-header__popular-link" data-module="gem-track-click" data-track-action="popularLink" data-track-category="headerClicked" data-track-label="/find-a-job" data-track-dimension="Find a job" data-track-dimension-index="29" href="/find-a-job">Find a job</a>
                  </li>
                  <li class="gem-c-layout-super-navigation-header__popular-item">
                    <a class="govuk-link gem-c-layout-super-navigation-header__popular-link" data-module="gem-track-click" data-track-action="popularLink" data-track-category="headerClicked" data-track-label="/personal-tax-account" data-track-dimension="Personal tax account: sign in" data-track-dimension-index="29" href="/personal-tax-account">Personal tax account: sign in</a>
                  </li>
                  <li class="gem-c-layout-super-navigation-header__popular-item">
                    <a class="govuk-link gem-c-layout-super-navigation-header__popular-link" data-module="gem-track-click" data-track-action="popularLink" data-track-category="headerClicked" data-track-label="/sign-in-universal-credit" data-track-dimension="Universal Credit account: sign in" data-track-dimension-index="29" href="/sign-in-universal-credit">Universal Credit account: sign in</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>


    

      <div class="gem-c-layout-for-public__blue-bar govuk-width-container"></div>

      <div class="gem-c-layout-for-public__global-banner-wrapper">
        <div id="user-satisfaction-survey-container"></div>
  <!--[if gt IE 7]><!-->
  <div id="global-bar" class="global-bar dont-print" data-module="global-bar" data-global-bar-permanent="true" data-nosnippet>
    <div class="global-bar-message govuk-width-container">


        <div class="global-bar-covid-wrapper">
            <div class="gem-c-action-link gem-c-action-link--light-text gem-c-action-link--simple-light gem-c-action-link--with-subtext govuk-!-margin-bottom-0">

      <span class="gem-c-action-link__contents-wrapper">      <span class="gem-c-action-link__link-wrapper">

          <a class="govuk-link gem-c-action-link__link js-call-to-action govuk-link--inverse" href="/coronavirus">
                      Coronavirus (COVID-19)
          

</a>      </span>

        <span class="gem-c-action-link__subtext-wrapper">
            <span class="gem-c-action-link__subtext">Latest updates and guidance</span>
        </span>
</span>
  </div>

        </div>
    </div>

  </div>
  <!--<![endif]-->

</div>
      <div id="wrapper" class="direction-ltr govuk-width-container">

        
<div class="gem-c-contextual-breadcrumbs">
    


<div class="gem-c-breadcrumbs govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile" data-module="gem-track-click">
  <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item">
          <a data-track-category="homeLinkClicked" data-track-action="homeBreadcrumb" data-track-label="" data-track-options="{}" class="govuk-breadcrumbs__link" href="/">Home</a>
        </li>
        <li class="govuk-breadcrumbs__list-item">
          <a data-track-category="breadcrumbClicked" data-track-action="2" data-track-label="/browse/abroad" data-track-options='{"dimension28":"4","dimension29":"Passports, travel and living abroad"}' class="govuk-breadcrumbs__link" href="/browse/abroad">Passports, travel and living abroad</a>
        </li>
        <li class="govuk-breadcrumbs__list-item">
          <a data-track-category="breadcrumbClicked" data-track-action="3" data-track-label="/browse/abroad/travel-abroad" data-track-options='{"dimension28":"4","dimension29":"Travel abroad"}' class="govuk-breadcrumbs__link" href="/browse/abroad/travel-abroad">Travel abroad</a>
        </li>
        <li class="govuk-breadcrumbs__list-item">
          <a data-track-category="breadcrumbClicked" data-track-action="4" data-track-label="/foreign-travel-advice" data-track-options='{"dimension28":"4","dimension29":"Foreign travel advice"}' class="govuk-breadcrumbs__link" href="/foreign-travel-advice">Foreign travel advice</a>
        </li>
  </ol>
</div>

</div>


    <main role="main" id="content" class="travel-advice" lang="en">
      

<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds travel-advice__header">
    

<div class="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
      <span class="govuk-caption-xl gem-c-title__context">
    Foreign travel advice
  </span>


  <h1 class="gem-c-title__text govuk-heading-xl">
    Bangladesh
  </h1>
</div>

    <aside class="part-navigation-container" role="complementary">
        <nav class="gem-c-contents-list" aria-label="Travel advice pages" role="navigation" data-module="gem-track-click">
    <h2 class="gem-c-contents-list__title">
      Contents
</h2>
    <ol class="gem-c-contents-list__list">
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 1" data-track-label="/foreign-travel-advice/bangladesh" data-track-options='{"dimension29":"Summary"}' href="/foreign-travel-advice/bangladesh">Summary</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 2" data-track-label="/foreign-travel-advice/bangladesh/coronavirus" data-track-options='{"dimension29":"Coronavirus"}' href="/foreign-travel-advice/bangladesh/coronavirus">Coronavirus</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 3" data-track-label="/foreign-travel-advice/bangladesh/safety-and-security" data-track-options='{"dimension29":"Safety and security"}' href="/foreign-travel-advice/bangladesh/safety-and-security">Safety and security</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 4" data-track-label="/foreign-travel-advice/bangladesh/terrorism" data-track-options='{"dimension29":"Terrorism"}' href="/foreign-travel-advice/bangladesh/terrorism">Terrorism</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 5" data-track-label="/foreign-travel-advice/bangladesh/local-laws-and-customs" data-track-options='{"dimension29":"Local laws and customs"}' href="/foreign-travel-advice/bangladesh/local-laws-and-customs">Local laws and customs</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed gem-c-contents-list__list-item--active" aria-current="true">
          Entry requirements

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 7" data-track-label="/foreign-travel-advice/bangladesh/health" data-track-options='{"dimension29":"Health"}' href="/foreign-travel-advice/bangladesh/health">Health</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 8" data-track-label="/foreign-travel-advice/bangladesh/natural-disasters" data-track-options='{"dimension29":"Natural disasters"}' href="/foreign-travel-advice/bangladesh/natural-disasters">Natural disasters</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 9" data-track-label="/foreign-travel-advice/bangladesh/money" data-track-options='{"dimension29":"Money"}' href="/foreign-travel-advice/bangladesh/money">Money</a>

        </li>
        <li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">
          <a class="gem-c-contents-list__link govuk-link" data-track-category="contentsClicked" data-track-action="content_item 10" data-track-label="/foreign-travel-advice/bangladesh/travel-advice-help-and-support" data-track-options='{"dimension29":"Travel advice help and support"}' href="/foreign-travel-advice/bangladesh/travel-advice-help-and-support">Travel advice help and support</a>

        </li>
    </ol>
</nav>

        <section class="gem-c-subscription-links govuk-!-display-none-print">
      <h2 class="gem-c-subscription-links__hidden-header visuallyhidden">Subscriptions</h2>
    <ul class="gem-c-subscription-links__list">
        <li class="gem-c-subscription-links__list-item">
          <a class="govuk-link govuk-link--no-underline gem-c-subscription-links__item  gem-c-subscription-links__item--link" href="/foreign-travel-advice/bangladesh/email-signup">            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15.75" class="gem-c-subscription-links__icon" focusable="false" fill="currentColor" aria-hidden="true"><path d="M19.687 0H1.312C.589 0 0 .587 0 1.313v13.124c0 .726.588 1.313 1.313 1.313h18.374c.725 0 1.313-.587 1.313-1.313V1.313C21 .587 20.412 0 19.687 0zm-2.625 2.625L10.5 7.875l-6.563-5.25h13.126zm1.313 10.5H2.625V3.937L10.5 10.5l7.875-6.563v9.188z"></path>
            </svg>Get email alerts
</a>
        </li>

        <li class="gem-c-subscription-links__list-item">
          
          <a class="govuk-link govuk-link--no-underline gem-c-subscription-links__item  gem-c-subscription-links__item--link" href="/foreign-travel-advice/bangladesh.atom">            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="gem-c-subscription-links__icon" focusable="false" fill="currentColor" aria-hidden="true"><path d="M1.996 11A2 2 0 0 0 0 12.993c0 1.101.895 1.99 1.996 1.99 1.106 0 2-.889 2-1.99a2 2 0 0 0-2-1.993zM.002 5.097V7.97c1.872 0 3.632.733 4.958 2.059A6.984 6.984 0 0 1 7.015 15h2.888c0-5.461-4.443-9.903-9.9-9.903zM.006 0v2.876c6.676 0 12.11 5.44 12.11 12.124H15C15 6.731 8.273 0 .006 0z"></path>
            </svg>Subscribe to feed
</a>
        </li>
    </ul>

</section>
    </aside>
  </div>
</div>

<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="part-title">
      Entry requirements
    </h1>


    <div data-module="gem-track-click" data-track-category="SummaryTravelAdviceWarning" data-track-action="callOutBoxClicked" data-track-links-only data-limit-to-element-class="call-to-action">
      
<div class="gem-c-govspeak govuk-govspeak direction-ltr" data-module="govspeak">
    
        <p>This page reflects the UK government???s understanding of current rules for people travelling on a full ???British Citizen??? passport, for the most common types of travel.</p>

<p>The authorities in Bangladesh set and enforce entry rules. For further information <a href="https://www.gov.uk/government/publications/foreign-embassies-in-the-uk">contact the embassy, high commission or consulate</a> of the country or territory you???re travelling to. You should also consider checking with your transport provider or travel company to make sure your passport and other travel documents meet their requirements.</p>

<h2 id="entry-rules-in-response-to-coronavirus-covid-19">Entry rules in response to coronavirus (COVID-19)</h2>

<h3 id="entry-to-bangladesh">Entry to Bangladesh</h3>

<p>Passengers arriving from the UK will need:</p>

<ul>
  <li>A medical certificate indicating a negative PCR test taken within 48 hours prior to departure (for passengers aged 12 or over)</li>
  <li>Confirmation of your vaccination status, with vaccination course completed 14 days before entry, if you are relying on a completed COVID-19 vaccination course for quarantine exemptions  (See Quarantine requirements)</li>
  <li>A completed Health Declaration Form and Passenger Locator Form provided by cabin crew.</li>
</ul>

<p>You may be subjected to additional health screening measures at the airport.</p>

<p>You should not use the NHS testing service to get a test in order to facilitate your travel to another country. You should arrange to take a private test.</p>

<h3 id="quarantine-requirements">Quarantine requirements</h3>

<p>Bangladesh operates a number of quarantine regimes depending on passengers??? circumstances:</p>

<ul>
  <li>Passengers arriving from the majority of countries, including the UK, but excluding those territories named in the paragraphs below, are exempt from quarantine provided they can offer evidence of having completed a WHO approved vaccination course at least 14 day prior to their arrival in Bangladesh. Arrivals who are unable to provide this evidence are required to complete a 14 day period of home quarantine</li>
  <li>Passengers who have visited, or transited Botswana, Eswatini, Ghana, Lesotho, Namibia, South Africa and Zimbabwe, within the preceding 14 days of 4 December, are required to complete mandatory 14 day quarantine at a government nominated quarantine hotel upon arrival in Bangladesh, regardless of vaccination status</li>
  <li>Passengers whose journey originates from, or who have visited within the preceding 15 days of 4 December, Armenia, Bulgaria, Estonia, Georgia, Latvia, Lithuania, Moldova, Mongolia, the Palestinian Occupied Territories, Romania, Serbia, Slovenia and Ukraine are also required to quarantine. However, those that can offer evidence of having completed a WHO approved vaccination course at least 14 days prior to their arrival in Bangladesh, are able to quarantine at home for seven days. Those that are unable to provide this evidence are required to complete a period of quarantine at a government nominated quarantine hotel. This quarantine can be completed by testing negative for COVID-19 on the seventh day. You should note that transiting the countries in this paragraph, without exiting the airport, does not qualify as a visit</li>
  <li>Children under 18 are able to follow the same quarantine regime that applies to those family members they are travelling with, regardless of their vaccination status</li>
  <li>Passengers that are subject to mandatory quarantine hotel stay should confirm their stay prior to travel. Proof of a quarantine hotel reservation will be required at airport check-in</li>
  <li>In all circumstances, people staying in a government approved hotel, government facility or hospital will need to cover the costs of those stays and any necessary COVID-19 tests</li>
  <li>In all circumstances, anyone displaying COVID-19 symptoms on arrival will be transferred to a designated government hospital where their quarantine period will be assessed and determined.</li>
</ul>

<p>The Bangladesh authorities may retain passports of any passengers in quarantine and will return them at the end of the quarantine period.</p>

<p>Passengers with a No Visa Required certificate (an arrangement for foreign nationals of Bangladeshi heritage) arriving in Bangladesh without a medical certificate indicating they are COVID-19 negative, or such passengers who display symptoms, will be transferred to a government facility where their quarantine period will be assessed and determined.</p>

<h2 id="regular-entry-requirements">Regular entry requirements</h2>

<h3 id="visas">Visas</h3>

<p>You will need a visa to enter Bangladesh. You can get a visa from the Bangladesh High Commission in London. In some limited circumstances visas may be available on arrival, which includes categories of foreign investors and those of Bangladesh descent. We strongly recommend that you confirm the availability of such visa arrangements, including documentation requirements, with the Bangladeshi authorities in advance of travel.</p>

<p>Foreign nationals currently in Bangladesh whose visas have expired have the option to extend their visa. There is a visa extension fee for this service, in addition to a penalty fee for overstaying. Visa extensions are available at the Department of Immigration and Passport of Bangladesh.</p>

<p>If you intend to use Dhaka as a hub to visit other countries in the region, make sure you get a multiple entry visa. If you???re intending to work in Bangladesh make sure you get the correct visa before you travel.</p>

<p>If you have had your passport renewed in Bangladesh, you will need a new visa. The Bangladesh Immigration &amp; Passport Department (telephone: 880 2 8159878 / 8123788 / 8123323) is able to issue an ???exit visa??? or a ???no visa required??? stamp. Officers there are unlikely to speak English, so you may need an interpreter.</p>

<p>Make sure you have an entry stamp placed in your passport on entry into Bangladesh otherwise you may have problems on departure.</p>

<h3 id="passport-validity">Passport validity</h3>

<p>Your passport should be valid for at least 6 months when applying for a visa to visit Bangladesh.</p>

<h3 id="uk-emergency-travel-documents">UK Emergency Travel Documents</h3>

<p>UK Emergency Travel Documents (ETDs) are accepted for entry, airside transit and exit from Bangladesh. Holders of an ETD must apply for the appropriate Bangladesh visa to enter Bangladesh.</p>

<h3 id="yellow-fever-certificate-requirements">Yellow fever certificate requirements</h3>

<p>Check whether you need a yellow fever certificate by visiting the National Travel Health Network and Centre???s <a rel="external" href="http://travelhealthpro.org.uk/country/22/bangladesh#Vaccine_recommendations">TravelHealthPro website</a>.</p>

<h3 id="working-in-bangladesh">Working in Bangladesh</h3>

<p>Foreign nationals working in Bangladesh must get an Income Tax Clearance Certificate or an Income Tax Exemption Certificate before each departure from Bangladesh. Full details are available on the <a rel="external" href="http://www.nbr.gov.bd/">Bangladesh Board of Revenue website</a>.</p>


</div>
    </div>

    <nav class="gem-c-pagination" role="navigation" aria-label="Pagination">
  <ul class="gem-c-pagination__list" data-module="gem-track-click">
      <li class="gem-c-pagination__item gem-c-pagination__item--previous">
        <a href="/foreign-travel-advice/bangladesh/local-laws-and-customs" class="govuk-link gem-c-pagination__link" rel="prev" data-track-category="contentsClicked" data-track-action="previous" data-track-label="/foreign-travel-advice/bangladesh/local-laws-and-customs" data-track-dimension="previous" data-track-dimension-index="29">
          <span class="gem-c-pagination__link-title">
            <svg class="gem-c-pagination__link-icon" xmlns="http://www.w3.org/2000/svg" height="13" width="17" viewbox="0 0 17 13">
              <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
            </svg>
            <span class="gem-c-pagination__link-text">Previous</span>
          </span>
            <span class="gem-c-pagination__link-divider visually-hidden">:</span>
            <span class="gem-c-pagination__link-label">Local laws and customs</span>
        </a>
      </li>
      <li class="gem-c-pagination__item gem-c-pagination__item--next">
        <a href="/foreign-travel-advice/bangladesh/health" class="govuk-link gem-c-pagination__link" rel="next" data-track-category="contentsClicked" data-track-action="next" data-track-label="/foreign-travel-advice/bangladesh/health" data-track-dimension="next" data-track-dimension-index="29">
          <span class="gem-c-pagination__link-title">
            <svg class="gem-c-pagination__link-icon" xmlns="http://www.w3.org/2000/svg" height="13" width="17" viewbox="0 0 17 13">
              <path d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg>
            <span class="gem-c-pagination__link-text">Next</span>
          </span>
            <span class="gem-c-pagination__link-divider visually-hidden">:</span>
            <span class="gem-c-pagination__link-label">Health</span>
        </a>
      </li>
  </ul>
</nav>


    <div class="responsive-bottom-margin">
      <a href="/foreign-travel-advice/bangladesh/print" class="govuk-link govuk-link--no-visited-state govuk-body">View a printable version of the whole guide</a>
    </div>
  </div>
  
<div class="govuk-grid-column-one-third">
  
<div class="gem-c-contextual-sidebar">

    
  <div class="gem-c-related-navigation">

      <h2 id="related-nav-related_items-852ec475" class="gem-c-related-navigation__main-heading" data-track-count="sidebarRelatedItemSection">
        Related content
      </h2>




      <nav role="navigation" class="gem-c-related-navigation__nav-section" aria-labelledby="related-nav-related_items-852ec475" data-module="gem-toggle">


  <ul class="gem-c-related-navigation__link-list" data-module="gem-track-click">


        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other" data-track-category="relatedLinkClicked" data-track-action="1.1 Related content" data-track-label="/guidance/about-foreign-commonwealth-development-office-travel-advice" data-track-options='{"dimension28":"5","dimension29":"About Foreign, Commonwealth \u0026 Development Office travel advice"}' href="/guidance/about-foreign-commonwealth-development-office-travel-advice">About Foreign, Commonwealth &amp; Development Office travel advice</a></li>
        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other" data-track-category="relatedLinkClicked" data-track-action="1.2 Related content" data-track-label="/travel-abroad" data-track-options='{"dimension28":"5","dimension29":"Travel abroad: step by step"}' href="/travel-abroad">Travel abroad: step by step</a></li>
        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other" data-track-category="relatedLinkClicked" data-track-action="1.3 Related content" data-track-label="/guidance/how-to-deal-with-a-crisis-overseas" data-track-options='{"dimension28":"5","dimension29":"What to do if you???re affected by a crisis overseas"}' href="/guidance/how-to-deal-with-a-crisis-overseas">What to do if you???re affected by a crisis overseas</a></li>
        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar  govuk-link gem-c-related-navigation__section-link--other" data-track-category="relatedLinkClicked" data-track-action="1.4 Related content" data-track-label="/guidance/foreign-travel-checklist" data-track-options='{"dimension28":"5","dimension29":"Foreign travel checklist"}' href="/guidance/foreign-travel-checklist">Foreign travel checklist</a></li>
        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--sidebar govuk-link gem-c-related-navigation__section-link--inline  govuk-link gem-c-related-navigation__section-link--other" data-track-category="relatedLinkClicked" data-track-action="1.5 Related content" data-track-label="/world/bangladesh" data-track-options='{"dimension28":"5","dimension29":"UK help and services in Bangladesh"}' href="/world/bangladesh">UK help and services in Bangladesh</a></li>

  </ul>
</nav>

  </div>



</div>

</div>

</div>


  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
        
  <div class="gem-c-contextual-footer">
    
  <div class="gem-c-related-navigation">





      <nav role="navigation" class="gem-c-related-navigation__nav-section" aria-labelledby="related-nav-topics-617b83c6" data-module="gem-toggle">

    <h2 id="related-nav-topics-617b83c6" class="gem-c-related-navigation__sub-heading gem-c-related-navigation__sub-heading--footer" data-track-count="footerRelatedItemSection">Explore the topic</h2>

  <ul class="gem-c-related-navigation__link-list" data-module="gem-track-click">


        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer" data-track-category="relatedLinkClicked" data-track-action="1.1 Explore the topic" data-track-label="/world/living-in-bangladesh" data-track-options='{"dimension28":"2","dimension29":"Living in Bangladesh"}' href="/world/living-in-bangladesh">Living in Bangladesh</a></li>
        <li class="gem-c-related-navigation__link"><a class="govuk-link govuk-link gem-c-related-navigation__section-link govuk-link gem-c-related-navigation__section-link--footer" data-track-category="relatedLinkClicked" data-track-action="1.2 Explore the topic" data-track-label="/world/travelling-to-bangladesh" data-track-options='{"dimension28":"2","dimension29":"Travelling to Bangladesh"}' href="/world/travelling-to-bangladesh">Travelling to Bangladesh</a></li>

  </ul>
</nav>

  </div>

  </div>


    </div>
  </div>


    </main>
  </div>

      <div class="govuk-width-container">
        
<div class="gem-c-feedback govuk-!-display-none-print" data-module="feedback">
  <div class="gem-c-feedback__prompt gem-c-feedback__js-show js-prompt" tabindex="-1">
  <div class="gem-c-feedback__prompt-questions js-prompt-questions" hidden>
    <h2 class="gem-c-feedback__prompt-question">Is this page useful?</h2>
    
    <ul class="gem-c-feedback__option-list">
      <li class="gem-c-feedback__option-list-item govuk-visually-hidden" style="display: none" hidden>
        <a class="gem-c-feedback__prompt-link" data-track-category="yesNoFeedbackForm" data-track-action="ffMaybeClick" role="button" style="display: none" hidden="hidden" aria-hidden="true" href="/contact/govuk">
          Maybe
</a>      </li>
      <li class="gem-c-feedback__option-list-item">
        <button class="govuk-button gem-c-feedback__prompt-link js-page-is-useful" data-track-category="yesNoFeedbackForm" data-track-action="ffYesClick">
          Yes <span class="govuk-visually-hidden">this page is useful</span>
        </button>
      </li>
      <li class="gem-c-feedback__option-list-item">
        <button class="govuk-button gem-c-feedback__prompt-link js-toggle-form js-page-is-not-useful" data-track-category="yesNoFeedbackForm" data-track-action="ffNoClick" aria-controls="page-is-not-useful" aria-expanded="false">
          No <span class="govuk-visually-hidden">this page is not useful</span>
        </button>
      </li>
    </ul>
  </div>
  <div class="gem-c-feedback__prompt-questions gem-c-feedback__prompt-success js-prompt-success" role="alert" hidden>
    Thank you for your feedback
  </div>
  <div class="gem-c-feedback__prompt-questions gem-c-feedback__prompt-questions--something-is-wrong js-prompt-questions" hidden>
    <button class="govuk-button gem-c-feedback__prompt-link js-toggle-form js-something-is-wrong" data-track-category="Onsite Feedback" data-track-action="GOV-UK Open Form" aria-controls="something-is-wrong" aria-expanded="false">
      Report a problem with this page
    </button>
  </div>
</div>

  <form action="/contact/govuk/problem_reports" id="something-is-wrong" class="gem-c-feedback__form js-feedback-form" data-track-category="Onsite Feedback" data-track-action="GOV.UK Send Form" method="post" hidden>
  <button class="govuk-button govuk-button--secondary gem-c-feedback__close gem-c-feedback__js-show js-close-form" data-track-category="Onsite Feedback" data-track-action="GOV.UK Close Form" aria-controls="something-is-wrong" aria-expanded="true">
    Close
  </button>

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <div class="gem-c-feedback__error-summary gem-c-feedback__js-show js-errors" tabindex="-1" hidden></div>

      <input type="hidden" name="url" value="https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements">

      <h3 class="gem-c-feedback__form-heading">Help us improve GOV.UK</h3>
      <p id="feedback_explanation" class="gem-c-feedback__form-paragraph">Don???t include personal or financial information like your National Insurance number or credit card details.</p>

      <div class="govuk-visually-hidden" aria-hidden="true">
        <label for="feedback_maybe">This field is for robots only. Please leave blank</label>
        <input id="feedback_maybe" type="text" pattern=".{0}" tabindex="-1" autocomplete="off">
      </div>

      
<div class="gem-c-textarea govuk-form-group govuk-!-margin-bottom-6">
    
  <label for="textarea-970d30b3" class="gem-c-label govuk-label">What were you doing?</label>





  <textarea name="what_doing" class="govuk-textarea" id="textarea-970d30b3" rows="3" spellcheck="true" aria-describedby="feedback_explanation">
</textarea>
    
</div>

      
<div class="gem-c-textarea govuk-form-group govuk-!-margin-bottom-6">
    
  <label for="textarea-79211c6a" class="gem-c-label govuk-label">What went wrong?</label>





  <textarea name="what_wrong" class="govuk-textarea" id="textarea-79211c6a" rows="3" spellcheck="true">
</textarea>
    
</div>

      


  <button class="gem-c-button govuk-button" type="submit">Send</button>


    </div>
  </div>
</form>


<script>
  document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#feedback_maybe"),
      form = document.querySelector("#something-is-wrong")

    form.addEventListener("submit", spamCapture);

    function spamCapture(e) {
      if (input.value.length !== 0) return;
      e.preventDefault();
    }
  });
</script>

  <form action="/contact/govuk/email-survey-signup" id="page-is-not-useful" class="gem-c-feedback__form gem-c-feedback__form--email gem-c-feedback__js-show js-feedback-form" data-track-category="yesNoFeedbackForm" data-track-action="Send Form" method="post">
  <button class="govuk-button govuk-button--secondary gem-c-feedback__close js-close-form" data-track-category="yesNoFeedbackForm" data-track-action="ffFormClose" aria-controls="page-is-not-useful" aria-expanded="true" hidden>
    Close
  </button>

  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds" id="survey-wrapper">
      <div class="gem-c-feedback__error-summary js-errors" tabindex="-1" hidden></div>

      <input name="email_survey_signup[survey_id]" type="hidden" value="footer_satisfaction_survey">
      <input name="email_survey_signup[survey_source]" type="hidden" value="/foreign-travel-advice/bangladesh/entry-requirements">

      <h3 class="gem-c-feedback__form-heading">Help us improve GOV.UK</h3>
      <p id="survey_explanation" class="gem-c-feedback__form-paragraph">To help us improve GOV.UK, we???d like to know more about your visit today. We???ll send you a link to a feedback form. It will take only 2 minutes to fill in. Don???t worry we won???t send you spam or share your email address with anyone.</p>

      
<div class="govuk-form-group">

            
  <label for="input-59dd0340" class="gem-c-label govuk-label">Email address</label>







    
    <input aria-describedby="survey_explanation" autocomplete="email" class="gem-c-input govuk-input" id="input-59dd0340" name="email_survey_signup[email_address]" type="email">
</div>

       


  <button class="gem-c-button govuk-button" type="submit">Send me the survey</button>


    </div>
  </div>
</form>

</div>

      </div>

      <footer class="gem-c-layout-footer govuk-footer gem-c-layout-footer--border" role="contentinfo">
  <div class="govuk-width-container" data-module="gem-track-click">
      <div class="govuk-footer__navigation">
            <div class="govuk-grid-column-two-thirds govuk-!-display-none-print">
              <h2 class="govuk-footer__heading govuk-heading-m">Coronavirus (COVID-19)</h2>
                <ul class="govuk-footer__list">
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="coronavirusLinks" data-track-label="Coronavirus (COVID-19): guidance and support" href="/coronavirus">Coronavirus (COVID-19): guidance and support</a>
                      </li>
                </ul>
            </div>
            <div class="govuk-grid-column-one-third govuk-!-display-none-print">
              <h2 class="govuk-footer__heading govuk-heading-m">Brexit</h2>
                <ul class="govuk-footer__list govuk-footer__list--columns-1">
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="transitionLinks" data-track-label="Check what you need to do" href="/brexit">Check what you need to do</a>
                      </li>
                </ul>
            </div>
            <div class="govuk-grid-column-two-thirds govuk-!-display-none-print">
              <h2 class="govuk-footer__heading govuk-heading-m">Services and information</h2>
                <ul class="govuk-footer__list govuk-footer__list--columns-2">
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Benefits" href="/browse/benefits">Benefits</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Births, deaths, marriages and care" href="/browse/births-deaths-marriages">Births, deaths, marriages and care</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Business and self-employed" href="/browse/business">Business and self-employed</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Childcare and parenting" href="/browse/childcare-parenting">Childcare and parenting</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Citizenship and living in the UK" href="/browse/citizenship">Citizenship and living in the UK</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Crime, justice and the law" href="/browse/justice">Crime, justice and the law</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Disabled people" href="/browse/disabilities">Disabled people</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Driving and transport" href="/browse/driving">Driving and transport</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Education and learning" href="/browse/education">Education and learning</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Employing people" href="/browse/employing-people">Employing people</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Environment and countryside" href="/browse/environment-countryside">Environment and countryside</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Housing and local services" href="/browse/housing-local-services">Housing and local services</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Money and tax" href="/browse/tax">Money and tax</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Passports, travel and living abroad" href="/browse/abroad">Passports, travel and living abroad</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Visas and immigration" href="/browse/visas-immigration">Visas and immigration</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Working, jobs and pensions" href="/browse/working">Working, jobs and pensions</a>
                      </li>
                </ul>
            </div>
            <div class="govuk-grid-column-one-third govuk-!-display-none-print">
              <h2 class="govuk-footer__heading govuk-heading-m">Departments and policy</h2>
                <ul class="govuk-footer__list">
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="How government works" href="/government/how-government-works">How government works</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Departments" href="/government/organisations">Departments</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Worldwide" href="/world">Worldwide</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Services" href="/search/services">Services</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Guidance and regulation" href="/search/guidance-and-regulation">Guidance and regulation</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="News and communications" href="/search/news-and-communications">News and communications</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Research and statistics" href="/search/research-and-statistics">Research and statistics</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Policy papers and consultations" href="/search/policy-papers-and-consultations">Policy papers and consultations</a>
                      </li>
                      <li class="govuk-footer__list-item">
                        <a class="govuk-footer__link" data-track-category="footerClicked" data-track-action="footerLinks" data-track-label="Transparency and freedom of information releases" href="/search/transparency-and-freedom-of-information-releases">Transparency and freedom of information releases</a>
                      </li>
                </ul>
            </div>
      </div>

      <hr class="govuk-footer__section-break">
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
          <h2 class="govuk-visually-hidden">Support links</h2>
          <ul class="govuk-footer__inline-list govuk-!-display-none-print">
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/help">Help</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/help/privacy-notice">Privacy</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/help/cookies">Cookies</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/help/accessibility-statement">Accessibility statement</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/contact">Contact</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/help/terms-conditions">Terms and conditions</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" lang="cy" href="/cymraeg">Rhestr o Wasanaethau Cymraeg</a>
              </li>
              <li class="govuk-footer__inline-list-item">
                <a class="govuk-footer__link" href="/government/organisations/government-digital-service">Government Digital Service</a>
              </li>
          </ul>
        <svg role="presentation" focusable="false" class="govuk-footer__licence-logo" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 483.2 195.7" height="17" width="41">
          <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path>
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the <a class="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a class="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">?? Crown copyright</a>
      </div>
    </div>
  </div>
</footer>
    <script src="https://www.gov.uk/assets/static/application-0d977ddeba2c7dc80d5aae715d4289b88badf2a190543a77017bb29b52848b3e.js"></script>
<script src="/assets/government-frontend/application-ab19aa02766903b3db060e5924411efd813c6bfd371860c3f8dcb9dbc8f75961.js"></script><script type="application/ld+json">
  {
  "@context": "http://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.gov.uk/foreign-travel-advice/bangladesh/entry-requirements"
  },
  "name": "Entry requirements - Bangladesh travel advice",
  "datePublished": "2013-03-15T00:00:00.000+00:00",
  "dateModified": "2022-01-12T15:36:37.000+00:00",
  "text": "Latest travel advice for Bangladesh including how coronavirus (COVID-19) is affecting travel and entry requirements at this time as well as safety and security and local laws and customs",
  "publisher": {
    "@type": "Organization",
    "name": "GOV.UK",
    "url": "https://www.gov.uk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.gov.uk/assets/government-frontend/govuk_publishing_components/govuk-logo-e5962881254c9adb48f94d2f627d3bb67f258a6cbccc969e80abb7bbe4622976.png"
    }
  },
  "image": [
    "https://www.gov.uk/assets/government-frontend/govuk_publishing_components/govuk-schema-placeholder-1x1-5ceffac04f7f6d4f421bd1d36dbb723ef48c15426d7f77f90be80a83af3c747e.png",
    "https://www.gov.uk/assets/government-frontend/govuk_publishing_components/govuk-schema-placeholder-4x3-fcfe16abb1a015848e50d2ea797666a9eaf5158dca38ddfb1e52dc8c0543ab74.png",
    "https://www.gov.uk/assets/government-frontend/govuk_publishing_components/govuk-schema-placeholder-16x9-fcf616879a7b37970df4d2117de962e08f7d057674ef1af6063dcdd529424eee.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Foreign, Commonwealth \u0026 Development Office",
    "url": "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"
  },
  "about": [
    {
      "@context": "http://schema.org",
      "@type": "Thing",
      "sameAs": "https://www.gov.uk/world/living-in-bangladesh"
    },
    {
      "@context": "http://schema.org",
      "@type": "Thing",
      "sameAs": "https://www.gov.uk/world/travelling-to-bangladesh"
    }
  ],
  "headLine": "Entry requirements - Bangladesh travel advice",
  "description": "Latest travel advice for Bangladesh including how coronavirus (COVID-19) is affecting travel and entry requirements at this time as well as safety and security and local laws and customs",
  "articleBody": "\u003cp\u003eThis page reflects the UK government???s understanding of current rules for people travelling on a full ???British Citizen??? passport, for the most common types of travel.\u003c/p\u003e\n\n\u003cp\u003eThe authorities in Bangladesh set and enforce entry rules. For further information \u003ca href=\"https://www.gov.uk/government/publications/foreign-embassies-in-the-uk\"\u003econtact the embassy, high commission or consulate\u003c/a\u003e of the country or territory you???re travelling to. You should also consider checking with your transport provider or travel company to make sure your passport and other travel documents meet their requirements.\u003c/p\u003e\n\n\u003ch2 id=\"entry-rules-in-response-to-coronavirus-covid-19\"\u003eEntry rules in response to coronavirus (COVID-19)\u003c/h2\u003e\n\n\u003ch3 id=\"entry-to-bangladesh\"\u003eEntry to Bangladesh\u003c/h3\u003e\n\n\u003cp\u003ePassengers arriving from the UK will need:\u003c/p\u003e\n\n\u003cul\u003e\n  \u003cli\u003eA medical certificate indicating a negative PCR test taken within 48 hours prior to departure (for passengers aged 12 or over)\u003c/li\u003e\n  \u003cli\u003eConfirmation of your vaccination status, with vaccination course completed 14 days before entry, if you are relying on a completed COVID-19 vaccination course for quarantine exemptions  (See Quarantine requirements)\u003c/li\u003e\n  \u003cli\u003eA completed Health Declaration Form and Passenger Locator Form provided by cabin crew.\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eYou may be subjected to additional health screening measures at the airport.\u003c/p\u003e\n\n\u003cp\u003eYou should not use the NHS testing service to get a test in order to facilitate your travel to another country. You should arrange to take a private test.\u003c/p\u003e\n\n\u003ch3 id=\"quarantine-requirements\"\u003eQuarantine requirements\u003c/h3\u003e\n\n\u003cp\u003eBangladesh operates a number of quarantine regimes depending on passengers??? circumstances:\u003c/p\u003e\n\n\u003cul\u003e\n  \u003cli\u003ePassengers arriving from the majority of countries, including the UK, but excluding those territories named in the paragraphs below, are exempt from quarantine provided they can offer evidence of having completed a WHO approved vaccination course at least 14 day prior to their arrival in Bangladesh. Arrivals who are unable to provide this evidence are required to complete a 14 day period of home quarantine\u003c/li\u003e\n  \u003cli\u003ePassengers who have visited, or transited Botswana, Eswatini, Ghana, Lesotho, Namibia, South Africa and Zimbabwe, within the preceding 14 days of 4 December, are required to complete mandatory 14 day quarantine at a government nominated quarantine hotel upon arrival in Bangladesh, regardless of vaccination status\u003c/li\u003e\n  \u003cli\u003ePassengers whose journey originates from, or who have visited within the preceding 15 days of 4 December, Armenia, Bulgaria, Estonia, Georgia, Latvia, Lithuania, Moldova, Mongolia, the Palestinian Occupied Territories, Romania, Serbia, Slovenia and Ukraine are also required to quarantine. However, those that can offer evidence of having completed a WHO approved vaccination course at least 14 days prior to their arrival in Bangladesh, are able to quarantine at home for seven days. Those that are unable to provide this evidence are required to complete a period of quarantine at a government nominated quarantine hotel. This quarantine can be completed by testing negative for COVID-19 on the seventh day. You should note that transiting the countries in this paragraph, without exiting the airport, does not qualify as a visit\u003c/li\u003e\n  \u003cli\u003eChildren under 18 are able to follow the same quarantine regime that applies to those family members they are travelling with, regardless of their vaccination status\u003c/li\u003e\n  \u003cli\u003ePassengers that are subject to mandatory quarantine hotel stay should confirm their stay prior to travel. Proof of a quarantine hotel reservation will be required at airport check-in\u003c/li\u003e\n  \u003cli\u003eIn all circumstances, people staying in a government approved hotel, government facility or hospital will need to cover the costs of those stays and any necessary COVID-19 tests\u003c/li\u003e\n  \u003cli\u003eIn all circumstances, anyone displaying COVID-19 symptoms on arrival will be transferred to a designated government hospital where their quarantine period will be assessed and determined.\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eThe Bangladesh authorities may retain passports of any passengers in quarantine and will return them at the end of the quarantine period.\u003c/p\u003e\n\n\u003cp\u003ePassengers with a No Visa Required certificate (an arrangement for foreign nationals of Bangladeshi heritage) arriving in Bangladesh without a medical certificate indicating they are COVID-19 negative, or such passengers who display symptoms, will be transferred to a government facility where their quarantine period will be assessed and determined.\u003c/p\u003e\n\n\u003ch2 id=\"regular-entry-requirements\"\u003eRegular entry requirements\u003c/h2\u003e\n\n\u003ch3 id=\"visas\"\u003eVisas\u003c/h3\u003e\n\n\u003cp\u003eYou will need a visa to enter Bangladesh. You can get a visa from the Bangladesh High Commission in London. In some limited circumstances visas may be available on arrival, which includes categories of foreign investors and those of Bangladesh descent. We strongly recommend that you confirm the availability of such visa arrangements, including documentation requirements, with the Bangladeshi authorities in advance of travel.\u003c/p\u003e\n\n\u003cp\u003eForeign nationals currently in Bangladesh whose visas have expired have the option to extend their visa. There is a visa extension fee for this service, in addition to a penalty fee for overstaying. Visa extensions are available at the Department of Immigration and Passport of Bangladesh.\u003c/p\u003e\n\n\u003cp\u003eIf you intend to use Dhaka as a hub to visit other countries in the region, make sure you get a multiple entry visa. If you???re intending to work in Bangladesh make sure you get the correct visa before you travel.\u003c/p\u003e\n\n\u003cp\u003eIf you have had your passport renewed in Bangladesh, you will need a new visa. The Bangladesh Immigration \u0026amp; Passport Department (telephone: 880 2 8159878 / 8123788 / 8123323) is able to issue an ???exit visa??? or a ???no visa required??? stamp. Officers there are unlikely to speak English, so you may need an interpreter.\u003c/p\u003e\n\n\u003cp\u003eMake sure you have an entry stamp placed in your passport on entry into Bangladesh otherwise you may have problems on departure.\u003c/p\u003e\n\n\u003ch3 id=\"passport-validity\"\u003ePassport validity\u003c/h3\u003e\n\n\u003cp\u003eYour passport should be valid for at least 6 months when applying for a visa to visit Bangladesh.\u003c/p\u003e\n\n\u003ch3 id=\"uk-emergency-travel-documents\"\u003eUK Emergency Travel Documents\u003c/h3\u003e\n\n\u003cp\u003eUK Emergency Travel Documents (ETDs) are accepted for entry, airside transit and exit from Bangladesh. Holders of an ETD must apply for the appropriate Bangladesh visa to enter Bangladesh.\u003c/p\u003e\n\n\u003ch3 id=\"yellow-fever-certificate-requirements\"\u003eYellow fever certificate requirements\u003c/h3\u003e\n\n\u003cp\u003eCheck whether you need a yellow fever certificate by visiting the National Travel Health Network and Centre???s \u003ca rel=\"external\" href=\"http://travelhealthpro.org.uk/country/22/bangladesh#Vaccine_recommendations\"\u003eTravelHealthPro website\u003c/a\u003e.\u003c/p\u003e\n\n\u003ch3 id=\"working-in-bangladesh\"\u003eWorking in Bangladesh\u003c/h3\u003e\n\n\u003cp\u003eForeign nationals working in Bangladesh must get an Income Tax Clearance Certificate or an Income Tax Exemption Certificate before each departure from Bangladesh. Full details are available on the \u003ca rel=\"external\" href=\"http://www.nbr.gov.bd/\"\u003eBangladesh Board of Revenue website\u003c/a\u003e.\u003c/p\u003e\n"
}
</script><script type="application/ld+json">
  {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "name": "Home",
        "@id": "https://www.gov.uk/"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "name": "Passports, travel and living abroad",
        "@id": "https://www.gov.uk/browse/abroad"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "name": "Travel abroad",
        "@id": "https://www.gov.uk/browse/abroad/travel-abroad"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "name": "Foreign travel advice",
        "@id": "https://www.gov.uk/foreign-travel-advice"
      }
    }
  ]
}
</script>
</body>
</html>
`;
export { FAKE_COVID_PAGE_DOM };
