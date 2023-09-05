import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <script type="text/javascript" async src="https://api.hypertarget.ai/"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
              function onloadFunction(){
                HYPERSNIPPET.initURL(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
              }
              window.onload = onloadFunction();
              document.onclick = function (event) {
                HYPERSNIPPET.analyzer(event,sessionStorage.getItem("key"),isLoadedForClick);
              }
              window.addEventListener("beforeunload", function(e) {
                e.preventDefault();
              });
              const originalPush = window.history.pushState;
              window.history.pushState = function() {
                originalPush.apply(window.history, arguments);
                HYPERSNIPPET.initURLSinglePage(["CODETOSITE","USERID"]);
              }
            `,
        }}
      /> */}

      <Script src="https://round-surf-9d28.pasimenzis.workers.dev/" type="text/javascript" />
      <Script id="hypertarget_track"
        dangerouslySetInnerHTML={{
          __html: `
                function onloadFunction() {
                  HYPERSNIPPET.initURL(["websiteId","userId"]);
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
                  HYPERSNIPPET.initURLSinglePage(["websiteId","userId"]);
                };
              `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


