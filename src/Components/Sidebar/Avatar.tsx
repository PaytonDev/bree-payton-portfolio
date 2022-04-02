import React from "react";

const SidebarAvatar = <PROPS extends React.HTMLAttributes<any>>(props: PROPS): JSX.Element => (
    <svg viewBox="0 0 200 201" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="101" r="100" fill="white" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.171 177.602C150.689 177.479 149.676 173.047 149.496 171.419C147.502 165.474 147.971 158.987 147.187 152.756C146.698 146.938 146.071 141.139 145.543 135.326C144.506 123.527 137.061 99.5057 128.565 95.6425C127.494 90.9163 123.074 86.5045 117.481 86.5045C113.666 81.9602 109.075 78.762 103.185 79.4077C100.752 79.5192 98.3917 82.1168 96.0597 82.6185C94.7541 82.7997 83.1668 82.3333 80.8457 83.7206C79.2289 84.5561 77.7693 86.1 78.2447 88.0655C79.0032 90.4469 76.6461 87.8702 71.7288 90.4119C61.7019 96.4724 67.6936 104.58 67.9591 104.831C61.7019 113.593 56.2329 120.701 53.7024 131.41C52.0624 139.361 52.247 147.568 50.8729 155.56C50.3878 158.331 49.6435 161.007 48.8381 163.698C47.9652 167.22 47.5408 175.997 47.0596 176.075C46.1832 176.295 47.5661 178.106 48.4948 178.107C74.2416 182.405 100.394 178.285 126.279 177.612C133.574 177.357 140.877 177.298 148.171 177.602Z"
            fill="#D08B5B"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M96.0921 90.3336C96.0921 93.0912 105.607 103.338 108.89 102.662C111.079 102.211 114.387 99.2723 118.812 93.8447V90.3336L117.857 86.5112C123.271 86.7033 127.518 91.0227 128.565 95.6425C136.976 99.467 144.357 123.048 145.51 134.969L145.543 135.326C146.071 141.139 146.698 146.938 147.187 152.756C147.971 158.987 147.502 165.474 149.496 171.419L149.507 171.52C149.715 173.222 150.639 177.482 148.171 177.602C140.877 177.298 133.574 177.357 126.279 177.612C100.394 178.285 74.2416 182.405 48.4948 178.107C47.5661 178.106 46.1832 176.295 47.0596 176.075C47.5408 175.997 47.9652 167.22 48.8381 163.698L49.0038 163.142C49.7449 160.638 50.4212 158.14 50.8729 155.56C52.247 147.569 52.0624 139.361 53.7024 131.41C56.2329 120.701 61.7019 113.593 67.9591 104.831C67.6936 104.58 61.7019 96.4724 71.7288 90.4119C76.6461 87.8702 79.0032 90.4469 78.2447 88.0656C77.7693 86.1 79.2289 84.5561 80.8457 83.7207C83.1668 82.3333 94.7541 82.7997 96.0597 82.6185C96.6663 82.488 97.2748 82.2157 97.8859 81.8823L97.7799 82.2375C96.6547 86.0328 96.0921 88.7315 96.0921 90.3336Z"
            fill="#FDD641"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M109.148 105.605C109.16 105.486 109.319 105.486 109.332 105.605L109.513 107.371C109.735 109.528 109.947 111.68 110.102 113.847C110.294 116.549 110.423 119.251 110.485 121.959C110.701 131.391 110.744 140.828 110.762 150.263C112.03 150.174 113.298 150.089 114.567 150.007C115.427 149.951 116.288 149.897 117.149 149.844L119.344 149.71V149.71L120.247 149.655C120.858 149.617 121.552 149.462 121.979 150.006C122.15 150.224 122.235 150.507 122.076 150.766C121.708 151.363 121.144 151.342 120.505 151.368C119.903 151.392 119.301 151.416 118.698 151.44C117.407 151.49 116.116 151.538 114.825 151.574C113.47 151.612 112.115 151.643 110.761 151.667C110.747 155.65 110.583 159.627 110.406 163.606L110.326 165.396C110.109 170.238 109.876 175.084 109.545 179.919C109.518 180.315 108.962 180.314 108.935 179.919C108.562 174.474 108.316 169.017 108.072 163.564C107.895 159.611 107.792 155.657 107.743 151.702C107.564 151.703 107.385 151.706 107.206 151.706C102.121 151.729 97.0382 151.751 91.9537 151.703C91.9622 151.713 91.9705 151.723 91.9761 151.736C92.344 152.611 92.3791 153.726 92.3701 154.664C92.3598 155.74 92.2158 156.803 91.9696 157.849C91.0874 161.598 88.8119 164.955 86.2203 167.731L86.1357 167.821C85.5244 168.471 84.8231 169.124 84.4478 169.952C84.0644 170.797 83.9313 171.786 83.7421 172.695L83.72 172.799L82.9803 176.238C82.7453 177.33 82.6786 178.923 81.8195 179.711C81.018 180.446 79.9562 180.062 79.579 179.116C79.2845 178.377 79.5779 177.565 79.7523 176.827L81.1191 171.045C81.3437 170.102 81.5891 169.153 82.0738 168.306C82.5703 167.438 83.2982 166.809 84.0409 166.165C85.4473 164.947 86.7384 163.552 87.8303 162.041C88.9218 160.531 89.8546 158.867 90.5087 157.117C90.8363 156.241 91.1046 155.331 91.2898 154.413C91.4658 153.542 91.4642 152.64 91.6525 151.779C91.6654 151.72 91.7153 151.679 91.7725 151.661C91.7589 151.622 91.7796 151.57 91.8331 151.567L95.9913 151.298C99.6876 151.058 103.384 150.812 107.077 150.531L107.729 150.483V150.483C107.679 145.206 107.722 139.929 107.816 134.65C107.903 129.809 107.905 124.967 108.048 120.127C108.119 117.725 108.273 115.329 108.443 112.931C108.618 110.48 108.897 108.049 109.148 105.605ZM70.104 133.672C70.0597 133.403 70.3957 133.237 70.5506 133.483C72.3213 136.291 73.175 139.342 73.5349 142.629C73.8527 145.53 73.7591 148.473 73.6008 151.381C73.4319 154.484 73.2349 157.585 73.0357 160.685L72.7297 165.44V165.44L71.9617 177.36C71.9067 178.212 71.7144 178.988 70.985 179.384C70.8926 179.462 70.7963 179.531 70.6842 179.591C70.2901 179.804 69.7674 179.696 69.5395 179.289L69.6309 179.35C69.7105 179.4 69.6211 179.33 69.3627 179.139L69.1435 178.853V178.853C68.9841 178.612 68.8824 178.375 68.8415 178.089C68.7779 177.644 68.8602 177.156 68.8891 176.708L69.3926 168.892V168.892C69.784 162.816 70.2412 156.741 70.5858 150.662C70.7463 147.828 70.8587 144.992 70.7827 142.154C70.7068 139.331 70.5639 136.461 70.104 133.672ZM85.4218 81.3497L85.52 81.3331C89.037 80.7452 92.8613 80.8552 96.0754 82.5614C96.102 82.5754 96.0899 82.6198 96.0601 82.6185L95.0255 82.577C91.7504 82.4479 88.4854 82.3715 85.265 83.1459L84.9354 83.2258C83.7757 83.5105 82.5646 83.859 81.6331 84.6298C80.7427 85.3667 80.2994 86.5034 79.8731 87.5498L79.8161 87.6879C79.3836 88.7214 78.8361 89.7015 77.8881 90.3478C76.6602 91.1847 75.1835 91.0822 73.7755 91.1959C71.2965 91.3963 69.2697 93.2044 68.2613 95.417C67.6507 96.7567 67.3903 98.2588 67.3387 99.7239C67.3122 100.47 67.3084 101.245 67.4072 101.986C67.4387 102.223 67.7298 103.086 67.8782 103.065C68.2079 103.019 68.5094 103.192 68.6122 103.457C69.4267 102.665 70.2647 101.896 71.1296 101.155C73.2856 99.307 75.6079 97.6323 78.0536 96.1932C79.9201 95.0947 81.8889 94.0064 83.9277 93.1837C83.7662 93.1803 83.6068 93.2125 83.4527 93.2932C83.3852 93.3287 83.3181 93.2435 83.3714 93.1871C84.0136 92.5071 84.7827 92.4104 85.5582 92.5917C85.7236 92.5387 85.8892 92.4875 86.0555 92.4388C86.1382 92.4146 86.1794 92.5293 86.1119 92.5736L85.9214 92.6961V92.6961C86.7673 92.9813 87.5979 93.5418 88.2554 93.9842C90.1442 95.2545 91.8068 96.8076 93.4921 98.3315L93.7985 98.6078C95.282 99.9408 96.8032 101.236 98.4886 102.306C99.3709 102.865 100.298 103.383 101.27 103.768C102.103 104.099 103.461 104.307 103.851 105.194C104.198 105.618 104.053 106.159 103.647 106.445C102.961 107.204 101.59 106.714 100.773 106.398C99.7882 106.016 98.8342 105.558 97.9243 105.021C96.1578 103.977 94.529 102.679 93.0117 101.299C91.4271 99.8571 89.9324 98.3255 88.3912 96.8385C87.7234 96.1942 87.071 95.5348 86.4022 94.8915L86.0663 94.5713C85.7249 94.2491 85.2386 93.747 84.7186 93.443C83.7391 94.0311 82.7444 94.5949 81.7736 95.1982C80.4186 96.0402 79.1034 96.9429 77.8085 97.8754C75.3157 99.6705 72.9534 101.681 70.7604 103.836C66.7383 107.788 63.3117 112.301 60.3182 117.08L60.0909 117.444C58.3898 120.179 56.7811 123.002 55.6405 126.025C54.3855 129.35 53.7752 132.848 53.4436 136.378C53.1145 139.883 53.0035 143.406 52.6357 146.907C52.2586 150.499 51.5154 154.011 50.6702 157.516L50.4686 158.347C49.7037 161.487 48.9143 164.626 48.5212 167.84C48.3113 169.557 48.185 171.297 48.2136 173.027C48.2422 174.768 48.514 176.47 48.7333 178.192C48.8173 178.852 48.1721 179.402 47.5949 179.49C46.9309 179.59 46.3606 179.164 46.1542 178.543C45.5109 176.608 45.394 174.469 45.4142 172.438C45.4345 170.377 45.696 168.328 46.0639 166.302C46.7875 162.316 47.9042 158.413 48.8383 154.475C49.6615 151.004 50.214 147.528 50.5119 143.972C50.821 140.283 51.0062 136.581 51.5701 132.919C52.1268 129.303 53.1743 125.85 54.754 122.553C56.1923 119.551 57.9852 116.726 59.8649 113.987C62.1476 110.662 64.6546 107.497 67.457 104.614C67.2053 104.603 66.9468 104.521 66.7094 104.372C65.9832 103.916 65.645 103.024 65.541 102.21C65.2977 100.305 65.3564 98.317 65.8432 96.4548C66.6284 93.4506 68.6662 90.7814 71.6197 89.6985C72.3799 89.4198 73.1881 89.318 73.9937 89.298C74.7582 89.2788 75.5932 89.3791 76.3308 89.1352C77.505 88.7468 78.0083 87.3551 78.4491 86.3002L78.4694 86.2517C79.0347 84.9074 79.7132 83.7552 80.9376 82.9158C82.2439 82.02 83.8806 81.6127 85.4218 81.3497V81.3497ZM118.839 86.6661C119.896 86.2972 121.217 86.632 122.25 86.9543C123.402 87.3136 124.466 87.9752 125.378 88.761C126.34 89.5896 127.136 90.6128 127.698 91.7559L127.751 91.866C128.265 92.9263 128.849 94.382 128.59 95.5468C128.583 95.5799 128.575 95.6117 128.565 95.6426C130.662 96.6814 132.598 97.9826 134.285 99.6317C136.248 101.552 137.911 103.737 139.318 106.098C144.906 115.473 145.89 126.733 146.55 137.426L146.714 140.137C147.073 145.991 147.492 151.831 148.582 157.605L148.661 158.021C149.826 164.066 151.493 170.157 151.324 176.358C151.273 178.216 148.545 178.203 148.466 176.358C148.168 169.413 146.557 162.707 145.467 155.869C143.548 143.841 144.509 131.44 141.79 119.532C140.723 114.859 139.07 110.326 136.71 106.154C135.544 104.093 134.21 102.102 132.648 100.324C131.303 98.7946 129.906 97.3224 128.335 96.0364C127.833 96.5425 126.83 96.2846 126.568 95.5468C126.388 95.0398 126.44 94.447 126.325 93.9159C126.217 93.423 126.069 92.9344 125.872 92.4702C125.48 91.5452 124.903 90.6569 124.238 89.9082C123.519 89.099 122.693 88.4266 121.769 87.8715C120.838 87.3125 119.82 87.1456 118.839 86.7372C118.806 86.7234 118.802 86.6789 118.839 86.6661ZM122.945 150.951C122.946 150.903 123.003 150.88 123.039 150.912C123.409 151.255 123.633 151.748 123.906 152.17C124.22 152.657 124.551 153.133 124.897 153.598C125.591 154.528 126.363 155.405 127.142 156.264C127.866 157.063 128.638 157.829 129.438 158.55C130.306 159.332 131.278 160.029 132.066 160.895C133.71 162.701 133.976 165.18 134.323 167.508L134.361 167.76C134.572 169.141 134.762 170.526 134.933 171.913C135.016 172.588 135.099 173.263 135.167 173.94L135.187 174.154C135.248 174.816 135.264 175.488 134.886 176.067C134.482 176.686 133.562 176.903 133.015 176.309C132.076 175.289 132.252 173.478 132.13 172.166C132.029 171.082 131.914 169.998 131.786 168.916L131.721 168.376C131.569 167.145 131.447 165.89 131.167 164.681C130.92 163.616 130.45 162.812 129.679 162.04C128.903 161.263 128.096 160.538 127.379 159.701C126.618 158.813 125.932 157.862 125.314 156.868C124.786 156.019 124.362 155.094 123.974 154.171L123.909 154.017C123.534 153.116 122.915 151.944 122.945 150.951ZM136.509 112.266C136.517 112.141 136.701 112.139 136.704 112.266C136.727 113.347 136.75 114.427 136.772 115.508C136.951 124.214 136.841 132.941 137.709 141.617C138.118 145.708 138.872 149.739 139.744 153.753C140.19 155.807 140.659 157.856 141.104 159.91C141.537 161.912 142.002 163.924 142.346 165.945C142.684 167.931 142.987 169.932 143.123 171.943L143.139 172.206C143.198 173.18 143.477 174.613 142.944 175.477C142.366 176.412 141.26 176.429 140.641 175.536C140.06 174.697 140.205 173.206 140.102 172.206C139.998 171.186 139.887 170.167 139.762 169.15C139.517 167.166 139.195 165.187 138.86 163.218C138.162 159.115 137.15 155.065 136.403 150.969C135.637 146.772 135.093 142.545 135.07 138.272C135.047 133.963 135.5 129.662 135.729 125.362C135.961 120.994 136.226 116.631 136.509 112.266ZM95.6418 85.1867C95.8741 84.3996 96.6938 83.9076 97.4935 84.1286C98.2263 84.3313 98.8314 85.2265 98.5449 85.9923C98.2322 86.828 97.6858 87.5406 97.2251 88.3002C96.7996 89.002 96.179 89.5547 95.7455 90.2441L96.2232 90.7623C96.4621 91.0209 96.7018 91.2778 96.9441 91.5303L97.7772 92.3988C98.426 93.0738 99.0789 93.7451 99.7502 94.3967C101.724 96.3129 103.73 98.1662 105.94 99.8073C106.444 100.181 106.951 100.552 107.472 100.9L107.667 101.029C108.024 101.265 108.423 101.497 108.855 101.457C109.906 101.36 110.854 100.238 111.576 99.5391L111.614 99.5027C113.402 97.7905 115.057 95.9184 116.505 93.9055C116.826 93.4583 117.138 93.0034 117.441 92.5432C116.741 91.7205 116.908 90.1144 116.869 89.1166C116.842 88.415 116.84 87.7133 116.836 87.0112L116.834 86.8696C116.826 86.4152 116.805 85.9793 117.099 85.6054C117.116 85.5837 117.151 85.5844 117.173 85.5958C117.574 85.8075 117.698 86.1619 117.869 86.5594L117.887 86.6007C118.095 87.0778 118.295 87.5594 118.497 88.0393C118.708 88.5417 118.902 89.0515 119.099 89.5599C119.19 89.7965 119.277 90.0339 119.363 90.2727C119.415 90.4252 119.468 90.5769 119.524 90.7283L119.537 90.74C119.61 90.8023 119.672 90.8681 119.725 90.936C119.949 91.0488 120.127 91.2542 120.21 91.556C120.392 92.2131 120.016 92.7488 119.68 93.2703C118.318 95.3891 116.764 97.4081 115.037 99.2397C114.18 100.15 113.278 101.019 112.338 101.843L112.174 101.986C111.33 102.716 110.414 103.407 109.287 103.578C107.968 103.778 106.895 103.118 105.885 102.357L105.785 102.281C104.828 101.552 103.89 100.797 102.981 100.008C101.129 98.398 99.3666 96.6698 97.8025 94.7738C96.2811 92.9295 94.7773 90.8673 93.8395 88.6482C93.7823 88.513 93.9326 88.3715 94.0504 88.4844C94.5085 88.9232 94.9492 89.386 95.3848 89.8546C95.3969 89.1648 95.2704 88.4691 95.3407 87.7749C95.4266 86.9312 95.4018 85.9991 95.6418 85.1867Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.3019 37.0271C83.9761 36.2974 84.8385 35.7538 85.7811 35.5801C84.9195 36.0142 84.0771 36.4667 83.3019 37.0271ZM81.9813 43.3185C81.8621 42.7625 81.782 42.201 81.7568 41.6397C81.9075 41.8707 82.1481 42.0251 82.4184 42.1048C82.2438 42.499 82.0953 42.9052 81.9813 43.3185ZM127.096 52.0368C126.318 48.7698 122.687 42.4858 121.829 41.2763C120.897 38.2815 125.98 35.8798 123.216 33.538C121.964 32.4813 120.31 32.1074 118.759 31.7326C108.016 29.1308 96.4745 30.443 86.5113 35.2275C84.9958 34.9059 83.4168 35.5345 82.3148 36.6385C77.1372 41.8867 84.1932 51.3562 85.7362 57.2729C88.3834 63.8702 82.9303 64.98 83.5151 70.562C83.9695 73.4457 86.8657 74.2079 89.3096 74.6437C89.7014 74.7362 90.225 74.7501 90.3514 75.1677C90.7474 77.6052 92.1049 79.9282 93.9275 81.5047C93.7681 81.9809 93.8898 82.559 94.4518 82.9773C99.5439 86.7937 105.965 88.7035 112.316 88.3602C119.884 87.9511 123.799 83.576 124.743 82.4494C129.965 75.3368 129.341 65.9523 128.276 57.4758C127.534 51.571 128.475 57.8243 127.096 52.0368Z"
            fill="#D08B5B"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M103.758 24.8518C103.996 24.1018 104.67 23.6508 105.441 23.7439C106.123 23.8251 106.854 24.5083 106.771 25.2622C106.755 25.4077 106.734 25.5441 106.71 25.6726L106.713 25.6737V25.6737L106.716 25.6739L106.699 25.7237C106.648 25.9636 106.578 26.1787 106.474 26.3819C106.342 26.7713 106.214 27.162 106.088 27.5541C106.27 27.5462 106.456 27.5567 106.645 27.5921C106.84 27.0886 107.036 26.5864 107.231 26.0816C107.44 25.5428 107.587 24.8505 108.001 24.4335C108.53 23.9012 109.448 23.7911 110.092 24.1713C110.774 24.5725 111.017 25.2858 110.869 26.0502C110.793 26.4401 110.535 26.7114 110.215 26.8819L110.181 26.8998L109.935 27.4872C110.01 27.4544 110.088 27.4243 110.173 27.3994C110.306 27.36 110.436 27.3351 110.563 27.3246C110.914 26.6835 111.3 26.0607 111.699 25.4497C112.158 24.7469 113.055 24.4479 113.808 24.8924C114.481 25.2897 114.843 26.3334 114.36 27.0191C113.994 27.5396 113.647 28.0707 113.305 28.6069C113.363 28.6174 113.422 28.6305 113.478 28.6476C113.504 28.6122 113.531 28.5768 113.56 28.5414C113.933 28.0746 114.367 27.7245 114.813 27.3364C115.23 26.9719 115.423 26.3989 115.971 26.1223C116.662 25.7748 117.494 25.9413 117.904 26.6336C118.786 28.1166 117.306 29.1996 116.36 30.0977C117.183 29.5798 118.04 29.1065 118.919 28.6974C119.413 28.4679 119.914 28.2464 120.424 28.0549C121.179 27.7717 121.79 27.8623 122.411 28.3893C122.687 28.6253 122.825 29.1407 122.698 29.4841C122.451 30.1423 122.061 30.5422 121.377 30.7323C120.896 30.866 120.403 30.9565 119.922 31.0968C119.116 31.3302 118.333 31.6147 117.574 31.97C117.629 32.0041 117.681 32.0408 117.729 32.0828C118.296 31.8979 118.873 31.738 119.453 31.6016C120.414 31.3742 121.393 31.2205 122.376 31.1244L122.703 31.0938C123.882 30.9797 125.299 30.7692 126.022 31.9071C126.26 32.2821 126.286 32.901 126.022 33.272C125.518 33.9853 125.016 34.1269 124.181 34.14C125.003 34.2278 125.823 34.3367 126.64 34.4639C127.202 34.5504 127.765 34.6485 128.325 34.7573L128.605 34.8126C129.288 34.9503 130.05 35.0303 130.636 35.4289C131.915 36.2995 131.315 37.9948 129.898 38.1757C129.212 38.2623 128.452 37.9699 127.78 37.8335C127.127 37.7011 126.472 37.5844 125.814 37.4821C125.473 37.4284 125.133 37.3812 124.791 37.3379C125.486 37.4389 126.177 37.5818 126.849 37.7837L127.036 37.8405C128.335 38.2399 130.089 38.876 130.494 40.2762C130.74 41.1271 130.068 41.8692 129.254 41.9191C128.497 41.965 127.867 41.51 127.225 41.1743C126.757 40.9305 126.281 40.7482 125.776 40.5922C125.255 40.4309 124.723 40.2972 124.188 40.1883C124.64 40.4399 125.081 40.7163 125.504 41.0255L125.699 41.1704C126.824 42.0156 128.539 43.3242 128.143 44.9085C128.018 45.4081 127.465 45.8853 126.935 45.8342C125.554 45.7044 124.792 44.2215 123.751 43.4269C123.479 43.2197 123.181 43.0152 122.869 42.8159C124.448 44.7145 125.704 46.9093 126.659 49.1763C128.759 54.1637 129.403 58.7823 129.419 64.1449L129.419 64.311C129.422 67.2689 129.355 70.2806 129.069 73.2255C128.804 75.9461 128.318 78.6314 127.095 81.0952C125.044 85.2265 121.049 88.4441 116.643 89.6687C111.741 91.0323 106.261 89.9663 102.245 86.8196C101.221 86.0171 102.579 84.2747 103.626 85.0154C107.806 87.9721 113.211 88.9082 118.008 86.9074C121.814 85.3209 124.878 81.908 126.177 77.9784C127.003 75.4785 127.244 72.813 127.539 70.2077L127.559 70.0342C127.871 67.3096 128.052 64.5666 128.049 61.8237C128.045 56.7299 127.32 52.5368 125.098 47.9163C124.052 45.7398 122.697 43.7273 121.077 41.961C120.585 42.062 120.063 41.9204 119.566 41.8666C119.312 41.8391 119.059 41.8129 118.805 41.7893C119.064 41.9581 119.318 42.1337 119.568 42.3134L119.895 42.5516C120.92 43.2916 122.22 44.1346 121.957 45.5654C121.885 45.9522 121.503 46.3075 121.133 46.3954C119.79 46.7179 118.867 45.4015 117.959 44.6201C117.17 43.9409 116.344 43.3325 115.503 42.7228C115.312 42.5851 115.12 42.4475 114.926 42.3111C115.108 42.5251 115.285 42.7424 115.458 42.9618L115.713 43.2881C116.486 44.263 117.599 45.5302 116.911 46.7939C116.716 47.1506 116.3 47.3879 115.897 47.38C114.511 47.3512 113.96 45.7647 113.31 44.763C112.751 43.9042 112.144 43.0952 111.516 42.2862C111.343 42.0646 111.169 41.843 110.992 41.6214C108.081 41.7735 105.181 42.1616 102.331 42.7818C100.373 43.2079 98.4477 43.7601 96.5366 44.3644L96.3777 44.4153C95.3435 44.7512 94.2778 45.181 93.5321 45.9181C93.4256 46.4259 93.5074 46.9615 93.6092 47.4687L93.6886 47.8569C94.0156 49.4802 94.2384 51.0734 94.0716 52.74C93.8987 54.459 93.3852 56.0048 92.7586 57.6018C92.4621 58.3544 92.1553 58.218 92.05 59.0257C91.9694 59.6409 92.0192 60.276 92.0744 60.8963L92.1204 61.4222C92.236 62.7999 92.294 64.3019 91.3987 65.4386C91.2596 65.6129 90.9619 65.5435 90.8631 65.3691C90.8241 65.2996 90.7825 65.2327 90.737 65.1685C90.3053 64.5378 89.6436 64.1785 88.887 64.0396C88.7908 64.0225 88.8285 63.8927 88.9091 63.8822C89.5487 63.8062 90.1545 63.9674 90.6693 64.3005C90.4252 63.4491 88.5351 63.8631 87.9138 64.0286L87.8924 64.0343C87.1176 64.2441 86.3843 64.585 85.7382 65.0675C84.4381 66.0378 83.6867 67.5508 83.7244 69.1806C83.7621 70.7828 84.5824 72.2631 85.9917 73.0301C86.6716 73.3999 87.4452 73.5782 88.2148 73.5703C89.0183 73.5625 89.7333 73.2071 90.538 73.257C91.0035 73.2858 91.3597 73.7893 91.0906 74.2285C90.9112 74.5222 90.6771 74.753 90.4067 74.93C91.0659 76.4627 91.907 77.9247 92.8769 79.2739C93.4138 80.0225 94.0222 80.7135 94.6918 81.3442C95.2144 81.8372 96.3467 82.4075 96.283 83.2296C96.2609 83.5259 96.1088 83.7069 95.841 83.817C95.0084 84.1603 93.9959 82.9782 93.439 82.4084L93.3943 82.3629C92.7001 81.6654 92.0669 80.8944 91.5157 80.0763C90.538 78.6235 89.9309 76.9859 89.68 75.2657C88.3448 75.6708 86.5767 75.2906 85.4873 74.7936C82.0629 73.2334 80.9435 68.5827 83.025 65.4858C83.428 64.8866 83.9324 64.3739 84.507 63.9596C84.3809 63.8901 84.2626 63.8009 84.1573 63.6882C83.5748 63.0641 83.1629 62.2497 82.7542 61.4991L82.7051 61.4094C82.3423 60.7486 82 60.0774 81.6791 59.3958L81.5598 59.1398C80.8434 57.5861 80.2155 56.9069 79.7046 55.2732C79.2132 53.6972 78.8257 52.091 78.5748 50.4573L78.5081 50.0249C78.363 49.0769 78.2258 48.0632 78.3317 47.1008C77.6024 47.3407 76.8691 47.4889 76.1476 47.1283C75.6718 46.891 75.4092 46.1987 75.5717 45.7018C75.69 45.3359 75.8876 45.0488 76.1385 44.8233C75.989 44.7472 75.8486 44.6502 75.7251 44.5427L75.6172 44.4484V44.4484C75.1803 44.0654 75.1491 43.3377 75.4144 42.8579C75.4404 42.812 75.4664 42.7648 75.4911 42.7189C75.7433 42.2639 76.2646 41.9663 76.7794 41.9741C76.8626 41.9755 76.9458 41.9755 77.0303 41.9741C76.7898 41.9204 76.5545 41.8378 76.3309 41.6988C75.322 41.0734 75.4495 39.3781 76.6702 39.0791C77.1824 38.9546 77.748 39.0057 78.3122 39.1394C78.2914 39.1276 78.2706 39.1158 78.2498 39.1027C77.8234 38.8392 77.4659 38.3239 77.5062 37.7955C77.5504 37.2107 77.7376 36.7938 78.2498 36.487C78.6944 36.2221 79.3237 36.1972 79.7657 36.487C80.1492 36.74 80.5249 37.0193 80.8863 37.3195C80.5236 36.8698 80.209 36.3808 80.0816 35.8615C79.9243 35.2151 80.1869 34.5111 80.7641 34.1702C81.2244 33.8987 81.7106 33.9289 82.1448 34.1387C82.1214 33.7991 82.2033 33.453 82.4269 33.1461C82.8845 32.5169 83.7166 32.1549 84.4407 32.6138C84.5356 32.6741 84.663 32.7777 84.7865 32.9049C84.546 32.1326 84.7631 31.3223 85.5835 30.9736C86.084 30.7598 86.7613 30.8674 87.1956 31.2358C86.92 29.7319 89.121 28.6266 89.9764 30.1803C90.1706 30.5323 90.3626 30.9029 90.5344 31.282L90.5978 31.4246L90.6043 31.422L90.5606 31.3177V31.3177L90.5159 31.2135C90.278 30.6563 89.9751 30.0767 89.8919 29.4723C89.7697 28.5781 90.1649 27.7298 91.1296 27.5986C91.6275 27.5305 92.1813 27.7586 92.5154 28.1573C92.3347 26.77 93.8714 25.7617 94.9778 26.7975C95.5017 27.2879 95.7812 28.0051 96.114 28.6345C96.3025 28.9898 96.495 29.3438 96.6835 29.7004C96.7316 29.6427 96.7836 29.585 96.8382 29.5287C96.5587 28.6843 96.3415 27.8189 96.1582 26.9483C95.984 26.1275 96.3909 25.2753 97.2308 25.0433C97.9939 24.8308 98.9495 25.3056 99.1198 26.125C99.2394 26.7018 99.3811 27.2723 99.5371 27.8399C99.6437 27.8137 99.749 27.7953 99.853 27.7822C99.8617 27.6756 99.8715 27.5683 99.8825 27.4617L99.9234 27.0824C100.014 26.2158 100.106 25.2266 100.555 24.4899C101.321 23.2312 103.284 23.753 103.305 25.2412C103.316 26.0108 103.006 26.7739 102.898 27.5357C102.851 27.8674 102.824 28.2031 102.808 28.5387C103.017 27.4243 103.305 26.3242 103.638 25.2412C103.677 25.1114 103.718 24.9816 103.758 24.8518ZM86.8211 67.8289C88.5437 67.5601 90.1181 68.529 91.1387 69.8861C91.3246 70.1339 91.2024 70.4839 91.0347 70.6924C90.9138 70.8458 90.7512 70.8642 90.5679 70.8878C90.3573 70.9153 90.0908 70.7435 89.9985 70.5587C89.342 69.237 88.1706 68.4018 86.8211 67.8879C86.7964 67.8787 86.7886 67.8341 86.8211 67.8289ZM89.2091 44.1488L89.2612 44.0923C89.6098 43.7277 89.059 43.1707 88.7096 43.5361C88.3418 43.9208 88.0974 44.3881 87.8624 44.8617C87.6384 45.3133 88.311 45.7121 88.5359 45.2588L88.6384 45.0528C88.7991 44.7325 88.9705 44.416 89.2091 44.1488V44.1488ZM84.3714 43.4004C84.8655 43.3165 84.656 42.5583 84.1641 42.6419C83.5268 42.7502 82.892 42.8733 82.2545 42.9818C81.7606 43.0657 81.9701 43.8239 82.462 43.7404C83.0993 43.632 83.7341 43.5088 84.3714 43.4004ZM113.801 38.2239C113.324 38.0632 113.119 38.8228 113.593 38.9825C114.249 39.2032 114.9 39.4293 115.522 39.7357C115.972 39.9571 116.367 39.2788 115.916 39.0564C115.233 38.7201 114.521 38.4662 113.801 38.2239ZM84.2591 37.2043C83.793 37.0163 83.5906 37.7769 84.0517 37.9629L85.7366 38.6425V38.6425C86.2027 38.8305 86.4051 38.0701 85.944 37.884L84.2591 37.2043V37.2043ZM119.684 35.3572L119.623 35.3181C119.2 35.0419 118.809 35.7227 119.229 35.9974C119.476 36.1585 119.775 36.2679 120.001 36.4599L120.049 36.5023C120.413 36.8498 120.966 36.2946 120.6 35.946C120.333 35.6912 119.994 35.5493 119.684 35.3572V35.3572Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M114.277 79.5775C113.401 79.2179 112.62 78.6181 112.049 77.852C111.85 77.5856 111.798 77.3043 111.84 77.0471C111.887 76.7578 112.057 76.4957 112.289 76.3198C112.522 76.1434 112.813 76.0564 113.094 76.1008C113.338 76.1393 113.582 76.274 113.774 76.5534L113.814 76.6092C114.154 77.0717 114.597 77.4511 115.101 77.6956C115.587 77.9314 116.131 78.0414 116.693 77.9774C117.765 77.8556 118.503 77.2725 119.288 76.4806C119.385 76.3806 119.483 76.2775 119.58 76.1727C119.642 76.0777 119.728 76.0167 119.823 75.9847C119.929 75.9491 120.048 75.9511 120.158 75.9896C120.264 76.0267 120.358 76.097 120.421 76.1905C120.481 76.2794 120.516 76.3893 120.505 76.5156C120.433 77.3363 120.006 78.0687 119.401 78.6438C118.728 79.2825 117.837 79.7244 116.997 79.8794C116.073 80.0501 115.13 79.9278 114.277 79.5775V79.5775ZM117.434 66.9171C118.417 67.5189 119.916 68.9222 118.858 70.4142C117.612 71.7298 115.819 70.2214 114.935 69.5392C114.115 69.0105 113.194 70.3703 113.955 70.9876C120.342 75.7465 122.934 67.0744 117.931 66.2095C117.38 66.1142 117.176 66.7309 117.434 66.9171ZM105.988 61.3813C106.097 60.0234 108.152 59.715 108.356 61.0587C108.539 62.2624 108.324 63.3681 107.785 64.4517C107.27 65.487 105.976 65.004 105.879 64.0613C105.747 62.7976 105.921 62.2259 105.988 61.3813ZM121.63 60.7801C121.917 60.4025 122.33 60.1447 122.826 60.2904C124.374 60.7458 123.918 62.9581 123.374 64.0349C123.079 64.6197 122.124 64.768 121.692 64.2531C120.988 63.4134 120.652 61.7366 121.546 60.9095C121.57 60.8668 121.597 60.8236 121.63 60.7801ZM107.763 55.4397L108.008 55.3966C108.764 55.2649 109.705 55.1383 110.24 55.7505C110.524 56.0752 110.622 56.6786 110.24 56.9893C109.569 57.5361 108.827 57.3242 108.023 57.3705C107.36 57.4087 106.723 57.5191 106.084 57.7028C104.684 58.1058 103.542 58.8413 102.346 59.649C102.189 59.7549 102.029 59.5529 102.103 59.4051C102.794 58.0437 104.132 56.9255 105.473 56.2438C106.189 55.8799 106.972 55.5781 107.763 55.4397ZM120.219 54.8298L120.406 54.8684C122.443 55.2969 125.09 56.153 126.055 58.1669C126.092 58.4517 126.053 58.5127 126.021 58.5526L126.011 58.5658C125.985 58.5999 125.964 58.6468 125.841 58.6856C125.807 58.6774 125.773 58.6688 125.738 58.6596C125.296 58.543 124.946 58.3823 124.607 58.2156L124.24 58.0335C123.814 57.8232 123.384 57.6206 122.928 57.4711C121.956 57.1519 120.956 56.9271 119.941 56.8071C119.721 56.7811 119.509 56.7063 119.342 56.5782C119.183 56.4566 119.062 56.2882 119.006 56.0644C118.935 55.7748 118.955 55.5555 119.11 55.2942C119.226 55.098 119.392 54.9619 119.583 54.8838C119.777 54.8042 119.999 54.7855 120.219 54.8298Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M128.413 64.9588C128.045 65.9679 127.484 67.0184 126.798 67.8676C124.024 70.2319 121.328 68.9228 119.96 65.7185C119.44 63.454 120.82 61.0147 122.284 59.3489C124.397 57.2174 127.845 58.336 128.817 60.87C128.876 61.1983 128.912 61.5258 128.929 61.8523C128.909 62.9131 128.782 63.8198 128.413 64.8277M101.747 62.9238C105.402 58.5488 112.239 58.3149 112.064 65.0484C111.279 73.5714 98.0595 71.4794 101.747 62.9238ZM129.563 59.2742C129.434 59.0559 129.292 58.8446 129.137 58.6426C129.08 58.6082 129.047 58.3035 128.836 58.281C126.018 55.1527 121.069 56.9276 119.28 60.0447C118.954 60.4389 118.687 60.9003 118.491 61.3877C116.728 61.0625 114.674 61.1256 113.035 61.7955C111.41 57.5248 106.49 57.1435 103.248 58.9683C101.231 59.9665 99.9233 62.0568 97.9621 63.2051C93.3515 63.5391 88.4033 62.4995 83.876 63.6634C80.3055 64.4105 83.2903 66.23 83.889 65.0157C88.1575 63.7465 93.2143 64.819 97.6461 64.5331C98.1069 65.3175 98.9906 65.9595 99.8713 65.9321C100.823 74.418 113.119 73.0109 113.543 65.4674C114.024 64.7018 114.623 63.9692 115.479 63.4922C115.807 63.4238 116.124 63.3351 116.413 63.1977C116.908 63.1274 117.671 63.3385 118.126 63.7531C119.685 73.1693 128.669 72.0726 130.274 63.8236C130.306 63.7908 130.395 63.6678 130.464 63.4705C131.013 62.7393 132.359 62.4675 132.144 61.233C131.952 59.9983 130.403 60.013 129.563 59.2742Z"
            fill="black"
        />
    </svg>
);

export default SidebarAvatar;
