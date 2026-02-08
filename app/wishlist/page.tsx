'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { useWishlist } from '@/lib/wishlist-context';
import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="h-32 w-32 mx-auto rounded-full bg-muted flex items-center justify-center">
              <Heart className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
            <p className="text-muted-foreground">Save items you love for later</p>
            <Button size="lg" asChild className="mt-4">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground mt-1">{items.length} items saved</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
