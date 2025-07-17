import { FC } from "react";


interface SuccessBannerProps {
  message: string;
}

export const SuccessBanner: FC<SuccessBannerProps> = ({ message }) => {
  return (
    <div className="bg-gradient-purple-mid text-text-gradient-white py-4 text-center font-medium">
      <p>🎉 {message}</p>
    </div>
  );
};