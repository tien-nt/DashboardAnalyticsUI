import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import type { SvgIconComponent } from "@mui/icons-material";

interface StatCardProps {
  title: string;
  value: string;
  percentage?: string;
  description?: string;
  icon: SvgIconComponent;
}

export default function StatCard({
  title,
  value,
  percentage,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
         direction="row"
          sx={{ 
          justifyContent:"space-between",
          alignItems:"flex-start"}}
        >
          <Box>
            <Typography
              variant="body2"
               sx={{color:"text.secondary", mb:1}}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
             sx={{ fontWeight:700,
              mb:1}}
            >
              {value}
            </Typography>

            {(percentage || description) && (
              <Stack
                direction="row"
                sx={{alignItems:"center",
                spacing:0.5}}
              >
                {percentage && (
                  <>
                    <TrendingUpIcon
                      sx={{
                        fontSize: 18,
                        color: "success.main",
                      }}
                    />

                    <Typography
                      variant="body2"
                     sx={{ fontWeight:600,
                      color:"success.main"}}
                    >
                      {percentage}
                    </Typography>
                  </>
                )}

                {description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {description}
                  </Typography>
                )}
              </Stack>
            )}
          </Box>

          <Avatar
            variant="rounded"
            sx={{
              width: 48,
              height: 48,
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <Icon />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}