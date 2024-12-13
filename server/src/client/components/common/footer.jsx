import { Link } from "react-router-dom";
import { MdExpandLess, MdMail, MdPlace } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../base/container";
import * as styles from "./footer.module.scss";
import LayoutGrid from "../base/layout-grid";
import Logo from "./logo";
import { Telephone, Facebook, Twitter, LinkedIn } from "./svg-icons";
import classNames from "classnames/bind";
import React  from "react";

const bindStylesWithClass = classNames.bind(styles);

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

export default function Footer() {
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.footer}>
      <Container>
        <LayoutGrid rowGap="24px" classname="u-mb40 hidden-xs" gridColumns="4">
          {sampleLinks.map(({ title: sectionTitle, links }, i) => {
            return (
              <div key={i}>
                <h3 className={styles.footerLinksHeader}>{sectionTitle}</h3>
                <ul className={styles.footerNav}>
                  {links.map(({ link_text: title, slug: href }, i) => {
                    return (
                      <li key={i}>
                        <Link href={href} prefetch={false}>
                          <p>{title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </LayoutGrid>

        <LayoutGrid classname={`u-mb32 ${styles.theCompany}`} gridColumns="4">
          <div>
            <Link href="/" prefetch={false}>
              <p>
                <Logo className={styles.footerLogo} />
              </p>
            </Link>
          </div>
          <div>
            <h3 className={styles.footerLinksHeader}>Lamudi.pk</h3>
            <ul className={styles.footerNav}>
              {links.company.map(({ title, href, external }, i) => {
                return (
                  <li key={i}>
                    {external ? (
                      <p href={href}>{title}</p>
                    ) : (
                      <Link href={href} prefetch={false}>
                        <p>{title}</p>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.offset}>
            <div className="vcard">
              <div className="adr u-mb24">
                <h3
                  className={`fn org organization-name ${styles.org} ${styles.footerLinksHeader}`}
                  title="Contact Information for Lamudi.pk"
                >
                  Contact
                </h3>
                <span className="tel flex">
                  <span>
                    <Telephone className={styles.iconFooterAdr} />
                  </span>
                  <span className="value">
                    0800-786786
                    <br />
                    <span>(9:00 AM – 6:00 PM)</span>
                  </span>
                </span>
              </div>
              <div className="email flex">
                <span>
                  <MdMail className={styles.iconFooterAdr} />
                </span>
                <a href="mailto:support@lamudi.pk">support@lamudi.pk</a>
              </div>
            </div>
          </div>
          <div className={styles.offset}>
            <div className="vcard">
              <span className="adr">
                <h3
                  className={`fn org organization-name ${styles.org} ${styles.footerLinksHeader}`}
                  title="Contact Information for Lamudi.pk"
                >
                  Address
                </h3>
                <div className="street-address flex u-mb24">
                  <span>
                    <MdPlace className={styles.iconFooterAdr} />
                  </span>
                  <span>
                    8th Floor, Mega Tower,
                    <br />
                    63-B,{" "}
                    <span className="street-address">
                      Main Boulevard Gulberg
                    </span>
                    ,
                  </span>
                </div>
                <span className="locality">Gulberg II, </span>
                <span className="city">Lahore</span>,<br />
                <span className="country">Pakistan</span>. <br />
              </span>
            </div>
          </div>
        </LayoutGrid>
        <div className="flex flex-ycenter">
          <div>
            <div className={`${styles.socialIconsList} u-spbwx8 u-mb8`}>
              {socialLinks.map(({ href, uniqueName, iconName }, i) => {
                return (
                  <Link key={i} href={href} prefetch={false}>
                    <p
                      className={`${styles.icon} ${bindStylesWithClass(
                        uniqueName
                      )}  inlineFlex flexYcenter flexXcenter`}
                      target="_blank"
                    >
                      {iconName}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div>© {year.getFullYear()} Lamudi.pk. All rights reserved.</div>
          </div>
          <button onClick={scrollToTop} className={styles.backtoTop}>
            Back to top
            <MdExpandLess />
          </button>
        </div>
      </Container>
    </div>
  );
}
