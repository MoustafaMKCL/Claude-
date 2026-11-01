# Statut des points ouverts — GAP Outbound (Ronet)

> Préparé par : PM · 2026-11-01 · Pour : Moustafa (discussions du 2026-11-02)
> Source lue en entier : GAP List « GAP_List_EWM2.0_Ronet 27-10 », onglet *GAP List Outbound*, 56 lignes (export xlsx du Drive).
> Contexte : Follow-up Ronet (onglet Blueprint) — « Outbound / Rédiger le BPR : en cours » ; « Update Gap List - Outbound : not started ».
> Statut QA : document de travail PM, **non relu par le QA**.

## 1. Sur quoi te baser demain

| Référence | Fichier | Pourquoi |
|---|---|---|
| Liste des GAP | **GAP_List_EWM2.0_Ronet 27-10** (onglet Outbound) | Version la plus récente : elle intègre les retours du 22/10 (meeting REPL) et du 27/10. La version « (1) » du 25/10 est dépassée. |
| Texte du blueprint | **Blueprint Outbound FR_Final v1.0** | Version finale. Le Draft1 ne sert qu'à l'historique. Attention : certaines décisions du 27/10 ne sont pas encore reportées dans le blueprint (voir §5). |

## 2. Vue d'ensemble (56 lignes)

| Statut normalisé | Nb | Lecture |
|---|---|---|
| Analysé | 12 | Solution proposée ; reste souvent un point de détail à confirmer |
| Partiellement analysé | 6 | Kit, consolidation, bypass, EDI transporteur / ADR |
| À analyser | 16 | Pas encore de solution |
| À qualifier | 8 | Lignes sans BR ou sans contenu (formulaires, BR à créer) |
| À confirmer / clarifier avec le business | 11 | Questions métier ouvertes |
| En attente d'une autre équipe (REPL, MMD) | 3 | Dépendances externes |

**Seules ~12 lignes sur 56 sont analysées.** Les points ouverts se concentrent sur 4 sujets : **consolidation**, **expédition / transport (EDI, SSCC, sortie physique)**, **T8/T9 et urgences**, **dépendances Replenishment / MMD**.

## 3. Points ouverts par interlocuteur (ce qu'il faut obtenir demain)

### 3.1 Replenishment (REPL)
| GAP | Sujet | Question à trancher |
|---|---|---|
| BR-05-004-010 | Génération auto des bons 8*, horizon 7 j, vagues séparées | La planification quotidienne du job convient-elle ? Config ou enhancement ? (attente réponse REPL) |
| BR-05-004-050 | BL créé seulement si stock dispo (ATP) | Retour de Gilles attendu depuis le 04/08 ; relancé au meeting du 22/10 |
| BR-05-004-020 | Calendrier milkrun | Décision du 27/10 : modification par REPL via transaction dédiée (variant du job) → à confirmer par REPL et à reporter dans le blueprint |
| BR-05-005-120-D | Ship complete / pick denial | L'annulation et la réaffectation automatiques sont-elles vraiment nécessaires, ou la simulation de vague (standard) suffit-elle ? |
| BR-05-005-190 | Mail à REPL / FMB sur code d'exception T8/T9 | Valider une variante de la solution Litiges (owner : Bernard) |
| GAP « BR à créer » — Confirmation des STO | Hors EWM (ATP S/4) | Qualifier avec REPL : hors périmètre EWM ? |

### 3.2 Business DC Ronet (Moerenhout, Gilles…)
| GAP | Sujet | Question à trancher |
|---|---|---|
| BR-05-006-010 + **Annexe 3** | Logique de consolidation picking / expédition | **Bloquant** : matrice des cas de consolidation absente (section 3.5.1 « en attente »). Sans elle, pas de spécification possible. Cas « plusieurs COPO » à rediscuter |
| BR-05-006-040 | Bypass de la consolidation | Quels critères ? Si un type de processus dédié suffit → standard ; sinon → développement |
| BR-05-005-090 | Champs de confirmation dynamiques au picking (XL) | Accepter le scan systématique de la HU (standard) plutôt que le scan dynamique (développement) ? |
| BR-05-005-040 | Critères de regroupement en ordres magasin | Critère de prélèvement (COPO / réservation / destination) — cf. Follow-up n°6 « en cours » |
| BR-05-005-110 | Stock pické resté sur la BIN | Besoin à clarifier : bloquer l'emplacement après staging + alerte à l'inventaire ? |
| BR-05-005-100 | Emplacement d'expédition virtuel | Proposition BRM à confirmer avant spécification |
| BR-05-005-150 (2ᵉ ligne) | Distinguer picking avec découpe / bobine complète | Comment distinguer, à part par la WOCR ? |
| BR-05-005-120-E / -F | Livraison partielle / backorder | Fonctionne déjà aujourd'hui (nouveau BL quand le stock revient) → proposer de **clore comme standard** |
| BR-05-004-120-A / -B | Alerte et monitoring T8/T9 (owner : Moustafa) | Valider : vagues urgentes dédiées + écran filtré (Warehouse Monitor) vs dashboard dynamique développé. Coordonner avec le BPR Reporting |
| BR-05-004-130_B | Kit | Figer la définition : « Kit IKEA » (1 NN en plusieurs parties, non standard) vs « Kit Infrabel » (plusieurs NN, kitting standard). Responsabilité master data à fixer avec les BA |
| BR-05-005-030 | Pilotage des tours (Hänel, Kardex, Modula) | 3 exigences multi-utilisateurs et multi-tours non reprises dans le blueprint → session du **09/11** |
| BR-05-006-060 | ADR — pictogramme | Afficher le pictogramme en fin de consolidation picking ou d'expédition ? (arbitrage Moerenhout depuis le 25/08) |
| BR-08-010-090 / BR-05-005-080 | Réimpression et étiquette de picking | Périmètre : toutes les étiquettes EWM ? Contenu de l'étiquette de picking à définir |
| BR-05-005-140 | Substitution de bobine (photo, code d'exception) | À mutualiser avec la FSP Litiges / workflow incidents Inbound ? |
| BR-02-002-050 | HU refusée enlevée par le transporteur | BR à réexpliquer (déjà couvert par TU + porte ?) |
| BR-01-002-0020-B | Mail au demandeur à l'expédition | Cohérence avec la FSP Inbound de notification (même BR) |

### 3.3 MMD / MMD FI
| GAP | Sujet | Question à trancher |
|---|---|---|
| BR-05-005-160-B | Péremption gérée dans SAP par MMD | Prérequis master data — attente réponse MMD |
| BR-05-005-160-C / -D | Seuil de péremption par « profil client » ; blocage et évacuation | « Profil client » non défini : quelle donnée SAP (COPO, SP, type de destinataire) ? Vérifier si la détermination de lot S/4 couvre le besoin avant de confirmer le GAP |
| BR-05-005-060-B | Quantités du Supply Catalogue alignées sur les conditionnements | Périmètre EWM 2.0 ou Supply Catalogue (ISC 61 — Michel Hainaut) ? |
| BR-05-006-030 | Adresse du COPO dans le STO (bon 45**) | Prérequis master data à valider pour Ronet |

### 3.4 Transport / Expédition (owner : Youssef ; Hicham pour l'EDI)
| GAP | Sujet | Question à trancher |
|---|---|---|
| BR-06-001-010 | Demande de transport avant la sortie de marchandises (GI) | Quel déclencheur : fin de consolidation, création du n° d'expédition, ou liste de HU figée ? |
| BR-06-001-030 / -050 | EDI transporteur + infos ADR | Partiellement analysé ; -050 sans contenu (« voir avec Hicham ») |
| BR-06-001-040 | Confirmation EDI du transporteur | À spécifier en même temps que le mail client (BR-01-002-0020-B) |
| BR-06-001-080 / -070 | CMR ×4, ADR, fiches MSDS FR/NL | Les MSDS sont-elles imprimées depuis SAP aujourd'hui ? |
| BR-06-003-030 + « Flux non géré par le DC » | Sortie physique détectée par caméra SSCC / GPS | **Dépend du hardware** (portiques / caméras) ; BR à créer pour le flux non géré par le DC |
| BR-06-003-040 / BR-05-007-020 | Lien de tracking, Track & Trace | Quel canal pour faire remonter l'information ? Implique SP et Excellence ; Track & Trace à traiter comme une fonctionnalité à part (décision du 04/08) |
| BR-05-007-010-B | Mail « marchandise prête » + rendez-vous d'enlèvement | Le mail réutilise la solution GZH ; la prise de RDV tracée est nouvelle → la confirmer |
| BR-05-006-020 | Interface calculateur cubimétrique | Mode dégradé (saisie manuelle RF) à spécifier |

### 3.5 Bernard (approche / arbitrage)
- BR-05-004-090 : si le job S/4 détermine l'occurrence de la vague, **aucun développement** → à confirmer avec Bernard et le business.
- BR-05-005-120-F : backorder « à analyser avec Bernard » → proposé comme standard (voir §3.2).
- « Slide consolidation Bernard » : référence pour la consolidation par COPO / réservation / magasin.

## 4. Qualité de la GAP List à corriger (avant diffusion)

1. **Doublons** :
   - « BR-05-005-150 » apparaît 2 fois avec des contenus différents (réimpression d’étiquette après découpe ; picking avec ou sans découpe).
   - « BR-06-001-050 » apparaît 2 fois (EDI / ADR).
   - HU mère / HU filles apparaît 2 fois.
   - « Consolidation selon COPO / réservation / magasin » apparaît 3 fois (BR-05-006-030, « BR à créer ? », « BR *** »).
2. **BR à créer** : HU mère / filles, flux d'expédition non géré par le DC, confirmation des STO, génération automatique de la HU d'expédition.
3. **Lignes vides** (pas de TO-BE ni de point ouvert) : BR-06-001-050 (ADR), BR-05-006-060-01 à -04, « BR *** », BR-06-001-070.
4. **Owner** renseigné sur 9 lignes seulement sur 56 ; **complexité** sur environ 15.
5. **Retrait possible** : BR-05-003-010 (bon 8* sans référence), qui serait déjà traité dans le flux NNN → à retirer du blueprint Outbound ?

## 5. Décisions récentes (22/10 et 27/10) à reporter dans le blueprint

- Wave : la disponibilité du stock n'est plus un critère (pas de stock = pas de BL) ; pas de split de vague par aire d'activité (confirmé par Gilles) ; une vague à part pour les ODD ; relation 1:1 entre le job milkrun et la vague milkrun.
- Calendrier milkrun : modification par REPL via une transaction contrôlée (pas de CR ni de ticket).
- Livraison partielle : le bon 800 est toujours clôturé (process code) ; pas de bon 85*.

## 6. Proposition de priorités pour la discussion

1. **Débloquer la consolidation** : Annexe 3, matrice des cas, critères de bypass. C'est le plus gros bloc XL et un prérequis à 4 autres GAP.
2. **Clôturer ce qui est standard** : BR-05-005-120-E / -F, BR-05-004-090, BR-05-003-010. Cela réduit vite la liste.
3. **Obtenir les réponses REPL et MMD** : BR-05-004-010, BR-05-004-050, la série BR-05-005-160.
4. **Transport** : fixer le déclencheur de la demande de transport et l'hypothèse hardware caméra SSCC.
