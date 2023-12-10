import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from 'react-icons/tb';

function TechIcons() {
  return (
    <>
      <a
        className="ml-2 dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
        href="https://react.dev/"
      >
        <TbBrandReact />
      </a>
      <a
        className="ml-2 dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
        href="https://nextjs.org/"
      >
        <TbBrandNextjs />
      </a>
      <a
        className="ml-2 dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
        href="https://www.typescriptlang.org/"
      >
        <TbBrandTypescript />
      </a>
      <a
        className="ml-2 dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
        href="https://tailwindcss.com/"
      >
        <TbBrandTailwind />
      </a>
    </>
  );
}

export default TechIcons;
