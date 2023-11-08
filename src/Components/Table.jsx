import { Checkbox } from "@mui/material";
import React from "react";
import arrow from '../assets/arrow-down.svg'
import calendar from '../assets/calendar.svg'
import eye from '../assets/eye.svg'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Users = [
    {
        id: 1,
        idHash: '#876364',
        selected: false,
        domainPrice: '$15.00',
        status: 'Running',
        createdAt: '12 Dec, 2023',
    },
    {
        id: 2,
        idHash: '#876365',
        selected: false,
        domainPrice: '$16.00',
        status: 'Will Expire',
        createdAt: '13 Dec, 2023',
    },
    {
        id: 3,
        idHash: '#876366',
        selected: false,
        domainPrice: '$28.00',
        status: 'Expired',
        createdAt: '13 Dec, 2023',
    },
    {
        id: 4,
        idHash: '#876367',
        selected: false,
        domainPrice: '$18.00',
        status: 'Running',
        createdAt: '14 Dec, 2023',
    },
    {
        id: 5,
        idHash: '#876368',
        selected: false,
        domainPrice: '$36.00',
        status: 'Will Expire',
        createdAt: '15 Dec, 2023',
    },
    {
        id: 6,
        idHash: '#876369',
        selected: false,
        domainPrice: '$19.00',
        status: 'Expired',
        createdAt: '16 Dec, 2023',
    },
];


const SelectTableComponent = () => {
    const [list, setList] = React.useState(Users);
    const [masterChecked, setMasterChecked] = React.useState(false);


    const onMasterCheck = (e) => {
        const updatedList = list.map((user) => ({
            ...user,
            selected: e.target.checked,
        }));

        setList(updatedList);
        setMasterChecked(e.target.checked);
    };

    const onItemCheck = (e, item) => {
        const updatedList = list.map((user) =>
            user.id === item.id ? { ...user, selected: e.target.checked } : user
        );

        const totalItems = list.length;
        const totalCheckedItems = updatedList.filter((e) => e.selected).length;

        setList(updatedList);
        setMasterChecked(totalItems === totalCheckedItems);
    };
    return (
        <div className="container mx-auto lg:p-4 ">
            <div className="w-full">
                <div className="flex items-center justify-between text-[#030229] me-5 lg:me-0 ">
                    <div className="w-1/8 lg:w-1/6 flex items-center ms-3 lg:ms-6">
                        <Checkbox
                            {...label}
                            size="small"
                            defaultChecked
                            className="form-check-input"
                            checked={masterChecked}
                            id="mastercheck"
                            onChange={onMasterCheck}
                        />
                        <label htmlFor="mastercheck" className="cursor-pointer text-xs md:text-sm lg:text-base">ID</label>
                        <img src={arrow} alt="" className="ml-1 lg:ml-2 cursor-pointer" />
                    </div>
                    <div className="w-1/8 lg:w-1/6 flex items-center gap-1 lg:gap-2 text-xs md:text-sm  lg:text-base">Domain Price <img src={arrow} alt="" /></div>
                    <div className="w-1/8 lg:w-1/6 flex items-center gap-1 lg:gap-2 text-xs md:text-sm lg:text-base">Status <img src={arrow} alt="" /></div>
                    <div className="w-1/8 lg:w-1/6 flex items-center gap-1 lg:gap-2 text-xs md:text-sm lg:text-base">Created At <img src={arrow} alt="" /></div>
                    <div className="w-1/8 lg:w-1/6 flex items-center gap-1 lg:gap-2 text-xs md:text-sm lg:text-base">Action</div>
                </div>
                {list.map((user) => (
                    <div
                        key={user.id}
                        className={`flex items-center justify-between mt-5 tableRow py-3 px-3 lg:px-6 rounded-xl bg-white text-black ${user.selected ? "bg-gray-200" : ""
                            }`}
                    >
                        <div className="w-1/8 lg:w-1/6 flex items-center">
                            <Checkbox
                                {...label}
                                size="small"
                                checked={user.selected}
                                className="form-check-input"
                                id={`rowcheck${user.id}`}
                                onChange={(e) => onItemCheck(e, user)}
                            />
                            <label htmlFor={`rowcheck${user.id}`} className="cursor-pointer text-xs md:text-sm lg:text-base font-semibold">{user.idHash}</label>
                        </div>
                        <div className="w-1/8 lg:w-1/6 ms-5 md:ms-16 lg:ms-20 text-xs md:text-sm lg:text-base font-semibold">{user.domainPrice}</div>
                        <div className={`w-1/4 md:w-1/6 ms-12 md:ms-16 lg:ms-20 me-3  py-2 lg:py-3 flex justify-center items-center gap-1 md:gap-2 lg:gap-5 text-center text-xs md:text-sm lg:text-sm ${user.status === 'Running' ? 'text-[#3A974C] bg-[#ebf5ed]' : user.status === 'Will Expire' ? 'text-[#F29339] bg-[#fef4eb]' : user.status === 'Expired' ? 'text-[#D11A2A] bg-[#fae8ea]' : ''} rounded-full`}>{user.status}
                        <img src={arrow} alt="" />
                        </div>
                        <div className="w-1/6 lg:w-1/4 ms-10 lg:ms-20 flex items-center gap-1 text-xs md:text-sm lg:text-base font-semibold"><img src={calendar} className="w-3 md:w-5" alt="" /> {user.createdAt}</div>
                        <div className="w-1/8 lg:w-1/6 ms-8 me-2 md:ms-8 md:me-2 flex items-center text-xs md:text-sm lg:text-base text-[#55B76E] gap-1 hover:underline cursor-pointer"><img src={eye} className="w-4 md:w-5" alt="" />Show Details</div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SelectTableComponent;