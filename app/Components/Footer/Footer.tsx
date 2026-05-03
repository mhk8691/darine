"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DesktopCertificate from "./DesktopCertificate";
import LaptopCertificate from "./LaptopCertificate";
import LinkContainer from "./LinkContainer";

export const installment = [
  "/images/simple/snapppayLogo.webp",
  "/images/simple/digipayLogo.webp",
  "/images/simple/azkivamLogo.webp",
  "/images/simple/nasiba.webp",
];
export const certificate = [
  "/images/simple/nezamSenfi.webp",
  "/images/simple/enamadSmall.webp",
  "/images/simple/ecunion.webp",
  "/images/simple/estjt.webp",
  "/images/simple/fintech.webp",
  "/images/simple/khavarmianeQuality.webp",
  "/images/simple/nikecert.webp",
  "/images/simple/tuwWorld.webp",
];
const links = [
  { title: "طلای ۱۸ عیار", link: "/" },
  { title: "طلای ۲۱ عیار", link: "/" },
  { title: "طلای ۲۴ عیار", link: "/" },
  { title: "طلای دست دوم", link: "/" },
  { title: "مثقال طلا", link: "/" },
  { title: "قیمت طلا آب شده", link: "/" },
  { title: "سکه امامی", link: "/" },
  { title: "سکه بهار آزادی", link: "/" },
  { title: "نیم سکه", link: "/" },
  { title: "ربع سکه", link: "/" },
  { title: "سکه گرمی", link: "/" },
  { title: "محاسبه قیمت طلا دست دوم", link: "/" },
];

export default function Footer() {
  const pathname = usePathname();
  const isLoginPage = pathname?.startsWith("/login");
  if (isLoginPage) return null;
  return (
    <Stack>
      <Grid
        container
        sx={{
          bgcolor: "background.default",
          py: 5,
          px: {
            xs: "16px !important",
            md: "24px !important",
            lg: "40px !important",
          },
          bottom: 0,
        }}
      >
        <Grid size={2.5} mb={4}>
          <Stack
            sx={{
              minWidth: "100px",
              minHeight: "100px",
              maxWidth: "130px",
              maxHeight: "130px",
            }}
          >
            <Image
              src={"/images/darineh.png"}
              width={247}
              height={46}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Stack>
        </Grid>
        <Grid size={12} container>
          <Grid
            size={{
              xs: 12,
              md: 6,
              xl: 3,
            }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: "text.secondary" }}
            >
              طلاسی، پلتفرم خرید و فروش آنلاین طلا خام و بدون اجرت، آسان‌ترین و
              امن‌ترین راه را برای حفظ ارزش سرمایه شما ارائه می‌کند.
            </Typography>
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: "text.secondary" }}
            >
              آدرس: تهران, میدان هروی, بازار طلای هروی سنتر, پلاک B44
            </Typography>
          </Grid>
          <LinkContainer />
          <DesktopCertificate />
        </Grid>
        <Grid
          size={12}
          mt={7}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          <Stack direction={"column"} gap={4}>
            <Typography
              variant="body1"
              fontWeight={500}
              fontSize={14}
              sx={{ color: "text.secondary" }}
            >
              لینک های مفید
            </Typography>
            <Stack direction="row" alignItems="center">
              {links.map((item, index) => (
                <React.Fragment key={item.title}>
                  <Link href={item.link}>
                    <Typography
                      variant="body1"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ color: "text.secondary" }}
                    >
                      {item.title}
                    </Typography>
                  </Link>

                  {index !== links.length - 1 && (
                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          mt: {
            xs: 0,
            md: 3.5,
          },
        }}
      >
        <Grid
          size={12}
          bgcolor={{
            xs: "background.default",
            md: "#393936",
          }}
          py={{
            xs: 0,
            md: 4,
          }}
          px={{
            xs: 2,
            md: 4,
          }}
        >
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            gap={{
              xs: 4,
              lg: 0,
            }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              alignItems={"center"}
              gap={{
                xs: 3,
                md: 0.5,
              }}
            >
              <Typography variant="body2" color="text.primary" fontSize={12}>
                راه های ارتباطی:
              </Typography>
              <Typography variant="body2" color="text.primary" fontSize={12}>
                24 ساعته و در 7 روز هفته پاسخگوی شما هستیم.
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={{
                xs: "100%",
                md: "auto",
              }}
              gap={{
                xs: 0,
                md: 3,
              }}
            >
              <Stack
                direction={"row"}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={"center"}
              >
                <SvgIcon>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5859 8.25016C15.5859 11.7977 12.5059 14.6668 8.71094 14.6668L7.85844 15.6935L7.35428 16.2985C6.92344 16.8119 6.09843 16.7018 5.81427 16.0877L4.58594 13.3835C2.9176 12.2101 1.83594 10.3493 1.83594 8.25016C1.83594 4.70266 4.91594 1.8335 8.71094 1.8335C11.4793 1.8335 13.8718 3.36434 14.9443 5.56434C15.3568 6.38017 15.5859 7.28766 15.5859 8.25016Z"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M20.1702 11.7881C20.1702 13.8873 19.0885 15.7481 17.4202 16.9215L16.1919 19.6256C15.9077 20.2398 15.0827 20.359 14.6519 19.8365L13.2952 18.2048C11.0769 18.2048 9.09688 17.224 7.85938 15.6931L8.71187 14.6665C12.5069 14.6665 15.5869 11.7973 15.5869 8.24979C15.5869 7.28729 15.3577 6.3798 14.9452 5.56396C17.9427 6.25146 20.1702 8.78145 20.1702 11.7881Z"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.41406 8.25H10.9974"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </SvgIcon>

                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  پشتیبانی چت آنلاین
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={"center"}
              >
                <SvgIcon>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.134 16.8022C20.134 17.1322 20.0606 17.4713 19.9048 17.8013C19.749 18.1313 19.5473 18.443 19.2815 18.7363C18.8323 19.2313 18.3373 19.5888 17.7781 19.818C17.2281 20.0472 16.6323 20.1663 15.9906 20.1663C15.0556 20.1663 14.0565 19.9463 13.0023 19.4972C11.9481 19.048 10.894 18.443 9.84896 17.6822C8.79479 16.9122 7.79563 16.0597 6.84229 15.1155C5.89813 14.1622 5.04563 13.163 4.28479 12.118C3.53312 11.073 2.92813 10.028 2.48813 8.99218C2.04813 7.94718 1.82812 6.94801 1.82812 5.99468C1.82812 5.37134 1.93812 4.77551 2.15812 4.22551C2.37812 3.66634 2.72646 3.15301 3.21229 2.69467C3.79896 2.11717 4.44063 1.83301 5.11896 1.83301C5.37563 1.83301 5.63229 1.88801 5.86146 1.99801C6.09979 2.10801 6.31063 2.27301 6.47563 2.51134L8.60229 5.50884C8.76729 5.73801 8.88646 5.94884 8.96896 6.15051C9.05146 6.34301 9.09729 6.53551 9.09729 6.70968C9.09729 6.92968 9.03313 7.14968 8.90479 7.36051C8.78563 7.57134 8.61146 7.79134 8.39146 8.01134L7.69479 8.73551C7.59396 8.83634 7.54813 8.95551 7.54813 9.10218C7.54813 9.17551 7.55729 9.23968 7.57563 9.31301C7.60313 9.38634 7.63063 9.44134 7.64896 9.49634C7.81396 9.79884 8.09813 10.193 8.50146 10.6697C8.91396 11.1463 9.35396 11.6322 9.83063 12.118C10.3256 12.6038 10.8023 13.053 11.2881 13.4655C11.7648 13.8688 12.159 14.1438 12.4706 14.3088C12.5165 14.3272 12.5715 14.3547 12.6356 14.3822C12.709 14.4097 12.7823 14.4188 12.8648 14.4188C13.0206 14.4188 13.1398 14.3638 13.2406 14.263L13.9373 13.5755C14.1665 13.3463 14.3865 13.1722 14.5973 13.0622C14.8081 12.9338 15.019 12.8697 15.2481 12.8697C15.4223 12.8697 15.6056 12.9063 15.8073 12.9888C16.009 13.0713 16.2198 13.1905 16.449 13.3463L19.4831 15.5005C19.7215 15.6655 19.8865 15.858 19.9873 16.0872C20.079 16.3163 20.134 16.5455 20.134 16.8022Z"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                </SvgIcon>
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  02191345910
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={{
                  xs: 0.5,
                  sm: 0.7,
                }}
                alignItems={"center"}
              >
                <SvgIcon>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41797 18.7918H15.5846C18.3346 18.7918 20.168 17.4168 20.168 14.2085V7.79183C20.168 4.5835 18.3346 3.2085 15.5846 3.2085H6.41797C3.66797 3.2085 1.83463 4.5835 1.83463 7.79183V14.2085C1.83463 17.4168 3.66797 18.7918 6.41797 18.7918Z"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.41536 8.25L9.28453 10.5417C10.2287 11.2933 11.7779 11.2933 12.722 10.5417L15.582 8.25"
                      stroke="currentColor"
                      strokeWidth="1.375"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </SvgIcon>
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  support@talasea.ir
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={1.5}>
              <Stack
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  p: 0.75,
                }}
              >
                <InstagramIcon
                  sx={{
                    color: "background.default",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Stack>
              <Stack
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  p: 0.75,
                }}
              >
                <TwitterIcon
                  sx={{
                    color: "background.default",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Stack>
              <Stack
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  p: 0.75,
                }}
              >
                <TelegramIcon
                  sx={{
                    color: "background.default",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Stack>
              <Stack
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  p: 0.75,
                }}
              >
                <LinkedInIcon
                  sx={{
                    color: "background.default",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <LaptopCertificate />
      <Stack
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
        display={{
          md: "none",
        }}
        bgcolor={{
          xs: "transparent",
          sm: "background.paper",
        }}
      >
        <Typography variant="body2" fontSize={10} sx={{ color: "text.muted" }}>
          Copyright © 2026 Talasea | شرکت توسعه راهکار الوند ارسباران | version:
          3.0.3
        </Typography>
      </Stack>
    </Stack>
  );
}
