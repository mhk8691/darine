"use client";
import { IconButton, Stack, SvgIcon, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const appbarItems = [
  {
    name: "گزارش ها",
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9987 25.6668H17.9987C23.832 25.6668 26.1654 23.3335 26.1654 17.5002V10.5002C26.1654 4.66683 23.832 2.3335 17.9987 2.3335H10.9987C5.16536 2.3335 2.83203 4.66683 2.83203 10.5002V17.5002C2.83203 23.3335 5.16536 25.6668 10.9987 25.6668Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.5833 21.5832C19.8667 21.5832 20.9167 20.5332 20.9167 19.2498V8.74984C20.9167 7.4665 19.8667 6.4165 18.5833 6.4165C17.3 6.4165 16.25 7.4665 16.25 8.74984V19.2498C16.25 20.5332 17.2883 21.5832 18.5833 21.5832Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.4154 21.5835C11.6987 21.5835 12.7487 20.5335 12.7487 19.2502V15.1668C12.7487 13.8835 11.6987 12.8335 10.4154 12.8335C9.13203 12.8335 8.08203 13.8835 8.08203 15.1668V19.2502C8.08203 20.5335 9.12036 21.5835 10.4154 21.5835Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    link: "/dashboard/reports/",
  },
  {
    name: "سفارش",
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9987 25.6668H17.9987C23.832 25.6668 26.1654 23.3335 26.1654 17.5002V10.5002C26.1654 4.66683 23.832 2.3335 17.9987 2.3335H10.9987C5.16536 2.3335 2.83203 4.66683 2.83203 10.5002V17.5002C2.83203 23.3335 5.16536 25.6668 10.9987 25.6668Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.5076 16.1245L16.9609 19.6712"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.49219 16.1245H20.5089"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.49219 11.8782L12.0389 8.33154"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.5089 11.877H8.49219"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    link: "/dashboard/trades/",
  },
  {
    name: "خانه",
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.022 3.31369L4.7337 8.21369C3.6837 9.03035 2.83203 10.7687 2.83203 12.087V20.732C2.83203 23.4387 5.03703 25.6554 7.7437 25.6554H21.2537C23.9604 25.6554 26.1654 23.4387 26.1654 20.7437V12.2504C26.1654 10.8387 25.2204 9.03035 24.0654 8.22535L16.8554 3.17369C15.222 2.03035 12.597 2.08869 11.022 3.31369Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 20.9888V17.4888"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    link: "/dashboard/",
  },
  {
    name: "فیزیکی",
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.01172 13.0908V18.3292C4.01172 23.5675 6.11172 25.6675 11.3501 25.6675H17.6384C22.8767 25.6675 24.9767 23.5675 24.9767 18.3292V13.0908"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.4993 14.0002C16.6343 14.0002 18.2093 12.2618 17.9993 10.1268L17.2293 2.3335H11.7809L10.9993 10.1268C10.7893 12.2618 12.3643 14.0002 14.4993 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.8619 14.0002C24.2186 14.0002 25.9453 12.0868 25.7119 9.74183L25.3853 6.5335C24.9653 3.50016 23.7986 2.3335 20.7419 2.3335H17.1836L18.0003 10.5118C18.1986 12.4368 19.9369 14.0002 21.8619 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.07815 14.0002C9.00315 14.0002 10.7415 12.4368 10.9282 10.5118L11.1848 7.9335L11.7448 2.3335H8.18649C5.12982 2.3335 3.96315 3.50016 3.54315 6.5335L3.22815 9.74183C2.99482 12.0868 4.72149 14.0002 7.07815 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.4987 19.8335C12.5504 19.8335 11.582 20.8018 11.582 22.7502V25.6668H17.4154V22.7502C17.4154 20.8018 16.447 19.8335 14.4987 19.8335Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    link: "/dashboard/gold-receive/",
  },
  {
    name: "پروفایل",
    icon: (
      <svg
        width="29"
        height="28"
        viewBox="0 0 29 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.01172 13.0908V18.3292C4.01172 23.5675 6.11172 25.6675 11.3501 25.6675H17.6384C22.8767 25.6675 24.9767 23.5675 24.9767 18.3292V13.0908"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.4993 14.0002C16.6343 14.0002 18.2093 12.2618 17.9993 10.1268L17.2293 2.3335H11.7809L10.9993 10.1268C10.7893 12.2618 12.3643 14.0002 14.4993 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.8619 14.0002C24.2186 14.0002 25.9453 12.0868 25.7119 9.74183L25.3853 6.5335C24.9653 3.50016 23.7986 2.3335 20.7419 2.3335H17.1836L18.0003 10.5118C18.1986 12.4368 19.9369 14.0002 21.8619 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.07815 14.0002C9.00315 14.0002 10.7415 12.4368 10.9282 10.5118L11.1848 7.9335L11.7448 2.3335H8.18649C5.12982 2.3335 3.96315 3.50016 3.54315 6.5335L3.22815 9.74183C2.99482 12.0868 4.72149 14.0002 7.07815 14.0002Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.4987 19.8335C12.5504 19.8335 11.582 20.8018 11.582 22.7502V25.6668H17.4154V22.7502C17.4154 20.8018 16.447 19.8335 14.4987 19.8335Z"
          stroke="currentcolor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    link: "/dashboard/profile/",
  },
];

export default function MobileAppbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack
      position="fixed"
      width="100%"
      zIndex={10}
      left={0}
      bottom={0}
      bgcolor="rgb(59, 59, 55, .9)"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      py={1}
    >
      {appbarItems.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Stack
            key={item.name}
            direction="column"
            alignItems="center"
            component="div"
            gap={.5}
            onClick={() => router.push(item.link)}
            sx={{ position: "relative", cursor: "pointer" }}
          >
          
              <IconButton
                sx={{
                  position: "relative",
                  p:.75,
                  bgcolor: isActive ? "primary.main" : "transparent",
                  transition: "all 0.3s ease",
                  boxShadow: isActive
                    ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
                    : "none",
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <SvgIcon
                  sx={{
                    color: isActive ? "black" : "#ADADA9",
                    fontSize: 30,
                  }}
                >
                  {item.icon}
                </SvgIcon>
              </IconButton>

            <Typography
              variant="body2"
              sx={{
                color:isActive ?'primary.main':"#ADADA9",
                fontSize: 10,
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}
