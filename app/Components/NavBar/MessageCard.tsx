'use client'
import { formatDate } from "@/app/core/FormatDate";
import { AnnouncementsType, NotifItemsType } from "@/app/core/Types";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isNotif?: boolean;
  announcements:AnnouncementsType[]
}

export default function MessageCard({  isNotif,announcements }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isDarkMode = theme.palette.mode === 'dark'
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
        announcements.length > 0 ?
        announcements?.map((item) => (
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
        :<Stack
                my={8}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={3}
              >
                <Stack
                  sx={{
                    width: 150,
                    height:135,
                  }}
                >
                  <Image
                    src={`/images/${isDarkMode ? 'emptyTableDark.png' : 'emptyTable.webp'}`}
                    width={300}
                    height={270}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    alt=""
                  />
                </Stack>
                <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
                  اطلاعیه ای وجود ندارد
                </Typography>
        </Stack>
        }

        
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
