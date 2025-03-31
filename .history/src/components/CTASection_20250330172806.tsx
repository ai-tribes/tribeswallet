import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to experience the future of messaging and crypto?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Join thousands of users who are already enjoying the seamless integration of secure messaging and cryptocurrency management with Tribes Wallet.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/download"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download Now
              </Link>
              <Link href="#features" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <div className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">TW</span>
                    </div>
                    <span className="text-white font-semibold">Tribes Wallet</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary-200 mr-2"></div>
                      <span className="text-white text-xs">Web3 Friends</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-secondary-300 flex-shrink-0"></div>
                        <div className="bg-white/10 p-2 rounded-lg text-xs text-white">
                          Did everyone check out the new DeFi project?
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 pl-8">
                        <div className="w-6 h-6 rounded-full bg-primary-400 flex-shrink-0"></div>
                        <div className="bg-white/10 p-2 rounded-lg text-xs text-white">
                          I just added some liquidity! Let me send you the link.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="text-white text-xs font-medium mb-2">Wallet</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-xs">SOL</span>
                        <span className="text-white text-xs font-medium">12.45</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-xs">USDC</span>
                        <span className="text-white text-xs font-medium">243.50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white text-xs">TRIBE</span>
                        <span className="text-white text-xs font-medium">1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 