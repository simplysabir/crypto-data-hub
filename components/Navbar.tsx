import Link from "next/link";
import { Button } from "@/components/ui/button"


const routes = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/",
        label: "Search",
    },
    {
        href: "/add",
        label: "Login",
    },
]
const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
    <div className="mx-auto w-full max-w-7xl">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
            <div className="flex items-center">
                <Link href={"/"} className="ml-4 lg:ml-0">
                     <h1 className="text-xl font-bold">
                        Crypto Stats
                     </h1>
                </Link>
            </div>

            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                {routes.map((route, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <Button asChild variant={"ghost"}>
                        <Link
                         key={i}
                         href={route.href}
                         className="text-sm font-medium transition-colors"
                        >
                            {route.label}
                        </Link>
                    </Button>
                ))}
            </nav>
            <div className="flex items-center"></div>
        </div>
    </div>
    </header>
  )
}

export default Header