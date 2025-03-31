import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tribes', href: '/tribes' },
  { name: 'Features', href: '/#features' },
  { name: 'Download', href: '/download' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tribes Wallet - AITRIBES.com</span>
            <div className="flex items-center">
              <Image src="/ai-tribes_logo_1.png" alt="Tribes Wallet Logo" width={50} height={50} priority className="mr-3" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-400"></span>
                <span className="text-xl font-bold text-white">Tribes Wallet</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/download" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200">
            Download App
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu, show/hide based on menu open state */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tribes Wallet - AITRIBES.com</span>
              <div className="flex items-center">
                <Image src="/ai-tribes_logo_1.png" alt="Tribes Wallet Logo" width={50} height={50} priority className="mr-3" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400"></span>
                  <span className="text-xl font-bold text-white">Tribes Wallet</span>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/download"
                  className="-mx-3 block rounded-lg bg-white px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 