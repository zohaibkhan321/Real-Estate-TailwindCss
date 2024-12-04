import React from "react";

import companyLogo1 from "../../assets/company-logos/logo-1.png"
import companyLogo2 from "../../assets/company-logos/logo-2.png"
import companyLogo3 from "../../assets/company-logos/logo-3.png"
import companyLogo4 from "../../assets/company-logos/logo-4.png"
import companyLogo5 from "../../assets/company-logos/logo-5.png"
import companyLogo6 from "../../assets/company-logos/logo-6.png"

const LogoList = () => {
    return (
        <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 my-10 p-5 ">
            <div className="">
                <img
                    src={companyLogo1}
                    alt="Logo 1"
                    className=""
                />
            </div>
            <div className="">
                <img
                    src={companyLogo2}
                    alt="Logo 2"
                    className=""
                />
            </div>
            <div className="">
                <img
                    src={companyLogo3}
                    alt="Logo 3"
                    className=""
                />
            </div>
            <div className="">
                <img
                    src={companyLogo4}
                    alt="Logo 4"
                    className=""
                />
            </div>
            <div className="">
                <img
                    src={companyLogo5}
                    alt="Logo 5"
                    className=""
                />
            </div>
            <div className="">
                <img
                    src={companyLogo6}
                    alt="Logo 6"
                    className=""
                />
            </div>
        </div>
    );
};

export default LogoList;
