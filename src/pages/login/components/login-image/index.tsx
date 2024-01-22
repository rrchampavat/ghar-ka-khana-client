import useDarkMode from "use-dark-mode";

const LoginImage = () => {
  const { value: isDarkMode } = useDarkMode(false);

  const imageSrc = isDarkMode
    ? "/svgs/logo-white-transparent.svg"
    : "/svgs/logo-black-transparent.svg";

  return (
    <img
      src={imageSrc}
      className="hidden h-60 w-28 border-r-1 bg-background md:block md:basis-7/12 lg:h-72 xl:basis-8/12"
      alt="Logo"
    />
  );
};

export default LoginImage;
