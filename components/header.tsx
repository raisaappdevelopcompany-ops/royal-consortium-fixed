'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu, Heart, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { useLanguage } from '@/lib/language-context';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getItemCount } = useCart();
  const { getItemCount: getWishlistCount } = useWishlist();
  const { language, setLanguage, t } = useLanguage();
  
  const cartCount = getItemCount();
  const wishlistCount = getWishlistCount();

  const categories = [
    { name: t('category.helmets'), slug: 'helmets-safety-gear' },
    { name: t('category.parts'), slug: 'parts-modifications' },
    { name: t('category.accessories'), slug: 'accessories' },
    { name: t('category.maintenance'), slug: 'maintenance-tools' },
    { name: t('category.riding'), slug: 'riding-gear' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:01612825273" className="flex items-center gap-1 hover:underline">
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">01612-825273</span>
              </a>
              <a href="mailto:raisaappdevelopcompany@gmail.com" className="hidden md:flex items-center gap-1 hover:underline">
                <Mail className="h-3 w-3" />
                <span>raisaappdevelopcompany@gmail.com</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              Free Delivery on Orders Over ৳2000
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl min-w-fit">
            <Image 
              src="/rc-autocore-logo.jpg" 
              alt="RC AUTOCORE BD" 
              width={40} 
              height={40} 
              className="rounded-lg"
            />
            <span className="hidden sm:inline">RC AUTOCORE BD</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for helmets, parts, accessories..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Icon - Mobile */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-primary/10' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('bn')} className={language === 'bn' ? 'bg-primary/10' : ''}>
                  বাংলা
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <Link href="/account" className="hidden sm:block">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <Link
                    href="/account"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    My Account
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </Link>
                  <div className="border-t pt-4 mt-2">
                    <div className="text-sm font-semibold mb-3 text-muted-foreground">Categories</div>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="block py-2 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Categories Bar - Desktop */}
      <div className="hidden lg:block border-t">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-6 py-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/deals"
              className="text-sm font-medium text-destructive hover:underline"
            >
              Hot Deals 🔥
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
