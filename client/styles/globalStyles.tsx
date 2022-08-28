import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Noto Sans KR';
          font-weight: 400;
          font-style: normal;
          src: url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Regular.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Regular.woff') format('woff');
          unicode-range: U+0020-007E, U+1100-11F9, U+3131-318E, U+327F-327F, U+AC00-D7A3, U+FF01-FF60;
        }

        @font-face {
          font-family: 'Noto Sans KR';
          font-weight: 500;
          font-style: normal;
          src: url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Medium.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Medium.woff') format('woff');
          unicode-range: U+0020-007E, U+1100-11F9, U+3131-318E, U+327F-327F, U+AC00-D7A3, U+FF01-FF60;
        }

        @font-face {
          font-family: 'Noto Sans KR';
          font-weight: 700;
          font-style: normal;
          src: url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Bold.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/notosans/NotoSansKR-Bold.woff') format('woff');
          unicode-range: U+0020-007E, U+1100-11F9, U+3131-318E, U+327F-327F, U+AC00-D7A3, U+FF01-FF60;
        }

        @font-face {
          font-family: Roboto;
          font-weight: 400;
          font-style: normal;
          src: local('Roboto'),
            local('Roboto-Regular'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Regular.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Regular.woff') format('woff');
          unicode-range: U+000-5FF;
        }

        @font-face {
          font-family: Roboto;
          font-weight: 500;
          font-style: normal;
          src: local('Roboto Medium'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Medium.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Medium.woff') format('woff');
          unicode-range: U+000-5FF;
        }

        @font-face {
          font-family: Roboto;
          font-weight: 700;
          font-style: normal;
          src: local('Roboto Bold'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Bold.woff2') format('woff2'),
            url('https://static.wadiz.kr/assets/fonts/roboto/Roboto-Bold.woff') format('woff');
          unicode-range: U+000-5FF;
        }

        *, *::after, *::before {
          box-sizing: border-box;
        }

        html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          color: #212529;
          font-size: inherit;
        }

        article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
          display: block;
        }

        h1, h2, h3, h4, h5, strong {
          font-weight: 700;
        }

        body, button, input, select, table, textarea {
          font-family: Roboto,Noto Sans KR,-apple-system,Dotum,sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2;
        }

        ul, ol, li {
          list-style: none;
        }

        img, picture, video, canvas, svg {
          max-width: 100%; 
        }

        audio,
        canvas,
        img,
        svg,
        input,
        select,
        textarea,
        button {
          vertical-align: middle;
          border: 0;
        }

        iframe,
        img,
        video {
          vertical-align: top;
        }

        address,cite,dfn,em,var {
          font-style: normal;
          font-weight: 400;
        }

        a,
        button {
          outline-color: #5cdede;
          -webkit-appearance-color: #5cdede;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          border: 0;
          background: none; 
          color: inherit;
        }

        button:not(:disabled), input:not(:disabled), input:not(:disabled) + label {
          cursor: pointer;
        }

        input::-webkit-input-placeholder {
          color: inherit;
        }

        input[type=text]::-ms-clear,
        input[type=search]::-webkit-search-cancel-button, 
        input[type=search]::-webkit-search-decoration {
          display: none; /* ie10 이상에서 input textbox에 포커스시 생기는 삭제(x) 버튼 숨기기 */
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        
        body {
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-tap-highlight-color: transparent; /* 모바일에서 링크의 회색 강조 표시를 제거 */
          -webkit-text-size-adjust: none; /* text크기를 자동으로 조절하지 않을 경우 사용 */
          -webkit-font-smoothing: antialiased; /* 폰트를 부드럽게 */ 
        }

        .blind {
          position: absolute;
          clip: rect(0 0 0 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
      `}
    />
  );
};

export default GlobalStyles;
