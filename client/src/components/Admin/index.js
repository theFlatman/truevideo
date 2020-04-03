import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { UserList, UserItem } from "../Users";
import Rooms from "../Room/Rooms";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const AdminPage = () => {
  const [user, selectUser] = useState("");

  return (
    <div>
      <h3>Admin</h3>
      <Switch>
        <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
        <Route
          exact
          path={ROUTES.ADMIN}
          render={props => (
            <UserList
              {...props}
              selectUserForRoom={selectedUser => selectUser(selectedUser)}
            />
          )}
        />
      </Switch>
      <Rooms addedUser={user} />
    </div>
  );
};

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
