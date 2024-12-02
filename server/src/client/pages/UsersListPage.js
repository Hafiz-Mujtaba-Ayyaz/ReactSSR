import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

const UsersList = (props) => {
  console.log('->:\n',props)
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const RenderUsers = () => {
    return props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  const head = () => {
    return (
      <Helmet>
        <title>{`${props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };

  console.log("first");
  return (
    <div>
      {head()}
      Here's a big list of users:
      <ul>
        <RenderUsers />
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
