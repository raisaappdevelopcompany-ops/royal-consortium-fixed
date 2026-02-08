'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products } from '@/lib/mock-data';
import { useLanguage } from '@/lib/language-context';
import { Search, ChevronRight } from 'lucide-react';

export default function ShopPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'সব পণ্য' },
    { id: 'helmets-safety-gear', name: t('category.helmets') },
    { id: 'parts-modifications', name: t('category.parts') },
    { id: 'accessories', name: t('category.accessories') },
    { id: 'maintenance-tools', name: t('category.maintenance') },
    { id: 'riding-gear', name: t('category.riding') },
  ];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'price-low':
        result.sort((a, b) => {
          const priceA = a.sale_price || a.price;
          const priceB = b.sale_price || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const priceA = a.sale_price || a.price;
          const priceB = b.sale_price || b.price;
          return priceB - priceA;
        });
        break;
      case 'popular':
        result.sort((a, b) => b.sales_count - a.sales_count);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container py-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-primary hover:underline">
            {t('nav.home')}
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-semibold">{t('nav.shop')}</span>
        </div>
      </div>

      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('nav.shop')}</h1>
          <p className="text-lg text-muted-foreground">
            বাংলাদেশের সেরা মোটরসাইকেল আনুষাঙ্গিক এবং যন্ত্রাংশের বিশাল সংগ্রহ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('header.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-4 text-lg">{t('header.categories')}</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={selectedCategory === cat.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-semibold mb-4 text-lg">সাজান</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">নতুন পণ্য</SelectItem>
                    <SelectItem value="price-low">দাম: কম থেকে বেশি</SelectItem>
                    <SelectItem value="price-high">দাম: বেশি থেকে কম</SelectItem>
                    <SelectItem value="popular">জনপ্রিয়</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  {filteredProducts.length} টি পণ্য পাওয়া গেছে
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                    >
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">
                  কোনো পণ্য পাওয়া যায়নি
                </p>
                <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                  সব পণ্য দেখুন
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
