# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Google OAuth Setup

BusParcel supports Google sign-in via Supabase Auth. Follow these steps to enable it.

### 1. Create a Google OAuth Client

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**.
2. Click **Create Credentials** → **OAuth 2.0 Client ID** → **Web application**.
3. Set the following:
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (local dev)
     - Your production URL (e.g. `https://your-app.com`)
   - **Authorized redirect URIs**:
     - `https://<your-supabase-project-ref>.supabase.co/auth/v1/callback`
4. Copy the **Client ID** and **Client Secret**.

### 2. Enable Google provider in Supabase

1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Navigate to **Authentication** → **Providers** → **Google**.
3. Toggle **Enable** and paste your Google **Client ID** and **Client Secret**.
4. Save.

### 3. Configure redirect URLs in Supabase

1. In your Supabase Dashboard go to **Authentication** → **URL Configuration**.
2. Set **Site URL** to:
   - `http://localhost:3000` for local dev
   - Your production URL for production
3. Under **Redirect URLs**, add:
   - `http://localhost:3000`
   - Your production URL

### 4. Local environment variables

Ensure your `.env` (or `.env.local`) contains:

```env
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-key>
```

After these steps, clicking **Continue with Google** on the login page will redirect users through Google's consent screen, then back to the app with a valid Supabase session.


