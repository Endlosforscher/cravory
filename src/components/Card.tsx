import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background?: string;
};

const Card = ({ children, background = "bg-gray-100" }: CardProps) => {
    return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card