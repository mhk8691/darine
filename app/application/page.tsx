import {  Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import AppDownloadItem from './AppDownloadItem'
import Image from 'next/image'
import Link from 'next/link'
import { FaqItem } from '../core/Types'
import Faq from '../Components/Faq/Faq'
import OverviewSlider from './OverviewSlider'
const applicationsList = [
    {
        title:'دانلود برای اندروید',
        items:[
            {
                id:1,
        image:'apk',
        url:'/test'
    },{
        id:2,
        image:'myket',
        url:'/test'
    },{
        id:3,
        image:'bazar',
        url:'/test'
    },]
    },
   {
    title:'دانلود برای iOS (آیفون)',
    items:[ {
        id:1,
        image:'PWA',
        url:'/test'
    },{id:2,
        image:'sibApp',
        url:'/test'
    },{id:3,
        image:'anar',
        url:'/test'
    },{id:4,
        image:'iApps',
        url:'/test'
    },{id:5,
        image:'sibIrani',
        url:'/test'
    },]
   }
]
const faqItems:FaqItem[]= [
    {
        id:'1',
        question:'از کدام اپلیکیشن طلای آب شده بخریم؟',
        answer:'اپلیکیشن دارینه بهترین انتخاب برای خرید و فروش طلای آب شده است. دارینه با ارائه خدمات امن، سریع و همچنین کارمزدهای شفاف و پله‌ای، تجربه‌ای بی‌نظیر از سرمایه‌گذاری در طلا را برای شما فراهم می‌کند. با طلاسی، شما می‌توانید با اطمینان کامل طلای آب شده خرید و فروش کنید.'
    },
    {
        id:'2',
        question:'چگونه می‌توانم از اپلیکیشن دارینه طلای آب شده بخرم؟',
        answer:'برای خرید طلای آب شده از اپلیکیشن طلاسی، ابتدا کیف پول خود را شارژ کنید و سپس به بخش خرید طلا بروید. مقدار طلای مورد نظر خود را وارد کنید و خرید خود را تایید کنید. دارینه به شما امکان می‌دهد حتی با حداقل 100 هزار تومان طلا بخرید.'
    },
     
     {
        id:'3',
        question:'چگونه می‌توانم طلای خود را به صورت فیزیکی تحویل بگیرم؟',
        answer:'شما می‌توانید طلای خود را به صورت فیزیکی و به صورت سکه پارسیان یا شمش تحویل بگیرید. از حداقل 30 سوت (میلی‌گرم) امکان تحویل فیزیکی طلا در دارینه وجود دارد. برای ثبت درخواست تحویل و بررسی جزئیات، به بخش برداشت طلا در پنل کاربری خود مراجعه کنید.'
    },
     {
        id:'4',
        question:'کارت هدیه طلا چیست و چگونه می‌توانم آن را خریداری کنم؟',
        answer:'کارت هدیه طلا، کارت‌های لوکس و زیبایی هستند که دارای اعتبار طلا می‌باشند و بهترین هدیه برای عزیزان شما محسوب می‌شوند. شما می‌توانید این کارت‌ها را از طریق اپلیکیشن دارینه خریداری کرده و به دوستان و خانواده خود هدیه دهید.'
    },
     {
        id:'5',
        question:'چگونه می‌توانم طلای خود را در دارینه بفروشم؟',
        answer:'فروش طلا در دارینه بسیار ساده است. در بخش خرید و فروش پنل کاربری، مقدار طلای مورد نظر خود را وارد کنید و پس از تایید، معادل ریالی آن به کیف پول شما اضافه می‌شود. دارینه همیشه خریدار طلای شماست و شما می‌توانید به راحتی طلای خود را به وجه نقد قابل برداشت به حساب بانکی، تبدیل کنید.'
    },
     {
        id:'6',
        question:'چگونه می‌توانم وضعیت سود و زیان لحظه‌ای خود را مشاهده کنم؟',
        answer:'در اپلیکیشن طلاسی، شما می‌توانید به راحتی وضعیت سود و زیان لحظه‌ای خود را مشاهده کنید. در قسمت کیف پول، می‌توانید سود و زیان خود را بررسی کنید و این امکان به شما کمک می‌کند تا تصمیمات سرمایه‌گذاری بهتری بگیرید و در لحظه از وضعیت دارایی‌های خود مطلع باشید.'
    },
     {
        id:'7',
        question:'چه کارمزدی برای خرید و فروش طلا در دارینه در نظر گرفته شده است؟',
        answer:'در طلاسی، کارمزد خرید و فروش طلا با کمترین مقدار ممکن تعیین شده است. برای مشاهده کارمزد و جزئیات بیشتر، به صفحه قوانین و مقررات در اپلیکیشن دارینه مراجعه کنید.'
    },
     {
        id:'8',
        question:'آیا می‌توانم سفارشات خود را با قیمت مشخص ثبت کنم؟',
        answer:'بله، در دارینه شما می‌توانید به صورت حرفه‌ای معامله کنید و سفارشات خرید و فروش خود را با قیمت‌های مشخص ثبت نمایید. این قابلیت به شما امکان می‌دهد تا بدون نیاز به نظارت مداوم بر بازار، طلا را به قیمت دلخواه خود خرید و فروش کنید.'
    },
    
]
export default function page() {
  return (
    <Container maxWidth={'lg'} sx={{mt:3,px:'40px !important'}}>
    <Grid container spacing={2}>
     <Grid size={{
        xs:12,
        md:7
     }}
     container
     >
        <Typography variant="h6" fontWeight={'bold'}>
            نرم افزار و اپلیکیشن خرید و فروش طلا - دارینه
        </Typography>
        <Stack display={{
            md:'none'
        }} direction={'row'} justifyContent={'center'} width={'100%'} my={2}>
            <Image src={'main.webp'} width={'400'} height={322} alt='' />
        </Stack>
        <Typography variant="body2" >
            اپلیکیشن طلاسی، بستری برای خرید و فروش آنلاین و راحت طلای خام و بدون اجرت است. با بھره مندی از امکانات اپلیکیشن طلاسی، سرمایه شما همیشه در دسترس شما بوده و برای <Link style={{color:'#FCD535',textDecoration:'underline'}} href={'/dashboard'}>
                خرید طلای آب شده
                </Link> نیازی به مراجعه و حضور فیزیکی به بازار طلا نیست.


        </Typography>
           {
        applicationsList.map((item)=>(
          <Stack key={item.title} direction={'column'} gap={2}>
            <Typography variant="body1" fontWeight={'900'} >
                    {item.title}
                </Typography>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:{
                xs:'center',
                md:'flex-start'
            }}}>
                {
                    item.items.map((application)=>(
                        <Grid   key={application.id}>
                            <AppDownloadItem  image={application.image} url={application.url}  />
                        </Grid>
                    ))
                }
            </Grid>
          </Stack>
        ))
    }
     </Grid>
     <Grid size={{xs:12,md:5}} pt={2} sx={{display:{
        xs:'none',
        md:'flex'
     }}}>
        <Image src={'/images/application-download/main.webp'} width={'400'} height={322} alt='' />
     </Grid>
    </Grid>
    <Typography variant="h6" fontSize={{
        xs:22,
        md:30
    }}
    sx={{my:4}} fontWeight={'bold'} >
        تصاویر اپ
    </Typography>
    <OverviewSlider/>
     <Faq faqData={faqItems} titleStyle={{fontSize:{
        xs:22,
        md:30
     },mt:5}} />
    </Container>
  )
}
