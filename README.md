unlike the first website, this one uses:

- createServerComponentClient for server-side caching
- revalidatePath to refresh and update cache container
- image lazy loading (most of em)
- Supabase's own auth for login
- Suspense fallback class (for between page redirection)
- a really lightweight package.json

- Webtest Speed check (current):
Anilabs.net: 59 81 96 100
Anelabs Vercel Optimised: 75 81 96 100
Com Com Vercel: 100 95 100 91
