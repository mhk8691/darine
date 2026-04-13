"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
const options = [
  {
    title: "پروفایل",
    link: "/dashboard/profile",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1108 11.7151C11.0466 11.7059 10.9641 11.7059 10.8908 11.7151C9.27747 11.6601 7.99414 10.3401 7.99414 8.7176C7.99414 7.05844 9.33247 5.71094 11.0008 5.71094C12.66 5.71094 14.0075 7.05844 14.0075 8.7176C13.9983 10.3401 12.7241 11.6601 11.1108 11.7151Z"
            fill="#FDE378"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.1789 17.7652C15.5473 19.2593 13.3839 20.1668 11.0006 20.1668C8.61727 20.1668 6.45393 19.2593 4.82227 17.7652C4.91393 16.9035 5.46393 16.0602 6.44477 15.4002C8.95643 13.7318 13.0631 13.7318 15.5564 15.4002C16.5373 16.0602 17.0873 16.9035 17.1789 17.7652Z"
            fill="#FDE378"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.0007 20.1668C16.0633 20.1668 20.1673 16.0628 20.1673 11.0002C20.1673 5.93755 16.0633 1.8335 11.0007 1.8335C5.93804 1.8335 1.83398 5.93755 1.83398 11.0002C1.83398 16.0628 5.93804 20.1668 11.0007 20.1668Z"
            stroke="currentColor"
            strokeWidth="1.375"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "کارت های بانکی",
    link: "/dashboard/bank-card",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13114_97258)">
            <path
              d="M21.2951 6.39941V14.2269C21.2951 17.8362 20.3773 18.7452 16.7239 18.7452H5.27823C1.6248 18.754 0.707031 17.8539 0.707031 14.2358V6.39941H21.2951Z"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.82812 14.6416H6.88428"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.46094 14.6416H13.5821"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21.2951 5.77313V6.39969H0.707031V5.77313C0.707031 2.16383 1.6248 1.25488 5.27823 1.25488H16.7151C20.3773 1.25488 21.2951 2.16383 21.2951 5.77313Z"
              fill="#FDE378"
              stroke="currentColor"
              strokeWidth="1.41195"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_13114_97258">
              <rect
                width="22"
                height="18.9025"
                fill="white"
                transform="translate(0 0.548828)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "دعوت از دوستان",
    link: "/dashboard/invite",
    icon: (
      <SvgIcon>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7644 3.36461C19.7555 4.81419 18.6242 5.98092 17.2011 6.02511C17.1392 6.02511 17.0685 6.02511 17.0066 6.02511C15.5836 5.98092 14.4434 4.81419 14.4434 3.36461C14.4434 1.91503 15.6278 0.704102 17.1039 0.704102C18.58 0.704102 19.7644 1.90619 19.7644 3.36461Z"
            fill="#FDE378"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M16.1339 13.5406C17.5482 13.7792 19.1038 13.5317 20.1998 12.7981C21.6494 11.8258 21.6494 10.2437 20.1998 9.2714C19.095 8.53777 17.5216 8.29028 16.1074 8.53777"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.54953 3.36461C7.54953 4.81419 6.41815 5.98092 4.99509 6.02511C4.93322 6.02511 4.86251 6.02511 4.80063 6.02511C3.37757 5.98092 2.23735 4.81419 2.22852 3.36461C2.22852 1.90619 3.41293 0.704102 4.88902 0.704102C6.36512 0.704102 7.54953 1.89735 7.54953 3.36461Z"
            fill="#FDE378"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.85892 13.5406C4.4447 13.7792 2.88905 13.5317 1.79303 12.7981C0.334614 11.8258 0.334614 10.2437 1.79303 9.2714C2.89789 8.53777 4.47122 8.29028 5.88544 8.53777"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.5769 11.0746C13.5592 12.5153 12.4278 13.6909 11.0048 13.7351C10.9429 13.7262 10.8722 13.7262 10.8103 13.7351C9.38724 13.682 8.25586 12.5153 8.25586 11.0746C8.25586 9.63383 9.44027 8.41406 10.9164 8.41406C12.3925 8.41406 13.5769 9.60731 13.5769 11.0746Z"
            fill="#FDE378"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M14.0068 20.5028C12.3539 21.6076 9.65803 21.6076 8.00515 20.5028C6.55557 19.5393 6.55557 17.9483 8.00515 16.976C9.65803 15.8888 12.3716 15.8888 14.0068 16.976C15.4652 17.9483 15.4652 19.5393 14.0068 20.5028Z"
            stroke="currentColor"
            strokeWidth="1.41422"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "آالارم قیمت",
    link: "/dashboard/price-alert",
    icon: (
      <SvgIcon fontSize="small">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1051 18.3334C13.1051 20.002 11.7525 21.3546 10.0839 21.3546C8.41516 21.3546 7.0625 20.002 7.0625 18.3334C7.0625 16.6647 8.41516 15.312 10.0839 15.312C11.7525 15.312 13.1051 16.6647 13.1051 18.3334Z"
            fill="#FCD535"
          ></path>
          <path
            d="M18.6822 16.4193C17.2961 15.2479 16.5014 13.5365 16.5014 11.7224V9.16661C16.5014 5.62839 13.6221 2.75 10.0848 2.75C6.54722 2.75 3.66797 5.62839 3.66797 9.16661V11.7224C3.66797 13.5365 2.87322 15.2487 1.4791 16.4276C1.30294 16.578 1.16154 16.7648 1.06465 16.9751C0.967769 17.1854 0.917721 17.4143 0.91797 17.6459C0.91797 18.5304 1.63752 19.25 2.52225 19.25H17.6473C18.5318 19.25 19.2514 18.5304 19.2514 17.6459C19.2514 17.1764 19.0469 16.7319 18.6822 16.4193Z"
            fill="currentColor"
          ></path>
          <path
            d="M19.4791 9.85483C19.0996 9.85483 18.7916 9.54683 18.7916 9.16733C18.7916 6.53464 17.7669 4.06058 15.906 2.19883C15.6374 1.93028 15.6374 1.49487 15.906 1.22632C16.1746 0.957764 16.61 0.957764 16.8786 1.22632C18.9989 3.34743 20.1666 6.16807 20.1666 9.16733C20.1666 9.54683 19.8586 9.85483 19.4791 9.85483ZM0.6875 9.85483C0.308 9.85483 0 9.54683 0 9.16733C0 6.16811 1.16789 3.34743 3.28896 1.22718C3.55751 0.958623 3.99309 0.958623 4.26164 1.22718C4.5302 1.49573 4.5302 1.93131 4.26164 2.19986C2.39989 4.06058 1.375 6.53464 1.375 9.16733C1.375 9.54683 1.067 9.85483 0.6875 9.85483ZM10.0834 22.0007C8.18774 22.0007 6.64589 20.4589 6.64589 18.5632C6.64589 18.1837 6.95389 17.8757 7.33339 17.8757C7.71289 17.8757 8.02089 18.1837 8.02089 18.5632C8.02089 19.7009 8.94571 20.6257 10.0834 20.6257C11.2209 20.6257 12.1459 19.7009 12.1459 18.5632C12.1459 18.1837 12.4539 17.8757 12.8334 17.8757C13.2129 17.8757 13.5209 18.1837 13.5209 18.5632C13.5209 20.4589 11.979 22.0007 10.0834 22.0007Z"
            fill="currentColor"
          ></path>
          <path
            d="M17.6472 19.25H2.52225C1.63752 19.25 0.917969 18.5304 0.917969 17.6459C0.917822 17.4142 0.967909 17.1852 1.06478 16.9747C1.16165 16.7642 1.303 16.5772 1.4791 16.4267C2.87322 15.2487 3.66797 13.5365 3.66797 11.7224V9.16661C3.66797 5.62839 6.54636 2.75 10.0848 2.75C13.623 2.75 16.5014 5.62839 16.5014 9.16661V11.7224C16.5014 13.5365 17.2961 15.2487 18.6812 16.4203C19.0469 16.7319 19.2514 17.1764 19.2514 17.6459C19.2514 18.5304 18.5318 19.25 17.6472 19.25ZM10.0848 4.125C7.30437 4.125 5.04297 6.3864 5.04297 9.16661V11.7224C5.04297 13.9415 4.07046 16.0371 2.37556 17.4698C2.3435 17.4973 2.29297 17.5542 2.29297 17.6459C2.29297 17.7704 2.39755 17.875 2.52225 17.875H17.6472C17.7718 17.875 17.8764 17.7704 17.8764 17.6459C17.8764 17.5542 17.826 17.4973 17.7956 17.4717C16.0989 16.0371 15.1264 13.9415 15.1264 11.7224V9.16661C15.1264 6.3864 12.865 4.125 10.0848 4.125Z"
            fill="currentColor"
          ></path>
          <path
            d="M10.082 4.125C9.70253 4.125 9.39453 3.817 9.39453 3.4375V0.6875C9.39453 0.308 9.70253 0 10.082 0C10.4615 0 10.7695 0.308 10.7695 0.6875V3.4375C10.7695 3.817 10.4615 4.125 10.082 4.125Z"
            fill="currentColor"
          ></path>
        </svg>
      </SvgIcon>
    ),
  },
];

export default function ProfileBtn() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClose = (event) => {
    if (wrapperRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <Button
          onClick={handleToggle}
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          variant="outlined"
          color="inherit"
          disableRipple
          sx={{
            fontSize: 16,
            fontWeight: 400,
            borderRadius: 2,
            px: 2.5,
            py: 1.2,
            "&:hover": {
              background: "rgb(16, 16, 15)",
            },
          }}
          startIcon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0026 9.99935C12.3038 9.99935 14.1693 8.13387 14.1693 5.83268C14.1693 3.5315 12.3038 1.66602 10.0026 1.66602C7.70142 1.66602 5.83594 3.5315 5.83594 5.83268C5.83594 8.13387 7.70142 9.99935 10.0026 9.99935Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.1604 18.3333C17.1604 15.1083 13.9521 12.5 10.0021 12.5C6.05208 12.5 2.84375 15.1083 2.84375 18.3333"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          }
        >
          محمدحسین کابلی
        </Button>

        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: "100%",
            overflow: "hidden",
            background: "#111110",
            boxShadow: "0 0 5px #2E2C26",
            opacity: open ? 1 : 0,
            transform: open
              ? "translateY(0) scale(1)"
              : "translateY(-48px) scale(0.98)",
            pointerEvents: open ? "auto" : "none",

            transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "top center",
            py: 1,
          }}
        >
          <Stack px={1}>
            <Stack
              bgcolor={"background.paper"}
              borderRadius={1}
              border={1}
              borderColor={"#393936"}
            >
              <Stack direction={"column"} gap={1} p={1}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary" }}
                  fontSize={12}
                >
                  موجودی تومان:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  0 تومان
                </Typography>
              </Stack>
              <Divider />
              <Stack direction={"column"} gap={1} p={1}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary" }}
                  fontSize={12}
                >
                  موجودی طلا:
                </Typography>
                <Typography variant="body2" fontSize={12}>
                  0 گرم
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <MenuList>
            {options.map((option) => (
              <Box component={Link} href={option.link} key={option.title}>
                <MenuItem
                  onClick={() => setOpen(false)}
                  sx={{
                    px: 1.5,
                    "&:hover": {
                      background: "#111110",
                    },
                  }}
                >
                  <Stack direction={"row"} gap={1} alignItems={"center"}>
                    <Stack>{option.icon}</Stack>
                    <Typography variant="body2" fontWeight={600}>
                      {option.title}
                    </Typography>
                  </Stack>
                </MenuItem>
                <Divider />
              </Box>
            ))}
          </MenuList>
          <Stack px={1.5} direction={"column"} gap={1.5}>
            <Button
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href="/dashboard/irt-transaction"
              disableRipple
              onClick={() => setOpen(false)}
            >
              افزایش اعتبار
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpen(false)}
            >
              خروج
            </Button>
          </Stack>
        </Paper>
      </div>
    </ClickAwayListener>
  );
}
