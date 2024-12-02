import React from "react";
// import Link from "react-router-dom";
import { MdExpandLess, MdMail, MdPlace } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import Container from "../base/container"
import styles from "../variables/footer.module.scss";
// import LayoutGrid from "../base/layout-grid";
// import Logo from "./logo";
// import { Telephone, Facebook, Twitter, LinkedIn } from "../icons/svg-icons";
import { Link } from "react-router-dom";


const Container = ({ children, className = "" }) => {
  return (
    <div
      style={{
        maxWidth: "71.25rem",
        paddingInline: "1rem",
        marginInline: "auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
const Logo = ({ className = "", variant = "white", width = 104, ...props }) => {
  const opts = {
    primaryColor: "#ff8700",
    secondaryColor: variant === "white" ? "#fff" : "#2a65d3",
  };
  return (
    <svg
      className={`${className}`.trim()}
      width={width}
      viewBox="0 0 104 28"
      {...props}
    >
      <path
        d="M12.268.001a12.33 12.33 0 00-4.672 23.715V15.87l-1.75 1.473-1.963-2.327 3.843-4.043V6.521h3.162v2.47l4-3.858s6.451 5.136 9.65 7.19A12.3 12.3 0 0012.267 0v.001z"
        fill={opts.primaryColor}
      />
      <path
        d="M103.57 9.321a2.679 2.679 0 01-3.205 2.613 2.676 2.676 0 112.424-4.51 2.686 2.686 0 01.781 1.897zM21.784 26.732H11.251V10.658h4.788v12.067h5.745v4.007zm11.841-6.519a2.833 2.833 0 00-2.845-2.843 2.71 2.71 0 00-2.161 1 2.831 2.831 0 000 3.693 2.681 2.681 0 002.16 1 2.814 2.814 0 002.846-2.843v-.007zm4.3 6.52H33.49v-1.632a4.541 4.541 0 01-1.28 1.165 5.155 5.155 0 01-2.572.641 6.079 6.079 0 01-4.149-1.61 6.462 6.462 0 01-2.168-5.09 6.45 6.45 0 012.222-5.14 6.01 6.01 0 014.057-1.529 5.792 5.792 0 012.505.554 5 5 0 011.388 1.07V13.93h4.437v12.8l-.005.003z"
        fill={opts.secondaryColor}
      />
      <path
        d="M100.862 13.155a3.766 3.766 0 01-2.357-.829h-.03v14.408h4.8V12.326h-.052a3.77 3.77 0 01-2.358.83M62.164 26.732h-4.438V20.29a4.98 4.98 0 00-.337-2.217 1.616 1.616 0 00-1.5-.88 1.89 1.89 0 00-1.7.96 4.2 4.2 0 00-.417 2.137v6.442h-4.435V20.29a5.19 5.19 0 00-.27-2.11 1.774 1.774 0 00-1.658-.973 1.856 1.856 0 00-1.618.839 1.96 1.96 0 00-.31.817c-.074.472-.108.95-.1 1.427v6.442h-4.432v-12.8h4.437v1.544a6.886 6.886 0 011.432-1.111 5.426 5.426 0 012.62-.636 4.852 4.852 0 013.081.961c.47.39.872.857 1.188 1.381a4.749 4.749 0 014.2-2.356c.88-.015 1.747.22 2.5.677.75.454 1.3 1.175 1.54 2.018.157.628.23 1.275.216 1.923v8.4l.001-.001zM78.5 21.907a4.526 4.526 0 01-3.3 4.658c-1.086.34-2.221.5-3.359.473-2.6 0-4.467-.64-5.6-1.922a4.664 4.664 0 01-1.083-3.209V13.93h4.436v7.122a2.341 2.341 0 00.564 1.734 2.633 2.633 0 003.337 0 2.345 2.345 0 00.564-1.734V13.93H78.5v7.977zm12.808-1.687a2.766 2.766 0 00-.833-2.03 2.738 2.738 0 00-2.012-.834 2.699 2.699 0 00-2.162 1 2.871 2.871 0 000 3.72 2.674 2.674 0 002.162 1 2.743 2.743 0 002.02-.828 2.772 2.772 0 00.825-2.036v.008zm4.3 6.513h-4.435v-1.632a4.552 4.552 0 01-1.279 1.165 5.162 5.162 0 01-2.573.641 6.076 6.076 0 01-4.148-1.61A6.461 6.461 0 0181 20.207a6.447 6.447 0 012.223-5.14 6.011 6.011 0 014.054-1.528c.866-.004 1.72.19 2.5.568.521.273.99.635 1.387 1.07V6.62h4.438l.006 20.113z"
        fill={opts.primaryColor}
      />
    </svg>
  );
};
const links = {
  company: [
    {
      href: "/aboutus.html",
      title: "About Us",
    },
    {
      href: "/contactus.html",
      title: "Contact us",
    },
    {
      href: "/terms.html",
      title: "Terms & Privacy Policy",
    },
    {
      href: "/blog/",
      title: "Blog",
      external: true,
    },
  ],
};

const sampleLinks = [
  {
    title: "Browse By City",
    links: [
      {
        id: 27731,
        link_text: "Houses for Sale in Lahore",
        ads_count: 26744,
        slug: "/lahore/houses-for-sale-1",
      },
      {
        id: 27732,
        link_text: "Houses for Sale in Karachi",
        ads_count: 16787,
        slug: "/karachi/houses-for-sale-2",
      },
      {
        id: 27733,
        link_text: "Houses for Sale in Islamabad",
        ads_count: 9901,
        slug: "/islamabad/houses-for-sale-3",
      },
      {
        id: 27743,
        link_text: "Houses for Sale in Faisalabad",
        ads_count: 3238,
        slug: "/faisalabad/houses-for-sale-16",
      },
      {
        id: 27744,
        link_text: "Houses for Sale in Peshawar",
        ads_count: 3189,
        slug: "/peshawar/houses-for-sale-17",
      },
      {
        id: 27742,
        link_text: "Houses for Sale in Multan",
        ads_count: 3184,
        slug: "/multan/houses-for-sale-15",
      },
      {
        id: 27747,
        link_text: "Houses for Sale in Gujrat",
        ads_count: 430,
        slug: "/gujrat/houses-for-sale-c27747",
      },
      {
        id: 27746,
        link_text: "Houses for Sale in Jhelum",
        ads_count: 159,
        slug: "/jhelum/houses-for-sale-19",
      },
      {
        id: 27745,
        link_text: "Houses for Sale in Quetta",
        ads_count: 133,
        slug: "/quetta/houses-for-sale-18",
      },
    ],
  },
  {
    title: "Browse Plots For Sale",
    links: [
      {
        id: 39988,
        link_text: "Residential Plots for Sale in Lahore",
        ads_count: 58498,
        slug: "/lahore/residential-plots-for-sale-1",
      },
      {
        id: 39990,
        link_text: "Residential Plots for Sale in Islamabad",
        ads_count: 37523,
        slug: "/islamabad/residential-plots-for-sale-3",
      },
      {
        id: 39989,
        link_text: "Residential Plots for Sale in Karachi",
        ads_count: 24909,
        slug: "/karachi/residential-plots-for-sale-2",
      },
      {
        id: 39999,
        link_text: "Residential Plots for Sale in Multan",
        ads_count: 13484,
        slug: "/multan/residential-plots-for-sale-15",
      },
      {
        id: 40000,
        link_text: "Residential Plots for Sale in Faisalabad",
        ads_count: 7921,
        slug: "/faisalabad/residential-plots-for-sale-16",
      },
      {
        id: 40001,
        link_text: "Residential Plots for Sale in Peshawar",
        ads_count: 7866,
        slug: "/peshawar/residential-plots-for-sale-c40001",
      },
      {
        id: 40003,
        link_text: "Residential Plots for Sale in Jhelum",
        ads_count: 1566,
        slug: "/jhelum/residential-plots-for-sale-c40003",
      },
      {
        id: 40004,
        link_text: "Residential Plots for Sale in Gujrat",
        ads_count: 596,
        slug: "/gujrat/residential-plots-for-sale-c40004",
      },
      {
        id: 40002,
        link_text: "Residential Plots for Sale in Quetta",
        ads_count: 590,
        slug: "/quetta/residential-plots-for-sale-18",
      },
    ],
  },
  {
    title: "Browse Houses For Rent",
    links: [
      {
        id: 34139,
        link_text: "Houses for Rent in Lahore",
        ads_count: 6735,
        slug: "/lahore/houses-to-rent-1",
      },
      {
        id: 34141,
        link_text: "Houses for Rent in Islamabad",
        ads_count: 4322,
        slug: "/islamabad/houses-to-rent-3",
      },
      {
        id: 34140,
        link_text: "Houses for Rent in Karachi",
        ads_count: 3871,
        slug: "/karachi/houses-to-rent-2",
      },
      {
        id: 34151,
        link_text: "Houses for Rent in Faisalabad",
        ads_count: 696,
        slug: "/faisalabad/houses-to-rent-16",
      },
      {
        id: 34152,
        link_text: "Houses for Rent in Peshawar",
        ads_count: 498,
        slug: "/peshawar/houses-to-rent-17",
      },
      {
        id: 34150,
        link_text: "Houses for Rent in Multan",
        ads_count: 478,
        slug: "/multan/houses-to-rent-15",
      },
      {
        id: 34154,
        link_text: "Houses for Rent in Jhelum",
        ads_count: 18,
        slug: "/jhelum/houses-to-rent-19",
      },
      {
        id: 34153,
        link_text: "Houses for Rent in Quetta",
        ads_count: 17,
        slug: "/quetta/houses-to-rent-18",
      },
      {
        id: 34155,
        link_text: "Houses for Rent in Gujrat",
        ads_count: 10,
        slug: "/gujrat/houses-to-rent-20",
      },
    ],
  },
  {
    title: "Browse Commercial Plots",
    links: [
      {
        id: 36785,
        link_text: "Commercial Plots for Sale in Lahore",
        ads_count: 6315,
        slug: "/lahore/commercial-plots-for-sale-1",
      },
      {
        id: 36787,
        link_text: "Commercial Plots for Sale in Islamabad",
        ads_count: 2091,
        slug: "/islamabad/commercial-plots-for-sale-3",
      },
      {
        id: 36786,
        link_text: "Commercial Plots for Sale in Karachi",
        ads_count: 1951,
        slug: "/karachi/commercial-plots-for-sale-2",
      },
      {
        id: 36795,
        link_text: "Commercial Plots for Sale in Multan",
        ads_count: 384,
        slug: "/multan/commercial-plots-for-sale-15",
      },
      {
        id: 36796,
        link_text: "Commercial Plots for Sale in Faisalabad",
        ads_count: 231,
        slug: "/faisalabad/commercial-plots-for-sale-16",
      },
      {
        id: 36797,
        link_text: "Commercial Plots for Sale in Peshawar",
        ads_count: 200,
        slug: "/peshawar/commercial-plots-for-sale-17",
      },
      {
        id: 36799,
        link_text: "Commercial Plots for Sale in Jhelum",
        ads_count: 123,
        slug: "/jhelum/commercial-plots-for-sale-c36799",
      },
      {
        id: 36800,
        link_text: "Commercial Plots for Sale in Gujrat",
        ads_count: 81,
        slug: "/gujrat/commercial-plots-for-sale-20",
      },
      {
        id: 36798,
        link_text: "Commercial Plots for Sale in Quetta",
        ads_count: 19,
        slug: "/quetta/commercial-plots-for-sale-c36798",
      },
    ],
  },
  {
    title: "Browse By Locations",
    links: [
      {
        id: 123517,
        link_text: "5 Marla Houses for Sale in Lahore",
        ads_count: 8117,
        slug: "/lahore/5marla-houses-for-sale-1",
      },
      {
        id: 123513,
        link_text: "10 Marla Houses for Sale in Lahore",
        ads_count: 6354,
        slug: "/lahore/10marla-houses-for-sale-c123513",
      },
      {
        id: 123523,
        link_text: "5 Marla Houses for Sale in Islamabad",
        ads_count: 2642,
        slug: "/islamabad/5marla-houses-for-sale-3",
      },
      {
        id: 123519,
        link_text: "10 Marla Houses for Sale in Islamabad",
        ads_count: 2279,
        slug: "/islamabad/10marla-houses-for-sale-3",
      },
      {
        id: 123563,
        link_text: "5 Marla Houses for Sale in Peshawar",
        ads_count: 1587,
        slug: "/peshawar/5marla-houses-for-sale-17",
      },
      {
        id: 123557,
        link_text: "5 Marla Houses for Sale in Faisalabad",
        ads_count: 1506,
        slug: "/faisalabad/5marla-houses-for-sale-c123557",
      },
      {
        id: 123547,
        link_text: "10 Marla Houses for Sale in Multan",
        ads_count: 1182,
        slug: "/multan/10marla-houses-for-sale-c123547",
      },
      {
        id: 123551,
        link_text: "5 Marla Houses for Sale in Multan",
        ads_count: 1156,
        slug: "/multan/5marla-houses-for-sale-c123551",
      },
      {
        id: 123553,
        link_text: "10 Marla Houses for Sale in Faisalabad",
        ads_count: 417,
        slug: "/faisalabad/10marla-houses-for-sale-c123553",
      },
    ],
  },
  {
    title: "Browse Apartments For Rent",
    links: [
      {
        id: 26426,
        link_text: "Flats for Rent in Karachi",
        ads_count: 6125,
        slug: "/karachi/flats-apartments-to-rent-2",
      },
      {
        id: 26427,
        link_text: "Flats for Rent in Islamabad",
        ads_count: 2641,
        slug: "/islamabad/flats-apartments-to-rent-3",
      },
      {
        id: 26425,
        link_text: "Flats for Rent in Lahore",
        ads_count: 1690,
        slug: "/lahore/flats-apartments-to-rent-1",
      },
      {
        id: 26438,
        link_text: "Flats for Rent in Peshawar",
        ads_count: 53,
        slug: "/peshawar/flats-apartments-to-rent-17",
      },
      {
        id: 26441,
        link_text: "Flats for Rent in Gujrat",
        ads_count: 42,
        slug: "/gujrat/flats-apartments-to-rent-20",
      },
      {
        id: 26437,
        link_text: "Flats for Rent in Faisalabad",
        ads_count: 25,
        slug: "/faisalabad/flats-apartments-to-rent-16",
      },
      {
        id: 26436,
        link_text: "Flats for Rent in Multan",
        ads_count: 18,
        slug: "/multan/flats-apartments-for-rent-c26436",
      },
      {
        id: 26439,
        link_text: "Flats for Rent in Quetta",
        ads_count: 9,
        slug: "/quetta/flats-apartments-to-rent-18",
      },
      {
        id: 26440,
        link_text: "Flats for Rent in Jhelum",
        ads_count: 4,
        slug: "/jhelum/flats-apartments-for-rent-c26440",
      },
    ],
  },
  {
    title: "Browse Houses By Locations",
    links: [
      {
        id: 27738,
        link_text: "Houses for Sale in DHA Defence Lahore",
        ads_count: 5717,
        slug: "/lahore/houses-for-sale-in-dha-defence-9",
      },
      {
        id: 27739,
        link_text: "Houses for Sale in North Nazimabad Karachi",
        ads_count: 628,
        slug: "/karachi/houses-for-sale-in-north-nazimabad-11",
      },
      {
        id: 27757,
        link_text: "Houses for Sale in Allama Iqbal Town Lahore",
        ads_count: 533,
        slug: "/lahore/houses-for-sale-in-allama-iqbal-town-58",
      },
      {
        id: 27737,
        link_text: "Houses for Sale in Model Town Lahore",
        ads_count: 530,
        slug: "/lahore/houses-for-sale-in-model-town-8",
      },
      {
        id: 27740,
        link_text: "Houses for Sale in Federal B Area Karachi",
        ads_count: 459,
        slug: "/karachi/houses-for-sale-in-federal-b-area-12",
      },
      {
        id: 27736,
        link_text: "Houses for Sale in Gulberg Lahore",
        ads_count: 415,
        slug: "/lahore/houses-for-sale-in-gulberg-7",
      },
      {
        id: 27734,
        link_text: "Houses for Sale in Garden Town Lahore",
        ads_count: 163,
        slug: "/lahore/houses-for-sale-in-garden-town-4",
      },
      {
        id: 27756,
        link_text: "Houses for Sale in Multan Road Lahore",
        ads_count: 113,
        slug: "/lahore/houses-for-sale-in-multan-road-c27756",
      },
      {
        id: 27735,
        link_text: "Houses for Sale in Clifton Karachi",
        ads_count: 99,
        slug: "/karachi/houses-for-sale-in-clifton-5",
      },
    ],
  },
  {
    title: "Browse Plots By Locations",
    links: [
      {
        id: 39995,
        link_text: "Residential Plots for Sale in DHA Defence Lahore",
        ads_count: 16194,
        slug: "/lahore/residential-plots-for-sale-in-dha-defence-c39995",
      },
      {
        id: 39994,
        link_text: "Residential Plots for Sale in Model Town Lahore",
        ads_count: 114,
        slug: "/lahore/residential-plots-for-sale-in-model-town-8",
      },
      {
        id: 40014,
        link_text: "Residential Plots for Sale in Multan Road Lahore",
        ads_count: 48,
        slug: "/lahore/residential-plots-for-sale-in-multan-road-c40014",
      },
      {
        id: 39996,
        link_text: "Residential Plots for Sale in North Nazimabad Karachi",
        ads_count: 34,
        slug: "/karachi/residential-plots-for-sale-in-north-nazimabad-11",
      },
      {
        id: 39993,
        link_text: "Residential Plots for Sale in Gulberg Lahore",
        ads_count: 32,
        slug: "/lahore/residential-plots-for-sale-in-gulberg-7",
      },
      {
        id: 40015,
        link_text: "Residential Plots for Sale in Allama Iqbal Town Lahore",
        ads_count: 23,
        slug: "/lahore/residential-plots-for-sale-in-allama-iqbal-town-58",
      },
      {
        id: 39991,
        link_text: "Residential Plots for Sale in Garden Town Lahore",
        ads_count: 21,
        slug: "/lahore/residential-plots-for-sale-in-garden-town-c39991",
      },
      {
        id: 39997,
        link_text: "Residential Plots for Sale in Federal B Area Karachi",
        ads_count: 14,
        slug: "/karachi/residential-plots-for-sale-in-federal-b-area-c39997",
      },
      {
        id: 39992,
        link_text: "Residential Plots for Sale in Clifton Karachi",
        ads_count: 14,
        slug: "/karachi/residential-plots-for-sale-in-clifton-c39992",
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/LamudiGlobal",
    uniqueName: "facebook",
    iconName: <FaFacebook />,
  },
  {
    href: "https://twitter.com/LamudiGlobal",
    uniqueName: "twitter",
    iconName: <FaTwitter />,
  },
  {
    href: "https://www.linkedin.com/company/lamudi-global",
    uniqueName: "linkedin",
    iconName: <FaLinkedin />,
  },
];

const year = new Date();

const Footer = () => {
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <div>hey!</div>
    <div className="bg-gray-800 text-white py-12">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 hidden sm:grid">
        {sampleLinks.map(({ title: sectionTitle, links }, i) => {
          return (
            <div key={i}>
              <h3 className="text-xl font-bold mb-4">{sectionTitle}</h3>
              <ul className="space-y-2">
                {links.map(({ link_text: title, slug: href }, i) => {
                  return (
                    <li key={i}>
                      <Link to={href} className="hover:text-gray-300">
                        <p>{title}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="block">
            <Logo className="w-32" />
          </Link>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Lamudi.pk</h3>
          <ul className="space-y-2">
            {links.company.map(({ title, href, external }, i) => {
              return (
                <li key={i}>
                  {external ? (
                    <Link to={href} className="hover:text-gray-300">{title}</Link>
                  ) : (
                    <Link to={href} className="hover:text-gray-300">
                      <p>{title}</p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:ml-8">
          <div className="vcard">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <span className="flex items-center">
                <span className="mr-2">
                  {/* <Telephone className="w-5 h-5" /> */}
                </span>
                <span>
                  0800-786786
                  <br />
                  <span className="text-gray-400">(9:00 AM – 6:00 PM)</span>
                </span>
              </span>
            </div>
            <div className="flex items-center">
              <MdMail className="w-5 h-5 mr-2" />
              <Link to="mailto:support@lamudi.pk" className="hover:text-gray-300">
                support@lamudi.pk
              </Link>
            </div>
          </div>
        </div>
        <div className="md:ml-8">
          <div className="vcard">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <div className="flex mb-6">
              <MdPlace className="w-5 h-5 mr-2 mt-1" />
              <span>
                8th Floor, Mega Tower,
                <br />
                63-B, <span>Main Boulevard Gulberg</span>,
                <br />
                <span>Gulberg II, </span>
                <span>Lahore</span>,
                <br />
                <span>Pakistan</span>
              </span>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex justify-between items-center">
        <div>
          <div className="flex space-x-4 mb-2">
            {socialLinks.map(({ href, uniqueName, iconName }, i) => {
              return (
                <Link key={i} to={href} className="hover:text-gray-300">
                  <span className="inline-flex items-center justify-center">
                    {iconName}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-sm text-gray-400">
            © {year.getFullYear()} Lamudi.pk. All rights reserved.
          </div>
        </div>
        <button onClick={scrollToTop} className="flex items-center text-sm hover:text-gray-300">
          Back to top
          <MdExpandLess className="ml-1" />
        </button>
      </div>
    </Container>
  </div>
  
  );
}

export default Footer;

