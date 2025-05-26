import { FC } from "react";


interface SuccessBannerProps {
  message: string;
}

export const SuccessBanner: FC<SuccessBannerProps> = ({ message }) => {
  return (
    <div className="bg-teal-balance text-white py-4 text-center font-medium">
      <p>🎉 {message}</p>
    </div>
  );
};