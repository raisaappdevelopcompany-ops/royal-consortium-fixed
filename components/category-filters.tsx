'use client';

import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Headset as Helmet, Settings, Package, Wrench, Shirt, Cpu, Cog } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'helmets-safety-gear',
    name: 'হেলমেট ও সুরক্ষা',
    icon: Helmet,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'parts-modifications',
    name: 'যন্ত্রাংশ ও সংশোধন',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'accessories',
    name: 'আনুষাঙ্গিক',
    icon: Package,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'maintenance-tools',
    name: 'রক্ষণাবেক্ষণ ও সরঞ্জাম',
    icon: Wrench,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'riding-gear',
    name: 'রাইডিং গিয়ার',
    icon: Shirt,
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 'electronics',
    name: 'ইলেকট্রনিক্স',
    icon: Cpu,
    color: 'from-indigo-500 to-blue-500',
  },
];

export function CategoryFilters() {
  const { t } = useLanguage();

  return (
    <div className="py-12 border-t border-border">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {t('home.categories')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/shop?category=${category.id}`}>
                <div className="group relative h-32 rounded-xl overflow-hidden cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-all duration-300`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="relative h-full flex flex-col items-center justify-center gap-3">
                    <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm font-semibold text-white text-center px-2 line-clamp-2">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
