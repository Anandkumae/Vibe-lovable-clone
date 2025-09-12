import { Button } from "@/components/ui/button"
import { UserControl } from "@/components/user-control"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"






export const Navbar = () => {

    return (
        <nav
            className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent "
        >
            <div>
                <Link href={"/"} className="flex items-center gap-2">
                    <Image src={"/logo.svg"} alt="vibe" />
                    <span className="font-semibold text-lg">Vibe</span>
                </Link>
                <SignedOut>
                    <SignUpButton>
                        <Button variant="outline" size="sm">
                            Sign up
                        </Button>
                    </SignUpButton>
                    <SignInButton>
                        <Button variant="outline" size="sm">
                            Sign in
                        </Button>
                    </SignInButton> 
                </SignedOut>
                <SignedIn>
                    <UserControl showName/>
                </SignedIn>

            </div> 
        </nav>
    )
}