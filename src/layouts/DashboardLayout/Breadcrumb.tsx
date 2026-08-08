import {
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";

function formatBreadcrumbName(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        mb: 3,
      }}
    >
      <Link
        component={RouterLink}
        underline="hover"
        color="inherit"
        to="/"
        sx={{
          fontSize: 14,
        }}
      >
        Dashboard
      </Link>

      {pathnames.map((value, index) => {
        const routeTo =
          "/" + pathnames.slice(0, index + 1).join("/");

        const isLast =
          index === pathnames.length - 1;

        const label = formatBreadcrumbName(value);

        return isLast ? (
          <Typography
            key={routeTo}
            color="text.primary"
            sx={{
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {label}
          </Typography>
        ) : (
          <Link
            key={routeTo}
            component={RouterLink}
            to={routeTo}
            underline="hover"
            color="inherit"
            sx={{
              fontSize: 14,
            }}
          >
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}