import type { SVGProps } from "react";

export default function FolderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="489" height="412" viewBox="0 0 489 412" fill="none" {...props}>
      <g filter="url(#filter0_d_533_200)">
        <rect
          x="22.0544"
          y="17.6435"
          width="177.655"
          height="147.197"
          rx="39.6979"
          fill="#DDDDDD"
        />
        <rect
          x="22.0544"
          y="52.4798"
          width="444.396"
          height="332.747"
          rx="39.6979"
          fill="#DDDDDD"
        />
        <path
          d="M178.758 34.461L203.355 62.5703H162.1L178.758 34.461Z"
          fill="#DDDDDD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_533_200"
          x="6.10352e-05"
          y="-1.23978e-05"
          width="488.505"
          height="411.692"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.41088" />
          <feGaussianBlur stdDeviation="11.0272" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_533_200"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_533_200"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
