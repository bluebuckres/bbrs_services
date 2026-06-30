"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function NeetoCalPopup() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  // Hide the popup via CSS on the contact page since NeetoCal injects it into the body
  useEffect(() => {
    // The floating widget is typically injected globally. 
    // If it exists, we can hide/show it based on the route.
    const styleId = "neetocal-hider";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement;
    
    if (isContactPage) {
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = styleId;
        // The NeetoCal floating button container usually has specific classes/IDs. 
        // A broad catch for the NeetoCal iframe/button container:
        styleEl.innerHTML = `
          #neetocal-floating-button, 
          .neetocal-floating-btn-container,
          [id^="neeto-cal-floating"] {
            display: none !important;
          }
        `;
        document.head.appendChild(styleEl);
      }
    } else {
      if (styleEl) {
        styleEl.remove();
      }
    }
    
    return () => {
      // Don't remove on unmount, let the route logic handle it
    };
  }, [isContactPage]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            #neetocal-floating-button, 
            .neetocal-floating-btn-container,
            [id^="neeto-cal-floating"] {
              display: none !important;
            }
          }
        `
      }} />
      <Script id="neetocal-init" strategy="afterInteractive">
        {`window.neetoCal = window.neetoCal || { embed: function(){(window.neetoCal.q=window.neetoCal.q||[]).push(arguments)} };`}
      </Script>
      <Script src="https://cdn.neetocal.com/javascript/embed.js" strategy="afterInteractive" />
      <Script id="neetocal-embed" strategy="lazyOnload">
        {`
          if (window.neetoCal && typeof window.neetoCal.embed === 'function') {
            window.neetoCal.embed({
              type: "floatingPopup",
              id: "8d7db280-85a4-44cd-b8c9-9473c207529d",
              organization: "bluebuck-research",
              styles: {
                btnTextColor: "#fff",
                btnPosition: "bottomRight",
                btnColor: "#059669", // Matched to Emerald-600
                btnText: "Schedule a meeting", 
                showIcon: true,
              },
              slug: "meeting-with-bluebuck-research",
              isSidebarAndCoverImgHidden: "false",
              shouldForwardQueryParams: "false"
            });
          }
        `}
      </Script>
    </>
  );
}
