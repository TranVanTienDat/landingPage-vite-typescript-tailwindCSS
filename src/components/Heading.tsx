import { HeadingProps } from "../interface";

export const Heading = ({ title, text }: HeadingProps) => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-textColor">{title}</h3>
      <p className="text-lg text-textColor2  mt-2.5">{text}</p>
    </div>
  );
};
