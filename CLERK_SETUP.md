# Clerk Authentication Setup Instructions

## 1. Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application

## 2. Get Your Clerk Keys
1. In your Clerk Dashboard, go to "API Keys"
2. Copy the "Publishable Key" and "Secret Key"

## 3. Update Environment Variables
Update the `.env.local` file with your actual Clerk keys:

```bash
# Replace these with your actual Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
```

## 4. Configure Clerk Dashboard
In your Clerk Dashboard:

1. **Paths & URLs**:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - User Profile URL: `/profile`
   - After sign-in URL: `/dashboard`
   - After sign-up URL: `/dashboard`

2. **Social Providers** (Optional):
   - Enable Google, GitHub, or other providers as needed

3. **User Data**:
   - Configure which user fields are required
   - Set up custom user metadata if needed

## 5. Middleware Configuration ✅
The middleware has been configured to work with Next.js 15 and Clerk v6:
- Uses simplified `clerkMiddleware()` for compatibility
- Routes are protected client-side in components
- No additional middleware configuration needed

## 6. Features Enabled

✅ **Authentication Pages**:
- `/sign-in` - Sign in page with modal support
- `/sign-up` - Sign up page with modal support
- `/profile` - User profile management

✅ **Protected Routes** (Client-side protection):
- `/admin` - Article creation (requires authentication)
- `/dashboard` - User dashboard (requires authentication)
- `/profile` - User profile (requires authentication)

✅ **User Features**:
- User avatar and name in header
- User-specific article creation
- Article authorship tracking
- Dashboard with user statistics

✅ **Integration**:
- Articles are linked to user accounts
- Author information automatically populated
- User can see their own articles in dashboard
- Middleware works with Next.js 15 + Turbopack

## 7. Testing Authentication
1. Visit http://localhost:3000
2. Click "Subscribe" or "Sign In" to test authentication
3. Create an account and try creating an article
4. Check the dashboard to see user-specific features

## 8. Troubleshooting
If you encounter middleware issues:
- Make sure you're using Clerk v6+ with Next.js 15
- Restart your development server after changing middleware
- Authentication is handled client-side in components for better compatibility

## 9. Production Setup
When deploying to production:
1. Create a production Clerk application
2. Update environment variables with production keys
3. Configure production URLs in Clerk dashboard
4. Test authentication flow in production environment
