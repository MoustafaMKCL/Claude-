# Plan projet — Infrabel Internal Processes (SAP EWM Schaerbeek / Bascoup)

> Tenu par : PM (session Manager) · Branche : `ewm/pm` · Dernière mise à jour : 2026-11-01
> Décideur / validation / diffusion : **Moustafa** (client)

## 1. Statut global

| Élément | Valeur |
|---|---|
| Phase | Initialisation — en attente des inputs de Moustafa (BR / drafts) |
| Prochain jalon | Réception des BR / drafts → lancement analyse GAP |
| Tâches déléguées | Aucune (blocage volontaire jusqu'à réception des inputs) |

## 2. Équipe et périmètre

| Rôle | Session | Branche | Dossier | Livrables |
|---|---|---|---|---|
| PM (Manager) | session_01AybsWZC6cSk5iYLPjY5NMe | `ewm/pm` | `infrabel-ewm/00-pm/` | Plan, risques, décisions, consolidation, livraison |
| Consultant GAP | session_01AybsWYsrFetsyB926tav3T | `ewm/gap` | `infrabel-ewm/01-gap/` | Listes GAP, écarts vs standard, slides de priorisation |
| Consultant Solution | session_01AybsWWM4HahToQ6GRmUu2J | `ewm/solution` | `infrabel-ewm/02-solutions/` | Conception, RICEFW, solutions aux GAP |
| Consultant Blueprint | session_01AybsWYYZ8qjWqzHG3f45kc | `ewm/blueprint` | `infrabel-ewm/03-blueprint/` | BPR / BR, préparation réunions DC |
| Consultant QA / reviewer | session_01AybsWXGavsKNDidtfce8Fe | `ewm/qa` | `infrabel-ewm/04-qa/` | Relecture avant livraison |
| Consultant Support SAP EWM | session_01AybsWWHrYKdaumP4x3xHb5 | `ewm/support` | `infrabel-ewm/05-support/` | Support quotidien, tests SIS |

## 3. Flux de travail

```
Moustafa ──(BR / drafts)──► PM ──► GAP
GAP ──« GAP identifiés »──────────► Solution
GAP ──« Liste GAP consolidée »────► Blueprint
Solution ──« Solutions retenues »─► Blueprint
Blueprint ──« BPR à relire »──────► QA
QA ──« BPR validé QA »────────────► PM ──► livraison à Moustafa (validation / diffusion)

Support (tests SIS, support quotidien) : flux parallèle, reporting direct au PM.
```

Règles :
- Chaque transmission passe par le PM (relai `send_message` avec branche + chemin du fichier).
- Aucun BPR n'est livré à Moustafa sans statut « validé QA » ; à défaut, le signaler explicitement.
- Aucune nouvelle session n'est lancée sans l'accord de Moustafa.

## 4. Statuts utilisés

`À faire` · `En cours` · `En attente input` · `À relire (QA)` · `Validé QA` · `Livré` · `Validé Moustafa` · `Bloqué`

## 5. Tâches

| ID | Tâche | Responsable | Entrée (branche / fichier) | Sortie attendue | Statut | Échéance |
|---|---|---|---|---|---|---|
| PM-001 | Initialiser le suivi PM (plan, risques, décisions) | PM | — | `infrabel-ewm/00-pm/*` | Fait | 2026-11-01 |
| PM-002 | Recevoir et qualifier les BR / drafts de Moustafa | PM | Moustafa | Inventaire des inputs | En attente input | À définir |
| — | *(tâches GAP / Solution / Blueprint / QA / Support à créer après réception des inputs)* | | | | | |

## 6. Livraisons à Moustafa

| Date | Livrable | Version / branche | Statut QA | Retour Moustafa |
|---|---|---|---|---|
| — | — | — | — | — |
