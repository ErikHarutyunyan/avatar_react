import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #4B565F;
    background-color: #fff;
  
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
.hiddenn{
  display: none;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

}
.show{
  display:block;
  visibility: visible;
  pointer-events: auto;
  transition: 0.3s all;
  animation: leaves 0.3s ease-in-out forwards;
  @keyframes leaves {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
    transform: scale(1);
    }
  }
}
@media only screen and (max-width: 500px) {
  img {
      width: 100%;
  }
}

.Man {
  visibility: visible;
  pointer-events: auto;
  transition: 0.3s all;
  animation: showBoxMan 0.3s ease-in-out forwards;
  @keyframes showBoxMan {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
    transform: scale(1);
    }
  }
}
.Women {
  visibility: visible;
  pointer-events: auto;
  transition: 0.3s all;
  animation: showBoxWomen 0.3s ease-in-out forwards;
  @keyframes showBoxWomen {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
    transform: scale(1);
    }
  }
}

input[type="radio"].custom-radio {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color:  #00D8A4;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="radio"].custom-radio::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #00D8A4;
  background-color: #fff;
}

input[type="radio"].custom-radio:checked::before {
  transform: scale(1);
}

input[type="radio"].custom-radio:checked:focus {
  background-color: #fff;
  border-color: initial;
}

input[type="radio"].custom-radio:focus {
--tw-ring-offset-width: 0;
}

input[type="radio"].custom-radio:checked:hover{
  background-color: #fff;
  border-color: initial;
}

.dropdownCustom {
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
}

.order {
    padding: 32px 32px 14px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
    width: 302px;
    height: 436px;

/* Base/White */
    background: #FFFFFF;
/* Gray/200 */
    border: 1px solid #EAECF0;
/* Shadow/lg */
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
}

.order-info {
    margin-top: 37px;
}

.order-detals h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
/* identical to box height, or 139% */
    color: #404040;
}

.payment-detals.flex {
    margin-top: 64px;
}

.order-info p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
/* or 156% */
    color: #697386;
}

.order-info span {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
/* or 156% */
/* Primary black */
    color: #414141;
}
`;
