# Revue — Blueprint Outbound FR Final v1.0 vs GAP List Outbound (27-10)

> Préparé par : Consultant Blueprint · 2026-11-01 · Demande : Moustafa, via le PM (mission BP-001)
> Branche : `ewm/blueprint` · Statut : **à relire par le QA**, non diffusé à Moustafa
> Sources (copies PM, branche `ewm/pm`, lues en entier) :
> - `infrabel-ewm/00-pm/inputs/Blueprint_Outbound_FR_Final_v1.0.txt` : ci-après « BP », lignes `L…` du fichier texte
> - `infrabel-ewm/00-pm/inputs/GAP_List_EWM2.0_Ronet_27-10.xlsx`, onglet « GAP List Outbound » (56 lignes, 21 colonnes) et sa lecture texte : ci-après « GL », lignes `#1` à `#56` dans l'ordre de l'onglet
> - `infrabel-ewm/00-pm/statut-gap-outbound-2026-11-01.md` (§4 et §5) : utilisé comme piste ; chaque point a été revérifié dans BP et GL
>
> Ni le blueprint ni la GAP List n'ont été modifiés.

---

## 1. Résumé

**Question de Moustafa :** en comparant le blueprint Outbound à la GAP List Outbound, qu'est-ce qui est (a) vraiment ouvert, et (b) seulement en contradiction avec le texte du blueprint ?

**(a) Ce qui est vraiment ouvert :** 27 lignes sur 56, soit **24 sujets distincts** une fois les doublons retirés. Les lignes #50 et #55 répètent #32 (HU mère / HU filles). La ligne #33 (Annexe 3) est le prérequis de #26 (consolidation).
- Pour ces sujets, la GAP List garde une question métier ou une dépendance sans réponse. Le blueprint, lui, les **présente le plus souvent comme acquis** : il les marque au mieux d'un tag « GAP », sans déclarer de point ouvert dans le texte.
- Trois blocs concentrent l'essentiel :
  - **Consolidation** : #26, #27, #33, #8 et #32. La matrice de l'Annexe 3 est absente, et ce manque est bloquant.
  - **Expédition / transport** : #34, #36, #39, #43, #44, #45 et #56. Le déclencheur de la demande de transport, le contenu de l'EDI light et le prérequis hardware SSCC ne sont pas tranchés.
  - **Picking** : #11, #13 à #15, #19, #22 à #24 et #28 (péremption, ship complete, scan dynamique, stock resté sur la BIN, pictogramme ADR).

**(b) Ce qui est seulement en contradiction avec le texte :** **8 lignes** se corrigent sans nouvel arbitrage métier, ou avec une simple confirmation.
- **5 contradictions**, détaillées en §2 : #2, #25, #37, #40 et #46.
  - #2 (calendrier milkrun) : le blueprint dit que le coordinateur gère le calendrier, alors que la décision du 27/10 en confie la modification à REPL.
  - #25 : le blueprint parle de « consolidation » là où la GAP List parle d'approche de picking (WOCR).
  - #37 : l'ADR est rattaché à BR-06-001-050 dans la GAP List et à -070 dans le blueprint.
  - #40 : le mail est envoyé au « demandeur » dans le blueprint et au « client destinataire » dans la GAP List.
  - #46 : le blueprint tague comme GAP la sortie de la HU refusée, que la GAP List estime déjà couverte par la TU et la porte.
- **3 décisions des 22/10 et 27/10 à reporter** : #5 (critères de vague) et #16 / #17 (livraison partielle et reliquat).
- #40 et #46 demandent en plus une confirmation métier (§7).

**Répartition des 56 lignes**

| Catégorie | Nb | Lignes GL |
|---|---|---|
| 1. Contradiction | 5 | #2, #25, #37, #40, #46 |
| 2. Point ouvert non couvert | 27 | #1, #6, #8, #9, #11, #12, #13, #14, #15, #19, #22, #23, #24, #26, #27, #28, #32, #33, #34, #36, #39, #43, #44, #45, #50, #55, #56 |
| 3. Aligné | 16 | #3, #7, #10, #18, #20, #21, #31, #35, #38, #41, #48, #49, #51, #52, #53, #54 |
| 4. GAP absent du blueprint | 5 | #4, #29, #30, #42, #47 |
| 5. Décision à reporter | 3 | #5, #16, #17 |
| **Total** | **56** | |

**À noter :**
- **Les 16 lignes « Aligné » ne sont pas toutes fermées.** Le blueprint déclare correctement le point ouvert, mais la GAP List les garde « À analyser » ou « À qualifier ».
- **L'ordre interne du blueprint pose un problème distinct**, détaillé en §5. La numérotation est cassée ; des commentaires, des notes de draft et des textes de BR en double restent dans le corps. Plusieurs sous-sections citées par la GAP List ne correspondent plus au corps du texte.

---

## 2. Tableau de rattachement (56 lignes)

Abréviations des catégories : **C** = contradiction · **PO** = point ouvert non couvert · **AL** = aligné · **ABS** = GAP absent du blueprint · **DEC** = décision à reporter.

Les sections indiquées sont celles du **corps** du blueprint, pas de la table des matières. Les deux ne concordent pas : voir §5.

| # | GAP ID (GL) | Section BP | Cat. | Constat | Extrait BP | Action proposée |
|---|---|---|---|---|---|---|
| 1 | GAP BR-05-004-010 | 3.1 ; 3.2.4 | PO | La GL est en « Attente réponse business REPL » : le planning quotidien du job convient-il ? Faut-il une configuration ou un enhancement ? Le BP présente l'horizon et les deux lancements par jour comme acquis. La vague ODD séparée, elle, est alignée sur la décision du 27/10. | L258 « Par défaut, les vagues sont lancées automatiquement deux fois par jour… » | Déclarer en 3.1 le point ouvert REPL (planning du job S/4, horizon de 7 jours). |
| 2 | GAP BR-05-004-020 | 3.1 ; Annexe 1 | C | Décision du 27/10 (GL, colonne TO-BE) : le DC contacte REPL, qui modifie le variant du job au moyen d'une transaction contrôlée, sans CR ni ticket. Le BP fait gérer le calendrier par le coordinateur. | L169 « Le coordinateur gère le calendrier d'expédition en affectant une tournée, une route ou une destination à un jour de la semaine. » | Réécrire L169 (§3.1 ci-dessous). Le texte du BR (L175, « modifié par les coordinateurs ») n'est plus aligné sur la décision : voir Q1. |
| 3 | GAP BR-05-004-050 | 3.1 | AL | Le BP affirme qu'aucun BL n'est créé sans stock. La décision du 27/10 (#5 : « si pas de stock pas BL ») repose sur ce principe. La GL reste pourtant en « Attente réponse REPL ». | L170 « Une livraison sortante ne peut être créée que si le stock est disponible dans le système… » | Aucune modification du BP. Signaler au PM que le statut GL est à mettre à jour après confirmation de REPL. |
| 4 | BR-05-003-010 | — (aucune trace) | ABS | Ce BR (HU non gérées en stock, bon 8* sans référence) est absent du BP. La GL demande soit de le retirer (repris dans le flux NNN ?), soit de mentionner la transaction standard (VL06NO). | — | Voir Q2. Si le BR est maintenu : une phrase en 3.1. |
| 5 | GAP BR-05-004-090 | 3.2 ; 3.2.1 ; 3.2.4 | DEC | Décisions du 27/10 (GL, colonne Points ouverts) : la disponibilité du stock n'est plus un critère de vague, la disponibilité des ressources non plus (on bloque les emplacements), il n'y a pas de split par aire d'activité, la vague ODD est séparée et le job milkrun correspond 1:1 à la vague milkrun. Le BP liste encore ces critères à trois reprises. | L184 « …en tenant compte du calendrier d'expédition des milkruns, de la disponibilité du stock et des ressources… » ; L203 « Les critères de regroupement peuvent varier selon la route, le calendrier milkrun, la destination, l'aire d'activité… » | Réécrire L184 et L203 et ajouter la relation 1:1 (§3.2). Garder le tag « GAP potentiel » sur la règle de fenêtre tant que l'option « le job S/4 détermine l'occurrence » n'est pas confirmée avec Bernard (Q3). |
| 6 | GAP BR-05-004-120-A | 3.2.1 | PO | La GL est « À analyser » et l'alternative standard reste à arbitrer : vagues urgentes et vue filtrée dans le Warehouse Monitor, ou dashboard développé. Le BP affirme le dashboard Fiori. Il tague aussi BR-05-004-090 à tort et ne mentionne pas l'exigence d'un signal global non nominatif. | L205 « Un dashboard dynamique, mis à jour automatiquement, affiche les demandes T8/T9… (BR-05-004-090; potentiel GAP BR-05-004-120-A) » | Corriger le tag et déclarer l'alternative comme point ouvert, en coordination avec le BPR Reporting. |
| 7 | GAP BR-05-004-120-B | 3.1 | AL | Le monitoring passe par le Warehouse Monitor ; les statuts sont à définir. Les deux documents concordent. | L172 « Les statuts à suivre restent à définir. » | Néant. Harmoniser le format du tag (§5). |
| 8 | GAP BR-05-004-130_B | 3.5.1 ; Annexe 2 | PO | La définition du kit n'est pas figée (« Kit IKEA » ou « Kit Infrabel ») et la responsabilité des master data n'est pas attribuée. Le BP mélange les deux notions : le texte du BR parle de kit « via OF » (plusieurs NN), l'Annexe 2 décrit le kit IKEA (1 NN). Une note de draft est restée dans le texte. | L565 « Une HU de picking contenant un kit peut être traitée séparément… » ; L571 « …correspondance proposée avec BR-05-004-130-B. » | Déclarer le point ouvert « définition du kit », supprimer la note de L571 et aligner l'ID (Q4). |
| 9 | GAP BR-05-005-030 | 3.3 (corps) / 3.4.3 | PO | La GL est « Analysé », mais trois exigences sur les tours manquent dans le BP : alternance entre tours, plusieurs utilisateurs sur plusieurs tours, flux simultanés. Elles sont prévues pour la session du 09/11. | L343 « …Ce principe s'applique également aux tours. (BR-05-005-030) » | Ajouter les 3 exigences comme point ouvert, en renvoyant à la session du 09/11. |
| 10 | GAP BR-05-005-150 (réimpression) | 3.4.3 | AL | La réimpression de l'étiquette après découpe figure des deux côtés. | L348 « Après une découpe, le système réimprime une étiquette de HU actualisée… » | Néant. |
| 11 | GAP BR-05-005-150 (2ᵉ ligne : découpe ou bobine complète) | 3.4.3 | PO | La GL demande comment distinguer une découpe d'une bobine complète, à part par la WOCR. Le BP affirme que le système fait la distinction. | L347 « …le système distingue les opérations de picking nécessitant une découpe de câble du prélèvement d'une bobine complète… » | Déclarer le critère de distinction comme point ouvert. Anomalie GL : le titre de la ligne reprend celui de #10. |
| 12 | BR-05-005-160-B | 3.4.4 | PO | Le prérequis MMD n'est pas confirmé (« Attente réponse business MMD »). Le BP l'énonce comme une règle acquise. | L363 « La gestion de la péremption… est réalisée exclusivement dans SAP (MMD). » | Le requalifier en prérequis master data à confirmer par MMD. |
| 13 | GAP BR-05-005-160-C | 3.4.4 | PO | La notion de « profil client » n'est pas définie. Il faut aussi vérifier si la détermination de lot S/4 couvre le besoin avant de confirmer le GAP. Le BP affirme la règle et ses exemples. | L365 « Le seuil minimal… dépend du profil du client. » | Déclarer comme points ouverts la donnée porteuse du profil et la vérification de la détermination de lot. |
| 14 | GAP BR-05-005-160-D | 3.4.4 | PO | Le TO-BE de la GL compte 4 composantes. Le BP n'en reprend que 2 : il omet la vague dédiée à l'évacuation et le rapport vers REPL, que le commentaire 97, resté dans le corps, demande d'ajouter. L367 est ambigu. | L367 « Les quantités ainsi bloquées sont prises en compte dans l'évaluation du stock disponible. » | Compléter le texte (§3.3), lever l'ambiguïté de L367 (Q5) et retirer le commentaire 97. |
| 15 | GAP BR-05-005-120-D | 3.4.5.2 | PO | La pertinence métier est à confirmer : la simulation de vague standard suffit-elle ? La GL distingue le ship complete au niveau de la livraison (ODD, PR, OF) et au niveau du poste (KIT, BOM). Le BP affirme l'annulation et la réaffectation automatiques, sans faire cette distinction. | L409 « …l'ensemble des tâches de prélèvement associées à la demande est annulé. Le système génère les instructions… » | Déclarer le point ouvert et ajouter la distinction livraison / poste (Q6). |
| 16 | BR-05-005-120-E | 3.4.5.2 | DEC | Décision de la GL : « on clôture toujours le bon 800 (process code) », pas de bon 85*. Le BP mentionne un delivery split. | L410 « La solution décrite repose sur les process codes et le delivery split du standard EWM. » | Supprimer « delivery split » et écrire la règle du bon 800 (§3.3). Signaler au PM que le statut « A analyser » et la complexité XL de la GL sont incohérents avec « fonctionne déjà ». |
| 17 | BR-05-005-120-F | 3.4.5.2 | DEC | Selon la GL, le solde est repris par un nouveau BL créé quand le stock revient, ce qui fonctionne déjà. Le BP décrit une remise en attente et une réaffectation automatiques dans EWM. Le commentaire [b] pose la même question. | L410 « La quantité restante à prélever est remise en attente et réaffectée automatiquement au picking… » | Réécrire selon le mécanisme réel : reliquat sur le STO 45*, nouveau bon 8* (§3.3). Retirer [b] après validation (Q7, avec Bernard). |
| 18 | GAP BR-05-005-060-B | 3.4.5.2 | AL | Le BP le présente déjà comme un prérequis extérieur à EWM ; la question de périmètre est cohérente avec la GL. | L413 « …implique également des données et décisions extérieures à EWM. » | Néant. |
| 19 | GAP BR-05-005-140 | 3.4.5.2 | PO | Le BR porte sur la substitution d'une bobine par une bobine sœur. Le BP le généralise à « tout problème », sans mention de la bobine. La mutualisation avec la FSP Litiges est ouverte, comme le commentaire [c]. | L411 « Si un problème survient pendant l'exécution d'une tâche de picking, le magasinier peut saisir un code d'exception… » | Trancher le périmètre (Q8), puis réintroduire la substitution de bobine. |
| 20 | GAP BR-05-005-190 | 3.4.5.2 | AL | Le comportement décrit est conforme au BR. La GL classe la ligne en GAP (variante de la solution Litiges), mais le BP ne la tague pas comme GAP. | L412 « …déclenche l'envoi automatique d'un e-mail à Replenishment et au FMB du DC. (BR-05-005-190) » | Ajouter « ; GAP BR-05-005-190 » et renvoyer à la solution Litiges. |
| 21 | GAP BR-08-010-090 | 3.4.7 | AL | Les deux documents parlent de la réimpression des étiquettes générées par EWM. | L481 « …réimprimer, si nécessaire, les étiquettes déjà générées. » | Préciser « toute étiquette générée par EWM », périmètre transversal. |
| 22 | BR-05-005-100 | 3.4.8 (1ʳᵉ) | PO | L'emplacement d'expédition virtuel est une proposition BRM non formalisée, à confirmer. Le BP décrit une autre solution : l'emplacement source fait office de staging. | L493 « L'emplacement source fait alors office de zone de staging pour les articles concernés. » | Déclarer les deux options et trancher (Q9, lié à #23). |
| 23 | GAP BR-05-005-110 | 3.4.8 (1ʳᵉ) | PO | Le besoin est à clarifier. Le 20/10 : bloquer l'emplacement après staging et alerter à l'inventaire. Le BP omet l'exigence d'inventaire du BR (« l'article doit être compté »). Le commentaire [d] est resté dans le texte. | L493 « Les quantités prélevées qui y restent ne sont plus disponibles pour d'autres opérations de picking. » | Ajouter l'exigence d'inventaire comme point ouvert (Q9). |
| 24 | GAP BR-05-005-090 | 3.4.5.1 ; 3.4.8 | PO | La GL est « À confirmer », XL. L'alternative recommandée est le scan systématique de la HU (standard). Le BP décrit le scan dynamique (le GAP) comme acquis, sans tag GAP. En L398, il le rattache à BR-05-005-070. | L398 « Les champs de confirmation sont paramétrables par aire d'activité. (BR-05-005-070) » ; L495–497 | Déclarer le choix scan dynamique / scan systématique de la HU (Q10), retaguer L398 en BR-05-005-090 et ajouter le tag GAP. |
| 25 | BR-05-005-040 | 3.2.5 ; 3.3 / 3.4.1 | C | GL (commentaire Moerenhout du 19/08) : il ne s'agit pas d'une consolidation mais d'une approche de picking, c'est-à-dire du regroupement des tâches en ordres magasin (WOCR). Le BP parle de « critères de consolidation ». | L291 « Les critères de consolidation durant le picking sont définis par DC. (BR-05-005-040) » | Réécrire L291 (§3.2) et retirer la répétition du BR en 3.4.1 (L323). Anomalie GL : la description du BR reprend le texte de BR-05-005-090. |
| 26 | GAP BR-05-006-010 | 3.5.1 ; 3.6.1 | PO | Bloquant : la matrice de consolidation est absente (#33). Le 3.5.1 déclare bien que les critères sont à définir. Le 3.6.1 affirme en revanche des règles paramétrées, sans réserve, et le commentaire [e] (« à vérifier avec la solution de Bernard ») est resté dans le texte. | L630 « …SAP EWM détermine le regroupement des HU selon des règles de consolidation paramétrées pour cette étape… » | Déclarer le point ouvert en 3.6.1, comme en 3.5.1. Anomalie GL : « Section 3.5.1 encore marquée SECTION EN ATTENTE » ne correspond plus au Final v1.0. |
| 27 | GAP BR-05-006-040 | 3.5.1 ; 3.6.1 | PO | Les critères de bypass ne sont pas définis. Selon la remarque BRM, on ne peut pas contourner un mélange de consolidation groups. Le BP affirme le bypass « selon des critères définis » et ne le tague GAP qu'en 3.5.1. | L631 « Selon les critères définis, certaines marchandises peuvent être exclues… (BR-05-006-040) » | Déclarer que les critères sont à définir et poser l'alternative standard : un type de processus sans packing (Q11). |
| 28 | GAP BR-05-006-060 | 3.5.1 ; 3.5.5 ; 3.6.5 (2ᵉ) | PO | Le moment du pictogramme est en arbitrage chez Moerenhout depuis le 25/08 : fin de la consolidation picking ou fin de la consolidation expédition. Le BP le place aux deux étapes. L'étiquetage ADR apparaît à la clôture de la HU d'expédition (3.5.5) et à celle de la HU mère (3.6.5). | L566 « …le système indique au magasinier le pictogramme… au cours de l'opération d'emballage » ; L707 idem en 3.6.5 | Garder une seule étape après arbitrage (Q12) et déclarer le point ouvert d'ici là. |
| 29 | BR-05-006-030 (couvert) | — | ABS | Ce standard Infrabel a un prérequis non repris dans le BP : l'adresse du COPO doit figurer dans le STO (bon 45**). Le 3.5.1 cite le COPO comme critère, sans tag. | L563 « …notamment par destination, par COPO ou par réservation, restent à définir. » | Taguer BR-05-006-030 en 3.5.1 et ajouter le prérequis master data. |
| 30 | BR-05-006-050 (couvert) | — | ABS | Le BR (HU d'expédition NNN / consommation directe, solution Bascoup) n'est tagué nulle part. Les cas NNN sont évoqués en 4.1.1.1 et 4.1.2.4 sans tag. | L790 « …les enlèvements d'articles NNN ou destinés à la consommation directe » | Ajouter le tag en 3.5. Anomalie GL : la colonne Points ouverts parle du lien de tracking, sans rapport avec le titre. |
| 31 | GAP BR-05-006-020 | 3.6.5 (1ʳᵉ, « Mesurage ») | AL | L'interface et le mode dégradé RF sont tous deux décrits. | L682 « En l'absence d'intégration…, l'opérateur renseigne manuellement… » | Remplacer « en l'absence d'intégration » par « en l'absence de réception des données » (mode dégradé). |
| 32 | GAP HU mère / HU filles (sans BR) | 3.6.2 | PO | La GL est « À analyser », le BR est à créer, le sujet est « à discuter avec les BA » (22/10) et dépend du SP. Le BP liste des « Besoins (GAP) » sans ID. Il affirme aussi que le système conserve la relation pour le Track & Trace, ce que le standard ne fait que dans EWM. | L650 « Besoins (GAP) : » ; L652 « …le système conserve la relation entre la HU mère et les HU filles… » | Déclarer le point ouvert (hors DC : SP / COPO) et attribuer un ID BR (PM). |
| 33 | Consolidation – Annexe 3 | Annexe 3 | PO | La matrice des cas est un prérequis bloquant. L'Annexe 3 ne contient que des images « à titre illustratif » et les commentaires [k] et [l]. | L933 « Annexe 3 : … A titre illustratif – Ne représente pas tous les cas de figure possibles » | Déclarer l'annexe « à compléter (BRM / Moerenhout) ». |
| 34 | GAP BR-06-001-010 | 4.1.1.1 | PO | Le déclencheur n'est pas décidé : fin de consolidation, création du n° d'expédition ou liste des HU figée. Le BP en sous-entend deux : L783 dit « dès la fin de la consolidation », tandis que l'ordre des actions en 4.1.1 place la transmission après le figeage. | L783 « La demande de transport peut être créée dès la fin de la consolidation… » ; L766–767 | Déclarer le point ouvert (Q13) et aligner l'ordre des actions de 4.1.1. |
| 35 | GAP BR-06-001-030 | 4.1.1.2 (Distribution) | AL | L'EDI envoyé avant la sortie de marchandises est décrit pareil des deux côtés. | L799 « …une demande d'expédition est transmise électroniquement au transporteur avant la sortie de marchandises. » | Néant. |
| 36 | GAP BR-06-001-050 (EDI) | 4.1.1.2 | PO | Le TO-BE de la GL est vide (« Voir avec Hicham »). Le BP cite un « EDI light » sans tag GAP et sans en définir le contenu. | L801 « Le système doit également permettre l'envoi d'un EDI light… (BR-06-001-050). » | Déclarer le contenu de l'EDI light comme point ouvert et ajouter le tag GAP. |
| 37 | GAP BR-06-001-050 (Informations ADR) | 4.1.1.2 | C | La GL rattache les informations ADR à BR-06-001-050. Le BP, comme la ligne #56 de la GL, les rattache à BR-06-001-070. | L800 « Les informations ADR… (BR-06-001-070 – GAP BR-06-001-070) » | Ne pas modifier le BP. Signaler l'anomalie au PM : renuméroter la ligne #37 en -070 ou la fusionner avec #56. |
| 38 | GAP BR-06-001-040 | 4.1.1.2 | AL | La réception de la confirmation EDI du transporteur figure des deux côtés. | L806 « Le système reçoit ensuite une confirmation du transporteur… » | Néant. Le mail qui suit est traité en #40. |
| 39 | GAP BR-06-001-080 | 4.1.1.2 | PO | La source des MSDS est ouverte (« Quid des fiches MSDS ? Imprimées dans SAP ? »). Les commentaires [h] et [i], en attente de Moerenhout, restent dans le texte. | L805 « Fiches MSDS en FR & NL[h][i] » | Déclarer le point ouvert MSDS (Q14). |
| 40 | GAP BR-01-002-0020-B | 4.1.1.2 | C | Selon la GL, le mail part vers le « client destinataire » et doit pouvoir être activé ou désactivé. Le BP l'envoie au « demandeur », ajoute « sauf contre-indication du TOM » et ne prévoit ni activation ni tag GAP. L'ID comporte un zéro en trop (BR-01-002-020-B, d'après ma synthèse du fichier BR). | L807 « …un e-mail est automatiquement envoyé au demandeur… sauf contre-indication du TOM (BR-01-002-0020-B). » | Aligner le destinataire et l'activation (Q15), ajouter le tag GAP et corriger l'ID après vérification. |
| 41 | GAP BR-05-007-010-B | 4.1.1.2 (Enlèvement) | AL | Le mail « marchandise prête » et le rendez-vous tracé figurent des deux côtés. | L817 « …pour lui permettre de prendre rendez-vous. La date/heure… sera tracée… » | Optionnel : mentionner la réutilisation de la notification GZH. |
| 42 | GAP BR-05-007-020 | — | ABS | Track & Trace est absent du BP (aucun tag). Décision du 04/08 : le traiter comme une fonctionnalité à part. L836 (localiser une HU et son historique) s'en approche, sans tag. | L836 « Le système doit également permettre de localiser une HU et de consulter l'historique… » | Ajouter un renvoi vers la fonctionnalité Track & Trace à part et taguer L836 si c'est bien ce BR (Q16). |
| 43 | GAP BR-06-003-040 | 4.1.2.2 | PO | Le moyen de communication qui fait remonter le lien de tracking est à clarifier (SP, Excellence). Le BP n'en dit rien. | L835 « Le lien de tracking communiqué par le transporteur doit pouvoir être enregistré… » | Déclarer le canal comme point ouvert. |
| 44 | GAP BR-06-003-030 | 4.1.2.4 ; 4.1.3.1 | PO | La GL est « À analyser » et dépend du hardware (caméras SSCC / GPS). En 4.1.2.4, le BP affirme le fonctionnement au futur, sans tag inline. Le texte du BR (L856) contient un extrait du deck. | L853 « Le système permettra au DC d'enregistrer la date/heure physique de la sortie… » | Ajouter un tag inline et le prérequis hardware, et nettoyer L856. |
| 45 | GAP Flux expédition non géré par le DC | 4.1.3 | PO | Le BR est à créer et le sujet dépend entièrement du prérequis hardware. Ce prérequis n'apparaît que dans le commentaire [j]. | L859 « 4.1.3 Flux expédition – Non-géré par le DC (GAP)[j] » | Porter le prérequis hardware dans le texte et attribuer l'ID BR (PM). Anomalie GL : la colonne « BR lié(s) » indique BR-06-003-030 alors que la ligne demande un nouveau BR. |
| 46 | BR-02-002-050 | 4.1.2.2 | C | La GL est « A clarifier » : « C'est déjà rattaché au TU avec une door… À réexpliquer le BR », et la colonne « Couvert par » est vide. Le BP tague le contrôle de la HU refusée comme GAP, et la confirmation de l'endroit de sortie aussi (« (GAP) » sans ID). | L831 « …ainsi que l'endroit par lequel celle-ci quitte le DC (GAP). » ; L832 « …(BR-02-002-050 – GAP). » | Retirer les deux tags « GAP » si la TU et la porte couvrent le besoin, sinon les maintenir (Q17). |
| 47 | GAP (BR à créer) – Confirmation des STO | — | ABS | Hors EWM : ATP S/4, à qualifier avec REPL. Le BP n'en parle pas, ce qui est cohérent si le hors périmètre est confirmé. | L166 « Les quantités affectées aux bons de livraison ne peuvent pas être attribuées à une autre demande. » | Si le hors périmètre EWM est confirmé : aucune modification, ou une phrase de dépendance REPL en 3.1. |
| 48 | GAP BR-05-005-080 | 3.4.7 | AL | L'étiquette de picking est déclarée avec un contenu à définir, des deux côtés. | L480 « Le contenu de cette étiquette reste à définir. » | Néant. |
| 49 | GAP (BR à créer ?) – génération automatique de la HU d'expédition | 3.5.2 | AL | Le sujet est déclaré ouvert des deux côtés. Il n'a pas d'ID BR. | L583 « …génère automatiquement le numéro de la HU d'expédition. (GAP Potentiel – à analyser) » | Attribuer un ID BR (PM). |
| 50 | GAP (BR à créer ?) – titre « Consolidation selon différents critères » | 3.6.2 | PO | Doublon de #32 : le contenu porte sur la HU mère / HU filles, pas sur le titre. | L650–654 | À ne compter qu'une fois. Signaler l'anomalie au PM. |
| 51 | GAP BR-05-006-060-01 | 3.6.5 (2ᵉ) | AL | Étiquette de transport ADR, taguée. | L709 | Néant. |
| 52 | GAP BR-05-006-060-02 | 3.6.5 (2ᵉ) | AL | Étiquette SSCC grand format, taguée. | L710 | Néant. |
| 53 | GAP BR-05-006-060-03 | 3.6.5 (2ᵉ) | AL | Packing list, taguée GAP. L'analyse standard de la GL renvoie à la FSP existante, ce qui pourrait ramener l'écart à une simple adaptation. | L711 | Requalifier (GAP ou standard Infrabel) avec le Consultant GAP. |
| 54 | GAP BR-05-006-060-04 | 3.6.5 (2ᵉ) | AL | Bon de livraison, tagué GAP. Selon l'analyse standard de la GL, l'impression est standard (PPF). | L712 | Idem #53. |
| 55 | GAP BR *** | 3.6.2 | PO | Troisième occurrence du besoin HU mère / HU filles. Le titre porte sur la consolidation, la description sur la HU mère. | L650–654 | À ne compter qu'une fois avec #32 et #50. |
| 56 | GAP BR-06-001-070 | 4.1.1.2 | PO | Les informations ADR dans l'EDI sont en attente de confirmation (commentaires [f] et [g] : « à confirmer », « 25/08 en cours »). Le BP les affirme sans réserve. La colonne Points ouverts de la GL contient le texte de -080. | L800 « …sont également intégrées dans le message EDI afin de respecter les règles légales… » | Déclarer le point ouvert ADR (Moerenhout). Anomalie GL signalée au PM. |

---

## 3. Modifications de texte proposées, section par section

Ces propositions ne sont pas reportées dans le blueprint. Les textes proposés sont au registre TO BE. Le format de tag retenu est `(BR-… ; GAP BR-…)`, et un point ouvert est déclaré par « Point ouvert : … ». Ce format est une hypothèse de convention, à valider (§6).

### 3.1 Prérequis – génération des livraisons sortantes (BL 8*)
- **L169, calendrier milkrun (#2).** Remplacer par :
  > « Le calendrier d'expédition milkrun affecte chaque tournée, route ou destination à un jour de la semaine ; chaque tournée regroupe les livraisons ayant les mêmes destinations. Ce calendrier est porté par le variant du job de génération des bons 8*. Toute modification est demandée par le DC à Replenishment, qui l'effectue au moyen d'une transaction de maintenance contrôlée, sans CR ni ticket. Un exemple de calendrier figure à l'annexe 1. (BR-05-004-020 ; GAP BR-05-004-020) »
- **Après L168 (#1).** Ajouter :
  > « Point ouvert : l'adéquation de la planification quotidienne du job S/4 (horizon de 7 jours, vagues séparées pour les appels) reste à confirmer par Replenishment. (GAP BR-05-004-010) »
- **#4, BR-05-003-010.** Selon la réponse à Q2, soit rien, soit une phrase :
  > « Les HU non gérées en stock liées à un bon 8* sans référence sont sorties au moyen de la transaction standard utilisée aujourd'hui. (BR-05-003-010) »

### 3.2 Lancer les vagues de picking (3.2, 3.2.1, 3.2.4, 3.2.5)
- **L184, intro du 3.2 (#5).** Remplacer « de la disponibilité du stock et des ressources » par :
  > « …du calendrier d'expédition des milkruns, des dates de besoin et des priorités opérationnelles. La disponibilité du stock n'est pas un critère de vague : elle est contrôlée à la création du bon de livraison (BR-05-004-050). L'indisponibilité d'une ressource matérielle est gérée par le blocage des emplacements concernés (BR-05-004-030). (BR-05-004-090) »
- **L203, 3.2.1 (#5).** Remplacer la liste des critères par :
  > « Les critères de regroupement sont la route, le calendrier milkrun, la destination et le caractère urgent de la demande. Les vagues ne sont pas scindées par aire d'activité ; la séparation par aire d'activité intervient au regroupement des tâches (3.2.5). Les demandes ODD sont regroupées dans une vague distincte. Chaque job de génération milkrun alimente une et une seule vague milkrun (relation 1:1). (BR-05-004-010 ; BR-05-004-090) »
- **L205 (#6).** Corriger le tag en `(BR-05-004-120-A ; GAP BR-05-004-120-A)` et ajouter :
  > « Point ouvert : la restitution par vagues urgentes dédiées et vue filtrée du Warehouse Monitor (standard), ou par un affichage dynamique développé, reste à arbitrer avec le blueprint Reporting. »
- **L207 à L214, règle de fenêtre (#5).** Garder le texte. Ajouter :
  > « Point ouvert : si l'occurrence est déterminée par le job planifié S/4, aucun développement n'est requis côté EWM ; à confirmer avec Bernard. »
- **L291, 3.2.5 (#25).** Remplacer par :
  > « Les tâches magasin sont regroupées en ordres magasin selon une approche de picking définie par DC (règles de création des ordres magasin), notamment par réservation, par COPO ou par destination. Point ouvert : le critère de prélèvement retenu pour Ronet reste à confirmer. (BR-05-005-040) »

### 3.3 Picking (corps « 3.3 Flux de picking », sous-sections 3.4.x)
- **L343 / L349 (#9).** Ajouter les trois exigences sur les tours (alternance de tours pour un utilisateur, plusieurs utilisateurs sur plusieurs tours, flux différents simultanés) sous forme de « Point ouvert — session du 09/11 ». (BR-05-005-030 ; GAP BR-05-005-030)
- **L347 (#11).** Ajouter :
  > « Point ouvert : le critère de distinction découpe / bobine complète, en dehors de la règle de création d'ordre magasin, reste à définir. »
- **L363 (#12).** Remplacer par :
  > « Prérequis master data : les articles soumis à une date de péremption sont gérés dans SAP par MMD ; à confirmer par MMD. (BR-05-005-160-B) »
- **L365 (#13).** Ajouter :
  > « Point ouvert : la donnée SAP porteuse du profil client (COPO, SP, type de destinataire) reste à identifier ; la couverture par la détermination de lot S/4 est à vérifier avant confirmation du GAP. »
- **L366 et L367 (#14).**
  - Ajouter : « Ces articles sont affectés à une vague de picking dédiée permettant leur évacuation du stock au moment opportun. Un rapport listant ces articles est transmis à Replenishment à intervalles réguliers. (BR-05-005-160-D ; GAP BR-05-005-160-D) »
  - Préciser L367 selon Q5.
  - Supprimer L388 à L390 (commentaire 97).
- **L408 et L409 (#15).** Ajouter :
  > « Le ship complete s'applique soit à la livraison entière (ODD, PR, OF), soit au poste de livraison (kit, BOM). Point ouvert : la nécessité de l'annulation et de la réaffectation automatiques, au-delà de la simulation de vague standard, reste à confirmer avec le business et Replenishment. »
- **L410 (#16 et #17).** Remplacer par :
  > « Si les livraisons partielles sont autorisées, le bon de livraison 800 est clôturé sur la base des quantités effectivement prélevées, au moyen d'un code processus ; aucun bon 85* n'est créé. (BR-05-005-120-E) La quantité non livrée reste ouverte dans la commande de transfert (bon 45*) ; un nouveau bon de livraison est généré lorsque le stock redevient disponible, selon le fonctionnement actuel. (BR-05-005-120-F) »

  Cette formulation est à valider avec Bernard (Q7). Supprimer ensuite le commentaire [b].
- **L411 (#19).** Selon Q8, réintroduire la substitution de bobine :
  > « Lors du picking d'une bobine, le magasinier peut la substituer par une bobine sœur en précisant le code d'exception… »

  Ajouter aussi : « Point ouvert : mutualisation avec la solution Litiges ». Supprimer [c].
- **L412 (#20).** Retaguer en `(BR-05-005-190 ; GAP BR-05-005-190)` et ajouter « La solution est une variante de la solution Litiges. »
- **L398 et L495 à L497 (#24).**
  - Retaguer L398 en BR-05-005-090.
  - Ajouter : « Point ouvert : le scan dynamique décrit ci-dessous (GAP) ou le scan systématique de la HU (standard) reste à arbitrer. (BR-05-005-090 ; GAP BR-05-005-090) »
- **L493 (#22 et #23).**
  - Déclarer le choix « emplacement source utilisé comme staging » ou « emplacement d'expédition virtuel », à arbitrer.
  - Ajouter l'exigence d'inventaire : « Le stock prélevé resté physiquement sur la BIN reste compté à l'inventaire de cette BIN ; point ouvert : blocage de l'emplacement après staging et alerte à l'inventaire. »
  - Supprimer [d].

### 3.5 Consolider le picking
- **L563 (#29).** Ajouter `BR-05-006-030` au tag et le prérequis : « l'adresse du COPO est présente dans le STO (bon 45**) ».
- **L564 (#27).** Ajouter :
  > « Point ouvert : les critères de bypass restent à définir ; s'ils permettent l'orientation vers un type de processus sans étape de packing, la solution est standard. »
- **L565 et L571 à L573 (#8).**
  - Ajouter : « Point ouvert : la définition du kit (kit Infrabel à plusieurs NN ou kit à un NN en plusieurs composants, Annexe 2) et la responsabilité des master data restent à fixer. »
  - Supprimer les notes de draft L568, L571 et L574.
  - Unifier l'ID du BR.
- **L566 et L596 (#28).** Retenir une seule étape pour le pictogramme et l'étiquetage ADR après arbitrage. D'ici là, ajouter : « Point ouvert : étape de l'indication du pictogramme (fin de la consolidation picking ou fin de la consolidation expédition), en arbitrage. »
- **Tag BR-05-006-050 (#30).** L'ajouter sur la prise en charge des HU NNN / consommation directe.

### 3.6 Consolider à l'expédition
- **L630 (#26).** Ajouter :
  > « Point ouvert : les règles de consolidation à l'expédition restent à définir (Annexe 3) et à rapprocher de la solution proposée par Bernard. »

  Supprimer [e].
- **L650 à L654 (#32, #50 et #55).** Remplacer « Besoins (GAP) : » par « Besoins (GAP — BR à créer) : ». Remplacer le 2ᵉ point par :
  > « Le système conserve dans EWM la relation entre la HU mère et les HU filles ; l'exploitation de cette relation hors du DC (transport, réception au SP et chez le COPO) constitue l'écart. »
- **L682 (#31).** Remplacer par « En l'absence de réception des données du calculateur… ».

### 4.1 Flux expédition
- **4.1.1 et L783 (#34).**
  - Ajouter : « Point ouvert : le déclencheur de la demande de transport (fin de consolidation, création du numéro d'expédition ou figeage de la liste des HU) reste à décider. »
  - Aligner l'ordre des actions en 4.1.1.
- **L800 (#56).** Ajouter : « Point ouvert : contenu ADR de l'EDI à confirmer par le DC. » Supprimer [f] et [g].
- **L801 (#36).** Retaguer en `(BR-06-001-050 ; GAP BR-06-001-050)` et ajouter : « Point ouvert : contenu de l'EDI light à définir. »
- **L805 (#39).** Ajouter : « Point ouvert : source et mode d'impression des fiches MSDS. » Supprimer [h] et [i].
- **L807 (#40).** Aligner le destinataire du mail et ajouter « Cette notification est activable / désactivable » selon Q15. Retaguer en GAP et corriger l'ID.
- **L831 et L832 (#46).** Selon Q17, retirer ou maintenir les deux « GAP ».
- **L835 (#43).** Ajouter : « Point ouvert : canal de remontée du lien de tracking (transporteur vers EWM). »
- **L836 (#42).** Taguer, et renvoyer à la fonctionnalité Track & Trace traitée à part (décision du 04/08).
- **L853 à L856 (#44).**
  - Tag inline `(BR-06-003-030 ; GAP BR-06-003-030)`.
  - Ajouter : « Prérequis : portiques / caméras de lecture SSCC. »
  - Retirer de L856 le fragment du deck « : la synchronisation EWM / S4 est standard ; le GAP porte sur… ».
- **L859 et L867 (#45).** Porter le prérequis hardware dans le texte, actuellement dans le commentaire [j] seulement, et attribuer l'ID BR.

### Annexes
- **Annexe 1 (#2).** Préciser que le calendrier est maintenu par Replenishment au moyen du variant du job.
- **Annexe 3 (#33).** Ajouter : « Matrice des cas de consolidation picking et expédition à produire (BRM / DC) — prérequis à la spécification de BR-05-006-010 et BR-05-006-040. » Supprimer [k] et [l] une fois qu'il y a été répondu.

---

## 4. Anomalies de la GAP List à transmettre au PM (non corrigées)

1. **#11** : le titre reprend celui de #10 (réimpression après découpe), alors que le contenu porte sur la distinction découpe / bobine complète.
2. **#25** : la description du BR reprend le texte de BR-05-005-090 (déjà relevé par le PM, §4.4).
3. **#37** : les informations ADR sont rangées sous BR-06-001-050 (ID en double), alors que le BP et #56 les rangent sous BR-06-001-070.
4. **#56** : le titre est « Expédition » et la colonne Points ouverts contient le texte de BR-06-001-080.
5. **#26** : la colonne Points ouverts indique « Section 3.5.1 encore marquée SECTION EN ATTENTE ». Ce n'est plus le cas dans le Final v1.0.
6. **#4** : le TO-BE cite VL01NO et les Points ouverts citent VL06NO.
7. **#16** : le statut « A analyser » et la complexité XL sont incohérents avec « ça fonctionne déjà comme ça aujourd'hui ».
8. **#3** : le statut « Attente réponse REPL » n'a pas été mis à jour, alors que la décision du 27/10 repose sur « pas de stock = pas de BL ».
9. **#45** : la colonne « BR lié(s) » indique BR-06-003-030, alors que la ligne demande la création d'un BR.
10. **#30** : la colonne Points ouverts (lien de tracking) n'a pas de rapport avec le titre (HU d'expédition NNN).
11. **#32, #50 et #55** : triple occurrence du besoin HU mère / HU filles. Les titres de #50 et #55 (« Consolidation selon différents critères ») ne correspondent pas à leur contenu.
12. **Sous-sections** : la colonne « Sous-section blueprint » suit la table des matières, pas le corps. Exemples : #31 « 3.6.4 Mesurage » correspond au corps 3.6.5, et #9 à #11 « 3.4.3 » se trouvent dans le corps sous le chapitre « 3.3 Flux de picking ».
13. **IDs absents du fichier BR**, d'après ma synthèse Drive, non revérifiés pour cette revue : BR-01-002-0020-B (probablement BR-01-002-020-B) et BR-05-004-130_B (BR-05-004-130-B dans le fichier BR).

---

## 5. Incohérences internes du blueprint

**Numérotation et structure**
- La table des matières annonce « 3.3 Mettre à disposition (Pas encore discuter) », avec les sous-sections 3.3.1, 3.3.3 et 3.3.4 (3.3.4 deux fois). Cette section est absente du corps.
- Dans le corps, « 3.3 Flux de picking » (L300) contient des sous-sections numérotées 3.4.1 à 3.4.8.
- Il n'y a pas de 3.2.2. La table des matières et le corps contiennent deux « Création des tâches de picking » (3.2.4 en L251 et 3.2.6 en L294).
- 3.4.8 apparaît deux fois (L485 et L511). La seconde décrit la dépose de la HU de picking en zone de consolidation et devrait être 3.4.9.
- 3.4.5.1 porte le même titre que 3.4.5.
- 3.6 : la table des matières contient deux 3.6.2. Dans le corps, la suite est 3.6.2, 3.6.3, 3.6.4, puis deux 3.6.5 (Mesurage en L678 et Impression en L702), puis 3.6.6.
- Il manque le titre du chapitre 4. Le corps passe de 3.6.6 à 4.1, et la table des matières s'arrête à 3.6.6 (pas d'entrée pour 4.x).
- 4.1.1.2 apparaît deux fois (Distribution en L796, Enlèvement en L810). Enlèvement devrait être 4.1.1.3.
- Le tableau d'historique des versions est vide (lignes 0.1 et 1.1 sans date ni nom), alors que le document est intitulé « Final v1.0 ».

**Résidus de travail dans le corps du texte**
- Les repères de commentaires [a] à [l] sont restés dans le texte.
- Le commentaire 97 de Youssef est recopié dans le corps (L388 à L390).
- L399 contient un fragment parasite : « Infrabel SAP EWM 2.0 Blueprint … ».
- Des notes de draft subsistent en L568, L571 et L574 (« Texte complet non reproduit dans le draft ; citation officielle… », « Texte du BR conservé depuis la section 3.5.5… »).
- Des textes de BR sont répétés : BR-05-004-090 trois fois (L185, L231 et L270), BR-05-006-060 quatre fois, BR-05-004-010 trois fois.
- Le texte du BR-05-004-010 (L174) commence par « GAP – ».

**Tags**
- Les formats sont hétérogènes : « GAP potentiel », « potentiel GAP », « Potentiel GAP », « Possible GAP », « GAP Potentiel – à analyser », « – GAP », « (GAP) » sans ID.
- Certains tags GAP n'ont pas de ligne dans la GL Outbound :
  - BR-05-005-020 (« Possible GAP », L320) ;
  - BR-06-001-020 (« – GAP », L824) ;
  - « (GAP) » sans ID en L831 ;
  - BR-07-007-010 (L837), qui est dans la GL Reporting d'après ma synthèse Drive.
- Certains tags sont mal rattachés : L205 (dashboard T8/T9) est tagué BR-05-004-090 au lieu de -120-A, et L398 BR-05-005-070 au lieu de -090.
- L'ID du BR kit est écrit BR-05-004-130_B ou BR-05-004-130-B selon les endroits.

**Fond et registre**
- 3.2.6 (L297) indique « Un traitement spécifique reste à définir pour les demandes T8 et T9 ». Or 3.2.1 et 3.2.4 définissent déjà les vagues T8/T9 et le lancement immédiat des T9.
- « Fin de chargement » a deux sens : le coordinateur fige la liste des HU (L782), puis le système confirme la fin du chargement après la sortie de toutes les HU (L834).
- La contradiction entre L170 (pas de BL sans stock) et L184 / L188 (stock comme critère de vague) existait déjà avant la décision du 27/10. Cette décision la résout (#5).
- Le temps des verbes est mélangé : le présent normatif domine, mais le futur apparaît en 4.1 (« préparera », « enverra », « permettra », « dissociera »).
- L171 (BR-05-004-060) décrit un bon 8* sans référence créé directement dans EWM, selon le fonctionnement de GZH. La GL (#4) cite une transaction S/4 (VL01NO / VL06NO, solution Bascoup) pour un cas voisin. Il faut vérifier que ces deux solutions ne se contredisent pas (Q2).

---

## 6. Hypothèses et limites

- **H1 :** j'ai repris les décisions du 22/10 et du 27/10 telles qu'elles sont **notées dans la GAP List**, colonnes TO-BE et Points ouverts. Je n'ai pas vu de compte rendu de réunion. Le journal `decisions.md` du PM ne les reprend pas.
- **H2 :** les numéros de section suivent le **corps** du texte du blueprint. Le texte exporté ne rend pas les images : je n'ai pas pu vérifier les flowcharts, l'Annexe 1, l'Annexe 3, ni le retrait de Track & Trace des BPMN (décision du 04/08).
- **H3 :** le format de point ouvert (« Point ouvert : … ») et le format de tag `(BR-… ; GAP BR-…)` sont ma proposition d'harmonisation. Ce ne sont pas des conventions validées.
- **H4 :** pour le classement « Aligné », j'ai vérifié que le texte est cohérent avec le TO-BE de la GL. Cela ne veut pas dire que le GAP est fermé.
- **H5 :** pour les IDs BR absents (§4.13) et BR-07-007-010 dans la GL Reporting, je m'appuie sur ma synthèse Drive du 01/11. Je ne les ai pas revérifiés dans le fichier BR pour cette revue.
- **Non vérifié :** le contenu exact du fichier BR (onglet 20260220) pour chaque ligne, le deck BRM, la « slide consolidation Bernard », la FSP Litiges et le blueprint Reporting.

---

## 7. Questions pour Moustafa

- **Q1 (#2).** Le BR-05-004-020 demande un calendrier « modifiable par les coordinateurs sans ICT ». La décision du 27/10 confie la modification à REPL. Faut-il reformuler le BR, ou garder le BR et tracer l'écart dans le blueprint ?
- **Q2 (#4).** Retire-t-on BR-05-003-010 du blueprint Outbound (au profit du flux NNN), ou y ajoute-t-on une mention de la transaction standard ? Est-elle cohérente avec la solution de L171 (bon sans référence, fonctionnement GZH) ?
- **Q3 (#5).** Pour l'affectation aux vagues, confirme-t-on l'option « le job S/4 détermine l'occurrence, sans développement EWM » ? Le tag « GAP potentiel » serait alors retiré.
- **Q4 (#8).** Quelle définition du kit retient-on pour l'Outbound : kit Infrabel (plusieurs NN, kitting standard) ou kit IKEA (1 NN en plusieurs composants) ? Qui maintient les master data ?
- **Q5 (#14).** Les quantités sous le seuil de péremption doivent-elles être exclues du stock disponible pour Replenishment (« réappro ? ») ou y rester ?
- **Q6 (#15).** Le pick denial en ship complete justifie-t-il un développement (annulation et réaffectation), ou la simulation de vague standard suffit-elle ?
- **Q7 (#16 et #17).** Valides-tu la formulation « bon 800 clôturé, pas de 85*, reliquat repris par un nouveau bon 8* » ? La GL indique « à analyser avec Bernard ».
- **Q8 (#19).** BR-05-005-140 couvre-t-il la seule substitution de bobine, ou tout incident de picking, à mutualiser avec la solution Litiges ?
- **Q9 (#22 et #23).** Pour le stock prélevé resté sur la BIN : emplacement source utilisé comme staging, ou emplacement d'expédition virtuel ? Et le blocage d'emplacement avec alerte à l'inventaire est-il retenu ?
- **Q10 (#24).** Accepte-t-on le scan systématique de la HU (standard) à la place du scan dynamique (GAP XL) ?
- **Q11 (#27).** Quels critères de bypass de la consolidation ? Un type de processus sans packing suffit-il ?
- **Q12 (#28).** À quelle étape indique-t-on le pictogramme ADR : à la consolidation picking ou à la consolidation expédition ?
- **Q13 (#34).** Quel déclencheur pour la demande de transport ?
- **Q14 (#39).** Les fiches MSDS sont-elles imprimées depuis SAP aujourd'hui ?
- **Q15 (#40).** Le mail d'expédition part-il au demandeur ou au client destinataire ? Doit-il être activable / désactivable ? Que recouvre la « contre-indication du TOM » ?
- **Q16 (#42).** Le paragraphe L836 (localisation et historique des HU) relève-t-il de BR-05-007-020 (Track & Trace) ?
- **Q17 (#46).** Le contrôle de la HU refusée et la confirmation de l'endroit de sortie sont-ils couverts par la TU et la porte en standard ? Si oui, on retire les deux tags GAP en 4.1.2.2.

**Remarque pour le PM :** les questions Q13 à Q15 relèvent de l'owner « Youssef » (Transport) dans la GL. La requalification de #53 et #54 relève du Consultant GAP. Je ne l'ai pas sollicité.
