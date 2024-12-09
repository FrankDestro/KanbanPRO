import { createTheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import * as React from "react";
import KanbanPROLogo from "../assets/kanban.png";
import { faGear, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanbanBoard from "../components/KanbanBoard/KanbanBoard"; 
import './DashboardLayoutComponent.css';

const NAVIGATION: Navigation = [
  {
    segment: "KanbanBoard",
    title: "KanbanBoard",
    icon: <FontAwesomeIcon icon={faTasks} />,
  },
  {
    segment: "Settings",
    title: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

interface DashboardLayoutComponentProps {
  window?: () => Window;
}

const DashboardLayoutComponent: React.FC<DashboardLayoutComponentProps> = ({
  window,
}) => {
  const router = useDemoRouter("/KanbanBoard");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            src={KanbanPROLogo}
            alt="MUI logo"
            style={{ width: "40px", marginLeft: "10px", marginRight: "10px" }}
          />
        ),
        title: "KanbanPRO",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <div className="dashLayout-container-kanbanBoard">
          <KanbanBoard />
        </div>
      </DashboardLayout>
    </AppProvider>
  );
};

export default DashboardLayoutComponent;
