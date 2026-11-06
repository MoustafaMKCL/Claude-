# QA-003 — Relecture de SOL-001 « Demande d'activation Fiori pour BC »

> Relecteur : Consultant QA · 2026-11-06
> Livrable relu : `infrabel-ewm/02-solutions/demande-activation-fiori-bc.xlsx`, branche `ewm/solution`, commit `b14ac53` (5 onglets)
> Sources de contrôle (branche `ewm/pm`, `infrabel-ewm/00-pm/`) :
> - `inputs/Inventaire_Fiori_EWM_LE_Infrabel_V0_4.xlsx` : onglets « Lisez-moi », « Réserves essentielles », « Candidats 2025 », « EWM on-premise 2022-2025 », « LE on-premise 2022-2025 »
> - `inputs/Blueprint_Outbound_FR_Final_v1.0.txt`
> - `inputs/GAP_List_EWM2.0_Ronet_27-10.xlsx`
> - `decisions.md` (D-004)

---

## Verdict : **À corriger**

| Gravité | Nb |
|---|---|
| Bloquant | 1 |
| Majeur | 1 |
| Mineur | 4 |

Sur le fond, le livrable est très solide. La fidélité technique à l'inventaire est totale, et la règle « bibliothèque ≠ activation » est tenue partout. En revanche, il est construit sur une cible on-premise 2022. Il contredit donc la décision D-004 de Moustafa, prise juste avant sa livraison (commit D-004 à 15:25, livrable à 15:26). Il ne peut pas partir chez BC en l'état.

---

## 1. Contrôles réalisés et conformes

**(1) Aucune app présentée comme activée ou disponible**
- La règle « bibliothèque ≠ activation » figure dans le Lisez-moi, dans le bandeau de l'onglet 1 et dans chaque ligne (colonne « Source et niveau de preuve »).
- La règle « PFCG publié ≠ effectif » apparaît dans l'en-tête de la colonne rôle (onglet 1) et dans le bandeau de l'onglet 2.
- J'ai cherché par script « activée / disponible / installée » hors formules de réserve : il n'y a aucune affirmation.

**(2) Fidélité aux sources : contrôle exhaustif, pas par échantillon**
- **Rapprochement.** Les 73 lignes de l'onglet 1 ont été rapprochées par script de « Candidats 2025 », sur ces champs : ID, nom officiel, catalogue technique, catalogue métier, rôle leading, OData primaire, UI5 component, BSP et intent.
- **Couverture.** Les 73 ID existent dans l'inventaire.
- **Écarts.** Il n'y en a aucun. Les 39 signalements bruts du script sont tous la formule « aucun OData affiché (bibliothèque) — à vérifier BC », qui correspond fidèlement à « non affiché / à vérifier ». F5340 reprend l'OData V4 UI_PHYSSTOCKPROD_1, qui est bien dans l'inventaire.
- **Priorités.** Les 21 lignes P1 sont conformes. La répartition est de 21 P1, 42 P2 et 10 P3, soit 73 lignes.
- **2022 et 2025 bien distingués.** Les 28 lignes marquées « Relevé 2022 » correspondent exactement aux 18 EWM et 10 LE relevés dans l'inventaire, sur S24OP. Les 45 autres lignes sont marquées « bibliothèque PCE 2025 uniquement ». F1765 est exclu à juste titre, car c'est une dépendance (R12).

**(3) Profils et hypothèses BR/GAP**
- **Profils.** Les totaux sont de 38, 12, 27 et 12 tuiles. Ils sont présentés comme une proposition, et les profils C et D sont déclarés comme n'ayant aucun rôle source.
- **Hypothèses.** Il y en a 20 (onglet 3, lignes 5 à 24), et toutes sont titrées « à tester ». Une colonne « Base » et une colonne « Confiance » les accompagnent.
- **GAP List.** J'ai vérifié par sondage les statuts et types FRICE cités. Ils sont exacts :
  - BR-05-004-120-A, -120-B, BR-05-005-040, -090 ;
  - BR-05-006-010, -030, -060 et -060-01 à -04 ;
  - Annexe 3.
- **BR absents de la GAP List.** BR-05-004-040, -060, -070 et -100-B ne figurent pas dans la GAP List Outbound, comme l'indique le livrable.
- **Autres données.** La piste ZIM1_WM_FOLLOWUP et la mention de Fox4work proviennent bien de la GAP List.

**(4) Tuiles « À trier »**
- /SCWM/MON, /SCWM/LOAD, /SCWM/TU, etc. sont dans l'inventaire, classées « À trier », et non hors inventaire.
- Le fait de les avoir reprises est déclaré comme un choix du consultant (Lisez-moi, ligne « Ce qui est de mon raisonnement »). La base « libellé seulement » est indiquée (onglet 2, « Ce que l'inventaire ne couvre pas »).

**(5) Procédure et questions à BC**
- Chaque étape porte « À confirmer par BC », avec une colonne « Origine » qui distingue l'inventaire de la pratique générale.
- La note 2902673 est citée comme référence, et non comme activation.
- Les chiffres cités sont exacts : 428 SAP GUI et 29 Web Dynpro sur les 500 candidats ; notes 2524331, 3226678 et 3226530 ; nom 2022 de F5341 « Display Warehouse Documents ».

---

## 2. Remarques

### Bloquante

**BLQ-1 — Le livrable ne respecte pas D-004 (référence PCE 2025 FPS02, 2022 en simple information).**
- **Où.** Le livrable vise partout un système de test on-premise 2022 :
  - Lisez-moi, ligne « Objet » : « …système de TEST / SANDBOX on-premise 2022 » ;
  - bandeau de l'onglet 1 : « Cible : … on-premise 2022 » ;
  - colonne jaune de l'onglet 1 : « Disponible en 2022 ? (BC) » ;
  - onglet 4 : étape 1 (« release exacte 2022 »), étape 2 (seule la pile 2022 est comparée), étape 12 (« différente en 2022 ») et Q1 (« release 2022, … UIAPFI70 / UIS4HOP1 ») ;
  - aucune mention de D-004 dans le classeur.
- **Ce que dit D-004.** La référence est PCE 2025 FPS02, à cause de la migration prochaine. Le relevé 2022 est gardé dans une colonne d'information. La question de la version réelle du système de test est posée à BC.
- **Correction attendue.**
  - Recadrer la cible : la référence est 2025 FPS02, et la version réelle du système de test est à confirmer par BC.
  - Renommer la colonne jaune, par exemple « Disponible dans la version du système de test ? (BC) ».
  - Garder la colonne de statut 2022 comme information.
  - Reformuler Q1 en question ouverte, sans présupposer 2022.
  - Citer D-004 dans le Lisez-moi.

### Majeure

**MAJ-1 — Le relevé on-premise 2025 FPS02 (S33OP) de l'inventaire n'est pas exploité.**
- **Ce que contient l'inventaire.** Les mêmes 28 apps (18 EWM et 10 LE) ont aussi un relevé S33OP 2025 FPS02 On-Premise. On le trouve dans le Lisez-moi de l'inventaire, lignes 14 et 15, et dans les onglets on-premise.
- **Pile 2025 FPS02.**
  - L'onglet « EWM on-premise 2022-2025 », ligne « Installation 2025 », donne : front-end UIS4H 109 SP0002, back-end S4CORE 109 SP0002 et S4COREOP 109 SP0002.
  - Pour LE, le Lisez-moi de l'inventaire donne les notes 3493254 et 3765941.
- **Ce que fait le livrable.** Il ne cite que le relevé 2022 (S33OP ou FPS02 n'apparaissent que deux fois, dans des champs bruts). Avec D-004, c'est pourtant la preuve la plus pertinente.
- **Correction attendue.**
  - Ajouter, pour les 28 lignes, la mention « présente dans la sélection Library 2025 FPS02 On-Premise (S33OP), transcription manuelle ». Le niveau de preuve reste le même : présence dans la bibliothèque, pas dans un système.
  - Ajouter la pile 2025 FPS02 à l'étape 2 et à Q1 de l'onglet 4.
  - Préciser que les champs « PCE 2025 » des 45 autres lignes viennent de la bibliothèque PCE (Private Cloud). Ils ne valent pas relevé on-premise 2025 FPS02 (réserves R05 et R07 de l'inventaire).

### Mineures

**MIN-1 — Onglet 3, hypothèse 19 : citation inexacte du blueprint.** Le texte entre guillemets « standard EWM ; solution GZH existante : création directe d'un ordre de livraison sortante en EWM » n'est pas dans le blueprint. L171 dit : « La solution envisagée repose sur la création directe d'un ordre de livraison sortante dans EWM, selon le fonctionnement existant à GZH. » Il faut citer exactement ou retirer les guillemets.

**MIN-2 — Onglet 3, hypothèse 12 : ID BR-05-004-130_B.** Cet ID est repris de la GAP List, mais il est absent du fichier BR, qui contient BR-05-004-130-B (anomalie déjà relevée en QA-001). Ajouter « (BR-05-004-130-B dans le fichier BR) ».

**MIN-3 — Onglet 3, hypothèse 21 : rattachement BR discutable.** F5340 est rattaché à BR-05-004-010 (création automatique des bons 8*) avec la citation de L166, mais cette phrase relève surtout de BR-05-004-050 (stock disponible et quantités affectées). Revoir le BR cité ou ajouter -050.

**MIN-4 — Statut « VERSION DE TRAVAIL — non relue par le QA ».** Il figure dans le Lisez-moi et dans le bandeau de l'onglet 1. Il est à mettre à jour après correction et contre-revue. Je contrôlerai ce point lors de la contre-revue, rien à faire avant.

---

## 3. Actions demandées au Consultant Solution

1. Recadrer le classeur sur D-004 (BLQ-1).
2. Intégrer le relevé S33OP 2025 FPS02 et la pile 2025 (MAJ-1).
3. Traiter MIN-1 à MIN-3.

La contre-revue QA portera uniquement sur ces points, plus MIN-4.
