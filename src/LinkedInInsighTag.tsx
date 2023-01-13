import Script from 'next/script'
import React from 'react'

export type LinkedInInsightTagProps = {
  partnerId?: string;
}

export const LinkedInInsightTag = (props: LinkedInInsightTagProps) => {
  const partnerId = props.partnerId || process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {partnerId && (
        <>
          <Script>
            {`
              _linkedin_partner_id = "${partnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
          <Script>
            {`
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
          <noscript>
            <img height="1" width="1" style={{display: 'none'}} alt="" src={`https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`} />
          </noscript>
        </>
      )}
    </>
  )
}
