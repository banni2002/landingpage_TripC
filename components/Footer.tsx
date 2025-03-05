"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-20">
                <Image src="/images/Logo-tripc.png" alt="Logo TripC" width={250} height={101}/>
            </div>
            
            <h2 className="mb-6 h2-footer">Liên Hệ Chúng Tôi Ngay</h2>
            
            <p className="mb-6">support@tripc.com</p>
            
            <div className="flex gap-4 mb-20">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}