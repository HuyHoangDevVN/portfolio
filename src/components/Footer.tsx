interface FooterProps {
  profileName: string;
  tagline: string;
  copyright: string;
}

export default function Footer({
  profileName,
  tagline,
  copyright,
}: FooterProps) {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold font-mono mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {profileName}
          </span>
        </div>
        <p className="mb-6 text-gray-500 dark:text-gray-400">{tagline}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{copyright}</p>
      </div>
    </footer>
  );
}
