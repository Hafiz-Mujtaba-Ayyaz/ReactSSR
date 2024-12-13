import React from "react";
import {
  AgriculturalLand,
  AllPropertyType,
  Buildings,
  CommercialPlots,
  Factories,
  FarmHouses,
  FlatsApartments,
  Houses,
  IndustrialLand,
  LowerPortions,
  Offices,
  OtherCommercialProperties,
  Penthouses,
  PlotFiles,
  PlotForms,
  ResidentialPlots,
  Rooms,
  Shops,
  UpperPortions,
  Warehouses,
} from "../components/common/svg-icons"

export const CITY_COOKIE_KEY = "selected_city"
export const AREA_COOKIE_KEY = "area_unit"
// TODO
export const PROPERTY_MAIL = `http://localhost:1338/send-inquiry-mail` // `${process.env.BASE_URL_CONTENT}/send-inquiry-mail`

export const CONTACT_MAIL = "https://www.lamudi.pk/nfpage/async/send-contactus-email"
export const REQUEST_SRC_DIRTY = "DIRTY"
export const REQUEST_SRC_PRETTY = "PRETTY"
export const SINDH_LOCATION_ID = 1523

export const areaRangeHash = {
  "Square Feet": {
    min: 0,
    max: 12000,
    marks: {
      0: "",
      450: "",
      675: "",
      1125: "",
      1800: "",
      2250: "",
      3375: "",
      4500: "",
      6750: "",
      9000: "",
      11250: "",
      12000: "",
    },
  },
  "Square Yard": {
    min: 0,
    max: 5000,
    marks: {
      0: "",
      50: "",
      60: "",
      70: "",
      80: "",
      100: "",
      120: "",
      150: "",
      200: "",
      250: "",
      300: "",
      350: "",
      400: "",
      450: "",
      500: "",
      1000: "",
      2000: "",
      4000: "",
      5000: "",
    },
  },
  "Square Meter": {
    min: 0,
    max: 25000,
    marks: {
      0: "",
      50: "",
      80: "",
      130: "",
      200: "",
      250: "",
      380: "",
      510: "",
      760: "",
      1000: "",
      1300: "",
      1900: "",
      2500: "",
      3800: "",
      5100: "",
      6300: "",
      13000: "",
      19000: "",
      25000: "",
    },
  },
  Marla: {
    min: 0,
    max: 50,
    marks: {
      0: "",
      2: "",
      3: "",
      5: "",
      8: "",
      10: "",
      15: "",
      20: "",
      30: "",
      40: "",
      50: "",
    },
  },
  Kanal: {
    min: 0,
    max: 100,
    marks: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      10: "",
      12: "",
      15: "",
      20: "",
      30: "",
      50: "",
      75: "",
      100: "",
    },
  },
}

export const oddTypes = [
  "agricultural-land",
  "commercial-plots",
  "industrial-land",
  "plot-files",
  "plot-forms",
  "plots",
  "residential-plots",
  "buildings",
  "commercial-offices",
  "other-commercial-properties",
  "shops",
  "warehouses",
]

export const priceStepsMappingsBuy = {
  0: 0,
  227272727: 500000,
  454545454: 1000000,
  681818181: 2000000,
  909090908: 3500000,
  1136363635: 5000000,
  1363636362: 6500000,
  1590909089: 8000000,
  1818181816: 10000000,
  2045454543: 12500000,
  2272727270: 15000000,
  2499999997: 17500000,
  2727272724: 20000000,
  2954545451: 25000000,
  3181818178: 30000000,
  3409090905: 40000000,
  3636363632: 50000000,
  3863636359: 75000000,
  4090909086: 100000000,
  4318181813: 250000000,
  4545454540: 500000000,
  4772727267: 1000000000,
  5000000000: 5000000000,
}

export const priceStepsMappingsRent = {
  0: 0,
  357142: 5000,
  714284: 10000,
  1071426: 15000,
  1428568: 20000,
  1785710: 25000,
  2142852: 30000,
  2499994: 35000,
  2857136: 40000,
  3214278: 45000,
  3571420: 50000,
  3928562: 60000,
  4285704: 70000,
  4642846: 80000,
  4999988: 90000,
  5357130: 100000,
  5714272: 120000,
  6071414: 140000,
  6428556: 160000,
  6785698: 180000,
  7142840: 200000,
  7499982: 225000,
  7857124: 250000,
  8214266: 300000,
  8571408: 350000,
  8928550: 500000,
  9285692: 1000000,
  9642834: 5000000,
  10000000: 10000000,
}

export const priceSliderRangesHash = {
  2: {
    min: 0,
    max: 10000000,
    marks: {
      0: "",
      357142: "",
      714284: "",
      1071426: "",
      1428568: "",
      1785710: "",
      2142852: "",
      2499994: "",
      2857136: "",
      3214278: "",
      3571420: "",
      3928562: "",
      4285704: "",
      4642846: "",
      4999988: "",
      5357130: "",
      5714272: "",
      6071414: "",
      6428556: "",
      6785698: "",
      7142840: "",
      7499982: "",
      7857124: "",
      8214266: "",
      8571408: "",
      8928550: "",
      9285692: "",
      9642834: "",
      10000000: "",
    },
  },
  1: {
    min: 0,
    max: 5000000000,
    marks: {
      0: "",
      227272727: "",
      454545454: "",
      681818181: "",
      909090908: "",
      1136363635: "",
      1363636362: "",
      1590909089: "",
      1818181816: "",
      2045454543: "",
      2272727270: "",
      2499999997: "",
      2727272724: "",
      2954545451: "",
      3181818178: "",
      3409090905: "",
      3636363632: "",
      3863636359: "",
      4090909086: "",
      4318181813: "",
      4545454540: "",
      4772727267: "",
      5000000000: "",
    },
  },
}

export const sortListHash = {
  date_desc: {
    value: "Newest",
  },
  price_desc: {
    value: "Highest Price",
  },
  price_asc: {
    value: "Lowest Price",
  },
}

export const sortingList = [
  {
    sort_key: "default",
    value: "Popular",
  },
  {
    sort_key: "date_desc",
    value: "Newest",
  },
  {
    sort_key: "price_desc",
    value: "Highest Price",
  },
  {
    sort_key: "price_asc",
    value: "Lowest Price",
  },
]

export const BEDS_FILTER_DATA = [
  { name: "Studio", slug: "-1", count: 0 },
  { name: "1", slug: "1", count: 1 },
  { name: "2", slug: "2", count: 2 },
  { name: "3", slug: "3", count: 3 },
  { name: "4", slug: "4", count: 4 },
  { name: "5", slug: "5", count: 5 },
  { name: "6+", slug: "6plus", count: 6 },
]

export const rentSlug = "for-rent"
export const buySlug = "for-sale"

export const purposeLabelHash = {
  1: "Sale",
  2: "Rent",
}

export const typesHash = {
  homes: {
    name: "Homes",
    h1Name: "Properties",
    slug: "Homes",
    id: 1,
    parentId: 1,
    external_slug: "Homes",
  },
  "farm-house": {
    name: "Farmhouses",
    id: 20,
    slug: "Farm-House",
    parentId: 1,
    external_slug: "Farm_Houses",
  },
  penthouses: {
    name: "Penthouses",
    id: 25,
    slug: "Penthouses",
    parentId: 1,
    external_slug: "Penthouse",
  },
  houses: {
    name: "Houses",
    id: 9,
    slug: "Houses",
    parentId: 1,
    external_slug: "Houses_Property",
  },
  "flats-apartments": {
    name: "Flats",
    id: 8,
    slug: "Flats-Apartments",
    parentId: 1,
    external_slug: "Flats_Apartments",
  },
  "upper-portions": {
    name: "Upper Portions",
    id: 21,
    slug: "Upper-Portions",
    parentId: 1,
    external_slug: "Upper_Portions",
  },
  "lower-portions": {
    name: "Lower Portions",
    id: 22,
    slug: "Lower-Portions",
    parentId: 1,
    external_slug: "Lower_Portions",
  },
  rooms: {
    name: "Rooms",
    id: 24,
    slug: "Rooms",
    parentId: 1,
    external_slug: "Rooms",
  },
  "agricultural-land": {
    name: "Agricultural Land",
    id: 19,
    slug: "Agricultural-Land",
    parentId: 2,
    external_slug: "Agricultural_Land",
  },
  "commercial-plots": {
    name: "Commercial Plots",
    id: 11,
    slug: "Commercial-Plots",
    parentId: 2,
    external_slug: "Commercial_Plots",
  },
  "industrial-land": {
    name: "Industrial Lands",
    id: 27,
    slug: "Industrial-Land",
    parentId: 2,
    external_slug: "Industrial_Land",
  },
  "plot-files": {
    name: "Plot Files",
    id: 23,
    slug: "Plot-Files",
    parentId: 2,
    external_slug: "Plot_Files",
  },
  "plot-forms": {
    name: "Plot Forms",
    id: 26,
    slug: "Plot-Forms",
    parentId: 2,
    external_slug: "Plot_Forms",
  },
  "residential-plots": {
    name: "Residential Plots",
    id: 12,
    slug: "Residential-Plots",
    parentId: 2,
    external_slug: "Residential_Plots",
  },
  plots: {
    name: "Plots",
    h1Name: "All Plots & Land",
    slug: "Plots",
    id: 2,
    parentId: 2,
    external_slug: "Plots",
  },
  buildings: {
    name: "Buildings",
    id: 16,
    slug: "buildings",
    parentId: 3,
    external_slug: "Buildings",
  },
  "commercial-offices": {
    name: "Commercial",
    h1Name: "Commercial Properties",
    id: 3,
    slug: "Commercial-Offices",
    parentId: 3,
    external_slug: "Commercial",
  },
  factories: {
    name: "Factories",
    id: 14,
    slug: "factories",
    parentId: 3,
    external_slug: "Factories",
  },
  offices: {
    name: "Office",
    id: 13,
    slug: "Offices",
    parentId: 3,
    external_slug: "Offices",
  },
  "other-commercial-properties": {
    name: "Other Commercial",
    id: 18,
    slug: "Other-Commercial-Properties",
    parentId: 3,
    external_slug: "Other_Commercial_Properties",
  },
  shops: {
    name: "Shops",
    id: 15,
    slug: "shops",
    parentId: 3,
    external_slug: "Retail_Shops",
  },
  warehouses: {
    name: "Warehouses",
    id: 17,
    slug: "warehouses",
    parentId: 3,
    external_slug: "Warehouses",
  },
}

export const homesTab = [
  {
    name: "All Homes",
    icon: () => <AllPropertyType />,
    slug: "Homes",
  },
  {
    name: "Houses",
    icon: () => <Houses />,
    slug: "Houses",
  },
  {
    name: "Flats",
    icon: () => <FlatsApartments />,
    slug: "Flats-Apartments",
  },
  {
    name: "Upper Portions",
    icon: () => <UpperPortions />,
    slug: "Upper-Portions",
  },
  {
    name: "Lower Portions",
    icon: () => <LowerPortions />,
    slug: "Lower-Portions",
  },
  {
    name: "Farmhouses",
    icon: () => <FarmHouses />,
    slug: "Farm-House",
  },
  {
    name: "Rooms",
    icon: () => <Rooms />,
    slug: "Rooms",
  },
  {
    name: "Penthouses",
    icon: () => <Penthouses />,
    slug: "Penthouses",
  },
]

export const plotsTab = [
  {
    name: "All Plots",
    icon: () => <AllPropertyType />,
    slug: "Plots",
  },
  {
    name: "Residential Plots",
    icon: () => <ResidentialPlots />,
    slug: "Residential-Plots",
  },
  {
    name: "Commercial Plots",
    icon: () => <CommercialPlots />,
    slug: "Commercial-Plots",
  },
  {
    name: "Agricultural Lands",
    icon: () => <AgriculturalLand />,
    slug: "Agricultural-Land",
  },
  {
    name: "Industrial Lands",
    icon: () => <IndustrialLand />,
    slug: "Industrial-Land",
  },
  {
    name: "Plot Files",
    icon: () => <PlotFiles />,
    slug: "Plot-Files",
  },
  {
    name: "Plot Forms",
    icon: () => <PlotForms />,
    slug: "Plot-Forms",
  },
]

export const commercialTabs = [
  {
    name: "All Commercial",
    icon: () => <AllPropertyType />,
    slug: "Commercial-Offices",
  },
  {
    name: "Offices",
    icon: () => <Offices />,
    slug: "Offices",
  },
  {
    name: "Shops",
    icon: () => <Shops />,
    slug: "shops",
  },
  {
    name: "Warehouses",
    icon: () => <Warehouses />,
    slug: "warehouses",
  },
  {
    name: "Factories",
    icon: () => <Factories />,
    slug: "factories",
  },
  {
    name: "Buildings",
    icon: () => <Buildings />,
    slug: "buildings",
  },
  {
    name: "Others",
    icon: () => <OtherCommercialProperties />,
    slug: "Other-Commercial-Properties",
  },
]

export const MAX_RECENT_SEARCHES = 6
export const MAX_VIEWED_PROPERTIES = 10
export const RECENT_SEARCHES_KEY = "recent_searches"
export const VIEWED_PROPERTIES_KEY = "viewed_properties"

export const INQUIRY_DESKTOP_SEARCH_LISTING_SOURCE = "Desktop Search listing card"
export const INQUIRY_DESKTOP_IMAGE_GALLLERY_SOURCE = "Desktop View Image Slider"
export const INQUIRY_DESKTOP_DETAIL_SOURCE = "Desktop View Right Panel"

export const INQUIRY_MOBILE_DETAIL_SOURCE = "Mobile View Main Form"
export const INQUIRY_MOBILE_SEARCH_LISTING_SOURCE = "Mobile Search listing card"

export const FILTER_PREFERENCES = [["keywords"], ["beds_in"], ["price_min", "price_max"], ["area_min", "area_max"]]
