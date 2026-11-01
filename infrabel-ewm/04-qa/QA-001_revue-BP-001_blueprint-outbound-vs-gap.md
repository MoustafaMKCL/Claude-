# QA-001 — Revue QA de BP-001 « Blueprint Outbound Final v1.0 vs GAP List Outbound (27-10) »

> Relecteur : Consultant QA · 2026-11-01
> Livrable relu : `infrabel-ewm/03-blueprint/revue-blueprint-outbound-vs-gap.md`, branche `ewm/blueprint`, commit `3238e2d`
> Sources de contrôle :
> - `infrabel-ewm/00-pm/inputs/Blueprint_Outbound_FR_Final_v1.0.txt` (branche `ewm/pm`), ci-après « BP »
> - `infrabel-ewm/00-pm/inputs/GAP_List_EWM2.0_Ronet_27-10.xlsx`, onglet « GAP List Outbound » (branche `ewm/pm`), ci-après « GL »
> - Fichier BR « Business Requiremens eWM 2-0 (2) », onglet « Business Requirements 20260220 » (export xlsx du Drive, 209 BR), ci-après « fichier BR »

---

## Verdict : **À corriger**

| Gravité | Nb |
|---|---|
| Bloquant | 0 |
| Majeur | 6 |
| Mineur | 6 |

Le travail est solide sur la forme et sur la fidélité des extraits. Mais trois classements « Contradiction » sur cinq sont faux ou discutables. Le résumé §1(b), qui répond directement à la question de Moustafa, est donc faussé. Il faut le recalculer avant toute livraison.

---

## 1. Ce qui a été vérifié et qui est conforme

- **Fidélité des extraits.** Les 53 citations `L… « … »` ont été comparées par script à la ligne du BP. Toutes sont exactes. Deux extraits ont été abrégés par « … », sans effet sur le sens : L412, où le tag est en fin de ligne, et L800, où les repères [f][g] n'ont pas été reproduits.
- **Contenu de la GL.** Pour les 56 lignes, j'ai contrôlé dans le xlsx PM le statut, le TO-BE, les points ouverts et l'analyse standard cités. Le constat est conforme, sauf pour les points listés au §2.
- **Décisions du 22/10 et du 27/10 (#5).** Elles sont bien présentes dans la GL : retrait de la disponibilité du stock et des ressources, pas de split par aire d'activité, vague ODD distincte. La « relation 1:1 entre job Milkrun et Wave milkrun » figure en colonne TO-BE de #5.
- **Incohérences internes du BP (§5).** J'ai vérifié par sondage la numérotation, les doublons 3.4.8, 3.6.5 et 4.1.1.2, L297, L399, L174, le futur en 4.1 et l'hétérogénéité des tags. Tout est exact.
- **Anomalies de la GL (§4).** Les points 1 à 12 sont exacts.
- **Addition des catégories.** Le total fait bien 56. Les doublons #32, #50 et #55 sont correctement identifiés.
- **Hypothèses.** Elles sont déclarées (§6), et les questions sont rattachées aux lignes (§7).

---

## 2. Remarques

### Majeures

**MAJ-1 — §1(b), §2 #40, §3 4.1 (L807), Q15 : classement « Contradiction » erroné.**
- **Ce que dit le fichier BR.** BR-01-002-020-B dit : « Un mail doit être envoyé automatiquement **au demandeur** lui précisant que son matériel sera expédié avec la prochaine tournée […] (**sauf contre-indication par le TOM**) ». Le BP L807 reproduit fidèlement ce BR.
- **D'où vient l'écart.** C'est le TO-BE de la GL #40 (« client destinataire », activable / désactivable) qui s'écarte du BR, et aussi de son propre titre, « Mail automatique au demandeur ». Le TO-BE de #38 parle lui aussi de « client destinataire ».
- **Correction attendue.**
  - Reclasser #40 : le BP est aligné sur le BR, et l'écart est interne à la GL.
  - Ne proposer aucune réécriture de L807 avant arbitrage.
  - Reformuler Q15 : « La GL fait évoluer le BR (destinataire, activation). Valide-t-on cette évolution ? »
  - Retirer la sous-question « que recouvre la contre-indication du TOM » : c'est le texte même du BR.

**MAJ-2 — §1(b), §2 #37 : classement « Contradiction » erroné.**
- **Ce que montre la GL.** La description du BR en #37 est mot pour mot le texte de BR-06-001-070 dans le fichier BR (« Les informations ADR (pétards, torches..) […] »). Elle est identique à la description de #56.
- **Conséquence.** #37 est donc un doublon de #56 portant un mauvais ID, et non une contradiction avec le BP. La revue le reconnaît d'ailleurs elle-même, avec l'action « Ne pas modifier le BP ».
- **Correction attendue.**
  - Classer #37 comme doublon, à compter une seule fois avec #56, sur le modèle de #50 et #55.
  - Corriger l'anomalie §4.3 en conséquence : c'est un doublon, pas seulement une question de rangement.

**MAJ-3 — §2 #46 : classement « C » non démontré.**
- **Ce que dit la GL.** Le statut est « A clarifier avec business », la colonne « Couvert par » est vide et le commentaire dit « À réexpliquer le BR ».
- **Ce que dit le BP.** L832 est fidèle au BR-02-002-050, qui demande un scan à l'enlèvement.
- **Conséquence.** La seule divergence porte sur le tag « GAP », et elle dépend d'une réponse métier (Q17). C'est un point ouvert, pas une contradiction établie.
- **Correction attendue.** Reclasser #46 en PO, ou créer une catégorie « contradiction conditionnelle » explicitement définie.

**MAJ-4 — §1(b) et §2 #16 et #17 : la conclusion « 8 lignes se corrigent sans nouvel arbitrage métier » est fausse.**
- **Ce que dit le BP.** Parmi ces 8 lignes, #17 est en « A analyser avec Bernard » et le BP garde le commentaire [b] (« on doit clarifier si une livraison sortante doit être générée automatiquement »).
- **Ce qu'en dit la revue.** Pour #17, elle pose elle-même Q7. #40 (Q15) et #46 (Q17) demandent un arbitrage métier, et #37 n'entraîne aucune modification du BP.
- **Conséquence.** Ce qui reste réellement « correction de texte sans arbitrage » se limite à #2 (sous réserve de Q1), #25, #5 (sous réserve de Q3) et #16.
- **Correction attendue.**
  - Recalculer le tableau de répartition et le §1(b) après MAJ-1 à MAJ-3. En première analyse, on obtient C = #2, #25 ; DEC = #5, #16 ; #17 passe en PO ou en « DEC à confirmer ».
  - Dans le résumé, distinguer « décision notée dans la GL » et « décision confirmée ».

**MAJ-5 — §2 #14, §3.3 (L366–L367, commentaire 97) : le commentaire est mal lu et le texte proposé l'est par conséquent.**
- **Ce que dit le BP.** L390 indique : « @EL BAKKALI Youssef ajouter ces deux points **dans le blueprint EWM 2.0 Internal** ».
- **Ce qu'en fait la revue.** Elle présente le commentaire comme une demande d'ajout dans le BP Outbound. Elle propose d'insérer en 3.4.4, au présent normatif, la vague dédiée et le rapport vers REPL. Or la GL #14 est « À confirmer avec business ».
- **Correction attendue.**
  - Corriger le constat.
  - Remplacer le texte proposé par un renvoi au blueprint Internal, assorti d'un point ouvert. Si l'on maintient l'ajout dans l'Outbound, le présenter comme une question au PM.
  - Ne pas présenter ces deux composantes comme acquises.

**MAJ-6 — §2 #4, §3.1, Q2 : BR-05-003-010 n'existe pas dans le fichier BR.**
- **Ce qu'en fait la revue.** Elle propose, selon Q2, de taguer `(BR-05-003-010)` en 3.1.
- **Ce que montre le fichier BR.** L'ID est absent de l'onglet « Business Requirements 20260220 », qui compte 209 BR.
- **Correction attendue.**
  - Ajouter l'anomalie au §4 : un ID GL est absent du fichier BR et doit être rattaché ou créé (PM, Consultant GAP).
  - Conditionner tout tag dans le BP à cette résolution.
  - Compléter Q2 en conséquence.

### Mineures

**MIN-1 — §4.13, H5 : vérifier les IDs au lieu de les déclarer « non revérifiés ».** J'ai vérifié dans le fichier BR :
- BR-01-002-020-B existe, et son texte est celui de L807 (voir MAJ-1) ;
- BR-01-002-0020-B est absent ;
- BR-05-004-130-B existe, avec le texte « emballage des composants qui composent un KIT (via OF) séparément… » ;
- BR-05-004-130_B est absent ;
- BR-07-007-010 existe (KPI transport OTIF).

Intégrer ces résultats et retirer la réserve correspondante de H5.

**MIN-2 — §3.2, texte proposé pour L203 : affirmation non sourcée.** La phrase « la séparation par aire d'activité intervient au regroupement des tâches (3.2.5) » ne figure pas dans la GL, qui dit seulement : « Gilles confirme le split de wave par Aire d'activité n'est pas nécessaire ». La phrase est fonctionnellement plausible, avec une règle de création d'ordres magasin (WOCR) par aire d'activité, mais c'est une hypothèse de solution. Il faut la déclarer au §6 ou la retirer du texte.

**MIN-3 — §3.3, texte proposé pour L410 : terminologie et périmètre.**
- « bon de livraison 800 » ne correspond pas à la terminologie du BP (« bon 8* », livraison sortante). Harmoniser.
- Le reliquat n'est rattaché qu'à la « commande de transfert (bon 45*) », alors que le BP (L170) couvre aussi les réservations. Écrire « STO ou réservation », ou déclarer la limite.

**MIN-4 — §3.1, texte proposé pour L169 (#2).** La GL indique « Développé transaction pour modifier le variant du job d'une manière contrôlée » : il s'agit d'un développement. Écrire « transaction spécifique » plutôt que « transaction de maintenance contrôlée », pour que le texte reste cohérent avec le tag GAP conservé.

**MIN-5 — §3 (convention).** Le format « Point ouvert : … » n'est pas celui du blueprint de référence. Le Final v1.0 déclare ses points ouverts en prose normative, par exemple L172 « Les statuts à suivre restent à définir. » H3 le déclare, mais la revue doit proposer les deux variantes à Moustafa, ou s'aligner par défaut sur le style existant.

**MIN-6 — §1(a).** #28 (pictogramme ADR) est rangé dans le bloc « Picking ». Il relève de la consolidation (3.5.1, 3.5.5 et 3.6.5).

---

## 3. Actions demandées au Consultant Blueprint

1. Reclasser #37, #40 et #46, et passer #17 en PO ou « DEC à confirmer » (MAJ-1 à MAJ-4).
2. Recalculer le tableau de répartition, le §1(a) et le §1(b).
3. Corriger le constat et le texte proposé pour #14 (MAJ-5).
4. Ajouter l'anomalie BR-05-003-010 et adapter Q2 (MAJ-6).
5. Reformuler Q15 (MAJ-1).
6. Traiter les mineures MIN-1 à MIN-6.

Une nouvelle relecture QA portera uniquement sur les points ci-dessus.
