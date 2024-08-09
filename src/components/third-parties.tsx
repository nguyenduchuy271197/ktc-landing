import { GoogleAnalytics } from "@next/third-parties/google";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function ThirdParties() {
  return (
    <div>
      <GoogleAnalytics gaId="G-029L97QDMN" />
      <Script
        id="hotjar-heatmap"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:4962457,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', '865110215480975'); 
          fbq('track', 'PageView');`,
        }}
      ></Script>
      <noscript>
        <Image
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=865110215480975&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>
      <div id="fb-root"></div>

      {/* <!-- Your Chat Plugin code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script
        id="chatbox"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "110804096994409");
    chatbox.setAttribute("attribution", "biz_inbox");
  `,
        }}
      ></Script>

      {/* <!-- Your SDK code --> */}
      <Script
        id="facebook-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v17.0'
      });
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  `,
        }}
      ></Script>

      {/* Zalo */}
      <div
        className="zalo-chat-widget"
        data-oaid="2343115192114364602"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="1"
        data-width="350"
        data-height="420"
      ></div>
      <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>
    </div>
  );
}
