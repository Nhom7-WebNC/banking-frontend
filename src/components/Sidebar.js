import React from "react";
import { AppSidebar, AppSidebarNav2, AppSidebarMinimizer } from "@coreui/react";

export const Sidebar = ({ navigation }) => {
  return (
    <AppSidebar fixed display="lg">
      <AppSidebarNav2 navConfig={navigation} />

      <AppSidebarMinimizer />
    </AppSidebar>
  );
};
