export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  role: 'customer' | 'admin' | 'seller';
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  district: string;
  postal_code?: string;
  is_default: boolean;
}

export interface Category {
  id: string;
  name: string;
  name_bn?: string;
  slug: string;
  description?: string;
  image_url?: string;
  parent_id?: string;
  display_order: number;
  is_active: boolean;
}

export interface Product {
  id: string;
  name: string;
  name_bn?: string;
  slug: string;
  description?: string;
  description_bn?: string;
  category_id: string;
  brand?: string;
  price: number;
  sale_price?: number;
  stock_quantity: number;
  sku?: string;
  images: string[];
  specifications?: Record<string, string>;
  is_featured: boolean;
  is_active: boolean;
  views_count: number;
  sales_count: number;
  rating?: number;
  review_count?: number;
  category?: Category;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_name: string;
  variant_value: string;
  price_adjustment: number;
  stock_quantity: number;
  sku?: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  user_name?: string;
  rating: number;
  comment?: string;
  images?: string[];
  is_verified_purchase: boolean;
  is_approved: boolean;
  created_at: string;
}

export interface CartItem {
  id: string;
  cart_id: string;
  product_id: string;
  variant_id?: string;
  quantity: number;
  price: number;
  product?: Product;
  variant?: ProductVariant;
}

export interface Cart {
  id: string;
  user_id?: string;
  session_id?: string;
  items: CartItem[];
  subtotal: number;
  total: number;
}

export interface Order {
  id: string;
  order_number: string;
  user_id?: string;
  guest_email?: string;
  guest_phone?: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: string;
  payment_transaction_id?: string;
  subtotal: number;
  shipping_cost: number;
  discount_amount: number;
  total_amount: number;
  shipping_address: Address;
  billing_address?: Address;
  notes?: string;
  courier_name?: string;
  tracking_number?: string;
  items?: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id?: string;
  product_name: string;
  product_image?: string;
  variant_info?: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Courier {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  tracking_url?: string;
  is_active: boolean;
}

export interface OrderStatusHistory {
  id: string;
  order_id: string;
  status: string;
  comment?: string;
  created_at: string;
}
