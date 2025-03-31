import Head from 'next/head';
import { ArrowDownTrayIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Download() {
  return (
    <>
      <Head>
        <title>Download Tribes Wallet | Secure Messaging & Crypto Wallet</title>
        <meta name="description" content="Download Tribes Wallet for iOS, Android, Windows, macOS, or Linux. Start messaging securely and managing your crypto today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header />
        
        <main className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Download Tribes Wallet
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get started with Tribes Wallet on your preferred device. All platforms support end-to-end encryption and full wallet functionality.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mobile */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <DevicePhoneMobileIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-base font-semibold leading-7 text-gray-900">Mobile</h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Take Tribes Wallet with you on your iOS or Android device.
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.05 2.53C10.92 1.66 11.34 0.33 11.18 0C10.18 0.06 8.98 0.78 8.23 1.63C7.52 2.38 7.05 3.66 7.23 4C8.33 4.08 9.13 3.42 10.05 2.53ZM12.36 4.39C12.26 4.39 11.13 4.39 10.36 5.38C10.07 5.8 9.85 6.46 9.85 7.12C9.85 8.41 10.43 9.47 11.28 9.47C11.36 9.47 11.88 9.47 12.38 9.09C12.64 8.87 13.31 8.4 13.31 7.11C13.31 5.83 12.54 4.39 12.36 4.39ZM17.91 14.55C17.96 14.37 17.25 14.13 16.4 13.46C15.55 12.78 15.17 12.14 15 11.87C14.95 11.8 14.34 11.95 13.96 12.74C13.58 13.54 13.96 14.19 14.04 14.31C14.11 14.43 14.61 15.18 14.99 15.49C15.36 15.8 16.24 16.44 16.78 16.57C17.33 16.75 17.85 16.75 17.91 14.55Z" />
                    </svg>
                    Download for iOS
                  </a>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 3.5V16.5C3 17.327 3.673 18 4.5 18H15.5C16.327 18 17 17.327 17 16.5V3.5C17 2.673 16.327 2 15.5 2H4.5C3.673 2 3 2.673 3 3.5ZM10 15.5C9.172 15.5 8.5 14.828 8.5 14C8.5 13.172 9.172 12.5 10 12.5C10.828 12.5 11.5 13.172 11.5 14C11.5 14.828 10.828 15.5 10 15.5Z" />
                    </svg>
                    Download for Android
                  </a>
                </div>
              </div>

              {/* Desktop */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <ComputerDesktopIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-base font-semibold leading-7 text-gray-900">Desktop</h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Use Tribes Wallet on your computer for a full-featured experience.
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM7.41 13L6 11.59L8.59 9L6 6.41L7.41 5L11.41 9L7.41 13Z" />
                    </svg>
                    Download for macOS
                  </a>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 4H2C1.44772 4 1 4.44772 1 5V15C1 15.5523 1.44772 16 2 16H18C18.5523 16 19 15.5523 19 15V5C19 4.44772 18.5523 4 18 4ZM4 14V6H16V14H4Z" />
                    </svg>
                    Download for Windows
                  </a>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7.13516 10C7.13516 8.40301 8.40301 7.13516 10 7.13516C11.597 7.13516 12.8648 8.40301 12.8648 10C12.8648 11.597 11.597 12.8648 10 12.8648C8.40301 12.8648 7.13516 11.597 7.13516 10ZM2 10C2 6.41015 4.91015 3.5 8.5 3.5H11.5C15.0899 3.5 18 6.41015 18 10C18 13.5899 15.0899 16.5 11.5 16.5H8.5C4.91015 16.5 2 13.5899 2 10Z" />
                    </svg>
                    Download for Linux
                  </a>
                </div>
              </div>

              {/* Web Version */}
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <ArrowDownTrayIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-base font-semibold leading-7 text-gray-900">Web Version</h2>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Access Tribes Wallet directly from your browser with no installation required.
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-secondary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 4C10.5523 4 11 4.44772 11 5V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H11V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H9V5C9 4.44772 9.44772 4 10 4Z" />
                    </svg>
                    Launch Web App
                  </a>
                  <div className="pt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Note: Some features may be limited in the web version due to browser security constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Getting Started
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                After installation, follow these simple steps:
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl font-semibold text-primary-600">1</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Create Account</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Sign up with your phone number or email. Your account will be secured with end-to-end encryption.
                  </p>
                </div>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl font-semibold text-primary-600">2</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Create or Import Wallet</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Create a new wallet or import an existing one with your seed phrase. Your keys, your crypto.
                  </p>
                </div>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-xl font-semibold text-primary-600">3</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">Start Messaging & Transacting</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Invite friends, join tribes, send messages, and transact with crypto in one seamless experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
} 