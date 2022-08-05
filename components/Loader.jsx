import React from "react";

export default function Loader() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <section className="wrapper">
        <div className="spinner">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </section>
      <style jsx>
        {`
          * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }

          section.wrapper {
            padding: 40px 0;
          }

          div.spinner {
            -moz-animation: rotate 10s infinite linear;
            -webkit-animation: rotate 10s infinite linear;
            animation: rotate 10s infinite linear;
            margin: auto;
            width: 100px;
            height: 100px;
          }
          div.spinner i {
            -moz-animation: rotate 3s infinite
              cubic-bezier(0.09, 0.6, 0.8, 0.03);
            -webkit-animation: rotate 3s infinite
              cubic-bezier(0.09, 0.6, 0.8, 0.03);
            animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
            -moz-transform-origin: 50% 100% 0;
            -webkit-transform-origin: 50% 100% 0;
            transform-origin: 50% 100% 0;
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            border: solid 6px transparent;
            border-bottom: none;
          }
          div.spinner i:nth-child(1) {
            -moz-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              0.3,
              0.12,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
            width: 44px;
            height: 22px;
            margin-top: -22px;
            margin-left: -22px;
            border-color: #2172b8;
            border-top-left-radius: 36px;
            border-top-right-radius: 36px;
          }
          div.spinner i:nth-child(2) {
            -moz-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              0.6,
              0.24,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
            width: 58px;
            height: 29px;
            margin-top: -29px;
            margin-left: -29px;
            border-color: #18a39b;
            border-top-left-radius: 42px;
            border-top-right-radius: 42px;
          }
          div.spinner i:nth-child(3) {
            -moz-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              0.9,
              0.36,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
            width: 72px;
            height: 36px;
            margin-top: -36px;
            margin-left: -36px;
            border-color: #82c545;
            border-top-left-radius: 48px;
            border-top-right-radius: 48px;
          }
          div.spinner i:nth-child(4) {
            -moz-animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              1.2,
              0.48,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
            width: 86px;
            height: 43px;
            margin-top: -43px;
            margin-left: -43px;
            border-color: #f8b739;
            border-top-left-radius: 54px;
            border-top-right-radius: 54px;
          }
          div.spinner i:nth-child(5) {
            -moz-animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              1.5,
              0.6,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
            width: 100px;
            height: 50px;
            margin-top: -50px;
            margin-left: -50px;
            border-color: #f06045;
            border-top-left-radius: 60px;
            border-top-right-radius: 60px;
          }
          div.spinner i:nth-child(6) {
            -moz-animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              1.8,
              0.72,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);
            width: 114px;
            height: 57px;
            margin-top: -57px;
            margin-left: -57px;
            border-color: #ed2861;
            border-top-left-radius: 66px;
            border-top-right-radius: 66px;
          }
          div.spinner i:nth-child(7) {
            -moz-animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              2.1,
              0.84,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);
            width: 128px;
            height: 64px;
            margin-top: -64px;
            margin-left: -64px;
            border-color: #c12680;
            border-top-left-radius: 72px;
            border-top-right-radius: 72px;
          }
          div.spinner i:nth-child(8) {
            -moz-animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);
            -webkit-animation-timing-function: cubic-bezier(
              0.09,
              2.4,
              0.96,
              0.03
            );
            animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);
            width: 142px;
            height: 71px;
            margin-top: -71px;
            margin-left: -71px;
            border-color: #5d3191;
            border-top-left-radius: 78px;
            border-top-right-radius: 78px;
          }

          @-moz-keyframes rotate {
            to {
              -moz-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          @-webkit-keyframes rotate {
            to {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          @keyframes rotate {
            to {
              -moz-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
