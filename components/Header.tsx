import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          {/* <NavItems initialStocks={initialStocks} /> */}
        </nav>

        <UserDropdown user={user} initialStocks={[]} />
      </div>
    </header>
  );
};

export default Header;
