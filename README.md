# Pannello contenuti (Sanity Studio) — A.S.D. Calcio Pavonese

Questo è il **pannello di gestione** del sito: da qui l'addetto stampa pubblica news,
crea gallery, aggiorna settore giovanile, rosa, staff e sponsor. Nessun codice.

## Primo avvio (una volta sola, lato tecnico)
1. Installa Node.js 18+.
2. In questa cartella: `npm install`
3. Collega/crea il progetto Sanity: `npx sanity init --env`
   - crea un account gratuito su sanity.io se non c'è
   - scegli "Create new project", nome "Calcio Pavonese", dataset `production`
   - questo salva il `projectId` (serve anche al sito, vedi RUNBOOK)
4. Prova in locale: `npm run dev` → apri http://localhost:3333
5. Pubblica il pannello online: `npm run deploy` → scegli un indirizzo
   (es. `pavonese.sanity.studio`). Questo è il link che userà l'addetto stampa.

## Uso quotidiano (addetto stampa)
- Vai su `https://pavonese.sanity.studio` e accedi.
- **News**: “News / Articoli” → “+” → titolo, categoria, data, copertina, testo → **Publish**.
- **Foto**: “Gallery fotografiche” → nuovo album → trascina le foto → Publish.
- **Giovanili / Rosa / Staff / Sponsor**: stessi passaggi nelle rispettive sezioni.
- Il sito si aggiorna da solo in pochi secondi.

## Inviti
Puoi invitare altri collaboratori dal sito sanity.io (Project → Members) con ruoli
(editor, amministratore). Il piano gratuito include più utenti.

## Modelli disponibili
News/Articoli · Gallery fotografiche · Settore Giovanile · Giocatori (rosa) ·
Staff e Dirigenza · Sponsor & Partner · Impostazioni sito.
