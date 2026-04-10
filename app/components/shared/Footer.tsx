'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const linkColumns = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Resources', 'Integrations'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Documentation', 'Security', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Accessibility'],
    },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      svg: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      svg: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      svg: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      label: 'LinkedIn',
      href: '#',
      svg: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
    {
      label: 'YouTube',
      href: '#',
      svg: (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      ),
    },
  ];

  return (
    <footer className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-8 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-1 text-2xl font-bold text-[#277079]">
              <span>FEU</span>
              <span className="text-[#FE5919]">X</span>
            </Link>
            <p className="max-w-[420px] text-sm leading-6 text-[#666666]">
              PrimeProp gives you a modern platform to discover, evaluate, and manage commercial real estate opportunities with confidence.
            </p>
            <div>
              <p className="mb-3 text-sm font-semibold text-[#111111]">Follow us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] text-[#111111] transition-colors hover:border-[#FF6500] hover:text-[#FF6500]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {item.svg}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-4">
            {linkColumns.map((column) => (
              <div key={column.title} className="min-w-0">
                <p className="mb-4 text-sm font-semibold text-[#111111]">{column.title}</p>
                <div className="space-y-3 text-sm text-[#666666]">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block transition-colors hover:text-[#FF6500]"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[#E8E8E8] pt-6 text-center text-sm text-[#666666]">
          Copyright © Nexora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
