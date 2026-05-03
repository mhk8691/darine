import { NotifItemsType } from "@/app/core/Types";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  items: NotifItemsType[];
  isNotif?: boolean;
}

export default function MessageCard({ items, isNotif }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Stack
        maxHeight={{
          xs: "100%",
          sm: 300,
        }}
        overflow={"auto"}
        sx={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {items.map((item) => (
          <Stack
            key={item.title}
            direction={"column"}
            gap={1}
            px={1}
            py={2}
            borderRadius={2}
            sx={{
              "&:hover": {
                bgcolor: "background.paper",
              },
            }}
          >
            <Typography variant="body1" fontSize={14} fontWeight={500}>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              fontSize={14}
              sx={{ color: "text.muted", lineHeight: "22.4px" }}
            >
              {item.message}
            </Typography>
            <Typography variant="body1" fontSize={14} sx={{ color: "#757571" }}>
              {item.date}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {isDesktop && (
        <Stack direction={"row"} gap={1}>
          <Button
            disableRipple
            variant={isNotif ? "contained" : "outlined"}
            color={isNotif ? "primary" : "inherit"}
            sx={{
              width: isNotif ? "50%" : "100%",
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
          >
            همه ی پیام ها
          </Button>
          {isNotif && (
            <Button
              disableRipple
              variant="outlined"
              color="inherit"
              sx={{
                width: "50%",
                py: 1,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "background.default",
                },
              }}
            >
              همه خوانده شود
            </Button>
          )}
        </Stack>
      )}
    </>
  );
}
