# Paddle Payment Integration Setup Guide

## Overview
OrbitEdge uses Paddle for secure payment processing. This guide will help you set up Paddle for your demo.

## Step 1: Get Paddle Credentials

1. Go to **[Paddle Sandbox](https://sandbox-vendors.paddle.com/)**
2. Log in with your account
3. Navigate to **Developer Tools → Authentication**
4. You'll need these credentials:
   - **Vendor ID** - Your unique vendor identifier
   - **Client-side Token** - For Paddle.js (public, client-side)
   - **API Key** - For server-side operations (keep secret)
   - **Webhook Secret** - For verifying webhook signatures

## Step 2: Create Products in Paddle

1. Go to **Catalog → Products** in Paddle Dashboard
2. Create 3 subscription products:

### Product 1: Starter Plan
- Name: `Starter Plan`
- Price: `$49/month`
- Description: `Perfect for small satellite operators`
- Billing: `Monthly subscription`

### Product 2: Professional Plan
- Name: `Professional Plan`
- Price: `$149/month`
- Description: `For growing satellite fleets`
- Billing: `Monthly subscription`

### Product 3: Enterprise Plan
- Name: `Enterprise Plan`
- Price: `$499/month`
- Description: `For large-scale operations`
- Billing: `Monthly subscription`

3. After creating each product, copy its **Price ID** (looks like `pri_xxxxx`)

## Step 3: Configure Environment Variables

Create or update `.env.local` file in your project root:

```env
# Paddle Sandbox Credentials
NEXT_PUBLIC_PADDLE_VENDOR_ID=your_vendor_id_here
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_client_side_token_here
PADDLE_API_KEY=your_api_key_here
PADDLE_WEBHOOK_SECRET=your_webhook_secret_here

# Product Price IDs (from Step 2)
NEXT_PUBLIC_PADDLE_STARTER_PRICE_ID=pri_starter_price_id
NEXT_PUBLIC_PADDLE_PRO_PRICE_ID=pri_pro_price_id
NEXT_PUBLIC_PADDLE_ENTERPRISE_PRICE_ID=pri_enterprise_price_id

# Optional: One-time products
NEXT_PUBLIC_PADDLE_GROUND_STATION_PRICE_ID=pri_ground_station_id
NEXT_PUBLIC_PADDLE_DEBRIS_ANALYSIS_PRICE_ID=pri_debris_analysis_id
```

## Step 4: Test Payment Flow

1. Restart your development server: `pnpm run dev`
2. Navigate to `http://localhost:3000/dashboard/pricing`
3. Click "Start Free Trial" on any plan
4. Use Paddle test card:
   - Card Number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/25`)
   - CVC: Any 3 digits (e.g., `123`)

## Step 5: Set Up Webhooks (Optional for Demo)

1. In Paddle Dashboard, go to **Developer Tools → Webhooks**
2. Add webhook URL: `https://yourdomain.com/api/paddle/webhook`
3. Select events to listen to:
   - `subscription.created`
   - `subscription.updated`
   - `subscription.canceled`
   - `transaction.completed`
4. Copy the webhook secret to your `.env.local`

## Files Created

- `lib/paddle.ts` - Paddle integration utilities
- `app/dashboard/pricing/page.tsx` - Pricing page with Paddle checkout
- `.env.example` - Example environment variables

## Quick Reference

### Opening Paddle Checkout
```typescript
import { openPaddleCheckout } from '@/lib/paddle';

// Open checkout for a product
openPaddleCheckout('pri_xxxxx', {
  userId: 'user-123',
  planName: 'Professional',
});
```

### Initialize Paddle
```typescript
import { initializePaddle } from '@/lib/paddle';

useEffect(() => {
  initializePaddle();
}, []);
```

## Troubleshooting

### Paddle.js not loading
- Check that `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` is set correctly
- Ensure you're using the correct environment (sandbox/production)
- Check browser console for errors

### Checkout not opening
- Verify Price IDs are correct
- Make sure Paddle.js is fully loaded before opening checkout
- Check that products are active in Paddle Dashboard

### Webhook verification failing
- Ensure webhook secret matches in `.env.local`
- Verify payload format is correct
- Check server logs for verification errors

## Support

- **Paddle Docs**: https://developer.paddle.com/
- **Paddle Support**: https://paddle.com/support
- **OrbitEdge Docs**: See project README

## Security Notes

⚠️ **Never commit `.env.local` to version control**
⚠️ **Keep API keys and secrets secure**
⚠️ **Use sandbox for testing, production for live payments**
