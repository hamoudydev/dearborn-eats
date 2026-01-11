# Dearborn Eats

A local restaurant and food truck review platform for Dearborn, MI — curated by local foodies.

## Tech Stack

- **Frontend**: TanStack Start (React SSR framework)
- **Styling**: Tailwind CSS + DaisyUI
- **Database**: Supabase (PostgreSQL)
- **Maps**: Mapbox GL JS
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed
- Supabase project created
- Mapbox account with access token

### Setup

1. Clone the repository:
```bash
git clone https://github.com/hamoudydev/dearborn-eats.git
cd dearborn-eats
```

2. Install dependencies:
```bash
bun install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Add your credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_MAPBOX_TOKEN=your_mapbox_public_token
```

5. Set up the database:
```bash
# Link to your Supabase project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

6. Start the development server:
```bash
bun run dev
```

## User Roles

| Role | Description |
|------|-------------|
| **Admin** | Full access to manage restaurants, users, and reviews |
| **Foodie** | Verified local reviewers with featured reviews and menu recommendations |
| **Public** | Regular users who can leave basic reviews |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/            # Utilities, Supabase client, hooks
├── routes/         # TanStack Router file-based routes
└── styles/         # Global CSS

supabase/
└── migrations/     # Database schema and RLS policies
```

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run db:generate` - Generate TypeScript types from database
- `bun run db:push` - Push migrations to Supabase
