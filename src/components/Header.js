import React from "react";
import { Link, useHistory } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";

import { AppSidebarToggler } from "@coreui/react";
import { ChangePassword } from "../containers/Auth/ChangePassword";

export const Header = () => {
  const history = useHistory();

  const logout = async () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img
              src="https://jetsport.com.au/assets/backend/images/default-avatar.png"
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to="/accountInfo">
                <i className="fa fa-user"></i> Thông tin tài khoản
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link to="/change-password">
                <i className="fa fa-user"></i> Đổi mật khẩu
              </Link>
            </DropdownItem>
            <DropdownItem onClick={logout}>
              <i className="fa fa-lock"></i> Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </>
  );
};
