import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Skill = ({ children }: Props) => {
  return (
    <li className="bg-blue rounded-lg py-2 text-white text-center transition-all w-80 hover:-translate-y-2 select-none">
      {children}
    </li>
  );
};

export default Skill;
