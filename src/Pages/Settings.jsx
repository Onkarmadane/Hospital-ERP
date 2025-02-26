import React from 'react';
import Cards from '../Components/Cards';
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineInventory } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { RiFileUserLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Setup = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6">
                <Link to="/doctor/settings/inventory" className="no-underline">
                    <Cards
                        title="Inventory"
                        description="Manage your Inventories"
                        Icon={MdOutlineInventory}
                    />
                </Link>
                
                <Link to="/doctor/settings/tv-view-setup" className="no-underline">
                    <Cards
                        title="TV View Setup"
                        description="Configure fields and notices for TV display"
                        Icon={IoTvSharp}
                    />
                </Link>
                
                <Link to="/consultation-setup" className="no-underline">
                    <Cards
                        title="Consulation Setup"
                        description="Establish and specify digital prescription fields"
                        Icon={RiFileUserLine}
                    />
                </Link>
                
                <Link to="/general-settings" className="no-underline">
                    <Cards
                        title="General Settings"
                        description="Manage and specify general settings."
                        Icon={VscSettings}
                    />
                </Link>
                
                <Link to="/claim-help" className="no-underline">
                    <Cards
                        title="Need help in Claim?"
                        description="Go to this step-by-step guideline process on how to certify for your weekly benefits."
                        Icon={FaHandsHelping}
                    />
                </Link>
                
                <Link to="/claim-help" className="no-underline">
                    <Cards
                        title="Need help in Claim?"
                        description="Go to this step-by-step guideline process on how to certify for your weekly benefits."
                        Icon={FaHandsHelping}
                    />
                </Link>
            </div>
        </>
    );
};

export default Setup;