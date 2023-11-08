import React from 'react'
import Box from '@mui/material/Box';
import searchIcon from '../assets/search.svg'
import ring from '../assets/ring.svg'
import profile from '../assets/profile.jpeg'
import { Breadcrumbs, Link, Typography } from '@mui/material';
import Table from './Table'
import BuyDomain from './BuyDomain'


const BoxC = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, py: 3, px: 4 }}>
            <div className="flex justify-end mb-3">
                <div className="search bg-white rounded-full flex items-center gap-4 w-fit p-4">
                    <div className="relative">
                        <img src={searchIcon} alt="search-icon" className='absolute top-2/4 -translate-y-2/4 left-5' />
                        <input type="text" className='px-10 rounded-full focus:outline-none bg-[#F6F6F6] w-[214px] h-[41px] caret-slate-500' placeholder='Search' />
                    </div>
                    <img src={searchIcon} alt="" className='w-4 h-4 Domains-pointer' />
                    <img src={ring} alt="" className='w-4 h-4 cursor-pointer' />
                    <img src={profile} alt="profile" className='w-7 h-7 rounded-full shadow-md cursor-pointer' />
                </div>
            </div>
            <div className="flex justify-between mb-8">
                <div className="flex flex-col">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover"  color="#8D8D8D" href="/">
                            <p className='text-sm md:text-base'>Dashboard</p>
                        </Link>
                        <Typography color="text.primary">
                            <p className='text-sm md:text-base'>domains</p>
                        </Typography>
                    </Breadcrumbs>
                    <h1 className='text-2xl lg:text-3xl text-[#343434] font-bold'>Domains</h1>
                </div>
                <BuyDomain />
            </div>
            <Table />
        </Box>
    )
}

export default BoxC