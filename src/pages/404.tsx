import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#FF6B00] to-[#FF00A8]">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for does not exist or has been moved to another URL.
          </p>
          <Link href="/" className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors">
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 