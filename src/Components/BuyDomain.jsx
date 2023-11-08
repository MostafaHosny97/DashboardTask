import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import plus from '../assets/plus.svg'
import globe from '../assets/globe.svg'
import Form from './From';
import line from '../assets/line.svg'
import check from '../assets/check.svg'



const BuyDomain = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <button onClick={handleOpen} className='flex items-center gap-2 px-3 py-1 lg:px-8 lg:py-3 lg:me-14 mt-5 lg:mt-8 bg-[#605BFF] rounded-full self-end text-white tracking-wider'>  <img src={plus} alt="plus" className='w-3' /> Buy Domain</button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='modal absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[85%] h-[700px] bg-white p-8 rounded-xl overflow-y-scroll'>
                        <Typography id="transition-modal-title" variant="h6" className='flex gap-2' component="h2">
                            <img src={globe} alt="" />
                            <span className='lg:text-2xl text-[#343434] font-bold'>Buy Domain</span>
                        </Typography>
                        <Typography className='text-[#737373] text-sm lg:text-base md:max-w-lg font-thin' sx={{ mt: 2, mb: 4 }}>
                            This information is required in order to reach you in case of problems with your registration
                        </Typography>
                        <div className="lg:flex flex-row-reverse">
                            
                            <div className="w-full lg:w-1/3 my-8 bg-[#F9FAFC] py-8 px-7 rounded-xl h-fit">
                                <h3 className='text-lg text-[#3B3B3B] font-semibold pb-5'>Domain Details</h3>
                                <img src={line} className='my-3' alt="" />
                                <div className="flex justify-between mb-8">
                                    <h3 className='text-[#3B3B3B] font-semibold '>Tridmark.net</h3>
                                    <h3 className='text-[#55B76E] font-semibold'>15.40 USD</h3>
                                </div>
                                <div className="flex gap-2 text-black font-semibold">
                                    <img src={check} alt="" />
                                    <h2>Privacy protection is on</h2>
                                </div>
                                <div className="flex gap-2 text-black font-semibold mt-8 mb-3">
                                    <img src={check} alt="" />
                                    <h2>Auto-renew is on</h2>
                                </div>
                                <p className='text-[#4D4D4D] text-sm'>
                                    This domain will be auto-renewed around August 1 every year. You will automatically be billed when the renewal occurs.
                                </p>
                            </div>
                            <Form />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default BuyDomain