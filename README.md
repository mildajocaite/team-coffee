# Team coffee

Small Next.js app that:

- filters games by number of players
- lets you pick a random game from the filtered list
- uses Tailwind CSS styles

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Add your real games

Edit `app/data/games.ts` and replace the placeholder `games` array with your own list.

Each game needs:

- `logo`
- `name`
- `description`
- `minPlayers` and `maxPlayers`
- `website`

You can place local logos in `public/games/`.
