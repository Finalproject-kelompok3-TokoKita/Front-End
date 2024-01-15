import Searchbar from "../Searchbar";
// import image
import card5 from "../../assets/bazaar.jpg";

const Homeheader = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Tokokita</a>
        </div>
        <nav className="navbar-header">
          <a href={"/"}>Home</a>
          <a href={"/productlist"}>Shop</a>
          <a href={"/contact"}>Contact</a>
        </nav>
        <ul className="items">
          <a href={"/login"} className="use">
            Sign in
          </a>
          <a href={"/signup"} className="uses">
            Sign up
          </a>
        </ul>
      </header>
      <div id="main">
        <img src={card5} alt="" />
        <div id="index-main-detail">
          <div className="container">
            <Searchbar />
          </div>
        </div>
      </div>
      <div id="second-layer" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="three-col-wrapper">
            <div className="simple-box-1">
              <svg
                width="100"
                height="100"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M94 89.6923C88.5177 89.6923 84 94.2795 84 99.8462C84 105.413 88.5177 110 94 110H104C109.482 110 114 105.413 114 99.8462C114 94.2795 109.482 89.6923 104 89.6923H94ZM94 96.4615H104C105.904 96.4615 107.333 97.9126 107.333 99.8462C107.333 101.78 105.904 103.231 104 103.231H94C92.0957 103.231 90.6667 101.78 90.6667 99.8462C90.6667 97.9126 92.0957 96.4615 94 96.4615ZM99 66C93.5166 66 89 70.5861 89 76.1538C89 81.7216 93.5166 86.3077 99 86.3077C104.483 86.3077 109 81.7216 109 76.1538C109 70.5861 104.483 66 99 66ZM99 72.7692C100.88 72.7692 102.333 74.2445 102.333 76.1538C102.333 78.0632 100.88 79.5385 99 79.5385C97.1196 79.5385 95.6667 78.0632 95.6667 76.1538C95.6667 74.2445 97.1196 72.7692 99 72.7692Z"
                  fill="#FF5600"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.2605 22.9673C47.3642 22.9673 46.5047 23.3199 45.8709 23.9477C45.2372 24.5754 44.8811 25.4269 44.8811 26.3147C44.8811 27.2025 45.2372 28.0539 45.8709 28.6816C46.5047 29.3094 47.3642 29.6621 48.2605 29.6621H88.813C94.4522 29.6621 98.9512 34.1185 98.9512 39.7044V43.0518C98.9512 48.6376 94.4522 53.094 88.813 53.094H31.3636C20.2053 53.094 11.0873 62.1259 11.0873 73.1785V76.5259C11.0873 87.5786 20.2053 96.6104 31.3636 96.6104H60.3325L59.3887 97.5454C58.7551 98.1731 58.3991 99.0244 58.3991 99.9121C58.3991 100.8 58.7551 101.651 59.3887 102.279C60.0224 102.906 60.8818 103.259 61.778 103.259C62.6741 103.259 63.5336 102.906 64.1673 102.279L70.9261 95.584C71.5596 94.9562 71.9155 94.1049 71.9155 93.2173C71.9155 92.3296 71.5596 91.4783 70.9261 90.8505L64.1673 84.1557C63.5337 83.5279 62.6742 83.1751 61.778 83.175C60.8818 83.1751 60.0223 83.5279 59.3887 84.1557C58.7551 84.7834 58.3991 85.6348 58.3991 86.5224C58.3991 87.4101 58.7551 88.2614 59.3887 88.8891L60.4249 89.9156H31.3636C23.858 89.9156 17.846 83.9605 17.846 76.5259V73.1785C17.846 65.744 23.858 59.7889 31.3636 59.7889H88.813C98.1049 59.7889 105.71 52.2558 105.71 43.0518V39.7044C105.71 30.5004 98.1049 22.9673 88.813 22.9673H48.2605Z"
                  fill="#080019"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.4349 16.3944C23.3288 12.3706 16.6712 12.3706 12.5651 16.3944C8.45925 20.4179 8.45925 26.941 12.5651 30.9645L20 38.2502L27.4349 30.9645C31.5408 26.941 31.5408 20.4179 27.4349 16.3944ZM8.68646 12.5922C14.9348 6.46926 25.0652 6.46926 31.3135 12.5922C37.5622 18.7155 37.5622 28.6434 31.3135 34.7666L23.2297 42.6883C21.4433 44.4388 18.5537 44.4359 16.7697 42.6877L8.68646 34.7666C2.43785 28.6434 2.43785 18.7155 8.68646 12.5922ZM20 21.496C18.7687 21.496 17.7714 22.474 17.7714 23.6794C17.7714 24.8848 18.7687 25.8628 20 25.8628C21.2313 25.8628 22.2286 24.8848 22.2286 23.6794C22.2286 22.474 21.2313 21.496 20 21.496ZM12.2857 23.6794C12.2857 19.5037 15.74 16.1195 20 16.1195C24.26 16.1195 27.7143 19.5037 27.7143 23.6794C27.7143 27.8551 24.26 31.2394 20 31.2394C15.74 31.2394 12.2857 27.8551 12.2857 23.6794Z"
                  fill="#FF5600"
                />
              </svg>
              <h2>Terdekat</h2>
            </div>
            <div className="simple-box-2">
              <svg
                width="100"
                height="100"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.6332 80.6702L79.6887 114L88.3999 96.2352L108 97.5002L88.9443 64.1702L60.6332 80.6702Z"
                  fill="#FF5600"
                />
                <path
                  d="M57.3667 80.6702L38.3111 114L29.6 96.2352L10 97.5002L29.0556 64.1702L57.3667 80.6702Z"
                  fill="#FF5600"
                />
                <path
                  d="M59 81C80.0482 81 97.1112 63.763 97.1112 42.5C97.1112 21.237 80.0482 4 59 4C37.9518 4 20.8889 21.237 20.8889 42.5C20.8889 63.763 37.9518 81 59 81Z"
                  fill="#FFD100"
                />
                <path
                  d="M60.6333 27.76L64.7166 36.065L73.7544 37.385C74.097 37.4338 74.4192 37.5786 74.6845 37.803C74.9497 38.0274 75.1474 38.3224 75.2551 38.6545C75.3628 38.9866 75.3762 39.3426 75.2938 39.6821C75.2114 40.0215 75.0365 40.3309 74.7889 40.575L68.2011 47.01L69.8889 56.085C69.9468 56.4271 69.9093 56.7788 69.7806 57.1006C69.6519 57.4224 69.4371 57.7017 69.1602 57.9072C68.8833 58.1127 68.5553 58.2363 68.2128 58.2642C67.8703 58.2921 67.527 58.2231 67.2211 58.065L59 53.775L50.8877 58.065C50.5819 58.2231 50.2385 58.2921 49.896 58.2642C49.5535 58.2363 49.2255 58.1127 48.9486 57.9072C48.6717 57.7017 48.4569 57.4224 48.3282 57.1006C48.1995 56.7788 48.162 56.4271 48.22 56.085L49.7988 47.01L43.2111 40.575C42.9635 40.3309 42.7885 40.0215 42.7061 39.6821C42.6237 39.3426 42.6371 38.9866 42.7448 38.6545C42.8525 38.3224 43.0502 38.0274 43.3155 37.803C43.5807 37.5786 43.9029 37.4338 44.2455 37.385L53.5555 36.065L57.6388 27.76C57.8027 27.5104 58.0252 27.3056 58.2865 27.164C58.5477 27.0224 58.8396 26.9482 59.1361 26.9482C59.4326 26.9482 59.7244 27.0224 59.9857 27.164C60.2469 27.3056 60.4694 27.5104 60.6333 27.76Z"
                  fill="#FAA307"
                />
              </svg>
              <h2>Terlaris</h2>
            </div>
            <div className="simple-box-3">
              <svg
                width="100"
                height="100"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M95.0894 18.2112L90.2152 9.64781C89.7844 8.89104 89.0749 8.33879 88.2428 8.11246C87.4107 7.88614 86.5241 8.00428 85.7778 8.4409L9.80691 52.9355C9.43749 53.1519 9.11371 53.44 8.85407 53.7833C8.59443 54.1267 8.40401 54.5186 8.2937 54.9366C8.18338 55.3546 8.15533 55.7906 8.21114 56.2196C8.26696 56.6486 8.40554 57.0622 8.61898 57.4369L13.4931 66.0003C14.8795 65.1719 16.4139 64.6302 18.0078 64.4066C19.6016 64.1829 21.2233 64.2817 22.7793 64.6973C24.3353 65.1128 25.7948 65.8369 27.0734 66.8277C28.3521 67.8185 29.4246 69.0564 30.2292 70.4699C31.0337 71.8834 31.5543 73.4446 31.7609 75.0633C31.9675 76.682 31.856 78.3262 31.4328 79.9009C31.0096 81.4757 30.2832 82.9498 29.2954 84.2383C28.3076 85.5267 27.078 86.6039 25.6777 87.4077L29.7386 94.5436C30.385 95.6791 31.4495 96.5076 32.6981 96.847C33.9467 97.1863 35.277 97.0086 36.3965 96.353L109.551 53.5065C110.67 52.8508 111.487 51.7709 111.822 50.5043C112.156 49.2377 111.981 47.8882 111.335 46.7526L107.272 39.6187C104.474 41.2575 101.148 41.7015 98.0269 40.853C94.9057 40.0044 92.2447 37.9329 90.6292 35.0941C89.0136 32.2553 88.576 28.8817 89.4124 25.7156C90.2489 22.5494 92.2909 19.85 95.0894 18.2112Z"
                  fill="#C74300"
                />
                <path
                  d="M112 67.3594V56.2357C112 55.2523 111.615 54.3092 110.929 53.6138C110.244 52.9185 109.314 52.5278 108.345 52.5278H9.65517C8.68576 52.5278 7.75605 52.9185 7.07058 53.6138C6.3851 54.3092 6 55.2523 6 56.2357V67.3594C9.63529 67.3594 13.1217 68.8243 15.6922 71.4319C18.2628 74.0395 19.7069 77.5762 19.7069 81.2639C19.7069 84.9517 18.2628 88.4884 15.6922 91.096C13.1217 93.7036 9.63529 95.1685 6 95.1685V104.438C6 105.913 6.57765 107.328 7.60586 108.371C8.63408 109.414 10.0286 110 11.4828 110H106.517C107.971 110 109.366 109.414 110.394 108.371C111.422 107.328 112 105.913 112 104.438V95.1685C108.365 95.1685 104.878 93.7036 102.308 91.096C99.7372 88.4884 98.2931 84.9517 98.2931 81.2639C98.2931 77.5762 99.7372 74.0395 102.308 71.4319C104.878 68.8243 108.365 67.3594 112 67.3594Z"
                  fill="#FF5600"
                />
                <path
                  d="M62.6551 76.629C65.6832 76.629 68.1379 74.1389 68.1379 71.0672C68.1379 67.9955 65.6832 65.5054 62.6551 65.5054C59.6271 65.5054 57.1724 67.9955 57.1724 71.0672C57.1724 74.1389 59.6271 76.629 62.6551 76.629Z"
                  fill="white"
                />
                <path
                  d="M84.5862 98.8763C87.6142 98.8763 90.0689 96.3862 90.0689 93.3145C90.0689 90.2428 87.6142 87.7527 84.5862 87.7527C81.5581 87.7527 79.1034 90.2428 79.1034 93.3145C79.1034 96.3862 81.5581 98.8763 84.5862 98.8763Z"
                  fill="white"
                />
                <path
                  d="M59.9138 96.0955C59.5546 95.731 59.27 95.2982 59.0764 94.8217C58.8827 94.3453 58.7838 93.8348 58.7854 93.3194C58.7869 92.8041 58.8888 92.2942 59.0853 91.819C59.2818 91.3437 59.5689 90.9126 59.9302 90.5503L82.002 68.4458C82.6914 67.7704 83.6147 67.3966 84.573 67.4051C85.5314 67.4135 86.4482 67.8035 87.1259 68.491C87.8036 69.1784 88.188 70.1084 88.1963 71.0806C88.2046 72.0528 87.8362 72.9894 87.1704 73.6887L65.3801 96.0788C65.023 96.4453 64.598 96.7366 64.1295 96.9359C63.661 97.1352 63.1584 97.2386 62.6504 97.2402C62.1424 97.2417 61.6391 97.1414 61.1694 96.945C60.6998 96.7485 60.2731 96.4598 59.9138 96.0955ZM42.5517 59.9436C43.0364 59.9436 43.5013 59.7483 43.844 59.4006C44.1867 59.0529 44.3793 58.5814 44.3793 58.0897V52.5278H40.7241V58.0897C40.7241 58.5814 40.9167 59.0529 41.2594 59.4006C41.6021 59.7483 42.067 59.9436 42.5517 59.9436ZM42.5517 78.483C43.0364 78.483 43.5013 78.2877 43.844 77.94C44.1867 77.5923 44.3793 77.1208 44.3793 76.6291V67.3594C44.3793 66.8677 44.1867 66.3961 43.844 66.0484C43.5013 65.7008 43.0364 65.5054 42.5517 65.5054C42.067 65.5054 41.6021 65.7008 41.2594 66.0484C40.9167 66.3961 40.7241 66.8677 40.7241 67.3594V76.6291C40.7241 77.1208 40.9167 77.5923 41.2594 77.94C41.6021 78.2877 42.067 78.483 42.5517 78.483ZM42.5517 97.0225C43.0364 97.0225 43.5013 96.8271 43.844 96.4795C44.1867 96.1318 44.3793 95.6602 44.3793 95.1685V85.8988C44.3793 85.4071 44.1867 84.9355 43.844 84.5879C43.5013 84.2402 43.0364 84.0449 42.5517 84.0449C42.067 84.0449 41.6021 84.2402 41.2594 84.5879C40.9167 84.9355 40.7241 85.4071 40.7241 85.8988V95.1685C40.7241 95.6602 40.9167 96.1318 41.2594 96.4795C41.6021 96.8271 42.067 97.0225 42.5517 97.0225ZM42.5517 102.584C42.067 102.584 41.6021 102.78 41.2594 103.127C40.9167 103.475 40.7241 103.947 40.7241 104.438V110H44.3793V104.438C44.3793 103.947 44.1867 103.475 43.844 103.127C43.5013 102.78 43.0364 102.584 42.5517 102.584Z"
                  fill="white"
                />
              </svg>
              <h2>Promo</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeheader;
