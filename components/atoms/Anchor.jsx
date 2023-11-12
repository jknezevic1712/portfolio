const LinkClassTypes = {
  DEFAULT: '',
  CV: 'ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white lg:hover:bg-gradient-to-r lg:hover:from-cyan-600 lg:hover:to-teal-600 lg:hover:transition-all 3xl:text-lg',
  PROJECT:
    'rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text px-4 py-2 pb-2 pt-8 text-lg font-medium text-transparent lg:hover:opacity-75 lg:hover:transition-all 2xl:text-2xl',
};

export default function Anchor({ children, href, type = 'DEFAULT' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${LinkClassTypes[type]}`}
    >
      <span>{children}</span>
    </a>
  );
}
