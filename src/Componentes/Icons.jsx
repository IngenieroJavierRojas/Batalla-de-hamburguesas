import React, { useContext } from "react";

export const Cerrar = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

export const NoConexion = () => {
    return (
        <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="45" cy="45" r="45" fill="#FDEFE4" />
            <g clip-path="url(#clip0_167_88)">
                <path
                    d="M61.3333 61.3334H31C24.5567 61.3334 19.3333 56.11 19.3333 49.6667C19.3333 43.4834 24.1438 38.4232 30.2265 38.0251C31.0104 36.3676 32.0671 34.8635 33.3354 33.5692M61.3333 61.3334L28.6666 28.6667M61.3333 61.3334L66 66M40.3333 29.3431C41.8119 28.903 43.3783 28.6667 45 28.6667C53.2289 28.6667 60.0364 34.7521 61.1681 42.6681C61.2232 42.6672 61.2803 42.6667 61.3356 42.6667C66.4902 42.6667 70.6655 46.8455 70.6655 52C70.6655 54.2071 69.9013 56.2355 68.6203 57.8334"
                    stroke="#9C3535"
                    stroke-width="5.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_167_88">
                    <rect
                        width="56"
                        height="56"
                        fill="white"
                        transform="translate(17 17)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Aviso = () => {
    return (
        <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="35" cy="35" r="35" fill="#FDEFE4" />
            <path
                d="M35 33.1852V42.2593M51.3333 35C51.3333 44.0207 44.0207 51.3334 35 51.3334C25.9793 51.3334 18.6666 44.0207 18.6666 35C18.6666 25.9794 25.9793 18.6667 35 18.6667C44.0207 18.6667 51.3333 25.9794 51.3333 35Z"
                stroke="#9C3535"
                stroke-width="5.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M35 28.6482C36.0023 28.6482 36.8148 27.8357 36.8148 26.8334C36.8148 25.8311 36.0023 25.0186 35 25.0186C33.9977 25.0186 33.1852 25.8311 33.1852 26.8334C33.1852 27.8357 33.9977 28.6482 35 28.6482Z"
                fill="#9C3535"
            />
        </svg>
    );
};

export const Succesfull = () => {
    return (
        <svg
            width="170"
            height="170"
            viewBox="0 0 170 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M127.706 44.0801C127.706 44.9419 127.363 45.7683 126.754 46.3777C126.144 46.987 125.318 47.3294 124.456 47.3294C106.557 47.3294 91.1801 36.3295 84.7247 20.736C78.2691 36.3298 62.8923 47.3294 44.9925 47.3294C43.1979 47.3294 41.7433 45.8747 41.7433 44.0801C41.7433 42.2855 43.1979 40.8309 44.9925 40.8309C65.109 40.8309 81.4751 24.4647 81.4751 4.34826C81.4751 2.55363 82.9298 1.099 84.7244 1.099C86.519 1.099 87.974 2.55363 87.974 4.34826C87.974 24.4647 104.34 40.8309 124.456 40.8309C125.318 40.8309 126.144 41.1732 126.754 41.7825C127.363 42.3919 127.706 43.2184 127.706 44.0801Z"
                fill="#2B3B47"
            />
            <path
                d="M0.420044 75.4949C0.420044 53.2568 18.4477 35.2291 40.6858 35.2291C62.9239 35.2291 80.9516 53.2568 80.9516 75.4949M169.58 75.4949C169.58 53.2568 151.552 35.2291 129.314 35.2291C107.076 35.2291 89.0485 53.2568 89.0485 75.4949"
                fill="#FFB636"
            />
            <path
                d="M12.4801 75.4949C12.4801 53.2568 36.4192 35.2291 40.6858 35.2291C44.9524 35.2291 27.9305 53.2568 27.9305 75.4949M116.559 75.4949C116.559 53.2568 133.581 35.2291 129.314 35.2291C125.048 35.2291 101.109 53.2568 101.109 75.4949"
                fill="#FFD469"
            />
            <path
                d="M40.6858 83.0915C18.4477 83.0915 0.420044 80.136 0.420044 76.4907C0.420044 72.845 18.4477 69.8899 40.6858 69.8899C62.9239 69.8899 80.9516 72.8453 80.9516 76.4907C80.9516 80.136 62.9239 83.0915 40.6858 83.0915ZM169.58 76.4907C169.58 72.845 151.552 69.8899 129.314 69.8899C107.076 69.8899 89.0485 72.8453 89.0485 76.4907C89.0485 80.1364 107.076 83.0915 129.314 83.0915C151.552 83.0915 169.58 80.136 169.58 76.4907Z"
                fill="#A06C33"
            />
            <path
                d="M91.973 110.457C91.973 113.026 89.8902 115.109 87.3209 115.109C84.7517 115.109 82.6688 113.026 82.6688 110.457C82.6688 107.887 84.7517 105.804 87.3209 105.804C89.8902 105.804 91.973 107.888 91.973 110.457ZM113.535 155.454C111.268 155.454 109.43 157.292 109.43 159.559C109.43 161.826 111.268 163.664 113.535 163.664C115.802 163.664 117.64 161.826 117.64 159.559C117.64 157.292 115.802 155.454 113.535 155.454ZM23.4401 134.368C21.173 134.368 19.3352 136.206 19.3352 138.473C19.3352 140.74 21.173 142.578 23.4401 142.578C25.7072 142.578 27.545 140.74 27.545 138.473C27.545 136.206 25.7072 134.368 23.4401 134.368Z"
                fill="#FFB636"
            />
            <path
                d="M50.3668 157.899C50.3668 160.867 47.9606 163.273 44.9925 163.273C42.0245 163.273 39.6183 160.867 39.6183 157.899C39.6183 154.931 42.0245 152.525 44.9925 152.525C47.9609 152.524 50.3668 154.93 50.3668 157.899ZM134.177 79.2619C132.214 77.2501 129.46 75.8947 126.42 75.4455C124.646 75.1825 122.989 76.4101 122.726 78.1878C122.463 79.9651 123.691 81.6186 125.468 81.8813C127.084 82.12 128.561 82.8212 129.521 83.8047C129.951 84.2457 130.65 85.1372 130.499 86.1552C130.349 87.1732 129.422 87.8243 128.883 88.1218C127.679 88.7862 126.063 89.0292 124.447 88.7908C117.844 87.816 111.814 91.4571 111.007 96.9107C110.201 102.364 114.918 107.595 121.522 108.572C121.557 108.577 121.591 108.575 121.625 108.579C124.83 109.092 126.794 111.218 126.555 112.835C126.405 113.852 125.478 114.504 124.938 114.801C123.735 115.465 122.119 115.71 120.503 115.47C113.9 114.495 107.87 118.136 107.063 123.59C106.257 129.043 110.974 134.274 117.578 135.251C117.739 135.275 117.9 135.286 118.058 135.286C119.644 135.286 121.033 134.125 121.272 132.509C121.534 130.732 120.307 129.078 118.529 128.815C115.264 128.332 113.257 126.175 113.499 124.542C113.74 122.907 116.284 121.421 119.551 121.906C120.279 122.014 121.006 122.067 121.725 122.067C124.009 122.067 126.21 121.53 128.081 120.497C130.792 119.001 132.581 116.555 132.991 113.786C133.797 108.333 129.08 103.101 122.475 102.125C122.432 102.119 122.389 102.117 122.346 102.112C119.157 101.592 117.204 99.4739 117.442 97.8623C117.684 96.228 120.229 94.7422 123.495 95.2266C124.223 95.3342 124.95 95.3873 125.669 95.3873C127.953 95.3873 130.154 94.8507 132.025 93.8178C134.736 92.322 136.525 89.8759 136.935 87.1064C137.344 84.337 136.339 81.4779 134.177 79.2619Z"
                fill="#BEA4FF"
            />
            <path
                d="M95.7356 143.848C95.7356 146.816 93.3294 149.222 90.3613 149.222C87.3933 149.222 84.9871 146.816 84.9871 143.848C84.9871 140.88 87.3933 138.474 90.3613 138.474C93.3294 138.473 95.7356 140.88 95.7356 143.848ZM40.036 89.2666C37.9472 87.2349 35.0602 85.9055 31.9066 85.5236C31.8624 85.5183 31.8189 85.518 31.7751 85.5143C28.9349 85.1222 27.0108 83.3153 27.1794 81.9231C27.4271 79.8788 25.9705 78.0207 23.9265 77.773C21.8842 77.5273 20.0242 78.982 19.7765 81.0259C19.0702 86.8561 24.0036 92.0882 31.0081 92.9372C31.0473 92.9419 31.0855 92.9409 31.1243 92.9442C32.5992 93.1451 33.9476 93.7474 34.8364 94.612C35.2146 94.9799 35.8345 95.7197 35.7355 96.5381C35.6366 97.3559 34.8577 97.926 34.4024 98.193C33.3047 98.8364 31.804 99.1004 30.2836 98.9158C27.1293 98.533 24.0089 99.1346 21.4954 100.609C18.6957 102.25 16.8865 104.871 16.5315 107.799C15.825 113.629 20.7583 118.861 27.7628 119.711C27.9152 119.729 28.0666 119.738 28.2164 119.738C30.0751 119.738 31.6838 118.35 31.9129 116.458C32.1609 114.414 30.7043 112.556 28.6603 112.308C25.7477 111.955 23.7628 110.11 23.9342 108.696C24.0334 107.878 24.8121 107.308 25.2676 107.041C26.365 106.398 27.8664 106.134 29.3861 106.318C30.006 106.394 30.6243 106.431 31.2372 106.431C33.743 106.431 36.1549 105.81 38.1743 104.625C40.9743 102.984 42.7832 100.363 43.1382 97.4353C43.4931 94.5071 42.3626 91.5298 40.036 89.2666ZM150.641 165.401C152.363 164.272 152.843 161.961 151.714 160.239C139.218 141.185 148.798 127.754 154.522 119.729C155.218 118.754 155.876 117.832 156.412 117.005C157.533 115.277 157.041 112.968 155.313 111.848C153.585 110.727 151.276 111.219 150.156 112.947C149.709 113.636 149.126 114.453 148.451 115.399C142.522 123.712 130.184 141.009 145.478 164.329C145.817 164.847 146.28 165.272 146.825 165.566C147.37 165.86 147.98 166.013 148.599 166.013C149.325 166.013 150.035 165.801 150.641 165.401Z"
                fill="#FF6E83"
            />
            <path
                d="M77.9058 94.955C77.9058 97.0113 76.239 98.6781 74.1827 98.6781C72.1264 98.6781 70.4596 97.0113 70.4596 94.955C70.4596 92.8987 72.1264 91.2319 74.1827 91.2319C76.239 91.2319 77.9058 92.8987 77.9058 94.955ZM157.278 88.6906C155.282 88.6906 153.664 90.3089 153.664 92.3047C153.664 94.3006 155.282 95.9189 157.278 95.9189C159.274 95.9189 160.892 94.3006 160.892 92.3047C160.892 90.3089 159.274 88.6906 157.278 88.6906ZM53.633 143.323C54.1944 142.715 54.8678 142.032 55.581 141.309C59.1991 137.638 64.1547 132.612 66.299 125.739C68.8749 117.481 66.6632 108.705 59.7247 99.6552C58.5205 98.0841 56.2709 97.7879 54.7004 98.9915C53.1299 100.196 52.8328 102.445 54.0367 104.016C59.5517 111.209 61.3248 117.617 59.4571 123.604C57.8305 128.818 53.7532 132.954 50.4773 136.277C49.7223 137.043 49.0091 137.766 48.3683 138.459C47.0255 139.913 47.1155 142.18 48.5692 143.523C49.2303 144.136 50.0986 144.476 51 144.474C51.4947 144.475 51.9841 144.373 52.4374 144.175C52.8906 143.977 53.2977 143.686 53.633 143.323Z"
                fill="#59CAFC"
            />
        </svg>
    );
};

export const Info = () => {
    return (
        <svg
            width="221"
            height="100"
            viewBox="0 0 221 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            
                    <path
                        d="M41.6666 16.6667L35.3268 48.3659C34.2954 53.5221 38.2396 58.3334 43.4982 58.3334H66.6666M66.6666 58.3334V33.3334M66.6666 58.3334V83.3334"
                        stroke="#9C3535"
                        stroke-width="8.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
              
                    <path d="M162 0H62V100H162V0Z" fill="white" />
            
             
                    <path
                        d="M112 83.3334C123.506 83.3334 132.833 74.0059 132.833 62.5V37.5C132.833 25.9941 123.506 16.6667 112 16.6667C100.494 16.6667 91.1667 25.9941 91.1667 37.5V62.5C91.1667 74.0059 100.494 83.3334 112 83.3334Z"
                        stroke="#9C3535"
                        stroke-width="8.33333"
                        stroke-linejoin="round"
                    />
               
          
        
                    <path
                        d="M162.667 16.6667L156.327 48.3659C155.295 53.5221 159.24 58.3334 164.498 58.3334H187.667M187.667 58.3334V33.3334M187.667 58.3334V83.3334"
                        stroke="#9C3535"
                        stroke-width="8.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
               
            <defs>
                <clipPath id="clip0_226_38">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
                <clipPath id="clip1_226_38">
                    <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(62)"
                    />
                </clipPath>
                <clipPath id="clip2_226_38">
                    <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(121)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}