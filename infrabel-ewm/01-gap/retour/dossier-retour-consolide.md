# Flux RETOUR – DC Ronet : dossier consolidé des décisions, points ouverts et contradictions

> Mission GAP-001 (PM → Consultant GAP), demande de Moustafa. Version 0.1 du 20/11/2026, à relire par le QA avant transmission à Moustafa.
> Branche `ewm/gap`, dossier `infrabel-ewm/01-gap/retour/`. Même contenu en tableur : `dossier-retour-consolide.xlsx`.
> Règles appliquées : chaque ligne cite sa source. « Écrit » signifie que la source le dit noir sur blanc ; « déduit » signifie une lecture de notre part, à confirmer. Aucune solution SAP n'est proposée ici. Aucune source ni aucun blueprint n'a été modifié.

## 0. Sources et abréviations

| Code | Source | Emplacement | Date |
|---|---|---|---|
| BPv01 | Blueprint Retour v0.1 (brouillon, Moustafa) | `00-pm/inputs/retour/Blueprint_Retour_v0.1.txt` (n° de ligne du .txt) | 02/11/2026 |
| BPv02 | Draft « Retour Extraits BPMN » v0.2 de Moustafa, **avec texte et 2 commentaires Word** | branche `ewm/blueprint`, `03-blueprint/retour/source_Retour_Extraits_BPMN_Draft_v0.2.docx` (n° de paragraphe python-docx) | 02/11/2026 |
| BPv02-PM | Export Drive du même document, côté PM | `00-pm/inputs/retour/Blueprint_Retour_Extraits_BPMN_v0.2.docx` | 02/11/2026 |
| IMG n | Figures BPMN extraites du draft v0.2 | `ewm/blueprint`, `03-blueprint/retour/media/image<n>.png` | – |
| BR | Liste maître des BR (« Business Requiremens eWM 2-0 (2) ») | `Business_Requirements.txt`, [onglet] L<n> ; FT = onglet « BR - Feuille de travail » | – |
| BRR | BR liées au flux Retour (BR directes, BR indirectes, questions) | `BR_Flux_Retour.txt`, [onglet] L<n> | 02/11/2026 |
| G05 | GAP List Ronet 05-11 (**la plus récente**) | `GAP_List_Ronet_05-11.txt`, [onglet] L<n> ; AFG = onglet « Analyse Fit-Gap » | 05/11/2026 |
| G27 | GAP List Ronet 27-10 | `00-pm/inputs/GAP_List_EWM2.0_Ronet_27-10.xlsx` | 27/10/2026 |
| PD / PO | Plan de décisions / Points ouverts GAP List v0.1 (construits sur la G27) | `Plan_decisions_…txt`, `Points_ouverts_…txt` | 03/11/2026 |
| FU / TFU | Follow-up Ronet / Tâches Follow-up 05-11 | `Follow-up_Ronet.txt`, `Taches_Follow-up_Ronet_05-11.txt` | 05/11/2026 |
| CR13 | Comptes rendus des meetings du 13/11 | `CR_meetings_2026-11-13.txt` | 13/11/2026 |
| P16a | Plaud « 11-16 Revue : Priorisation par aire des réceptions, mise en stock et litiges » | `plaud_extraits_retour.md` [horodatage] | 16/11/2026 |
| P16b | Plaud « 11-16 Atelier de priorisation : Gaps inbound et réception » | idem | 16/11/2026 |
| P17 | Plaud « 11-17 Revue des GAP : Priorisation, flux Interline et réception NTM » | idem | 17/11/2026 |
| P18a | Plaud « 11-18 Atelier : Gaps internes et NIT-LN priorisés » (« NIT-LN » / « NITNN » : graphie de la transcription, très probablement le flux NNN, **déduit**) | idem | 18/11/2026 |
| P18b | Plaud « 11-18 Revue des BR Outbound » | idem | 18/11/2026 |
| P19 | Plaud « 11-19 Tickets SAP/EWM » | idem | 19/11/2026 |
| BPO | Blueprint Outbound FR Final v1.0 | `00-pm/inputs/Blueprint_Outbound_FR_Final_v1.0.txt` (n° de ligne) | – |
| BPI | Blueprint Immatriculation FR | `Blueprint_Immatriculation.txt` (n° de ligne) | – |
| v0.4 | Blueprint Retour v0.4 (objet de la section 6) | `ewm/blueprint`, commit d6694f3, `03-blueprint/retour/Blueprint_Retour_FR_v0.4.md` (n° de ligne) | 20/11/2026 |

**Signalements sur les sources :**
- **BPv02-PM ≠ BPv02.** L'export Drive du PM ne contient que les titres et les légendes. Le fichier de la branche `ewm/blueprint` contient en plus le texte rédigé par Moustafa (paragraphes 17-18, 21-22, 27, 30, 41, 54, 66, 73, 85) et deux commentaires Word du 02/11. Ce sont deux versions différentes du même document. Ce dossier s'appuie sur la version `ewm/blueprint`.
- **Figures du flux 1 absentes.** Les figures 4 et 5 de BPv02 (vérification documentaire : check-list, motifs de refus, document de refus) ne figurent dans aucune image de `media/`. Leur contenu n'est connu que par les légendes et par BPv01 l.60-66.
- **IMG 8 sans légende.** L'image 8 (incidents, mouvement 108, décision acheteur) ne correspond à aucune légende de BPv02. Son flux d'origine n'est pas établi.
- Les onglets « GAP List Retours » de G05 et de G27 sont **vides**. L'onglet BR « 8 BR Retour » ne contient qu'une ligne : « Qui s'occupe des retours? Comment? ».
- Plaud : aucun enregistrement avant le 12/11. La « session Retours » prévue la semaine du 2/11 (PD Synth. L53 ; FU « Blueprint » L9, L15) n'a laissé aucune trace écrite.

## 1. Résumé

1. **Décidé, sur le principe :** un article refusé en réception n'est ni réceptionné (pas de 109 ; pas de 107 pour une ligne en litige) ni mis en stock tant que l'acheteur n'a pas décidé (P16a [01:15:04] ; P16b [01:06:35] ; G05 Inbound L16).
2. **Décidé :** la décision de l'acheteur oriente vers le retour fournisseur ou la mitraille, et vers la réparation par le fournisseur au DC pour un refus QM. Les HU attendent dans la lane « Litige » (zone 990) (IMG 5-10 ; P16a [01:16:19]).
3. **Décidé :** pas d'imputation pour la mitraille d'un article non réceptionné ; centre de coût du DC si l'article est en stock et que le DC est responsable (BR « Blueprint - questions » L25, 30/09). Pour une mitraille NNN refusée : ni 551 ni transport (P18a [01:43:33]).
4. **Décidé :** un article non commandé est un litige, sans entrée en stock, et il est renvoyé (P16a [01:11:15]-[01:12:31]). Pour le NNN : blocage de toute la livraison et 101 seulement sans litige ; pas de 102 ni de 122 (P18a [01:27:11]-[01:38:40] ; G05 NNN L5).
5. **Ouvert, et bloquant :** comment tracer et sortir un retour fournisseur. Les options en présence : AS-IS (mail + 108) ou retour standard (922), ou 122, ou bon 8000 / bon 8* sans référence. Ce choix fixe aussi le type de document de retour (G05 Inbound L24, QM L14 ; PD L5, L100 ; P16a [01:18:53]).
6. **Contradiction 1 – périmètre :** l'E2E met le « flux retour » hors scope (IMG 2). Le draft de Moustafa précise « retours de matériel défectueux vers Schaerbeek » (BPv02 §17). La v0.1 incluait le refus à la vérification documentaire et les retours internes, la v0.4 les exclut.
7. **Contradiction 2 – mouvement :** « pas de mouvement de stock » (BPv02 §41) ; « 108 » (IMG 8, G05 Inbound L24) ; « 922 visible sur le PO » (BPv02 §66) ; « 122 » (standard cité, G05). Aucune source ne tranche.
8. **Contradiction 3 – mitraille :** « consommation automatique dans la bin mitraille » (BPv02 §22, repris en v0.4 l.200) contre « vérification humaine, zone d'attente » pour les retraits de stock (P18a, notes). La mitraille Z3 de stock (BR-04-002-010-A, vague dédiée) est absente de la v0.4.
9. **Trou 4 – où isoler :** l'isolement en litige à l'étape 1 ou à l'étape 2 fait l'objet d'un désaccord (P16b [01:18:39]-[01:27:44]). La v0.4 rattache l'IMG 8 (sans légende) au flux 3 « étape 2 » sans preuve. Elle affirme aussi (point ouvert 9) que le blocage de livraison NNN n'a ni BR ni GAP, alors que G05 NNN L5 / Inbound L39 (GAP BR-01-003-020, FS-16, XL) le couvrent.
10. **Trou 5 – retours labo / échantillons et retours entrants :** les sujets BR-02-000-010/020, BR-02-001-010, les mouvements 331/332, 243A/243L, la destruction des échantillons, l'ASN des retours labo et immatriculation, le retour d'immatriculation (BPI §4) et BR-08-010-030 sont dispersés et non traités dans la v0.4.

## 2. Décisions

Quand deux sources se contredisent, la plus récente prévaut, mais les deux sont gardées et la ligne est signalée ⚠.

| ID | Sujet | Décision (au plus près de la source) | Source exacte | Date | Qui | Confiance |
|---|---|---|---|---|---|---|
| D01 | Pièces en litige à la réception | Les pièces en litige ne sont ni réceptionnées (pas de 109) ni mises en stock avant la décision de l'acheteur. Chaîne : zone litige → plainte → décision acheteur (gestion des plaintes présentée par Bernard). | P16a, notes + [01:15:04]-[01:17:30] | 16/11/2026 | Moustafa (présentation) ; Christophe valide « le reste » | Écrit |
| D02 | Pas de 107 pour une ligne en litige | « il n'y a pas de 107 pour une ligne en litige ni pour les NITNN ». Le 107 ne porte que sur les quantités conformes. | P16b [01:05:57], [01:06:35], [01:12:44] ; G05 Inbound L16 (BR-01-003-020-D, Analysé) ; G05 Inbound L39 | 16/11/2026 (G05 : 05/11) | Moustafa ; owner Bernard | Écrit (P16b) ; proposition TO-BE en G05 |
| D03 | Suites de la décision (sur-livraison) | Surplus accepté → ligne débloquée, réceptionnée et rangée. Surplus refusé → quantités attendues en stock, surplus en litige « pour retour fournisseur ou mise en mitraille ». Tout refusé → tout en litige, puis retour ou mitraille. | P16a [01:16:19]-[01:17:27] ; IMG 9 | 16/11/2026 | Moustafa | Écrit (solution présentée, sans objection notée) |
| D04 | Article non commandé | Détecté comme anomalie et placé en litige, sans entrée en stock ; plainte au fournisseur. Pour le garder, Replenishment modifie d'abord le PO. Seule la ligne est bloquée. « Dans tous les cas, vous le renvoyez. » ⚠ Moustafa note que cela change « ce que nous on avait compris à l'époque ». | P16a, notes + [01:11:15]-[01:12:31] | 16/11/2026 | Métier (Locuteur 3), confirmé par Moustafa | Écrit |
| D05 | Sur-livraison ASN/EDI | Le message bloquant passe en message d'information : « Cette adaptation de paramétrage est retenue. » | P16a, notes (§ Sur-livraisons) | 16/11/2026 | Non identifié | Écrit (notes seulement) |
| D06 | Décision acheteur : issues | Retour fournisseur / Mitraille dans tous les flux de réception. « Réparation par fournisseur au DC » seulement après un refus QM (flux 2B). « Articles acceptés » → réception 1re étape (IMG 8). | IMG 7, 8, 9, 10 ; BPv01 l.84-92 | BPMN (non daté) | BPMN projet | Écrit (BPMN) |
| D07 | Lieu d'attente | Les HU refusées attendent dans la lane « Litige » de la staging zone « 2ième étape », « actuellement zone 990 ». | IMG 5, 6, 8, 9, 10 | BPMN | BPMN projet | Écrit (BPMN) |
| D08 | Imputation de la mitraille d'un article refusé | Article en cours de réception : aucun mouvement, aucune imputation. Article déjà en stock, sous la responsabilité du DC : centre de coût du DC ; sinon, recherche du centre de coût. | BR [Blueprint - questions] L25 | 30/09/2026 | « suite discussion avec Phil/Manon » | Écrit |
| D09 | Mitraille / retour sans mouvement si non réceptionné | « comme les articles ne sont pas réceptionné, le 109 pas effectué, il n'y aura pas de mouvement de stock » pour les articles à retourner ou à mitrailler. ⚠ Voir D10 et le point ouvert PO01 (108). | BPv02 §41 ; BPv02 §54 (NNN : « sans mouvement de stock ») | 02/11/2026 | Moustafa | Écrit (draft), mais concurrencé par l'option 108 de G05 (05/11) |
| D10 | Mitraille d'un lot QM stocké | « toutes les quantités (lot entier) ou les quantités partielles refusé doivent être envoyées dans l'emplacement dédié à la mitraille. La consommation des articles dans la bin mitraille est automatique. Le flux mitraille après le contrôle qualité est fini. » ⚠ Voir D19. | BPv02 §22 | 02/11/2026 | Moustafa | Écrit (draft) |
| D11 | Mitraille NNN refusée | « si on a décidé de mitraille, il ne faut pas essayer d'avoir un transport… il n'y a pas de 551 ». Réponse de Moustafa : « On est d'accord ». | P18a [01:43:33]-[01:43:47] (notes au conditionnel) | 18/11/2026 | Locuteur 4, Moustafa | Écrit |
| D12 | NNN : blocage et 101 | Pas de 107 ni de 109. 101 automatique quand toutes les HU sont contrôlées et déposées sans litige. Un litige ouvert bloque toute la livraison (blocage groupé). Acceptation → déblocage sans nouveau contrôle ; refus → « retour fournisseur ou mitraille de toute la livraison ». | P18a [01:19:09], [01:27:11]-[01:38:24] ; P17 [00:48:34], [00:54:24] ; G05 NNN L5, Inbound L39 (GAP BR-01-003-020, FS-16, XL, Analysé) ; IMG 10 | 18/11/2026 | Moustafa | Écrit |
| D13 | NNN : pas de mouvement retour | Le 101 n'ayant jamais été fait, « il n'y a jamais… comme un 102 ou un 122, un retour fournisseur ». | P18a [01:38:40] | 18/11/2026 | Locuteur 4 | Écrit |
| D14 | Retour fournisseur NNN : principe | Outbound delivery / bon 8000 sans référence, portant les HU (pas de stock), mis dans un transport (l'enlèvement compte comme un transport), clôturé avec la signature du fournisseur. | P18a [01:41:05]-[01:41:43] ; G05 NNN L6 (bon 8* sans référence VL01NO cité comme standard) | 18/11/2026 | Locuteurs 4 et 5 | Déduit (« il nous paraît logique » ; flux à schématiser, voir PO05) |
| D15 | HU refusée enlevée par le transporteur | « Ce point est un BR et non un gap. » ⚠ G05 Outbound L47 : « A clarifier avec business » ; AFG L59 : GAP ; BPO l.832 : « BR-02-002-050 – GAP ». | P18b [00:34:01]-[00:34:26] | 18/11/2026 | Moustafa | Écrit (P18b plus récent que G05 et BPO) |
| D16 | Expédition : exclusion des HU en litige | Le système ne doit pas sélectionner automatiquement les HU d'une livraison en litige, même déjà déposées (spécifique). | P17 [00:58:16]-[00:59:31] | 17/11/2026 | Moustafa, Yassine | Écrit |
| D17 | Localisation des HU en litige | Toutes les HU doivent être localisables, y compris celles en litige ; classé Must. | P16b [01:18:35], [01:32:24], [01:32:44] | 16/11/2026 | Locuteur 6, Moustafa, Locuteur 3 | Écrit |
| D18 | Mitraille de stock Z3 | Vague dédiée sur le statut Z3, sans validation du coordinateur ; liste des statuts au Build. | BR L79 (BA, 03-09-2026) ; G05 Internal L3 (« En attente de confirmation business » ; G27 : « À analyser ») | 03/09/2026 (G05 : 05/11) | Discussion avec le Business ; Replenishment (liste des statuts) | Écrit (03/09), mais à reconfirmer selon G05 |
| D19 | Retrait Z* : vérification avant élimination | Vérification humaine avant élimination (risque cité : 50 000 € de batteries par mois) ; la MIGO 551 est une sortie comptable, d'où « le groupe a donc retenu le principe d'une zone d'attente ». | P18a, notes | 18/11/2026 | Non identifié | Écrit (notes) |
| D20 | Zone de clarification Z* | Zone de clarification générale pour tous les statuts Z*, distincte de la zone litige de réception ; Must. | P18a [00:08:16]-[00:09:28] + notes | 18/11/2026 | Locuteur 4, Moustafa | Écrit (la transcription est ambiguë, les notes concluent à une zone distincte) |
| D21 | Mitraille Z3 : job + vague (gap) | Un job sélectionne les articles, une vague de scrapping séparée est créée, dépôt en zone dédiée, puis un job sort les articles du stock ; « ça n'existe pas actuellement en standard ». | P18a [00:02:42]-[00:03:38] ; P17 (Bernard : à présenter « comme une proposition ») | 18/11/2026 | Moustafa | Déduit (proposition) |
| D22 | Sortie distincte pour la mitraille | « Annulé – Hors scope eWM2.0. Imputation IM ». ⚠ Onglet « 5 BR Prep expédition » L4 : « A rediscuter sur le flux "retour" ». | BR FT L169 | Non daté | – | Écrit |
| D23 | Quarantaine | Possibilité de sortir les articles de la BIN et de les mettre en 917 le temps de l'analyse ; blocage avec traçabilité (qui, quand, pourquoi). | BR L76 (BR-04-001-020-A, 01-09-2026) ; G05 QM L17 | 01/09/2026 | Après discussion avec Jonathan | Écrit |
| D24 | Base des litiges | Tuile Fiori listant chaque litige, filtrée par équipe : « Oui » (JST). « Le retour d'info ne sera pas géré via cette base de données ». | BR L4 (BA, 25-06 et 29-06-2026) | 25/06 et 29/06/2026 | Proposition BRM, accord JST | Écrit |
| D25 | Libellé « gestion des litiges » | Incident déclenché par un code d'exception (principe de la notification QM) ; libellé « gestion des litiges » ; priorité « super nice to have ». | P17 [00:36:49]-[00:37:11] | 17/11/2026 | Bernard | Libellé : écrit ; priorité : déduit (avis de Bernard) |
| D26 | Refus à la vérification documentaire | Check-list → motif enregistré → incident / plainte → document de refus imprimé pour le transporteur, même sans document de référence. Lot de contrôle fournisseur absent ou refusé → refus de déchargement. | P16b [00:08:10], [00:17:41], [00:20:17], [00:20:50] ; G05 Inbound L3-L4 (BR-01-001-010-A/B, Analysé, XL) ; IMG : aucune (figures 4-5 absentes) | 16/11/2026 | Moustafa (présenté) | Écrit (solution présentée) |
| D27 | Ordre des contrôles | Contrôles documentaires et d'inspection avant l'autorisation de décharger, conditionnement après : « Déroulement retenu ». | P16b, notes [00:27:13]-[00:27:34] | 16/11/2026 | Non identifié | Écrit (notes) |
| D28 | Code signature | Associé à tous les PO de la livraison, pour être retrouvé en cas de litige avec le fournisseur ou le transporteur. ⚠ BR L12 : code par livraison ; G05 Inbound L8 : rattaché au PO/STO. | P16b [00:55:06]-[00:55:22] | 16/11/2026 | Locuteurs 4 et 1 | Écrit |
| D29 | Acceptation avec réserve | La marchandise suit le flux normal, la réserve est tracée, et le suivi se fait dans « la base plainte et litige ». | P16b [00:22:05]-[00:22:39] | 16/11/2026 | Locuteur 6, Moustafa | Déduit |
| D30 | Retours COPO non enlevés | « Annulé – Hors scope » : le mag 2/8 fait un STO de retour vers le répartiteur. Remarque de la source : « tous les autres flux "retour" sont redirigés vers Schaerbeek… ==> STO normal ». | BR FT L112 ; BRR [Questions] L15 | Non daté | Source : Christophe | Écrit |
| D31 | Retours SP (NL, MRP) | « Annulé – Hors scope – Flux MRP en amont de eWM ». | BR FT L136 ; BRR [Questions] L16 | Non daté | – | Écrit |
| D32 | Retour immatriculation : document COPO | « Annulé – n-a pour ce projet / A rediscuter avec garage draisine ». | BR FT L55 ; BRR [Questions] L14 | Non daté | – | Écrit |
| D33 | Retours PO vers le fournisseur (non-conformité) | Annulé, « Repris dans Num ligne 223 » (BR-06-002-010 selon l'agent de lecture ; BPv01 l.267 dit « famille BR-02-002 / BR-01-003-110 ») ⚠ rattachement à vérifier. | BR FT L154 ; BRR [Questions] L18 | Non daté | Source : Christophe | Écrit (statut) ; rattachement : déduit |
| D34 | « Qui s'occupe des retours ? » | Repris dans BR-08-010-030 (HU non nomenclaturées en cross-dock vers Sch) ; « A traiter dans les flux "retour" ». Usage précisé le 12-06 : « HU créée en amont (ex retour) pour être utilisée dans l'EDI ». | BR FT L150, L209 ; BR L202 | 12/06/2026 | Source : Mathieu Raison (FT L150) | Écrit |
| D35 | Hors scope E2E | « Hors Scope : flux retour / flux vente de mitraille » sur l'E2E V0.5. Précision de Moustafa : « Le flux retour concernant les retours de matériel défectueux vers Schaerbeek, est hors scope. Le flux vente de mitraille est également hors scope. » | IMG 2 ; BPv02 §17-18 | 02/11/2026 | Moustafa | Écrit |
| D36 | Vérification documentaire et retour | Flux 1 : « Pas pertinent » pour le retour. ⚠ BPv01 l.45 et l.58-78 l'incluaient (F1). | BPv02 §30 | 02/11/2026 | Moustafa | Écrit (BPv02 plus récent que BPv01, même jour) |
| D37 | Retour d'un échantillon QM refusé (stocké) | Les échantillons du labo reviennent au DC, identifiés comme refusés QM. Le coordinateur doit en avoir la visibilité, et le système doit indiquer « retour fournisseur ou mitraille ». Rangement en emplacements qualité, puis déclenchement du retour par le coordinateur : création du bon 8*, prélèvement des quantités refusées, consolidation avec le lot d'inspection. | BPv02 §21 ; IMG 3, 5, 6 | 02/11/2026 | Moustafa | Écrit (draft) |
| D38 | Retour fournisseur : document lié au PO | « Le déclenchement du retour fournisseur sur la livraison entrante du fournisseur externe va créer un bon 8* lié au PO initial. A la sortie marchandise de ce bon 8*, le mouvement 922 sera alors visible sur la PO. » ⚠ Le 922 est une option ouverte en G05 (PO01). | BPv02 §66 | 02/11/2026 | Moustafa | Écrit (draft), contredit par l'ouverture en G05 |
| D39 | Identification au chargement | « Le magasinier saura quel HU est lié au retour grâce au numéro de transport ainsi que le(s) Numéro d'HU. » | BPv02 §73 | 02/11/2026 | Moustafa | Écrit (draft) |
| D40 | BR-02-002-020 couvert par le cockpit | « Le cockpit présenté permet de couvrir ce BR avec le suivi des étapes de refus et le suivi des échantillons ou lot retourné vers le DC depuis le labo. » | BPv02 §85 | 02/11/2026 | Moustafa | Écrit (draft) ; G05 QM L12 reste « A clarifier avec business » |
| D41 | Ticket « quantités refusées » | Ticket clôturé : saisir les quantités refusées avant les acceptées donnait un résultat faux ; SAP n'a pas répondu. | P19, notes + [00:35:57] | 19/11/2026 | Nicolas, Moustafa | Écrit |
| D42 | Retour d'immatriculation : parcours | Transfert du magasin du lieu d'immatriculation vers le magasin A avec livraison entrante, vérification documentaire, puis réception directe en 2e étape, puis stock. ⚠ BPI l.20 mentionne les « première et deuxième étapes de réception ». | BPI l.49-57 | Non daté | Blueprint Immatriculation | Écrit |

## 3. Points ouverts

| ID | Sujet | Question | Options en présence | Source | Owner connu |
|---|---|---|---|---|---|
| PO01 | Traçage et sortie du retour fournisseur (BR-01-003-110) | Quel mode retenir pour tracer le retour après refus de l'acheteur, et comment tracer l'acceptation ou le refus de l'acheteur ? | (a) AS-IS : mail + mvt 108 ; (b) flux retour standard EWM, « gap facturation avant sortie marchandises », mvt 922 ; (c) standard cité : 122 ou livraison de retour ; (d) aucun mouvement si non réceptionné (BPv02 §41) | G05 Inbound L24 ; PD L5 (prio 1), PD Synth. L53 ; PO L12 ; BPv02 §41, §66 | Bernard (owner) ; Replenishment |
| PO02 | Document de retour (BR-02-002-040) | Bon 8000 lié au PO, bon d'expédition sans référence 8* portant le n° de PO, ou livraison de retour référencée au PO ? Qui le crée (coordinateur DC selon 5C), qui transmet la référence (Replenishment selon le BR) ? | Bon sans ref 8* (IMG 12) / bon 8000 (BR L53) / bon 8* lié au PO + 922 (BPv02 §66) | G05 QM L14 (« Standard », à aligner avec GAP BR-01-003-110) ; PD L100 (prio 1, bloquant) ; PO L121 ; BPv01 Q07 | Replenishment |
| PO03 | Génération des bons de livraison liés aux litiges | Comment générer les bons de livraison (retour) issus des litiges ? | – | P16a, notes + [01:18:53] (« à part la génération des bons livraisons qu'il faut clarifier ») | Non mentionné |
| PO04 | Moment du 922 | Le 922 est-il déclenché après DU ou après l'exécution du retour fournisseur dans EWM ? | Après DU / après exécution EWM | BPv02, commentaire Word (Moustafa, 02/11 10:27) | Moustafa |
| PO05 | Retour fournisseur NNN | Circuit à schématiser (« il n'y a pas de stock retour ») ; VL60 utilisé aujourd'hui ? Gap ou procédure ? | Bon 8000 / outbound sans référence associé aux HU, enlèvement = transport, mail de suivi ; standard : rejet avant 101, 122 après 101, bon 8* VL01NO | P18a [01:40:43]-[01:43:24] (action) ; G05 NNN L6 ; PD L111 (prio 1) ; PO L141 | **Moustafa** (action « Revoir et schématiser le flux de retour fournisseur pour les NIT-LN ») |
| PO06 | Isolement du litige : étape 1 ou étape 2 | À quelle étape isoler physiquement la sur-livraison / l'article litigieux ? | (a) étape 1 : HU en zone litige jusqu'à la réponse de Replenishment ; (b) étape 2 : on ouvre le colis, on isole l'article, le reste suit | P16b, notes (« Désaccord ») ; [01:18:39], [01:21:14], [01:23:02], [01:26:57]-[01:27:44] | – |
| PO07 | Étendue du blocage et des HU litige | Bloquer toute la ligne ou une partie ? Une HU litige par article ou une seule ? | « on bloque que la ligne » / HU litigieuses par article | P16b [01:22:25]-[01:24:43] ; G05 Inbound L39 (« on bloque la ligne de la livraison concernée globale ») | – |
| PO08 | Repérage visuel du litige | Indication sur l'étiquette (couleur, pictogramme) pour signaler une sur-livraison ou un litige ? | – | P16b [01:23:02] + notes | – |
| PO09 | Étiquette du matériel refusé (BR-02-002-030) | Étiquette physique ou information système ? Quel contenu, à quel moment ? | Formulaire spécifique / étiquette HU PPF / info système | BPv02, commentaire Word (02/11 12:13) ; G05 QM L13 ; PO L120 ; BPv01 Q09 | Business |
| PO10 | Scan de la HU refusée à l'enlèvement (BR-02-002-050) | Le chargement RF sur TU avec porte suffit-il ? Le transporteur a-t-il accès à SAP ? | TU + porte (standard) / guidage HU par HU | G05 Outbound L47, QM L15 ; PO L74, L122 (doublon D8 de PD) ; à confronter à D15 | Business |
| PO11 | Étapes au scanner (BR-02-002-020) | Quelles étapes de refus et de renvoi guider au scanner ? Le cockpit suffit-il (D40) ? | – | G05 QM L12 ; PO L119 ; BPv02 §85 | Business |
| PO12 | Canal / objet litige commun (BR-01-003-100) | Base de litiges spécifique ou avis qualité Q2 ? Le GAP est-il confirmé ? SLA ? | Base spécifique / Q2 ; SLA évoqués : réponse 48 h, traitement 7 jours | G05 Inbound L22 ; PD L4 (prio 1, bloquant) ; PO L10 ; P16a [01:13:44], [01:14:21] | Bernard ; Replenishment |
| PO13 | Démo du litige overdelivery (BR-01-003-020-F) | Replenishment valide-t-il la démo BRM ? | – | G05 Inbound L18 ; PD L9 ; PO L7 | Replenishment |
| PO14 | Notification à la DU QM (BR-02-000-020) | Destinataires, canal, contenu de la notification de refus vers l'acheteur et le DC ? | Mail / tuile Fiori / canal litiges | G05 QM L8 ; PO L115 | QM / Replenishment |
| PO15 | Cycle de vie des échantillons | Consommation, destruction ou retour ? Labo interne ou externe ? Cas des 2 échantillons ? Mouvements 331/332 automatiques entre 243A et 243L ? | – | G05 QM L2-L5, L7, L9, L23 ; PO L109-L116, L130 ; PD anomalie A7 (332 vers 243L ou 243A) | QM / Labo |
| PO16 | Échantillons détruits | La ligne « pièces gratuites » dans le PO est-elle la règle, et qui la crée ? | – | G05 QM L26 ; PO L133 | TOM |
| PO17 | Refus au déchargement → TOM | Le TOM veut-il l'information, et par quel canal ? | – | G05 QM L22 ; PO L129 | TOM |
| PO18 | Lien échantillon retourné ↔ PO 45* | Comment relier dans SAP le retour contrôle Q au PO 45xxx initial ? | Réconciliation par 917 / RS / … | IMG 5 (annotation) ; BPv01 Q15 ; v0.4 point ouvert 2 | – |
| PO19 | ASN pour les retours labo et immatriculation | « on aura l'équivalent des ASN pour les retours de façon encore discuter ». La sélection à la réception doit couvrir ces retours. | ASN retours / HU pour les STO | P16b [00:12:21], [00:43:45]-[00:44:40] | – |
| PO20 | Retour d'immatriculation | Qui crée le document de retour (DC ou atelier / garage Draisine) ? Quel document de référence ? Réception 1+2 étapes ou 2e seule ? | – | BPI l.49-50 ; fiche_capture_meeting_2026-11-03 ; BPI l.20 vs l.55 | DC / atelier (à déterminer) |
| PO21 | Mitraille Z3 / retraits Z* | Déclencheur, fréquence, destination ? Séquence IM/EWM (job IM → 551 → bon 8000 → vague, ou EWM d'abord) ? Liste des statuts ? | Job IM / EWM d'abord ; destination par type de Z | G05 Internal L3 ; PO L86 ; P18a [00:04:56]-[00:08:11] | Replenishment (liste des statuts) |
| PO22 | Statut Z3 et mouvements de scrapping | Le statut Z3 bloque-t-il des mouvements de scrapping ? Faut-il un développement ? | Changer le statut temporairement | P17 [00:06:16]-[00:07:06] | Moustafa, Bernard (à vérifier en FA) |
| PO23 | Traitement des vagues de mitraille | Comment les magasiniers traitent-ils les vagues ? | File dédiée (Bernard) | P17, notes [00:07:15]-[00:07:52] | – |
| PO24 | Statut Z5 / retours CLI | Comment traiter les articles supprimés qui reviennent d'un CLI ? | Rapport BI LSI existant | P18a [00:04:41] + notes | – |
| PO25 | Statuts Z2/Z3/Z5/ZD (BR-07-005-070) | Quel traitement par statut ? Tout va-t-il d'office à la mitraille ? | Par statut / cas par cas Replenishment | G05 Reporting L12 ; PO L102 | BA ; Christophe |
| PO26 | Mitraille : « automatique » ou vérifiée | La consommation dans la bin mitraille est-elle automatique (BPv02 §22) ou soumise à vérification humaine en zone d'attente (P18a) ? Les deux cas (lot QM refusé / retrait Z*) sont-ils traités pareil ? | Automatique / zone d'attente + vérification | BPv02 §22 ; P18a notes | – |
| PO27 | Non-conformité en stock (BR-04-001-020-B, « BR 90 », « 80-20 ») | Qui statue, sur quel objet, avec quel workflow ? La partie B (communication avec Replenishment) est-elle dans le blueprint ? | Q3 + blocage / workflow litiges ; photos seules | G05 Internal L2, QM L18 ; PO L85, L125 ; P18a [00:55:09]-[01:08:08] | Gilles Moerenhout, Delphine Demoulin, Replenishment ; Christophe (question posée) |
| PO28 | Indicateur de motif de blocage | Comment le coordinateur sait-il qu'il doit isoler une pièce, et pourquoi ? | Indicateur « envoyer en gestion des litiges » | P17 [00:38:06]-[00:38:27] | « à discuter » |
| PO29 | Rapport des litiges par ligne de PO (BR-07-002-030) | Quelles sources agréger (check-list, 107, 109) ? Pour quels utilisateurs ? | – | G05 QM L21 ; PO L128 ; BPv01 Q17 | Replenishment |
| PO30 | Reporting des camions refusés (BR-07-002-020) | Contenu, fréquence, destinataires ? | – | G05 Reporting L6 (dépend de GAP BR-01-001-010-A) ; BPv01 Q16 | – |
| PO31 | Réception forcée / partielle NNN | Peut-on forcer manuellement, alors que cela contredirait les règles admises ? | – | P18a [01:29:28]-[01:29:49] | Moustafa (relecture du blueprint) |
| PO32 | Réparation par le fournisseur au DC | Fait-elle partie du flux retour ? Aucune BR ; détail non modélisé (IMG 7 seulement). | – | IMG 7 ; BPv01 Q05 | – |
| PO33 | Périmètre « flux retour » | Portée exacte de l'annotation E2E ; sens de la phrase tronquée « Le flux retour qui est hors s » ; refus documentaire, retours internes et HU non emportées dans ou hors du blueprint Retour ? | – | IMG 2 ; BPv02 §17, §27, §30 ; BPv01 Q01, Q02 ; BRR [Questions] L4-L7 | Moustafa |
| PO34 | HU prévues mais non emportées | Faut-il une BR ou un GAP dédié (retour en stock) ? | – | BPO l.845, l.874-885 ; BRR [Questions] L7 ; BR-06-003-020/-030 | – |
| PO35 | BR-08-010-030 et BR-06-002-010 sans ligne GAP | Ces BR, explicitement « retour » (FT : « A traiter dans les flux "retour" » ; « ex : retour litige fournisseur »), n'ont aucune ligne dans G05, ni dans PD/PO. AFG : GAP (L207) et FIT (L180), couverture à confirmer. | – | G05 AFG L180, L207 ; BR L175, L202 | – |
| PO36 | Qualification BR-02-002-010 / -040 | « Standard » en G05 (AFG : FIT) mais « Gap » en FT, et BR-02-002-040 est classé prio 1 bloquant en PD. | Standard / Gap | G05 QM L11, L14 ; FT L161, L163 ; PD L100 | – |

## 4. BR du retour

Statut GAP List 05-11 (G05), avec la 27-10 (G27) seulement si elle diffère.

| BR | Texte (court, fidèle) | Statut G05 (onglet, ligne) | G27 si différent | Décisions / points liés |
|---|---|---|---|---|
| BR-01-001-010 | Check-list d'acceptation/refus d'une livraison, traçabilité des motifs de refus | Inbound L3 (-A) et L4 (-B) · Analysé · Gap · Enhancement + Form · XL · Bernard ; AFG L7 GAP | = | D26, D27 ; PO30, PO33 |
| BR-01-001-030 | Identifier le matériel refusé au contrôle fabricant (B678/0101) pour refuser le déchargement | Inbound L5 · Analysé · Gap · App custom · XL | = | D26 |
| BR-01-001-070 | Code signature aléatoire à la check-list, retrouvable en cas de litige | Inbound L8 · Analysé · Gap · Enhancement + Form · XL (code rattaché au PO/STO) | = | D28 |
| BR-01-003-020-D | Overdelivery : 107 seulement sur les lignes correctes, pas pour l'article en litige | Inbound L16 · Analysé · Gap · Enhancement · M | = | D02 |
| BR-01-003-020-F | Overdelivery : litige créé automatiquement (PO, article, qté supp., localisation) | Inbound L18 · Analysé · Gap · Enhancement + Workflow · L · Replenishment | = | D01, D03 ; PO13 |
| (famille BR-01-003-020) | Anomalies NNN : blocage de toute la livraison et de ses HU ; refus → clôture, retour fournisseur ou rebut | Inbound L39 et NNN L5 · Analysé · Gap · Enhancement · XL · FS-16 | = | D12 ; contredit v0.4 point ouvert 9 |
| BR-01-003-080 | Archivage des documents de réception scannés sur le PO (utile en litige) | Inbound L21 · Analysé · Gap · Report (job) · S | = | – |
| BR-01-003-100 | Canal de communication « gestion des litiges » réception ↔ Replenishment, historique par PO | Inbound L22 · Analysé · Gap · Enhancement + Workflow · L · « GAP à confirmer avant ajout » | = | D24, D25 ; PO12 |
| **BR-01-003-110** | Tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou partie, pour documenter un litige de facturation | Inbound L24 « GAP BR-01-003-110 (à requalifier) » · Analysé · Couvert par **vide** · Enhancement · M · Bernard · 2 options 108 / 922 ; AFG L37 GAP | = | PO01, PO02, PO04 |
| BR-02-000-010 | Accepter/refuser tout le lot sans réintégrer les échantillons envoyés au labo | QM L7 · À analyser · Gap · Config/Enhancement (à trancher) | = | D37 ; PO15 |
| BR-02-000-020 | Notification du contrôleur vers l'acheteur et le DC en cas de refus | QM L8 · À analyser · Gap · Workflow/Output | = | PO14 |
| BR-02-001-010 | Tracer l'envoi des échantillons DC ↔ labo (flux physique = flux SAP) | QM L9 · À analyser · Gap – HU managed | = | PO15, PO18 |
| BR-02-002-010 | HU pour le retour fournisseur, identifiées dans EWM tant qu'elles sont au magasin | QM L11 · À analyser · **Standard** · AFG L55 FIT (FT : Gap) | = | PO36 |
| BR-02-002-020 | Étapes de refus et de renvoi guidées au scanner | QM L12 · A clarifier avec business · Gap – HU managed | = | D40 ; PO11 |
| BR-02-002-030 | Étiquette du matériel rebuté (entier ou partiel) pour le retour fournisseur | QM L13 · A clarifier · Gap · Form | = | PO09 |
| **BR-02-002-040** | Renvoi sur base d'un document (ex. bon 8000) lié au PO ; référence transmise par Replenishment, utilisée par le transporteur | QM L14 · À analyser · **Standard** · « à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922) » ; AFG L58 FIT ; PD L100 prio 1 | = | D38 ; PO02, PO36 |
| BR-02-002-050 | Contrôler par scan que le transporteur enlève la bonne HU refusée | Outbound L47 · A clarifier avec business · « Le transporteur a t'il accès à SAP ? » ; QM L15 · A clarifier ; AFG L59 GAP | G27 Outbound L47 : sans la question sur le transporteur | D15 ; PO10 |
| BR-04-001-010 | Photo en pièce jointe pour enrichir une plainte (Nice to have) | Internal L2 (avec 020-A/B) · À analyser · L ; QM L16 · Gap | = | PO27 |
| BR-04-001-020-A | Isoler / mettre en quarantaine les pièces problématiques | QM L17 · À analyser · EWM GZH · Config ; AFG L81 FIT | = | D23 |
| BR-04-001-020-B | Suivi de la décision sur un article bloqué (ID34) | QM L18 · À analyser · « — » ; Internal L2 | = | PO27 |
| BR-04-002-010-A | Tâches de picking sur les articles Z3 (mitraille) | Internal L3 · **En attente de confirmation business** · M | **À analyser** | D18, D21 ; PO21-PO23 |
| BR-06-002-010 | Référence unique regroupant plusieurs HU à enlever (« ex : retour litige fournisseur ») | **Aucune ligne GAP** ; AFG L180 FIT (couverture à confirmer) | – | D39 ; PO35 |
| BR-06-003-020 | Encoder le retrait des HU d'expédition par le chauffeur milkrun en cas de problème technique | Absent de G05 (selon v0.4, absent de G27) | – | Section 6 (mauvais rattachement en v0.4) |
| BR-07-002-020 | Reporting des livraisons et camions refusés, même sans MIGO | Reporting L6 · Analysé · GAP · Report · S | = | PO30 |
| BR-07-002-030 | Rapport par ligne de PO des litiges de réception (check-list, 107, 109) | QM L21 · À analyser · Gap · Report | = | PO29 |
| BR-07-005-070 | Articles au statut Z2/Z3/Z5/ZD pour un traitement spécifique | Reporting L12 · Analysé · GAP | = | PO25 |
| BR-08-010-030 | HU non nomenclaturées en cross-dock vers Sch ; « A traiter dans les flux "retour" » ; idée d'origine : « Qui s'occupe des retours? Comment? » | **Aucune ligne GAP** ; AFG L207 GAP (couverture à confirmer) | – | D34 ; PO35 |
| (sans BR) | Retour fournisseur NNN / consommation directe | NNN L6 · Analysé · Gap · À déterminer · M · « Aucune clôture, annulation ou solution de retour n'est arrêtée » | = | D13, D14 ; PO05 |
| (sans ID) | Mouvements automatiques 331/332 entre 243A et 243L (échantillons ↔ labo) | QM L2-L5 · statut vide | = | PO15 |
| (GAP XXXX, TOM 10/06) | Info au TOM en cas de refus au déchargement ; 2 échantillons ; échantillons détruits → « pièces gratuites » dans le PO | QM L22, L23, L26 · statut vide | = | PO16, PO17 |

Mentions sans BR dédiée : BR Management Summary L2 (Replenishment, « BR validé ») : « y compris le retour en cas de surquantité » ; onglet « 5 BR Prep expédition » L4 : « A rediscuter sur le flux "retour" » (mitraille).

## 5. Le parcours du retour, étape par étape

| Étape | Ce que montrent les sources | Décidé | Manque / ouvert |
|---|---|---|---|
| 1. Refus à la vérification documentaire | Check-list phase 1 et 2 ; refus → motifs, incident, document de refus au transporteur → « Réception refusée » (légendes des fig. 4-5 de BPv02 ; BPv01 l.60-66) | D26, D27 (P16b, 16/11) ; hors du flux retour selon Moustafa (D36) | Figures absentes des images ; contenu du document de refus et liste des motifs (BPv01 Q03) ; reporting camions refusés (PO30) ; TOM (PO17) ; rattachement au blueprint Inbound ou Retour (PO33) |
| 2a. Litige à la réception 1re étape (sur-livraison, article non commandé, incident) | IMG 8 (sans légende) : incident → nouvelle HU → lane Litige → décision ; branche « 108 » (diminution du stock en valeur) ; IMG 9 : cas 1 à 4 de la 1re étape | D01-D05, D17 | Étape 1 ou 2 pour l'isolement (PO06) ; étendue du blocage (PO07) ; repérage visuel (PO08) ; condition de la branche 108 (v0.4 PO8) ; flux d'origine de l'IMG 8 |
| 2b. Refus en réception 2e étape stock | IMG 9 : qté supp refusées / toutes refusées → décision acheteur ; 18* mis à jour automatiquement | D03, D06, D07 | Mode de traçage (PO01) |
| 2c. Refus NNN / consommation directe | IMG 10 : blocage de toute la livraison 18* → toutes les HU en lane Litige → décision ; au moins un refus → clôture du 18* | D12, D13 | Retour fournisseur NNN à schématiser (PO05) ; réception forcée (PO31) |
| 2d. Retour du contrôle Q / labo (échantillons) | IMG 5-7 : provenance « Retour contrôle Q » → décision « Refusé » → lane Litige → consolidation avec le lot QM stocké (la décision de l'inspecteur génère les ordres de picking) ; BPv02 §21 | D37, D40 | Lien avec le PO 45* (PO18) ; ASN retours (PO19) ; cycle de vie des échantillons, 331/332 (PO15) ; notification DU (PO14) ; échantillons détruits (PO16) |
| 2e. Non-conformité détectée en stock | Quarantaine 917, blocage tracé (BR-04-001-020-A) ; suivi de décision (020-B) | D23 | Workflow et owner (PO27) ; indicateur de motif (PO28) |
| 3. Attente et décision de l'acheteur | HU en lane Litige / zone 990 ; décision via plainte / base litiges ; SLA évoqués 48 h / 7 jours | D06, D07, D24, D25 | Qui enregistre la décision, canal, délai (BPv01 Q04 ; PO12) ; exclusion des HU en litige à l'expédition (D16) |
| 4a. Retour fournisseur – document | Bon sans ref 8* par le coordinateur DC, « Num PO (cas QM) » (IMG 12) ; bon 8000 lié au PO (BR-02-002-040) ; bon 8* lié au PO + 922 (BPv02 §66) | Principe d'un document lié au PO (BR L53) | Type de document (PO02) ; mouvement (PO01) ; moment du 922 (PO04) ; génération des bons pour les litiges (PO03) |
| 4b. Retour fournisseur – préparation | Stocké (QM) : prélèvement des quantités refusées et consolidation avec le lot d'inspection (BPv02 §21) ; non stocké : HU déjà en lane Litige | D37 | Étiquette (PO09) ; scanner (PO11) ; HU dédiées (BR-02-002-010, PO36) |
| 4c. Retour fournisseur – enlèvement | IMG 13 : activer le chargement (BR-06-002-010) → sortir les HU → confirmer la sortie (BR-02-002-050) → confirmer l'endroit (BR-06-003-020) → fin de chargement ; référence unique remise au fournisseur (BPO l.785-791) | D15, D39 | Contrôle par scan ou TU + porte (PO10) ; RDV transporteur ; clôture avec signature du fournisseur (D14, déduit) ; HU non emportées (PO34) |
| 5a. Mitraille après décision acheteur | IMG 11 : « Mettre à disposition », porteur « Mitraille (ex. décision acheteur REC2) », BIN « Mitraille » | D08-D11 | Consommation automatique ou vérification (PO26) ; pas de BR formalisée (BPv01 F4, GAP) |
| 5b. Mitraille de stock (Z3 / Z*) | Aucun BPMN ; vague dédiée, zone de clarification, zone d'attente | D18-D22 | Séquence IM/EWM, destination, liste des statuts (PO21-PO25) |
| 5c. Réparation par le fournisseur au DC | IMG 7 seulement : « Articles disponibles pour réception 1° étape » | – | Hors ou dans le flux retour ? Aucune BR (PO32) |
| 6. Sortie et traçabilité | Localiser la HU et garder l'historique, y compris « au retour : quand la HU est revenue dans le DC » (IMG 11, 13, 14) ; HU localisables, y compris en litige | D17 | Pas de BR « HU revenue au DC » (BPv01 Q18) ; preuve documentaire du litige de facturation (BR-01-003-110, PO01) ; rapports (PO29, PO30) |
| 7. Retours entrants hors litige | Retour d'immatriculation (BPI §4) ; HU non nomenclaturées « ex retour » (BR-08-010-030) ; retours COPO / SP annulés | D30-D34, D42 | Document et responsable du retour d'immatriculation (PO20) ; BR-08-010-030 sans GAP (PO35) |

## 6. Écarts avec la v0.4

### 6.1 Ce que la v0.4 omet

| ID | Élément omis | Source |
|---|---|---|
| E01 | Les décisions des réunions du 16 au 18/11 : article non commandé renvoyé (D04), pas de 107 en litige (D02), HU en litige localisables Must (D17), exclusion des HU en litige à l'expédition (D16), NNN sans 102/122 et retour par bon 8000 sans référence (D13, D14), mitraille NNN sans 551 ni transport (D11), BR-02-002-050 « BR et non gap » (D15) | P16a, P16b, P17, P18a, P18b |
| E02 | L'imputation de la mitraille décidée le 30/09 (D08) | BR [Blueprint - questions] L25 |
| E03 | La mitraille de stock Z3 / Z* (BR-04-002-010-A, BR-07-005-070, vague dédiée, zone de clarification, zone d'attente, vérification humaine) | D18-D22 ; G05 Internal L3, Reporting L12 |
| E04 | Le refus à la vérification documentaire (BR-01-001-010, document de refus, BR-07-002-020). La v0.4 suit le « Pas pertinent » de BPv02 §30, mais la v0.1 et P16b le traitent | BPv01 l.58-78 ; D26 |
| E05 | Le canal et la base des litiges (BR-01-003-100, tuile Fiori, SLA), le litige automatique (BR-01-003-020-F), le rapport des litiges (BR-07-002-030) | D24, D25 ; G05 Inbound L18, L22, QM L21 |
| E06 | Le cycle de vie des échantillons et le labo : BR-02-000-010/020, BR-02-001-010, 331/332, 243A/243L, échantillons détruits, info au TOM | G05 QM L2-L9, L22-L26 |
| E07 | La quarantaine 917 et la non-conformité en stock (BR-04-001-020-A/B) | D23 ; PO27 |
| E08 | Le retour d'immatriculation (BPI §4) et BR-08-010-030 « A traiter dans les flux retour » | D34, D42 |
| E09 | Les retours exclus du périmètre : COPO, SP, document COPO d'immatriculation (D30-D32) ; la remarque « tous les autres flux retour sont redirigés vers Schaerbeek » | BR FT L55, L112, L136 |
| E10 | La question des HU prévues mais non emportées comme retour (PO34) et la réparation par le fournisseur comme sujet ouvert (PO32) | BPO l.845, l.885 ; IMG 7 |
| E11 | Les désaccords encore ouverts sur l'isolement étape 1 / étape 2 et l'étendue du blocage (PO06, PO07) | P16b |
| E12 | Les points ouverts PO03 (génération des bons de livraison des litiges), PO05 (action de Moustafa : schématiser le retour NNN), PO19 (ASN des retours) | P16a, P18a, P16b |
| E13 | La GAP List 05-11 : l'annexe de la v0.4 cite la 27-10 | v0.4 l.363 |

### 6.2 Ce que la v0.4 contredit

| ID | Affirmation de la v0.4 | Ce que disent les sources |
|---|---|---|
| C01 | Point ouvert 9 (l.184, l.357) : les besoins NNN (blocage de toute la livraison, statut « clôturé ») « ne portent pas encore de référence BR ni GAP » | G05 NNN L5 et Inbound L39 : « GAP BR-01-003-020 » (famille BR-01-003-020), FS-16, XL, Analysé |
| C02 | 5.3.4 (l.315) : « scanner chaque HU refusée au moment de son enlèvement (BR-06-003-020, lu sur la figure 12) » | Sur IMG 13, BR-06-003-020 est annoté sur « Confirmer l'endroit de sortie », et BR-02-002-050 sur « Confirmer la sortie ». Le texte de BR-06-003-020 porte sur l'encodage du retrait par le chauffeur milkrun en cas de problème technique (BRR [Liées indirectement] L10) |
| C03 | 3.4 (l.192) : « Le flux de vérification documentaire n'est pas concerné » | Conforme à BPv02 §30, mais contraire à BPv01 F1 et au traitement en P16b (D26). À trancher (PO33) |
| C04 | 5.3.4 / point ouvert 4 : BR-02-002-050 présenté comme « GAP BR-02-002-050 », qualification à confirmer | P18b (18/11) : « Ce point est un BR et non un gap » (D15). La v0.4 date du 20/11 mais ne cite pas cette décision |
| C05 | §4 (l.200) : « La consommation des articles dans l'emplacement mitraille sera automatique » présenté comme règle | Reprend BPv02 §22 (02/11) ; P18a (18/11) retient une zone d'attente avec vérification humaine pour les retraits de stock (D19). Le cas QM stocké n'est pas tranché (PO26) |
| C06 | Annexe : BR-06-003-020 « Absent de la GAP List 27-10 » et rattaché au scan | Voir C02 ; rattachement à revoir |

### 6.3 Ce que la v0.4 « invente » (non trouvé dans les sources, ou rattachement non prouvé)

| ID | Élément de la v0.4 | Constat |
|---|---|---|
| I01 | Figure 4 (image 8) légendée « Réception étape 2 : incidents… » et classée sous « 3.1 Litige à la réception (étape 2 – Stock) » ; tableau des scénarios (l.81) qui l'attribue au flux 3 | L'image 8 ne correspond à aucune légende de BPv02. Elle contient « disponibles pour réception 1° étape » et la branche 108, ce qui oriente plutôt vers la 1re étape (**déduit**). Flux d'origine à confirmer |
| I02 | Tableau des 4 scénarios avec la colonne « Articles en stock EWM ? » | Synthèse déduite, déclarée comme telle dans les notes v0.3 mais non marquée dans le document |
| I03 | 3.1.1 « Si les articles concernés ne disposent pas encore d'un numéro de HU, le magasinier générera un nouveau numéro de HU » présenté comme règle de l'étape 2 | Lu sur l'IMG 8, sans légende (voir I01) |
| I04 | Sous-titre « validé QA le 20/11/2026 » | Validation de forme interne. Aucune validation métier n'est tracée dans les sources ; le document reste « pour discussion » |

Ce qui est conforme et sourcé dans la v0.4 : le hors scope « retour vers Schaerbeek / vente de mitraille » (BPv02 §17-18), l'absence de 109 (BPv02 §41), le NNN sans mouvement (BPv02 §54), la visibilité coordinateur (BPv02 §21), le bon 8* lié au PO + 922 en option (BPv02 §66), les options 108/922 (G05 Inbound L24), le moment du 922 et l'étiquette ou info système (commentaires Word de BPv02), et les notes BRM des IMG 10-12.

## 7. Questions pour Moustafa, par interlocuteur

**Moustafa (arbitrage interne, avant les ateliers)**
1. Quelle version du draft v0.2 fait foi : celle avec texte (`ewm/blueprint`) ou l'export Drive du PM sans texte ?
2. Périmètre du blueprint Retour : y inclut-on le refus à la vérification documentaire, le retour labo/échantillons, le retour d'immatriculation, la mitraille de stock Z3/Z*, les HU non emportées, BR-08-010-030 ? Que complète la phrase « Le flux retour qui est hors s… » (BPv02 §27) ?
3. De quel flux vient l'image 8 (incidents + 108) : réception 1re étape ou 2e étape ?
4. L'action du 18/11 « schématiser le retour fournisseur NNN » (PO05) : est-elle à intégrer au blueprint Retour ?
5. La décision du 18/11 « BR-02-002-050 est un BR, pas un gap » doit-elle être reportée dans la GAP List et le blueprint Outbound (l.832 : « GAP ») ?

**Bernard (owner GAP BR-01-003-110) et Replenishment**
6. Retour fournisseur : AS-IS (mail + 108), flux retour standard (922), 122, ou aucun mouvement si non réceptionné ? La session Retours de la semaine du 2/11 a-t-elle eu lieu, et avec quelle conclusion ? (PO01)
7. Document de retour : bon 8000 lié au PO, bon sans ref 8* portant le PO, ou livraison de retour ? Qui le crée, qui transmet la référence au fournisseur ? (PO02, PO03)
8. Le 922 est-il déclenché après DU ou après l'exécution EWM ? (PO04)
9. Canal et base des litiges : base spécifique ou Q2 ? SLA 48 h / 7 jours confirmés ? Qui enregistre la décision de l'acheteur ? (PO12)
10. Démo du litige overdelivery validée ? (PO13)
11. Liste des statuts Z* et destination de chacun ; séquence IM/EWM pour la mitraille Z3 ; traitement des retours CLI Z5. (PO21, PO24, PO25)

**Métier réception / DC (Christophe, Jonathan, équipe DC)**
12. Isolement du litige : étape 1 ou étape 2 ? Blocage de la ligne ou par article ? Repérage visuel sur l'étiquette ? (PO06-PO08)
13. Mitraille d'un lot QM refusé : consommation automatique ou vérification humaine en zone d'attente ? (PO26)
14. Étiquette du matériel refusé : physique ou info système, quel contenu ? Quelles étapes guider au scanner ? (PO09, PO11)
15. Contrôle de la HU refusée à l'enlèvement : TU + porte suffit-il ? Le transporteur a-t-il accès à SAP ? (PO10)
16. HU prévues mais non emportées : faut-il un traitement « retour en stock » dédié ? (PO34)
17. Réparation par le fournisseur au DC : fait-elle partie du flux retour ? (PO32)

**QM / Labo / TOM**
18. Cycle de vie des échantillons (consommation, destruction, retour) ; labo interne ou externe ; mouvements 331/332 et destination 243A ou 243L. (PO15)
19. Lien entre l'échantillon retourné et le PO 45* (917 / réservation) ; ASN pour les retours labo. (PO18, PO19)
20. Notification de la DU : destinataires et canal ; info au TOM en cas de refus au déchargement ; règle des « pièces gratuites » pour les échantillons détruits. (PO14, PO16, PO17)

**Non-conformité en stock (Gilles Moerenhout, Delphine Demoulin)**
21. Workflow, objet et owner de la décision sur un article bloqué (BR-04-001-020-B) ; la partie B est-elle dans le blueprint ? (PO27, PO28)

**Immatriculation (DC / garage Draisine)**
22. Qui crée le document de retour, sur quelle référence ? Le retour passe-t-il par les deux étapes de réception ou seulement par la 2e (BPI l.20 vs l.55) ? (PO20)
