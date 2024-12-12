import React from 'react';

const verticalCardData = [
  {
    coverPhoto: {
      url: 'https://picsum.photos/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Askari, Lahore',
    area: '10 marla',
    slug:
      'http://localhost:3000/property/liberty-marketrestaurant-space-available-for-rent-in-liberty-market-19759558.html',
    label: 'House for Rent',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/527/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Askari, Lahore',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/313/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Askari, Lahore',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/151/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Askari, Lahore',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/101/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/1031/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
  },
];

const horizontalCardData = [
  {
    coverPhoto: {
      url: 'https://picsum.photos/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Askari, Lahore',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/527/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/313/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/151/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/101/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
  {
    coverPhoto: {
      url: 'https://picsum.photos/id/1031/256',
    },
    photoCount: 12,
    baths: 3,
    price: '55 Thousand',
    rooms: 5,
    loc: 'Bahria Town - Janiper Block, Bahria Town - Sector C',
    area: '10 marla',
    slug: '#',
    label: 'House for Rent',
    appliedFilter: '5 Marla 2 Bedrooms Flat Available...',
    des: 'Arazi Real Estate offer 5 Marla 2 Bedrooms…',
    date: 'Added 12 minutes ago',
  },
];

const sliderData = [
  { url: 'https://picsum.photos/id/527/720/450' },
  { url: 'https://picsum.photos/id/313/720/450' },
  { url: 'https://picsum.photos/id/151/720/450' },
  { url: 'https://picsum.photos/id/101/720/450' },
  { url: 'https://picsum.photos/id/1031/720/450' },
];

const locations = [
  { title: 'DHA Defence', count: 3216 },
  { title: 'Bahria Town', count: 936 },
  { title: 'Gulberg', count: 752 },
  // { title: "Johar Town", count: 502 },
  // { title: "Paragon City", count: 435 },
  // { title: "Askari", count: 319 },
  // { title: "Wapda Town", count: 283 },
  // { title: "Model Town", count: 275 },
  // { title: "Cantt", count: 247 },
  // { title: "Valencia Housing Society", count: 177 },
  // { title: "Allama Iqbal Town", count: 171 },
  // { title: "Eden", count: 154 },
  // { title: "Gulshan-e-Ravi", count: 147 },
  // { title: "Garden Town", count: 145 },
  // { title: "State Life Housing Society", count: 138 },
  // { title: "Divine Gardens", count: 134 },
  // { title: "Pak Arab Housing Society", count: 118 },
  // { title: "DHA 11 Rahbar", count: 94 },
  // { title: "Punjab Coop Housing Society", count: 87 },
  // { title: "Faisal Town", count: 77 },
  // { title: "EME Society", count: 70 },
  // { title: "Raiwind Road", count: 62 },
  // { title: "Township", count: 62 },
  // { title: "Sabzazar Scheme", count: 61 },
  // { title: "Cavalry Ground", count: 58 },
  // { title: "Al Rehman Garden", count: 54 },
  // { title: "Lahore Medical Housing Society", count: 51 },
  // { title: "Lalazaar Garden", count: 49 },
  // { title: "Central Park Housing Scheme", count: 45 },
  // { title: "Formanites Housing Scheme", count: 44 },
  // { title: "Harbanspura", count: 43 },
  // { title: "Military Accounts Housing Society", count: 42 },
  // { title: "Canal Garden", count: 38 },
  // { title: "IEP Engineers Town", count: 38 },
  // { title: "Park View Villas", count: 35 },
  // { title: "Samanabad", count: 33 },
  // { title: "Jubilee Town", count: 32 },
  // { title: "Bahria Orchard", count: 31 },
  // { title: "College Road", count: 29 },
  // { title: "Audit & Accounts Housing Society", count: 29 },
  // { title: "Khayaban-e-Amin", count: 29 },
  // { title: "Sui Gas Housing Society", count: 28 },
  // { title: "Walton Road", count: 25 },
  // { title: "Punjab Govt Employees Society", count: 24 },
  // { title: "Architects Engineers Housing Society", count: 24 },
  // { title: "PIA Housing Scheme", count: 23 },
  // { title: "Eden Avenue Extension", count: 23 },
  // { title: "Taj Bagh Scheme", count: 22 },
  // { title: "Izmir Town", count: 21 },
  // { title: "PCSIR Housing Scheme", count: 21 },
  // { title: "Nasheman-e-Iqbal", count: 20 },
  // { title: "Shadman", count: 20 },
  // { title: "Green City", count: 20 },
  // { title: "Airline Housing Society", count: 20 },
  // { title: "Marghzar Officers Colony", count: 18 },
  // { title: "Ichhra", count: 18 },
  // { title: "GT Road", count: 18 },
  // { title: "Main Canal Bank Road", count: 17 },
  // { title: "Asim Town", count: 16 },
  // { title: "Multan Road", count: 16 },
];

const popularLocationLinks = [
  { title: 'Houses For Rent in Lahore', count: 3216 },
  { title: 'Houses For Rent in Karachi', count: 936 },
  { title: 'Houses For Rent in Islamabad', count: 752 },
  { title: 'Houses For Rent in Rawalpindi', count: 502 },
  { title: 'Houses For Rent in Multan', count: 435 },
  { title: 'Houses For Rent in Faisalabad', count: 319 },
  { title: 'Houses For Rent in Quetta', count: 283 },
];

const locationsSlide = [
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
  { title: 'DHA Defence', count: 3216, link: '#' },
];

const iconEnvelop = (
  <svg viewBox="0 0 48 48">
    <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" />
  </svg>
);

const iconPhone = (
  <svg viewBox="0 0 48 48">
    <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
  </svg>
);

const navLinks = [
  {
    text: 'Buy',
    link: '/',
  },
  {
    text: 'Rent',
    link: '/rent.html',
  },
  {
    text: 'Home Loan',
    link: '/loan-calculator',
    prefetch: false,
  },
  {
    text: 'About Us',
    link: '/aboutus.html',
    prefetch: false,
  },
  {
    text: 'Contact Us',
    link: '/contactus.html',
    prefetch: false,
  },
  {
    text: 'Blog',
    link: '/blog/',
    prefetch: false,
    external: true,
  },
];

const useFulLinks = [
  {
    heading: 'Related 3 Bed Flats and Apartments',
    links: [
      { title: 'Houses For Rent in Lahore', count: 3216, link: '#' },
      { title: 'Houses For Rent in Karachi', count: 936, link: '#' },
      { title: 'Houses For Rent in Islamabad', count: 752, link: '#' },
      { title: 'Houses For Rent in Rawalpindi', count: 502, link: '#' },
      { title: 'Houses For Rent in Multan', count: 435, link: '#' },
      { title: 'Houses For Rent in Faisalabad', count: 319, link: '#' },
      { title: 'Houses For Rent in Quetta', count: 283, link: '#' },
    ],
  },
  {
    heading: '5 Marla Plots in Surroundings',
    links: [
      { title: 'Houses For Rent in Lahore', count: 3216, link: '#' },
      { title: 'Houses For Rent in Karachi', count: 936, link: '#' },
      { title: 'Houses For Rent in Islamabad', count: 752, link: '#' },
      { title: 'Houses For Rent in Rawalpindi', count: 502, link: '#' },
      { title: 'Houses For Rent in Multan', count: 435, link: '#' },
      { title: 'Houses For Rent in Faisalabad', count: 319, link: '#' },
      { title: 'Houses For Rent in Quetta', count: 283, link: '#' },
    ],
  },
];

const popularLoanPeriod = [5, 10, 15];
const loanPeriodList = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

const loanDownPayment = [5, 10, 15, 20, 25, 30, 40];

export {
  verticalCardData,
  horizontalCardData,
  sliderData,
  iconEnvelop,
  iconPhone,
  locations,
  popularLocationLinks,
  navLinks,
  locationsSlide,
  useFulLinks,
  loanPeriodList,
  popularLoanPeriod,
  loanDownPayment,
};
