import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHomeLinks } from "../actions";
import PageLayout from "../components/page-layout";
import { Helmet } from "react-helmet";

const LamudiHomePage = (props) => {
  const { links = [] } = props;

  useEffect(() => {
    if (!links.length) {
      props.fetchHomeLinks();
    }
  }, []);

  return (
    <PageLayout
      headTitle="Property for Sale and Rent in Pakistan | Lamudi"
      pageTitle="Find Property in Pakistan"
      description="Browse property for sale and rent in Pakistan"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Property for Sale and Rent in Pakistan | Lamudi"}</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        {links.length > 0 ? (
          links.map((section, i) => (
            <div key={i} className="max-w-7xl mx-auto px-4 py-8">
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.links.map((category, j) => (
                  <div key={j} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="space-y-3">
                      {category.links.map((link, k) => (
                        <a 
                          key={k} 
                          href={link.slug} 
                          className="flex justify-between items-center text-gray-700 hover:text-blue-600"
                        >
                          <span>{link.link_text}</span>
                          <span className="text-sm text-gray-500">({link.ads_count})</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="text-xl text-gray-600">Loading property links...</div>
          </div>
        )}
      </div>
     </PageLayout>
  );
};

function mapStateToProps(state) {
  return { links: state.homeLinks };
}

function loadData(store) {
  return store.dispatch(fetchHomeLinks());
}

export default {
  title: "Property for Sale and Rent in Pakistan | Lamudi",
  description: "Browse property for sale and rent in Pakistan",
  loadData,
  component: connect(mapStateToProps, { fetchHomeLinks })(LamudiHomePage),
};
