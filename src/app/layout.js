import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "R Interior",
  description: "R Interior Website",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* All Theme CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/mousecursor.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
        />
      </head>

      <body>
        <Header />
        <Toaster />
        <main>{children}</main>
        <Footer />

        {/* JS Files */}
        <script src="/js/jquery-3.7.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/validator.min.js"></script>
        <script src="/js/jquery.slicknav.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/isotope.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/SmoothScroll.js"></script>
        <script src="/js/parallaxie.js"></script>
        <script src="/js/gsap.min.js"></script>
        <script src="/js/magiccursor.js"></script>
        <script src="/js/SplitText.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        <script src="/js/jquery.mb.YTPlayer.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/function.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              window.onscroll = function () {
                const btn = document.getElementById("scrollTopBtn");
                if (window.scrollY > 100) {
                  btn.style.display = "block";
                } else {
                  btn.style.display = "none";
                }
              };
            `,
          }}
        />
      </body>
    </html>
  );
}
