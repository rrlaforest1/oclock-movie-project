import "./Layout.scss";

interface LayoutListProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  element?: React.ReactNode;
}
const LayoutList = ({
  children,
  title,
  description,
  element,
}: LayoutListProps) => {
  return (
    <>
      <div className="bg-primary-100 pt-8 pb-16 relative z-[1]">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-10">
          <div className="flex-col flex lg:flex-row items-start lg:items-center">
            <div className="ml-0 my-6 lg:my-0">
              <h1 className="text-2xl font-bold  text-white ">{title}</h1>
              {description && (
                <p className="text-1xl text-white mt-2">{description}</p>
              )}
            </div>
          </div>
          {element && <div>{element}</div>}
        </div>
      </div>
      <div className="cards container">{children}</div>
    </>
  );
};

export default LayoutList;
