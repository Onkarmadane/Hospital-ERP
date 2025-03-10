import React from 'react';
import Cards from '../Components/Cards';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineInventory } from 'react-icons/md';
import { IoTvSharp } from 'react-icons/io5';
import { RiFileUserLine, RiMedicineBottleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import BackButton from '../Components/BackButton';

const Setup = () => {
    return (
        <div>
            <div className="lg:ps-20">
                <BackButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto lg:ps-10 gap-6">
                <Link to="/doctor/settings/inventory" className="no-underline">
                    <Cards
                        title="Inventory"
                        description="Manage your Inventories"
                        Icon={MdOutlineInventory}
                    />
                </Link>

                <Link to="/*" className="no-underline">
                    <Cards
                        title="TV View Setup"
                        description="Configure fields and notices for TV display"
                        Icon={IoTvSharp}
                    />
                </Link>

                <Link to="/doctor/settings/consultation-setup" className="no-underline">
                    <Cards
                        title="Consultation Setup"
                        description="Establish and specify digital prescription fields"
                        Icon={RiFileUserLine}
                    />
                </Link>

                <Link to="/*" className="no-underline">
                    <Cards
                        title="Medicine Setup"
                        description="Manage and specify general settings."
                        Icon={RiMedicineBottleLine}
                    />
                </Link>

                <Link to="/*" className="no-underline">
                    <Cards
                        title="Need help in Claim?"
                        description="Go to this step-by-step guideline process on how to certify for your weekly benefits."
                        Icon={FaHandsHelping}
                    />
                </Link>

                <Link to="/*" className="no-underline">
                    <Cards
                        title="Need help in Claim?"
                        description="Go to this step-by-step guideline process on how to certify for your weekly benefits."
                        Icon={FaHandsHelping}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Setup;