# QA-003 v2 — Contre-revue de SOL-001 v2 « Demande d'activation Fiori pour BC »

> Relecteur : Consultant QA · 2026-11-06
> Livrable relu : `infrabel-ewm/02-solutions/demande-activation-fiori-bc.xlsx`, branche `ewm/solution`, commit `58fee6d` (v2, 6 onglets)
> Périmètre :
> - les remarques de QA-003, appliquées à la v2 ;
> - les ajouts de la v2 : colonnes « Relevé on-premise 2025 / 2022 » et « Écart 2022/2025 connu », onglet « Écarts 2022-2025 », questions Q1 à Q3.
>
> Sources : celles de QA-003. Les faits de l'onglet « Écarts 2022-2025 » ont été vérifiés dans les onglets on-premise de l'inventaire V0.4.

## Verdict : **À corriger**

| Gravité | Nb |
|---|---|
| Bloquant | 0 |
| Majeur | 2 |
| Mineur | 4 |

## 1. Suivi des remarques QA-003

| Remarque | Statut v2 | Constat |
|---|---|---|
| BLQ-1 (D-004) | **Levée** | Le Lisez-moi, le bandeau de l'onglet 1 et l'onglet 4 sont sur la référence 2025 FPS02. La colonne jaune s'intitule « Présente sur le système de test actuel ? » et une colonne « Version du système de test (BC) » est ajoutée. Q1 à Q3 portent sur la version et la migration. Résidu en MIN-5. |
| MAJ-1 (relevé S33OP) | **Levée en grande partie** | Les 28 lignes portent « Oui – sélection Library S33OP ». Les 45 autres portent « Non relevé – bibliothèque PCE 2025 seulement ». La pile 2025 est en étape 2 et en Q1. Résidu en MAJ-B. |
| MIN-1 (citation de L171, hypothèse 19) | **Non traitée** | Texte inchangé. |
| MIN-2 (BR-05-004-130_B, hypothèse 12) | **Non traitée** | Texte inchangé. |
| MIN-3 (F5340 → BR-05-004-010, hypothèse 21) | **Non traitée** | Texte inchangé. |
| MIN-4 (statut « non relue par le QA ») | En attente | À mettre à jour après la contre-revue finale. |

## 2. Contrôles de la v2, conformes

- **Fidélité de l'onglet 1.** J'ai relancé le rapprochement par script : les 73 lignes concordent avec l'inventaire, sans écart.
- **Colonnes « Relevé ».** Il y a 28 « Oui » en S33OP et en S24OP, et 45 « Non relevé ». La colonne 2022 précise « absence de relevé ≠ absence de l'app en 2022 », et le Lisez-moi définit « Non relevé » correctement.
- **Colonne « Écart 2022/2025 connu ».** J'ai vérifié par sondage F5341, F4595, F1706, F4289, F3880, F4150, F2793, F1703 et le catalogue SAP_EHS_BC_MOC_CHANGE_MGMT. Tout est conforme à la ligne « Différences Launchpad » et aux relevés LE de l'inventaire. Pour les 45 autres lignes, la mention « Inconnu : aucun relevé 2022 pour comparer » est correcte.
- **Onglet « Écarts 2022-2025 ».**
  - Les faits sont exacts : piles, pages EWM 2 → 3, spaces EWM, pages et spaces LE 1 → 4, rôles EWM et LE, renommage de F5341, catalogues et groupes, OData 20 → 21 et ICF.
  - La ligne 15 et le bandeau distinguent bien « non relevé » et « nouvelle en 2025 ».
- **Onglet 4.** Les étapes 1, 2, 10, 12 et 13, ainsi que Q1 à Q3, sont cohérentes avec D-004 et toutes marquées « à confirmer par BC ».

## 3. Remarques ouvertes

### Majeures

**MAJ-A — Onglet « Écarts 2022-2025 », ligne 6 (pages EWM) : un « non relevé » est présenté comme « absent ».**
- **Ce que dit le livrable.** « La page SETUP_CLERK n'existe pas en 2022 : ce qui relève de la configuration ne sera visible qu'en 2025. »
- **Ce que dit l'inventaire.** Il relève 2 pages pour la sélection des 18 apps EWM, au niveau agrégé (R10, « pas de mapping app-rôle-page »). Il ne prouve pas l'absence de la page dans la release 2022.
- **Ce qui est attendu.** La formulation doit être aussi prudente que celle de la ligne 8 (LE). Par exemple : « La page SETUP_CLERK n'est relevée qu'en 2025 pour cette sélection ; sa présence en 2022 est à vérifier sur le système. »

**MAJ-B — L'onglet « Écarts », ligne 19, et la référence de version confondent PCE et on-premise.**
- **L19.** La phrase « Si le système de test est en 2025 FPS02 : toutes les lignes de l'onglet 1 sont établies sur cette base ; les écarts de ce tableau ne s'appliquent plus » va trop loin. Seules les 28 lignes ont un relevé on-premise 2025 (S33OP). Pour les 45 autres, le livrable dit lui-même « bibliothèque PCE 2025 seulement ». Or, selon la réserve R05 de l'inventaire, la PCE ne prouve rien pour l'on-premise. Reformuler, par exemple : « …les 28 lignes relevées S33OP sont établies sur cette base ; les 45 autres reposent sur la bibliothèque PCE 2025 et restent à vérifier par BC. »
- **Lisez-moi, ligne 4, et bandeau de l'onglet 1.** La mention « SAP S/4HANA PCE 2025 FPS02 on-premise » associe deux éditions différentes : Private Cloud Edition et on-premise. Q2 parle aussi de « migration vers PCE 2025 ». Pour BC, qui est un public technique, il faut écrire séparément :
  - « référence 2025 FPS02 : bibliothèque PCE 2025 (73 lignes) et relevé on-premise S33OP (28 lignes) » ;
  - en Q2, demander l'édition cible de la migration (PCE ou on-premise).

  D-004 parle de « PCE 2025 FPS02 ». Si l'édition cible n'est pas connue, la question est à poser à Moustafa via le PM. Le consultant ne doit pas trancher.

### Mineures

- **MIN-1 à MIN-3** : à reprendre telles que formulées dans QA-003. Ce sont des corrections d'une ligne dans l'onglet 3 (hypothèses 19, 12 et 21).
- **MIN-5 — Lisez-moi, restes de la v1.**
  - La ligne 13 (« Colonnes jaunes ») cite encore « disponible en 2022 ? ». Remplacer par les nouveaux intitulés.
  - La ligne 6 (« Source principale ») ne mentionne que les « relevés on-premise 2022 partiels ». Ajouter le relevé S33OP 2025 FPS02 des mêmes 28 apps.
  - La ligne 14 (« dont 28 des 28 lignes relevées en 2022 ») est à compléter par « et en 2025 FPS02 ».

## 4. Pour la contre-revue suivante

Elle portera uniquement sur MAJ-A, MAJ-B, MIN-1 à MIN-3, MIN-5 et MIN-4. Ce sont des corrections de texte localisées, sans nouvelle analyse à mener.
