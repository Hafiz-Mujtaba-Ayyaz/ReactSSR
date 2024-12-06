import React from "react";
import PageLayout from "../components/base/page-layout";
import { connect } from "react-redux";
import { fetchHomeLinks } from "../actions";
import { rentSlug } from "../utils/constants";
import { homePage } from "../components/filters/home-filters.module.scss"
import BannerComponent from '../components/base/bannerComponent';
import HomeScreen from "../components/home/home-screen";
import Container from "../components/base/container";

const Home = (props) => {
  const { isMobile = false , allLinks } = props
 
  return (
    <div>
      <>
      <PageLayout
        className={homePage}
        description={
          "Browse property on Lamudi.pk the best real estate and property website in Pakistan. Search houses, plots, new projects, commercial plots, villas, flats, ready to move apartments for rent and sale in Karachi Lahore Islamabad and all over Pakistan."
        }
        pageTitle="Rent and Buy Properties in Pakistan"
        headTitle="Lamudi.pk Rent and Buy Pakistan Property. Rent Houses, Flats, Apartments , Portions."
        bannerComponent={<BannerComponent isMobile={isMobile} purpose={rentSlug} />}
        bannerComponentPlacement="left"
      >
        <Container>
          <HomeScreen allLinks={allLinks} purpose={rentSlug} isMobile={isMobile} />
        </Container>
      </PageLayout>
    </>
    </div>
  );
};

function mapStateToProps({ homeLinks }) {
  return { allLinks: homeLinks };
}

const loadData = (store)=> {
  return store.dispatch(fetchHomeLinks(1));
}

export default {
  component: connect(mapStateToProps, { fetchHomeLinks })(Home),
  loadData
}
