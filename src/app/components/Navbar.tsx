import Link from "next/link" 


export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        {/* <MountainIcon className="h-6 w-6" /> */}
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          Discover
        </Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          Services
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:inline-flex"
          prefetch={false}
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          Sign Up
        </Link>
      </div>
    </header>
  )
} 

