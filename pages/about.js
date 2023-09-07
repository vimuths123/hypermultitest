import Script from 'next/script'
import Menu from '../components/Menu'
import React from 'react'

const about = () => {
  return (
    <>
      <Script strategy='afterInteractive' src='https://hypertest.vimuthtweet.workers.dev/' type="text/javascript" onload="initializeHypersnippet()"></Script>
      <Script strategy="afterInteractive" id="gtm-script">
        {`
          function initializeHypersnippet() {
            function onloadFunction() {
              HYPERSNIPPET.initNextURL(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
            }
            onloadFunction();
  
  
            document.onclick = function (event) {
              HYPERSNIPPET.analyzer(event, sessionStorage.getItem("key"), isLoadedForClick);
            }
  
  
            window.addEventListener("beforeunload", function (e) {
              e.preventDefault();
            })
  
            const originalPush = window.history.pushState;
              window.history.pushState = function() {
              originalPush.apply(window.history, arguments);
              HYPERSNIPPET.initURLSinglePage(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
            };
          }       
        `}
      </Script>
      <Menu />
      <div>about</div>
    </>
  )
}

export default about