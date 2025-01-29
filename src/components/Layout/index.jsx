import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { createTheme } from "@mui/material/styles"
import { AppProvider } from "@toolpad/core/AppProvider"
import { DashboardLayout } from "@toolpad/core/DashboardLayout"
import { useDemoRouter } from "@toolpad/core/internal"
import { Outlet, useNavigate } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const NAVIGATION = [
  {
    kind: "header",
    title: "Menu",
  },
  {
    segment: "administrador/produtos",
    title: "Produtos",
    icon: <ShoppingCartIcon />,
  },
  //   {
  //     kind: "divider",
  //   },
]

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: false },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  )
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
}

function DashboardLayoutBasic() {
  const router = useDemoRouter("/administrador")
  const navigate = useNavigate()

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={{
        ...router,
        navigate(path) {
          navigate(path)
        },
      }}
      theme={demoTheme}
      branding={{
        logo: "",
        title: "AVANTI",
        homeUrl: "/",
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  )
}

export default DashboardLayoutBasic
