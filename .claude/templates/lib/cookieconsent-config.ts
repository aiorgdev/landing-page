/**
 * Cookie Consent configuration using vanilla-cookieconsent v3
 *
 * STANDALONE VERSION - requires `vanilla-cookieconsent` npm package.
 * Copy this file to your project's src/lib/ folder.
 *
 * Features:
 * - GDPR-compliant cookie consent banner
 * - Google Consent Mode v2 integration
 * - Auto-clear cookies on rejection
 * - Opt-in by default (privacy-first)
 *
 * @see https://cookieconsent.orestbida.com/
 */

import type { CookieConsentConfig } from 'vanilla-cookieconsent'

// gtag is defined in the Consent Mode defaults <script> in your layout
declare function gtag(...args: unknown[]): void

/**
 * Cookie consent configuration
 *
 * Customize the translations and categories to match your tracking setup.
 * The /consent command will adapt this file to your specific needs.
 */
export const cookieConsentConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
    },
    preferencesModal: {
      layout: 'box',
    },
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false,
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: /^_gc/ },
          { name: /^_gid/ },
        ],
      },
    },
  },

  onConsent: ({ cookie }) => {
    // Update Google Consent Mode when user makes a choice
    if (typeof gtag === 'function') {
      const granted = cookie.categories.includes('analytics')
      gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      })
    }
  },

  onChange: ({ cookie }) => {
    // Update Google Consent Mode when user changes preferences
    if (typeof gtag === 'function') {
      const granted = cookie.categories.includes('analytics')
      gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      })
    }
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'We use cookies to measure advertising effectiveness and improve your experience. You can accept all cookies or customize your preferences.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          sections: [
            {
              title: 'Cookie usage',
              description:
                'We use cookies to ensure basic site functionality and to improve your experience. You can choose which categories to allow.',
            },
            {
              title: 'Strictly necessary cookies',
              description:
                'These cookies are essential for the website to function and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics & advertising cookies',
              description:
                'These cookies help us understand how visitors interact with the website, measure advertising effectiveness, and improve our services. They may be set by third-party services like Google Analytics or advertising platforms.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For questions about our cookie policy, please <a href="/privacy">contact us</a>.',
            },
          ],
        },
      },
    },
  },
}
