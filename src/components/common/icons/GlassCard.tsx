import React from "react";

interface GlassCardProps extends React.SVGProps<SVGSVGElement> {}

const GlassCard: React.FC<GlassCardProps> = (props) => {
  return (
    <svg
      width={509}
      height={179}
      viewBox="0 0 509 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <foreignObject
        x="0.0000610352"
        y="-2.35651"
        width="508.566"
        height="180.465"
      >
        <div
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            clipPath: "url(#bgblur_0_534_214_clip_path)",
            width: "100%",
            height: "100%",
          }}
        />
      </foreignObject>

      <g filter="url(#filter0_d_534_214)" data-figma-bg-blur-radius="20">
        <path
          d="M463.246 17.6435H45.3205C31.598 17.6435 20.8569 29.4597 22.1619 43.12L30.5184 130.592C31.6588 142.529 41.6857 151.643 53.6771 151.643H455.269C467.299 151.643 477.345 142.472 478.437 130.492L486.414 43.0203C487.656 29.3942 476.929 17.6435 463.246 17.6435Z"
          fill="var(--glass-fill)"
          fillOpacity={0.2}
          shapeRendering="crispEdges"
        />
      </g>

      <defs>
        <filter
          id="filter0_d_534_214"
          x="0.0000610352"
          y="-2.35651"
          width="508.566"
          height="180.465"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
            result="effect1_dropShadow_534_214"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_534_214"
            result="shape"
          />
        </filter>

        <clipPath
          id="bgblur_0_534_214_clip_path"
          transform="translate(-0.0000610352 2.35651)"
        >
          <path d="M463.246 17.6435H45.3205C31.598 17.6435 20.8569 29.4597 22.1619 43.12L30.5184 130.592C31.6588 142.529 41.6857 151.643 53.6771 151.643H455.269C467.299 151.643 477.345 142.472 478.437 130.492L486.414 43.0203C487.656 29.3942 476.929 17.6435 463.246 17.6435Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlassCard;
