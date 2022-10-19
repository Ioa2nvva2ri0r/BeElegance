import React from 'react';
import PropTypes from 'prop-types';

const IconImportant = ({ title, className }) => {
  return title === 'Качество' ? (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_21182_313)">
        <path
          d="M37.3994 24.8337L28.2341 33.4905L23.8355 28.9652C23.3478 28.4632 22.5449 28.4518 22.0433 28.9394C21.5413 29.4276 21.5299 30.23 22.0175 30.7321L27.2931 36.1477C27.7832 36.6408 28.5753 36.6577 29.0858 36.1854L39.1667 26.677C39.4115 26.4461 39.5545 26.1273 39.564 25.7911C39.5734 25.455 39.4488 25.1287 39.2174 24.8844C38.7267 24.3744 37.9178 24.3521 37.3994 24.8337Z"
          fill="black"
        />
        <path
          d="M30.5983 11.5111C20.1236 11.5111 11.6063 20.0284 11.6063 30.5031C11.6063 40.9783 20.1236 49.4956 30.5983 49.4956C41.0736 49.4956 49.5908 40.9783 49.5908 30.5031C49.5908 20.0284 41.0736 11.5111 30.5983 11.5111ZM30.5983 46.9531C21.5219 46.9531 14.1488 39.5671 14.1488 30.5031C14.1488 21.4391 21.5219 14.0536 30.5983 14.0536C39.6837 14.0536 47.0484 21.4183 47.0484 30.5031C47.0484 39.5879 39.6837 46.9531 30.5983 46.9531Z"
          fill="black"
        />
        <path
          d="M56.7351 23.5113L57.1547 15.9728C57.184 15.4668 56.9089 14.9916 56.4555 14.7651L49.7433 11.3711L46.3492 4.65886C46.1183 4.20946 45.646 3.93585 45.1415 3.95969L37.5901 4.36688L31.2975 0.209557C30.8734 -0.0700149 30.3237 -0.0700149 29.8992 0.209557L23.6066 4.36688L16.0686 3.94727C15.5621 3.91748 15.0873 4.19258 14.8609 4.64645L11.4663 11.3586L4.75461 14.7527C4.30471 14.9831 4.03159 15.4554 4.05543 15.9604L4.47454 23.4989L0.317711 29.7915C0.0381393 30.2156 0.0381393 30.7653 0.317711 31.1898L4.46212 37.4949L4.04252 45.0334C4.01322 45.5394 4.28783 46.0146 4.7417 46.241L11.4539 49.6351L14.848 56.3473C15.0784 56.7972 15.5506 57.0703 16.0557 57.0465L23.5942 56.6269L29.8868 60.7837C30.3083 61.0722 30.8635 61.0722 31.2851 60.7837L37.5777 56.6269L45.1162 57.0465C45.6222 57.0758 46.0969 56.8007 46.3239 56.3473L49.718 49.6351L56.4302 46.241C56.8796 46.0101 57.1532 45.5384 57.1293 45.0334L56.7097 37.4949L60.8666 31.2023C61.1461 30.7782 61.1461 30.228 60.8666 29.8039L56.7351 23.5113ZM54.3704 36.4525C54.2154 36.68 54.1434 36.9536 54.1673 37.2282L54.5611 44.3595L48.2178 47.5629C47.976 47.6841 47.7798 47.8807 47.6587 48.1225L44.4548 54.4658L37.3235 54.072C37.0503 54.0621 36.7807 54.1326 36.5478 54.2751L30.5983 58.2035L24.6494 54.2751C24.4428 54.1356 24.1995 54.0601 23.9502 54.0591H23.8866L16.7548 54.4534L13.5514 48.1096C13.4303 47.8678 13.2341 47.6716 12.9918 47.5505L6.63563 44.3595L7.02991 37.2282C7.03984 36.9551 6.96883 36.6854 6.82632 36.4525L2.89841 30.5031L6.82632 24.5536C6.98174 24.3267 7.05375 24.0526 7.02991 23.7785L6.63563 16.6467L12.9794 13.4433C13.2212 13.3221 13.4174 13.126 13.5385 12.8841L16.7419 6.54038L23.8737 6.93467C24.1463 6.9441 24.416 6.87359 24.6494 6.73107L30.5983 2.80317L36.5478 6.73107C36.7752 6.8865 37.0493 6.9585 37.3235 6.93467L44.4548 6.54038L47.6587 12.8841C47.7798 13.126 47.976 13.3221 48.2178 13.4433L54.5611 16.6467L54.1673 23.7785C54.1573 24.0511 54.2284 24.3207 54.3704 24.5536L58.2988 30.5031L54.3704 36.4525Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_21182_313">
          <rect width="61" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : title === 'Скорость' ? (
    <svg
      width="61"
      height="63"
      viewBox="0 0 61 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56.6611 41.349L50.7656 37.1565C51.7557 33.5159 51.7501 29.6761 50.7493 26.0383L56.6643 21.8978L51.9421 13.7273L45.3641 16.7368C42.7053 14.0589 39.3762 12.144 35.7246 11.1923L35.0973 4.00004H25.6528L25.0256 11.1923C21.3747 12.1453 18.0467 14.0613 15.3893 16.74L8.80807 13.7305L4.08907 21.901L10.0041 26.0415C9.00281 29.678 8.99608 33.5166 9.98457 37.1565L4.08907 41.349L8.80807 49.4805L15.3893 46.4678C18.0471 49.1453 21.375 51.0602 25.0256 52.0123L25.6528 59.2045H35.0973L35.7246 52.0123C39.3751 51.06 42.703 49.1452 45.3608 46.4678L51.9421 49.4805L56.6643 41.3523L56.6611 41.349ZM36.8913 0.701295C37.3097 0.700852 37.712 0.861758 38.0147 1.15052C38.3174 1.43928 38.4971 1.83365 38.5163 2.25154L39.0948 8.8653C41.4973 9.78084 43.7386 11.0732 45.7346 12.6938L51.7471 9.88904C52.1184 9.69797 52.5491 9.65721 52.9497 9.77522C53.3503 9.89322 53.6901 10.1609 53.8986 10.5228L60.4148 21.8003C60.6242 22.1618 60.6863 22.59 60.5883 22.9961C60.4902 23.4022 60.2396 23.7549 59.8883 23.981L54.4478 27.79C54.8638 30.3835 54.8508 32.9673 54.4511 35.4568L59.8883 39.2593C60.2404 39.4855 60.4917 39.8388 60.5898 40.2457C60.6878 40.6525 60.6252 41.0815 60.4148 41.4433L53.8986 52.6785C53.6901 53.0404 53.3503 53.3081 52.9497 53.4261C52.5491 53.5441 52.1184 53.5034 51.7471 53.3123L45.7346 50.5075C43.7781 52.1 41.5486 53.4 39.0948 54.3393L38.5163 60.953C38.4963 61.3704 38.3162 61.7639 38.0136 62.052C37.711 62.3401 37.3091 62.5005 36.8913 62.5H23.8588C23.441 62.5005 23.0391 62.3401 22.7365 62.052C22.4339 61.7639 22.2539 61.3704 22.2338 60.953L21.6553 54.3393C19.2527 53.4226 17.0114 52.1291 15.0156 50.5075L9.00307 53.3123C8.63177 53.5046 8.20063 53.5464 7.7993 53.429C7.39798 53.3116 7.05737 53.0439 6.84832 52.6818L0.335319 41.44C0.125948 41.0786 0.0638348 40.6503 0.161875 40.2442C0.259915 39.8382 0.510576 39.4854 0.861819 39.2593L6.29907 35.4535C5.8919 32.9142 5.8919 30.3262 6.29907 27.7868L0.86507 23.981C0.514687 23.755 0.264624 23.4028 0.166623 22.9975C0.0686222 22.5922 0.130183 22.1647 0.338569 21.8035L6.84507 10.5228C7.05359 10.1601 7.39396 9.89179 7.79533 9.77374C8.1967 9.65569 8.62814 9.69699 8.99982 9.88904L15.0123 12.6938C17.0083 11.0732 19.2496 9.78084 21.6521 8.8653L22.2306 2.25154C22.2498 1.83365 22.4295 1.43928 22.7322 1.15052C23.0349 0.861758 23.4372 0.700852 23.8556 0.701295H36.8881H36.8913ZM30.3751 20.25C33.3919 20.25 36.2852 21.4485 38.4184 23.5817C40.5516 25.7149 41.7501 28.6082 41.7501 31.625C41.7501 34.6419 40.5516 37.5352 38.4184 39.6684C36.2852 41.8016 33.3919 43 30.3751 43C27.3582 43 24.465 41.8016 22.3317 39.6684C20.1985 37.5352 19.0001 34.6419 19.0001 31.625C19.0001 28.6082 20.1985 25.7149 22.3317 23.5817C24.465 21.4485 27.3582 20.25 30.3751 20.25ZM30.3751 23.5C28.2202 23.5 26.1536 24.3561 24.6298 25.8798C23.1061 27.4035 22.2501 29.4702 22.2501 31.625C22.2501 33.7799 23.1061 35.8466 24.6298 37.3703C26.1536 38.894 28.2202 39.75 30.3751 39.75C32.53 39.75 34.5966 38.894 36.1203 37.3703C37.644 35.8466 38.5001 33.7799 38.5001 31.625C38.5001 29.4702 37.644 27.4035 36.1203 25.8798C34.5966 24.3561 32.53 23.5 30.3751 23.5Z"
        fill="black"
      />
    </svg>
  ) : (
    title === 'Ответственность' && (
      <svg
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M20.7774 40.7903C20.4414 40.7903 20.1054 40.6617 19.8481 40.407L2.21598 22.7723C0.168484 20.7248 0.168484 17.3937 2.21598 15.3462C4.26873 13.2987 7.59723 13.3039 9.63949 15.3462L25.4184 31.125C25.9302 31.6369 25.9302 32.469 25.4184 32.9809C24.9065 33.4928 24.0744 33.4928 23.5625 32.9809L7.78361 17.202C6.76511 16.1835 5.10086 16.1809 4.07186 17.202C3.57836 17.6982 3.30273 18.357 3.30273 19.0579C3.30273 19.7614 3.57573 20.4203 4.07186 20.9164L21.7066 38.5485C22.2185 39.0604 22.2185 39.8925 21.7066 40.4044C21.4494 40.6617 21.1134 40.7903 20.7774 40.7903Z"
          fill="black"
        />
        <path
          d="M30.0594 27.7965C29.7234 27.7965 29.3874 27.6678 29.1301 27.4132L11.498 9.77846C10.4716 8.75208 8.81002 8.75208 7.78365 9.77846C7.29015 10.2746 7.01453 10.9335 7.01453 11.6343C7.01453 12.3352 7.28752 12.9941 7.78365 13.4902L9.63952 15.3461C10.1514 15.858 10.1514 16.6901 9.63952 17.202C9.12765 17.7138 8.29552 17.7138 7.78365 17.202L5.92778 15.3461C4.93553 14.3538 4.38953 13.0361 4.38953 11.6343C4.38953 10.2326 4.93553 8.91483 5.92778 7.92258C7.90965 5.9407 11.3668 5.93545 13.3539 7.92258L30.986 25.5573C31.4979 26.0692 31.4979 26.9013 30.986 27.4132C30.7288 27.6705 30.3954 27.7965 30.0594 27.7965Z"
          fill="black"
        />
        <path
          d="M35.6296 22.2289C35.2936 22.2289 34.9576 22.1002 34.7004 21.8456L20.7774 7.92261C19.751 6.89624 18.092 6.89624 17.0656 7.92261C16.0419 8.94636 16.0419 10.6106 17.0656 11.6344C17.5775 12.1462 17.5775 12.9784 17.0656 13.4902C16.5537 14.0021 15.7216 14.0021 15.2097 13.4902C13.1649 11.4454 13.1649 8.11161 15.2097 6.06674C17.2546 4.02186 20.5884 4.02186 22.6332 6.06674L36.5562 19.9897C37.0681 20.5016 37.0681 21.3337 36.5562 21.8456C36.3016 22.1002 35.9656 22.2289 35.6296 22.2289Z"
          fill="black"
        />
        <path
          d="M34.1964 56.4667C33.3117 56.4667 32.4166 56.367 31.5294 56.1648L9.42685 51.0986C8.47135 50.8991 7.58148 50.4108 6.85698 49.6863C5.86473 48.6941 5.3161 47.3737 5.3161 45.9746C5.3161 44.5728 5.86473 43.2551 6.85698 42.2628C7.53948 41.5803 8.36898 41.1105 9.2641 40.8926C9.29035 40.8821 9.3166 40.8768 9.34285 40.8689L20.4729 38.1993C21.179 38.0234 21.8877 38.4671 22.0557 39.1706C22.2237 39.8767 21.788 40.5828 21.0845 40.7534L10.0306 43.4047C9.99648 43.4152 9.96235 43.4257 9.9256 43.4336C9.4846 43.5307 9.0646 43.7696 8.71285 44.1213C8.21673 44.6175 7.9411 45.2763 7.9411 45.9772C7.9411 46.6781 8.2141 47.3369 8.71285 47.8331C9.06198 48.1822 9.4951 48.429 9.93085 48.5261C9.94923 48.5287 9.96498 48.5313 9.98073 48.5366L32.1174 53.6107C35.2227 54.3221 38.4174 53.4033 40.667 51.1511L51.4085 40.4069C53.1436 38.6718 54.0991 36.3644 54.0991 33.9101C54.0991 31.4557 53.1436 29.1509 51.4085 27.4132L28.2061 4.21082C27.1797 3.18445 25.5207 3.18445 24.4944 4.21082C23.4706 5.23457 23.4706 6.89882 24.4944 7.92257C25.0062 8.43445 25.0062 9.26657 24.4944 9.77845C23.9825 10.2903 23.1504 10.2903 22.6385 9.77845C20.5936 7.73357 20.5936 4.39982 22.6385 2.35495C24.6834 0.31007 28.0171 0.31007 30.062 2.35495L53.2644 25.5573C55.4982 27.7886 56.7241 30.7522 56.7241 33.9101C56.7241 37.068 55.4956 40.0316 53.2644 42.2628L42.5229 53.007C40.2706 55.2513 37.2886 56.4667 34.1964 56.4667Z"
          fill="black"
        />
      </svg>
    )
  );
};

IconImportant.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default IconImportant;
