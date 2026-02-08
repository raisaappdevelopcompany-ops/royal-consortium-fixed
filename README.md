# RC AUTOCORE BD - E-Commerce Platform

A professional full-stack e-commerce website for motorcycle accessories in Bangladesh. Built with Next.js, React, TypeScript, and modern web technologies.

## Features

### Customer Features
- **Product Catalog**: Browse 500+ motorcycle accessories across 5 categories
- **Product Search & Filters**: Find products by category, brand, price, and compatibility
- **Product Details**: Detailed product information, specifications, and reviews
- **Shopping Cart**: Add items, update quantities, and manage your cart
- **Wishlist**: Save favorite products for later
- **Checkout System**: Multiple payment options (Cash on Delivery, bKash, Nagad)
- **Order Tracking**: Track your order status from confirmation to delivery
- **User Dashboard**: Manage profile, orders, addresses, and wishlist
- **Guest Checkout**: Order without creating an account
- **Mobile Responsive**: Optimized for mobile devices

### Business Features
- **Admin Dashboard**: Comprehensive admin panel for managing the store
- **Order Management**: View and manage all orders with status tracking
- **Product Management**: Add, edit, and manage products and categories
- **Inventory Management**: Track stock levels and low stock alerts
- **Customer Management**: View customer details and order history
- **Sales Reports**: Track revenue and sales performance
- **Courier Integration**: Manage deliveries with multiple courier services

### Payment Integration
- **bKash**: Bangladesh's most popular mobile banking
- **Nagad**: Government mobile banking service
- **Cash on Delivery**: Pay when you receive the product

### Delivery Partners
- Sundarban Courier
- Pathao Courier
- Redx
- SA Paribahan

## Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **State Management**: React Context API
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth (ready to integrate)
- **Deployment**: Vercel

## Project Structure

\`\`\`
/app
  /page.tsx                 # Homepage
  /cart                     # Shopping cart
  /checkout                 # Checkout page
  /product/[slug]           # Product details
  /account                  # User dashboard
  /wishlist                 # Wishlist page
  /admin                    # Admin dashboard
  /order-confirmation       # Order success page

/components
  /header.tsx               # Site header with navigation
  /footer.tsx               # Site footer
  /product-card.tsx         # Product display card
  /product-details.tsx      # Product details component

/lib
  /types.ts                 # TypeScript types
  /mock-data.ts             # Sample product data
  /cart-context.tsx         # Cart state management
  /wishlist-context.tsx     # Wishlist state management

/scripts
  /setup-database.sql       # Database schema
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (Supabase recommended)

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd rc-autocore-bd
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
Create a \`.env.local\` file in the root directory:
\`\`\`env
# Supabase (when ready to connect)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

4. Set up the database
Run the SQL script in \`/scripts/setup-database.sql\` in your PostgreSQL database

5. Run the development server
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

The database schema is located in \`/scripts/setup-database.sql\`. It includes:

- Users and authentication
- Product catalog with categories
- Shopping cart and wishlist
- Orders and order tracking
- Reviews and ratings
- Addresses and shipping information
- Courier management

## Configuration

### Payment Integration

To integrate payment gateways:

1. **bKash**: Sign up for bKash merchant account and get API credentials
2. **Nagad**: Register for Nagad merchant and obtain API keys
3. Add credentials to environment variables

### Email Notifications

Configure email service for:
- Order confirmations
- Shipping updates
- Password resets

## Features to Implement

### Backend API Routes
- [ ] User authentication (Supabase Auth)
- [ ] Product CRUD operations
- [ ] Order processing
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Image upload (Vercel Blob)

### Payment Gateway Integration
- [ ] bKash payment API
- [ ] Nagad payment API
- [ ] Payment verification

### Advanced Features
- [ ] Product reviews and ratings
- [ ] Advanced search with filters
- [ ] Related products recommendations
- [ ] Invoice generation
- [ ] SMS notifications
- [ ] Analytics and reporting

## Contact Information

**Company**: Raisa App Develop Company
**Email**: raisaappdevelopcompany@gmail.com
**Phone**: 01612-825273

## License

All rights reserved © 2024 RC AUTOCORE BD - Raisa App Develop Company

## Support

For support, email raisaappdevelopcompany@gmail.com or call 01612-825273
