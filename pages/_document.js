import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script type="text/javascript" async src="https://api.hypertarget.ai/"></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
              function onloadFunction(){
                HYPERSNIPPET.initURL(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
              }
              window.onload = onloadFunction;
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
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


