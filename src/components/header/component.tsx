import "./style.css";
import MoreVerticalIcon from "@/assets/icons/more-vertical.svg?react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg?react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header = ({ title, showBackButton = false }: HeaderProps) => {
  return (
    <header className="page-header">
      <div className="page-header-title-wrapper">
        {showBackButton && <ArrowLeftIcon />}
        <h1>{title}</h1>
      </div>
      <MoreVerticalIcon />
    </header>
  );
};
