type Props = {
  headerText: string;
  description?: string;
};
const Header = ({ headerText, description }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col md:w-7/12">
        <h1 className="text-[#282f30] text-2xl font-semibold mb-2 mt-5 md:mt-0">
          {headerText}
        </h1>
        <div className="mb-4 text-sm font-normal text-gray-500">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Header;
