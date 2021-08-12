import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const Logo = () => {

  const delay = 50;

  const [logo, setLogo] = useState("#01627F")

  //Set color theme depending on scroll
  const changeLogo = () => {
    window.scrollY > 10
      ? setLogo("#f4f4f4")
      : setLogo("#01627F")
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(changeLogo, delay))
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="119" height="51">
      <defs>
        <linearGradient>
          <stop offset="0" stopColor={logo}></stop>
          <stop offset="1" stopColor={logo} stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient>
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
        <path d="M-6.5-6.5h110v60h-110z"></path>
      </defs>
      <path
        fill="none"
        stroke={logo}
        strokeWidth="0.791"
        d="M7541.09 520.32c-76.489-14.092-75.876-22.7 1.837-25.823"
      ></path>
      <g fill="none">
        <g fill={logo}>
          <text
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Rufina, Bold'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            x="138.466"
            y="53.088"
            strokeWidth="0.76"
            fontFamily="Rufina"
            fontSize="30.39"
            fontWeight="700"
            transform="matrix(.88924 0 0 1.12456 -97.996 -28.102)"
          >
            <tspan
              x="138.466"
              y="53.088"
              style={{
                InkscapeFontSpecification: "'Rufina, Bold'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
            >
              yannis
            </tspan>
          </text>
          <text
            style={{ lineHeight: "1.25" }}
            x="110.65"
            y="63.279"
            strokeWidth="0.424"
            fontFamily="sans-serif"
            fontSize="16.975"
            fontWeight="400"
            transform="matrix(.96534 0 0 1.0359 -97.996 -28.102)"
          >
            <tspan x="110.65" y="63.279">
              @
            </tspan>
          </text>
        </g>
        <path
          fill="none"
          stroke={logo}
          strokeWidth="2"
          d="M2 3h115v45H2z"
        ></path>
      </g>
    </svg>
  );
}

export default Logo;