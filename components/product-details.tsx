'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
  Share2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  
  const inWishlist = isInWishlist(product.id);
  const hasDiscount = product.sale_price && product.sale_price < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.sale_price) / product.price) * 100)
    : 0;
  const currentPrice = product.sale_price || product.price;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: 'Removed from wishlist',
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: 'Added to wishlist',
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted border">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
              <div className="text-9xl font-bold text-muted-foreground/20">
                {product.name.charAt(0)}
              </div>
            </div>
            {hasDiscount && (
              <Badge variant="destructive" className="absolute top-4 left-4 text-lg px-3 py-1">
                -{discountPercent}% OFF
              </Badge>
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg bg-muted border cursor-pointer hover:border-primary"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand & Stock Status */}
          <div className="flex items-center justify-between">
            {product.brand && (
              <Badge variant="outline" className="text-sm">
                {product.brand}
              </Badge>
            )}
            <div className="flex items-center gap-2">
              {product.stock_quantity > 0 ? (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Check className="h-3 w-3 mr-1" />
                  In Stock ({product.stock_quantity} available)
                </Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            {product.name_bn && (
              <p className="text-lg text-muted-foreground">{product.name_bn}</p>
            )}
          </div>

          {/* Rating & Reviews */}
          {product.rating && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.review_count} reviews)
              </span>
              <span className="text-sm text-muted-foreground">
                | {product.sales_count} sold
              </span>
            </div>
          )}

          {/* Price */}
          <div className="border-y py-4">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                ৳{currentPrice.toLocaleString()}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-2xl text-muted-foreground line-through">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <Badge variant="destructive" className="text-sm">
                    Save ৳{(product.price - currentPrice).toLocaleString()}
                  </Badge>
                </>
              )}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                  disabled={quantity >= product.stock_quantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock_quantity === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" onClick={toggleWishlist}>
                <Heart className={`h-5 w-5 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">On orders over ৳2000</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">100% Genuine</div>
                  <div className="text-xs text-muted-foreground">Authentic product</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">7 days policy</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.review_count || 0})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || 'No description available for this product.'}
                </p>
                {product.description_bn && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-semibold mb-2">বিবরণ (বাংলা)</h4>
                    <p className="text-muted-foreground leading-relaxed">{product.description_bn}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                {product.specifications && Object.keys(product.specifications).length > 0 ? (
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex border-b pb-3 last:border-b-0">
                        <div className="w-1/3 font-medium text-muted-foreground">{key}</div>
                        <div className="w-2/3">{value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No specifications available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                <p className="text-muted-foreground">
                  No reviews yet. Be the first to review this product!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
