'use client';

import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import navigation from "@/lib/content/navigation.json";

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1416616696072114328&permissions=8&scope=bot%20applications.commands";

export function Header() {
  const { headerLinks } = navigation;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <p className="text-xl font-bold font-headline">Synapse</p>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ADD TO DISCORD */}
        <div className="hidden md:block">
          <Button asChild className="group breathing-button">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Discord
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>

              <div className="grid gap-4 py-6">

                {/* MOBILE LOGO */}
                <div className="flex items-center gap-3 mb-4">
                  <Logo />
                  <p className="text-xl font-bold font-headline">Synapse</p>
                </div>

                {/* MOBILE NAV */}
                <nav className="grid gap-4">
                  {headerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* MOBILE ADD TO DISCORD */}
                <Button asChild className="breathing-button mt-4 w-full">
                  <a
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Discord
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ADD TO DISCORD */}
        <div className="hidden md:block">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group breathing-button">
              Add to Discord
              <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>

              <div className="grid gap-4 py-6">
                <div className="flex items-center gap-3 mb-4">
                  <Logo />
                  <p className="text-xl font-bold font-headline">Synapse</p>
                </div>

                <nav className="grid gap-4">
                  {headerLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* MOBILE ADD TO DISCORD */}
                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="breathing-button mt-4 w-full">
                    Add to Discord <ArrowRight className="ml-1" />
                  </Button>
                </a>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
