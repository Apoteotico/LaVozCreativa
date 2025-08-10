/// <reference types="astro/client" />

interface Window {
  /**
   * Google Analytics dataLayer.
   * @see https://developers.google.com/tag-manager/devguide
   */
  dataLayer: any[]

  /**
   * Google Analytics global site tag function.
   * @see https://developers.google.com/analytics/devguides/collection/gtagjs
   */
  gtag: (...args: any[]) => void
}

