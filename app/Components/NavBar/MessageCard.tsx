'use client'
import { formatDate } from "@/app/core/FormatDate";
import { AnnouncementsType } from "@/app/core/Types";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Loading from "../Loading/Loading";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

interface Props {
  isNotif?: boolean;
  announcements:AnnouncementsType
  handleMarkReadAll:() => Promise<void>
  isLoading:boolean
}

export default function MessageCard({  isNotif,announcements,isLoading,handleMarkReadAll}: Props) {
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
        {
        announcements.notifList?.length > 0 ?
        announcements?.notifList.map((item) => (
          <Stack
          component={item.link ? Link:'div'}
          href={item.link}
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
              {item.description}
            </Typography>
            <Typography variant="body1" fontSize={14} sx={{ color: "#757571" }}>
              {formatDate(item.created_at)}
            </Typography>
          </Stack>
        ))
        :<EmptyMessage width={150} height={130} style={{mt:5}} title='اطلاعیه ای وجود ندارد' />
        }

        
      </Stack>

      {isDesktop && (
        <Stack direction={"row"} gap={1}>
          <Button
            variant={isNotif ? "contained" : "outlined"}
            color={isNotif ? "primary" : "inherit"}
            onClick={handleMarkReadAll}
            sx={{
              width: isNotif ? "50%" : "100%",
              py: 1,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
            disabled={isLoading}
          >
          {isLoading ? <Loading size={30} />:' خواندن همه'}
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
