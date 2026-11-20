# QA-005 — Relecture de GAP-001 « Dossier consolidé du flux Retour »

> Relecteur : Consultant QA · 2026-11-20
> Livrable : `infrabel-ewm/01-gap/retour/dossier-retour-consolide.md` (+ `.xlsx`), branche `ewm/gap`, commit `38ee989`
> Sources de contrôle :
> - branche `ewm/pm`, `00-pm/inputs/retour/` : `plaud_extraits_retour.md`, `GAP_List_Ronet_05-11.txt`, `Business_Requirements.txt`, `CR_meetings_2026-11-13.txt`, `Blueprint_Retour_Extraits_BPMN_v0.2.txt` ;
> - branche `ewm/blueprint` : draft v0.2 avec le texte de Moustafa, figures `media/`, Blueprint Retour v0.4 au commit `d6694f3`.

## Verdict : **À corriger**

| Gravité | Nb |
|---|---|
| Bloquant | 0 |
| Majeur | 4 |
| Mineur | 6 |

Le travail de collecte est solide et bien sourcé : statuts des BR exacts, citations Plaud fidèles, option 108 / 922 / 122 ouverte partout. Le dossier ne peut cependant pas partir en l'état. Quatre des écarts qu'il reproche au Blueprint Retour v0.4, que j'ai validé, ne sont pas fondés ou sont surinterprétés. L'un d'eux s'appuie sur une « décision » du 18/11 qui n'en est pas une. Moustafa recevrait des reproches erronés contre un livrable validé.

---

## 1. Contrôles conformes

- **Statuts des BR dans la GAP List 05-11 (section 4).** J'ai rapproché par script les 31 citations « onglet + ligne » des 30 BR : chaque ligne citée existe, porte le bon ID et le statut indiqué. C'est le cas notamment pour BR-01-003-110 (Inbound L24), BR-02-002-040 (QM L14), BR-02-002-050 (Outbound L47 et QM L15) et BR-04-002-010-A (Internal L3, « En attente de confirmation business »). BR-06-002-010 et BR-08-010-030 sont bien absents des onglets GAP et présents dans l'onglet AFG.
- **Décisions issues de Plaud.** J'ai vérifié chaque horodatage ou passage des notes cité, et le texte correspond pour D01 à D05, D11 à D14, D16, D17, D19 à D21, D25 à D29 et D41. Les décisions présentées comme proposition ou discussion sont bien classées « Déduit » : D14, D21 et D29.
- **D08.** Le texte cité (imputation de la mitraille, « Blueprint - questions » L25, 30/09) est exact.
- **CR du 13/11.** Ce compte rendu ne contient aucune décision sur le retour, et le dossier ne lui en attribue aucune. C'est correct.
- **Point bloquant 108 / 922 / 122 et type de document de retour.** Ils sont présentés comme non tranchés partout : §1 points 5 et 7, PO01, PO02, PO04, et mention ⚠ sur D09 et D38.
- **C01 (blocage NNN), fondé.** La GAP List 05-11 NNN L5 et Inbound L39 couvrent bien le blocage de toute la livraison : « GAP BR-01-003-020 », FS-16, XL, Analysé. Le point ouvert 9 de la v0.4 est donc à corriger. La v0.4 citait encore la GAP List 27-10, ce que relève E13.
- **Signalement BPv02 / BPv02-PM.** Il est exact : l'export Drive du PM contient les légendes des figures 4 et 5 (flux 1), et la version de la branche contient le texte de Moustafa.
- **Classeur `.xlsx`.** Les volumes correspondent à l'annonce : 42 décisions, 36 points ouverts, 30 BR, 15 étapes, 13 omissions, 6 contradictions, 4 inventions, 22 questions.

## 2. Remarques

### Majeures

**MAJ-1 — I01, §0 « IMG 8 sans légende », §1 point 9 et question 3 : l'origine de l'image 8 est écrite dans la source.**
- **Ce que dit la source.** Dans le draft v0.2 de la branche, l'image 8 suit immédiatement le paragraphe de Moustafa (BPv02 §41) : « …il n'y aura pas de mouvement de stocks pour les articles à retourner vers le fournisseur ou à mitrailler. **Cela concerne ceci dans le BPMN reception 2 :** ».
- **Conséquence.** Le rattachement de la v0.4 à la réception étape 2 n'est pas une invention. La mention « disponibles pour réception 1° étape » désigne la sortie de la branche « Articles acceptés », pas l'origine du flux.
- **Correction attendue.**
  - Retirer I01 et la partie correspondante du §1 point 9.
  - Corriger le signalement du §0.
  - Reformuler la question 3 : « BPMN réception 2 » désigne-t-il le flux 3 (étape 2 Stock) ?

**MAJ-2 — C02 et C06 : la lecture de la figure 12 (image 13) est inexacte.**
- **Ce que dit le dossier.** « BR-06-003-020 est annoté sur "Confirmer l'endroit de sortie", et BR-02-002-050 sur "Confirmer la sortie" ».
- **Ce que montre la figure.** BR-06-003-020 reçoit des liens pointillés depuis « Confirmer la sortie des HU d'expédition de l'entrepôt », depuis « Confirmer l'endroit de sortie » et depuis « Confirmer la fin du chargement ». Le tag de la v0.4 en 5.3.4 est donc conforme à la figure.
- **Ce qui reste juste.** Le texte de BR-06-003-020 (encodage du retrait par le chauffeur milkrun) ne correspond pas à l'étape. Ce constat porte toutefois sur le BPMN, pas sur la v0.4. L'annexe de la v0.4 au commit `d6694f3` reprend d'ailleurs déjà ce texte exact.
- **Correction attendue.** Reformuler C02 en question sur le BPMN (« pourquoi BR-06-003-020 est-il rattaché à ces étapes ? ») et retirer C06.

**MAJ-3 — D15 et C04 : une remarque de séance est érigée en décision qui prévaut sur la GAP List et le blueprint Outbound.**
- **Ce que dit la source.** En P18b [00:34:26], Moustafa dit : « je n'ai pas mis GAP, donc c'est un BR, autant pour moi. Donc ça, c'est pas un GAP ». C'est une remarque sur l'étiquetage de sa propre liste en cours de lecture.
- **Ce que disent les autres sources.**
  - Le texte du BR porte « BR-02-002-050 - GAP – » (draft v0.2 de Moustafa).
  - La GAP List 05-11 (L47) le garde « A clarifier avec business » et pose la question de l'accès du transporteur à SAP.
  - L'onglet AFG L59 le classe GAP.
- **Ce que fait le dossier.** Il classe D15 « Écrit » et fait prévaloir le 18/11, puis en tire la contradiction C04 contre la v0.4. Or la v0.4 déclare justement la qualification ouverte (point ouvert 4).
- **Correction attendue.**
  - Requalifier D15 en point ouvert : « signal du 18/11, à confirmer ».
  - Retirer C04 des contradictions.
  - Garder la question 5 à Moustafa.

**MAJ-4 — C05 : deux périmètres différents sont confondus.**
- **Ce que dit la source citée.** La zone d'attente avec vérification humaine (P18a, notes) porte sur les retraits de stock par statut Z* et la péremption (« 50 000 € de batteries »).
- **Ce qu'en fait le dossier.** La v0.4 (§4) traite la mitraille d'un lot refusé au contrôle qualité, reprise mot pour mot du draft de Moustafa (BPv02 §22). Le dossier le reconnaît lui-même (« Le cas QM stocké n'est pas tranché », PO26), mais le classe tout de même comme contradiction.
- **Correction attendue.** Déplacer C05 vers les points ouverts ou les questions (PO26, question 13). L'absence de la mitraille Z3 dans la v0.4 reste une omission légitime (E03).

### Mineures

- **MIN-1 — D16.** Les segments cités ([00:58:16], [00:59:31]) sont attribués à « Locuteur 1 ». Le dossier indique « Moustafa, Yassine ». Corriger, ou préciser d'où vient l'identification.
- **MIN-2 — §4, BR-06-003-020.** La mention « Absent de G05 » est incomplète : la GAP List 05-11 contient une ligne AFG L181, classée FIT. La signaler comme pour BR-06-002-010 et BR-08-010-030.
- **MIN-3 — I04.** Le sous-titre « validé QA le 20/11/2026 » est exact, puisque la validation QA-004 v2 existe. Ce n'est pas une invention. La remarque sur l'absence de validation métier est pertinente, mais doit sortir de la catégorie « invente ».
- **MIN-4 — C03.** La v0.4 suit la dernière écriture de Moustafa (BPv02 §30, « Pas pertinent »). P16b traite la vérification documentaire en Inbound, pas comme flux retour. Il s'agit plutôt d'une question de périmètre (PO33, question 2) que d'une contradiction.
- **MIN-5 — E01.** E01 liste parmi les « décisions » omises le retour NNN par bon 8000 sans référence (D14), alors que D14 est classée « Déduit ». Le préciser.
- **MIN-6 — D12.** « Refus → clôture » vient de la GAP List NNN L5, mais la ligne NNN L6 de la même liste précise : « Aucune clôture, annulation ou solution de retour n'est arrêtée ». Ajouter un ⚠.

## 3. Pour la contre-revue

Elle portera uniquement sur MAJ-1 à MAJ-4 et MIN-1 à MIN-6, dans le `.md` et le `.xlsx`, qui doivent rester alignés.
