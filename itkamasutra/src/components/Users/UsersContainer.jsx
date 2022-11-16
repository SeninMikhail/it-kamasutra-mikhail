import Users from "./Users";
import { connect } from "react-redux";
import {
  followAc,
  setCurrentPageAc,
  setUsersAc,
  setUsersTotalCountAc,
  unfollowAc,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAc(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAc(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAc(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAc(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
