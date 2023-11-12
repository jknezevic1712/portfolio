const ParagraphClassTypes = {
  DEFAULT: 'max-w-sm py-2 2xl:text-lg',
  CONTENT:
    'py-2 text-center text-base leading-8 text-gray-800 dark:text-gray-300 md:text-left md:text-lg 3xl:text-xl',
  LARGE:
    'mx-auto max-w-lg py-5 text-base leading-8 text-gray-800 dark:text-gray-300 md:text-lg 2xl:text-xl',
  CARD: 'max-w-sm py-2 2xl:text-lg',
  LABEL: 'py-1 text-gray-800',
};

export default function Paragraph({ children, type = 'DEFAULT' }) {
  return <p className={ParagraphClassTypes[type]}>{children}</p>;
}
