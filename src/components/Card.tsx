import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background?: string;
  bgimage?: string;
};


const Card = ({ children, background = "bg-gray-100", bgimage = "" }: CardProps) => {
    return (
    <div className={`${background} ${bgimage} py-12 pl-6 rounded-lg shadow-md bg-no-repeat bg-right bg-center bg-contain pr-40 xs:pr-10`}>
        {children}
    </div>
  )
}

export default Card