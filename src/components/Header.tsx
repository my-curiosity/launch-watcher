import Title from '@/components/Title';
import TechIcons from '@/components/TechIcons';

function Header() {
  return (
    <header className="relative z-10 ml-3 mb-2">
      <Title />
      <p className="mt-3 text-lg sm:text-xl md:text-2xl text-black dark:text-white">
        A simple webapp that displays rocket launch data, powered by
        <a
          className="ml-2 dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
          href="https://ll.thespacedevs.com"
        >
          Launch Library 2 public APIs
        </a>
      </p>
      <p className="text-lg flex flex-wrap items-center font-light text-gray-700 dark:text-gray-500">
        {`// built using`}
        <TechIcons />
        <span className="ml-1">
          {`//`}
          <a
            className="dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
            href="https://github.com/my-curiosity/launch-watcher"
          >
            {` source code `}
          </a>
        </span>
        <span className="ml-1">
          {`//`}
          <a
            className="dark:text-blue-400 dark:hover:text-green-400 text-blue-800 hover:text-green-800"
            href="https://github.com/my-curiosity/launch-watcher/blob/master/privacy-policy.md"
          >
            {` privacy policy `}
          </a>
        </span>
      </p>
    </header>
  );
}

export default Header;
