import {
  Box,
  Typography,
} from "@mui/material";

export default function DashboardPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Dashboard
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        Welcome back, John.
      </Typography>
    </Box>
  );
}