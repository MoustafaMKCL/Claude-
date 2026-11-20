# QA-004 — Relecture du Blueprint Retour v0.3

> Relecteur : Consultant QA · 2026-11-20
> Livrable relu : `infrabel-ewm/03-blueprint/retour/Blueprint_Retour_FR_v0.3.docx` (+ `.md`), branche `ewm/blueprint`, commit `14af0ff`. Il a déjà été livré à Moustafa sans passage QA.
> Sources de contrôle :
> - `source_Retour_Extraits_BPMN_Draft_v0.2.docx` (même dossier) : texte, 2 commentaires Word, 13 figures BPMN et le logo ;
> - `notes_reformulation_v0.3.md` ;
> - Blueprint Outbound Final v1.0 et GAP List 27-10, branche `ewm/pm`, onglets Inbound, Outbound et QM ;
> - fichier BR, onglet « Business Requirements 20260220 ».

---

## Verdict : **À corriger**

| Gravité | Nb |
|---|---|
| Bloquant | 1 |
| Majeur | 3 |
| Mineur | 6 |

La v0.3 est bien construite. La structure suit le parcours d'un article refusé, toutes les figures sont reprises et les 5 points ouverts du §7 sont déclarés dans le texte. En revanche, le chapitre 3 et la section 5.1 présentent comme acquis des choix que la GAP List garde ouverts, et ils omettent une branche de la figure 4 qui les contredit. Par ailleurs, le document ne contient aucune mention « à valider » : les éléments déduits des figures ne sont signalés que dans la note de travail, que Moustafa n'a pas forcément lue.

---

## 1. Contrôles conformes

- **Figures.** Les 14 médias de la v0.3 sont identiques octet pour octet à ceux de la v0.2 (comparaison md5) : le logo et les 13 figures, toutes reprises. La renumérotation des figures (1 à 13) est cohérente avec les légendes.
- **Texte de la v0.2.** Tous les paragraphes sont repris, aucun n'est omis :
  - figure 2 (labo, coordinateur, bon 8*, consolidation, mitraille) ;
  - NNN et consommation directe sans mouvement de stock ;
  - BR-02-002-040 et le mouvement 922 ;
  - BR-02-002-050 et l'identification des HU par numéro de transport ;
  - BR-06-002-010 ;
  - « Vérification documentaire : pas pertinent » ;
  - les textes des BR de l'annexe.
- **Commentaires Word de la v0.2.** Les deux commentaires (922, étiquette ou information système) sont devenus les points ouverts 1 et 3.
- **Éléments lus sur les figures, exacts :**
  - figure 4 : branche « Articles acceptés → réception 1ère étape » ;
  - figure 5 : mouvement 107 ;
  - figure 7 : branche « Non » de la consolidation et note « c'est la décision de l'inspecteur qui génère les ordres de picking » ;
  - figure 8 : branche « Réparation par fournisseur au DC » ;
  - figure 11 : tags BR-05-006-050-A et BR-05-003-010-B ;
  - figure 12 : tags BR-06-003-040 et BR-07-007-010, branche « La totalité des HU n'est pas emportée ».
- **Points ouverts du §7.** Les 5 points sont déclarés dans le texte (3.2.1, 4.1.1, 5.1.2, 5.3.4 et 6).
- **Statuts exacts dans la GAP List :** BR-01-003-110 (Inbound, Enhancement, Analysé, M, « à requalifier »), BR-02-002-010, -020 et -030 (QM), BR-02-002-050 (Outbound, « A clarifier avec business »).
- **Numérotation.** Elle est continue et sans doublon, de 1 à 7 plus l'annexe.

---

## 2. Remarques

### Bloquante

**BLQ-1 — Chapitre 3 et sections 3.1.2 et 5.1.2 : un choix ouvert est présenté comme acquis, et une branche de la figure 4 est omise.**
- **Ce que dit la v0.3.**
  - La « règle structurante » du chapitre 3 dit qu'aucun mouvement de stock ne sera enregistré pour les articles refusés avant la mise en stock.
  - Le §3.1.2 justifie le GAP BR-01-003-110 par une phrase absente de la v0.2 : « Comme ce suivi sans mouvement de stock n'est pas un comportement standard, le GAP BR-01-003-110 a été enregistré à cet effet ».
  - Le §5.1.2 pose comme règle le bon 8* lié au PO et le mouvement 922.
- **Ce que disent les sources.**
  - **GAP List Inbound, BR-01-003-110 (« à requalifier »).** « Deux options ouvertes : solution AS-IS (mail + mvt 108) ou flux retour standard EWM (gap facturation avant sortie marchandises, mvt 922) ». L'analyse standard cite le mouvement 122 ou une livraison de retour.
  - **GAP List QM, BR-02-002-040.** « Solution à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922) » et « Trancher le type de document de retour ».
  - **Figure 4.** Le deuxième cadre rouge montre une branche de litige « Générer incident → Diminution du stock en valeur (**Mouvement 108**) → … → lane Litige → Décision acheteur Retour / Mitraille ». La v0.3 ne la décrit pas.
- **Correction attendue.**
  - Décrire la branche 108 de la figure 4.
  - Déclarer comme point ouvert le choix entre l'option AS-IS (mail + mouvement 108) et le flux retour standard (livraison de retour, mouvement 922), avec renvoi à BR-01-003-110 et BR-02-002-040.
  - Retirer la justification inventée du GAP.
  - Ajouter ce point ouvert au §7.

### Majeures

**MAJ-1 — Les éléments déduits des figures ne sont pas signalés « à valider » dans le document.**
- **Constat.** Le document contient zéro occurrence de « à valider », « hypothèse » ou « déduit », dans le `.docx` comme dans le `.md`. La signalisation n'existe que dans `notes_reformulation_v0.3.md`.
- **Mouvement 993 (§3.1.2), le plus important.** La remarque est incomplète. La note de la figure 4 dit : « On ne fait donc pas d'augmentation de stock via mvt 993 avec les articles "gratuits" **mais R2E (ce qui permet de s'assurer de passer par le contrôle Q s'il y en a un)** ». Elle est rattachée à la branche « Articles acceptés ». La v0.3 omet la seconde moitié et place la remarque comme règle générale.
- **Notes « Pour BRM » de la figure 9 (§3.3).** Elles portent sur le blocage de toute la livraison 18*, le statut « clôturé » et le déblocage. Ce sont des demandes adressées à BRM, c'est-à-dire des besoins de développement potentiels. La v0.3 les écrit comme comportement système acquis, sans tag BR ni GAP.
- **Note « Pour BRM » de la figure 10 (§4.1.1).** C'est le même cas.
- **Figure 11 (§5.1.2).** La note précise « Num PO **(cas QM)** (BR-02-002-040) ». La v0.3 généralise à tout retour fournisseur.
- **Correction attendue.**
  - Dans le texte, marquer chaque élément du tableau §2 des notes : « (lu sur la figure X, à valider) », ou le déclarer en point ouvert.
  - Compléter la remarque 993 avec « mais R2E… ».
  - Présenter les notes « Pour BRM » comme des besoins à qualifier.

**MAJ-2 — Le point à trancher n° 2 de la note (bon sans référence ou bon 8* lié au PO) manque dans le document.**
- **Constat.** Il ne figure ni dans le texte ni au §7. Le §5.1 écrit, sans réserve, d'abord « bon d'expédition sans référence », puis « bon 8* lié au PO initial ».
- **Ce que dit la GAP List.** La ligne QM BR-02-002-040 demande explicitement de « trancher le type de document de retour ».
- **Correction attendue.** Déclarer ce point ouvert au §5.1.2 et au §7. Il peut être fusionné avec le point ouvert de BLQ-1.

**MAJ-3 — Annexe : deux statuts de la GAP List sont inexacts.**
- **BR-02-002-040 est noté « Non vérifié ».** Il figure pourtant dans la GAP List QM : ID BR-02-002-040, « Couvert par : Standard », FRICE « À déterminer », statut « À analyser », avec le commentaire cité en BLQ-1.
- **BR-06-002-010 est noté « Non vérifié ».** Il est en réalité absent de tous les onglets de la GAP List 27-10, ce que j'ai vérifié. Écrire « absent de la GAP List 27-10 ».
- **BR-02-002-050.** Il figure aussi dans la GAP List QM (« GAP BR-02-002-050 – A clarifier avec business »). Mentionner les deux onglets.
- **Note de travail.** Mettre aussi à jour le §2 des notes (« Statut … Non vérifié »).

### Mineures

**MIN-1 — Tags et annexe.**
- BR-05-006-050-A, BR-05-003-010-B, BR-06-003-040 et BR-07-007-010 sont tagués dans le texte (§5.1.3 et 5.3.6) mais absents de l'annexe.
- BR-06-003-020, imprimé sur la figure 12 (confirmation de sortie et endroit de sortie), n'est pas tagué en 5.3.4 et 5.3.5.

**MIN-2 — Cohérence avec le blueprint Outbound, §5.3.5.** L'Outbound tague la confirmation de l'endroit de sortie « (GAP) » (L831), un sujet ouvert par Q17 de la revue BP-001. La v0.3 le décrit sans tag ni réserve. Faire le même renvoi qu'en 5.3.4 (point ouvert 4).

**MIN-3 — Registre.** La v0.3 écrit tout le TO BE au futur. Le blueprint Outbound Final v1.0 est majoritairement au présent normatif (QA-001 y relevait déjà le futur comme incohérence). Il faut fixer une convention commune à tous les blueprints : question au PM et à Moustafa.

**MIN-4 — Périmètre.**
- L'annotation de la figure 1 (« Hors Scope : flux retour ») contredit l'objet même du document. Ce point est relevé dans la note, mais pas dans le document.
- La phrase tronquée de la v0.2 (« Le flux retour qui est hors s ») a été retirée sans être posée en question à Moustafa.

Il faut ajouter un point ouvert au §1 ou au §7.

**MIN-5 — Mouvements.**
- §3.1.3 : « mises en stock par le mouvement 107 ». La figure 5 indique « Augmenter le stock en valeur » (mouvement 107). Reprendre ce libellé.
- §3.1.2 : la précision de la v0.2 « le 109 [n'est] pas effectué » a été perdue.

**MIN-6 — Figure 5.** La note « Cas 2 : Repl a mis à jour le PO (ajout d'une nouvelle ligne) » n'est pas reprise au §3.1.3.

---

## 3. Actions demandées au Consultant Blueprint

1. **BLQ-1** : décrire la branche du mouvement 108, déclarer le choix « AS-IS mail + 108 » ou « flux retour standard / 922 » comme point ouvert, et retirer la justification du GAP.
2. **MAJ-1** : ajouter les marqueurs « à valider » dans le document, compléter la note 993 avec R2E, requalifier les notes « Pour BRM » et la restriction « cas QM ».
3. **MAJ-2** : déclarer le point ouvert « type de document de retour ».
4. **MAJ-3** : corriger les statuts de l'annexe et la note de travail.
5. Traiter MIN-1 à MIN-6. MIN-3 attend d'abord la décision du PM sur la convention.

Puisque la v0.3 est déjà chez Moustafa, je recommande au PM de lui indiquer que BLQ-1 et MAJ-2 changent le fond (choix 108 ou 922, type de document de retour), et pas seulement la forme.
