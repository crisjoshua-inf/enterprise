// Add Font Faces to the page for the theme
const fontFaceTag = document.querySelector('#ids-font-face');
if (!fontFaceTag) {
  if (!window.SohoConfig) {
    window.SohoConfig = {};
  }
  if (!window.SohoConfig.fontPath) {
    window.SohoConfig.fontPath = '/fonts';
  }

  if (!window.SohoConfig.noFontFace) {
    const style = `<style>
      /* cyrillic-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-ext-300-v22.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-300-v22.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-ext-300-v22.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-300-v22.woff2) format('woff2');
        unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-vietnamese-300-v22.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-ext-300-v22.woff2) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-300-v22.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-ext-400-v22.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-400-v22.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-ext-400-v22.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-400-v22.woff2) format('woff2');
        unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-vietnamese-400-v22.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-ext-400-v22.woff2) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-400-v22.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-ext-600-v22.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-cyrillic-600-v22.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-ext-600-v22.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-greek-600-v22.woff2) format('woff2');
        unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-vietnamese-600-v22.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-ext-600-v22.woff2) format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${window.SohoConfig.fontPath}/source-sans-pro-latin-600-v22.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    </style>`;
    document.querySelector('head').insertAdjacentHTML('beforeend', style);
  }
}
