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

## 5. Features Enabled

✅ **Authentication Pages**:
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page  
- `/profile` - User profile management

✅ **Protected Routes**:
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

## 6. Testing
1. Restart your development server
2. Visit http://localhost:3000
3. Click "Subscribe" or "Sign In" to test authentication
4. Create an account and try creating an article

## 7. Production Setup
When deploying to production:
1. Create a production Clerk application
2. Update environment variables with production keys
3. Configure production URLs in Clerk dashboard
