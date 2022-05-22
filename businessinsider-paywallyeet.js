// ==UserScript==
// @name         Business Insider Paywall-Yeet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  removes the article paywall from businessinsider.com
// @author       xsesupremebanana
// @match        *://www.businessinsider.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    console.log("wait script");
    window.setInterval(function(){
        //if (done == false)
        //{
            try{
                document.querySelector('.tp-modal').remove();
                document.querySelector('.tp-backdrop').remove();

            }catch(e)
            {
            }
       // }

    }, 1000);
})();