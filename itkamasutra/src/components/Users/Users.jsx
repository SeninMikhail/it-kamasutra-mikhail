import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import usersPhoto from "../../assets/images/image.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        ` https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount / 100);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(
        ` https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    debugger;
    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : usersPhoto}
                  className={styles.usersPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div> {u.name}</div>
                <div> {u.status}</div>
              </span>
              <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
