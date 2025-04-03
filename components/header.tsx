import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  
  // Determine title based on the current page
  const getTitle = () => {
    if (pathname?.includes('/dashboard/operations')) {
      return "Operations Dashboard";
    } else if (pathname?.includes('/dashboard/cfo')) {
      return "CFO Dashboard";
    } else {
      return null;
    }
  };

  const title = getTitle();

  return (
    <header className="w-full bg-gray-900 shadow-md z-50 relative">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Image
              src="/agnext-white-png.png"
              alt="Agnext Logo"
              width={160}
              height={36}
              className="h-10 w-auto"
              priority
            />
            {title && (
              <h1 className="text-white text-2xl font-semibold ml-6 pl-6 border-l border-gray-700">
                {title}
              </h1>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
