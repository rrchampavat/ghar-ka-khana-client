import useDarkMode from "use-dark-mode";

const LoginImage = () => {
  const { value: isDarkMode } = useDarkMode(false);

  const imageSrc = isDarkMode
    ? "/svgs/logo-white-transparent.svg"
    : "/svgs/logo-black-transparent.svg";

  return (
    <img
      src={imageSrc}
      className="mx-auto hidden h-60 w-28 bg-background md:col-span-2 md:block lg:col-span-3"
      alt="Logo"
    />
  );
};

export default LoginImage;
