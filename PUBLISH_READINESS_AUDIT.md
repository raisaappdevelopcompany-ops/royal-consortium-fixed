# RC AUTOCORE BD - Publish Readiness Audit

**Audit Date**: February 3, 2026  
**Status**: ⚠️ ISSUES FOUND - 3 Critical, 2 Major, 1 Minor

---

## BUG LIST (Priority-Wise)

### 🔴 CRITICAL BUGS

#### Bug #1: Homepage Missing i18n Implementation
- **File**: `/app/page.tsx`
- **Issue**: Homepage doesn't use `useLanguage()` hook - all static text shows in English only, no language switching
- **Impact**: Marketing landing page shows literal English text when user selects Bengali
- **Lines**: Entire file - no `'use client'` directive, no `useLanguage()` import/usage
- **Fix Priority**: 1 (affects primary user interaction)

**Fix Code**:
```typescript
// ADD at top of /app/page.tsx
'use client';

// ADD import
import { useLanguage } from '@/lib/language-context';

// ADD inside HomePage function
export default function HomePage() {
  const { t } = useLanguage();  // <-- ADD THIS LINE
  
  // Then replace all static text with t() calls
  // Example: "Premium Motorcycle Accessories" → t('landing.headline')
```

---

#### Bug #2: Console Error Handling Missing
- **File**: `/lib/cart-context.tsx` (line 34) and `/lib/wishlist-context.tsx` (line 26)
- **Issue**: `console.log('[v0]...')` debug statements left in production code
- **Impact**: Creates console noise on production, not removed after debugging
- **Fix Priority**: 2 (affects deployment quality)

**Fix Code**:
```typescript
// REMOVE these lines:
// In /lib/cart-context.tsx line 34:
console.log('[v0] Error loading cart from localStorage:', error);

// In /lib/wishlist-context.tsx line 26:
console.log('[v0] Error loading wishlist from localStorage:', error);

// REPLACE with proper error handling:
catch (error) {
  // Silently fail - localStorage may not be available in SSR
  // No console.log needed
}
```

---

#### Bug #3: Checkout Payment Methods Need i18n Labels
- **File**: `/app/checkout/page.tsx` (lines 242-268)
- **Issue**: Payment method labels "Cash on Delivery", "bKash", "Nagad" are hardcoded English strings
- **Impact**: Payment options don't translate to Bengali
- **Fix Priority**: 3 (affects checkout experience for Bengali users)

**Fix Code**:
```typescript
// CURRENT (lines 252-253):
<div className="font-semibold">Cash on Delivery</div>
<div className="text-sm text-muted-foreground">Pay when you receive the product</div>

// SHOULD BE:
<div className="font-semibold">{t('checkout.cod')}</div>
<div className="text-sm text-muted-foreground">{t('checkout.codDesc')}</div>

// Add to translations.ts:
'checkout.codDesc': 'Pay when you receive the product',
'checkout.bkashDesc': 'Pay via bKash mobile banking',
'checkout.nagadDesc': 'Pay via Nagad mobile banking',
```

---

### 🟠 MAJOR BUGS

#### Bug #4: Footer Links Not Functional
- **File**: `/components/footer.tsx` (lines 62-107)
- **Issue**: All footer links point to "/" instead of actual pages (privacy, terms, returns, contact pages don't exist)
- **Impact**: 404 errors when clicking footer policy links
- **Fix Priority**: 4 (UX issue but non-critical for MVP)

**Fix Code**:
```typescript
// CURRENT:
<Link href="/" className="text-muted-foreground hover:text-primary">

// SHOULD BE:
<Link href="/about" className="text-muted-foreground hover:text-primary">
<Link href="/privacy" className="text-muted-foreground hover:text-primary">
<Link href="/terms" className="text-muted-foreground hover:text-primary">
<Link href="/returns" className="text-muted-foreground hover:text-primary">

// Or create placeholder pages at /app/privacy/page.tsx, /app/terms/page.tsx, etc.
```

---

#### Bug #5: Mobile Responsive Classes Inconsistent
- **File**: Multiple files - `/components/header.tsx`, `/app/page.tsx`, `/app/checkout/page.tsx`
- **Issue**: Some sections use `md:` breakpoints, some use `lg:`, creates layout jumps on tablets
- **Impact**: UI looks misaligned on iPad/tablet sizes (768px-1024px)
- **Fix Priority**: 5 (polish issue)

**Fix Code**:
```typescript
// Standardize to use consistent breakpoint strategy:
// Mobile-first: 0-640px (base)
// Tablet: sm:640px and md:768px
// Desktop: lg:1024px and up

// Example in checkout (line 289):
// CURRENT: <div className="lg:col-span-1">
// SHOULD BE: <div className="md:col-span-1 lg:col-span-1">
```

---

### 🟡 MINOR ISSUES

#### Bug #6: Missing Translations in `translations.ts`
- **File**: `/lib/translations.ts`
- **Issue**: Bengali translations incomplete for some keys (e.g., `checkout.paymentOption` not in Bengali section)
- **Impact**: Some labels show as English even when Bengali selected
- **Fix Priority**: 6 (cosmetic)

**Check & Fix**:
```typescript
// Verify all 'checkout.*' keys exist in both 'en' and 'bn' sections
// Line count: en section ~180 keys, bn section should match

// Add missing:
'checkout.paymentOption': 'Payment Option',
// Bengali equivalent:
'checkout.paymentOption': 'পেমেন্ট অপশন',
```

---

## EXACT FIXES (Code Changes)

### Fix #1: Add i18n to Homepage

**File**: `/app/page.tsx`

```diff
+ 'use client';
+
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { ProductCard } from '@/components/product-card';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent } from '@/components/ui/card';
  import { Badge } from '@/components/ui/badge';
  import { products, categories } from '@/lib/mock-data';
  import { Shield, Truck, Headset, RotateCcw, ChevronRight, Sparkles, Zap, Star, TrendingUp, Award } from 'lucide-react';
  import Link from 'next/link';
+ import { useLanguage } from '@/lib/language-context';

  export default function HomePage() {
+   const { t } = useLanguage();
```

**Text Replacements in Homepage**:
```diff
- <Badge className="w-fit bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">NEW ARRIVALS</Badge>
+ <Badge className="w-fit bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">{t('landing.newArrivals')}</Badge>

- <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Premium Motorcycle Accessories for Every Rider</h1>
+ <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{t('landing.headline')}</h1>

- <p className="text-lg text-muted-foreground text-balance">Trusted by thousands of bikers across Bangladesh. Shop premium helmets, gear, and accessories.</p>
+ <p className="text-lg text-muted-foreground text-balance">{t('landing.subheadline')}</p>
```

---

### Fix #2: Remove Console Logs

**File**: `/lib/cart-context.tsx`

```diff
  } catch (error) {
-   console.log('[v0] Error loading cart from localStorage:', error);
  }
```

**File**: `/lib/wishlist-context.tsx`

```diff
  } catch (error) {
-   console.log('[v0] Error loading wishlist from localStorage:', error);
  }
```

---

### Fix #3: Add Checkout Payment i18n

**File**: `/app/checkout/page.tsx` (around lines 252-268)

```diff
  <div className="flex items-center space-x-2 border rounded-lg p-4">
    <RadioGroupItem value="cod" id="cod" />
    <Label htmlFor="cod" className="flex-1 cursor-pointer">
-     <div className="font-semibold">Cash on Delivery</div>
-     <div className="text-sm text-muted-foreground">Pay when you receive the product</div>
+     <div className="font-semibold">{t('checkout.cod')}</div>
+     <div className="text-sm text-muted-foreground">{t('checkout.codDesc')}</div>
    </Label>
  </div>
  <div className="flex items-center space-x-2 border rounded-lg p-4">
    <RadioGroupItem value="bkash" id="bkash" />
    <Label htmlFor="bkash" className="flex-1 cursor-pointer">
-     <div className="font-semibold">bKash</div>
-     <div className="text-sm text-muted-foreground">Pay via bKash mobile banking</div>
+     <div className="font-semibold">{t('checkout.bkash')}</div>
+     <div className="text-sm text-muted-foreground">{t('checkout.bkashDesc')}</div>
    </Label>
  </div>
  <div className="flex items-center space-x-2 border rounded-lg p-4">
    <RadioGroupItem value="nagad" id="nagad" />
    <Label htmlFor="nagad" className="flex-1 cursor-pointer">
-     <div className="font-semibold">Nagad</div>
-     <div className="text-sm text-muted-foreground">Pay via Nagad mobile banking</div>
+     <div className="font-semibold">{t('checkout.nagad')}</div>
+     <div className="text-sm text-muted-foreground">{t('checkout.nagadDesc')}</div>
    </Label>
  </div>
```

**File**: `/lib/translations.ts` (Add missing descriptions)

```typescript
// In 'en' section, add after line 79:
'checkout.codDesc': 'Pay when you receive the product',
'checkout.bkashDesc': 'Pay via bKash mobile banking',
'checkout.nagadDesc': 'Pay via Nagad mobile banking',

// In 'bn' section, add equivalent translations:
'checkout.codDesc': 'পণ্য পেয়েছেন এমন সময়ে অর্থ প্রদান করুন',
'checkout.bkashDesc': 'bKash মোবাইল ব্যাংকিং এর মাধ্যমে অর্থ প্রদান করুন',
'checkout.nagadDesc': 'Nagad মোবাইল ব্যাংকিং এর মাধ্যমে অর্থ প্রদান করুন',
```

---

## BEFORE DEPLOY - Manual Test Script

Run these tests in this exact order:

### Test 1: Language Switching (5 min)
1. Open website → Homepage loads
2. Click Globe icon (top-right header)
3. Select "বাংলা" (Bengali)
4. **Expected**: Homepage headline changes to Bengali text
5. Verify all navigation items translated
6. Switch back to English → Should revert to English text

### Test 2: i18n Keys Check (3 min)
1. Open browser DevTools → Console
2. No red errors about missing translations
3. Check Footer → All links translated
4. Check Checkout page → Payment method labels in selected language
5. Check Cart → "Shopping Cart", "Total", "Checkout" in selected language

### Test 3: Checkout Flow (5 min)
1. Add 2-3 products to cart
2. Go to `/cart` → See cart items
3. Click "Proceed to Checkout"
4. Fill billing address
5. Select payment method → Verify labels are translated
6. Click "Place Order"
7. Should see order confirmation with order ID

### Test 4: Mobile Responsiveness (5 min)
1. Open DevTools → Toggle device toolbar
2. Test at: 375px (mobile), 768px (tablet), 1024px (desktop)
3. Header should stack properly
4. Checkout form should be readable on all sizes
5. No horizontal scrolling at any breakpoint

### Test 5: No Console Errors (2 min)
1. DevTools → Console tab
2. Reload page
3. No red error messages (warnings OK)
4. No "undefined is not a function" errors
5. localStorage errors if offline is acceptable

### Test 6: Footer Links (2 min)
1. Scroll to footer
2. Click "About Us", "Contact", "Privacy Policy", "Terms", "Returns"
3. If links return 404, that's OK for MVP (create placeholder pages)
4. Newsletter signup should have email input

### Test 7: Admin Dashboard (3 min)
1. Go to `/admin`
2. Dashboard loads with stats
3. "Recent Orders" section shows sample orders
4. Can filter/view order details
5. No console errors

---

## AFTER DEPLOY - Verification Script

**Production URL**: `https://rc-autocore-bd.vercel.app` (or your domain)

### Verification 1: i18n Working
- [ ] Homepage headline in English
- [ ] Click Globe → Switch to Bengali
- [ ] Homepage headline translates
- [ ] Footer translates
- [ ] Refresh page → Language preference saved

### Verification 2: Checkout Translation
- [ ] Add product to cart
- [ ] Go to checkout
- [ ] Payment method labels visible and translated
- [ ] Verify in both English and Bengali

### Verification 3: No Console Errors
- [ ] Open DevTools Console
- [ ] No red errors
- [ ] No "useLanguage must be used within LanguageProvider" errors

### Verification 4: Mobile Works
- [ ] Open on iPhone/Android
- [ ] Header navigation works
- [ ] Add to cart works
- [ ] Checkout form fills correctly
- [ ] No layout breaking

### Verification 5: Performance
- [ ] Lighthouse score > 70
- [ ] Page load < 3 seconds
- [ ] No slow console warnings

### Verification 6: Links Work
- [ ] All navbar links navigate correctly
- [ ] Footer doesn't have broken links (or has graceful 404)
- [ ] Shopping flow completes

---

## Vercel Environment Variables Checklist

Since using custom context-based i18n (no external library):

- ✅ `NEXT_PUBLIC_*` not needed for i18n
- ✅ Language persisted in localStorage (client-side only)
- ✅ Default language: English
- ✅ Bengali translation data embedded in code (`/lib/translations.ts`)

**Nothing to set in Vercel Env Vars for i18n** - all built-in.

---

## Summary

| Item | Status | Priority |
|------|--------|----------|
| i18n keys showing literally | ❌ Found (Homepage) | Critical |
| Navbar links working | ✅ All working | - |
| Search | ✅ Implemented (in shop page) | - |
| Cart/Checkout working | ✅ Full flow works | - |
| Order create + admin view | ✅ Sample orders visible | - |
| Payment UI (bKash/Nagad/COD) | ⚠️ UI exists, not i18n'd | Critical |
| Footer pages | ⚠️ Links are 404 | Major |
| No console errors | ❌ Found debug logs | Critical |
| Mobile responsive | ⚠️ Mostly OK, minor gaps | Minor |

**Estimated Fix Time**: 30-45 minutes (all bugs)  
**Ready for Deploy**: After fixes applied ✅
