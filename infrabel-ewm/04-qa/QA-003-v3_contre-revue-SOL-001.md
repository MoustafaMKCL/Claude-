# QA-003 v3 — Contre-revue de SOL-001 v3 (commit `01a580a`)

> Relecteur : Consultant QA · 2026-11-06
> Livrable : `infrabel-ewm/02-solutions/demande-activation-fiori-bc.xlsx`, branche `ewm/solution`, commit `01a580a`
> Note : la v3 a été poussée à 15:31, avant la diffusion de QA-003 v2. Elle ne traite donc que les remarques de QA-003 v1. Les points ouverts de QA-003 v2 restent dus.

## Verdict : **À corriger** — 0 bloquant, 2 majeurs, 1 mineur

Le rapprochement par script a été relancé : les 73 lignes de l'onglet 1 concordent avec l'inventaire, sans écart.

| Remarque | Statut v3 | Constat |
|---|---|---|
| MIN-1 (citation de L171) | Levée | La citation exacte de L171 est reprise (hypothèse 19). |
| MIN-2 (BR-05-004-130_B) | Levée | Mention « écrit BR-05-004-130-B dans le fichier BR » ajoutée. |
| MIN-3 (F5340) | Levée | F5340 est rattaché à BR-05-004-050 puis à -010. |
| MIN-4 (statut) | Levée | Statut « v3, en attente de contre-revue QA ». |
| **MAJ-A** (non relevé ≠ absent) | **Ouverte, étendue** | Deux occurrences : « Écarts 2022-2025 » ligne 6 (« La page SETUP_CLERK n'existe pas en 2022 ») et « Tuiles par profil » ligne 6 (« en 2022 la page SETUP_CLERK n'existe pas (2 pages) »). Formulation attendue : relevée en 2025 seulement pour cette sélection, présence en 2022 à vérifier. |
| **MAJ-B** (PCE / on-premise) | **Ouverte** | « Écarts » ligne 19 : « toutes les lignes de l'onglet 1 sont établies sur cette base » (seules les 28 lignes S33OP le sont). Lisez-moi ligne 4 : « PCE 2025 FPS02 on-premise ». Q2 : « migration vers PCE 2025 ». Il faut distinguer la bibliothèque PCE (73 lignes) du relevé on-premise S33OP (28 lignes), et demander l'édition cible de la migration. |
| MIN-5 (Lisez-moi resté en v1) | Ouverte | Ligne 6 : relevé 2022 seul cité. Ligne 13 : « disponible en 2022 ? ». Ligne 14 : « 28 lignes relevées en 2022 » sans 2025. |

La prochaine contre-revue portera uniquement sur MAJ-A, MAJ-B et MIN-5.
