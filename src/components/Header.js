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
            <img style={{width: 40, height: 40}}
              src="https://img.favpng.com/21/13/5/user-profile-default-computer-icons-network-video-recorder-png-favpng-7dPZA8WRdY80Uw3bdMWkEN4fR.jpg"
              className="img-avatar "
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
