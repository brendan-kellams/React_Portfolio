// import { css } from 'styled-components';

// const sizes = {
//   mobileS: 320,
//   mobileM: 375,
//   mobileL: 425,
//   tablet: 768,
//   laptop: 1024,
//   laptopL: 1440,
//   desktop: 2560
// };

// const media = Object.keys(sizes).reduce((finalMedia, size) => {
//   return {
//     ...finalMedia,
//     [size]: function (...args) {
//       console.log(args);
//       return css`
//         @media(max-width: ${sizes[size]}px) {
//           ${css(...args)}
//         } 
//       `;
//     }
//   };
// }, {});


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '414px',
  tablet: '768px',
  tabletL: '1024px',
  laptop: '1200px',
  desktop: '1440px',
  desktopL: '2560px'
};

const media = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  
}

export default media;