export const IcPlan = ({
  w = 40,
  h = 40,
  f = "none",
  s = "#414141",
  c = "",
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 40"
      fill={f}
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <g clipPath="url(#clip0_395_2408)">
        <path
          d="M8.83385 36.6666H32.1672M4.66718 13.3333H36.3338M17.1672 3.33325L13.8338 13.3333L20.5005 30.8333L27.1672 13.3333L23.8339 3.33325M21.4871 30.5813L36.3864 14.1921C36.6632 13.8877 36.8016 13.7354 36.8567 13.5621C36.9053 13.4094 36.9088 13.2459 36.8668 13.0912C36.8192 12.9157 36.6875 12.7577 36.4241 12.4416L29.2336 3.81301C29.0867 3.63666 29.0132 3.54848 28.9231 3.4851C28.8433 3.42893 28.7543 3.38722 28.66 3.36187C28.5537 3.33325 28.4389 3.33325 28.2093 3.33325H12.7917C12.5621 3.33325 12.4474 3.33325 12.341 3.36187C12.2468 3.38722 12.1577 3.42893 12.0779 3.4851C11.9878 3.54848 11.9143 3.63666 11.7674 3.81301L4.57689 12.4416C4.31351 12.7577 4.18182 12.9157 4.13419 13.0912C4.09221 13.2459 4.09574 13.4094 4.14433 13.5621C4.19948 13.7354 4.33785 13.8876 4.6146 14.1921L19.5139 30.5813C19.856 30.9576 20.027 31.1457 20.228 31.2153C20.4045 31.2764 20.5965 31.2764 20.7731 31.2153C20.9741 31.1457 21.1451 30.9576 21.4871 30.5813Z"
          stroke={s}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_395_2408">
          <rect width={40} height={40} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IcModel = ({
  w = 48,
  h = 48,
  f = "#414141",
  s = "#414141",
  c = "",
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 42 48"
      fill={f}
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <g clipPath="url(#clip0_395_3202)">
        <path
          d="M41.3164 18.7836V36.7067C41.327 36.8247 41.3127 36.9436 41.2743 37.0558C41.236 37.168 41.1746 37.2711 41.094 37.3585C41.0134 37.4459 40.9152 37.5157 40.8059 37.5634C40.6966 37.6112 40.5785 37.6359 40.459 37.6359C40.3395 37.6359 40.2215 37.6112 40.1121 37.5634C40.0028 37.5157 39.9047 37.4459 39.824 37.3585C39.7434 37.2711 39.682 37.168 39.6437 37.0558C39.6054 36.9436 39.5911 36.8247 39.6016 36.7067V18.7836C39.6016 11.7131 34.5312 1.7076 23.2472 1.7076C11.9631 1.7076 6.89278 11.6931 6.89278 18.7836V29.8829C6.89278 30.1094 6.8021 30.3266 6.64068 30.4867C6.47925 30.6468 6.26032 30.7368 6.03203 30.7368C5.80374 30.7368 5.58479 30.6468 5.42338 30.4867C5.26195 30.3266 5.17127 30.1094 5.17127 29.8829V18.7836C5.17127 10.986 10.7797 0 23.2472 0C35.7148 0 41.3232 11.006 41.3164 18.7836ZM5.17127 39.2681C5.17127 39.0417 5.26195 38.8245 5.42338 38.6644C5.58479 38.5042 5.80374 38.4142 6.03203 38.4142C6.26032 38.4142 6.47925 38.5042 6.64068 38.6644C6.8021 38.8245 6.89278 39.0417 6.89278 39.2681V44.3909C6.89278 44.6173 6.8021 44.8344 6.64068 44.9946C6.47925 45.1547 6.26032 45.2446 6.03203 45.2446C5.80374 45.2446 5.58479 45.1547 5.42338 44.9946C5.26195 44.8344 5.17127 44.6173 5.17127 44.3909V39.2681ZM26.6904 30.7495C26.893 30.7743 27.0802 30.8699 27.2185 31.019C27.3568 31.1682 27.437 31.3612 27.445 31.5637C27.4529 31.7661 27.388 31.9648 27.2618 32.1241C26.1605 33.1041 24.7355 33.6498 23.2561 33.6584C21.7767 33.667 20.3453 33.1378 19.2325 32.1709C19.0604 32.0213 18.9552 31.8102 18.9402 31.5838C18.925 31.3574 19.0012 31.1342 19.1519 30.9635C19.3026 30.7928 19.5155 30.6885 19.7437 30.6734C19.972 30.6585 20.197 30.734 20.3691 30.8835C21.1623 31.5767 22.1833 31.959 23.2405 31.959C24.2977 31.959 25.3186 31.5767 26.1119 30.8835C26.2826 30.7722 26.4876 30.7247 26.6904 30.7495ZM40.4624 46.0985C40.6907 46.0958 40.9106 46.1832 41.074 46.3415C41.2373 46.4997 41.3305 46.7158 41.3332 46.9423C41.3359 47.1687 41.2477 47.3869 41.0882 47.5489C40.9287 47.7109 40.7109 47.8034 40.4825 47.8061C32.07 47.8061 29.1245 41.9295 28.5462 37.8006C26.9529 38.7564 25.1261 39.2616 23.264 39.2616C21.4019 39.2616 19.5752 38.7564 17.9817 37.8006C17.4034 41.9362 14.458 47.8061 6.0522 47.8061C5.82391 47.8061 5.60497 47.7161 5.44355 47.556C5.28212 47.3958 5.19145 47.1787 5.19145 46.9522C5.19145 46.7258 5.28212 46.5086 5.44355 46.3485C5.60497 46.1884 5.82391 46.0985 6.0522 46.0985C13.9335 46.0985 16.2132 40.1152 16.3611 36.6399C13.7656 34.3304 11.98 31.2601 11.2638 27.8752C10.2106 27.3408 9.32691 26.5276 8.71094 25.5257C8.09493 24.5237 7.77055 23.3723 7.77372 22.1987C7.77372 20.111 9.01105 19.1371 10.356 18.8636V14.728C10.356 10.1922 15.0028 4.26898 23.2674 4.26898C25.4484 4.28043 27.5977 4.78858 29.5495 5.75425C31.5012 6.71993 33.2033 8.11732 34.5244 9.83873C35.6024 11.244 36.1837 12.9623 36.1788 14.728V18.8636C36.9535 18.9948 37.6499 19.411 38.1286 20.0294C38.6074 20.6477 38.8332 21.4224 38.7611 22.1987C38.7627 23.3719 38.4377 24.5228 37.8218 25.5245C37.206 26.5261 36.3232 27.3395 35.271 27.8752C34.5461 31.263 32.751 34.3333 30.1468 36.6399C30.2947 40.0952 32.5744 46.0985 40.4624 46.0985ZM28.3445 7.09721C28.4712 7.60576 28.4806 8.13605 28.3724 8.64876C28.2641 9.16148 28.0408 9.64338 27.7191 10.0588C30.2139 10.8173 32.4927 12.1498 34.3699 13.9476C33.9798 10.7392 30.9604 8.27785 28.3445 7.09721ZM25.6344 6.23006C20.712 5.25619 16.5225 6.72367 13.335 10.8392C12.6522 11.7389 12.2228 12.8024 12.091 13.9209C13.8525 12.2037 15.9924 10.9163 18.3418 10.1604C20.6911 9.40447 23.1854 9.20069 25.6278 9.56522C25.9452 9.41497 26.2133 9.1786 26.401 8.88348C26.5887 8.58837 26.6883 8.24656 26.6883 7.89763C26.6883 7.54871 26.5887 7.20692 26.401 6.91181C26.2133 6.61669 25.9452 6.38032 25.6278 6.23006H25.6344ZM12.9181 27.3215C12.9181 29.3493 16.2334 37.5605 23.2405 37.5605C30.2476 37.5605 33.5696 29.3227 33.5696 27.3215C33.5692 27.1494 33.621 26.9811 33.718 26.8384C33.8152 26.6957 33.9532 26.5852 34.1143 26.5211C34.9686 26.1581 35.6978 25.5558 36.2126 24.7882C36.7273 24.0206 37.0054 23.1207 37.0126 22.1987C37.0465 21.9667 37.0252 21.7301 36.9507 21.5076C36.8761 21.2851 36.7503 21.083 36.5831 20.9172C36.416 20.7514 36.2122 20.6266 35.9879 20.5526C35.7636 20.4787 35.5251 20.4576 35.2911 20.4912C35.0628 20.4912 34.8439 20.4012 34.6825 20.2411C34.5211 20.0809 34.4303 19.8638 34.4303 19.6373V16.529C33.1027 14.8421 31.4049 13.4776 29.466 12.539C27.5271 11.6006 25.3979 11.1128 23.2405 11.1128C21.083 11.1128 18.9539 11.6006 17.0149 12.539C15.076 13.4776 13.3783 14.8421 12.0506 16.529V19.6373C12.0506 19.8638 11.9599 20.0809 11.7985 20.2411C11.6371 20.4012 11.4181 20.4912 11.1899 20.4912C10.956 20.4576 10.7174 20.4787 10.4931 20.5526C10.2688 20.6266 10.065 20.7514 9.89784 20.9172C9.73075 21.083 9.60484 21.2851 9.53034 21.5076C9.45574 21.7301 9.43456 21.9667 9.46834 22.1987C9.47921 23.119 9.75796 24.0165 10.271 24.7833C10.7839 25.5501 11.5094 26.1536 12.36 26.5211C12.5223 26.5841 12.6618 26.6942 12.7601 26.837C12.8585 26.9797 12.9112 27.1486 12.9113 27.3215H12.9181ZM32.5138 23.1126C32.1367 23.6107 31.6494 24.0163 31.0894 24.2984C30.5295 24.5805 29.9118 24.7316 29.2839 24.7399C28.656 24.7483 28.0344 24.6139 27.4671 24.3468C26.8997 24.0797 26.4016 23.6871 26.011 23.1993C25.8666 23.0224 25.7989 22.7958 25.8229 22.5694C25.8468 22.343 25.9605 22.1352 26.1388 21.992C26.3172 21.8487 26.5456 21.7815 26.7739 21.8053C27.0022 21.829 27.2115 21.9418 27.356 22.1188C27.5833 22.4086 27.8753 22.6421 28.209 22.8011C28.5427 22.9601 28.909 23.0401 29.2792 23.0349C29.6493 23.0298 30.0133 22.9396 30.3423 22.7713C30.6713 22.603 30.9566 22.3614 31.1756 22.0653C31.3243 21.9169 31.5227 21.8278 31.7333 21.8149C31.9438 21.8021 32.1518 21.8664 32.3177 21.9955C32.4837 22.1247 32.596 22.3099 32.6334 22.5158C32.6708 22.7218 32.6306 22.9341 32.5205 23.1126H32.5138ZM20.4766 23.1993C20.0848 23.6885 19.5851 24.0822 19.016 24.35C18.4469 24.6179 17.8236 24.7528 17.1937 24.7445C16.5639 24.736 15.9443 24.5846 15.3827 24.3018C14.821 24.0188 14.3321 23.6121 13.9537 23.1126C13.8436 22.9341 13.8035 22.7218 13.8409 22.5158C13.8783 22.3099 13.9906 22.1247 14.1565 21.9955C14.3224 21.8664 14.5304 21.8021 14.741 21.8149C14.9515 21.8278 15.1499 21.9169 15.2987 22.0653C15.5184 22.3602 15.804 22.6008 16.1329 22.7682C16.4619 22.9357 16.8254 23.0254 17.1951 23.0306C17.5648 23.0357 17.9307 22.9561 18.2643 22.798C18.5979 22.6398 18.8901 22.4073 19.1182 22.1188C19.2627 21.9418 19.4721 21.829 19.7004 21.8053C19.9286 21.7815 20.1571 21.8487 20.3354 21.992C20.5138 22.1352 20.6274 22.343 20.6514 22.5694C20.6753 22.7958 20.6077 23.0224 20.4632 23.1993H20.4766ZM27.2551 18.6835C27.0878 18.8213 26.8742 18.8911 26.6572 18.8789C26.4402 18.8669 26.2357 18.7739 26.085 18.6185C25.9344 18.4631 25.8485 18.2568 25.8448 18.0412C25.841 17.8257 25.9197 17.6166 26.0648 17.4562C26.8112 16.7625 28.553 15.7819 32.117 16.9426C32.326 17.0193 32.4969 17.1734 32.5936 17.3726C32.6904 17.5717 32.7056 17.8003 32.6359 18.0102C32.5662 18.2203 32.4171 18.3952 32.22 18.4984C32.0229 18.6015 31.7932 18.6249 31.5791 18.5634C29.6356 17.9297 28.0218 17.9765 27.2752 18.6835H27.2551ZM14.9086 18.5634C14.691 18.6386 14.4522 18.625 14.2447 18.5256C14.0373 18.4261 13.8782 18.249 13.8024 18.0331C13.7266 17.8173 13.7403 17.5805 13.8406 17.3747C13.9409 17.169 14.1194 17.0111 14.337 16.9359C17.9212 15.7819 19.6697 16.7891 20.3892 17.4562C20.5344 17.6166 20.613 17.8257 20.6093 18.0412C20.6056 18.2568 20.5197 18.4631 20.369 18.6185C20.2183 18.7739 20.0139 18.8669 19.7969 18.8789C19.5798 18.8911 19.3662 18.8213 19.1989 18.6835C18.4525 17.9765 16.8453 17.9297 14.9019 18.5634H14.9086ZM9.4751 34.1519C9.49409 33.9394 9.59261 33.7416 9.7513 33.5976C9.90998 33.4535 10.1173 33.3735 10.3324 33.3735C10.5476 33.3735 10.7549 33.4535 10.9136 33.5976C11.0723 33.7416 11.1709 33.9394 11.1899 34.1519V35.0191C11.1899 35.2455 11.0991 35.4627 10.9377 35.6228C10.7763 35.7829 10.5574 35.8728 10.3291 35.8728C10.1008 35.8728 9.88186 35.7829 9.72044 35.6228C9.55901 35.4627 9.46834 35.2455 9.46834 35.0191V34.1519H9.4751ZM9.46834 38.4142C9.46834 38.1878 9.55901 37.9706 9.72044 37.8105C9.88186 37.6504 10.1008 37.5605 10.3291 37.5605C10.5574 37.5605 10.7763 37.6504 10.9377 37.8105C11.0991 37.9706 11.1899 38.1878 11.1899 38.4142V39.2681C11.1899 39.4945 11.0991 39.7117 10.9377 39.8718C10.7763 40.0319 10.5574 40.1218 10.3291 40.1218C10.1008 40.1218 9.88186 40.0319 9.72044 39.8718C9.55901 39.7117 9.46834 39.4945 9.46834 39.2681V38.4142ZM12.0574 37.5605C11.843 37.5424 11.6431 37.4455 11.4973 37.2887C11.3514 37.1318 11.27 36.9265 11.2691 36.713C11.2683 36.4997 11.348 36.2937 11.4927 36.1357C11.6374 35.9777 11.8364 35.8792 12.0506 35.8595H12.9113C13.1256 35.8784 13.325 35.9761 13.4703 36.1335C13.6156 36.291 13.6961 36.4966 13.6961 36.71C13.6961 36.9234 13.6156 37.129 13.4703 37.2865C13.325 37.4439 13.1256 37.5416 12.9113 37.5605H12.0574ZM8.6143 35.8595C8.82853 35.8792 9.02756 35.9777 9.17224 36.1357C9.31687 36.2937 9.39658 36.4997 9.39576 36.713C9.39493 36.9265 9.31349 37.1318 9.16768 37.2887C9.02176 37.4455 8.82195 37.5424 8.60758 37.5605H7.74683C7.53254 37.5416 7.33312 37.4439 7.18787 37.2865C7.04262 37.129 6.96207 36.9234 6.96207 36.71C6.96207 36.4966 7.04262 36.291 7.18787 36.1335C7.33312 35.9761 7.53254 35.8784 7.74683 35.8595H8.6143ZM3.44974 32.4444C3.33614 32.4452 3.22349 32.4238 3.11828 32.3813C3.01307 32.3388 2.91739 32.276 2.83675 32.1967C2.7561 32.1173 2.69211 32.0229 2.64843 31.9188C2.60475 31.8148 2.58226 31.7032 2.58227 31.5905V30.7368C2.58227 30.5103 2.67295 30.2932 2.83438 30.133C2.99581 29.9729 3.21473 29.8829 3.44302 29.8829C3.67131 29.8829 3.89025 29.9729 4.05168 30.133C4.2131 30.2932 4.30378 30.5103 4.30378 30.7368V31.5905C4.30378 31.8169 4.2131 32.0342 4.05168 32.1943C3.89025 32.3544 3.67131 32.4444 3.44302 32.4444H3.44974ZM3.44974 34.1519C3.56392 34.1519 3.67696 34.1745 3.78228 34.2182C3.8876 34.2619 3.9831 34.326 4.0632 34.4067C4.14331 34.4874 4.20643 34.5831 4.24888 34.6882C4.29134 34.7934 4.31229 34.9059 4.31051 35.0191V35.8728C4.31051 36.0993 4.21982 36.3165 4.0584 36.4766C3.89698 36.6367 3.67803 36.7267 3.44974 36.7267C3.22145 36.7267 3.00253 36.6367 2.8411 36.4766C2.67967 36.3165 2.58899 36.0993 2.58899 35.8728V35.0191C2.58721 34.9064 2.60794 34.7945 2.64998 34.6898C2.69202 34.5851 2.75453 34.4897 2.83393 34.409C2.91332 34.3284 3.00803 34.2642 3.11257 34.2201C3.21711 34.176 3.32941 34.1528 3.44302 34.1519H3.44974ZM5.16454 34.1519C4.93625 34.1519 4.71732 34.062 4.5559 33.9019C4.39447 33.7417 4.30378 33.5246 4.30378 33.2981C4.30378 33.0717 4.39447 32.8546 4.5559 32.6944C4.71732 32.5343 4.93625 32.4444 5.16454 32.4444H6.0253C6.25358 32.4444 6.47253 32.5343 6.63396 32.6944C6.79537 32.8546 6.88606 33.0717 6.88606 33.2981C6.88606 33.5246 6.79537 33.7417 6.63396 33.9019C6.47253 34.062 6.25358 34.1519 6.0253 34.1519H5.16454ZM1.72152 32.4444C1.9498 32.4444 2.16873 32.5343 2.33016 32.6944C2.49159 32.8546 2.58228 33.0717 2.58228 33.2981C2.58228 33.5246 2.49159 33.7417 2.33016 33.9019C2.16873 34.062 1.9498 34.1519 1.72152 34.1519H0.860754C0.632465 34.1519 0.413527 34.062 0.2521 33.9019C0.0906835 33.7417 0 33.5246 0 33.2981C0 33.0717 0.0906743 32.8546 0.2521 32.6944C0.413527 32.5343 0.632465 32.4444 0.860754 32.4444H1.72152ZM37.0126 38.4142C37.0126 38.6407 36.9219 38.8579 36.7605 39.018C36.5991 39.1781 36.3801 39.2681 36.1519 39.2681C35.9236 39.2681 35.7046 39.1781 35.5432 39.018C35.3818 38.8579 35.2911 38.6407 35.2911 38.4142V37.5605C35.2911 37.334 35.3818 37.1169 35.5432 36.9567C35.7046 36.7966 35.9236 36.7067 36.1519 36.7067C36.3801 36.7067 36.5991 36.7966 36.7605 36.9567C36.9219 37.1169 37.0126 37.334 37.0126 37.5605V38.4142ZM37.0193 42.6832C37.0193 42.9105 36.9283 43.1286 36.7662 43.2893C36.6042 43.4501 36.3844 43.5403 36.1552 43.5403C35.9261 43.5403 35.7063 43.4501 35.5442 43.2893C35.3822 43.1286 35.2911 42.9105 35.2911 42.6832V41.8295C35.2911 41.6031 35.3818 41.3859 35.5432 41.2257C35.7046 41.0656 35.9236 40.9757 36.1519 40.9757C36.3801 40.9757 36.5991 41.0656 36.7605 41.2257C36.9219 41.3859 37.0126 41.6031 37.0126 41.8295V42.6832H37.0193ZM37.8801 40.9757C37.767 40.9761 37.6551 40.9544 37.5505 40.9119C37.4458 40.8695 37.3507 40.8069 37.2704 40.7279C37.1903 40.6489 37.1264 40.5551 37.0828 40.4517C37.0392 40.3483 37.0164 40.2373 37.016 40.1252C37.0155 40.0131 37.0374 39.9019 37.0802 39.7983C37.1231 39.6945 37.1861 39.6001 37.2657 39.5205C37.3453 39.4409 37.44 39.3777 37.5442 39.3344C37.6485 39.291 37.7604 39.2685 37.8734 39.2681H38.7341C38.9624 39.2681 39.1813 39.358 39.3428 39.5181C39.5042 39.6782 39.5948 39.8954 39.5948 40.1218C39.5948 40.3483 39.5042 40.5654 39.3428 40.7256C39.1813 40.8857 38.9624 40.9757 38.7341 40.9757H37.8801ZM34.4371 39.2681C34.6653 39.269 34.8839 39.3597 35.0447 39.5205C35.2055 39.6812 35.2953 39.8988 35.2945 40.1252C35.2936 40.3516 35.202 40.5684 35.04 40.7279C34.8779 40.8874 34.6587 40.9765 34.4303 40.9757H33.5696C33.3413 40.9757 33.1224 40.8857 32.961 40.7256C32.7995 40.5654 32.7089 40.3483 32.7089 40.1218C32.7089 39.8954 32.7995 39.6782 32.961 39.5181C33.1224 39.358 33.3413 39.2681 33.5696 39.2681H34.4371Z"
          fill={f}
        />
      </g>
      <defs>
        <clipPath id="clip0_395_3202">
          <rect width={42} height={48} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IcText = ({
  w = 49,
  h = 48,
  f = "#414141",
  s = "#414141",
  c = "",
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 49 48"
      fill={f}
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <g clipPath="url(#clip0_395_1277)">
        <path
          d="M46.5298 10.6443C47.4339 11.1673 48.0936 12.0272 48.3641 13.0355C48.6346 14.0438 48.4939 15.1181 47.9728 16.0228L37.6526 33.8859V47.0625C37.6526 47.3112 37.5537 47.5496 37.3778 47.7254C37.2018 47.9013 36.9633 48 36.7144 48H1.4382C1.18937 48 0.950739 47.9013 0.774795 47.7254C0.598842 47.5496 0.5 47.3112 0.5 47.0625V0.937506C0.5 0.688866 0.598852 0.4504 0.774795 0.274588C0.950739 0.0987765 1.18937 0 1.4382 0H36.7144C36.9633 0 37.2018 0.0987765 37.3778 0.274588C37.5537 0.450409 37.6526 0.688866 37.6526 0.937506V4.68751C37.6526 4.93615 37.5537 5.17461 37.3778 5.35042C37.2018 5.52624 36.9633 5.62501 36.7144 5.62501C36.4656 5.62501 36.227 5.52624 36.051 5.35042C35.8751 5.17461 35.7762 4.93615 35.7762 4.68751V1.87501H2.3764V46.125H24.6464L25.3519 39.586C25.3655 39.4561 25.4065 39.3306 25.472 39.2175L35.7762 21.3834V13.125C35.7762 12.8763 35.8751 12.6379 36.051 12.4621C36.227 12.2863 36.4656 12.1875 36.7144 12.1875C36.9633 12.1875 37.2018 12.2863 37.3778 12.4621C37.5537 12.6379 37.6526 12.8763 37.6526 13.125V18.1369L41.1483 12.0853C41.6709 11.1811 42.5315 10.5212 43.5409 10.251C44.5503 9.98081 45.6258 10.1223 46.5307 10.6443H46.5298ZM26.6494 45.0544L29.768 42.7782L27.0632 41.2182L26.6494 45.0544ZM35.7762 37.1344L32.2974 43.155C32.2317 43.2677 32.1436 43.3657 32.0385 43.4428L28.3645 46.125H35.7762V37.1344ZM44.8729 17.6391L41.2984 15.5766L27.5661 39.3432L31.1415 41.4057L44.8729 17.6391ZM46.3478 15.0853C46.4879 14.8505 46.5799 14.5904 46.6185 14.3198C46.6572 14.0492 46.6416 13.7737 46.5727 13.5092C46.5038 13.2447 46.3829 12.9965 46.2172 12.779C46.0514 12.5616 45.8442 12.3793 45.6073 12.2426C45.3704 12.1059 45.1088 12.0177 44.8374 11.983C44.5662 11.9482 44.2906 11.9677 44.027 12.0403C43.7633 12.1129 43.5167 12.2372 43.3014 12.4058C43.0862 12.5745 42.9067 12.7842 42.7732 13.0228L42.2366 13.9529L45.8112 16.0154L46.3478 15.0853ZM37.3777 8.24344C37.5312 8.39684 37.6266 8.59866 37.6479 8.81451C37.6691 9.03037 37.6148 9.24691 37.4942 9.42721C37.3736 9.60754 37.1941 9.74053 36.9864 9.8034C36.7787 9.86636 36.5555 9.85535 36.355 9.77234C36.1545 9.68933 35.989 9.5393 35.8867 9.34804C35.7844 9.15673 35.7517 8.93591 35.794 8.72318C35.8365 8.51046 35.9513 8.319 36.1191 8.18144C36.2869 8.04388 36.4974 7.96871 36.7144 7.96876C36.9631 7.96943 37.2015 8.06814 37.3777 8.24344ZM28.5521 9.93752C28.8009 9.93752 29.0395 10.0362 29.2155 10.2121C29.3914 10.3879 29.4903 10.6264 29.4903 10.875C29.4903 11.1237 29.3914 11.3621 29.2155 11.5379C29.0395 11.7137 28.8009 11.8125 28.5521 11.8125H9.60052C9.35169 11.8125 9.11305 11.7137 8.93711 11.5379C8.76117 11.3621 8.66232 11.1237 8.66232 10.875C8.66232 10.6264 8.76117 10.3879 8.93711 10.2121C9.11305 10.0362 9.35169 9.93752 9.60052 9.93752H28.5521ZM28.5521 15.1875C28.8009 15.1875 29.0395 15.2863 29.2155 15.4621C29.3914 15.6379 29.4903 15.8763 29.4903 16.125C29.4903 16.3737 29.3914 16.6122 29.2155 16.788C29.0395 16.9638 28.8009 17.0625 28.5521 17.0625H9.60052C9.35169 17.0625 9.11305 16.9638 8.93711 16.788C8.76117 16.6122 8.66232 16.3737 8.66232 16.125C8.66232 15.8763 8.76117 15.6379 8.93711 15.4621C9.11305 15.2863 9.35169 15.1875 9.60052 15.1875H28.5521ZM28.5521 20.4375C28.8009 20.4375 29.0395 20.5363 29.2155 20.7121C29.3914 20.8879 29.4903 21.1264 29.4903 21.375C29.4903 21.6236 29.3914 21.8621 29.2155 22.0379C29.0395 22.2138 28.8009 22.3125 28.5521 22.3125H21.5859C21.3372 22.3125 21.0985 22.2138 20.9226 22.0379C20.7466 21.8621 20.6478 21.6236 20.6478 21.375C20.6478 21.1264 20.7466 20.8879 20.9226 20.7121C21.0985 20.5363 21.3372 20.4375 21.5859 20.4375H28.5521ZM29.2155 27.2879C29.0395 27.4637 28.8009 27.5625 28.5521 27.5625H9.60052C9.35169 27.5625 9.11305 27.4637 8.93711 27.2879C8.76117 27.1121 8.66232 26.8736 8.66232 26.625C8.66232 26.3764 8.76117 26.1379 8.93711 25.9621C9.11305 25.7863 9.35169 25.6875 9.60052 25.6875H28.5521C28.8009 25.6875 29.0395 25.7863 29.2155 25.9621C29.3914 26.1379 29.4903 26.3764 29.4903 26.625C29.4903 26.8736 29.3914 27.1121 29.2155 27.2879ZM25.1812 32.5379C25.0053 32.7137 24.7666 32.8125 24.5178 32.8125H18.6541C18.4053 32.8125 18.1666 32.7137 17.9907 32.5379C17.8147 32.3621 17.7159 32.1237 17.7159 31.875C17.7159 31.6264 17.8147 31.3879 17.9907 31.2121C18.1666 31.0362 18.4053 30.9375 18.6541 30.9375H24.5178C24.7666 30.9375 25.0053 31.0362 25.1812 31.2121C25.3571 31.3879 25.4561 31.6264 25.4561 31.875C25.4561 32.1237 25.3571 32.3621 25.1812 32.5379ZM9.60052 38.0625C9.35169 38.0625 9.11305 37.9638 8.93711 37.788C8.76117 37.6122 8.66232 37.3737 8.66232 37.125C8.66232 36.8763 8.76117 36.6379 8.93711 36.4621C9.11305 36.2863 9.35169 36.1875 9.60052 36.1875H17.8566C18.1055 36.1875 18.3441 36.2863 18.5201 36.4621C18.696 36.6379 18.7949 36.8763 18.7949 37.125C18.7949 37.3737 18.696 37.6122 18.5201 37.788C18.3441 37.9638 18.1055 38.0625 17.8566 38.0625H9.60052ZM9.60052 22.3125C9.35169 22.3125 9.11305 22.2138 8.93711 22.0379C8.76117 21.8621 8.66232 21.6236 8.66232 21.375C8.66232 21.1264 8.76117 20.8879 8.93711 20.7121C9.11305 20.5363 9.35169 20.4375 9.60052 20.4375H15.8545C16.1034 20.4375 16.342 20.5363 16.5179 20.7121C16.6939 20.8879 16.7927 21.1264 16.7927 21.375C16.7927 21.6236 16.6939 21.8621 16.5179 22.0379C16.342 22.2138 16.1034 22.3125 15.8545 22.3125H9.60052ZM9.60052 32.8125C9.35169 32.8125 9.11305 32.7137 8.93711 32.5379C8.76117 32.3621 8.66232 32.1237 8.66232 31.875C8.66232 31.6264 8.76117 31.3879 8.93711 31.2121C9.11305 31.0362 9.35169 30.9375 9.60052 30.9375H14.4322C14.6811 30.9375 14.9197 31.0362 15.0956 31.2121C15.2716 31.3879 15.3704 31.6264 15.3704 31.875C15.3704 32.1237 15.2716 32.3621 15.0956 32.5379C14.9197 32.7137 14.6811 32.8125 14.4322 32.8125H9.60052Z"
          fill={f}
        />
      </g>
      <defs>
        <clipPath id="clip0_395_1277">
          <rect
            width={48}
            height={48}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IcVoice = ({
  w = 42,
  h = 48,
  f = "#414141",
  s = "#414141",
  c = "",
}) => {
  return (
    <svg
      width={42}
      height={48}
      viewBox="0 0 42 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <g clipPath="url(#clip0_395_3792)">
        <path
          d="M9.08521 11.1802C8.87446 10.9674 8.58893 10.8479 8.29126 10.8479C7.99358 10.8479 7.70806 10.9674 7.4973 11.1802C5.59373 13.1109 4.52466 15.7271 4.52466 18.4546C4.52466 21.1822 5.59373 23.7984 7.4973 25.7291C7.60164 25.8353 7.72592 25.9193 7.86281 25.9762C7.99971 26.033 8.14646 26.0616 8.29443 26.0602C8.59379 26.0588 8.88098 25.9402 9.09579 25.7291C9.30601 25.5157 9.42407 25.2268 9.42407 24.9255C9.42407 24.6242 9.30601 24.3352 9.09579 24.1219C7.61519 22.6206 6.78362 20.586 6.78362 18.4648C6.78362 16.3436 7.61519 14.309 9.09579 12.8077C9.30356 12.5891 9.41875 12.2971 9.41677 11.9939C9.41479 11.6906 9.29581 11.4001 9.08521 11.1844V11.1802Z"
          fill={f}
        />
        <path
          d="M5.88158 9.56902C6.06965 9.35157 6.16901 9.0699 6.15954 8.78107C6.15007 8.49224 6.03247 8.21786 5.83057 8.01352C5.62867 7.80917 5.35756 7.69015 5.07219 7.68056C4.78682 7.67097 4.50853 7.77154 4.29369 7.96189C-1.43123 13.7562 -1.43123 23.1847 4.29369 28.9673C4.39832 29.0743 4.52323 29.1589 4.66092 29.216C4.79861 29.273 4.94626 29.3014 5.09505 29.2994C5.39494 29.2981 5.68263 29.179 5.89747 28.9673C6.10769 28.754 6.22574 28.465 6.22574 28.1636C6.22574 27.8624 6.10769 27.5734 5.89747 27.3601C4.74191 26.1932 3.82484 24.8072 3.19863 23.2815C2.57243 21.7557 2.24936 20.1201 2.24789 18.4679C2.24641 16.8157 2.56656 15.1795 3.19004 13.6526C3.81352 12.1257 4.72812 10.7381 5.88158 9.56903V9.56902Z"
          fill={f}
        />
        <path
          d="M32.9087 25.728C33.0138 25.8347 33.1389 25.919 33.2768 25.9759C33.4146 26.0328 33.5623 26.0611 33.7112 26.0591C34.0105 26.0576 34.2977 25.939 34.5125 25.728C36.4161 23.7972 37.4852 21.1811 37.4852 18.4535C37.4852 15.726 36.4161 13.1098 34.5125 11.179C34.411 11.0617 34.2868 10.9667 34.1476 10.9C34.0084 10.8332 33.8571 10.7961 33.7031 10.7909C33.5492 10.7857 33.3958 10.8126 33.2525 10.8699C33.1092 10.9272 32.979 11.0136 32.8701 11.1239C32.7612 11.2341 32.6758 11.3659 32.6192 11.5109C32.5626 11.6559 32.536 11.8112 32.5411 11.967C32.5463 12.1228 32.5829 12.276 32.6489 12.4169C32.7149 12.5578 32.8087 12.6835 32.9246 12.7862C34.4052 14.2875 35.2368 16.3221 35.2368 18.4433C35.2368 20.5646 34.4052 22.5991 32.9246 24.1005C32.817 24.2057 32.7311 24.3316 32.6719 24.4707C32.6127 24.6098 32.5815 24.7594 32.58 24.9108C32.5786 25.0623 32.6069 25.2126 32.6633 25.3528C32.7197 25.4932 32.8032 25.6207 32.9088 25.728H32.9087Z"
          fill={f}
        />
        <path
          d="M36.1046 27.3452C35.8944 27.5585 35.7764 27.8475 35.7764 28.1487C35.7764 28.4501 35.8944 28.7391 36.1046 28.9524C36.2093 29.0594 36.3342 29.144 36.4719 29.2011C36.6096 29.2581 36.7572 29.2865 36.906 29.2845C37.2059 29.2832 37.4936 29.1641 37.7084 28.9524C43.4333 23.1581 43.4333 13.7295 37.7084 7.95236C37.4936 7.76202 37.2153 7.66146 36.9299 7.67104C36.6445 7.68063 36.3734 7.79965 36.1715 8.00399C35.9696 8.20834 35.852 8.48273 35.8426 8.77156C35.8331 9.06039 35.9324 9.34206 36.1205 9.55951C38.4433 11.9231 39.7458 15.122 39.7428 18.4557C39.7399 21.7893 38.4316 24.9859 36.1046 27.3452H36.1046Z"
          fill={f}
        />
        <path
          d="M28.1783 3.017C30.0833 4.94508 31.1552 7.55899 31.1591 10.2857V24C31.1535 26.5275 30.2301 28.9647 28.5645 30.8481C26.8989 32.7314 24.6075 33.9293 22.1261 34.2139V36.5711H23.2545C23.5539 36.5719 23.8407 36.6926 24.0523 36.9068C24.264 37.1211 24.3833 37.4114 24.384 37.7143V42.2861H30.0296C30.3288 42.2869 30.6154 42.4075 30.827 42.6215C31.0387 42.8355 31.158 43.1255 31.1591 43.4282V46.8568C31.1583 47.1597 31.039 47.45 30.8274 47.6642C30.6157 47.8785 30.329 47.9991 30.0296 48H11.9635C11.6642 47.9991 11.3774 47.8785 11.1657 47.6642C10.9541 47.45 10.8348 47.1597 10.834 46.8568V43.4282C10.8351 43.1255 10.9545 42.8355 11.1661 42.6215C11.3777 42.4075 11.6644 42.2869 11.9635 42.2861H17.609V37.7143C17.6107 37.4119 17.7303 37.1224 17.9419 36.9089C18.1535 36.6954 18.4398 36.5751 18.7386 36.5743H19.867V34.2172C17.3851 33.9324 15.0932 32.7341 13.4276 30.8501C11.762 28.9661 10.8389 26.5281 10.834 24V10.2857C10.8379 7.55899 11.9099 4.94508 13.8149 3.017C15.7199 1.08891 18.3025 0.0039648 20.9966 0C23.6907 0.0039648 26.2733 1.08891 28.1783 3.017ZM23.2545 44.5715C22.9555 44.5703 22.6689 44.4494 22.4575 44.2353C22.2461 44.0211 22.1269 43.731 22.1261 43.4282V38.8575H19.867V43.4282C19.8662 43.731 19.7471 44.0211 19.5356 44.2353C19.3242 44.4494 19.0377 44.5703 18.7386 44.5715H13.092V45.7146H28.9011V44.5715H23.2545ZM25.5137 11.4289C25.214 11.4289 24.9267 11.3085 24.7149 11.094C24.5031 10.8797 24.384 10.5889 24.384 10.2857C24.384 9.98256 24.5031 9.69178 24.7149 9.47734C24.9267 9.26294 25.214 9.1425 25.5137 9.1425H28.8101C28.5413 7.23896 27.6032 5.49741 26.1678 4.23757C24.7325 2.97774 22.8964 2.28416 20.9966 2.28416C19.0967 2.28416 17.2606 2.97774 15.8253 4.23757C14.39 5.49741 13.4518 7.23896 13.183 9.1425H16.4795C16.7791 9.1425 17.0664 9.26294 17.2782 9.47734C17.49 9.69178 17.609 9.98256 17.609 10.2857C17.609 10.5889 17.49 10.8797 17.2782 11.094C17.0664 11.3085 16.7791 11.4289 16.4795 11.4289H13.092V13.7143H16.4795C16.6307 13.7096 16.7812 13.7357 16.9223 13.791C17.0633 13.8464 17.1919 13.9297 17.3005 14.0364C17.409 14.1429 17.4953 14.2704 17.5543 14.4114C17.6132 14.5524 17.6436 14.7039 17.6436 14.857C17.6436 15.0101 17.6132 15.1616 17.5543 15.3025C17.4953 15.4435 17.409 15.571 17.3005 15.6777C17.1919 15.7842 17.0633 15.8676 16.9223 15.9229C16.7812 15.9782 16.6307 16.0044 16.4795 15.9996H13.092V18.2861H16.4795C16.6307 18.2814 16.7812 18.3075 16.9223 18.3628C17.0633 18.4181 17.1919 18.5015 17.3005 18.6081C17.409 18.7146 17.4953 18.8422 17.5543 18.9832C17.6132 19.1242 17.6436 19.2756 17.6436 19.4288C17.6436 19.5818 17.6132 19.7334 17.5543 19.8743C17.4953 20.0152 17.409 20.1428 17.3005 20.2494C17.1919 20.3559 17.0633 20.4394 16.9223 20.4948C16.7812 20.55 16.6307 20.5762 16.4795 20.5715H13.092V22.8568H16.4795C16.7791 22.8568 17.0664 22.9772 17.2782 23.1916C17.49 23.406 17.609 23.6968 17.609 24C17.609 24.3032 17.49 24.594 17.2782 24.8084C17.0664 25.0228 16.7791 25.1432 16.4795 25.1432H13.183C13.4518 27.0468 14.39 28.7883 15.8253 30.0481C17.2606 31.308 19.0967 32.0016 20.9966 32.0016C22.8964 32.0016 24.7325 31.308 26.1678 30.0481C27.6032 28.7883 28.5413 27.0468 28.8101 25.1432H25.5137C25.214 25.1432 24.9267 25.0228 24.7149 24.8084C24.5031 24.594 24.384 24.3032 24.384 24C24.384 23.6968 24.5031 23.406 24.7149 23.1916C24.9267 22.9772 25.214 22.8568 25.5137 22.8568H28.9011V20.5715H25.5137C25.3625 20.5762 25.2119 20.55 25.0708 20.4948C24.9299 20.4394 24.8012 20.3559 24.6926 20.2494C24.5841 20.1428 24.4977 20.0152 24.4388 19.8743C24.3798 19.7334 24.3495 19.5818 24.3495 19.4288C24.3495 19.2756 24.3798 19.1242 24.4388 18.9832C24.4977 18.8422 24.5841 18.7146 24.6926 18.6081C24.8012 18.5015 24.9299 18.4181 25.0708 18.3628C25.2119 18.3075 25.3625 18.2814 25.5137 18.2861H28.9011V15.9996H25.5137C25.3625 16.0044 25.2119 15.9782 25.0708 15.9229C24.9299 15.8676 24.8012 15.7842 24.6926 15.6777C24.5841 15.571 24.4977 15.4435 24.4388 15.3025C24.3798 15.1616 24.3495 15.0101 24.3495 14.857C24.3495 14.7039 24.3798 14.5524 24.4388 14.4114C24.4977 14.2704 24.5841 14.1429 24.6926 14.0364C24.8012 13.9297 24.9299 13.8464 25.0708 13.791C25.2119 13.7357 25.3625 13.7096 25.5137 13.7143H28.9011V11.4289H25.5137Z"
          fill={f}
        />
        <path
          d="M28.1783 3.017C30.0833 4.94508 31.1552 7.55899 31.1591 10.2857V24C31.1535 26.5275 30.2301 28.9647 28.5645 30.8481C26.8989 32.7314 24.6075 33.9293 22.1261 34.2139V36.5711H23.2545C23.5539 36.5719 23.8407 36.6926 24.0523 36.9068C24.264 37.1211 24.3833 37.4114 24.384 37.7143V42.2861H30.0296C30.3288 42.2869 30.6154 42.4075 30.827 42.6215C31.0387 42.8355 31.158 43.1255 31.1591 43.4282V46.8568C31.1583 47.1597 31.039 47.45 30.8274 47.6642C30.6157 47.8785 30.329 47.9991 30.0296 48H11.9635C11.6642 47.9991 11.3774 47.8785 11.1657 47.6642C10.9541 47.45 10.8348 47.1597 10.834 46.8568V43.4282C10.8351 43.1255 10.9545 42.8355 11.1661 42.6215C11.3777 42.4075 11.6644 42.2869 11.9635 42.2861H17.609V37.7143C17.6107 37.4119 17.7303 37.1224 17.9419 36.9089C18.1535 36.6954 18.4398 36.5751 18.7386 36.5743H19.867V34.2172C17.3851 33.9324 15.0932 32.7341 13.4276 30.8501C11.762 28.9661 10.8389 26.5281 10.834 24V10.2857C10.8379 7.55899 11.9099 4.94508 13.8149 3.017C15.7199 1.08891 18.3025 0.0039648 20.9966 0C23.6907 0.0039648 26.2733 1.08891 28.1783 3.017ZM23.2545 44.5715C22.9555 44.5703 22.6689 44.4494 22.4575 44.2353C22.2461 44.0211 22.1269 43.731 22.1261 43.4282V38.8575H19.867V43.4282C19.8662 43.731 19.7471 44.0211 19.5356 44.2353C19.3242 44.4494 19.0377 44.5703 18.7386 44.5715H13.092V45.7146H28.9011V44.5715H23.2545ZM25.5137 11.4289C25.214 11.4289 24.9267 11.3085 24.7149 11.094C24.5031 10.8797 24.384 10.5889 24.384 10.2857C24.384 9.98256 24.5031 9.69178 24.7149 9.47734C24.9267 9.26294 25.214 9.1425 25.5137 9.1425H28.8101C28.5413 7.23896 27.6032 5.49741 26.1678 4.23757C24.7325 2.97774 22.8964 2.28416 20.9966 2.28416C19.0967 2.28416 17.2606 2.97774 15.8253 4.23757C14.39 5.49741 13.4518 7.23896 13.183 9.1425H16.4795C16.7791 9.1425 17.0664 9.26294 17.2782 9.47734C17.49 9.69178 17.609 9.98256 17.609 10.2857C17.609 10.5889 17.49 10.8797 17.2782 11.094C17.0664 11.3085 16.7791 11.4289 16.4795 11.4289H13.092V13.7143H16.4795C16.6307 13.7096 16.7812 13.7357 16.9223 13.791C17.0633 13.8464 17.1919 13.9297 17.3005 14.0364C17.409 14.1429 17.4953 14.2704 17.5543 14.4114C17.6132 14.5524 17.6436 14.7039 17.6436 14.857C17.6436 15.0101 17.6132 15.1616 17.5543 15.3025C17.4953 15.4435 17.409 15.571 17.3005 15.6777C17.1919 15.7842 17.0633 15.8676 16.9223 15.9229C16.7812 15.9782 16.6307 16.0044 16.4795 15.9996H13.092V18.2861H16.4795C16.6307 18.2814 16.7812 18.3075 16.9223 18.3628C17.0633 18.4181 17.1919 18.5015 17.3005 18.6081C17.409 18.7146 17.4953 18.8422 17.5543 18.9832C17.6132 19.1242 17.6436 19.2756 17.6436 19.4288C17.6436 19.5818 17.6132 19.7334 17.5543 19.8743C17.4953 20.0152 17.409 20.1428 17.3005 20.2494C17.1919 20.3559 17.0633 20.4394 16.9223 20.4948C16.7812 20.55 16.6307 20.5762 16.4795 20.5715H13.092V22.8568H16.4795C16.7791 22.8568 17.0664 22.9772 17.2782 23.1916C17.49 23.406 17.609 23.6968 17.609 24C17.609 24.3032 17.49 24.594 17.2782 24.8084C17.0664 25.0228 16.7791 25.1432 16.4795 25.1432H13.183C13.4518 27.0468 14.39 28.7883 15.8253 30.0481C17.2606 31.308 19.0967 32.0016 20.9966 32.0016C22.8964 32.0016 24.7325 31.308 26.1678 30.0481C27.6032 28.7883 28.5413 27.0468 28.8101 25.1432H25.5137C25.214 25.1432 24.9267 25.0228 24.7149 24.8084C24.5031 24.594 24.384 24.3032 24.384 24C24.384 23.6968 24.5031 23.406 24.7149 23.1916C24.9267 22.9772 25.214 22.8568 25.5137 22.8568H28.9011V20.5715H25.5137C25.3625 20.5762 25.2119 20.55 25.0708 20.4948C24.9299 20.4394 24.8012 20.3559 24.6926 20.2494C24.5841 20.1428 24.4977 20.0152 24.4388 19.8743C24.3798 19.7334 24.3495 19.5818 24.3495 19.4288C24.3495 19.2756 24.3798 19.1242 24.4388 18.9832C24.4977 18.8422 24.5841 18.7146 24.6926 18.6081C24.8012 18.5015 24.9299 18.4181 25.0708 18.3628C25.2119 18.3075 25.3625 18.2814 25.5137 18.2861H28.9011V15.9996H25.5137C25.3625 16.0044 25.2119 15.9782 25.0708 15.9229C24.9299 15.8676 24.8012 15.7842 24.6926 15.6777C24.5841 15.571 24.4977 15.4435 24.4388 15.3025C24.3798 15.1616 24.3495 15.0101 24.3495 14.857C24.3495 14.7039 24.3798 14.5524 24.4388 14.4114C24.4977 14.2704 24.5841 14.1429 24.6926 14.0364C24.8012 13.9297 24.9299 13.8464 25.0708 13.791C25.2119 13.7357 25.3625 13.7096 25.5137 13.7143H28.9011V11.4289H25.5137Z"
          fill={f}
        />
        <path
          d="M36.1046 27.3452C35.8944 27.5585 35.7764 27.8475 35.7764 28.1487C35.7764 28.4501 35.8944 28.7391 36.1046 28.9524C36.2093 29.0594 36.3342 29.144 36.4719 29.2011C36.6096 29.2581 36.7572 29.2865 36.906 29.2845C37.2059 29.2832 37.4936 29.1641 37.7084 28.9524C43.4333 23.1581 43.4333 13.7295 37.7084 7.95236C37.4936 7.76202 37.2153 7.66146 36.9299 7.67104C36.6445 7.68063 36.3734 7.79965 36.1715 8.00399C35.9696 8.20834 35.852 8.48273 35.8426 8.77156C35.8331 9.06039 35.9324 9.34206 36.1205 9.55951C38.4433 11.9231 39.7458 15.122 39.7428 18.4557C39.7399 21.7893 38.4316 24.9859 36.1046 27.3452H36.1046Z"
          fill={f}
        />
        <path
          d="M32.9087 25.728C33.0138 25.8347 33.1389 25.919 33.2768 25.9759C33.4146 26.0328 33.5623 26.0611 33.7112 26.0591C34.0105 26.0576 34.2977 25.939 34.5125 25.728C36.4161 23.7972 37.4852 21.1811 37.4852 18.4535C37.4852 15.726 36.4161 13.1098 34.5125 11.179C34.411 11.0617 34.2868 10.9667 34.1476 10.9C34.0084 10.8332 33.8571 10.7961 33.7031 10.7909C33.5492 10.7857 33.3958 10.8126 33.2525 10.8699C33.1092 10.9272 32.979 11.0136 32.8701 11.1239C32.7612 11.2341 32.6758 11.3659 32.6192 11.5109C32.5626 11.6559 32.536 11.8112 32.5411 11.967C32.5463 12.1228 32.5829 12.276 32.6489 12.4169C32.7149 12.5578 32.8087 12.6835 32.9246 12.7862C34.4052 14.2875 35.2368 16.3221 35.2368 18.4433C35.2368 20.5646 34.4052 22.5991 32.9246 24.1005C32.817 24.2057 32.7311 24.3316 32.6719 24.4707C32.6127 24.6098 32.5815 24.7594 32.58 24.9108C32.5786 25.0623 32.6069 25.2126 32.6633 25.3528C32.7197 25.4932 32.8032 25.6207 32.9088 25.728H32.9087Z"
          fill={f}
        />
        <path
          d="M5.88158 9.56902C6.06965 9.35157 6.16901 9.0699 6.15954 8.78107C6.15007 8.49224 6.03247 8.21786 5.83057 8.01352C5.62867 7.80917 5.35756 7.69015 5.07219 7.68056C4.78682 7.67097 4.50853 7.77154 4.29369 7.96189C-1.43123 13.7562 -1.43123 23.1847 4.29369 28.9673C4.39832 29.0743 4.52323 29.1589 4.66092 29.216C4.79861 29.273 4.94626 29.3014 5.09505 29.2994C5.39494 29.2981 5.68263 29.179 5.89747 28.9673C6.10769 28.754 6.22574 28.465 6.22574 28.1636C6.22574 27.8624 6.10769 27.5734 5.89747 27.3601C4.74191 26.1932 3.82484 24.8072 3.19863 23.2815C2.57243 21.7557 2.24936 20.1201 2.24789 18.4679C2.24641 16.8157 2.56656 15.1795 3.19004 13.6526C3.81352 12.1257 4.72812 10.7381 5.88158 9.56903V9.56902Z"
          fill={f}
        />
        <path
          d="M9.08521 11.1802C8.87446 10.9674 8.58893 10.8479 8.29126 10.8479C7.99358 10.8479 7.70806 10.9674 7.4973 11.1802C5.59373 13.1109 4.52466 15.7271 4.52466 18.4546C4.52466 21.1822 5.59373 23.7984 7.4973 25.7291C7.60164 25.8353 7.72592 25.9193 7.86281 25.9762C7.99971 26.033 8.14646 26.0616 8.29443 26.0602C8.59379 26.0588 8.88098 25.9402 9.09579 25.7291C9.30601 25.5157 9.42407 25.2268 9.42407 24.9255C9.42407 24.6242 9.30601 24.3352 9.09579 24.1219C7.61519 22.6206 6.78362 20.586 6.78362 18.4648C6.78362 16.3436 7.61519 14.309 9.09579 12.8077C9.30356 12.5891 9.41875 12.2971 9.41677 11.9939C9.41479 11.6906 9.29581 11.4001 9.08521 11.1844V11.1802Z"
          fill={f}
        />
      </g>
      <defs>
        <clipPath id="clip0_395_3792">
          <rect width={42} height={48} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IcBg = ({ w = 40, h = 40, f = "none", s = "#414141", c = "" }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 40"
      fill={f}
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <path
        d="M28.3333 35L19.9999 28.3333L11.6666 35M11.3333 28.3333H28.6666C31.4668 28.3333 32.867 28.3333 33.9365 27.7884C34.8773 27.309 35.6423 26.5441 36.1216 25.6033C36.6666 24.5337 36.6666 23.1336 36.6666 20.3333V13C36.6666 10.1997 36.6666 8.79961 36.1216 7.73005C35.6423 6.78924 34.8773 6.02433 33.9365 5.54497C32.867 5 31.4668 5 28.6666 5H11.3333C8.53299 5 7.13286 5 6.0633 5.54497C5.12249 6.02433 4.35759 6.78924 3.87822 7.73005C3.33325 8.79961 3.33325 10.1997 3.33325 13V20.3333C3.33325 23.1336 3.33325 24.5337 3.87822 25.6033C4.35759 26.5441 5.12249 27.309 6.0633 27.7884C7.13286 28.3333 8.53299 28.3333 11.3333 28.3333Z"
        stroke={s}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const IcPayment = ({
  w = 42,
  h = 48,
  f = "none",
  s = "#414141",
  c = "",
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 42 48"
      fill={f}
      xmlns="http://www.w3.org/2000/svg"
      className={c}
    >
      <path
        d="M29 36L33 40L41 32M41 20H1M41 24V16.4C41 14.1598 41 13.0397 40.564 12.184C40.1805 11.4314 39.5686 10.8195 38.816 10.436C37.9603 10 36.8402 10 34.6 10H7.4C5.15979 10 4.03969 10 3.18404 10.436C2.43139 10.8195 1.81947 11.4314 1.43597 12.184C1 13.0397 1 14.1598 1 16.4V31.6C1 33.8402 1 34.9603 1.43597 35.816C1.81947 36.5686 2.43139 37.1805 3.18404 37.564C4.03969 38 5.15979 38 7.4 38H21"
        stroke={s}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IcImp = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 11.9999C21.6 14.546 20.5886 16.9878 18.7882 18.7881C16.9879 20.5885 14.5461 21.5999 12 21.5999C9.45395 21.5999 7.01215 20.5885 5.2118 18.7881C3.41145 16.9878 2.40002 14.546 2.40002 11.9999C2.40002 9.45382 3.41145 7.01203 5.2118 5.21168C7.01215 3.41133 9.45395 2.3999 12 2.3999C14.5461 2.3999 16.9879 3.41133 18.7882 5.21168C20.5886 7.01203 21.6 9.45382 21.6 11.9999ZM13.2 16.7999C13.2 17.1182 13.0736 17.4234 12.8486 17.6484C12.6235 17.8735 12.3183 17.9999 12 17.9999C11.6818 17.9999 11.3765 17.8735 11.1515 17.6484C10.9265 17.4234 10.8 17.1182 10.8 16.7999C10.8 16.4816 10.9265 16.1764 11.1515 15.9514C11.3765 15.7263 11.6818 15.5999 12 15.5999C12.3183 15.5999 12.6235 15.7263 12.8486 15.9514C13.0736 16.1764 13.2 16.4816 13.2 16.7999ZM12 5.9999C11.6818 5.9999 11.3765 6.12633 11.1515 6.35137C10.9265 6.57642 10.8 6.88164 10.8 7.1999V11.9999C10.8 12.3182 10.9265 12.6234 11.1515 12.8484C11.3765 13.0735 11.6818 13.1999 12 13.1999C12.3183 13.1999 12.6235 13.0735 12.8486 12.8484C13.0736 12.6234 13.2 12.3182 13.2 11.9999V7.1999C13.2 6.88164 13.0736 6.57642 12.8486 6.35137C12.6235 6.12633 12.3183 5.9999 12 5.9999Z"
        fill="#00D8A4"
      />
    </svg>
  );
};

export const IcArRight = () => {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.71436 3.33337L11.3204 8.00004L6.71436 12.6667"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};