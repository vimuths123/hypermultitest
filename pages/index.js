import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Script src="https://round-surf-9d28.pasimenzis.workers.dev/" type="text/javascript" />
      <Script id="my-script">{`
      function onloadFunction() {
        HYPERSNIPPET.initURL(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
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
      `}</Script>
      {/* <Script id="hypertarget_track"
        dangerouslySetInnerHTML={{
          __html: `
                alert('dds')
                function onloadFunction() {
                  HYPERSNIPPET.initURL(["d6936d43-1a4f-4802-b9cc-496562ab531e","c8911559-816a-43ba-8402-015d71a3a6b4"]);
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
      /> */}
      <p>Home</p>
    </>

  )
}
