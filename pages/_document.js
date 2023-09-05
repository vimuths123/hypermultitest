import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="https://round-surf-9d28.pasimenzis.workers.dev/" type="text/javascript" />
      <script
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


