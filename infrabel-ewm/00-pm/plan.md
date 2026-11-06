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

Support (tests SIS, support quotidien) : flux parallèle, sollicitable par tous.
QA ──« corrections »──────────────► Blueprint
```

Règles (décision D-003, cf. `decisions.md`) :
- Les consultants se transmettent directement les livrables (`send_message`), avec branche + chemin du fichier + résumé en 3 lignes max.
- Le PM est en copie de chaque transmission de livrable et met à jour ce plan à chaque copie reçue.
- Au-delà de 3 allers-retours sur un même sujet : escalade au PM. Périmètre, priorités, planning et arbitrages : PM.
- Aucun BPR n'est livré à Moustafa sans statut « validé QA » ; à défaut, le signaler explicitement.
- Aucune nouvelle session n'est lancée sans l'accord de Moustafa.

## 4. Statuts utilisés

`À faire` · `En cours` · `En attente input` · `À relire (QA)` · `Validé QA` · `Livré` · `Validé Moustafa` · `Bloqué`

## 5. Tâches

| ID | Tâche | Responsable | Entrée (branche / fichier) | Sortie attendue | Statut | Échéance |
|---|---|---|---|---|---|---|
| PM-001 | Initialiser le suivi PM (plan, risques, décisions) | PM | — | `infrabel-ewm/00-pm/*` | Fait | 2026-11-01 |
| PM-002 | Recevoir et qualifier les BR / drafts de Moustafa | PM | Drive « Projet EWM 2.0 - Ronet » | Inventaire des inputs (§7) | Fait | 2026-11-01 |
| PM-003 | Informer l'équipe de l'emplacement des inputs (Drive) | PM | — | Message aux 5 consultants | Fait | 2026-11-01 |
| PM-004 | Proposer le planning et la délégation initiale à Moustafa | PM | §7 | Planning à valider | À faire | À définir |
| BP-001 | Revue du Blueprint Outbound Final v1.0 vs GAP List Outbound 27-10 : contradictions et vrais points ouverts | Blueprint | `ewm/pm` : `00-pm/inputs/` (blueprint .txt + GAP xlsx) | `ewm/blueprint` : `03-blueprint/revue-blueprint-outbound-vs-gap.md` | Validé QA (v2 ; version à diffuser : commit 505eed3 avec la réserve §1(b) intégrée ; validé sur 09cf64e, `04-qa/QA-001-v2_contre-revue-BP-001.md`) ; 1 mineure résiduelle non bloquante (§1(b) : #2 dépend de Q1, #5 de Q3) ; livraison à Moustafa faite en séance le 2026-11-01. Ancienne mention : relecture QA sur les seuls points de QA-001 (`ewm/qa`, `04-qa/QA-001_revue-BP-001_blueprint-outbound-vs-gap.md`). Ne pas diffuser la v1 | À définir |
| BP-002 | Artefact interactif « déroulé du flux Outbound » avec maquettes d'écrans (séance de validation 4 h) : squelette + 3-4 écrans, puis flux complet ; liste des captures réelles à demander | Blueprint | `ewm/blueprint` : `03-blueprint/revue-blueprint-outbound-vs-gap.md` + blueprint Final v1.0 | Lien artefact privé + source `03-blueprint/maquette/` | En cours (délégué 2026-11-01, demande de Moustafa) | Étape 1 : 2026-11-01 |
| QA-002 | Relecture de l'artefact (fidélité au blueprint, mention « maquette indicative », points à trancher) | QA | Sortie de BP-002 | Avis QA | En attente input (BP-002) | Avant la séance |
| SOL-001 | Demande d'activation Fiori à BC (référence PCE 2025 FPS02, décision de Moustafa du 2026-11-06 : migration prévue ; colonne de relevé on-premise 2022 conservée ; EWM + LE/transport, 4 profils utilisateurs) : liste des tuiles utilisables par un end user, lien rôle/catalogue/service, mapping vers les BR/GAP Outbound, questions à BC | Solution | `ewm/pm` : `00-pm/inputs/Inventaire_Fiori_EWM_LE_Infrabel_V0_4.xlsx` | `ewm/solution` : `02-solutions/demande-activation-fiori-bc.xlsx` | Livré 2026-11-06 (commit b14ac53), À relire (QA) ; M1-M6 à poser à Moustafa avant envoi à BC | À définir |
| QA-003 | Relecture de SOL-001 (cohérence avec l'inventaire, aucune activation affirmée, périmètre 2022) | QA | Sortie de SOL-001 | Avis QA | En cours (demandé 2026-11-06) | Avant envoi à BC |
| QA-001 | Relecture de BP-001 avant livraison à Moustafa | QA | Sortie de BP-001 | Avis QA | Fait (verdict À corriger) ; nouvelle relecture sur les points corrigés | À définir |
| — | *(tâches GAP / Solution / Blueprint / QA / Support à créer après réception des inputs)* | | | | | |

## 6. Livraisons à Moustafa

| Date | Livrable | Version / branche | Statut QA | Retour Moustafa |
|---|---|---|---|---|
| — | — | — | — | — |

## 7. Inputs (Google Drive de Moustafa)

Dossier racine : « Projet EWM 2.0 - Ronet » (id `12JmO_QYHHomfQLEQDxn22v7x0uZCEu5u`)

| Input | Fichier | Type | ID Drive |
|---|---|---|---|
| Business Requirements | Business Requiremens eWM 2-0 (2) | Sheet | `1i_gU0lllY9zc0nFiBbZ_k_5oqVSoVCHaVj6BqzgE7y8` |
| GAP List (la plus récente, 27-10) | GAP_List_EWM2.0_Ronet 27-10 | Sheet | `1m5QFzkRKBt7v1KFAU6XKheWaYlInt0hs5Hh_x8h_61s` |
| GAP List (version antérieure) | GAP_List_EWM2.0_Ronet (1) | Sheet | `1fHZrw8a_ZICsbDO4B6u8nK6TQcuJjmG19Oouik8EQL4` |
| Blueprint Outbound FR (Final v1.0) | Infrabel SAP EWM 2.0 Blueprint - Outbound Document FR_Final v1.0 (2) | Doc | `1420ge1w5ENWCdJW1APztJh7J3AoX_7t7V4tiOF5ZjEU` |
| Blueprint Outbound FR (Draft1) | Infrabel SAP EWM 2.0 Blueprint - Outbound Document FR_Draft1 (1) | Doc | `1kIwLlal9cyLWMYs0byi4eR26j994bOEmZVHauKn44gs` |
| Suivi | Follow-up - Ronet | Sheet | `1G8BX6Axh6DYg5uShPktWBV96ilVCXgkb2OqcnhY9_jo` |
| Réf. SAP | Dossier « SAP EWM Embedded - Guides de configuration » | Dossier | `1zOCd7RjDR1mnNcuW2pRGYTu-YzyWR9CD` |
| FSP existantes | Dossier « FSP Infrabel » | Dossier | `1NvhkVytlkLLJAm6S9AjL1cI7zpqTPXCX` |

## 8. Accès Drive par consultant

| Consultant | Accès Drive | Remarques | Date |
|---|---|---|---|
| GAP | Non confirmé | — | — |
| Solution | OK (via export xlsx) | Lecture complète. QM : 25 lignes dont 21 avec GAP ID ; Immat : 4 lignes dont 2 avec GAP ID (lignes sans ID à clarifier) | 2026-11-01 |
| Blueprint | Non confirmé | — | — |
| QA | OK (lecture) | BR « Business Requirements 20260220 » = 209 BR. GAP 27-10 : Inbound 52, Outbound 56, Internal 9, Reporting 17, QM 21, Immat 2, NNN 12 ; onglets Retours et Intégration Tours vides. Lecture texte des Sheets partielle → utilise l'export xlsx | 2026-11-01 |
| Support | Non confirmé | — | — |
