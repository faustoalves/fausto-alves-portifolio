import HeaderImageContainer from "../header/HeaderImageContainer";

const Header = () => {
  return (
    <section className="w-full aspect-square md:aspect-video lg:aspect-16/8 xl:aspect-16/7 mt-4 flex flex-col items-center justify-center relative top-line bottom-line pattern-bg p-2 ">
      <div className="w-full h-full flex flex-col items-center justify-center bg-purple-50 dark:bg-purple-900 rounded-lg border-line relative">
        <HeaderImageContainer />
      </div>
    </section>
  );
};

export default Header;
