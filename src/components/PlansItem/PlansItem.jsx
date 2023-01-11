import React from "react";

export const PlansItem = () => {
  return (
    <div className="pricing-table">
      <svg
        width={46}
        height={46}
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={3} y={3} width={40} height={40} rx={20} fill="white" />
        <path
          d="M23.8333 14.6667L16.4112 23.5732C16.1205 23.922 15.9752 24.0964 15.973 24.2437C15.971 24.3718 16.0281 24.4936 16.1277 24.5741C16.2423 24.6667 16.4693 24.6667 16.9234 24.6667H23L22.1667 31.3334L29.5888 22.4268C29.8795 22.078 30.0248 21.9036 30.027 21.7563C30.0289 21.6283 29.9719 21.5064 29.8723 21.4259C29.7577 21.3334 29.5307 21.3334 29.0766 21.3334H23L23.8333 14.6667Z"
          stroke="#00A67E"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x={3}
          y={3}
          width={40}
          height={40}
          rx={20}
          stroke="#F9FAFB"
          strokeWidth={6}
        />
      </svg>

      <h3 className="pricing-title">Basic plan</h3>
      <div className="price">
        50 zł <br />
        <sup>per minute of the record</sup>
      </div>

      <ul className="table-list">
        <span>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.365967" width={24} height={24} rx={12} fill="#F3FCFA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
              fill="#00D8A4"
            />
          </svg>

          <li>Video ready in 24h</li>
        </span>
        <span>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.365967" width={24} height={24} rx={12} fill="#F3FCFA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
              fill="#00D8A4"
            />
          </svg>

          <li>Basic actors and voices</li>
        </span>
        <span>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.365967" width={24} height={24} rx={12} fill="#F3FCFA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
              fill="#00D8A4"
            />
          </svg>

          <li>Over 50 available languages</li>
        </span>
        <span>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.365967" width={24} height={24} rx={12} fill="#F3FCFA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
              fill="#00D8A4"
            />
          </svg>

          <li>2000 characters limit</li>
        </span>
        <span>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.365967" width={24} height={24} rx={12} fill="#F3FCFA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0964 7.756L9.93641 14.666L8.03641 12.636C7.68641 12.306 7.13641 12.286 6.73641 12.566C6.34641 12.856 6.23641 13.366 6.47641 13.776L8.72641 17.436C8.94641 17.776 9.32641 17.986 9.75641 17.986C10.1664 17.986 10.5564 17.776 10.7764 17.436C11.1364 16.966 18.0064 8.776 18.0064 8.776C18.9064 7.856 17.8164 7.046 17.0964 7.746V7.756Z"
              fill="#00D8A4"
            />
          </svg>

          <li>White or green background (greenscreen)</li>
        </span>
      </ul>

      <div className="table-buy">
        <button>Wybierz</button>
      </div>
    </div>
  );
};
