'use client';

import Image from "next/image";

export default function ClientSection() {
  return (
    <div className="py-16 bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw] border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Trusted By Leading Companies</h2>
        <div className="w-full overflow-hidden">
          <div className="flex justify-center items-center gap-12 py-12 relative h-96 max-w-7xl mx-auto">
            <Image
              src="/client.png"
              alt="Client Companies"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
