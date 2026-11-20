# Extraits « retour » par source

Recopie mot pour mot, sans résumé ni reformulation, de chaque passage / ligne contenant au moins un des mots-clés suivants (recherche insensible à la casse et aux accents) : retour, return, refus (refus, refusé…), litige, dispute, mitraille, scrap, rebut, fournisseur, 922, 108, 122, 161, 993, 107, 109, 917, labo, échantillon, réparation, NNN, avoir.

Règles de recherche appliquées (mécaniques, pour limiter le bruit sans juger le contenu) :
- « retour », « return », « refus », « litige », « rebut », « labo », « réparation » : recherchés en début de mot (ainsi « préparation » ne compte pas pour « réparation », « élaboration » ne compte pas pour « labo »).
- « avoir » : mot entier (avoir / avoirs). Attention : le verbe « avoir » est aussi capté (bruit inévitable).
- Nombres (922, 108, 122, 161, 993, 107, 109, 917) : non collés à un autre chiffre (ils peuvent être captés dans un ID de BR, une date, un numéro de ligne…).
- Unité d’extraction : pour les tableurs, la ligne entière (toutes les colonnes non vides, avec lettre de colonne et en-tête détecté) ; pour les documents Word / textes, le paragraphe ou la ligne de tableau tel qu’il figure dans le .txt (numéro de ligne du .txt + dernier titre rencontré). Les retours à la ligne internes aux cellules sont notés « ⏎ » dans les .txt et restitués tels quels ici.
- Pour les GAP Lists / plans de décisions / points ouverts : les valeurs de toutes les colonnes dont l’en-tête commence par « Statut » ou « Décision » sont reprises sur la ligne « Statut ».

## Comptage

| Source | Nb d’extraits |
|---|---|
| Blueprint_Retour_v0.1.docx | 176 |
| Blueprint_Retour_Extraits_BPMN_v0.2.docx | 17 |
| BR_Flux_Retour.xlsx | 35 |
| GAP_List_Ronet_05-11.xlsx | 144 |
| GAP_List_EWM2.0_Ronet_27-10.xlsx | 86 |
| Business_Requirements.xlsx | 184 |
| Blueprint_Immatriculation.docx | 9 |
| CR_meetings_2026-11-13.docx | 11 |
| Follow-up_Ronet.xlsx | 4 |
| Taches_Follow-up_Ronet_05-11.xlsx | 2 |
| Prep_meeting_Bernard_2026-11-05.md | 0 |
| fiche_capture_meeting_2026-11-03.md | 1 |
| Plan_decisions_GAP_List_Ronet_v0.1.xlsx | 64 |
| Points_ouverts_GAP_List_Ronet_v0.1.xlsx | 47 |
| Index_Livrables_assistants.docx | 4 |
| Blueprint_Outbound_FR_Final_v1.0.txt | 13 |

---

## Blueprint_Retour_v0.1.docx
Source : Drive 1anXmmEwPBPRhBXJo88FBKSSbWitEowPB
Texte de référence : `Blueprint_Retour_v0.1.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **176**

#### Blueprint_Retour_v0.1.docx — ligne 1 — section : (début du document)
Mots-clés trouvés : retour

> SAP EWM 2.0 Retour Blueprint FRBrouillon v0.1 – pour discussion – 02/11/2026SAP EWM 2.0 Retour Blueprint FRBrouillon v0.1 – pour discussion – 02/11/2026 

#### Blueprint_Retour_v0.1.docx — ligne 3 — section : 1. Introduction
Mots-clés trouvés : retour, refus, litige, mitraille, fournisseur

> Ce document initie le blueprint des processus de retour (retour fournisseur, refus de réception, litiges menant à un retour, mise en mitraille et retours internes) pour le projet SAP EWM 2.0 d’Infrabel, site / DC de Ronet. Il reprend la structure du blueprint Outbound (« Infrabel SAP EWM 2.0 Blueprint - Outbound Document FR_Final v1.0 »).

#### Blueprint_Retour_v0.1.docx — ligne 5 — section : 1. Introduction
Mots-clés trouvés : retour

> Statut : Brouillon – pour discussion (v0.1 du 02/11/2026). Ce document n’est pas validé ; il sert de support à la discussion avec le business sur le flux retour.

#### Blueprint_Retour_v0.1.docx — ligne 10 — section : 1. Introduction
Mots-clés trouvés : retour

> 0.1 | 02/11/2026 | Moustafa Kayali (consultant SAP EWM) | Brouillon initial – initiation du blueprint Retour, pour discussion avec le business

#### Blueprint_Retour_v0.1.docx — ligne 13 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : retour

> Objet : décrire, à partir des BPMN et des BR existants, les flux de retour identifiés au DC de Ronet, les associer aux exigences (BR) et lister les points à clarifier avec le business.

#### Blueprint_Retour_v0.1.docx — ligne 15 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : refus

> Refus de réception à la vérification documentaire (camion / livraison refusée) ;

#### Blueprint_Retour_v0.1.docx — ligne 16 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : retour, litige, mitraille, fournisseur, réparation

> Litige à la réception et décision de l’acheteur (réparation par le fournisseur au DC, retour fournisseur, mitraille) ;

#### Blueprint_Retour_v0.1.docx — ligne 17 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : retour, fournisseur

> Retour fournisseur : identification des HU, document de renvoi, enlèvement par le transporteur ;

#### Blueprint_Retour_v0.1.docx — ligne 18 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : mitraille

> Mitraille : après décision acheteur et mitraille de stock (articles au statut Z3) ;

#### Blueprint_Retour_v0.1.docx — ligne 19 — section : 1.1 Objet et périmètre du document
Mots-clés trouvés : retour

> Retours internes visibles dans les BPMN (retour immatriculation, retour contrôle Q) ;

#### Blueprint_Retour_v0.1.docx — ligne 22 — section : 1.2 Point d’attention – périmètre « flux retour » dans le BPMN E2E
Mots-clés trouvés : retour

> ## 1.2 Point d’attention – périmètre « flux retour » dans le BPMN E2E

#### Blueprint_Retour_v0.1.docx — ligne 23 — section : 1.2 Point d’attention – périmètre « flux retour » dans le BPMN E2E
Mots-clés trouvés : retour, litige, mitraille, fournisseur

> Le BPMN E2E du DC indique explicitement en Hors Scope le « flux retour » et le « flux vente de mitraille » (Figure 1). Pourtant, les BPMN de réception (2B, 3, 3B) modélisent la décision de l’acheteur « Retour fournisseur / Mitraille » jusqu’à la mise à disposition des articles dans la lane « Litige » de la staging zone « 2ième étape », et les BPMN 5B / 5C citent la mitraille et le retour fournisseur (« décision acheteur REC2 ») comme cas de mise à disposition / bon sans référence.

#### Blueprint_Retour_v0.1.docx — ligne 24 — section : 1.2 Point d’attention – périmètre « flux retour » dans le BPMN E2E
Mots-clés trouvés : retour, mitraille

> Figure 1 – extrait BPMN « 0_Flux_DC_E2E_eWM2.0 V0.5_FR » – annotation « Hors Scope : flux retour / flux vente de mitraille »

#### Blueprint_Retour_v0.1.docx — ligne 26 — section : 1.2 Point d’attention – périmètre « flux retour » dans le BPMN E2E
Mots-clés trouvés : retour, litige, mitraille

> ➜ Le périmètre exact du flux retour dans eWM 2.0 est à clarifier (voir Q01) : jusqu’où le flux est-il modélisé dans eWM (lane Litige, mise à disposition, création du bon sans référence, expédition / enlèvement) et qu’est-ce qui reste hors scope (p. ex. la vente de mitraille) ? « À valider avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 34 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : retour

> # 2. Processus « AS-IS » DC Ronet – retours

#### Blueprint_Retour_v0.1.docx — ligne 35 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : retour

> « À compléter avec le business » – les sources utilisées pour ce brouillon (BPMN TO-BE et liste des BR) ne décrivent pas le fonctionnement actuel des retours au DC de Ronet. Points à documenter lors de l’atelier :

#### Blueprint_Retour_v0.1.docx — ligne 36 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : refus

> Comment un refus de réception est-il traité aujourd’hui (document remis au transporteur, enregistrement des motifs) ?

#### Blueprint_Retour_v0.1.docx — ligne 37 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : retour, fournisseur

> Comment un retour fournisseur est-il organisé aujourd’hui (document, rendez-vous transporteur, zone de stockage, identification) ?

#### Blueprint_Retour_v0.1.docx — ligne 38 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : mitraille

> Qui décide de la mise en mitraille, où le matériel est-il déposé et comment est-il évacué ?

#### Blueprint_Retour_v0.1.docx — ligne 39 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : retour

> Comment sont gérés les retours d’immatriculation et de contrôle qualité hors site ?

#### Blueprint_Retour_v0.1.docx — ligne 40 — section : 2. Processus « AS-IS » DC Ronet – retours
Mots-clés trouvés : refus, litige

> Quels outils / rapports sont utilisés (check-list, suivi des litiges, suivi des camions refusés) ?

#### Blueprint_Retour_v0.1.docx — ligne 41 — section : 3. Vue d’ensemble des flux retour identifiés
Mots-clés trouvés : retour

> # 3. Vue d’ensemble des flux retour identifiés

#### Blueprint_Retour_v0.1.docx — ligne 44 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour

> # | Flux retour | BPMN concernés | BR associées | Couverture BR

#### Blueprint_Retour_v0.1.docx — ligne 45 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : refus

> F1 | Refus de réception (vérification documentaire) | 1_Flux_Vérif documentaire | BR-01-001-010, BR-07-002-020 | Partielle

#### Blueprint_Retour_v0.1.docx — ligne 46 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour, litige, mitraille, fournisseur, réparation

> F2 | Litige et décision acheteur (réparation / retour fournisseur / mitraille) | 2B, 3, 3B, 0 E2E | BR-01-003-020-F, BR-01-003-100, BR-01-003-110, BR-07-002-030 | Partielle

#### Blueprint_Retour_v0.1.docx — ligne 47 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour, fournisseur

> F3 | Retour fournisseur (identification HU, document de renvoi, enlèvement) | 0 E2E, 5C, 9 (+ fins 2B / 3 / 3B) | BR-02-002-010 à -050, BR-06-002-010 | Bonne (à valider)

#### Blueprint_Retour_v0.1.docx — ligne 48 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : mitraille

> F4 | Mitraille après décision acheteur | 0 E2E, 2B, 3, 3B, 5B | aucune BR (question blueprint sans ID) | GAP

#### Blueprint_Retour_v0.1.docx — ligne 49 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : mitraille

> F5 | Mitraille de stock (articles Z3) | aucun BPMN | BR-04-002-010-00, BR-04-002-010-A, BR-07-005-070 | Partielle – pas de BPMN

#### Blueprint_Retour_v0.1.docx — ligne 50 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour

> F6 | Retours internes : retour immatriculation, retour contrôle Q | 2B | aucune BR | GAP

#### Blueprint_Retour_v0.1.docx — ligne 51 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour

> F7 | Retour de HU au DC (traçabilité) / HU non nomenclaturées | 9 Expédition, 5B (notes BRM) | BR-08-010-030 (indirect) | GAP

#### Blueprint_Retour_v0.1.docx — ligne 53 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour, refus, mitraille, fournisseur, échantillon

> Le BPMN E2E montre la position du flux de retour dans le flux global : les « Articles refusés QM » sont consolidés (« Consolider échantillons + articles stockés »), puis une passerelle oriente vers « Mitraille » ou « Retour fournisseur » (Figure 2). D’après la lecture du schéma, la branche « Retour fournisseur » rejoint la tâche « Créer un bon sans référence » (annotation « e.a. Retour fournisseur ») et la branche « Mitraille » rejoint le flux intra-site / « Mettre à disposition » « À valider avec le business ».

#### Blueprint_Retour_v0.1.docx — ligne 54 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour, refus, mitraille, fournisseur, échantillon

> Figure 2 – extrait BPMN « 0_Flux_DC_E2E_eWM2.0 V0.5_FR » – articles refusés QM → « Consolider échantillons + articles stockés » → passerelle « Mitraille » / « Retour fournisseur »

#### Blueprint_Retour_v0.1.docx — ligne 55 — section : | Flux retour | BPMN concernés | BR associées | Couverture BR
Mots-clés trouvés : retour, fournisseur

> BR associées : aucune BR annotée – lien probable avec la famille BR-02-002 (retour fournisseur)

#### Blueprint_Retour_v0.1.docx — ligne 56 — section : 4. Processus Retour « To-Be DC »
Mots-clés trouvés : retour

> # 4. Processus Retour « To-Be DC »

#### Blueprint_Retour_v0.1.docx — ligne 58 — section : 4.1 Refus de réception (vérification documentaire)
Mots-clés trouvés : refus

> ## 4.1 Refus de réception (vérification documentaire)

#### Blueprint_Retour_v0.1.docx — ligne 60 — section : Description du processus (BPMN)
Mots-clés trouvés : refus

> Dans le BPMN « Vérifier les documents de livraison » (lane Magasinier DC), le transporteur se présente et le magasinier vérifie la check-list phase 1 (« Checklist OK ? »). En cas de NOK, le flux part directement vers l’encodage des motifs de refus. Si la check-list est OK, le camion est déchargé, le(s) colis contrôlé(s) physiquement et la check-list phase 2 vérifiée (Figure 3).

#### Blueprint_Retour_v0.1.docx — ligne 61 — section : Description du processus (BPMN)
Mots-clés trouvés : refus, fournisseur

> Note BRM du BPMN : check-list dynamique (PO + STO + BL 8* sans réf) ; points de check-list : (1) présence d’un n° de PO ou STO ou BL 8* sans réf – point bloquant, réponse négative = check-list NOK = refus ; (2) lot inspection – contrôle Q fournisseur ; (3) conditions logistiques.

#### Blueprint_Retour_v0.1.docx — ligne 63 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> BR associées : BR-01-001-010 (annotée sur check-list phase 1 et phase 2 – confirmée) ; autres ID visibles BR-01-001-020/-030/-040/-050/-060, BR-01-000-010 (hors extraction retour)

#### Blueprint_Retour_v0.1.docx — ligne 64 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, refus

> À la décision « Refusé », le magasinier encode les motifs de refus (note BRM : alimentation du dossier – photos, champ libre…), le système génère un incident (lane Gestion incidents) et un document de refus qui est remis au transporteur ; le flux se termine par « Réception refusée » (Figure 4). La branche « Accepté avec ou sans réserves » mène à la signature CMR (hors flux retour).

#### Blueprint_Retour_v0.1.docx — ligne 65 — section : Description du processus (BPMN)
Mots-clés trouvés : refus

> Figure 4 – extrait BPMN « 1_Flux_Vérif documentaire_eWM2.0_V1 » – branche « Refusé » : encoder motifs de refus → générer incident → remettre document de refus au transporteur → « Réception refusée »

#### Blueprint_Retour_v0.1.docx — ligne 66 — section : Description du processus (BPMN)
Mots-clés trouvés : refus

> BR associées : BR-01-001-010 (probable sur cette branche) ; BR-07-002-020 (probable – reporting des livraisons refusées)

#### Blueprint_Retour_v0.1.docx — ligne 70 — section : Exigences (BR) associées
Mots-clés trouvés : refus

> BR-01-001-010 | Le magasinier doit pouvoir gérer la check-list d’acceptation/refus d’une livraison, avec suivi et traçabilité des motifs de refus. | « Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus » | Confirmé (annoté sur check-list phase 1 et 2, Fig. 3) ; branche Refusé : probable (Fig. 4)

#### Blueprint_Retour_v0.1.docx — ligne 71 — section : Exigences (BR) associées
Mots-clés trouvés : refus

> BR-07-002-020 | Reporting des livraisons refusées même sans MIGO d’entrée, pour suivre les camions refusés via la check-list. | « Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list) » | Probable – fin « Réception refusée » (Fig. 4), pas d’ID annoté

#### Blueprint_Retour_v0.1.docx — ligne 76 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, refus

> Q02 – Le refus à la vérification documentaire fait-il partie du blueprint Retour ou reste-t-il dans le blueprint Inbound ?

#### Blueprint_Retour_v0.1.docx — ligne 77 — section : Solution SAP EWM – à définir
Mots-clés trouvés : refus

> Q03 – Contenu du « document de refus » remis au transporteur et liste des motifs de refus à encoder. « À compléter avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 78 — section : Solution SAP EWM – à définir
Mots-clés trouvés : refus

> Q16 – Reporting des livraisons refusées (BR-07-002-020) : contenu, fréquence, destinataires. « À compléter avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 79 — section : 4.2 Litige à la réception et décision de l’acheteur
Mots-clés trouvés : litige

> ## 4.2 Litige à la réception et décision de l’acheteur

#### Blueprint_Retour_v0.1.docx — ligne 81 — section : Description du processus (BPMN)
Mots-clés trouvés : refus, litige, échantillon

> Réception d’articles avec bon 8xxx sans référence (2B) – lorsque la décision (« Type décision ? ») est « Refusé », le magasinier place la HU dans la lane « Litige » de la staging zone « 2ième étape » et l’y associe (annotation : « actuellement zone 990 »). Une passerelle propose de consolider l’échantillon avec le reste des articles QM stockés (note : « c’est la décision de l’inspecteur qui génère les ordres de picking ») (Figure 5).

#### Blueprint_Retour_v0.1.docx — ligne 82 — section : Description du processus (BPMN)
Mots-clés trouvés : refus, litige, échantillon

> Figure 5 – extrait BPMN « 2B_Flux_Rec-Articles avec bon sans référence » – branche « Refusé » : placer / associer la HU dans la lane « Litige » (zone 990) et consolidation échantillon + articles QM stockés

#### Blueprint_Retour_v0.1.docx — ligne 84 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, litige, mitraille, fournisseur, réparation

> La décision de l’acheteur comporte ensuite trois issues (Figure 6) : « Réparation par fournisseur au DC » (articles disponibles pour réception 1° étape), « Retour fournisseur » (articles dans la lane « Litige » disponibles pour retour vers fournisseur) et « Mitraille » (articles dans la lane « Litige » disponibles pour mitraille).

#### Blueprint_Retour_v0.1.docx — ligne 85 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, mitraille, fournisseur, réparation

> Figure 6 – extrait BPMN « 2B_Flux_Rec-Articles avec bon sans référence » – passerelle « Décision acheteur ? » : réparation par fournisseur au DC / retour fournisseur / mitraille

#### Blueprint_Retour_v0.1.docx — ligne 86 — section : Description du processus (BPMN)
Mots-clés trouvés : mitraille

> BR associées : BR-01-003-110 (probable, même logique que Fig. 7) ; branche Mitraille : aucune BR (GAP)

#### Blueprint_Retour_v0.1.docx — ligne 87 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, refus, litige, mitraille, fournisseur

> Réception étape 2 pour stock (3) – après la libération automatique de la ligne de livraison entrante, les quantités supplémentaires refusées (décision acheteur prise à la 1ère étape) et le cas « Toutes les quantités sont refusées » mènent à la passerelle « Décision acheteur ? » : « Retour fournisseur » (annotation BR-01-003-110) ou « Mitraille », avec dans les deux cas des articles dans la lane « Litige » de la staging zone « 2ième étape » (Figure 7). Rappel du BPMN : cas 1 et 2 (qté supp acceptées, facturées ou non) → Repl met à jour le PO, le 18* est mis à jour automatiquement ; cas 3 et 4 (qté supp refusées / toutes les quantités refusées) → le 18* est mis à jour automatiquement.

#### Blueprint_Retour_v0.1.docx — ligne 88 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, refus, mitraille, fournisseur

> Figure 7 – extrait BPMN « 3_Flux_Rec-Etape2-Stock_eWM2.0_V3 » – qté supp refusées / toutes quantités refusées → « Décision acheteur ? » → Retour fournisseur (BR-01-003-110) / Mitraille

#### Blueprint_Retour_v0.1.docx — ligne 89 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> BR associées : BR-01-003-110 (annotée – confirmée) ; BR-01-003-020-F (probable, en amont) ; BR-01-003-020-E visible mais hors sujet retour

#### Blueprint_Retour_v0.1.docx — ligne 90 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, refus, litige, mitraille, fournisseur, NNN

> Réception étape 2 NNN / consommation directe (3B, V2) – en cas d’anomalie, toutes les lignes de la livraison entrante 18* sont bloquées et toutes les HU déplacées vers la lane « Litige » de la staging zone « 2ième étape ». Après l’événement « Décision acheteur » : si tous les articles litigieux sont acceptés, toutes les lignes du 18* sont débloquées ; si au moins un article est refusé, toute la livraison entrante 18* est clôturée (note BRM : changer le statut de la livraison entrante vers « clôturé »), puis « Retour fournisseur » ou « Mitraille » (Figure 8).

#### Blueprint_Retour_v0.1.docx — ligne 91 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, litige, mitraille, fournisseur, NNN

> Figure 8 – extrait BPMN « 3B_Flux_Rec-Etape2-NNN-Cons-Dir_eWM2.0_V2 » – lane « Litige » → « Décision acheteur » → clôturer la livraison entrante 18* → Retour fournisseur / Mitraille

#### Blueprint_Retour_v0.1.docx — ligne 92 — section : Description du processus (BPMN)
Mots-clés trouvés : mitraille

> BR associées : BR-01-003-110 (probable) ; branche Mitraille : aucune BR (GAP)

#### Blueprint_Retour_v0.1.docx — ligne 96 — section : Exigences (BR) associées
Mots-clés trouvés : litige

> BR-01-003-020-F | En cas d’overdelivery détecté sur le bon de livraison, un litige est créé automatiquement (PO, article, qté supp, localisation) pour tracer les quantités supplémentaires. | « Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec : - info du PO - article concerné - qté supp - endroit de localisation de la ligne concernée dans SAP » | Probable – amont de « Décision acheteur ? » (Fig. 7)

#### Blueprint_Retour_v0.1.docx — ligne 97 — section : Exigences (BR) associées
Mots-clés trouvés : litige, fournisseur

> BR-01-003-100 | Un canal de communication « gestion des litiges » doit relier réception, replenishment et autres services (historique par PO, éviter les doubles sollicitations fournisseur). | « Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services… » | Aucun lien trouvé

#### Blueprint_Retour_v0.1.docx — ligne 98 — section : Exigences (BR) associées
Mots-clés trouvés : retour, refus, litige, fournisseur

> BR-01-003-110 | Le système doit pouvoir tracer le retour d’une quantité vers le fournisseur lorsque l’acheteur refuse tout ou une partie de la livraison, afin de documenter un litige de facturation. | « Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation . » | Confirmé – 3_Flux_Rec-Etape2-Stock, branche Retour fournisseur (Fig. 7) ; probable sur 2B / 3B (Fig. 6, 8)

#### Blueprint_Retour_v0.1.docx — ligne 99 — section : Exigences (BR) associées
Mots-clés trouvés : litige, 107, 109

> BR-07-002-030 | Rapport par ligne de PO des litiges détectés à la réception (check-list, 107, 109, etc.). | « Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..) » | Aucun lien trouvé

#### Blueprint_Retour_v0.1.docx — ligne 104 — section : Solution SAP EWM – à définir
Mots-clés trouvés : litige

> Q04 – Décision de l’acheteur : qui l’enregistre, par quel canal (BR-01-003-100), dans quel délai, et que se passe-t-il pendant l’attente (HU en lane Litige / zone 990) ?

#### Blueprint_Retour_v0.1.docx — ligne 105 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, fournisseur, réparation

> Q05 – La branche « Réparation par fournisseur au DC » (2B) fait-elle partie du flux retour ? Aucune BR spécifique trouvée.

#### Blueprint_Retour_v0.1.docx — ligne 106 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, refus, litige, fournisseur

> Q06 – Les quantités supplémentaires refusées (litige overdelivery, BR-01-003-020-F) suivent-elles le même flux de retour fournisseur que les lots refusés QM ?

#### Blueprint_Retour_v0.1.docx — ligne 107 — section : Solution SAP EWM – à définir
Mots-clés trouvés : litige

> Q17 – Rapport des litiges par ligne de PO (BR-07-002-030) : contenu et utilisateurs. « À compléter avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 108 — section : 4.3 Retour fournisseur
Mots-clés trouvés : retour, fournisseur

> ## 4.3 Retour fournisseur

#### Blueprint_Retour_v0.1.docx — ligne 109 — section : 4.3.1 Identification du matériel refusé et gestion des HU
Mots-clés trouvés : refus

> ### 4.3.1 Identification du matériel refusé et gestion des HU

#### Blueprint_Retour_v0.1.docx — ligne 110 — section : 4.3.1 Identification du matériel refusé et gestion des HU
Mots-clés trouvés : retour, refus, litige, rebut, fournisseur

> Les BPMN de réception (2B, 3, 3B) se terminent, pour la branche « Retour fournisseur », sur « Articles dans la lane "Litige" de la staging zone "2ième étape" disponibles pour retour vers fournisseur » (Figures 6 à 8). Les BR du sous-processus « 002 Implémenter la décision (lot refusé) » précisent les attentes de traçabilité pendant le séjour au DC : HU dédiées au retour fournisseur, étapes de refus et de renvoi guidées par scanner, étiquetage du matériel rebuté. Aucune de ces BR n’est annotée sur les extraits BPMN (lien probable par contenu).

#### Blueprint_Retour_v0.1.docx — ligne 113 — section : 4.3.1 Identification du matériel refusé et gestion des HU
Mots-clés trouvés : retour, fournisseur

> BR-02-002-010 | Le système doit gérer des HU dédiées au retour fournisseur, identifiées dans eWM tant qu’elles sont dans le magasin, pour assurer la traçabilité complète. | « Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète » | Probable – fins « disponibles pour retour vers fournisseur » (Fig. 6–8)

#### Blueprint_Retour_v0.1.docx — ligne 114 — section : 4.3.1 Identification du matériel refusé et gestion des HU
Mots-clés trouvés : refus, litige

> BR-02-002-020 | L’agent doit pouvoir enchaîner, assisté par scanner, les étapes de refus puis de renvoi du matériel afin d’assurer la traçabilité et de limiter les erreurs. | « Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs » (idée de base : « Pouvoir être 'simple' pour annuler la réception si lot QM est refusé ») | Probable – chemin Refusé → Litige → décision acheteur (Fig. 5–8)

#### Blueprint_Retour_v0.1.docx — ligne 115 — section : 4.3.1 Identification du matériel refusé et gestion des HU
Mots-clés trouvés : retour, litige, rebut, fournisseur

> BR-02-002-030 | Le matériel rebuté, en totalité ou en partie, destiné au retour fournisseur doit pouvoir être identifié par étiquettes pour la traçabilité. | « Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité » | Probable – placement en lane « Litige » (Fig. 5)

#### Blueprint_Retour_v0.1.docx — ligne 118 — section : 4.3.2 Document de renvoi (bon sans référence lié au PO)
Mots-clés trouvés : retour, fournisseur

> Dans le BPMN E2E, la tâche « Créer un bon sans référence » porte l’annotation « e.a. Retour fournisseur » (Figure 9). Le BPMN 5C « Créer un bon sans référence » (lane Coordinateur DC) détaille : lister les porteurs à traiter, créer un bon d’expédition sans référence (document « Bon sans ref 8* » ; infos nécessaires : « Num PO (cas QM) (BR-02-002-040) »), associer les HU au bon sans référence ; les HU sont alors prêtes pour expédition. La note BRM cite parmi les porteurs concernés « retour fournisseur (décision acheteur REC2) » (Figure 10).

#### Blueprint_Retour_v0.1.docx — ligne 119 — section : 4.3.2 Document de renvoi (bon sans référence lié au PO)
Mots-clés trouvés : retour, fournisseur

> Figure 9 – extrait BPMN « 0_Flux_DC_E2E_eWM2.0 V0.5_FR » – tâche « Créer un bon sans référence » avec annotation « e.a. Retour fournisseur »

#### Blueprint_Retour_v0.1.docx — ligne 121 — section : 4.3.2 Document de renvoi (bon sans référence lié au PO)
Mots-clés trouvés : retour, fournisseur

> Figure 10 – extrait BPMN « 5C_Création bon sans référence_eWM2.0_V2 » – création du bon d’expédition sans référence ; infos nécessaires « Num PO (cas QM) (BR-02-002-040) » ; note BRM « retour fournisseur (décision acheteur REC2) »

#### Blueprint_Retour_v0.1.docx — ligne 122 — section : 4.3.2 Document de renvoi (bon sans référence lié au PO)
Mots-clés trouvés : retour

> BR associées : BR-02-002-040 (annotée – confirmée) ; BR-05-006-050-A, BR-05-003-010-B visibles (hors extraction retour)

#### Blueprint_Retour_v0.1.docx — ligne 125 — section : 4.3.2 Document de renvoi (bon sans référence lié au PO)
Mots-clés trouvés : fournisseur

> BR-02-002-040 | Le renvoi chez le fournisseur s’appuie sur un document (ex. bon 8000…) lié au PO ; cette référence, transmise manuellement par replenishment au fournisseur, sert au transporteur pour le rendez-vous et la marchandise à enlever. | « Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever. » | Confirmé – annotée sur 5C (Fig. 10) ; probable sur l’E2E (Fig. 9)

#### Blueprint_Retour_v0.1.docx — ligne 128 — section : 4.3.3 Enlèvement par le transporteur
Mots-clés trouvés : retour, litige, fournisseur

> Le BPMN 9 « Expédition » montre la séquence générique de chargement : « Activer le chargement sur base du numéro d’expédition » (annotation BR-06-002-010), « Afficher liste des HU d’expédition », « Sortir les HU d’expédition de l’entrepôt », « Confirmer la sortie des HU d’expédition de l’entrepôt » (annotation BR-02-002-050), « Confirmer l’endroit de sortie des HU d’expédition » puis « Confirmer la fin du chargement » (Figure 11). Ces BR sont donc annotées sur le flux d’expédition générique ; leur contenu vise explicitement le retour fournisseur / litige. L’application de cette séquence à l’enlèvement d’un retour fournisseur est « À valider avec le business ».

#### Blueprint_Retour_v0.1.docx — ligne 130 — section : 4.3.3 Enlèvement par le transporteur
Mots-clés trouvés : retour

> BR associées : BR-06-002-010 et BR-02-002-050 (annotées – confirmées sur le flux expédition ; usage retour à valider) ; BR-06-003-020/-040, BR-07-007-010 visibles (hors extraction retour)

#### Blueprint_Retour_v0.1.docx — ligne 133 — section : 4.3.3 Enlèvement par le transporteur
Mots-clés trouvés : refus

> BR-02-002-050 | À l’enlèvement, le magasinier doit scanner pour vérifier que le transporteur prend bien la HU refusée, même si le même matériel est présent dans la zone. | « Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier. » | Confirmé – annotée sur 9_Flux_Expédition « Confirmer la sortie des HU d’expédition » (Fig. 11)

#### Blueprint_Retour_v0.1.docx — ligne 134 — section : 4.3.3 Enlèvement par le transporteur
Mots-clés trouvés : retour, litige, fournisseur, NNN

> BR-06-002-010 | Le coordinateur doit pouvoir créer une référence unique regroupant plusieurs HU à enlever (remise au fournisseur / présentée au comptoir par le transporteur), y compris pour un retour litige fournisseur. | « (ex : retour litige fournisseur, enlèvement d'un NNN/cons directe,...) » | Confirmé – annotée sur 9_Flux_Expédition « Activer le chargement… » (Fig. 11)

#### Blueprint_Retour_v0.1.docx — ligne 139 — section : Solution SAP EWM – à définir
Mots-clés trouvés : fournisseur

> Q07 – Type et numérotation du document de renvoi : bon 8000… (BR-02-002-040) ou bon d’expédition sans référence 8* (5C) ? Qui le crée (coordinateur DC selon 5C) et qui transmet la référence au fournisseur (replenishment selon BR-02-002-040) ?

#### Blueprint_Retour_v0.1.docx — ligne 140 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, refus, fournisseur

> Q08 – Lot QM refusé : faut-il pouvoir « annuler » simplement la réception (idée de base de BR-02-002-020) ou documenter un retour vers le fournisseur ? « À valider avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 141 — section : Solution SAP EWM – à définir
Mots-clés trouvés : rebut

> Q09 – Étiquette du matériel rebuté (BR-02-002-030) : informations attendues et moment de l’impression. « À compléter avec le business »

#### Blueprint_Retour_v0.1.docx — ligne 142 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, fournisseur

> Q10 – Enlèvement d’un retour fournisseur : même séquence que l’expédition standard (BPMN 9) ? Prise de rendez-vous par le transporteur, référence unique d’enlèvement (BR-06-002-010), contrôle par scan (BR-02-002-050).

#### Blueprint_Retour_v0.1.docx — ligne 143 — section : 4.4 Mitraille
Mots-clés trouvés : mitraille

> ## 4.4 Mitraille

#### Blueprint_Retour_v0.1.docx — ligne 144 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : mitraille

> ### 4.4.1 Mitraille après décision de l’acheteur

#### Blueprint_Retour_v0.1.docx — ligne 145 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : litige, mitraille

> Les BPMN de réception (2B, 3, 3B) et l’E2E modélisent une branche « Mitraille » après la décision de l’acheteur, se terminant par « Articles dans la lane "Litige" de la staging zone "2ième étape" disponibles pour mitraille » (Figures 2, 6, 7 et 8). Le BPMN 5B « Mettre à disposition » mentionne parmi les porteurs à traiter « Mitraille (ex. décision acheteur REC2) » et, parmi les BIN de destination possibles, « Mitraille » (Figure 12) : prioriser les porteurs, activer la ligne du porteur, proposer un BIN par HU, déposer la HU sur le BIN, associer la HU au BIN.

#### Blueprint_Retour_v0.1.docx — ligne 146 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : mitraille

> Figure 12 – extrait BPMN « 5B_Flux_Mettre_à_disposition_eWM2.0_V2 » – porteurs « Mitraille (ex. décision acheteur REC2) » et BIN de destination « Mitraille »

#### Blueprint_Retour_v0.1.docx — ligne 147 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : mitraille

> BR associées : aucune BR (GAP) – question blueprint « Mitraille » sans ID

#### Blueprint_Retour_v0.1.docx — ligne 148 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : litige, mitraille

> GAP : aucune BR de la liste n’est associée à cette branche. BR-04-002-010-A concerne le picking des articles Z3 en stock, pas la mitraille décidée par l’acheteur après un litige.

#### Blueprint_Retour_v0.1.docx — ligne 149 — section : 4.4.1 Mitraille après décision de l’acheteur
Mots-clés trouvés : refus, mitraille

> Question blueprint (onglet « Blueprint - questions », sous-processus Mitraille, sans ID BR) : « Qui prend en charge financièrement la mise en mitraille d'un article réceptionné et qui est refusé (acheteur nous dit de le mettre en mitraille). »

#### Blueprint_Retour_v0.1.docx — ligne 150 — section : 4.4.2 Mitraille de stock (articles au statut Z3)
Mots-clés trouvés : mitraille

> ### 4.4.2 Mitraille de stock (articles au statut Z3)

#### Blueprint_Retour_v0.1.docx — ligne 151 — section : 4.4.2 Mitraille de stock (articles au statut Z3)
Mots-clés trouvés : retour, mitraille

> Les BR du stockage prévoient des tâches de picking sur les articles au statut Z3 destinés à la mitraille (wave spécifique sur statut article, sans validation coordinateur selon la discussion business du 03-09-2026). Aucun BPMN du dossier analysé ne modélise ce flux. Dans la feuille de travail, l’idée d’une sortie distincte mitraille / Z3 (sous-processus « 002 Gérer la mitraille ») est annulée – « Hors scope eWM2.0. Imputation IM » ; le Master Data mentionne « A rediscuter sur le flux "retour" ».

#### Blueprint_Retour_v0.1.docx — ligne 154 — section : 4.4.2 Mitraille de stock (articles au statut Z3)
Mots-clés trouvés : mitraille

> BR-04-002-010-00 | Le système doit émettre un rapport sur les articles bientôt périmés et des tâches de picking sur les articles au statut Z3 destinés à la mitraille (« Voir split » vers A/B). | « - Tâches de picking sur les articles Z3 (pour mitraille) » | Aucun lien trouvé

#### Blueprint_Retour_v0.1.docx — ligne 155 — section : 4.4.2 Mitraille de stock (articles au statut Z3)
Mots-clés trouvés : mitraille

> BR-04-002-010-A | Le système doit émettre des tâches de picking sur les articles Z3 pour la mitraille (wave sur statut article, sans validation coordinateur selon discussion business 03-09-2026). | « Le système doit émettre : - Tâches de picking sur les articles Z3 (pour mitraille) » ; BA : « Wave spécifique pour les articles à mitrailler -> articles dont le statut = Z3 » | Aucun lien trouvé (« Pas listé dans les flux »)

#### Blueprint_Retour_v0.1.docx — ligne 156 — section : 4.4.2 Mitraille de stock (articles au statut Z3)
Mots-clés trouvés : mitraille

> BR-07-005-070 | Rapport des articles au plant specific material status Z2-Z3-Z5-ZD pour lancer un traitement spécifique (lien indirect mitraille via Z3). | BA : campagnes de picking pour sortir ces articles du magasin | Aucun lien trouvé

#### Blueprint_Retour_v0.1.docx — ligne 161 — section : Solution SAP EWM – à définir
Mots-clés trouvés : mitraille

> Q11 – Mitraille après décision acheteur : faut-il formaliser des BR (identification des HU, mise à disposition sur le BIN Mitraille, document, imputation) ? Le flux s’arrête-t-il au dépôt sur le BIN Mitraille ?

#### Blueprint_Retour_v0.1.docx — ligne 162 — section : Solution SAP EWM – à définir
Mots-clés trouvés : refus, mitraille

> Q12 – Qui prend en charge financièrement la mise en mitraille d’un article réceptionné puis refusé (question blueprint) ?

#### Blueprint_Retour_v0.1.docx — ligne 163 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour, mitraille

> Q13 – Mitraille de stock Z3 : BR-04-002-010-A est active alors que l’idée de sortie distincte mitraille / Z3 est annulée (« Hors scope eWM2.0. Imputation IM »). Le picking Z3 relève-t-il du blueprint Retour / Mitraille ou du blueprint Stockage / Outbound ?

#### Blueprint_Retour_v0.1.docx — ligne 164 — section : Solution SAP EWM – à définir
Mots-clés trouvés : mitraille

> Q01 – « Flux vente de mitraille » Hors Scope (E2E) : confirmer que l’évacuation / vente de la mitraille reste hors eWM 2.0.

#### Blueprint_Retour_v0.1.docx — ligne 165 — section : 4.5 Retours internes (retour immatriculation, retour contrôle Q)
Mots-clés trouvés : retour

> ## 4.5 Retours internes (retour immatriculation, retour contrôle Q)

#### Blueprint_Retour_v0.1.docx — ligne 168 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> Retour immatriculation → passerelle « Entreposage ? » : Non → placer la HU sur la lane adéquate de la staging zone (2° étape) puis l’associer (fin : articles immatriculés prêts pour expédition) ; Oui → proposer / confirmer le type de magasin, imprimer l’étiquette HU et placer la HU sur le porteur (fin : articles en staging zone « 2ième étape » pour mise en stock).

#### Blueprint_Retour_v0.1.docx — ligne 169 — section : Description du processus (BPMN)
Mots-clés trouvés : retour, refus, litige

> Retour contrôle Q → passerelle « Type décision ? » : Accepté → même chemin de mise en stock ; Refusé → lane « Litige » puis décision acheteur (voir 4.2).

#### Blueprint_Retour_v0.1.docx — ligne 170 — section : Description du processus (BPMN)
Mots-clés trouvés : 917

> Annotation du BPMN : « Comment faire le lien dans SAP avec le PO 45xxx initial ? Après recherche dans SAP, réconciliation avec 917 / RS / … ».

#### Blueprint_Retour_v0.1.docx — ligne 171 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> Figure 13 – extrait BPMN « 2B_Flux_Rec-Articles avec bon sans référence » – passerelle « Provenance ? » : « Retour immatriculation » / « Retour contrôle Q »

#### Blueprint_Retour_v0.1.docx — ligne 173 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> GAP : aucune BR de la liste ne porte sur « retour immatriculation » ou « retour contrôle Q ». L’idée « Au retour de l'article suite à son immatriculation, un document doit être joint avec les référence du COPO » est annulée (« n-a pour ce projet / rediscuter garage draisine »).

#### Blueprint_Retour_v0.1.docx — ligne 177 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour

> Q14 – Retour immatriculation : processus attendu, document accompagnant le retour (référence COPO ?), cas du garage draisine. Faut-il créer des BR ?

#### Blueprint_Retour_v0.1.docx — ligne 178 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour

> Q15 – Retour contrôle Q (contrôle hors site, p. ex. ICT) : comment faire le lien avec le PO 45xxx initial (question du BPMN) ? Faut-il créer des BR ?

#### Blueprint_Retour_v0.1.docx — ligne 179 — section : 4.6 Retour de HU au DC (traçabilité)
Mots-clés trouvés : retour

> ## 4.6 Retour de HU au DC (traçabilité)

#### Blueprint_Retour_v0.1.docx — ligne 181 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> Le BPMN 9 « Expédition » contient une note BRM : « ex. Q ou IMM par expédition il est important de pouvoir localiser la HU + tracer l'historique des localisations de la HU (où se trouve la HU à l'instant T + quand la HU a quitté le DC / quand la HU est arrivée à destination + au retour : quand la HU est revenue dans le DC) » (Figure 14). La même note figure sur le BPMN 5B « Mettre à disposition » (Figure 12).

#### Blueprint_Retour_v0.1.docx — ligne 182 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> Figure 14 – extrait BPMN « 9_Flux_Expédition » – note BRM : « au retour : quand la HU est revenue dans le DC »

#### Blueprint_Retour_v0.1.docx — ligne 183 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> BR associées : aucune BR retour (BR-07-007-010, voisine, est un KPI OTIF – pas un retour)

#### Blueprint_Retour_v0.1.docx — ligne 184 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> GAP : aucune BR ne formalise le suivi « HU revenue dans le DC ». La BR-07-007-010 annotée à proximité (« KPIs de suivi des transports : Marchandise enlevée OTIF / Marchandise livrée OTIF ») ne concerne pas le retour.

#### Blueprint_Retour_v0.1.docx — ligne 185 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> Par ailleurs, la BR-08-010-030 (HU non nomenclaturées) porte la mention « A traiter dans les flux "retour" » et l’idée de base « Qui s'occupe des retours? Comment? ».

#### Blueprint_Retour_v0.1.docx — ligne 188 — section : Description du processus (BPMN)
Mots-clés trouvés : retour

> BR-08-010-030 | Gérer des HU non nomenclaturées qui entrent, passent en cross-dock et ressortent vers le DC Schaerbeek. | « Le système doit pouvoir gérer des HU non nomenclaturées qui peuvent entrer, être mises en cross-dock et ressortir ensuite pour être expédié vers le DC Sch » ; flux : « A traiter dans les flux "retour" » | Aucun lien trouvé

#### Blueprint_Retour_v0.1.docx — ligne 194 — section : Solution SAP EWM – à définir
Mots-clés trouvés : retour

> Q19 – BR-08-010-030 : rattacher les HU non nomenclaturées (« HU créée en amont (ex retour) ») au blueprint Retour ? « Qui s'occupe des retours ? Comment ? »

#### Blueprint_Retour_v0.1.docx — ligne 199 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, litige, mitraille, fournisseur

> Q01 | Périmètre : l’E2E indique « flux retour » et « flux vente de mitraille » Hors Scope, alors que 2B / 3 / 3B / 5B / 5C modélisent le retour fournisseur et la mitraille. Quel est le périmètre eWM 2.0 du flux retour, et jusqu’où va-t-il (lane Litige, mise à disposition, bon sans référence, enlèvement) ? | 1.2, F2–F4 | BPMN 0 E2E (Fig. 1)

#### Blueprint_Retour_v0.1.docx — ligne 200 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, refus

> Q02 | Le refus à la vérification documentaire relève-t-il du blueprint Retour ou du blueprint Inbound ? | 4.1 | BPMN 1

#### Blueprint_Retour_v0.1.docx — ligne 201 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : refus

> Q03 | Contenu du document de refus remis au transporteur ; liste des motifs de refus. | 4.1 | BPMN 1, BR-01-001-010

#### Blueprint_Retour_v0.1.docx — ligne 202 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : litige

> Q04 | Décision de l’acheteur : qui l’enregistre, par quel canal, dans quel délai ; traitement des HU en attente en lane Litige (zone 990). | 4.2 | BPMN 2B/3/3B, BR-01-003-100

#### Blueprint_Retour_v0.1.docx — ligne 203 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, fournisseur, réparation

> Q05 | La branche « Réparation par fournisseur au DC » fait-elle partie du flux retour ? (aucune BR) | 4.2 | BPMN 2B

#### Blueprint_Retour_v0.1.docx — ligne 204 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, refus, litige, fournisseur

> Q06 | Les qté supp refusées (litige overdelivery) suivent-elles le même flux de retour fournisseur ? | 4.2 | BR-01-003-020-F, BPMN 3

#### Blueprint_Retour_v0.1.docx — ligne 205 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : fournisseur

> Q07 | Document de renvoi : bon 8000… ou bon sans référence 8* ? Qui le crée (coordinateur DC) et qui transmet la référence au fournisseur (replenishment) ? | 4.3.2 | BR-02-002-040, BPMN 5C

#### Blueprint_Retour_v0.1.docx — ligne 206 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, refus, fournisseur

> Q08 | Lot QM refusé : annulation « simple » de la réception ou retour documenté vers le fournisseur ? | 4.3.1 | BR-02-002-020 (idée de base)

#### Blueprint_Retour_v0.1.docx — ligne 207 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : rebut

> Q09 | Étiquette du matériel rebuté : contenu et moment d’impression. | 4.3.1 | BR-02-002-030

#### Blueprint_Retour_v0.1.docx — ligne 208 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour, fournisseur

> Q10 | Enlèvement d’un retour fournisseur : même séquence que l’expédition standard (rendez-vous, référence unique, scan) ? | 4.3.3 | BR-02-002-050, BR-06-002-010, BPMN 9

#### Blueprint_Retour_v0.1.docx — ligne 209 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : mitraille

> Q11 | Mitraille après décision acheteur : BR à formaliser (identification, BIN Mitraille, document, imputation) ? | 4.4.1 | BPMN 2B/3/3B/5B – GAP

#### Blueprint_Retour_v0.1.docx — ligne 210 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : refus, mitraille

> Q12 | Qui prend en charge financièrement la mise en mitraille d’un article réceptionné et refusé ? | 4.4.1 | Blueprint - questions

#### Blueprint_Retour_v0.1.docx — ligne 211 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : mitraille

> Q13 | Mitraille de stock Z3 : BR-04-002-010-A active vs idée annulée « Hors scope eWM2.0. Imputation IM » – dans quel blueprint la traiter ? | 4.4.2 | BR-04-002-010-A, FT ~169

#### Blueprint_Retour_v0.1.docx — ligne 212 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour

> Q14 | Retour immatriculation : processus, document (COPO ?), garage draisine – BR à créer ? | 4.5 | BPMN 2B – GAP, FT ~55

#### Blueprint_Retour_v0.1.docx — ligne 213 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour

> Q15 | Retour contrôle Q : lien avec le PO 45xxx initial – BR à créer ? | 4.5 | BPMN 2B – GAP

#### Blueprint_Retour_v0.1.docx — ligne 214 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : refus

> Q16 | Reporting des livraisons refusées : contenu, fréquence, destinataires. | 4.1 | BR-07-002-020

#### Blueprint_Retour_v0.1.docx — ligne 215 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : litige

> Q17 | Rapport des litiges par ligne de PO : contenu et utilisateurs. | 4.2 | BR-07-002-030

#### Blueprint_Retour_v0.1.docx — ligne 217 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour

> Q19 | BR-08-010-030 (HU non nomenclaturées, « à traiter dans les flux retour ») : à rattacher au blueprint Retour ? | 4.6 | BR-08-010-030

#### Blueprint_Retour_v0.1.docx — ligne 218 — section : 5. Points ouverts / questions pour le business
Mots-clés trouvés : retour

> Q20 | Retours annulés (retour en magasin COPO non enlevées, retours SP NL / MRP) : confirmer leur exclusion du périmètre. | Annexe B | Feuille de travail

#### Blueprint_Retour_v0.1.docx — ligne 223 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : refus

> BR-01-001-010 | Check-list acceptation / refus, traçabilité des motifs | 01 Réception – 001 Vérifier les documents de livraison | 1_Flux_Vérif documentaire – check-list phase 1 & 2 ; branche Refusé | 3, 4 | Confirmé (check-lists) / probable (Refusé)

#### Blueprint_Retour_v0.1.docx — ligne 224 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : refus

> BR-07-002-020 | Reporting livraisons refusées (camions refusés) | 07 Reporting – 002 Réception | 1_Flux_Vérif documentaire – fin « Réception refusée » | 4 | Probable

#### Blueprint_Retour_v0.1.docx — ligne 225 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : litige

> BR-01-003-020-F | Litige automatique en cas d’overdelivery | 01 Réception – 003 Réceptionner PO 1ière étape pour stock | 3_Flux_Rec-Etape2-Stock – amont « Décision acheteur ? » | 7 | Probable

#### Blueprint_Retour_v0.1.docx — ligne 226 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : litige

> BR-01-003-100 | Canal de communication « gestion des litiges » | 01 Réception – 003 | – | – | Aucun

#### Blueprint_Retour_v0.1.docx — ligne 227 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour, refus, fournisseur

> BR-01-003-110 | Tracer le retour d’une quantité refusée par l’acheteur | 01 Réception – 003 | 3_Flux_Rec-Etape2-Stock – branche Retour fournisseur (annotée) ; 2B, 3B | 7 (6, 8) | Confirmé (3) / probable (2B, 3B)

#### Blueprint_Retour_v0.1.docx — ligne 228 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : litige

> BR-07-002-030 | Rapport des litiges par ligne de PO | 07 Reporting – 002 Réception | – | – | Aucun

#### Blueprint_Retour_v0.1.docx — ligne 229 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour, refus, fournisseur

> BR-02-002-010 | HU dédiées au retour fournisseur | 02 Check QM – 002 Implémenter la décision (lot refusé) | Fins « disponibles pour retour vers fournisseur » 2B / 3 / 3B | 6–8 | Probable

#### Blueprint_Retour_v0.1.docx — ligne 230 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : refus, litige

> BR-02-002-020 | Étapes de refus / renvoi guidées par scanner | 02 Check QM – 002 | Chemin Refusé → Litige → décision acheteur | 5–8 | Probable

#### Blueprint_Retour_v0.1.docx — ligne 231 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : litige, rebut

> BR-02-002-030 | Étiquetage du matériel rebuté | 02 Check QM – 002 | Lane « Litige » 2B | 5 | Probable

#### Blueprint_Retour_v0.1.docx — ligne 232 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour, fournisseur

> BR-02-002-040 | Document de renvoi lié au PO (bon 8000…) | 02 Check QM – 002 | 5C – « Num PO (cas QM) (BR-02-002-040) » ; 0 E2E « e.a. Retour fournisseur » | 10 (9) | Confirmé (5C) / probable (E2E)

#### Blueprint_Retour_v0.1.docx — ligne 233 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : refus

> BR-02-002-050 | Scan de contrôle de la HU refusée à l’enlèvement | 02 Check QM – 002 | 9_Flux_Expédition – « Confirmer la sortie des HU d’expédition » | 11 | Confirmé (flux expédition)

#### Blueprint_Retour_v0.1.docx — ligne 234 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour, litige, fournisseur

> BR-06-002-010 | Référence unique d’enlèvement (dont retour litige fournisseur) | 06 Expédition – 002 Mise à disposition pour enlèvement | 9_Flux_Expédition – « Activer le chargement sur base du n° d’expédition » | 11 | Confirmé (flux expédition)

#### Blueprint_Retour_v0.1.docx — ligne 235 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : mitraille

> BR-04-002-010-00 | Rapport articles périmés + picking Z3 (mitraille) | 04 Stockage – 002 Gérer les articles FEFO | – | – | Aucun

#### Blueprint_Retour_v0.1.docx — ligne 236 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : mitraille

> BR-04-002-010-A | Picking des articles Z3 pour mitraille (wave) | 04 Stockage – 001 Gérer les articles non conformes | – | – | Aucun

#### Blueprint_Retour_v0.1.docx — ligne 238 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour

> BR-08-010-030 | HU non nomenclaturées (« à traiter dans les flux retour ») | 08 | – | – | Aucun

#### Blueprint_Retour_v0.1.docx — ligne 239 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : mitraille

> (GAP) | Mitraille après décision acheteur | – | 0 E2E, 2B, 3, 3B, 5B – branche / BIN « Mitraille » | 2, 6–8, 12 | Aucune BR

#### Blueprint_Retour_v0.1.docx — ligne 240 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour

> (GAP) | Retour immatriculation / retour contrôle Q | – | 2B – passerelle « Provenance ? » | 13 | Aucune BR

#### Blueprint_Retour_v0.1.docx — ligne 242 — section : Annexe A – Traçabilité BR / BPMN / figures
Mots-clés trouvés : retour

> (hors sujet) | BR-01-003-020-E, BR-07-007-010 : ID lus sur les extraits mais sans lien avec le retour | – | 3 (Fig. 7), 9 (Fig. 11, 14) | – | –

#### Blueprint_Retour_v0.1.docx — ligne 245 — section : Liste des figures
Mots-clés trouvés : retour, mitraille

> Figure 1 – 0_Flux_DC_E2E_eWM2.0 V0.5_FR – annotation « Hors Scope : flux retour / flux vente de mitraille »

#### Blueprint_Retour_v0.1.docx — ligne 246 — section : Liste des figures
Mots-clés trouvés : retour, refus, mitraille, fournisseur, échantillon

> Figure 2 – 0_Flux_DC_E2E_eWM2.0 V0.5_FR – articles refusés QM → « Consolider échantillons + articles stockés » → passerelle « Mitraille » / « Retour fournisseur »

#### Blueprint_Retour_v0.1.docx — ligne 248 — section : Liste des figures
Mots-clés trouvés : refus

> Figure 4 – 1_Flux_Vérif documentaire_eWM2.0_V1 – branche « Refusé » : encoder motifs de refus → générer incident → remettre document de refus au transporteur → « Réception refusée »

#### Blueprint_Retour_v0.1.docx — ligne 249 — section : Liste des figures
Mots-clés trouvés : refus, litige, échantillon

> Figure 5 – 2B_Flux_Rec-Articles avec bon sans référence – branche « Refusé » : placer / associer la HU dans la lane « Litige » (zone 990) et consolidation échantillon + articles QM stockés

#### Blueprint_Retour_v0.1.docx — ligne 250 — section : Liste des figures
Mots-clés trouvés : retour, mitraille, fournisseur, réparation

> Figure 6 – 2B_Flux_Rec-Articles avec bon sans référence – passerelle « Décision acheteur ? » : réparation par fournisseur au DC / retour fournisseur / mitraille

#### Blueprint_Retour_v0.1.docx — ligne 251 — section : Liste des figures
Mots-clés trouvés : retour, refus, mitraille, fournisseur

> Figure 7 – 3_Flux_Rec-Etape2-Stock_eWM2.0_V3 – qté supp refusées / toutes quantités refusées → « Décision acheteur ? » → Retour fournisseur (BR-01-003-110) / Mitraille

#### Blueprint_Retour_v0.1.docx — ligne 252 — section : Liste des figures
Mots-clés trouvés : retour, litige, mitraille, fournisseur, NNN

> Figure 8 – 3B_Flux_Rec-Etape2-NNN-Cons-Dir_eWM2.0_V2 – lane « Litige » → « Décision acheteur » → clôturer la livraison entrante 18* → Retour fournisseur / Mitraille

#### Blueprint_Retour_v0.1.docx — ligne 253 — section : Liste des figures
Mots-clés trouvés : retour, fournisseur

> Figure 9 – 0_Flux_DC_E2E_eWM2.0 V0.5_FR – tâche « Créer un bon sans référence » avec annotation « e.a. Retour fournisseur »

#### Blueprint_Retour_v0.1.docx — ligne 254 — section : Liste des figures
Mots-clés trouvés : retour, fournisseur

> Figure 10 – 5C_Création bon sans référence_eWM2.0_V2 – création du bon d’expédition sans référence ; infos nécessaires « Num PO (cas QM) (BR-02-002-040) » ; note BRM « retour fournisseur (décision acheteur REC2) »

#### Blueprint_Retour_v0.1.docx — ligne 256 — section : Liste des figures
Mots-clés trouvés : mitraille

> Figure 12 – 5B_Flux_Mettre_à_disposition_eWM2.0_V2 – porteurs « Mitraille (ex. décision acheteur REC2) » et BIN de destination « Mitraille »

#### Blueprint_Retour_v0.1.docx — ligne 257 — section : Liste des figures
Mots-clés trouvés : retour

> Figure 13 – 2B_Flux_Rec-Articles avec bon sans référence – passerelle « Provenance ? » : « Retour immatriculation » / « Retour contrôle Q »

#### Blueprint_Retour_v0.1.docx — ligne 258 — section : Liste des figures
Mots-clés trouvés : retour

> Figure 14 – 9_Flux_Expédition – note BRM : « au retour : quand la HU est revenue dans le DC »

#### Blueprint_Retour_v0.1.docx — ligne 259 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> # Annexe B – Idées annulées liées aux retours (feuille de travail)

#### Blueprint_Retour_v0.1.docx — ligne 263 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> ~55 | « Au retour de l'article suite à son immatriculation, un document doit être joint avec les référence du COPO » | Annulé – n-a pour ce projet / rediscuter garage draisine

#### Blueprint_Retour_v0.1.docx — ligne 264 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> ~112 | Flux « retour en magasin » COPO non enlevées → STO retour mag2/8 | Annulé – Hors scope

#### Blueprint_Retour_v0.1.docx — ligne 265 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> ~136 | Retours en SP (NL, MRP) | Annulé – Hors scope MRP

#### Blueprint_Retour_v0.1.docx — ligne 266 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> ~150 | « Retours? » | Annulé – repris ailleurs

#### Blueprint_Retour_v0.1.docx — ligne 267 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour, fournisseur

> ~154 | Retours de PO vers fournisseurs (non-conformité QA) | Annulé – repris (num ligne 223 → famille BR-02-002 / BR-01-003-110)

#### Blueprint_Retour_v0.1.docx — ligne 268 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : mitraille

> ~169 | Sortie distincte mitraille / Z3 (sous-processus « 002 Gérer la mitraille ») | Annulé – Hors scope eWM2.0 Imputation IM

#### Blueprint_Retour_v0.1.docx — ligne 270 — section : Annexe B – Idées annulées liées aux retours (feuille de travail)
Mots-clés trouvés : retour

> Onglet « 8 BR Retour » : une seule proposition « Qui s'occupe des retours? Comment? » (sans NR) – reprise via BR-08-010-030.

#### Blueprint_Retour_v0.1.docx — ligne 272 — section : Annexe C – Sources
Mots-clés trouvés : retour

> Liste des Business Requirements eWM 2.0 (Google Sheet « Business Requiremens eWM 2-0 (2) »), id Drive 1i_gU0lllY9zc0nFiBbZ_k_5oqVSoVCHaVj6BqzgE7y8 – onglets « Business Requirements 20260220 », « BR - Feuille de travail », « Master Data », « 8 BR Retour », « 5 BR Prep expédition », « Blueprint - questions ».

#### Blueprint_Retour_v0.1.docx — ligne 273 — section : Annexe C – Sources
Mots-clés trouvés : NNN

> BPMN : Mon Drive > Projet EWM 2.0 - Ronet > BPMN Flux – fichiers 0_Flux_DC_E2E_eWM2.0 V0.5_FR, 1_Flux_Vérif documentaire_eWM2.0_V1, 2B_Flux_Rec-Articles avec bon sans référence, 3_Flux_Rec-Etape2-Stock_eWM2.0_V3, 3B_Flux_Rec-Etape2-NNN-Cons-Dir_eWM2.0_V2, 5B_Flux_Mettre_à_disposition_eWM2.0_V2, 5C_Création bon sans référence_eWM2.0_V2, 9_Flux_Expédition.

---

## Blueprint_Retour_Extraits_BPMN_v0.2.docx
Source : Drive 1_xcUEpoiOm0IbA37_gINgg5bTSsmHmfU
Texte de référence : `Blueprint_Retour_Extraits_BPMN_v0.2.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **17**

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 1 — section : (début du document)
Mots-clés trouvés : retour

> SAP EWM 2.0 Retour Blueprint FR – Extraits BPMNBrouillon v0.2 – pour discussion – 02/11/2026SAP EWM 2.0 Retour Blueprint FR – Extraits BPMNBrouillon v0.2 – pour discussion – 02/11/2026 

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 2 — section : (début du document)
Mots-clés trouvés : retour

> Ce document regroupe les extraits BPMN (screenshots) liés au flux retour, classés par flux BPMN. Statut : Brouillon – pour discussion.

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 7 — section : (début du document)
Mots-clés trouvés : retour

> 0.1 | 02/11/2026 | Moustafa Kayali (consultant SAP EWM) | Brouillon initial – initiation du blueprint Retour, pour discussion avec le business

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 12 — section : 0 – Flux DC E2E
Mots-clés trouvés : retour, mitraille

> Figure 1 – Annotation « Hors Scope : flux retour / flux vente de mitraille »

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 13 — section : 0 – Flux DC E2E
Mots-clés trouvés : retour, mitraille, fournisseur, échantillon

> Figure 2 – Consolider échantillons + articles stockés → Gateway : Mitraille / Retour fournisseur

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 14 — section : 0 – Flux DC E2E
Mots-clés trouvés : retour, fournisseur

> Figure 3 – Tâche « Créer un bon sans référence » – annotation « e.a. Retour fournisseur »

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 18 — section : 1 – Flux Vérification documentaire
Mots-clés trouvés : refus

> Figure 5 – Branche « Refusé » : encoder motifs de refus → générer incident → remettre document de refus au transporteur → Réception refusée

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 21 — section : 2B – Réception articles avec bon sans référence
Mots-clés trouvés : retour

> Figure 6 – Gateway Provenance : Retour immatriculation / Retour contrôle Q

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 22 — section : 2B – Réception articles avec bon sans référence
Mots-clés trouvés : refus, litige, échantillon

> Figure 7 – Type décision « Refusé » : HU dans la lane « Litige » (zone 990) → consolider échantillon + articles QM

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 23 — section : 2B – Réception articles avec bon sans référence
Mots-clés trouvés : retour, mitraille, fournisseur, réparation

> Figure 8 – Gateway Décision acheteur : Réparation par fournisseur au DC / Retour fournisseur / Mitraille

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 26 — section : 3 – Réception étape 2 – Stock
Mots-clés trouvés : retour, refus, mitraille, fournisseur

> Figure 9 – Qté supp refusées / toutes quantités refusées → Gateway Décision acheteur : Retour fournisseur / Mitraille

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 27 — section : 3B – Réception étape 2 – NNN / Consommation directe
Mots-clés trouvés : NNN

> # 3B – Réception étape 2 – NNN / Consommation directe

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 28 — section : 3B – Réception étape 2 – NNN / Consommation directe
Mots-clés trouvés : NNN

> 3B_Flux_Rec-Etape2-NNN-Cons-Dir_eWM2.0_V2.bmp

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 29 — section : 3B – Réception étape 2 – NNN / Consommation directe
Mots-clés trouvés : retour, litige, mitraille, fournisseur

> Figure 10 – Lane « Litige » → Décision acheteur → Clôturer la livraison entrante 18* → Retour fournisseur / Mitraille

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 32 — section : 5B – Mettre à disposition
Mots-clés trouvés : mitraille

> Figure 11 – Porteurs à traiter « Mitraille (ex. décision acheteur REC2) » et BIN de destination « Mitraille »

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 35 — section : 5C – Création bon sans référence
Mots-clés trouvés : retour, fournisseur

> Figure 12 – Créer un bon d’expédition sans référence (porteurs dont retour fournisseur – décision acheteur REC2)

#### Blueprint_Retour_Extraits_BPMN_v0.2.docx — ligne 39 — section : 9 – Flux Expédition
Mots-clés trouvés : retour

> Figure 14 – Note BRM : traçabilité de la HU « au retour : quand la HU est revenue dans le DC »

---

## BR_Flux_Retour.xlsx
Source : Drive 1w_79ffJROhxwbaioUwlMtmDAGwobMgGF

Nombre d’extraits : **35**

### Onglet « BR Retour » (ligne d’en-tête détectée : L3)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 1
Mots-clés trouvés : retour

- **A « NR BR »** : BR liées au flux Retour (directes) — discussion business 02/11/2026

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 2
Mots-clés trouvés : retour

- **A « NR BR »** : Sources (lecture seule) : liste des BR « Business Requiremens eWM 2-0 (2) », onglet Business Requirements 20260220 ; feuille de travail pour le texte d’origine ; gap list 27-10. Aucune décision inventée. Note : il n’existe pas d’étape processus « Retour » peuplée de BR numérotées dans la liste maître.

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 4
Mots-clés trouvés : retour, refus, litige, fournisseur

- **A « NR BR »** : BR-01-003-110
- **B « Etape processus »** : _01_Réception_Ontvangst
- **C « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **D « Description formalisée FR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **E « Texte d’origine / idée de base (si différent) »** : Le système doit pouvoir tracer le retour d'une quantité trop livrée si l'acheteur refuse une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : x (Etape 2 stock)
- **H « BR intégré dans blueprint »** : x
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP BR-01-003-110 (à requalifier)
- **M « Statut GAP »** : Analysé (Inbound)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 5
Mots-clés trouvés : retour, refus, fournisseur

- **A « NR BR »** : BR-02-002-010
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **D « Description formalisée FR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **E « Texte d’origine / idée de base (si différent) »** : HU Managed pour le retour fournisseur, identifié dans eWM tant que c'est dans le magasin
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP possible BR-02-002-010
- **M « Statut GAP »** : À analyser (QM)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 6
Mots-clés trouvés : refus

- **A « NR BR »** : BR-02-002-020
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **D « Description formalisée FR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **E « Texte d’origine / idée de base (si différent) »** : Pouvoir être 'simple' pour annuler la réception si lot QM est refusé
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP possible BR-02-002-020
- **M « Statut GAP »** : A clarifier avec business (QM)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 7
Mots-clés trouvés : retour, refus, rebut, fournisseur

- **A « NR BR »** : BR-02-002-030
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **D « Description formalisée FR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **E « Texte d’origine / idée de base (si différent) »** : Il faut pouvoir identifier le matériel rebuté en entier ou en partiel pour le retour fournisseur (étiquette)
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP BR-02-002-030
- **M « Statut GAP »** : A clarifier avec business (QM)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 8
Mots-clés trouvés : refus, fournisseur

- **A « NR BR »** : BR-02-002-040
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **D « Description formalisée FR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **E « Texte d’origine / idée de base (si différent) »** : Quand on contacte le fournisseur, dans SAP on a besoin d'une expédition / enlèvement à prévoir, une espèce bon 8K, le fournisseur transmet le N° de doc au transporteur. Ce doc assure le suivi à l'exped.
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : x (Créer bon sans référence)
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : BR-02-002-040
- **M « Statut GAP »** : À analyser (QM)

#### BR_Flux_Retour.xlsx — onglet « BR Retour », ligne 9
Mots-clés trouvés : refus, fournisseur

- **A « NR BR »** : BR-02-002-050
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **D « Description formalisée FR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **E « Texte d’origine / idée de base (si différent) »** : Il faut pouvoir contrôler que le fournisseur enlève la bonne HU refusée, même s'il y a le même matériel se trouve dans la même zone. Scan à l'enlèvement par le fournisseur
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **H « BR intégré dans blueprint »** : x
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : BR-02-002-050  | GAP BR-02-002-050
- **M « Statut GAP »** : A clarifier avec business (Outbound) | A clarifier avec business (QM)

### Onglet « Liées indirectement » (ligne d’en-tête détectée : L3)

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 1
Mots-clés trouvés : retour

- **A « NR BR »** : BR d’autres flux qui touchent aux retours (indirectes)

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 2
Mots-clés trouvés : retour

- **A « NR BR »** : Sources (lecture seule) : liste des BR « Business Requiremens eWM 2-0 (2) », onglet Business Requirements 20260220 ; feuille de travail pour le texte d’origine ; gap list 27-10. Aucune décision inventée. Note : il n’existe pas d’étape processus « Retour » peuplée de BR numérotées dans la liste maître.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 4
Mots-clés trouvés : retour, refus, fournisseur, labo, échantillon

- **A « NR BR »** : BR-02-000-010
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **D « Description formalisée FR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **E « Texte d’origine / idée de base (si différent) »** : Il doit être possible de prendre la DU (acceptée / partiellement acceptée / refusée) sur un lot d'inspection que la marchandise est entièrement envoyée pour inspection / seul un échantillon est envoyé (= types magasin différents)
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP possible BR-02-000-010 | GAP possible BR-02-001-010
- **M « Statut GAP »** : À analyser (QM)
- **N « Lien avec le retour »** : Décision QM d’acceptation/refus du lot (y compris sans réintégration des échantillons) : déclenche ou non le flux de retour fournisseur.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 5
Mots-clés trouvés : refus

- **A « NR BR »** : BR-02-000-020
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **D « Description formalisée FR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **E « Texte d’origine / idée de base (si différent) »** : Le flux de communication autour de l'acceptation / refus de lot d'inspection - visuel et par e-mail - doit être rediscuté et traduit en Business Requirements
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP possible BR-02-000-020
- **M « Statut GAP »** : À analyser (QM)
- **N « Lien avec le retour »** : Communication vers l’acheteur et le DC en cas de refus partiel : étape amont du renvoi.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 6
Mots-clés trouvés : retour, fournisseur

- **A « NR BR »** : BR-02-001-020
- **B « Etape processus »** : _02_CheckQM_Qmverificatie
- **C « Etape sous-processus »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **D « Description formalisée FR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **E « Texte d’origine / idée de base (si différent) »** : Le système doit permettre à l'inspecteur (réceptionnaire QM) de pouvoir décider qu'une livraison peut être acceptée au DC en "stock bloqué" afin de pouvoir venir faire l'inspection facultativement au DC à la place de chez le fournisseur
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP possible BR-02-001-020
- **M « Statut GAP »** : À analyser (QM)
- **N « Lien avec le retour »** : Remplacement du contrôle chez le fournisseur par un contrôle au DC : change le moment où un retour peut être décidé.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 7
Mots-clés trouvés : retour, avoir, 917

- **A « NR BR »** : BR-04-001-020-A
- **B « Etape processus »** : _04_Stockage_Opslag
- **C « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **D « Description formalisée FR »** :
  > Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au client
  > (pourquoi bloqué, historique...)
  > - Isoler sur place (dans la bin) = empêcher le picking sur ces pièces 
  > - ou transférer vers une zone quarantaine
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **I « BA - action en cours »** : 0
- **J « BA - actions »** :
  >
  > 01-09-2026 : Souhaite-t-on vraiment pouvoir les mettre physiquement en zone de quarantaine ou bien suivi via SAP? -> 
  > 01-09-2026 : Après discussion avec Jonathan : Il doit être possible, par exemple de les sortir de la BIN et de les mettre en 917 le temps de les analyser.
  > -> On veut pouvoir bloquer le stock et avoir son tracking : qui l'a bloqué, quand, pourquoi
- **L « GAP ID »** : GAP BR-04-001-010 | — (couvert EWM GZH) | GAP possible BR-04-001-020-B
- **M « Statut GAP »** : À analyser (Internal) | À analyser (QM)
- **N « Lien avec le retour »** : Isolement / quarantaine d’articles non conformes en stock : peut précéder un retour ou une destruction.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 8
Mots-clés trouvés : retour

- **A « NR BR »** : BR-04-001-020-B
- **B « Etape processus »** : _04_Stockage_Opslag
- **C « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **D « Description formalisée FR »** :
  > pas encore de BR > à discuter avec autre pilier > fichier "Input à valider" ID34
  >
  > Besoin détecté : quand article est bloqué pour picking et en attente d'une décision -> assurer suivi du sort de l'article pour qu'il ne s'éternise pas dans le stock
  > -> Assurer le suivi des incidents
  > (Note : traiter ce point dans les "flux internes")
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **I « BA - action en cours »** : 1
- **J « BA - actions »** :
  > ID34 fichier "Input à valider"  : 
  >
  > Après qu’un article a été pris en stock, il est possible que des questions surgissent quant à sa conformité (ex. : une pièce ne correspond pas au descriptif du NN, des doutes surgissent quant au vieillissement ou aux caractéristiques de la pièce, etc.). Ces questionnements peuvent émaner du DC (ex. lors d’un picking) ou d’un autre service (Replenishment, gestionnaire technique, etc.).
  >
  > En attendant qu’il soit statué sur la conformité de l’article, les pièces concernées sont rendues indisponibles au picking client.
  >
  > Lorsque l’initiative émane du DC, celui-ci doit pouvoir identifier l’interlocuteur chargé de statuer sur la question. Les personnes concernées doivent recevoir l’information ainsi qu’un appel à action.
  >
  > Que l’initiative émane du DC ou d’un autre service, le DC a besoin d’un retour décisionnel de la part des personnes chargées de statuer. Le suivi doit pouvoir être assuré par le système.
- **L « GAP ID »** : GAP BR-04-001-010 | GAP possible BR-04-001-020-B
- **M « Statut GAP »** : À analyser (Internal) | À analyser (QM)
- **N « Lien avec le retour »** : Besoin de suivi de la décision sur un article bloqué (pas encore de BR formalisé) : sortie possible vers retour.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 9
Mots-clés trouvés : retour, fournisseur

- **A « NR BR »** : BR-04-004-040
- **B « Etape processus »** : _04_Stockage_Opslag
- **C « Etape sous-processus »** : 004 Gérer les mouvements internes
- **D « Description formalisée FR »** :
  > Le système doit permettre de renvoyer en stock lorsque l'article est en zone d'overflow
  > Note : zone d'overflow = zone tampon (ex : articles dangereux reçus mais plus de bin appropriée dispo à ce moment là)
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **H « BR intégré dans blueprint »** : x
- **K « Statut feuille de travail (si présent) »** : OK
- **N « Lien avec le retour »** : Renvoi en stock depuis une zone d’overflow : réintégration interne, pas un retour client/fournisseur.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 10
Mots-clés trouvés : avoir

- **A « NR BR »** : BR-06-003-020
- **B « Etape processus »** : _06_Expédition_Verzending
- **C « Etape sous-processus »** : 003 Charger les marchandises
- **D « Description formalisée FR »** : Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **H « BR intégré dans blueprint »** : x
- **K « Statut feuille de travail (si présent) »** : OK
- **N « Lien avec le retour »** : Encodage manuel du retrait des HU par le chauffeur milkrun en cas de problème technique : lié aux HU non emportées / reprises.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 12
Mots-clés trouvés : retour, refus

- **A « NR BR »** : BR-07-002-020
- **B « Etape processus »** : _07_Reporting
- **C « Etape sous-processus »** : 002 Réception
- **D « Description formalisée FR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **E « Texte d’origine / idée de base (si différent) »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **H « BR intégré dans blueprint »** : x
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP BR-07-002-020
- **M « Statut GAP »** : Analysé (Reporting)
- **N « Lien avec le retour »** : Reporting des livraisons refusées (même sans MIGO) : mesure le flux de refus / retours entrants.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 13
Mots-clés trouvés : retour

- **A « NR BR »** : BR-08-010-030
- **B « Etape processus »** : _08_Autre_Anders
- **C « Etape sous-processus »** : Autre
- **D « Description formalisée FR »** : Le système doit pouvoir gérer des HU non nomenclaturées qui peuvent entrer, être mises en cross-dock et ressortir ensuite pour être expédié vers le DC Sch
- **E « Texte d’origine / idée de base (si différent) »** : Qui s'occupe des retours? Comment?
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** : A traiter dans les flux "retour"
- **I « BA - action en cours »** : 0
- **J « BA - actions »** :
  > 10/06/26 - @ JST: que veut-on exactement? Réceptionner une HU existante (vide) ou créer une nouvelle HU (vide)
  > 12-06-2026 : HU créée en amont (ex retour) pour être utilisée dans l'EDI, arrive au DC de Ronet et cross-dock pour être expédiée à Sch
- **K « Statut feuille de travail (si présent) »** : OK
- **N « Lien avec le retour »** : HU non nomenclaturées (cross-dock). Dans la feuille de travail, l’idée d’origine de cette ligne était « Qui s’occupe des retours? Comment? » — à clarifier.

#### BR_Flux_Retour.xlsx — onglet « Liées indirectement », ligne 14
Mots-clés trouvés : retour, NNN

- **A « NR BR »** : BR-05-001-010
- **B « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **C « Etape sous-processus »** : 001 Faire immatriculer les articles
- **D « Description formalisée FR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article. 
  > L'article doit alors se trouver dans une zone particulière.
- **E « Texte d’origine / idée de base (si différent) »** : Le système doit permettre de suivre un article qui part à l'immatriculation
- **F « Onglet source »** : Business Requirements 20260220
- **G « BR intégré dans flux eWM2.0 »** :
  > x (REC 2 stock)
  > x (REC 2 NNN/cons dir)
- **H « BR intégré dans blueprint »** :
  > …
  > x
- **I « BA - action en cours »** : 2
- **J « BA - actions »** : 07-07-2026 : Ne pas oublier de traiter la partie "immatriculation" et "QM" du flux Réc 2 pour stock -> A traiter dans le blueprint QM
- **K « Statut feuille de travail (si présent) »** : OK
- **L « GAP ID »** : GAP BR-05-001-010
- **M « Statut GAP »** : A confirmer avec business (Inbound) | A confirmer avec business (QM) | À analyser (Immatriculation)
- **N « Lien avec le retour »** : Suivi immatriculation (zone + traçabilité) : un besoin « au retour de l’article après immatriculation » a été annulé / à rediscuter avec le garage draisine.

### Onglet « Questions » (ligne d’en-tête détectée : L3)

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 1
Mots-clés trouvés : retour

- **A « N° »** : Questions au business — flux Retour (à traiter le 02/11/2026)

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 4
Mots-clés trouvés : retour

- **A « N° »** : 1
- **B « Question »** : Qui porte le flux « Retour » côté métier, et quels cas sont dans le périmètre eWM 2.0 ?
- **C « Éléments observés dans les sources »** : L’onglet « 8 BR Retour » ne contient qu’une ligne : « Qui s’occupe des retours? Comment? ». Aucune BR numérotée n’est rattachée à une étape « Retour » dans l’onglet maître. Les BR-08-* sont sous « _08_Autre_Anders ». L’onglet gap « GAP List Retours » est vide.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 5
Mots-clés trouvés : retour, fournisseur

- **A « N° »** : 2
- **B « Question »** : Quels types de retours faut-il couvrir : retour fournisseur (QM / overdelivery), retour depuis SP/mag2-8, retour de chantier (COPO), reprise de HU non emportées, retour après immatriculation ?
- **C « Éléments observés dans les sources »** : Les seules BR formalisées qui parlent explicitement de retour / renvoi fournisseur sont BR-01-003-110 et BR-02-002-010 à -050. Un besoin « retour en magasin de réservations COPO non enlevées (STO mag2/8 → répartiteur) » est Annulé / Hors scope. Un besoin « au retour après immatriculation, document COPO » est Annulé (« n-a pour ce projet / A rediscuter avec garage draisine »).

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 6
Mots-clés trouvés : retour

- **A « N° »** : 3
- **B « Question »** : Le besoin « Qui s’occupe des retours? » a-t-il été volontairement reformulé en BR-08-010-030 (HU non nomenclaturées / cross-dock vers Sch), ou s’agit-il d’un autre sujet ?
- **C « Éléments observés dans les sources »** : Dans la feuille de travail, l’idée de base « Qui s’occupe des retours? Comment? » porte le NR BR-08-010-030, mais la description formalisée parle de HU non nomenclaturées en cross-dock vers le DC Sch, sans mention de retours.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 7
Mots-clés trouvés : retour

- **A « N° »** : 4
- **B « Question »** : Faut-il une BR (ou un gap) dédié aux HU prévues à l’expédition mais non emportées / à remettre en stock ?
- **C « Éléments observés dans les sources »** : Le blueprint Outbound décrit « Totalité des HU n’est pas emportée » / « Hus prévues mais non-emportées ». BR-06-003-020 et BR-06-003-030 s’en rapprochent sans dire « retour ». Aucune BR « Retour » nommée pour ce cas.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 8
Mots-clés trouvés : retour, refus, fournisseur

- **A « N° »** : 5
- **B « Question »** : Comment articuler BR-01-003-110 (retour quantité refusée à la réception) et BR-02-002-040 (document de renvoi lié au PO) : même flux documentaire ou deux cas distincts ?
- **C « Éléments observés dans les sources »** : Les deux parlent d’un retour / renvoi fournisseur. La gap QM sur BR-02-002-040 indique un lien avec GAP BR-01-003-110. L’onglet Inbound a « GAP BR-01-003-110 (à requalifier) », statut Analysé.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 9
Mots-clés trouvés : retour, fournisseur, NNN

- **A « N° »** : 6
- **B « Question »** : Que faut-il faire du gap NNN « Définir le traitement du retour fournisseur » (GAP — ID à attribuer, statut Analysé) : le rattacher à BR-01-003-110 / BR-02-002-* ou créer une BR Retour dédiée ?
- **C « Éléments observés dans les sources »** : Présent dans la gap list 27-10, onglet NNN, sans ID BR.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 10
Mots-clés trouvés : retour, refus, fournisseur

- **A « N° »** : 7
- **B « Question »** : Les BR-02-002-* (retour fournisseur après refus QM) doivent-elles figurer dans un blueprint Retour, QM, Outbound (enlèvement), ou plusieurs ?
- **C « Éléments observés dans les sources »** : BR-02-002-050 apparaît dans la gap Outbound et la gap QM. BR-02-002-040 a « BR intégré dans flux » = « x (Créer bon sans référence) » ; BR-02-002-050 = « x (Expédition) ». Seules BR-01-003-110 et BR-02-002-050 ont « BR intégré dans blueprint » renseigné (x).

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 11
Mots-clés trouvés : retour

- **A « N° »** : 8
- **B « Question »** : Confirmez-vous que le STO de retour magasin 2/8 → répartiteur reste hors scope eWM 2.0 ?
- **C « Éléments observés dans les sources »** : Feuille de travail : statut Annulé, description « Hors scope -> Le mag2/8 effectue un STO de retour vers le répartiteur (GZH/Sch/Ronet) ».

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 13
Mots-clés trouvés : retour

- **A « N° »** : Pour mémoire — idées Annulées liées aux retours (feuille de travail, sans NR BR actif)

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 14
Mots-clés trouvés : retour

- **A « N° »** : Ligne 54.0
- **B « Question »** : Au retour de l'article suite à son immatriculation, un document doit être joint avec les référence du COPO
- **C « Éléments observés dans les sources »** :
  > Statut : Annulé — n-a pour ce projet
  > A rediscuter avec garage draisine

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 15
Mots-clés trouvés : retour

- **A « N° »** : Ligne 111.0
- **B « Question »** :
  > Le système doit pouvoir gérer le flux "retour en magasin" de réservations COPO préparées mais non enlevées dans le délai accordé. Afin d'annuler la préparation de commande et refaire la mise en stock dans le magasin.
  > Remarque : On considère que tous les autres flux "retour " sont redirigés vers Schaerbeek qui dispatchera, au besoin,  vers les DC's ==> STO normal 
- **C « Éléments observés dans les sources »** : Statut : Annulé — Hors scope -> Le mag2/8 effectue un STO de retour vers le répartiteur (GZH/Sch/Ronet)

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 16
Mots-clés trouvés : retour

- **A « N° »** : Ligne 135.0
- **B « Question »** :
  > Omzetting van ATB --> STO: beperkt tot 1x/week om de ATBs te laten consolideren (bv. in geval van retours in SP) --> anders kan het voor ruimteproblemen zorgen in SPs (artikelen zijn geretourneerd in SPs maar zijn tussentijd al gepikt in DCs)
  > + JVC/MR 21/11: 
  > - Ronet: job DA tourne tous les jours, job DA --> STO tourne la veille de la prépa.
  > - A GZH: pick tous les jours
  > Il faut le même fonctionnement std pour tous les SPs/DCs 
  >
- **C « Éléments observés dans les sources »** : Statut : Annulé — Hors scope - Flux MRP en amont de eWM.

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 17
Mots-clés trouvés : retour

- **A « N° »** : Ligne 149.0
- **B « Question »** :
  > Retours?
  >
- **C « Éléments observés dans les sources »** : Statut : Annulé — Repris dans "Num ligne 208"

#### BR_Flux_Retour.xlsx — onglet « Questions », ligne 18
Mots-clés trouvés : retour, fournisseur

- **A « N° »** : Ligne 153.0
- **B « Question »** : Le système doit pouvoir, en cas de non conformité (QA & #) traiter les retours de commandes (PO's) vers le fournisseurs afin de mettre le matériel à disposition pour enlèvement et de tracer ce flux retour.
- **C « Éléments observés dans les sources »** : Statut : Annulé — Repris dans "Num ligne 223"

---

## GAP_List_Ronet_05-11.xlsx
Source : Drive 1P5wR7bFzspYiRKmlvdHM54usKEI0yuEGxhdx4Y1f31A (Google Sheet)

Onglets entièrement vides dans ce fichier (constat, aucun extrait possible) : « GAP List Retours », « GAP Integration Tours »

Nombre d’extraits : **144**

### Onglet « Analyse Fit-Gap » (ligne d’en-tête détectée : L4)

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 5
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-000-010
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 000 Commun aux sous-processus
- **E « Description formalisée FR »** : Le système doit permettre une solution intégrée : une seule façon de réceptionner / refuser des livraisons (STO, PO..) afin de standardiser / simplifier / faciliter l'apprentissage + reporting
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Cockpit de réception – écran de sélection unique
- **H « Références GAP List »** : Inbound L2 · GAP BR-01-000-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 7
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-001-010
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 001 Vérifier les documents de livraison
- **E « Description formalisée FR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Checklist d'acceptation/refus en en-tête de livraison
- **H « Références GAP List »** :
  > Inbound L3 · GAP BR-01-001-010-A
  > Inbound L4 · GAP BR-01-001-010-B

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 8
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-001-020
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 001 Vérifier les documents de livraison
- **E « Description formalisée FR »** : Lors de la vérification de la check list, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu afin de pouvoir décider de la réception/refus de l'article plus rapidement
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Onglet « Inspection » du cockpit
- **H « Références GAP List »** : Inbound L5 · GAP BR-01-001-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 9
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-001-030
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 001 Vérifier les documents de livraison
- **E « Description formalisée FR »** : Le système doit permettre aux magasiniers d'identifier le matériel soumis à un contrôle qualité chez le fabricant (B678 - document d'inspection 0101) refusé afin de refuser le déchargement
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Onglet « Inspection » du cockpit
- **H « Références GAP List »** : Inbound L5 · GAP BR-01-001-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 10
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-001-040
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 001 Vérifier les documents de livraison
- **E « Description formalisée FR »** : il faut pouvoir bloquer des articles à la réception si il y a un doute sur qualité du conditionnement afin d'éviter la réception d'articles potentiellement défectueux
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Le TO-BE prévoit un refus sur la checklist de réception si le contrôle visuel du colisage échoue. Couverture portée par le cockpit et sa checklist.
- **H « Références GAP List »** :
  > Inbound L3 · GAP BR-01-001-010-A
  > Inbound L4 · GAP BR-01-001-010-B

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 15
Mots-clés trouvés : litige, fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-001-070
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 001 Vérifier les documents de livraison
- **E « Description formalisée FR »** : le système doit générer le code signature aléatoire au moment de la check list et l'associer à la livraison entrante afin de facilement pouvoir retrouver le code en cas de litige avec le fournisseur / transporteur
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Génération d’un code de signature dans la checklist. Le BR cite la livraison entrante et le TO-BE retient le PO/STO horodaté. Rattachement à aligner.
- **H « Références GAP List »** : Inbound L8 · GAP BR-01-001-070

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 16
Mots-clés trouvés : NNN
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-002-010
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 002 Réceptionner PO pour NNN / Cons directe
- **E « Description formalisée FR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Job de réception comptable NNN (mouvement 101)
- **H « Références GAP List »** :
  > Inbound L36 · GAP BR-01-002-010
  > NNN L2 · GAP BR-01-002-010
  > NNN L3 · GAP — ID à attribuer

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 17
Mots-clés trouvés : NNN, avoir
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-01-002-020-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 002 Réceptionner PO pour NNN / Cons directe
- **E « Description formalisée FR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que 
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO) 
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-01-002-020-A, BR-01-002-020-B.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 18
Mots-clés trouvés : NNN
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-002-020-A
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 002 Réceptionner PO pour NNN / Cons directe
- **E « Description formalisée FR »** : Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel est arrivé au DC (info : le numéro de HU / la localisation / num PO)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Notification automatique au demandeur (NNN/Conso Directe)
- **H « Références GAP List »** :
  > Inbound L33 · GAP BR-01-002-020-A
  > NNN L8 · GAP BR-01-002-020-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 19
Mots-clés trouvés : NNN, avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-002-020-B
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 002 Réceptionner PO pour NNN / Cons directe
- **E « Description formalisée FR »** :
  > Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Notification automatique au demandeur à l’expédition. La ligne Inbound L35 traite une étiquette NNN et porte un identifiant à confirmer.
- **H « Références GAP List »** :
  > NNN L13 · GAP BR-01-002-020-B
  > Outbound L41 · GAP BR-01-002-0020-B

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 23
Mots-clés trouvés : litige, fournisseur, 107
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-01-003-020-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** :
  > - Dans le cas d'un overdelivery détecté sur le bon de livraison, pouvoir encoder les qtés inscrites sur le bon de livraison en 1ere étape de livraison.
  >
  > Il doit être possible d'identifier la localisation du matériel dans l'entrepôt --> les colis de l'étape 1 doivent être visibles dans eWM.
  > '- Est-ce que nous bloquons la quantité totale ou bien l'overdelivery sur la ligne de commande concernée ? --> on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées.
  > Seul le mouvement 107 est généré sur les articles dont les quantités sont correctes.
  > Le mouvement 107 n'est pas généré pour l'article en litige.
  > Il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
  >
  > Un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-01-003-020-A, BR-01-003-020-B, BR-01-003-020-C, BR-01-003-020-D, BR-01-003-020-E, BR-01-003-020-F.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 27
Mots-clés trouvés : litige, 107
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-020-D
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, seul le mouvement 107 est généré sur les articles dont les quantités sont correctes. Le mouvement 107 n'est pas généré pour l'article en litige.
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Génération automatique du mouvement 107
- **H « Références GAP List »** : Inbound L16 · GAP BR-01-003-020-D

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 29
Mots-clés trouvés : litige, fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-020-F
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** :
  > Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Création automatique du litige
- **H « Références GAP List »** : Inbound L18 · GAP BR-01-003-020-F

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 30
Mots-clés trouvés : avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-030
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** :
  > Le système doit permettre, en amont de la 1ière étape, d'indiquer une priorité sur un article qui nécessite une procédure d'urgence afin que le magasinier soit au courant et puisse prendre les actions nécessaires (=by-passer le FIFO) à la deuxième étape de la réception.
  > Replenishment doit avoir la possibilité d'indiquer dans SAP (dans PO? / MD04?) cette notion d'urgence
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Priorisation de la liste des HU à traiter
- **H « Références GAP List »** : Inbound L20 · GAP BR-01-003-030-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 32
Mots-clés trouvés : avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-050
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** : Le système doit permettre d'enregistrer la livraison de marchandises qui sera déchargée dans une autre zone du magasin (parc à câble, extérieur, Verdun...) afin d'avoir une traçabilité des marchandises déchargées et de l'endroit de déchargement.
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Saisie de la zone de mise à disposition dans la livraison
- **H « Références GAP List »** : Inbound L12 · GAP BR-01-003-050

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 34
Mots-clés trouvés : litige
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-080
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Archivage automatique des documents de réception sur le PO
- **H « Références GAP List »** : Inbound L21 · GAP BR-01-003-080

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 36
Mots-clés trouvés : litige, fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-100
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de communication autour des litiges d'un PO. Eviter de poser la même question à un fournisseur par 3 personnes différentes d'Infrabel
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Canal de communication litiges + workflow incidents
- **H « Références GAP List »** : Inbound L22 · GAP BR-01-003-100

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 37
Mots-clés trouvés : retour, refus, litige, fournisseur, 922, 108
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-01-003-110
- **B « Décision »** : GAP
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 003 Réceptionner PO 1ière étape pour stock
- **E « Description formalisée FR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **F « Nature (analyse initiale) »** : GAP à requalifier
- **G « Justification / point à valider »** : Deux scénarios restent ouverts, retour actuel (mail et mouvement 108) ou flux de retour EWM avec question sur facturation et mouvement 922.
- **H « Références GAP List »** : Inbound L24 · GAP BR-01-003-110 (à requalifier)

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 47
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-01-005-090
- **B « Décision »** : FIT
- **C « Processus »** : 01 Réception
- **D « Sous-processus / intitulé »** : 005 Réceptionner PO 2ième étape pour stock
- **E « Description formalisée FR »** :
  > Informations nécessaires sur les étiquettes après avoir défini le type de HU : 
  > - Numéro de lot
  > - Date de péremption
- **F « Nature (analyse initiale) »** : Existant Infrabel à réutiliser
- **G « Justification / point à valider »** : Couverture « EWM GZH » indiquée dans le référentiel BR. Applicabilité au processus Ronet à confirmer.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 51
Mots-clés trouvés : refus, labo, échantillon
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-000-010
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 000 Commun quelle que soit la décision QM prise
- **E « Description formalisée FR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **H « Références GAP List »** :
  > QM L7 · GAP possible BR-02-000-010
  > QM L9 · GAP possible BR-02-001-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 52
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-000-020
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 000 Commun quelle que soit la décision QM prise
- **E « Description formalisée FR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Flux de communication du contrôleur vers acheteur et DC (acceptation / refus)
- **H « Références GAP List »** : QM L8 · GAP possible BR-02-000-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 53
Mots-clés trouvés : labo, échantillon
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-001-010
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **E « Description formalisée FR »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **H « Références GAP List »** :
  > QM L7 · GAP possible BR-02-000-010
  > QM L9 · GAP possible BR-02-001-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 54
Mots-clés trouvés : fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-001-020
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **E « Description formalisée FR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Remplacement du contrôle chez le fournisseur par un contrôle à la réception
- **H « Références GAP List »** : QM L10 · GAP possible BR-02-001-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 55
Mots-clés trouvés : retour, refus, fournisseur
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-02-002-010
- **B « Décision »** : FIT
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 002 Implémenter la décision (lot refusé)
- **E « Description formalisée FR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **F « Nature (analyse initiale) »** : Standard selon la GAP List
- **G « Justification / point à valider »** : Le référentiel de travail indique GAP. La ligne QM distingue la gestion en HU du matériel refusé, classée Standard, des étapes de renvoi guidées.
- **H « Références GAP List »** : QM L11 · GAP possible BR-02-002-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 56
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-002-020
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 002 Implémenter la décision (lot refusé)
- **E « Description formalisée FR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Étapes de refus et de renvoi guidées par scanner
- **H « Références GAP List »** : QM L12 · GAP possible BR-02-002-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 57
Mots-clés trouvés : retour, refus, rebut, fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-002-030
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 002 Implémenter la décision (lot refusé)
- **E « Description formalisée FR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Étiquetage du matériel rebuté pour retour fournisseur
- **H « Références GAP List »** : QM L13 · GAP BR-02-002-030

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 58
Mots-clés trouvés : retour, refus, fournisseur
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-02-002-040
- **B « Décision »** : FIT
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 002 Implémenter la décision (lot refusé)
- **E « Description formalisée FR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **F « Nature (analyse initiale) »** : Standard selon la GAP List
- **G « Justification / point à valider »** : La ligne QM classe Standard le document de retour lié au PO. Le flux de retour Ronet et son intégration avec BR-01-003-110 restent à aligner.
- **H « Références GAP List »** : QM L14 · BR-02-002-040

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 59
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-02-002-050
- **B « Décision »** : GAP
- **C « Processus »** : 02 Contrôle qualité
- **D « Sous-processus / intitulé »** : 002 Implémenter la décision (lot refusé)
- **E « Description formalisée FR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **F « Nature (analyse initiale) »** : Couverture à confirmer
- **G « Justification / point à valider »** : Valider le contrôle à l’enlèvement pour une HU attendue, y compris le rejet d’une autre HU contenant le même article.
- **H « Références GAP List »** :
  > Outbound L47 · BR-02-002-050
  > QM L15 · GAP BR-02-002-050

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 64
Mots-clés trouvés : fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-03-001-030
- **B « Décision »** : GAP
- **C « Processus »** : 03 Préparation du stockage
- **D « Sous-processus / intitulé »** : 001 Appliquer les règles de conditionnement
- **E « Description formalisée FR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Étiquettes fournisseur des tourets de câbles
- **H « Références GAP List »** :
  > Inbound L30 · GAP BR-03-001-030
  > Inbound L52 · BR-03-001-030

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 83
Mots-clés trouvés : mitraille
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-04-002-010-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 002 Gérer les articles FEFO
- **E « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Rapport pour les articles bientôt périmés
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-04-002-010-A, BR-04-002-010-B.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 84
Mots-clés trouvés : mitraille
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-04-002-010-A
- **B « Décision »** : GAP
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 001 Gérer les articles non conformes à sortir du stock
- **E « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Vague dédiée de retrait sur statut article Z3 identifiée dans la GAP List Internal. Déclenchement et périmètre à confirmer.
- **H « Références GAP List »** : Internal L3 · GAP BR-04-002-010-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 90
Mots-clés trouvés : avoir
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-04-003-040-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 003 Effectuer les inventaires (cycle count)
- **E « Description formalisée FR »** :
  > Le système doit permettre de lancer, à tout moment,  le comptage d'un article spécifique afin de contrôler l'exactitude  du niveau d'inventaire pour des articles critiques et/ou pour vérifier des N° de série de certains articles.
  > Remarque du workshop du 29-05-26
  > Souhaits : 
  > - Avoir une bonne gestion d'un recomptage. Pouvoir relancer un recomptage.
  > - Avoir une file d'attente des BIN à inventorier à laquelle le magasinier peut se connecter (en période creuse par exemple)
  > - Pouvoir inventorier une palette "dormante" filmée juste en confirmant la HU (le magasinier ne doit pas défilmer la palette et recompter les articles) -> fonctionnalité existe déjà à GZH pour les câbles -> scan du touret confirme automatiquement les métrés du câble
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-04-003-040-A, BR-04-003-040-B, BR-04-003-040-C, BR-04-003-040-D.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 92
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-04-003-040-B
- **B « Décision »** : FIT
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 003 Effectuer les inventaires (cycle count)
- **E « Description formalisée FR »** : Avoir une bonne gestion d'un recomptage. Pouvoir relancer un recomptage.
- **F « Nature (analyse initiale) »** : Standard SAP / paramétrage
- **G « Justification / point à valider »** : Le processus d’inventaire EWM prévoit le recomptage d’un document d’inventaire.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 93
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-04-003-040-C
- **B « Décision »** : FIT
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 003 Effectuer les inventaires (cycle count)
- **E « Description formalisée FR »** : Avoir une file d'attente des BIN à inventorier à laquelle le magasinier peut se connecter (en période creuse par exemple)
- **F « Nature (analyse initiale) »** : Couverture à confirmer
- **G « Justification / point à valider »** : Vérifier la distribution des documents de comptage par file RF et la sélection des BIN durant les périodes creuses.
- **H « Références GAP List »** : Internal L12 · GAP BR-04-003-010 (description correspondante, ID source différent)

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 95
Mots-clés trouvés : refus
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-04-004-010
- **B « Décision »** : FIT
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 004 Gérer les mouvements internes
- **E « Description formalisée FR »** :
  > Le système doit pouvoir proposer (décision du workshop 29-05-26) autoriser l'utilisateur le magasinier d'optimiser le stockage (passage d'un type de magasin (ex Rack) vers un autre type de magasin (ex VNS) 
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser? (décision du workshop 29-05-26) -> pas de rapport mais fonctionnalité directement accessible au magasinier
  > ex : une palette pleine n'a plus que qq articles -> la palette devient une boîte.
- **F « Nature (analyse initiale) »** : Couverture à confirmer
- **G « Justification / point à valider »** : Les transferts internes existent. Le texte actif reste ouvert sur le mode de proposition et de validation par le coordinateur, lié au BR-04-004-020-A.
- **H « Références GAP List »** : Internal L6 · GAP BR-04-004-020-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 96
Mots-clés trouvés : refus
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-04-004-020-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 004 Gérer les mouvements internes
- **E « Description formalisée FR »** :
  > Le système doit pouvoir relancer une optimisation du stockage (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser?plus grandes palettes, ou dans le mauvais type de rotation de stock)
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-04-004-020-A, BR-04-004-020-B, BR-04-004-020-C.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 97
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-04-004-020-A
- **B « Décision »** : GAP
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 004 Gérer les mouvements internes
- **E « Description formalisée FR »** :
  > Le système doit proposer une optimisation de stockage sous forme de réserve de travail. Le coordinateur doit pouvoir accepter/refuser chaque ligne proposée (piste de solution : file d'attente, wave..)
  > (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Réserve de propositions de relocalisation, acceptation/refus par ligne et création de tâches pour les lignes retenues.
- **H « Références GAP List »** : Internal L6 · GAP BR-04-004-020-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 105
Mots-clés trouvés : avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-04-005-010
- **B « Décision »** : GAP
- **C « Processus »** : 04 Stockage
- **D « Sous-processus / intitulé »** : 005 Gérer le stock dormant
- **E « Description formalisée FR »** :
  > Le sytème doit pouvoir nous piloter dans la gestion du stock dormant:
  > - Produire un rapport d'articles qui sont sans mouvements depuis X temps (par ex: 1 an)
  > - Créer une vague de picking sur ce stock dormant afin de le relocaliser en zone de massification => densifier les HU dormantes dans une HU globale + mettre en stock dans une bin où il peut déjà y avoir d'autres HU
  > Remarque du workshop du 29-05-26
  > Souhait : 
  > - Avoir une file d'attente des BIN à massifier à laquelle le magasinier peut se connecter (en période creuse par exemple)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Stock dormant et massification
- **H « Références GAP List »** : Internal L10 · GAP BR-04-005-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 107
Mots-clés trouvés : avoir
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-05-003-010-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 003 Créer le bon sans référence
- **E « Description formalisée FR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-05-003-010-A, BR-05-003-010-B.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 108
Mots-clés trouvés : NNN
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-05-003-010-A
- **B « Décision »** : GAP
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 003 Créer le bon sans référence
- **E « Description formalisée FR »** : Pouvoir localiser des HU non gérées en stock dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **F « Nature (analyse initiale) »** : Sources divergentes
- **G « Justification / point à valider »** : L’Inbound qualifie GAP et le volet NNN décrit une dépose manuelle standard à vérifier. Tester la localisation de la HU vide et confirmer si la proposition automatique de BIN est requise.
- **H « Références GAP List »** :
  > Inbound L38 · GAP BR-05-003-010-A
  > NNN L4 · GAP BR-05-003-010-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 109
Mots-clés trouvés : NNN, avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-05-003-010-B
- **B « Décision »** : FIT
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 003 Créer le bon sans référence
- **E « Description formalisée FR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
- **F « Nature (analyse initiale) »** : Existant Infrabel à réutiliser
- **G « Justification / point à valider »** : Bon 8* sans référence avec article technique et rattachement des HU NNN repris de la solution Infrabel. La préparation par destinataire reste à qualifier séparément.
- **H « Références GAP List »** :
  > NNN L10 · BR-05-003-010
  > NNN L11 · GAP — ID à attribuer
  > Outbound L5 · BR-05-003-010

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 113
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-05-004-040
- **B « Décision »** : FIT
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 004 Lancer les vagues de picking
- **E « Description formalisée FR »** :
  > A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) (= vagues de picking) afin de préparer le huddle de J-1
  > -> std eWM
- **F « Nature (analyse initiale) »** : Standard selon le référentiel
- **G « Justification / point à valider »** : Couverture « EWM Standard » indiquée dans le référentiel BR. Applicabilité au processus Ronet à confirmer.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 117
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-05-004-080
- **B « Décision »** : FIT
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 004 Lancer les vagues de picking
- **E « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de lancer une tâche de picking en plus de la vague initalement prévue (cas des demandes ponctuelles (ex  j'ai besoin d'un ruban d'imprimante / urgentes)
  > -> std eWM
- **F « Nature (analyse initiale) »** : Standard SAP / paramétrage
- **G « Justification / point à valider »** : Création manuelle de tâches à partir d’une demande magasin, en complément des tâches issues d’une vague.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 123
Mots-clés trouvés : avoir
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-05-004-120-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 004 Lancer les vagues de picking
- **E « Description formalisée FR »** :
  > 1. Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail? popup? étiquette imprimée? warning dans un rapport?...)
  > La demande T8/T9 doit être monitorée.
  > 2. Une demande T8/T9 doit être ajoutée automatiquement à une vague de picking "urgente"
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-05-004-120-A, BR-05-004-120-B, BR-05-004-120-C.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 124
Mots-clés trouvés : avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-05-004-120-A
- **B « Décision »** : GAP
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 004 Lancer les vagues de picking
- **E « Description formalisée FR »** : Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail? popup? étiquette imprimée? warning dans un rapport?...)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Alerte dynamique DC à l'arrivée d'une demande T8/T9
- **H « Références GAP List »** : Outbound L7 · GAP BR-05-004-120-A

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 137
Mots-clés trouvés : fournisseur
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-05-005-060-B
- **B « Décision »** : GAP
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 005 Préparer la marchandise
- **E « Description formalisée FR »** :
  > Les quantités de commande proposées au client dans le Supply Catalogue doivent être alignées avec et limitées par les quantités de picking réalisables par le DC.
  >
  > - plusieurs quantités de sortie peuvent être proposées pour un même article
  > - les quantités de sortie d'un article peuvent varier en fonction du conditionnement associé à un fournisseur (il pourrait exister plusiseurs conditionnements pour le même fournisseur)
  > - les quantités du Supply Catalogue doivent être alignées avec les conditionnements de la  commande auprès du fournisseur
  > - le client doit pouvoir indiquer dans sa commande si l'arrondi est permis 
  > si oui > arrondi en fonction conditionnement
  > si pas > on respecte quantité commandée
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Alignement des quantités du Supply Catalogue sur les conditionnements
- **H « Références GAP List »** : Outbound L19 · GAP BR-05-005-060-B

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 153
Mots-clés trouvés : avoir
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-05-005-160-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 005 Préparer la marchandise
- **E « Description formalisée FR »** :
  > Gestion FEFO : le picking d'articles avec numéro de lot s'effectue dans des BIN spécifiques
  > Il faut garantir que le matériel proche de sa date de péremption ne soit pas expédié (le problème doit être réglé en amont par IM par replenishment)
  > Remarque du workshop du 29-05-26
  > Définition d'une date de péremption : article dont la date de péremption est atteinte + dont la date de péremption sera atteinte endéans xx jours.
  > Souhaits : 
  > - Le délai de péremption pourrait être différent en fonction du client :
  >  --> SP1 : délai plus long
  >  --> COPO chantier sur le weekend à venir : délai plus court
  > - Avoir une file d'attente des articles périmés à picker à laquelle le magasinier peut se connecter (en période creuse par exemple).
  > - Rapport de cette wave doit être envoyée à replenishment.
  > Note : S'il ne fallait pas picker ces articles car les master data ne sont pas correctes, cela sera constaté avant la mise à disposition/expédition de ces articles. -> il sera alors demandé de mettre à jour les master data.
  > Contrainte : les articles avec date de péremption doivent être gérés dans SAP (MMD)
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-05-005-160-A, BR-05-005-160-B, BR-05-005-160-C, BR-05-005-160-D.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 165
Mots-clés trouvés : NNN
Statut : Décision = Hors calcul

- **A « N° BR / GAP ID »** : BR-05-006-050-00
- **B « Décision »** : Hors calcul
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 006 Consolider la marchandise
- **E « Description formalisée FR »** :
  > Pouvoir associer une livraison de marchandises NNN / cons directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.
  > -> Tracking de HU : localisation et statut
- **F « Nature (analyse initiale) »** : BR parent scindé
- **G « Justification / point à valider »** : Compté via BR-05-006-050-A, BR-05-006-050-B.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 166
Mots-clés trouvés : NNN
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-05-006-050-A
- **B « Décision »** : FIT
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 006 Consolider la marchandise
- **E « Description formalisée FR »** :
  > Pouvoir associer une livraison de marchandises à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.
  > -> Tracking de HU : localisation et statut
- **F « Nature (analyse initiale) »** : Existant Infrabel à réutiliser
- **G « Justification / point à valider »** : La consolidation des HU NNN dans la HU d’expédition du bon 8* est décrite comme une solution Infrabel existante.
- **H « Références GAP List »** :
  > NNN L12 · BR-05-006-050 (couvert)
  > Outbound L31 · BR-05-006-050 (couvert)

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 167
Mots-clés trouvés : NNN
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-05-006-050-B
- **B « Décision »** : GAP
- **C « Processus »** : 05 Préparation de l’expédition
- **D « Sous-processus / intitulé »** : 006 Consolider la marchandise
- **E « Description formalisée FR »** :
  > Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Lien de tracking dans la notification
- **H « Références GAP List »** :
  > Inbound L34 · GAP BR-05-006-050-B
  > NNN L9 · GAP BR-05-006-050-B

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 180
Mots-clés trouvés : retour, litige, fournisseur, NNN, avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-06-002-010
- **B « Décision »** : FIT
- **C « Processus »** : 06 Expédition
- **D « Sous-processus / intitulé »** : 002 Mise à disposition pour enlèvement
- **E « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de créer une référence unique qui permet de regrouper plusieurs HU afin d'identifier la marchandise à enlever de manière univoque (cette référence unique est remise au fournisseur -> Le transporteur se présente alors au comptoir avec cette référence unique)
  > (ex : retour litige fournisseur, enlèvement d'un NNN/cons directe,...)
- **F « Nature (analyse initiale) »** : Couverture à confirmer
- **G « Justification / point à valider »** : Valider le document servant de référence unique de retrait et le regroupement multi-HU pour les retours et les NNN.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 181
Mots-clés trouvés : avoir
Statut : Décision = FIT

- **A « N° BR / GAP ID »** : BR-06-003-020
- **B « Décision »** : FIT
- **C « Processus »** : 06 Expédition
- **D « Sous-processus / intitulé »** : 003 Charger les marchandises
- **E « Description formalisée FR »** : Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises
- **F « Nature (analyse initiale) »** : Couverture à confirmer
- **G « Justification / point à valider »** : Confirmer la reprise manuelle du retrait des HU par le coordinateur en cas de panne, avec journalisation et contrôle des doubles confirmations.

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 190
Mots-clés trouvés : refus
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-07-002-020
- **B « Décision »** : GAP
- **C « Processus »** : 07 Reporting
- **D « Sous-processus / intitulé »** : 002 Réception
- **E « Description formalisée FR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Livraisons et camions refusés
- **H « Références GAP List »** : Reporting L6 · GAP BR-07-002-020

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 191
Mots-clés trouvés : litige, 107, 109
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-07-002-030
- **B « Décision »** : GAP
- **C « Processus »** : 07 Reporting
- **D « Sous-processus / intitulé »** : 002 Réception
- **E « Description formalisée FR »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **F « Nature (analyse initiale) »** : Écart documenté
- **G « Justification / point à valider »** : Écart identifié dans la GAP List. Rapport des litiges de réception par ligne de PO
- **H « Références GAP List »** : QM L21 · GAP possible BR-07-002-030

#### GAP_List_Ronet_05-11.xlsx — onglet « Analyse Fit-Gap », ligne 199
Mots-clés trouvés : avoir
Statut : Décision = GAP

- **A « N° BR / GAP ID »** : BR-07-006-010
- **B « Décision »** : GAP
- **C « Processus »** : 07 Reporting
- **D « Sous-processus / intitulé »** : 006 Prep expédition
- **E « Description formalisée FR »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **F « Nature (analyse initiale) »** : GAP potentiel
- **G « Justification / point à valider »** : Écart possible dans la GAP List. Statut des commandes et suivi du SLA — couverture à confirmer.
- **H « Références GAP List »** : Reporting L14 · BR-07-006-010

### Onglet « GAP List Inbound » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 2
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-000-010
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Cockpit de réception – écran de sélection unique
- **E « BR lié(s) »** : BR-01-000-010
- **F « Description formalisée BR »** : Le système doit permettre une solution intégrée : une seule façon de réceptionner / refuser des livraisons (STO, PO..) afin de standardiser / simplifier / faciliter l'apprentissage + reporting
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.1 – Ecran de sélection des livraison entrantes
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom + Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Écran de sélection listant tous les PO/STO ouverts sur la division magasin, triés par date de livraison souhaitée croissante ; recherche par sélection, n° de PO ou scan du document papier (n° ASN Ariba). 
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de créer et modifier les livraisons entrantes en référence à la commande d'achat, notamment via VL31N/VL32N côté S/4 ou /SCWM/GRPE et l'app Fiori « Create Inbound Deliveries » côté EWM ; l'ASN fournisseur est reçue comme livraison entrante. L'alternative consiste à utiliser ces fonctions selon le type de document (PO ou ASN/STO). Un écran unique listant les PO/STO ouverts de la division, trié par date de livraison souhaitée et accessible par scan du n° ASN Ariba, n'existe pas en standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 3
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-010-A
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-005
- **D « Titre »** : Checklist d'acceptation/refus en en-tête de livraison
- **E « BR lié(s) »** : BR-01-001-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** :
  > Checklist intégrée à l'en-tête de la livraison entrante ; livraison enregistrable avec contrôles obligatoires désactivés en phase checklist, activés ensuite.  Impression du document de refus + génération d'incident.
  >
  > statut lot 0101: Cas d'un refus des marchandises car lot d'inspection 0101
  > rouge/jaune/"absent" lié à proposition sur show and tell Inbound
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP ne prévoit pas de checklist d'acceptation/refus sur la livraison entrante. Il permet de rejeter une livraison (Reject sur la notification de livraison dans EWM, la quantité repasse à zéro sur la PO) et de documenter un problème fournisseur dans un avis qualité Q2 (réclamation contre fournisseur) avec pièces jointes et tâches. L'alternative consiste à enregistrer le refus dans un avis Q2. La checklist, la désactivation temporaire des contrôles obligatoires et l'impression du document de refus n'existent pas en standard. L'écart porte sur l'objet checklist lui-même et son intégration à la livraison.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 4
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-010-B
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-005
- **D « Titre »** : Checklist d'acceptation/refus en en-tête de livraison
- **E « BR lié(s) »** : BR-01-001-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-02
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** : Le contenu de la checklist doit être dynamique afin d'être maintenu par le DC.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **Q « Commentaires / points ouverts »** : Refus possible sans document de référence
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de classer un problème fournisseur avec des codes (défauts, causes, tâches) dans l'avis qualité Q2. L'alternative consiste à utiliser ces codes comme motifs de refus. Une checklist dont le contenu est maintenu directement par le DC n'existe pas en standard, et le refus d'une livraison sans document de référence (pas de PO, pas de livraison) n'est pas couvert. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 5
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-020
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-013 / INB-015
- **D « Titre »** : Onglet « Inspection » du cockpit
- **E « BR lié(s) »** : BR-01-001-020, BR-01-001-030, BR-01-001-060
- **F « Description formalisée BR »** : Lors de la vérification de la check list, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu afin de pouvoir décider de la réception/refus de l'article plus rapidement
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.3 – Sélection du document de référence (PO, STO, ...)
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom
- **M « Description / Analyse – Proposition TO-BE »** : Affichage par poste : statut du lot de contrôle fournisseur, indicateur produits dangereux.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP gère le contrôle chez le fournisseur avec le type de contrôle 0101 (source inspection) déclenché par la fiche info QM, et peut interdire l'entrée marchandises tant que le lot n'est pas accepté (clé de contrôle QM). L'indicateur produits dangereux est porté par la fiche article (profil marchandises dangereuses). L'alternative consiste à consulter le lot de contrôle et la fiche article séparément. L'affichage des deux informations par poste, dès la saisie du PO, dans un même écran n'existe pas en standard. L'écart porte sur la restitution : les données et le blocage restent standard.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 6
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-010
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-004
- **D « Titre »** : Onglet « Livraisons entrantes » – ASN / appel VL31N-VL32N
- **E « BR lié(s) »** : BR-01-003-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de retrouver l'ASN depuis l'écran de départ afin d'éviter les manipulations inutiles
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire ; 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.1.3 – Sélection du document de référence (PO, STO, ...) ; 3.2.1 – Création/modification de la livraison entrante
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom
- **M « Description / Analyse – Proposition TO-BE »** : Affichage des ASN existantes ; création/modification de la livraison entrante par appel intégré de VL31N/VL32N depuis l'écran de départ.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP stocke l'ASN fournisseur comme livraison entrante et permet de la retrouver et de la modifier dans VL32N ou VL60, ou de créer la livraison depuis la PO via VL31N. L'alternative consiste à utiliser ces transactions directement. L'affichage dans le cockpit des ASN rattachées au document de référence, avec appel intégré de VL31N/VL32N, n'existe pas en standard. L'écart porte uniquement sur la navigation : les transactions appelées restent standard.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 8
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-070
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Code signature – génération et table de consultation
- **E « BR lié(s) »** : BR-01-001-070
- **F « Description formalisée BR »** : le système doit générer le code signature aléatoire au moment de la check list et l'associer à la PO afin de facilement pouvoir retrouver le code en cas de litige avec le fournisseur / transporteur
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.4 – Génération du code signature
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** : Code aléatoire généré à l'acceptation des 3 checklists ; rattaché au PO/STO (pas à la livraison), horodaté ; table dédiée de consultation des codes ; champ « Accepté avec réserve » déclenchant l'impression automatique.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le code signature n'existe pas en standard. Le standard SAP garde l'historique des documents (auteur, date, heure) et permet de joindre le bon signé à la PO ou à la livraison. L'alternative consiste à tracer l'acceptation par la date de réception et la pièce jointe du document signé. La génération d'un code aléatoire rattaché à la PO, sa table de consultation et l'impression automatique sur « accepté avec réserve » sont entièrement spécifiques. L'écart est total sur ce besoin.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 11
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-003-040
- **C « Ancien ID deck »** : —
- **D « Titre »** : Remarques DC sur article (scanner RF)
- **E « BR lié(s) »** : BR-01-003-040
- **F « Description formalisée BR »** : Le système doit attirer l'attention du magasinier sur des remarques du DC sur certains articles
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM – RF
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Affichage sur le scanner RF, lors de la réception 2ème étape, des remarques du DC relatives à l'article (ex. « vérifier la couleur du contenu de la boîte »).
- **N « Statut »** : À analyser
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : Déplacé de la réception 1 vers la réception 2 (update 23/07)
- **R « Analyse alternative Standard SAP »** : Le standard SAP ne prévoit pas de remarques DC par article ou par PO affichées sur le scanner. L'alternative consiste à utiliser les textes de la PO ou de la livraison, consultables sur desktop. Une table de remarques DC (permanentes ou ponctuelles) poussée en message à la réception RF n'existe pas en standard. L'écart porte sur la table de remarques et le message RF ; à regrouper avec le GAP BR-01-001-050 (2ème étape), même mécanisme d'affichage.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 12
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-050
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-011 / INB-016 / INB-017
- **D « Titre »** : Saisie de la zone de mise à disposition dans la livraison
- **E « BR lié(s) »** : BR-01-003-050
- **F « Description formalisée BR »** : Le système doit permettre d'enregistrer la livraison de marchandises qui sera déchargée dans une autre zone du magasin (parc à câble, extérieur, Verdun...) afin d'avoir une traçabilité des marchandises déchargées et de l'endroit de déchargement.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.1 – Création/modification de la livraison entrante
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-05
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Fiche deck « Flux de réception » : l'utilisateur sélectionne directement la zone de mise à disposition cible dès la réception ; stock instantanément visible dans la bonne zone (zones màd IN 1 / IN 2 / Comptoir). Étendu aux NNN et Consommation Directe.
- **N « Statut »** : Analysé
- **P « Complexité »** : M
- **R « Analyse alternative Standard SAP »** : Le standard EWM détermine automatiquement la zone de mise à disposition (staging area) et la porte de la livraison entrante via les groupes de détermination, et permet de les modifier dans la livraison EWM. L'alternative consiste à laisser la détermination standard et à corriger la zone dans la livraison EWM. La saisie de la zone dès la création de la livraison dans le cockpit S/4 n'existe pas en standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 15
Mots-clés trouvés : litige, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-C
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage ciblé de la ligne de livraison en overdelivery
- **E « BR lié(s) »** : BR-01-003-020-C
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées).
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.1.1 – Overdelivery détecté sur le bon de livraison -- Bloquer la ligne de la livraison entrante 18 concernée
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Blocage de la seule ligne concernée (articles stock) ; toutes les lignes pour NNN/Conso Directe ; mouvement 107 généré uniquement sur les lignes conformes.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'ajuster ou de mettre à zéro une quantité par poste de livraison avec des process codes ; le seul verrouillage de poste standard concerne le contrôle de durée de vie résiduelle. L'alternative consiste à ne pas réceptionner le poste en litige et à le mettre à zéro par process code en attendant l'acheteur. Un blocage de ligne pour overdelivery, et le blocage de toutes les lignes pour les NNN, n'existent pas en standard. L'écart porte sur un statut de blocage par ligne et ses conséquences sur le 107.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 16
Mots-clés trouvés : litige, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-D
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Génération automatique du mouvement 107
- **E « BR lié(s) »** : BR-01-003-020-D
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, seul le mouvement 107 est généré sur les articles dont les quantités sont correctes. Le mouvement 107 n'est pas généré pour l'article en litige.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.7 – Mouvement 107
- **J « Système »** : S/4
- **K « Numéro FSP »** : FS-08
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Réception 107 (stock bloqué valorisé) enregistrée en arrière-plan à l'association staging zone/HU, pour les articles stock aux quantités conformes. Pas de 107 pour ligne en litige ni pour NNN. Modification du job lié aux 107.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 17
Mots-clés trouvés : litige
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-E
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage réception 2ème étape jusqu'à décision acheteur
- **E « BR lié(s) »** : BR-01-003-020-E
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.1 – Overdelivery détecté à la première étape (ligne de livraison bloquée)
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-09
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Réception 2ème étape impossible pour l'article en litige tant que la décision acheteur n'est pas prise ; articles litigieux proposés en dernier dans le traitement de la HU ; HU placée en emplacement « Litige ».
  >
  > Également applicable aux overdeliveries détectées en deuxième étape : toute la quantité de l’article concerné reste en litige jusqu’à la décision acheteur (ex. : 12 reçues pour 10 attendues → 12 en attente). Les autres articles conformes poursuivent leur traitement.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : les écarts se traitent par process codes. L'alternative consiste à déposer la HU en zone litige et à bloquer le stock (type de stock ou emplacement bloqué) jusqu'à la décision. Le blocage de la réception 2ème étape d'une ligne précise et sa levée automatique après adaptation des documents n'existent pas en standard. L'écart porte sur le statut de blocage, son contrôle en RF et sa levée automatique.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 18
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-F
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Création automatique du litige
- **E « BR lié(s) »** : BR-01-003-020-F
- **F « Description formalisée BR »** :
  > "Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement"
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.1.1 – Overdelivery détecté sur le bon de livraison -- Bloquer la ligne de la livraison entrante 18 concernée
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-10
- **L « Type FRICE »** : Enhancement + Workflow
- **M « Description / Analyse – Proposition TO-BE »** :
  > Litige créé automatiquement avec référence PO, article, quantité supplémentaire, localisation physique de la ligne dans le magasin.
  >
  > https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B3F74BAE1-9B8E-44BA-BE16-2AA18BA4A267%7D&file=Show%20%26%20tell%20Inbound%20Ronet.pptx&action=edit&mobileredirect=true
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de créer un avis qualité Q2 (réclamation contre fournisseur) en référence à la PO, avec pièces jointes, tâches et statuts. L'alternative consiste à créer l'avis Q2 manuellement au moment du constat. La création automatique du litige depuis l'overdelivery, avec la localisation physique des HU, n'existe pas en standard. L'écart porte sur l'automatisation et sur le lien avec la solution centrale de litiges.
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM
- **W « Slides management summary »** : 10
- **X « BR management summary »** : -  Indiquer et gérer systématiquement  tout écart qualitatif et/ou quantitatif (+&-) & DATA et informer directement les personnes concernées (Acheteur-…).

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 21
Mots-clés trouvés : litige
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-080
- **C « Ancien ID deck »** : —
- **D « Titre »** : Archivage automatique des documents de réception sur le PO
- **E « BR lié(s) »** : BR-01-003-080
- **F « Description formalisée BR »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.3 – Digitalisation du bon de livraison
- **J « Système »** : S/4
- **L « Type FRICE »** : Report (job)
- **M « Description / Analyse – Proposition TO-BE »** : Job reprenant les annexes de la livraison entrante (bons de livraison scannés) pour archivage sur le n° de PO, facilitant la recherche par les acheteurs en cas de litige.
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : BR-01-003-070 (attachement à la livraison) = standard, sans GAP
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de joindre le bon de livraison scanné à la livraison entrante (déjà retenu comme standard pour BR-01-003-070) ou directement à la PO. L'alternative consiste à joindre le document à la PO plutôt qu'à la livraison. La recopie automatique des pièces jointes de la livraison vers la PO n'existe pas en standard. L'écart se limite à un job de recopie.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 22
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-100
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Canal de communication litiges + workflow incidents
- **E « BR lié(s) »** : BR-01-003-100
- **F « Description formalisée BR »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de communication autour des litiges d'un PO. Eviter de poser la même question à un fournisseur par 3 personnes différentes d'Infrabel
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock ; 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.4.3 – Décision acheteur et gestion des litiges ; 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 / Fiori
- **L « Type FRICE »** : Enhancement + Workflow
- **M « Description / Analyse – Proposition TO-BE »** : Base de données plaintes/litiges par département avec notification tuile Fiori ; historique des échanges par PO ; workflow global de suivi garantissant traitement en temps et en heure et communication vers le magasin. Cas de figure (MMD, overdelivery, non-conformités) à détailler.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **Q « Commentaires / points ouverts »** : Décisions BA 29/06 + update 14/07 (commentaires Word) ; GAP à confirmer avant ajout
- **R « Analyse alternative Standard SAP »** : Le standard SAP couvre le suivi d'un problème fournisseur avec l'avis qualité Q2 : référence PO, pièces jointes, tâches assignées, statuts et actions de suivi. L'alternative consiste à utiliser l'avis Q2 comme objet de litige commun à la réception, au replenishment et aux acheteurs. Une base de litiges par département avec tuile de notification et historique des échanges par PO n'existe pas telle quelle. L'écart porte sur la vue par PO et la notification
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 24
Mots-clés trouvés : retour, refus, litige, fournisseur, 922, 108, 122
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-110 (à requalifier)
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Traçage du retour fournisseur après décision acheteur
- **E « BR lié(s) »** : BR-01-003-110
- **F « Description formalisée BR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.1 – Overdelivery détecté à la première étape (ligne de livraison bloquée) ; 3.4.3 – Décision acheteur et gestion des litiges
- **J « Système »** : S/4 (EWM embedded)
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Deux options ouvertes : solution AS-IS (mail + mvt 108) ou flux retour standard EWM (gap facturation avant sortie marchandises, mvt 922). 
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Lié à BR-02-002-050 (deck QM : unité de transport + GAP 922)
- **R « Analyse alternative Standard SAP »** : Le standard SAP gère le retour fournisseur par mouvement de retour (122) ou par livraison de retour traitée dans EWM comme une sortie. L'alternative consiste à utiliser ce flux retour standard, qui trace la sortie par document.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Clarifier la procédure & tracabilité de l'acceptation/refus de la part de l'acheteur

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 25
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-000-020
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : INB-012
- **D « Titre »** : Demande de mise à jour Master Data depuis EWM
- **E « BR lié(s) »** : BR-01-000-020
- **F « Description formalisée BR »** : Le système doit permettre d'effectuer une demande de mise à jour des master data (flux d'appro / master data locale / dynamics…?) afin d'augmenter la qualité de la base de données et de faciliter la communication avec MMD
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM + S/4
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Envoi vers zone de clarification ; stock isolé physiquement et informatiquement ; introduction des données manquantes dans le système (poids, volume, dimensions, photo),storage type « Clarification » = worklist ; génération du D212 vers MMD ; après correction, tâche magasin vers destination finale. Update 
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'isoler du stock dans une zone dédiée (type de magasin et détermination du process type) et de le suivre dans /SCWM/MON ; en embedded, la fiche article est partagée avec S/4 et les données entrepôt se maintiennent dans /SCWM/MAT1. L'alternative consiste à utiliser une zone de clarification standard et le D212 actuel, hors système. La détection automatique des données manquantes et la génération du D212 vers MMD n'existent pas en standard.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 26
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-005-040
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : —
- **D « Titre »** : Correction/ajout des MD EWM à la réception (photos, poids, dimensions)
- **E « BR lié(s) »** : BR-01-005-040
- **F « Description formalisée BR »** :
  > Le système doit permettre au magasinier de corriger/ajouter les photos, poids et dimensions d'un article dans les master data eWM à la réception afin d'augmenter la qualité de la base de données article.
  > Un flux d'ajout/correction des master data IM doit être également lancé.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM + S/4
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Envoi vers de clarification. Mise à jour manuelle par le coordinateur des MD EWM manquantes.
  >
  > Document D212.
  >
  > Analyser comment sera prise la photo
- **N « Statut »** : À analyser
- **P « Complexité »** : /
- **Q « Commentaires / points ouverts »** : Définir quelles sont les champs EWM concernés.
- **R « Analyse alternative Standard SAP »** : Le standard permet au coordinateur de corriger les données article : poids et dimensions dans la fiche article S/4 (partagée en embedded), données entrepôt dans /SCWM/MAT1. L'alternative consiste à faire ces corrections sur desktop depuis la zone de clarification, selon les autorisations. La photo n'est pas une donnée de la fiche article standard. L'écart porte sur la photo et sur le partage des rôles DC/MMD pour les données communes IM/EWM.
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 27
Mots-clés trouvés : refus, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-005-050
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage de la mise en stock si MD manquantes (désactivable)
- **E « BR lié(s) »** : BR-01-005-050
- **F « Description formalisée BR »** : Le système doit pouvoir bloquer la mise en stock si des informations mater data sont manquantes (photos, poids, dimensions, caractère dangereux..) (doit être désactivable) afin d'augmenter la qualité de la base de données article
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Orientation automatique de l'article vers la zone de clarification en cas de MD manquantes ; blocage désactivable.
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard EWM refuse la création de la tâche de mise en stock quand aucune destination ne peut être déterminée, et permet de diriger le stock vers une zone dédiée via la détermination du process type. L'alternative consiste à s'appuyer sur ces erreurs standard et à traiter le stock en zone de clarification. 
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 30
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-03-001-030
- **B « Date workshop »** : 2026-11-18
- **C « Ancien ID deck »** : —
- **D « Titre »** : Étiquettes fournisseur des tourets de câbles
- **E « BR lié(s) »** : BR-03-001-030
- **F « Description formalisée BR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information comme numéro externe au sein de la HU
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne)
- **J « Système »** : EWM-RF
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Lecture des étiquettes fournisseur ; Stockage du n° du touret = external ID 2.
- **N « Statut »** : Analysé
- **P « Complexité »** : L
- **Q « Commentaires / points ouverts »** : Confirmer l'input (quelle étiquette) sera envoyée de la part du fournisseur
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de stocker sur la HU des identifications supplémentaires via les types d'identification, en plus du n° de HU, et décode les étiquettes au format GS1-128. L'alternative consiste à saisir le n° de touret comme identification de la HU. La lecture d'une étiquette fournisseur hors format GS1 n'existe pas en standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 33
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-002-020-A
- **B « Date workshop »** : 2026-11-23
- **C « Ancien ID deck »** : INB-011/016/017 (volet NNN)
- **D « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **E « BR lié(s) »** : BR-01-002-020-A
- **F « Description formalisée BR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-15
- **L « Type FRICE »** : Enhancement (PPF) + Form
- **M « Description / Analyse – Proposition TO-BE »** : Mail automatique au demandeur à la réception : matériel disponible, n° HU, localisation, n° PO. 
- **N « Statut »** : Analysé
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Point ouvert lié au moyen de communication et à la détermination du demandeur
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : SP; autres ?
- **V « Résultat attendu »** : Clarifier le besoin métier

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 34
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-006-050-B
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Lien de tracking dans la notification
- **E « BR lié(s) »** : BR-05-006-050-B
- **F « Description formalisée BR »** :
  > "Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut"
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **J « Système »** : EWM / externe
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Génération de la HU lors de la réception. Confirmation de la réception au moment du déplacement de la HU dans la zone dédiée (via ADHU)
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de suivre la localisation et le statut de chaque HU dans /SCWM/MON. L'alternative consiste à donner aux demandeurs une vue monitor filtrée ou à leur communiquer le n° de HU. Un lien de tracking accessible au demandeur hors EWM n'existe pas en standard. L'écart porte sur l'exposition de l'information hors entrepôt.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 35
Mots-clés trouvés : NNN, avoir
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-002-020-B
- **C « Ancien ID deck »** : —
- **D « Titre »** : Étiquette HU NNN (destinataire + PO)
- **E « BR lié(s) »** : (BR à confirmer)
- **F « Description formalisée BR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.2 – Impression de l'étiquette HU
- **J « Système »** : EWM
- **L « Type FRICE »** : Form
- **M « Description / Analyse – Proposition TO-BE »** : Étiquette HU imprimée à la sélection de la HU, enrichie du destinataire et du n° de PO (adaptation du formulaire d'étiquette HU EWM).
- **N « Statut »** : À analyser
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : « (GAP) » sans ID dans le doc final
- **R « Analyse alternative Standard SAP »** : Le standard EWM imprime l'étiquette HU via PPF avec un formulaire adaptable ; la FSP F2489 (étiquette HU putaway) sert déjà de base. L'alternative consiste à ajouter le destinataire et le n° de PO au formulaire existant. Ces champs ne figurent pas sur l'étiquette standard. L'écart se limite à une adaptation de formulaire.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 36
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-002-010
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Job de réception comptable NNN (mouvement 101)
- **E « BR lié(s) »** : BR-01-002-010
- **F « Description formalisée BR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.6 – Réception comptable et bouclage sur les articles de la HU
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Report (job) / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Génération automatique du mouvement 101 lors de la confirmation de la réception via  ADHU ; 
- **N « Statut »** : Analysé
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : Le standard EWM comptabilise l'entrée marchandises (101) sur la livraison entrante, depuis /SCWM/PRDI ou en RF. L'alternative consiste à poster l'entrée marchandises manuellement une fois toutes les HU contrôlées. Le déclenchement automatique conditionné à « toutes les HU reçues et sans litige », sur des HU techniquement vides, n'existe pas en standard. L'écart porte sur la condition de déclenchement.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 37
Mots-clés trouvés : retour, NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Ancien ID deck »** : —
- **D « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **E « BR lié(s) »** : BR-05-001-010
- **F « Description formalisée BR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article.
  > L'article doit alors se trouver dans une zone particulière.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.5 – Immatriculation
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : Config / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Suivi de la HU partant à l'immatriculation et de son retour ; zone particulière dédiée (magasin vers magasin)
  > https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7BCD178E04-6DB9-4AA5-907C-BBB010409E7B%7D&file=EWM%20immat.pptx&action=edit&mobileredirect=true
- **N « Statut »** : A confirmer avec business
- **P « Complexité »** : —
- **Q « Commentaires / points ouverts »** : Confirmer que la solution présentée répond au besoin métier
- **R « Analyse alternative Standard SAP »** : Ligne remplacée par l'onglet GAP List Immatriculation (GAP BR-05-001-010 et dépôt direct en staging immatriculation). Analyse et complexité portées dans cet onglet, sans double comptage.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 38
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-003-010-A
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **E « BR lié(s) »** : BR-05-003-010-A
- **F « Description formalisée BR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.8 – Mise en staging zone « Cons. Directe »
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : Config / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Voir blueprint NNN
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de déplacer une HU vers un emplacement choisi et de l'enregistrer (/SCWM/ADHU ou déplacement de HU en RF), existe en standard. L'alternative consiste à utiliser ces deux fonctions. Le lien automatique entre les HU NNN et le bon 8* du destinataire n'existe pas en standard. Même BR que l'onglet NNN : à ne compter qu'une fois.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 39
Mots-clés trouvés : refus, litige, fournisseur, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Anomalies NNN – blocage complet & réintégration
- **E « BR lié(s) »** : (famille BR-01-003-020)
- **F « Description formalisée BR »** :
  > - Dans le cas d'un overdelivery détecté sur le bon de livraison, pouvoir encoder les qtés inscrites sur le bon de livraison en 1ere étape de livraison.
  >
  > Il doit être possible d'identifier la localisation du matériel dans l'entrepôt --> les colis de l'étape 1 doivent être visibles dans eWM.
  > '- Est-ce que nous bloquons la quantité totale ou bien l'overdelivery sur la ligne de commande concernée ? --> on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées.
  > Seul le mouvement 107 est généré sur les articles dont les quantités sont correctes.
  > Le mouvement 107 n'est pas généré pour l'article en litige.
  > Il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
  >
  > Un litige est automatiquement créé avec :
  > - info du PO
  > - article confirmé
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.9.1 – Anomalie détectée à la 1ère étape ; 3.5.9.2 – Anomalie détectée à la 2ème étape
- **J « Système »** : EWM / S/4
- **K « Numéro FSP »** : FS-16
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Spécificités NNN : blocage de toutes les lignes de la livraison ; HU dirigée automatiquement vers la lane « Litige » ; ajout du champ quantités lors de la réception des HU NNN/Consommation directe (menu ADHU) ; en cas de différences cela génère un litige à être traité par les acheteurs ; en fonction de la décision de l'acheteur :
  >
  > - quantités acceptées : débloquer la livraison entrante
  > - quantités refusées : clôturer la livraison entrante
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **Q « Commentaires / points ouverts »** : 2 « (GAP) » sans ID dans le doc final (3.5.9.1 et 3.5.9.2), regroupés ici
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de rejeter une notification de livraison et d'ajuster les quantités par poste avec des process codes. Les HU NNN étant techniquement vides, les blocages de stock standard ne s'appliquent pas. L'alternative consiste à déposer les HU en zone litige et à suivre le litige dans un avis Q2. Le blocage de toute la livraison NNN et de toutes ses HU, y compris celles déjà déposées, avec levée sur décision acheteur, n'existe pas en standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 40
Mots-clés trouvés : fournisseur, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-08-010-050
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Conversion automatique GTIN → NN
- **E « BR lié(s) »** : BR-08-010-050
- **F « Description formalisée BR »** : Dans le cas de suivi par numéros de série, et dans d'autres cas potentiellement, Le système doit scanner et convertir automatiquement le format "GTIN" en article "NN" afin d'utiliser directement le N° du fabriquant lors des différents encodages. .
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.4 – Encodage numéro de série fabricant
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Scan et conversion automatique du format GTIN vers l'article NN pour utiliser directement le numéro du fabricant lors des encodages (n° de série...).
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** :
  > Prérequis : le fournisseur doit envoyer le bon code barres & GTIN doit être connu dans nos systèmes
  >
  > Prévoir la fonctionnalité afin d'être prêt lorsque les GTIN seront maintenus dans le MMD Infrabel.
- **R « Analyse alternative Standard SAP »** : Le standard EWM reconnaît le GTIN/EAN de l'unité de mesure dans les champs de vérification produit en RF, y compris des GTIN supplémentaires, et décode les codes GS1-128. Le GTIN n'est pas converti en n° article dans tous les écrans. L'alternative consiste à maintenir les GTIN fournisseurs dans la fiche article et à les scanner en champ de vérification. L'écart porte sur les écrans où la conversion n'est pas standard ; prérequis : GTIN maintenus par MMD.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 46
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-03-002-130
- **B « Date workshop »** : 2026-11-25
- **C « Ancien ID deck »** : INB-032 (doublon deck)
- **D « Titre »** : Confirmation automatique AS/RS (LR35)
- **E « BR lié(s) »** : BR-03-002-130
- **F « Description formalisée BR »** : En cas de AS/RS (automatic storage and retrieval system)  (ex vers la LR35), le système doit confirmer la mise en stock dans la BIN prévue
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.6 – Stockage
- **I « Sous-section blueprint »** : 3.6.5 – Association de la HU à la BIN
- **J « Système »** : Interface externe
- **K « Numéro FSP »** : FS-20
- **L « Type FRICE »** : Interface
- **M « Description / Analyse – Proposition TO-BE »** : Intégration des tours (Hänel, Kardex, Modula) dans un même outil ; interfaces à mettre en place.
- **N « Statut »** : À analyser
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Doublon INB-032 du deck (aussi utilisé pour péremption) résolu par la convention BR
- **R « Analyse alternative Standard SAP »** : Le standard EWM confirme la tâche à réception du message /SCWM/WMTOCO envoyé par le système externe, ou via MFS. L'alternative consiste à utiliser cette confirmation IDoc standard pour la LR35. Rien ne manque côté EWM si le système Kardex sait envoyer le message. L'écart porte sur le côté fournisseur et le mapping.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 50
Mots-clés trouvés : 107, 109
Statut : Statut = Analysé

- **A « GAP ID »** : BR-01-005-100 (couvert)
- **C « Ancien ID deck »** : —
- **D « Titre »** : Annulation réception 2ème étape / rejet livraison
- **E « BR lié(s) »** : BR-01-005-100
- **F « Description formalisée BR »** : Le système doit permettre d'annuler une réception de manière simple afin de simplifier le processus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.4 – Annulation de la réception 2ème étape
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : —
- **M « Description / Analyse – Proposition TO-BE »** : Couvert par la solution existante de Gent-Zeehaven (annulation entrée marchandises / reject inbound delivery).
- **N « Statut »** : Analysé
- **P « Complexité »** : —
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'annuler une entrée marchandises et de rejeter une livraison (quantités remises à zéro sur la PO). La solution de Gent-Zeehaven s'appuie déjà dessus. Aucun développement attendu ; vérifier le comportement avec le flux 107/109.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 51
Mots-clés trouvés : NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP --
- **F « Description formalisée BR »** : Dans le cas d’un article NNN/Consommation directe, l’opérateur doit être en mesure d’encoder le numéro de série du fabriquant pour chaque article
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.4 Encodage numéro de série fabricant
- **N « Statut »** : A confirmer avec business
- **P « Complexité »** : /
- **Q « Commentaires / points ouverts »** : Quelle est la finalité d'introduire un numéro de série pour un article nnn/consommation directe
- **R « Analyse alternative Standard SAP »** : Le standard EWM gère les numéros de série via un profil de numéro de série sur l'article. Un article NNN n'a pas de fiche article et ses HU sont techniquement vides : la saisie de numéros de série n'est pas possible en standard. L'alternative consiste à noter le n° de série hors EWM (PO, document de réception). Le besoin métier est à confirmer avant toute analyse.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 52
Mots-clés trouvés : fournisseur
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : BR-03-001-030
- **B « Date workshop »** : 2026-11-16
- **E « BR lié(s) »** : BR-03-001-030
- **F « Description formalisée BR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **G « Couvert par (réf. BR) »** : Gap
- **Q « Commentaires / points ouverts »** :
  > 07-07-2026 : à ajouter dans le blueprint (section 3.3.2.) -> ok
  > 27-08-2026 : Quel est le besoin réel? / Quelles infos précisément avons-nous besoin? : 
  >    > Numéro de touret du fournisseur (comme numéro externe à la HU)?
  >    > Taille du touret? -> Est-ce que cette info est tjs dispo sur l'étiquette? Si oui, quid si on change de fournisseur et qu'on n'a plus cette info (actuellement non exigé dansles conditions logistiques)?
  > 27-08-2026 : après discussion avec Business :
  > -> Ne pas tenir compte de la dimension du touret
  > -> Pouvoir encoder l'identifiant unique du touret
  > -> Il n'y a pas tjs d'étiquette du fournisseur (donc encodage facultatif)
  > -> Associer l'identifiant au numéro HU (attention que cet identifiant pourrait être lié à d'autres num HU vu que la bobine nous reviendra ultérieurement par le fournisseur)
  > -> Il doit être possible de retrouver les liens entre identifiant et HU à partir du numéro de l'identifiant

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Inbound », ligne 53
Mots-clés trouvés : avoir
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-001-050-B
- **E « BR lié(s) »** : BR-01-001-050-B
- **F « Description formalisée BR »** : Il doit être possible d'activer le contrôle qualité interne au DC
- **G « Couvert par (réf. BR) »** : Gap
- **M « Description / Analyse – Proposition TO-BE »** :
  > Autorisations à des utilisateurs au niveau du magasin concernant la master data ?
  > Si la PO est déjà crée, le faite d'avoir un type d'inspection et de le changer en cours de route peut causer des incostistances
- **N « Statut »** : À analyser

### Onglet « GAP List Outbound » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 4
Mots-clés trouvés : retour
Statut : Statut = Attente réponse business REPL

- **A « GAP ID »** : GAP BR-05-004-050
- **B « Date workshop »** : 2026-10-22
- **C « Titre »** : Création de la livraison sortante conditionnée à la disponibilité du stock
- **D « BR lié(s) »** : BR-05-004-050
- **E « Description formalisée BR »** : La création de la livraison sortante (créée par replenishment) doit tenir compte de la disponibilité du stock (que l'on travaille avec des STO / réservations) → existe déjà en eWM actuellement
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **H « Sous-section blueprint »** : 3.1
- **I « Système »** : S/4
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Une livraison sortante ne peut être générée que si le stock est disponible dans le système, quel que soit le type de livraison (STO / réservation). 
- **M « Statut »** : Attente réponse business REPL
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** :
  > Point ouvert : commentaires blueprint — attente du retour de Gilles sur la génération des BL en lien avec l'ATP (Kayali 04/08) ; Youssef 25/08 : en cours.
  >
  > Attente Retour Replenishment - meeting 22/10
- **S « Gap impliquant d'autres équipes ? »** : oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Aucun bon 8* n'est créé sans stock disponible, que la demande soit un STO ou une réservation.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 5
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-003-010
- **C « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **D « BR lié(s) »** : BR-05-003-010
- **E « Description formalisée BR »** : Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports. Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle). Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **H « Sous-section blueprint »** : 3.1
- **I « Système »** : EWM
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Deck : standard Infrabel (VL01NO – solution Bascoup). À reclarifier avec le business pour lister tous les cas de figure des bons 8* sans référence.
- **M « Statut »** : Analysé 
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  > Fait partie du flux 5C Création de bon sans référence. Pas encore traité durant session Blueprint. A retirer du blueprint outbound car repris dans flux NNN? 
  > Mentionner dans le blueprint la possibilité d'utiliser la transaction VL06no pour sortir des articles sur un bon sans réference, c'est du standard et déja utilisé aujourd'hui. Juste expliquer la possibilité.
- **U « Résultat attendu »** : Les HU non gérées en stock sont rattachées au bon 8* sans référence de leur destinataire et localisées en zone de staging jusqu'au transport.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 6
Mots-clés trouvés : avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-004-090
- **C « Titre »** : Critères d'affectation des livraisons aux vagues de picking
- **D « BR lié(s) »** : BR-05-004-090
- **E « Description formalisée BR »** : Les vagues de picking doivent prendre en compte : la date de besoin ; le calendrier d'expédition des milkruns (routes) ; la disponibilité du stock ; la disponibilité des ressources matérielles ; la localisation des articles (picking par aire d'activité) ; le besoin du client qui ne souhaite pas que ses articles soient consolidés avec d'autres commandes ; le besoin du client d'être livré d'une quantité particulière à une date précise (lié à ODD)
- **F « Couvert par (réf. BR) »** : Gap (potentiel)
- **G « Section blueprint »** : 3.2 – Lancer les vagues de picking
- **H « Sous-section blueprint »** : 3.2.1 – Création et mise à jour automatique des vagues de picking
- **I « Système »** : EWM
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** :
  > Blueprint : l'affectation d'une OBD à une vague résulte de la combinaison de deux critères — sa route (qui détermine la série de vagues) et sa date de besoin (qui détermine l'occurrence retenue au sein de la série). La vague retenue est le lancement qui précède la date de besoin, et non le lancement calendairement le plus proche ; les fenêtres se succèdent sans recouvrement ni interruption. La date de création de l'OBD n'intervient pas. Exemple route Luttre (lancement le jeudi) documenté dans le blueprint.
  >
  > Concernant le calendrier milkrun, le besoin est d'avoir une vague Milkrun meme si la création des BL se fait depuis IM. relation 1:1 entre job Milkrun et Wave milkrun.
- **M « Statut »** : Analysé
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  >  si on considère que le job planifié dans S4 détermine l'occurrence dans SAP EWM, nous n'avons pas de développement à faire. A confirmer avec le business & bernard.
  >
  > A confirmer si nécessaire après la discussion avec REPL le 22/10
  >
  > 27/10 onleve de la wave la disponibité du stock car si pas de stock pas BL. Pour les ressource, pas besoin car on bloque les emplacement dans lesquels on ne veut pas picker
  > Gilles confirme le split de wave par Aire d'activité n'est pas nécessaire.
  >
  > Wave à part pour les ODD
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:w:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7BAD109957-E5E8-4E04-9DE8-65F2A2609C2D%7D&file=Planification%20jobs.docx&action=default&mobileredirect=true
- **R « Analyse alternative Standard SAP »** : Le standard EWM affecte les postes de livraison aux vagues par wave templates et enregistrements de conditions (par exemple route), avec des heures de lancement définies par wave template : route et date de besoin sont des critères exploitables. La disponibilité du stock est contrôlée à la création du BL, et la disponibilité des ressources n'intervient pas dans l'affectation aux vagues (note BA du 28/07). L'alternative consiste à laisser le job planifié S/4 déterminer l'occurrence et à utiliser la détermination standard par route côté EWM ; dans ce cas, aucun développement n'est nécessaire (commentaire de la ligne). Si l'affectation doit se faire dans EWM, la règle de fenêtre de besoins (lancement qui précède la date de besoin) n'est pas identifiée comme standard. L'écart porte sur cette règle ; solution à discuter avec le business et Bernard (voir colonne Lien document d'analyse).
- **U « Résultat attendu »** : Chaque livraison sortante rejoint automatiquement la vague de sa route dont la fenêtre couvre sa date de besoin, quelle que soit sa date de création.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 7
Mots-clés trouvés : avoir
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-004-120-A
- **C « Titre »** : Alerte dynamique DC à l'arrivée d'une demande T8/T9
- **D « BR lié(s) »** : BR-05-004-120-A
- **E « Description formalisée BR »** : Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail ? popup ? étiquette imprimée ? warning dans un rapport ?)
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.2 – Lancer les vagues de picking
- **H « Sous-section blueprint »** : 3.2.1 – Création et mise à jour automatique des vagues de picking
- **I « Système »** : EWM / Fiori
- **K « Type FRICE »** : Enhancement (PPF) et/ou App Fiori
- **L « Description / Analyse – Proposition TO-BE »** :
  > Blueprint : le DC doit être alerté activement de l'arrivée d'un T8/T9 ; l'information doit prendre la forme d'un signal global visible par l'ensemble du personnel du DC, non adressé à une personne ou un rôle ; ce signal ne doit pas perturber les activités de manutention en cours. Un dashboard dynamique affichant les T8/T9 à traiter en urgence, mis à jour automatiquement, sera disponible à tous les utilisateurs du DC. 
  > un Ecran avec couleur différentes par statuts picking etc
- **M « Statut »** : À analyser
- **N « Complexité »** : M
- **O « Commentaires / points ouverts »** :
  > Deck : GAP au niveau du système d'alerte (email + PPF selon le statut de la livraison, ou app Fiori). Renvoi au blueprint Reporting pour les écrans Fiori — coordonner les deux documents.
  > 25/09/2026 : première jet de Ronet :
  >
  > - Calendrier des milkruns (tournée fixée par semaine, la même toutes les semaines)
  >
  > - ODD
  >
  > - Urgences (T8/T9)
  >
  > - Par rapport au moyen/type de transport ? > câble ? à rediscuter
- **P « Owner »** : Moustafa
- **R « Analyse alternative Standard SAP »** : Le standard EWM peut déclencher des actions PPF (impression, e-mail) selon le statut de la livraison, affiche les livraisons et leur statut dans /SCWM/MON, et offre le Warehouse Cockpit et des apps KPI Fiori (voir onglet Reporting). L'alternative consiste à regrouper les T8/T9 dans des vagues urgentes dédiées (BR-05-004-120-C) et à afficher sur un écran du DC une vue filtrée sur ces vagues. Un signal global non nominatif, rafraîchi automatiquement et visible par tout le DC, n'existe pas tel quel en standard ; la piste du fichier BR est un dispositif de type ZIM1_WM_FOLLOWUP (Schaerbeek). L'écart porte sur cet affichage dynamique ; à coordonner avec le blueprint Reporting.
- **U « Résultat attendu »** : Le DC voit l'arrivée de chaque T8/T9 via un signal global visible par tous, sans perturber les tâches en cours.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 16
Mots-clés trouvés : avoir
Statut : Statut = À confirmer avec business

- **A « GAP ID »** : GAP BR-05-005-120-D
- **C « Titre »** : Demande « ship complete » – annulation et réaffectation automatiques
- **D « BR lié(s) »** : BR-05-005-120-D
- **E « Description formalisée BR »** : Si, au cours du picking, la quantité demandée ne peut pas être entièrement prélevée et que la demande client concernée (PR, ODD, KIT, BOM, OF…) n'autorise pas les livraisons partielles (ship complete), tous les ordres de prélèvement associés doivent être annulés. Cette annulation implique la génération automatique d'instructions de remise en stock des articles déjà prélevés, la réaffectation automatique à un prochain picking dès que le stock redevient disponible, et une notification à Replenishment signalant que la demande n'a pas pu être exécutée
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.4 – Flux de picking
- **H « Sous-section blueprint »** : 3.4.5 – Prélèvement et confirmation de la quantité
- **I « Système »** : EWM + S/4
- **K « Type FRICE »** : Enhancement + Workflow
- **L « Description / Analyse – Proposition TO-BE »** : Voir commentaire
- **M « Statut »** : À confirmer avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  > l'indicateur ship complete determine soit si la livraison doit etre complete, soit si le post de livraison doit être complet. 
  > Le ship complete  sur toute la livraison concerne les ODD, PR et OF
  > Le ship complete sur un poste de livraison concerne les KIT et les BOM. 
  >
  > Si ODD a un type de document séparé, un type de document EWM peut empecher les livraisons complete Si le ship est un magasin 8 alors ship complete
  > PR?pick requestutilisé par TUC et sont utilisé pcq il y'a des contraintes- Pour ship to = TUC
  > Pour les OF, 2 chose, il pourrait y avoir 2 choses. ship complete par appel de composant (bon 8*) ou ship complete par Ordre de fabrication? 2/11 Gilles confirmera que le ship complete ce sera pas BL et aussi si vraiment pour la production il y'aurait besoin de ship complet et donc ne pas autoriser de partiel
  >
  > Pour les kit qui sont des BOMs: sur EWM, lorsqu'un kit doit etre livré, les composants qui doivent "créer" le kit doivent être tous disponible. Sans tous les composant, le kit ne se créer pas. Est-ce suffisant pour avoir un " ship complete" pour les kits?  
  >
- **R « Analyse alternative Standard SAP »** : Selon le fichier BR, le ship complete correspond à l'indicateur de livraison complète: pas de livraison partielle, la demande n'est relâchée que lorsque tout est disponible. Côté EWM, la simulation de la vague avant lancement permet de vérifier la disponibilité. L'alternative (commentaire BRM) consiste à détecter l'indisponibilité avant le picking par simulation de la vague, ce qui couvre la majorité des cas, hors pick denial. L'annulation en cascade de tous les ordres de prélèvement, la remise en stock automatique des articles déjà prélevés, la réaffectation automatique et la notification à Replenishment n'existent pas en standard. L'écart porte sur le traitement du pick denial ; pertinence métier à confirmer.
- **S « Gap impliquant d'autres équipes ? »** : oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Une demande ship complete incomplète n'est pas expédiée : les articles prélevés sont remis en stock, la demande est reprise dès que le stock est disponible et Replenishment est informé.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 19
Mots-clés trouvés : fournisseur
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-005-060-B
- **B « Date workshop »** : 2026-12-08
- **C « Titre »** : Alignement des quantités du Supply Catalogue sur les conditionnements
- **D « BR lié(s) »** : BR-05-005-060-B
- **E « Description formalisée BR »** : Les quantités de commande proposées au client dans le Supply Catalogue doivent être alignées avec et limitées par les quantités de picking réalisables par le DC : plusieurs quantités de sortie peuvent être proposées pour un même article ; les quantités de sortie peuvent varier selon le conditionnement associé à un fournisseur ; les quantités du Supply Catalogue doivent être alignées avec les conditionnements de la commande auprès du fournisseur ; le client doit pouvoir indiquer dans sa commande si l'arrondi est permis
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.4 – Flux de picking
- **H « Sous-section blueprint »** : 3.4.5 – Prélèvement et confirmation de la quantité
- **I « Système »** : Supply Catalogue + S/4
- **K « Type FRICE »** : Interface / Enhancement hors EWM
- **L « Description / Analyse – Proposition TO-BE »** :  Le périmètre est principalement hors EWM (Supply Catalog et master data de conditionnement) mais conditionne le comportement de picking de BR-05-005-060-A.
- **M « Statut »** : A confirmer avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** : Ce GAP relève-t-il du périmètre EWM 2.0 ou du Supply Catalogue ?
- **S « Gap impliquant d'autres équipes ? »** : oui
- **T « Service impacté »** : ISC 61 - Michel Hainaut + MMD
- **U « Résultat attendu »** : Les quantités commandables dans le Supply Catalogue correspondent aux quantités que le DC peut prélever, et le client indique si l'arrondi est permis.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 20
Mots-clés trouvés : litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-005-140
- **C « Titre »** : Substitution de bobine avec code d'exception, photo et commentaire
- **D « BR lié(s) »** : BR-05-005-140
- **E « Description formalisée BR »** : Lors du picking de bobines, le magasinier doit pouvoir substituer une bobine par une bobine sœur en précisant le code d'exception (ex. bobine cassée). En fonction du code d'exception, il doit être possible d'insérer une photo / commentaire qui sera envoyé au coordinateur
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.4 – Flux de picking
- **H « Sous-section blueprint »** : 3.4.5 – Prélèvement et confirmation de la quantité
- **I « Système »** : EWM – RF
- **K « Type FRICE »** : Enhancement
- **L « Description / Analyse – Proposition TO-BE »** : Workflow de prise de photo suite à un souci rencontré durant le picking
- **M « Statut »** : À analyser
- **O « Commentaires / points ouverts »** : Deck (12/6) : question ouverte sur le lien avec la gestion des plaintes — à mutualiser avec la FSP litiges / workflow incidents de l'inbound.
- **Q « Lien document d'analyse »** : #VALUE!
- **U « Résultat attendu »** : Le coordinateur reçoit, pour chaque substitution de bobine, le code d'exception accompagné d'une photo ou d'un commentaire.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 31
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : BR-05-006-050 (couvert)
- **C « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **D « BR lié(s) »** : BR-05-006-050
- **E « Description formalisée BR »** : Pouvoir associer une livraison de marchandises NNN / consommation directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport — tracking de HU : localisation et statut
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.5 – Consolider le picking
- **H « Sous-section blueprint »** : 3.5.1 – Proposition de repackaging des HU de picking
- **I « Système »** : EWM
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Deck : standard Infrabel — solution Bascoup.
- **M « Statut »** : À analyser
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** : Recouvrement avec la GAP list Inbound (lien de tracking dans la notification) — à traiter une seule fois.
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B13A437E1-6D50-4818-A91A-1F3D15E15126%7D&file=EWM%202.0%20-%20consolidations.pptx&action=edit&mobileredirect=true&wdwpf=doclib-t
- **U « Résultat attendu »** : Les HU NNN / consommation directe sont consolidées dans un transport et suivies (localisation, statut).

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 41
Mots-clés trouvés : NNN, avoir
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-01-002-0020-B
- **C « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **D « BR lié(s) »** : BR-01-002-0020-B
- **E « Description formalisée BR »** : Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée afin d'avoir une traçabilité des articles (sauf contre-indication par le TOM)
- **F « Couvert par (réf. BR) »** : Gap 
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.1.2 – Distribution
- **I « Système »** : EWM
- **K « Type FRICE »** : Enhancement (PPF) + Form
- **L « Description / Analyse – Proposition TO-BE »** : Après réception de la confirmation du transporteur, le système envoie automatiquement les informations de transport au client destinataire par mail. Cette fonctionnalité doit pouvoir être activée / désactivée dans le système.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : M
- **O « Commentaires / points ouverts »** :
  > BR de la famille inbound BR-01-002 (notification NNN / conso directe) réutilisé côté outbound — vérifier la cohérence de numérotation et le recouvrement avec la FSP inbound de notification automatique au demandeur.
  >
  > Attente réponse de REPL car comment determine t on le destinataire quand on réceptionne l'article 
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Le demandeur est informé automatiquement que son matériel part avec la prochaine tournée, sauf contre-indication du TOM.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 45
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-06-003-030
- **C « Titre »** : Sortie de marchandises déclenchée par la sortie physique (caméra SSCC / GPS)
- **D « BR lié(s) »** : BR-06-003-030
- **E « Description formalisée BR »** : La sortie des marchandises dans le système IM doit être effectuée au moment où la marchandise quitte le DC (y compris via interface EDI avec le transporteur ou la plateforme qui gère les balises GPS ou le système caméra qui reconnaît les étiquettes SSCC)
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.2.4 – Sortie des articles du DC ; 4.1.3.1 – Détecter sortie des HU d'expédition
- **I « Système »** : Interface externe
- **K « Type FRICE »** : Interface
- **L « Description / Analyse – Proposition TO-BE »** : Blueprint : une fois la sortie de marchandises enregistrée dans EWM, la sortie IM est effectuée automatiquement au même moment ; la sortie physique doit correspondre à la sortie comptable. Pour les articles NNN / consommation directe, les articles quittent le DC sans enregistrement de la sortie comptable. Deck : la synchronisation EWM / S4 est standard ; le GAP porte sur l'interface avec le système caméra reconnaissant les étiquettes SSCC.
- **M « Statut »** : À analyser
- **N « Complexité »** : /
- **P « Owner »** : Youssef
- **U « Résultat attendu »** : La sortie comptable correspond à la sortie physique : elle est enregistrée au moment où la marchandise quitte le DC, y compris par détection automatique (caméra SSCC, GPS, EDI).

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Outbound », ligne 47
Mots-clés trouvés : refus
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : BR-02-002-050 
- **C « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **D « BR lié(s) »** : BR-02-002-050
- **E « Description formalisée BR »** :
  > Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone — scan à l'enlèvement par le magasinier
  >
  > Le magasinier sort les HU d’expédition de l’entrepôt une par une. Pour chaque HU, il confirme la sortie dans le système ainsi que l’endroit par lequel celle-ci quitte le DC (GAP).
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.2.2 – Confirmer la sortie des HU d'expédition
- **I « Système »** : EWM – RF
- **K « Type FRICE »** : —
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  > Guider l'opérateur vers la bonne HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.A réexpliquer le BR
  >
  > Le transporteur a t'il accès à SAP ? 
- **U « Résultat attendu »** : Le transporteur enlève la bonne HU refusée, contrôlée par scan, même si du matériel identique se trouve dans la même zone.

### Onglet « GAP List Internal » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Internal », ligne 2
Mots-clés trouvés : retour
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-04-001-010
- **B « Titre »** : Gestion et suivi des incidents de non-conformité
- **C « BR lié(s) »** : BR-04-001-010 ; BR-04-001-020-A ; BR-04-001-020-B 
- **D « Description formalisée BR »** : Lorsqu’une anomalie est constatée sur un article, permettre le blocage de la BIN pour empêcher le picking, la communication d’un incident au destinataire compétent, l’ajout de pièces jointes (ex. photo) et le suivi de cet incident dans le système.
- **E « Section blueprint »** : Non-conformités / blocage
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** : Relier le blocage de la BIN ou l’isolement des pièces non conformes à un incident suivi dans le système. Conserver qui a bloqué le stock, quand et pourquoi. Permettre l’ajout de justificatifs, notamment des photos. Identifier l’interlocuteur chargé de statuer, lui communiquer l’incident avec un appel à action et permettre le retour de sa décision au DC. Assurer le suivi du sort de l’article, que le signalement émane du DC ou d’un autre service, afin que les pièces ne restent pas bloquées sans traitement.
- **K « Statut »** : À analyser
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** : Définir le destinataire avec Gilles Moerenhout, Delphine Demoulin et Replenishment, l’objet de rattachement, le workflow et les modalités d’application de la décision. 
- **O « Analyse alternative Standard SAP »** : Le standard EWM permet de bloquer une BIN en mise en stock et en picking, de passer le stock en stock bloqué par changement de type de stock (/SCWM/POST) et de signaler l'anomalie par un code d'exception qui peut déclencher une alerte ou une tâche de suivi. Côté S/4, l'avis qualité Q3 (problème interne) documente l'incident avec pièces jointes, tâches assignées et statuts. L'alternative consiste à combiner le blocage du stock et un avis Q3 créé par le DC. Le lien automatique entre le blocage de la BIN et l'incident, avec retour de la décision au DC, n'existe pas en standard. 
- **P « Gap impliquant d'autres équipes ? »** : Oui
- **Q « Service impacté »** : Replenishment

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Internal », ligne 3
Mots-clés trouvés : mitraille
Statut : Statut = En attente de confirmation business

- **A « GAP ID »** : GAP BR-04-002-010-A
- **B « Titre »** : Retrait du stock selon statut article
- **C « BR lié(s) »** : BR-04-002-010 ; BR-04-002-010-A
- **D « Description formalisée BR »** : Émettre des tâches de picking regroupées dans une vague dédiée pour les articles Z3 destinés à la mitraille et les autres statuts retenus, sans validation préalable du coordinateur.
- **E « Section blueprint »** : Gestion des statuts / mitraille
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** :
  > Générer une vague dédiée et les tâches de retrait sur la base du statut de l’article, sans validation préalable du coordinateur. Le magasinier exécute ces tâches pour retirer les articles concernés. La liste des statuts sera définie au build.
  >
  > Replenishment doit lister les statuts dont on aura besoin (et qui sera utilisée durant le build)
  >
  > Lié au BR-07-005-070
- **K « Statut »** : En attente de confirmation business
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** : Définir déclenchement, fréquence et destination. 
- **O « Analyse alternative Standard SAP »** : L'alternative consiste à sélectionner le stock des articles Z3 et à créer les transferts avec ces fonctions, manuellement ou par job. La sélection automatique du stock selon le statut article S/4 pour alimenter la vague n'existe pas en standard. L'écart porte sur ce déclenchement : transferts, vagues et tâches restent standard.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Internal », ligne 6
Mots-clés trouvés : refus
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-04-004-020-A
- **B « Titre »** : Propositions de relocalisation à valider
- **C « BR lié(s) »** : BR-04-004-020 ; BR-04-004-020-A
- **D « Description formalisée BR »** :
  > Le système doit pouvoir relancer une optimisation du stockage (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
  > Comment ? rapport à transformer en vague ? vague de picking que le coordintateur peut accepter/refuser?plus grandes palettes, ou dans le mauvais type de rotation de stock)"
  > ex : une palette pleine n'a plus que qq articles -> la palette devient une boîte."[
- **E « Section blueprint »** : Mouvements internes / optimisation
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** : Proposer une réserve de travail regroupant les possibilités de relocalisation des HU vers des emplacements mieux adaptés, notamment lorsqu’une HU occupe un emplacement surdimensionné. Le coordinateur accepte ou refuse chaque proposition. Les propositions acceptées donnent lieu à des tâches de transfert.
- **K « Statut »** : À analyser
- **M « Complexité »** : XL
- **N « Commentaires / points ouverts »** : Très complexe à mettre en place
- **O « Analyse alternative Standard SAP »** : Le standard EWM propose le réarrangement (/SCWM/REARR) : sur la base du slotting, il compare l'emplacement actuel à l'emplacement optimal (index de slotting), liste les propositions et crée les tâches de transfert pour celles que l'utilisateur retient. L'alternative consiste à utiliser ce réarrangement, qui couvre déjà la validation par le coordinateur. Slotting et réarrangement sont des fonctions EWM avancées. Une réserve de propositions dimensionnelles (petite palette dans une grande BIN) n'existe pas en standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Internal », ligne 12
Mots-clés trouvés : avoir
Statut : Statut = A analyser

- **A « GAP ID »** : GAP BR-04-003-010
- **B « Titre »** : Effectuer les inventaires (cycle count)
- **C « BR lié(s) »** : BR-04-003-010
- **D « Description formalisée BR »** : Avoir une file d'attente des BIN à inventorier à laquelle le magasinier peut se connecter (en période creuse par exemple)
- **E « Section blueprint »** : 003 Effectuer les inventaires (cycle count)
- **G « Système »** : EWM
- **H « Numéro FSP »** : Config
- **J « Description / Analyse – Proposition TO-BE »** : Faire en sorte de créer une vague à part (ou autre) afin de prélever les HU vides (bacs, palettes etc) se trouvant encore dans la bin
- **K « Statut »** : A analyser

### Onglet « GAP List Reporting » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 2
Mots-clés trouvés : labo
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-010-A
- **B « Titre »** : Daily Huddle – charge de travail du jour
- **C « BR lié(s) »** : BR-07-001-010-A
- **D « Description formalisée BR »** :
  > Daily Huddle : rapport statique reprenant 
  > - les tâches à effectuer pour la journée à venir avec les ressources disponibles (humaines et matérielles)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.1 – Daily Huddle et charge de travail
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report / Config (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Rapport de charge du jour (ou J+1) par flux (réception, putaway, picking, mouvements internes, inventaire) : nombre de Warehouse Tasks / Warehouse Orders ouverts, mis en regard des ressources disponibles (magasiniers, engins). Seules les tâches portant sur des emplacements disponibles sont comptées : un emplacement bloqué manuellement (ressource matérielle indisponible, ex. chariot en panne) sort la tâche de la charge réalisable. Affichage sur l'écran du Daily Huddle.
- **L « Statut »** : Analysé
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** : Sous-BR absent de l'Excel BR (seul le parent BR-07-001-010 existe, couvert par « Gap »). Définir la liste des flux et la maille (jour J ou J+1). Définir la modélisation des ressources matérielles (Resources / Resource Groups EWM).
- **Q « Analyse alternative Standard SAP »** : Warehouse KPIs – Operations (cartes WT ouvertes du jour) ; Warehouse Monitor /SCWM/MON (WT/WO ouverts par process type ou activity area) ; Warehouse Cockpit + Measurement Services ; Labor Management (charge planifiée vs capacité). Reste spécifique : exclusion des tâches sur emplacements bloqués.
- **T « Résultat attendu »** : Le team lead dispose chaque matin d'une vue de la charge réalisable par flux au regard des ressources disponibles.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 3
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-010-B
- **B « Titre »** : Taux de service – jauge Daily Huddle
- **C « BR lié(s) »** : BR-07-001-010-B
- **D « Description formalisée BR »** : - le taux de service -> jauge global du taux de service (taux de plaintes vs nb de lignes de picking)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.2 – Taux de service
- **H « Système »** : EWM + customer care? Table plainte qualité?
- **J « Type FRICE »** : Report + Interface?
- **K « Description / Analyse – Proposition TO-BE »** : KPI affiché en pourcentage sur l'écran du Daily Huddle : (lignes de picking – lignes en plainte) / lignes de picking, sur une période glissante J-30 → J décalée quotidiennement. Dénominateur : WT de picking confirmées (EWM). Numérateur : plaintes clients issues de Customer Care, ventilées par catégorie (erreur administrative, erreur de picking, problème fournisseur).
- **L « Statut »** : Analysé
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** :
  > Le texte du BR dans le blueprint (« nombre de plaintes / nb de lignes de picking ») diffère de l'Excel (« taux de plaintes vs nb de lignes de picking ») : réaligner mot pour mot. Définition du KPI (taux de service vs taux de plaintes), période et calcul à valider. Maintien de Customer Care à l'horizon EWM 2.0 à confirmer. Sous-BR absent de l'Excel.
  >
  > Update 21/10/26 : Gaps repris dans le projet customer care 
  > -> out of scope EWM
- **Q « Analyse alternative Standard SAP »** : Aucune app standard ne croise plaintes externes et lignes de picking. Dénominateur disponible en standard (historique des WT confirmées). Jauge possible via Warehouse Cockpit / KPI Fiori.
- **R « Gap impliquant d'autres équipes ? »** : oui
- **S « Service impacté »** : Customer Care, SP, Replenishment
- **T « Résultat attendu »** : Le DC suit son taux de service glissant sur 30 jours, globalement et par catégorie de plainte.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 4
Mots-clés trouvés : 109
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-020
- **B « Titre »** : Dashboard global des opérations
- **C « BR lié(s) »** : BR-07-001-020
- **D « Description formalisée BR »** :
  > Dashboard global avec :
  > - les réceptions du jour à recevoir et déjà faites (1ière étape est à faire) (en temps réel)
  > - les réceptions dont la 2ième étape est à faire et déjà faite (en temps réel)
  > - les réceptions avec check QM à faire et déjà faites (en temps réel)
  > - les mises en stock du jour à faire et déjà faites (en temps réel)
  > - les préparatons du jour à faire et déjà faites (en temps réel)
  > - les consolidations du jour à faire et déjà faites (en temps réel)
  > - les expéditions/enlèvements du jour à faire et déjà faits (en temps réel)
  > - les inventaires du jour à faire et déjà faits (en temps réel)
  > - Alerte T8/T9 à traiter et déjà traités (en temps réel)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.3 – Dashboard global des opérations
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report (App analytique)
- **K « Description / Analyse – Proposition TO-BE »** : Dashboard temps réel de l'avancement du jour par flux, en « à faire / fait » : réception 1re étape (checklist, création de l'Inbound Delivery), réception 2e étape (GR 109/101), contrôles QM (Inspection Documents QIE), putaway, picking, consolidation, expédition / enlèvement (Goods Issue), inventaires du jour, alertes T8/T9. Données regroupées par flux sous forme de graphes.
- **L « Statut »** : Analysé
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** : Dépend de GAP BR-01-001-010-A (checklist) et de GAP BR-05-004-120-A (alerte T8/T9) pour les données custom. Définir la notion de « jour » par flux.
- **Q « Analyse alternative Standard SAP »** : Warehouse KPIs – Operations et apps KPI warehouse (WT ouvertes, livraisons en retard, délais GR/GI) ; Warehouse Monitor (tous objets, en liste) ; Warehouse Cockpit. Reste spécifique : vue unique agrégée multi-flux incluant 1re/2e étape, QM, consolidation et T8/T9.
- **T « Résultat attendu »** : Les coordinateurs voient en un écran l'avancement et la charge restante de tous les flux du DC.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 6
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-002-020
- **B « Titre »** : Livraisons et camions refusés
- **C « BR lié(s) »** : BR-07-002-020
- **D « Description formalisée BR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 4 – Suivi des réceptions
- **G « Sous-section blueprint »** : 4.2 – Livraisons et camions refusés
- **H « Système »** : S/4 (EWM embedded)
- **J « Type FRICE »** : Report
- **K « Description / Analyse – Proposition TO-BE »** : Rapport des livraisons entrantes refusées sur base de la checklist d'acceptation (motif de refus, fournisseur, PO/STO, date, transporteur), y compris lorsqu'aucune entrée de marchandises (MIGO / GR) n'a été comptabilisée.
- **L « Statut »** : Analysé
- **M « Complexité »** : S
- **N « Commentaires / points ouverts »** : Dépend entièrement de GAP BR-01-001-010-A (checklist d'acceptation/refus) : le rapport exploite les données de la checklist custom.
- **Q « Analyse alternative Standard SAP »** : Aucune : un refus sans GR n'est pas un objet standard.
- **T « Résultat attendu »** : Le DC trace les livraisons et camions refusés et leurs motifs, même sans entrée de marchandises.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 14
Mots-clés trouvés : avoir
Statut : Statut = A confirmer avec Business

- **A « GAP ID »** : BR-07-006-010
- **B « Titre »** : Statut des commandes et suivi du SLA
- **C « BR lié(s) »** : BR-07-006-010
- **D « Description formalisée BR »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **E « Couvert par (réf. BR) »** : GAP Potentiel
- **F « Section blueprint »** : 6 – Suivi des commandes et des expéditions
- **G « Sous-section blueprint »** : 6.1 – Statut des commandes et suivi du SLA
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Suivi des livraisons sortantes avec statut et date des étapes picking, packing et Goods Issue, comparées à la date de besoin pour mesurer le respect du SLA.
- **L « Statut »** : A confirmer avec Business
- **M « Complexité »** : S
- **N « Commentaires / points ouverts »** : Excel BR : « Gap ». Définir le SLA (écart vs date de besoin) et le destinataire de l'information.
- **Q « Analyse alternative Standard SAP »** : Statuts et dates standard de l'Outbound Delivery Order ; Warehouse Monitor ; apps KPI livraisons en retard / délai de GI.
- **T « Résultat attendu »** : Le DC maîtrise son SLA et informe les clients de façon fiable.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 17
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-008-010
- **B « Titre »** : Productivité par étape du processus
- **C « BR lié(s) »** : BR-07-008-010
- **D « Description formalisée BR »** :
  > Rapport de productivité pour chaque étape du process
  > ex : Le système doit permettre au teamlead de sortir des KPIs sur le taux de picking (nb picking / unité de temps) réalisé afin d'analyser le taux de performance et les root causes éventuelles
  > Le système doit être capable de suivre le temps travaillé pour déterminer un coût vérité.
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 8 – Suivi de la productivité
- **G « Sous-section blueprint »** : 8.1 – Productivité par étape du processus
- **H « Système »** : EWM
- **J « Type FRICE »** : Config / Report (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Rapport statique sur période : nombre de lignes / WT confirmées par unité de temps, par étape et par utilisateur (vérification documentaire, réception 1 et 2, putaway, picking, consolidation 1 et 2, chargement, GI, flux internes, QM, NNN). Suivi du temps travaillé pour calculer un coût réel.
- **L « Statut »** : Analysé
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** :  Étapes hors WT (checklist, consolidation, chargement) à tracer. « Coût vérité » : source du temps travaillé (RH ?).
- **Q « Analyse alternative Standard SAP »** :  historique des WT pour un calcul simple.
- **R « Gap impliquant d'autres équipes ? »** : oui
- **T « Résultat attendu »** : Le team lead analyse la performance par étape et par utilisateur et détermine un coût réel.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Reporting », ligne 18
Mots-clés trouvés : labo
Statut : Statut = A confirmer avec Business

- **A « GAP ID »** : BR-07-008-020
- **B « Titre »** : Suivi des activités complémentaires
- **C « BR lié(s) »** : BR-07-008-020
- **D « Description formalisée BR »** :
  > Dans un objectif de mesurage de la productivité, d'évaluation de l'efficacité des processus et de planification des ressources opérationnelles, le système doit permettre d'identifier, de distinguer et d'isoler certaines tâches ou ensembles de tâches exécutés par les manutentionnaires du DC qui ne relèvent pas des activités logistiques standard.
  >
  > Ex. : 
  > - reconditionnement d'articles à la réception
  > - comptage d'articles à la réception
  > - découpe de câbles
  > - assemblage de kits
  > - ....
  > - toute autre opération à valeur ajoutée réalisée en dehors des processus logistiques standards
  >
  > Le système doit permettre de tracer ces activités de manière distincte afin qu'elles puissent être exploitées pour le reporting opérationnel, l'analyse de performance des processus, le suivi de la productivité et la planification de la main-d'œuvre.
- **E « Couvert par (réf. BR) »** : GAP Potentiel
- **F « Section blueprint »** : 8 – Suivi de la productivité
- **G « Sous-section blueprint »** : 8.2 – Suivi des activités complémentaires
- **H « Système »** : EWM
- **J « Type FRICE »** : Config (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Traçabilité distincte des activités à valeur ajoutée hors flux standard (reconditionnement, comptage à la réception, découpe de câbles, assemblage de kits…) pour mesurer leur temps et les intégrer à la productivité et à la planification des ressources.
- **L « Statut »** : A confirmer avec Business
- **M « Complexité »** : —
- **N « Commentaires / points ouverts »** : BR introuvable dans l'Excel Business Requirements : texte repris du blueprint, à vérifier. Texte blueprint : « Reporting » seulement, à rediscuter avec Gilles. Découpe de câbles déjà spécifique (BR-05-005-150).
- **Q « Analyse alternative Standard SAP »** : VAS orders et kitting EWM ; tâches indirectes Labor Management.
- **T « Résultat attendu »** : Les activités à valeur ajoutée sont mesurées séparément des flux standard.

### Onglet « GAP List QM » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 2
Mots-clés trouvés : échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet sont placé dans emplacement qualité pour quitter le DC 
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B2F1AB41C-724F-47FA-8351-7DAE1CB99627%7D&file=Flux%20QM%20%E2%80%93%20EWM%202.0.pptx&action=edit&mobileredirect=true&wdwpf=doclib-t
- **R « Analyse alternative Standard SAP »** : Standard ne couvre pas pas la sortie d'echantillon en dehors du Warehouse Number. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 3
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 332 vers 243L automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 4
Mots-clés trouvés : refus, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet accepté ou refusé pour quitter le DC 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 5
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 332 vers 243A automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 6
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-01-001-050-B
- **C « Titre »** : Activation du contrôle qualité interne au DC
- **D « BR lié(s) »** : BR-01-001-050-00, BR-01-001-050-B, BR-01-003-040
- **E « Description formalisée BR »** : Il doit être possible d'activer le contrôle qualité interne au DC
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR – BR splitté)
- **G « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article
- **I « Système »** : S/4 QM + EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : A la 2ème étape de réception, un contrôle qualité interne au DC peut être déclenché sur un article. Les quantités concernées sont mises en stock qualité dans l'attente de la décision d'emploi.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA 07-07-2026 : ajouter le numéro du BR dans le blueprint QM. BA 29-06-2026 : justification à rechallenger (blocage facturation, split stock Q / stock libre) – réponse 06-07-2026 : « si nécessaire, oui ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : lot de contrôle à l'entrée marchandises activé via la vue QM de la fiche article, stock en Q jusqu'à la décision d'emploi. Un déclenchement ponctuel à l'initiative du DC n'est probablement pas couvert tel quel.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Comptabilité fournisseurs
- **U « Résultat attendu »** : Définir le déclencheur (fiche article, PO, décision du magasinier), le responsable de la décision d'emploi et l'impact sur la facturation.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 7
Mots-clés trouvés : retour, refus, labo, échantillon
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-000-010
- **C « Titre »** : Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **D « BR lié(s) »** : BR-02-000-010 ; BR-02-001-010
- **E « Description formalisée BR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 000 Commun quelle que soit la décision QM prise (référentiel BR)
- **I « Système »** : S/4 QM + EWM (QIE)
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : La DU prise sur le lot d'inspection s'applique à toutes les HU du lot, quel que soit leur emplacement (DC ou labo). Les échantillons envoyés au labo ne sont pas réintégrés au lot. A l'acceptation, la palette est libérée et devient disponible pour le picking au même moment.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Classé « Fonctionnalité QM – Pas listé dans les flux ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : QIE gère le prélèvement d'échantillons et la décision au niveau du lot ; les HU rattachées au lot sont postées selon la décision. Points à vérifier : HU situées hors du DC et traitement du stock échantillon.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Labo
- **U « Résultat attendu »** : Confirmer avec QM le cycle de vie des échantillons (consommation, destruction, retour) et la représentation du labo dans SAP.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 8
Mots-clés trouvés : refus, litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-000-020
- **C « Titre »** : Flux de communication du contrôleur vers acheteur et DC (acceptation / refus)
- **D « BR lié(s) »** : BR-02-000-020 ; à rapprocher de GAP BR-01-003-100
- **E « Description formalisée BR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 000 Commun quelle que soit la décision QM prise (référentiel BR)
- **I « Système »** : S/4 QM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Workflow / Output
- **L « Description / Analyse – Proposition TO-BE »** : A la DU le contrôleur déclenche une notification vers l'acheteur et vers le DC en cas de refus partiel ou complet, et vers le DC en cas d'acceptation.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Réutilisation possible du canal litiges (GAP BR-01-003-100) à étudier.
- **R « Analyse alternative Standard SAP »** : Pas de notification automatique standard identifiée à la décision d'emploi ; développement ou réutilisation du workflow litiges probable.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Replenishment (achats)
- **U « Résultat attendu »** : Définir les destinataires, le canal (mail, tuile Fiori) et le contenu de la notification.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 9
Mots-clés trouvés : labo, échantillon
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-001-010
- **C « Titre »** : Traçabilité des échantillons DC ↔ labo
- **D « BR lié(s) »** : BR-02-001-010 ; BR-02-000-010
- **E « Description formalisée BR »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 001 Mettre le matériel à disposition de l'inspection (stock Q) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : Les échantillons sont gérés en HU. Chaque déplacement DC → labo → DC est confirmé par scan et l'HU est positionnée dans un emplacement représentant le labo (flux physique = flux SAP).
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed. Traçabilité HU à travers le E2E ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : mouvements HU standard EWM vers un storage type « Labo ». 
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Labo
- **U « Résultat attendu »** : Confirmer la localisation du labo (interne au DC ou site distinct) et le mode de suivi attendu.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 10
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-001-020
- **C « Titre »** : Remplacement du contrôle chez le fournisseur par un contrôle à la réception
- **D « BR lié(s) »** : BR-02-001-020
- **E « Description formalisée BR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 001 Mettre le matériel à disposition de l'inspection (stock Q) (référentiel BR)
- **I « Système »** : S/4 QM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : L'inspecteur remplace ponctuellement le contrôle prévu chez le fournisseur par un contrôle à la réception. Le matériel est alors mis en stock qualité à la réception dans l'attente de la décision.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Besoin principalement porté par QM ; impact EWM = mise en stock qualité à la réception.
- **R « Analyse alternative Standard SAP »** : changement manuel du type d'inspection
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM
- **U « Résultat attendu »** : Confirmer avec QM le mécanisme de bascule et son impact sur la réception EWM.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 11
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-002-010
- **C « Titre »** : HU dédiées au retour fournisseur
- **D « BR lié(s) »** : BR-02-002-010
- **E « Description formalisée BR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **F « Couvert par (réf. BR) »** : Standard 
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : Le matériel refusé destiné au retour fournisseur reste géré en HU dans EWM tant qu'il se trouve dans le magasin.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed ».
- **R « Analyse alternative Standard SAP »** : Gestion des HU standard EWM (stock HU managed). Un développement n'est probablement nécessaire que pour des besoins spécifiques au retour.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer si le standard HU managed couvre entièrement le besoin.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 12
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP possible BR-02-002-020
- **C « Titre »** : Étapes de refus et de renvoi guidées par scanner
- **D « BR lié(s) »** : BR-02-002-020
- **E « Description formalisée BR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM – RF
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : L'agent suit les étapes de refus et de renvoi du matériel au scanner : prélèvement des HU refusées, dépôt en zone de retour et préparation de l'enlèvement.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists.
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : tâches magasin RF standard sur une livraison sortante de retour fournisseur.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Définir les étapes de refus à guider au scanner.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 13
Mots-clés trouvés : retour, refus, rebut, fournisseur
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-02-002-030
- **C « Titre »** : Étiquetage du matériel rebuté pour retour fournisseur
- **D « BR lié(s) »** : BR-02-002-030
- **E « Description formalisée BR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Form
- **L « Description / Analyse – Proposition TO-BE »** : Le matériel rebuté, en entier ou partiellement, est identifié par une étiquette de retour fournisseur.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists.
- **R « Analyse alternative Standard SAP »** : Impression d'étiquette HU standard via PPF ; un contenu spécifique « retour fournisseur » nécessite un formulaire.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Définir le contenu de l'étiquette de retour.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 14
Mots-clés trouvés : retour, refus, fournisseur, 922, 108
Statut : Statut = À analyser

- **A « GAP ID »** : BR-02-002-040
- **C « Titre »** : Document de renvoi fournisseur lié au PO (bon 8000)
- **D « BR lié(s) »** : BR-02-002-040 ; lié à GAP BR-01-003-110
- **E « Description formalisée BR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **F « Couvert par (réf. BR) »** : Standard 
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : S/4 + EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : Le renvoi chez le fournisseur repose sur un document lié au PO, dont la référence est transmise par Replenishment au fournisseur et sert au transporteur pour la prise de rendez-vous et l'identification de la marchandise.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « x (Créer bon sans référence) ». Solution à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922).
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : livraison de retour fournisseur référencée au PO (standard S/4 / EWM).
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Trancher le type de document de retour en cohérence avec GAP BR-01-003-110.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 15
Mots-clés trouvés : refus
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-02-002-050
- **C « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **D « BR lié(s) »** : BR-02-002-050
- **E « Description formalisée BR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **F « Couvert par (réf. BR) »** : —
- **G « Section blueprint »** : 4.1 – Flux expédition (Blueprint Outbound)
- **H « Sous-section blueprint »** : 4.1.2.2 – Confirmer la sortie des HU d'expédition
- **I « Système »** : EWM – RF
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Le magasinier scanne la HU refusée au moment de son enlèvement afin de confirmer la sortie de la bonne HU, notamment lorsque d'autres HU contenant le même article se trouvent dans la même zone.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** : Repris de la GAP List Outbound (ID sans préfixe « GAP »). Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : chargement RF standard par scan de HU sur l'unité de transport (TU).
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer si le chargement RF standard sur TU suffit.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 17
Mots-clés trouvés : avoir, 917
Statut : Statut = À analyser

- **A « GAP ID »** : — (couvert EWM GZH)
- **C « Titre »** : Isolement / quarantaine du stock non conforme avec traçabilité
- **D « BR lié(s) »** : BR-04-001-020-00, BR-04-001-020-A
- **E « Description formalisée BR »** :
  > Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au client
  > (pourquoi bloqué, historique...)
  > - Isoler sur place (dans la bin) = empêcher le picking sur ces pièces 
  > - ou transférer vers une zone quarantaine
- **F « Couvert par (réf. BR) »** : EWM GZH (référentiel BR)
- **G « Section blueprint »** : Blueprint Internal Processes – Stockage
- **H « Sous-section blueprint »** : 001 Gérer les articles non conformes à sortir du stock (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config
- **L « Description / Analyse – Proposition TO-BE »** : Le stock non conforme est bloqué sur place ou transféré vers une zone de quarantaine (ex. 917) le temps de l'analyse. Le système trace qui a bloqué le stock, quand et pourquoi.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA 01-09-2026 : il doit être possible de sortir les articles de la BIN et de les mettre en 917 ; on veut bloquer le stock et avoir son tracking (qui, quand, pourquoi).
- **R « Analyse alternative Standard SAP »** : Changement de type de stock (libre → bloqué) et tâche magasin vers un type de stockage de quarantaine. La restitution « qui / quand / pourquoi » est à vérifier dans les documents standard.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer que le standard GZH couvre la traçabilité du motif de blocage.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 18
Mots-clés trouvés : retour, litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-04-001-020-B
- **C « Titre »** : Suivi de la décision sur un article bloqué pour non-conformité
- **D « BR lié(s) »** : BR-04-001-020-B ; BR-04-001-020-A
- **E « Description formalisée BR »** :
  > pas encore de BR > à discuter avec autre pilier > fichier "Input à valider" ID34
  >
  > Besoin détecté : quand article est bloqué pour picking et en attente d'une décision -> assurer suivi du sort de l'article pour qu'il ne s'éternise pas dans le stock
  > -> Assurer le suivi des incidents
  > (Note : traiter ce point dans les "flux internes")
- **F « Couvert par (réf. BR) »** : — (BR en cours de formalisation)
- **G « Section blueprint »** : Blueprint Internal Processes – Stockage
- **H « Sous-section blueprint »** : 001 Gérer les articles non conformes à sortir du stock (référentiel BR)
- **I « Système »** : S/4 / Fiori
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Workflow
- **L « Description / Analyse – Proposition TO-BE »** : Lorsqu'un doute sur la conformité d'un article en stock est émis (DC ou autre service), les pièces sont rendues indisponibles au picking. Le système identifie l'interlocuteur chargé de statuer, l'informe avec un appel à action et assure le suivi jusqu'au retour décisionnel vers le DC.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA statut 1 (actions BA) – ID34 du fichier « Input à valider ». À discuter avec un autre pilier ; à traiter dans les flux internes.
- **R « Analyse alternative Standard SAP »** : Pas de workflow standard identifié couvrant le cycle complet ; réutilisation possible du workflow litiges (GAP BR-01-003-100) ou des notifications QM.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment / Gestionnaire technique / QM
- **U « Résultat attendu »** : Formaliser le BR avec l'autre pilier et définir les acteurs du circuit de décision.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 19
Mots-clés trouvés : retour, NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **D « BR lié(s) »** : BR-05-001-010
- **E « Description formalisée BR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article. 
  > L'article doit alors se trouver dans une zone particulière.
- **F « Couvert par (réf. BR) »** : — (sans classification au référentiel BR)
- **G « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **H « Sous-section blueprint »** : 3.5.5 – Immatriculation
- **I « Système »** : EWM
- **J « Numéro FSP »** : Standard
- **K « Type FRICE »** : Config / Enhancement
- **L « Description / Analyse – Proposition TO-BE »** : Suivi de la HU partant à l'immatriculation et de son retour ; zone particulière dédiée (magasin vers magasin)
- **M « Statut »** : A confirmer avec business
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** : Repris de la GAP List Inbound. Confirmer que la solution présentée répond au besoin métier. BA 07-07-2026 : parties « immatriculation » et « QM » du flux Réc 2 pour stock à traiter dans le blueprint QM.
- **R « Analyse alternative Standard SAP »** : Transfert magasin vers magasin et HU managed standard ; indication automatique « article à immatriculer » à analyser.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer que la solution présentée répond au besoin métier.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 21
Mots-clés trouvés : litige, 107, 109
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-07-002-030
- **C « Titre »** : Rapport des litiges de réception par ligne de PO
- **D « BR lié(s) »** : BR-07-002-030 ; à rapprocher de GAP BR-01-003-100
- **E « Description formalisée BR »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : 4 – Suivi des réceptions (Blueprint Reporting)
- **H « Sous-section blueprint »** : 4.3 – Litiges à la réception par ligne de commande
- **I « Système »** : S/4 / EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Report
- **L « Description / Analyse – Proposition TO-BE »** : Le rapport restitue, par ligne de PO, les litiges détectés à toutes les étapes de réception (checklist, 107, 109).
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Lien QM indirect (litiges / non-conformités). Dépend de la base litiges (GAP BR-01-003-100).
- **R « Analyse alternative Standard SAP »** : Pas de rapport standard consolidant checklist et mouvements 107/109 par ligne de PO.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Confirmer les sources de litiges à agréger et le niveau de détail attendu.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 22
Mots-clés trouvés : refus
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : TOM est interessé de recevoir l'info lors d'un refus durant le déchargeent du caion
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** : /

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 23
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : Echantillons DC - Labo
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** :
  > Attention, dans certains cas, 2 échantillons sont
  > nécessaires -> Un sur place dans le DC et un au labo,
  > par ex

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List QM », ligne 26
Mots-clés trouvés : échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : Echantillons détruit 
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** :
  > Pour des pièces qui seront détruites, introduire une
  > ligne supplémentaire dans le PO "pièces gratuites"

### Onglet « GAP List Immatriculation » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Immatriculation », ligne 2
Mots-clés trouvés : retour
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Titre »** : Génération automatique de l’envoi en immatriculation
- **D « BR lié(s) »** : BR-05-001-010
- **E « Description formalisée BR »** : Suivre automatiquement les articles envoyés à l’immatriculation et les localiser dans une zone dédiée. Après leur dépôt en staging immatriculation, générer automatiquement les mouvements et le bon 8* nécessaires à leur envoi.
- **F « Section blueprint »** : Immatriculation
- **G « Sous-section blueprint »** : Envoi vers immatriculation
- **H « Système »** : EWM / S/4HANA
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Après la réception et la confirmation du dépôt des HU dans la BIN de staging immatriculation, le système génère automatiquement les mouvements nécessaires et le bon 8* vers le lieu d’immatriculation. Ce bon permet de poursuivre le picking, les deux consolidations et la sortie de marchandises, directement depuis le BL ou via un TU, selon les flux communs. 
- **L « Statut »** : À analyser
- **N « Complexité »** : L
- **O « Commentaires / points ouverts »** : Préciser les mouvements techniques, les magasins source/destination, les règles de génération et de regroupement du bon 8*. Confirmer la couverture des contraintes de picking, traçabilité et MRP avec les équipes concernées. Pour le retour : responsable du transfert et document de référence du garage Draisine à préciser. Décisions utilisateur du 28/09 : ne pas figer 411/311 ; conserver les deux étapes de réception au retour. Les flux communs sont réutilisés ; le dépôt direct en staging immatriculation lors de la réception fait l’objet d’un GAP distinct. Ancienne ligne Inbound 37 remplacée par un renvoi, sans double comptage.
- **P « Analyse alternative Standard SAP »** : Le standard SAP permet de créer une livraison sortante pour un transfert entre magasins, via une commande de transfert (STO, livraisons créées par VL10B) ou sans référence (VL01NO), puis de la traiter dans EWM comme toute livraison : picking, deux consolidations et sortie de marchandises depuis le BL ou via TU. Les HU déposées en staging immatriculation sont localisées et visibles dans /SCWM/MON. L'alternative consiste à créer le bon 8* manuellement dès que le dépôt en staging est confirmé. La création automatique du bon 8* et des mouvements à la confirmation du dépôt n'existe pas en standard.
- **S « Résultat attendu »** : Déclencher l’envoi en immatriculation depuis le staging sans saisie manuelle des mouvements et du bon 8*, en assurant la traçabilité et la disponibilité correcte du stock.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List Immatriculation », ligne 4
Mots-clés trouvés : fournisseur
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP - Etiquette
- **C « Titre »** : Etiquette GR contenant le numéro d'immatriculation + numéro de série SAP (pas fournisseur) 

### Onglet « GAP List NNN » (ligne d’en-tête détectée : L1)

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 2
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-010
- **B « Titre »** : Orientation vers le flux NNN / consommation directe
- **C « BR lié(s) »** : BR-01-002-010
- **D « Description formalisée BR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : Fin de réception première étape / sélection du flux deuxième étape
- **H « Système »** : EWM
- **I « Numéro FSP »** : FS-XX
- **J « Type FRICE »** : Enhancement / Config à qualifier
- **K « Description / Analyse – Proposition TO-BE »** : Identifier dès la fin de la première étape les articles non destinés au stock et orienter leur réception deuxième étape vers le parcours NNN/consommation directe avec HU techniquement vides.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Les articles NNN n'ayant pas de fiche article gérée en stock dans EWM, l'orientation automatique vers un parcours de HU techniquement vides n'existe pas en standard.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 3
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Parcours RF de réception des HU NNN techniquement vides
- **C « BR lié(s) »** : BR-01-002-010 (orientation) ; détail RF issu du blueprint/deck
- **D « Description formalisée BR »** : Présenter les HU de la zone de réception selon l’ordre opérationnel et permettre leur traitement malgré l’absence de contenu article EWM.
- **E « Couvert par (réf. BR) »** : Extension du parcours RF existant
- **F « Section blueprint »** : 3.5 – NNN / Consommation directe
- **G « Sous-section blueprint »** : 3.5.1 et contrôle de réception ; deck RF
- **H « Système »** : EWM / S/4
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Sélection de zone, liste des HU à traiter, ordre FIFO/priorité et passage à la HU suivante. Donner accès à la déclaration d’anomalie. Enregistrer l’avancement de réception de chaque HU pour alimenter les conditions 101, déclenché uniquement quand toutes les HU sont recues et qu'aucune n'est litigieuse.
- **L « Statut »** : Analysé 
- **N « Complexité »** : L
- **P « Analyse alternative Standard SAP »** : Le standard EWM travaille en RF sur des HU contenant du stock article ; une HU vide peut être créée, étiquetée et déplacée, mais sa « réception » ligne par ligne sans contenu EWM n'existe pas en standard. L'alternative consiste à contrôler les articles sur la base de la PO hors RF et à n'utiliser le RF que pour localiser la HU. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 4
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-05-003-010-A
- **B « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **C « BR lié(s) »** : BR-05-003-010-A
- **D « Description formalisée BR »** : Localiser les HU non gérées en stock dans une zone de staging pour préparer leur expédition, enlèvement ou transfert.
- **E « Couvert par (réf. BR) »** : Couverture à vérifier
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.8 – Mise en staging zone « Cons. Directe »
- **H « Système »** : EWM
- **I « Numéro FSP »** : Standard
- **J « Type FRICE »** : Config / Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Le magasinier choisit et scanne la bin de dépose. Enregistrer la localisation de la HU techniquement vide et la dépose. Pas de proposition automatique de bin ni de logique porteur de mise en stock.
- **L « Statut »** : Analysé 
- **N « Complexité »** : S
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de déplacer une HU, même vide, vers un emplacement scanné par l'opérateur (/SCWM/ADHU ou déplacement de HU en RF) et de la retrouver dans /SCWM/MON. L'alternative consiste à utiliser ce déplacement de HU standard vers la BIN de staging « Consommation Directe ». Rien de spécifique n'est nécessaire pour la localisation.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 5
Mots-clés trouvés : retour, refus, litige, rebut, fournisseur, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-003-020
- **B « Titre »** : Anomalies NNN : blocage de toute la livraison et de ses HU
- **C « BR lié(s) »** : (famille BR-01-003-020)
- **D « Description formalisée BR »** : En cas d’anomalie NNN/consommation directe détectée à la première ou à la deuxième étape, bloquer toute la livraison et toutes les HU associées, même réparties sur plusieurs colis.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.9.1 – Anomalie détectée à la 1ère étape ; 3.5.9.2 – Anomalie détectée à la 2ème étape
- **H « Système »** : EWM / S/4
- **I « Numéro FSP »** : FS-16
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Première étape : bloquer toute la livraison. Deuxième étape : déclaration d’anomalie depuis le RF et lien avec le cockpit litiges ; bloquer tout le contenu de la livraison, y compris les HU déjà contrôlées et déposées, pour empêcher leur picking. Dépose manuelle des HU concernées en zone litige. L’acceptation de l’acheteur suffit à lever le blocage de toutes les HU, sans contrôle supplémentaire imposé. En cas de refus : clôture de la livraison et traitement retour fournisseur ou rebut. Le 101 et le mail restent conditionnés à la réception et à la dépose de toutes les HU sans litige bloquant.
- **L « Statut »** : Analysé 
- **N « Complexité »** : XL
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de rejeter une livraison et d'ajuster les quantités par poste avec des process codes, et de bloquer une BIN (par exemple la lane litige). Les HU NNN étant techniquement vides, les blocages de stock standard ne s'appliquent pas. L'alternative consiste à déposer les HU en lane litige, à bloquer cette BIN et à suivre le litige dans un avis qualité Q2. Le blocage de toute la livraison et de toutes ses HU, y compris celles déjà déposées ailleurs, avec levée sur décision acheteur, n'existe pas en standard. L'écart porte sur ce blocage groupé et le lien avec le cockpit litiges.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 6
Mots-clés trouvés : retour, refus, fournisseur, NNN, 122
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Retour fournisseur NNN / consommation directe
- **C « BR lié(s) »** : BR à confirmer
- **D « Description formalisée BR »** : Définir le traitement du retour fournisseur des HU NNN/consommation directe après refus de l’acheteur.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : NNN / Consommation directe
- **G « Sous-section blueprint »** : Traitement du refus et retour fournisseur
- **H « Système »** : EWM / S/4
- **J « Type FRICE »** : À déterminer
- **K « Description / Analyse – Proposition TO-BE »** : Analyser le flux physique des HU techniquement vides, les documents nécessaires, la traçabilité et les impacts comptables selon l’avancement de la réception, notamment avant ou après le 101. Définir le traitement de la livraison entrante et de la PO. Aucune clôture, annulation ou solution de retour n’est arrêtée à ce stade.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** : Le standard SAP gère le retour fournisseur par mouvement de retour (122) après le 101, ou par rejet de la livraison entrante avant le 101 (la quantité repasse à zéro sur la PO). Pour la sortie physique, le bon 8* sans référence (VL01NO) utilisé pour les NNN peut porter les HU vers le fournisseur. L'alternative consiste à combiner ces documents selon l'avancement de la réception. Aucun élément ne montre à ce stade un besoin hors standard. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 7
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Réception comptable 101 après traitement de toute la livraison NNN
- **C « BR lié(s) »** : BR spécifique à confirmer
- **D « Description formalisée BR »** : Déclencher le 101 seulement lorsque toutes les HU de la livraison sont réceptionnées et déposées, sans litige bloquant.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – NNN / Consommation directe
- **G « Sous-section blueprint »** : 3.5.6 – Réception comptable
- **H « Système »** : S/4 / EWM
- **K « Description / Analyse – Proposition TO-BE »** : Automatiser le 101 à partir de la livraison entrante après vérification de toutes ses HU. Une HU non réceptionnée, non déposée ou un litige bloquant empêche le déclenchement.
- **L « Statut »** : Analysé 
- **N « Complexité »** : L
- **P « Analyse alternative Standard SAP »** : Le standard SAP comptabilise l'entrée marchandises 101 d'un poste de PO en consommation directe dans S/4 (MIGO ou sur la livraison entrante), sans stock EWM. L'alternative consiste à poster le 101 manuellement une fois toutes les HU contrôlées et déposées. 

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 8
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-020-A
- **B « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **C « BR lié(s) »** : BR-01-002-020-A
- **D « Description formalisée BR »** : Après réception NNN/consommation directe, informer automatiquement le demandeur de la disponibilité du matériel avec numéro de HU, localisation et numéro de PO.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **H « Système »** : EWM
- **I « Numéro FSP »** : FS-15
- **K « Description / Analyse – Proposition TO-BE »** : Envoyer le mail lorsque toutes les HU de la livraison sont réceptionnées et déposées et qu’aucun litige ne bloque la livraison. Aucun mail tant que ces conditions ne sont pas réunies.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Le mail au demandeur avec HU, localisation et PO, envoyé seulement quand toutes les HU sont déposées sans litige, n'existe pas en standard, pas plus que la détermination du demandeur.
- **Q « Gap impliquant d'autres équipes ? »** : oui
- **R « Service impacté »** : SP, replenishment

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 9
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-05-006-050-B
- **B « Titre »** : Traçabilité des HU NNN et visibilité du destinataire
- **C « BR lié(s) »** : BR-05-006-050-B
- **D « Description formalisée BR »** :
  > "Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut"
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.7–3.5.8 ; préparation expédition
- **H « Système »** : EWM 
- **I « Numéro FSP »** : FS-XX
- **K « Description / Analyse – Proposition TO-BE »** : Suivre localisation et statut de chaque HU techniquement vide. Afficher le destinataire dans le moniteur pour retrouver les HU et préparer leur expédition. Conserver les liens livraison entrante/PO 
- **L « Statut »** : Analysé 
- **N « Complexité »** : S
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de suivre la localisation et le statut de chaque HU, même vide, dans /SCWM/MON, avec les liens vers la livraison entrante. L'alternative consiste à utiliser le monitor et à retrouver le destinataire via la PO. L'affichage du destinataire directement sur la HU dans le monitor n'existe pas en standard. L'écart porte sur ce champ et son affichage ; le suivi de la HU reste standard.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 10
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-003-010
- **B « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **C « BR lié(s) »** : BR-05-003-010-B
- **D « Description formalisée BR »** : Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports. Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle). Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP
- **E « Couvert par (réf. BR) »** : Standard Infrabel
- **F « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **G « Sous-section blueprint »** : 3.1
- **H « Système »** : EWM
- **J « Type FRICE »** : —
- **K « Description / Analyse – Proposition TO-BE »** : Création manuelle du bon 8 sans référence avec un article technique d’emballage (palette, boîte…). Rattacher les HU NNN techniquement vides au flux sortant pour le destinataire et l’adresse de livraison. Solution de la présentation retenue.
- **L « Statut »** : Analysé 
- **N « Complexité »** : /
- **P « Analyse alternative Standard SAP »** : Solution standard Infrabel : bon 8* sans référence (VL01NO) avec un article technique d'emballage, traité dans EWM comme une livraison sortante, comme à Bascoup. Les HU NNN sont rattachées au flux sortant pour le destinataire et l'adresse de livraison. Pas d'écart par rapport au standard ; le rattachement des HU est traité dans la ligne de sélection par destinataire.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 11
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Sélection et préparation des HU NNN par destinataire
- **C « BR lié(s) »** : BR-05-003-010-B ; complément blueprint NNN
- **D « Description formalisée BR »** : Sélectionner pour le bon 8 les HU NNN disponibles du destinataire, en excluant toutes les HU des livraisons bloquées.
- **E « Couvert par (réf. BR) »** : Gap / extension à qualifier
- **F « Section blueprint »** : Préparation NNN / consommation directe
- **G « Sous-section blueprint »** : Picking et déplacement des HU vides
- **H « Système »** : EWM
- **J « Type FRICE »** : Enhancement / Config à qualifier
- **K « Description / Analyse – Proposition TO-BE »** : Après création manuelle du bon 8, sélectionner les HU par destinataire à partir des données liées à la HU. Empêcher le picking de toute HU appartenant à une livraison bloquée, même déjà déposée. Vérifier la création et l’exécution RF des tâches de déplacement des HU techniquement vides vers la préparation.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet d'emballer des HU dans une HU d'expédition et de les rattacher au bon 8* au moment de la préparation. L'alternative consiste à sélectionner les HU du destinataire depuis /SCWM/MON (via la PO) et à bloquer la lane litige pour qu'aucune HU bloquée n'en sorte. La sélection automatique des HU par destinataire et l'exclusion des HU d'une livraison bloquée déjà déposées hors litige n'existent pas en standard. 
- **S « Résultat attendu »** : Préparer uniquement les HU autorisées pour le bon destinataire.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 12
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-006-050 (couvert)
- **B « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **C « BR lié(s) »** : BR-05-006-050-A
- **D « Description formalisée BR »** : Pouvoir associer une livraison de marchandises NNN / consommation directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport — tracking de HU : localisation et statut
- **E « Couvert par (réf. BR) »** : Standard Infrabel
- **F « Section blueprint »** : 3.5 – Consolider le picking
- **G « Sous-section blueprint »** : 3.5.1 – Proposition de repackaging des HU de picking
- **H « Système »** : EWM
- **J « Type FRICE »** : —
- **K « Description / Analyse – Proposition TO-BE »** : Consolider les HU NNN techniquement vides dans la HU d’expédition du bon 8, contenant un article technique d’emballage. Conserver les liens entre HU et la cohérence du destinataire lors du regroupement et de l’affectation au transport.
- **L « Statut »** : Analysé 
- **N « Complexité »** : —
- **P « Analyse alternative Standard SAP »** : Couvert par le standard : EWM permet d'emballer les HU NNN vides dans la HU d'expédition du bon 8* (HU imbriquée) et d'affecter cette HU au transport (TU), avec suivi de localisation et de statut.

#### GAP_List_Ronet_05-11.xlsx — onglet « GAP List NNN », ligne 13
Mots-clés trouvés : avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-020-B
- **B « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **C « BR lié(s) »** : BR-01-002-020-B
- **D « Description formalisée BR »** : Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée afin d'avoir une traçabilité des articles (sauf contre-indication par le TOM)
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 4.1 – Flux expédition
- **G « Sous-section blueprint »** : 4.1.1.2 – Distribution
- **H « Système »** : EWM
- **J « Type FRICE »** : Enhancement (PPF) + Form
- **K « Description / Analyse – Proposition TO-BE »** : Après réception de la confirmation du transporteur, le système envoie automatiquement les informations de transport au client destinataire par mail. Cette fonctionnalité doit pouvoir être activée / désactivée dans le système.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Le mail au demandeur sur confirmation du transporteur, avec interrupteur métier, n'existe pas en standard.

---

## GAP_List_EWM2.0_Ronet_27-10.xlsx
Source : déjà dans le dépôt : infrabel-ewm/00-pm/inputs/GAP_List_EWM2.0_Ronet_27-10.xlsx (Drive 1m5QFzkRKBt7v1KFAU6XKheWaYlInt0hs5Hh_x8h_61s)

Onglets entièrement vides dans ce fichier (constat, aucun extrait possible) : « GAP List Retours », « GAP Integration Tours »

Nombre d’extraits : **86**

### Onglet « GAP List Inbound » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 2
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-000-010
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Cockpit de réception – écran de sélection unique
- **E « BR lié(s) »** : BR-01-000-010
- **F « Description formalisée BR »** : Le système doit permettre une solution intégrée : une seule façon de réceptionner / refuser des livraisons (STO, PO..) afin de standardiser / simplifier / faciliter l'apprentissage + reporting
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.1 – Ecran de sélection des livraison entrantes
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom + Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Écran de sélection listant tous les PO/STO ouverts sur la division magasin, triés par date de livraison souhaitée croissante ; recherche par sélection, n° de PO ou scan du document papier (n° ASN Ariba). 
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de créer et modifier les livraisons entrantes en référence à la commande d'achat, notamment via VL31N/VL32N côté S/4 ou /SCWM/GRPE et l'app Fiori « Create Inbound Deliveries » côté EWM ; l'ASN fournisseur est reçue comme livraison entrante. L'alternative consiste à utiliser ces fonctions selon le type de document (PO ou ASN/STO). Un écran unique listant les PO/STO ouverts de la division, trié par date de livraison souhaitée et accessible par scan du n° ASN Ariba, n'existe pas en standard. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 3
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-010-A
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-005
- **D « Titre »** : Checklist d'acceptation/refus en en-tête de livraison
- **E « BR lié(s) »** : BR-01-001-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** :
  > Checklist intégrée à l'en-tête de la livraison entrante ; livraison enregistrable avec contrôles obligatoires désactivés en phase checklist, activés ensuite.  Impression du document de refus + génération d'incident.
  >
  > statut lot 0101: Cas d'un refus des marchandises car lot d'inspection 0101
  > rouge/jaune/"absent" lié à proposition sur show and tell Inbound
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP ne prévoit pas de checklist d'acceptation/refus sur la livraison entrante. Il permet de rejeter une livraison (Reject sur la notification de livraison dans EWM, la quantité repasse à zéro sur la PO) et de documenter un problème fournisseur dans un avis qualité Q2 (réclamation contre fournisseur) avec pièces jointes et tâches. L'alternative consiste à enregistrer le refus dans un avis Q2. La checklist, la désactivation temporaire des contrôles obligatoires et l'impression du document de refus n'existent pas en standard. L'écart porte sur l'objet checklist lui-même et son intégration à la livraison.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 4
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-010-B
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-005
- **D « Titre »** : Checklist d'acceptation/refus en en-tête de livraison
- **E « BR lié(s) »** : BR-01-001-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-02
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** : Le contenu de la checklist doit être dynamique afin d'être maintenu par le DC.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **Q « Commentaires / points ouverts »** : Refus possible sans document de référence
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de classer un problème fournisseur avec des codes (défauts, causes, tâches) dans l'avis qualité Q2. L'alternative consiste à utiliser ces codes comme motifs de refus. Une checklist dont le contenu est maintenu directement par le DC n'existe pas en standard, et le refus d'une livraison sans document de référence (pas de PO, pas de livraison) n'est pas couvert. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 5
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-020
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-013 / INB-015
- **D « Titre »** : Onglet « Inspection » du cockpit
- **E « BR lié(s) »** : BR-01-001-020, BR-01-001-030, BR-01-001-060
- **F « Description formalisée BR »** : Lors de la vérification de la check list, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu afin de pouvoir décider de la réception/refus de l'article plus rapidement
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.3 – Sélection du document de référence (PO, STO, ...)
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom
- **M « Description / Analyse – Proposition TO-BE »** : Affichage par poste : statut du lot de contrôle fournisseur, indicateur produits dangereux.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP gère le contrôle chez le fournisseur avec le type de contrôle 0101 (source inspection) déclenché par la fiche info QM, et peut interdire l'entrée marchandises tant que le lot n'est pas accepté (clé de contrôle QM). L'indicateur produits dangereux est porté par la fiche article (profil marchandises dangereuses). L'alternative consiste à consulter le lot de contrôle et la fiche article séparément. L'affichage des deux informations par poste, dès la saisie du PO, dans un même écran n'existe pas en standard. L'écart porte sur la restitution : les données et le blocage restent standard.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 6
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-010
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-004
- **D « Titre »** : Onglet « Livraisons entrantes » – ASN / appel VL31N-VL32N
- **E « BR lié(s) »** : BR-01-003-010
- **F « Description formalisée BR »** : Le système doit permettre au magasinier de retrouver l'ASN depuis l'écran de départ afin d'éviter les manipulations inutiles
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire ; 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.1.3 – Sélection du document de référence (PO, STO, ...) ; 3.2.1 – Création/modification de la livraison entrante
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : App custom
- **M « Description / Analyse – Proposition TO-BE »** : Affichage des ASN existantes ; création/modification de la livraison entrante par appel intégré de VL31N/VL32N depuis l'écran de départ.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard SAP stocke l'ASN fournisseur comme livraison entrante et permet de la retrouver et de la modifier dans VL32N ou VL60, ou de créer la livraison depuis la PO via VL31N. L'alternative consiste à utiliser ces transactions directement. L'affichage dans le cockpit des ASN rattachées au document de référence, avec appel intégré de VL31N/VL32N, n'existe pas en standard. L'écart porte uniquement sur la navigation : les transactions appelées restent standard.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 8
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-001-070
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Code signature – génération et table de consultation
- **E « BR lié(s) »** : BR-01-001-070
- **F « Description formalisée BR »** : le système doit générer le code signature aléatoire au moment de la check list et l'associer à la PO afin de facilement pouvoir retrouver le code en cas de litige avec le fournisseur / transporteur
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.1.4 – Génération du code signature
- **J « Système »** : S/4 
- **K « Numéro FSP »** : FS-01
- **L « Type FRICE »** : Enhancement + Form
- **M « Description / Analyse – Proposition TO-BE »** : Code aléatoire généré à l'acceptation des 3 checklists ; rattaché au PO/STO (pas à la livraison), horodaté ; table dédiée de consultation des codes ; champ « Accepté avec réserve » déclenchant l'impression automatique.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le code signature n'existe pas en standard. Le standard SAP garde l'historique des documents (auteur, date, heure) et permet de joindre le bon signé à la PO ou à la livraison. L'alternative consiste à tracer l'acceptation par la date de réception et la pièce jointe du document signé. La génération d'un code aléatoire rattaché à la PO, sa table de consultation et l'impression automatique sur « accepté avec réserve » sont entièrement spécifiques. L'écart est total sur ce besoin.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 11
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-003-040
- **C « Ancien ID deck »** : —
- **D « Titre »** : Remarques DC sur article (scanner RF)
- **E « BR lié(s) »** : BR-01-003-040
- **F « Description formalisée BR »** : Le système doit attirer l'attention du magasinier sur des remarques du DC sur certains articles
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM – RF
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Affichage sur le scanner RF, lors de la réception 2ème étape, des remarques du DC relatives à l'article (ex. « vérifier la couleur du contenu de la boîte »).
- **N « Statut »** : À analyser
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : Déplacé de la réception 1 vers la réception 2 (update 23/07)
- **R « Analyse alternative Standard SAP »** : Le standard SAP ne prévoit pas de remarques DC par article ou par PO affichées sur le scanner. L'alternative consiste à utiliser les textes de la PO ou de la livraison, consultables sur desktop. Une table de remarques DC (permanentes ou ponctuelles) poussée en message à la réception RF n'existe pas en standard. L'écart porte sur la table de remarques et le message RF ; à regrouper avec le GAP BR-01-001-050 (2ème étape), même mécanisme d'affichage.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 12
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-050
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : INB-011 / INB-016 / INB-017
- **D « Titre »** : Saisie de la zone de mise à disposition dans la livraison
- **E « BR lié(s) »** : BR-01-003-050
- **F « Description formalisée BR »** : Le système doit permettre d'enregistrer la livraison de marchandises qui sera déchargée dans une autre zone du magasin (parc à câble, extérieur, Verdun...) afin d'avoir une traçabilité des marchandises déchargées et de l'endroit de déchargement.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.1 – Création/modification de la livraison entrante
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-05
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Fiche deck « Flux de réception » : l'utilisateur sélectionne directement la zone de mise à disposition cible dès la réception ; stock instantanément visible dans la bonne zone (zones màd IN 1 / IN 2 / Comptoir). Étendu aux NNN et Consommation Directe.
- **N « Statut »** : Analysé
- **P « Complexité »** : M
- **R « Analyse alternative Standard SAP »** : Le standard EWM détermine automatiquement la zone de mise à disposition (staging area) et la porte de la livraison entrante via les groupes de détermination, et permet de les modifier dans la livraison EWM. L'alternative consiste à laisser la détermination standard et à corriger la zone dans la livraison EWM. La saisie de la zone dès la création de la livraison dans le cockpit S/4 n'existe pas en standard. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 15
Mots-clés trouvés : litige, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-C
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage ciblé de la ligne de livraison en overdelivery
- **E « BR lié(s) »** : BR-01-003-020-C
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées).
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.1.1 – Overdelivery détecté sur le bon de livraison -- Bloquer la ligne de la livraison entrante 18 concernée
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Blocage de la seule ligne concernée (articles stock) ; toutes les lignes pour NNN/Conso Directe ; mouvement 107 généré uniquement sur les lignes conformes.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'ajuster ou de mettre à zéro une quantité par poste de livraison avec des process codes ; le seul verrouillage de poste standard concerne le contrôle de durée de vie résiduelle. L'alternative consiste à ne pas réceptionner le poste en litige et à le mettre à zéro par process code en attendant l'acheteur. Un blocage de ligne pour overdelivery, et le blocage de toutes les lignes pour les NNN, n'existent pas en standard. L'écart porte sur un statut de blocage par ligne et ses conséquences sur le 107.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 16
Mots-clés trouvés : litige, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-D
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Génération automatique du mouvement 107
- **E « BR lié(s) »** : BR-01-003-020-D
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, seul le mouvement 107 est généré sur les articles dont les quantités sont correctes. Le mouvement 107 n'est pas généré pour l'article en litige.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.7 – Mouvement 107
- **J « Système »** : S/4
- **K « Numéro FSP »** : FS-08
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Réception 107 (stock bloqué valorisé) enregistrée en arrière-plan à l'association staging zone/HU, pour les articles stock aux quantités conformes. Pas de 107 pour ligne en litige ni pour NNN. Modification du job lié aux 107.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 17
Mots-clés trouvés : litige
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-E
- **B « Date workshop »** : 2026-11-16
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage réception 2ème étape jusqu'à décision acheteur
- **E « BR lié(s) »** : BR-01-003-020-E
- **F « Description formalisée BR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.1 – Overdelivery détecté à la première étape (ligne de livraison bloquée)
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-09
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Réception 2ème étape impossible pour l'article en litige tant que la décision acheteur n'est pas prise ; articles litigieux proposés en dernier dans le traitement de la HU ; HU placée en emplacement « Litige ».
  >
  > Également applicable aux overdeliveries détectées en deuxième étape : toute la quantité de l’article concerné reste en litige jusqu’à la décision acheteur (ex. : 12 reçues pour 10 attendues → 12 en attente). Les autres articles conformes poursuivent leur traitement.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : les écarts se traitent par process codes. L'alternative consiste à déposer la HU en zone litige et à bloquer le stock (type de stock ou emplacement bloqué) jusqu'à la décision. Le blocage de la réception 2ème étape d'une ligne précise et sa levée automatique après adaptation des documents n'existent pas en standard. L'écart porte sur le statut de blocage, son contrôle en RF et sa levée automatique.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 18
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020-F
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Création automatique du litige
- **E « BR lié(s) »** : BR-01-003-020-F
- **F « Description formalisée BR »** :
  > "Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement"
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.1.1 – Overdelivery détecté sur le bon de livraison -- Bloquer la ligne de la livraison entrante 18 concernée
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-10
- **L « Type FRICE »** : Enhancement + Workflow
- **M « Description / Analyse – Proposition TO-BE »** :
  > Litige créé automatiquement avec référence PO, article, quantité supplémentaire, localisation physique de la ligne dans le magasin.
  >
  > https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B3F74BAE1-9B8E-44BA-BE16-2AA18BA4A267%7D&file=Show%20%26%20tell%20Inbound%20Ronet.pptx&action=edit&mobileredirect=true
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de créer un avis qualité Q2 (réclamation contre fournisseur) en référence à la PO, avec pièces jointes, tâches et statuts. L'alternative consiste à créer l'avis Q2 manuellement au moment du constat. La création automatique du litige depuis l'overdelivery, avec la localisation physique des HU, n'existe pas en standard. L'écart porte sur l'automatisation et sur le lien avec la solution centrale de litiges.
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM
- **W « Slides management summary »** : 10
- **X « BR management summary »** : -  Indiquer et gérer systématiquement  tout écart qualitatif et/ou quantitatif (+&-) & DATA et informer directement les personnes concernées (Acheteur-…).

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 21
Mots-clés trouvés : litige
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-080
- **C « Ancien ID deck »** : —
- **D « Titre »** : Archivage automatique des documents de réception sur le PO
- **E « BR lié(s) »** : BR-01-003-080
- **F « Description formalisée BR »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.2 – Réception 1ère étape
- **I « Sous-section blueprint »** : 3.2.3 – Digitalisation du bon de livraison
- **J « Système »** : S/4
- **L « Type FRICE »** : Report (job)
- **M « Description / Analyse – Proposition TO-BE »** : Job reprenant les annexes de la livraison entrante (bons de livraison scannés) pour archivage sur le n° de PO, facilitant la recherche par les acheteurs en cas de litige.
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : BR-01-003-070 (attachement à la livraison) = standard, sans GAP
- **R « Analyse alternative Standard SAP »** : Le standard SAP permet de joindre le bon de livraison scanné à la livraison entrante (déjà retenu comme standard pour BR-01-003-070) ou directement à la PO. L'alternative consiste à joindre le document à la PO plutôt qu'à la livraison. La recopie automatique des pièces jointes de la livraison vers la PO n'existe pas en standard. L'écart se limite à un job de recopie.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 22
Mots-clés trouvés : litige, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-100
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Canal de communication litiges + workflow incidents
- **E « BR lié(s) »** : BR-01-003-100
- **F « Description formalisée BR »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de communication autour des litiges d'un PO. Eviter de poser la même question à un fournisseur par 3 personnes différentes d'Infrabel
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock ; 3.1 – Vérification documentaire
- **I « Sous-section blueprint »** : 3.4.3 – Décision acheteur et gestion des litiges ; 3.1.2 – Gestion de checklist
- **J « Système »** : S/4 / Fiori
- **L « Type FRICE »** : Enhancement + Workflow
- **M « Description / Analyse – Proposition TO-BE »** : Base de données plaintes/litiges par département avec notification tuile Fiori ; historique des échanges par PO ; workflow global de suivi garantissant traitement en temps et en heure et communication vers le magasin. Cas de figure (MMD, overdelivery, non-conformités) à détailler.
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : L
- **Q « Commentaires / points ouverts »** : Décisions BA 29/06 + update 14/07 (commentaires Word) ; GAP à confirmer avant ajout
- **R « Analyse alternative Standard SAP »** : Le standard SAP couvre le suivi d'un problème fournisseur avec l'avis qualité Q2 : référence PO, pièces jointes, tâches assignées, statuts et actions de suivi. L'alternative consiste à utiliser l'avis Q2 comme objet de litige commun à la réception, au replenishment et aux acheteurs. Une base de litiges par département avec tuile de notification et historique des échanges par PO n'existe pas telle quelle. L'écart porte sur la vue par PO et la notification
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Valider la démo de la solution proposée par BRM

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 24
Mots-clés trouvés : retour, refus, litige, fournisseur, 922, 108, 122
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-110 (à requalifier)
- **B « Date workshop »** : 2026-10-22
- **C « Ancien ID deck »** : —
- **D « Titre »** : Traçage du retour fournisseur après décision acheteur
- **E « BR lié(s) »** : BR-01-003-110
- **F « Description formalisée BR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.1 – Overdelivery détecté à la première étape (ligne de livraison bloquée) ; 3.4.3 – Décision acheteur et gestion des litiges
- **J « Système »** : S/4 (EWM embedded)
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Deux options ouvertes : solution AS-IS (mail + mvt 108) ou flux retour standard EWM (gap facturation avant sortie marchandises, mvt 922). 
- **N « Statut »** : Analysé
- **O « Owner »** : Bernard
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Lié à BR-02-002-050 (deck QM : unité de transport + GAP 922)
- **R « Analyse alternative Standard SAP »** : Le standard SAP gère le retour fournisseur par mouvement de retour (122) ou par livraison de retour traitée dans EWM comme une sortie. L'alternative consiste à utiliser ce flux retour standard, qui trace la sortie par document.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : Replenishment
- **V « Résultat attendu »** : Clarifier la procédure & tracabilité de l'acceptation/refus de la part de l'acheteur

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 25
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-000-020
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : INB-012
- **D « Titre »** : Demande de mise à jour Master Data depuis EWM
- **E « BR lié(s) »** : BR-01-000-020
- **F « Description formalisée BR »** : Le système doit permettre d'effectuer une demande de mise à jour des master data (flux d'appro / master data locale / dynamics…?) afin d'augmenter la qualité de la base de données et de faciliter la communication avec MMD
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM + S/4
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Envoi vers zone de clarification ; stock isolé physiquement et informatiquement ; introduction des données manquantes dans le système (poids, volume, dimensions, photo),storage type « Clarification » = worklist ; génération du D212 vers MMD ; après correction, tâche magasin vers destination finale. Update 
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'isoler du stock dans une zone dédiée (type de magasin et détermination du process type) et de le suivre dans /SCWM/MON ; en embedded, la fiche article est partagée avec S/4 et les données entrepôt se maintiennent dans /SCWM/MAT1. L'alternative consiste à utiliser une zone de clarification standard et le D212 actuel, hors système. La détection automatique des données manquantes et la génération du D212 vers MMD n'existent pas en standard.
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 26
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-005-040
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : —
- **D « Titre »** : Correction/ajout des MD EWM à la réception (photos, poids, dimensions)
- **E « BR lié(s) »** : BR-01-005-040
- **F « Description formalisée BR »** :
  > Le système doit permettre au magasinier de corriger/ajouter les photos, poids et dimensions d'un article dans les master data eWM à la réception afin d'augmenter la qualité de la base de données article.
  > Un flux d'ajout/correction des master data IM doit être également lancé.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM + S/4
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Envoi vers de clarification. Mise à jour manuelle par le coordinateur des MD EWM manquantes.
  >
  > Document D212.
  >
  > Analyser comment sera prise la photo
- **N « Statut »** : À analyser
- **P « Complexité »** : /
- **Q « Commentaires / points ouverts »** : Définir quelles sont les champs EWM concernés.
- **R « Analyse alternative Standard SAP »** : Le standard permet au coordinateur de corriger les données article : poids et dimensions dans la fiche article S/4 (partagée en embedded), données entrepôt dans /SCWM/MAT1. L'alternative consiste à faire ces corrections sur desktop depuis la zone de clarification, selon les autorisations. La photo n'est pas une donnée de la fiche article standard. L'écart porte sur la photo et sur le partage des rôles DC/MMD pour les données communes IM/EWM.
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 27
Mots-clés trouvés : refus, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-005-050
- **B « Date workshop »** : 2026-11-13
- **C « Ancien ID deck »** : —
- **D « Titre »** : Blocage de la mise en stock si MD manquantes (désactivable)
- **E « BR lié(s) »** : BR-01-005-050
- **F « Description formalisée BR »** : Le système doit pouvoir bloquer la mise en stock si des informations mater data sont manquantes (photos, poids, dimensions, caractère dangereux..) (doit être désactivable) afin d'augmenter la qualité de la base de données article
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne) ; 3.5.3 – Vérification conformité et quantité article
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Orientation automatique de l'article vers la zone de clarification en cas de MD manquantes ; blocage désactivable.
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **R « Analyse alternative Standard SAP »** : Le standard EWM refuse la création de la tâche de mise en stock quand aucune destination ne peut être déterminée, et permet de diriger le stock vers une zone dédiée via la détermination du process type. L'alternative consiste à s'appuyer sur ces erreurs standard et à traiter le stock en zone de clarification. 
- **T « Gap impliquant d'autres équipes ? »** : Oui
- **U « Service impacté »** : MMD
- **V « Résultat attendu »** : Clarifier la procédure de mise à jour de master data 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 30
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-03-001-030
- **B « Date workshop »** : 2026-11-18
- **C « Ancien ID deck »** : —
- **D « Titre »** : Étiquettes fournisseur des tourets de câbles
- **E « BR lié(s) »** : BR-03-001-030
- **F « Description formalisée BR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information comme numéro externe au sein de la HU
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock
- **I « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article (ligne par ligne)
- **J « Système »** : EWM-RF
- **K « Numéro FSP »** : FS-13
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Lecture des étiquettes fournisseur ; Stockage du n° du touret = external ID 2.
- **N « Statut »** : Analysé
- **P « Complexité »** : L
- **Q « Commentaires / points ouverts »** : Confirmer l'input (quelle étiquette) sera envoyée de la part du fournisseur
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de stocker sur la HU des identifications supplémentaires via les types d'identification, en plus du n° de HU, et décode les étiquettes au format GS1-128. L'alternative consiste à saisir le n° de touret comme identification de la HU. La lecture d'une étiquette fournisseur hors format GS1 n'existe pas en standard. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 33
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-002-020-A
- **B « Date workshop »** : 2026-11-23
- **C « Ancien ID deck »** : INB-011/016/017 (volet NNN)
- **D « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **E « BR lié(s) »** : BR-01-002-020-A
- **F « Description formalisée BR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **J « Système »** : EWM
- **K « Numéro FSP »** : FS-15
- **L « Type FRICE »** : Enhancement (PPF) + Form
- **M « Description / Analyse – Proposition TO-BE »** : Mail automatique au demandeur à la réception : matériel disponible, n° HU, localisation, n° PO. 
- **N « Statut »** : Analysé
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Point ouvert lié au moyen de communication et à la détermination du demandeur
- **T « Gap impliquant d'autres équipes ? »** : oui
- **U « Service impacté »** : SP; autres ?
- **V « Résultat attendu »** : Clarifier le besoin métier

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 34
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-006-050-B
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Lien de tracking dans la notification
- **E « BR lié(s) »** : BR-05-006-050-B
- **F « Description formalisée BR »** :
  > "Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut"
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **J « Système »** : EWM / externe
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Génération de la HU lors de la réception. Confirmation de la réception au moment du déplacement de la HU dans la zone dédiée (via ADHU)
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de suivre la localisation et le statut de chaque HU dans /SCWM/MON. L'alternative consiste à donner aux demandeurs une vue monitor filtrée ou à leur communiquer le n° de HU. Un lien de tracking accessible au demandeur hors EWM n'existe pas en standard. L'écart porte sur l'exposition de l'information hors entrepôt.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 35
Mots-clés trouvés : NNN, avoir
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-01-002-020-B
- **C « Ancien ID deck »** : —
- **D « Titre »** : Étiquette HU NNN (destinataire + PO)
- **E « BR lié(s) »** : (BR à confirmer)
- **F « Description formalisée BR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.2 – Impression de l'étiquette HU
- **J « Système »** : EWM
- **L « Type FRICE »** : Form
- **M « Description / Analyse – Proposition TO-BE »** : Étiquette HU imprimée à la sélection de la HU, enrichie du destinataire et du n° de PO (adaptation du formulaire d'étiquette HU EWM).
- **N « Statut »** : À analyser
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** : « (GAP) » sans ID dans le doc final
- **R « Analyse alternative Standard SAP »** : Le standard EWM imprime l'étiquette HU via PPF avec un formulaire adaptable ; la FSP F2489 (étiquette HU putaway) sert déjà de base. L'alternative consiste à ajouter le destinataire et le n° de PO au formulaire existant. Ces champs ne figurent pas sur l'étiquette standard. L'écart se limite à une adaptation de formulaire.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 36
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-002-010
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Job de réception comptable NNN (mouvement 101)
- **E « BR lié(s) »** : BR-01-002-010
- **F « Description formalisée BR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.6 – Réception comptable et bouclage sur les articles de la HU
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Report (job) / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Génération automatique du mouvement 101 lors de la confirmation de la réception via  ADHU ; 
- **N « Statut »** : Analysé
- **P « Complexité »** : L
- **R « Analyse alternative Standard SAP »** : Le standard EWM comptabilise l'entrée marchandises (101) sur la livraison entrante, depuis /SCWM/PRDI ou en RF. L'alternative consiste à poster l'entrée marchandises manuellement une fois toutes les HU contrôlées. Le déclenchement automatique conditionné à « toutes les HU reçues et sans litige », sur des HU techniquement vides, n'existe pas en standard. L'écart porte sur la condition de déclenchement.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 37
Mots-clés trouvés : retour, NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Ancien ID deck »** : —
- **D « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **E « BR lié(s) »** : BR-05-001-010
- **F « Description formalisée BR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article.
  > L'article doit alors se trouver dans une zone particulière.
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.5 – Immatriculation
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : Config / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Suivi de la HU partant à l'immatriculation et de son retour ; zone particulière dédiée (magasin vers magasin)
  > https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7BCD178E04-6DB9-4AA5-907C-BBB010409E7B%7D&file=EWM%20immat.pptx&action=edit&mobileredirect=true
- **N « Statut »** : A confirmer avec business
- **P « Complexité »** : —
- **Q « Commentaires / points ouverts »** : Confirmer que la solution présentée répond au besoin métier
- **R « Analyse alternative Standard SAP »** : Ligne remplacée par l'onglet GAP List Immatriculation (GAP BR-05-001-010 et dépôt direct en staging immatriculation). Analyse et complexité portées dans cet onglet, sans double comptage.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 38
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-003-010-A
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **E « BR lié(s) »** : BR-05-003-010-A
- **F « Description formalisée BR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.8 – Mise en staging zone « Cons. Directe »
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : Config / Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Voir blueprint NNN
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de déplacer une HU vers un emplacement choisi et de l'enregistrer (/SCWM/ADHU ou déplacement de HU en RF), existe en standard. L'alternative consiste à utiliser ces deux fonctions. Le lien automatique entre les HU NNN et le bon 8* du destinataire n'existe pas en standard. Même BR que l'onglet NNN : à ne compter qu'une fois.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 39
Mots-clés trouvés : refus, litige, fournisseur, NNN, 107
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-01-003-020
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Anomalies NNN – blocage complet & réintégration
- **E « BR lié(s) »** : (famille BR-01-003-020)
- **F « Description formalisée BR »** :
  > - Dans le cas d'un overdelivery détecté sur le bon de livraison, pouvoir encoder les qtés inscrites sur le bon de livraison en 1ere étape de livraison.
  >
  > Il doit être possible d'identifier la localisation du matériel dans l'entrepôt --> les colis de l'étape 1 doivent être visibles dans eWM.
  > '- Est-ce que nous bloquons la quantité totale ou bien l'overdelivery sur la ligne de commande concernée ? --> on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées.
  > Seul le mouvement 107 est généré sur les articles dont les quantités sont correctes.
  > Le mouvement 107 n'est pas généré pour l'article en litige.
  > Il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
  >
  > Un litige est automatiquement créé avec :
  > - info du PO
  > - article confirmé
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.9.1 – Anomalie détectée à la 1ère étape ; 3.5.9.2 – Anomalie détectée à la 2ème étape
- **J « Système »** : EWM / S/4
- **K « Numéro FSP »** : FS-16
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** :
  > Spécificités NNN : blocage de toutes les lignes de la livraison ; HU dirigée automatiquement vers la lane « Litige » ; ajout du champ quantités lors de la réception des HU NNN/Consommation directe (menu ADHU) ; en cas de différences cela génère un litige à être traité par les acheteurs ; en fonction de la décision de l'acheteur :
  >
  > - quantités acceptées : débloquer la livraison entrante
  > - quantités refusées : clôturer la livraison entrante
- **N « Statut »** : Analysé
- **P « Complexité »** : XL
- **Q « Commentaires / points ouverts »** : 2 « (GAP) » sans ID dans le doc final (3.5.9.1 et 3.5.9.2), regroupés ici
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet de rejeter une notification de livraison et d'ajuster les quantités par poste avec des process codes. Les HU NNN étant techniquement vides, les blocages de stock standard ne s'appliquent pas. L'alternative consiste à déposer les HU en zone litige et à suivre le litige dans un avis Q2. Le blocage de toute la livraison NNN et de toutes ses HU, y compris celles déjà déposées, avec levée sur décision acheteur, n'existe pas en standard. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 40
Mots-clés trouvés : fournisseur, NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-08-010-050
- **B « Date workshop »** : 2026-12-09
- **C « Ancien ID deck »** : —
- **D « Titre »** : Conversion automatique GTIN → NN
- **E « BR lié(s) »** : BR-08-010-050
- **F « Description formalisée BR »** : Dans le cas de suivi par numéros de série, et dans d'autres cas potentiellement, Le système doit scanner et convertir automatiquement le format "GTIN" en article "NN" afin d'utiliser directement le N° du fabriquant lors des différents encodages. .
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.4 – Encodage numéro de série fabricant
- **J « Système »** : S/4 (EWM embedded)
- **K « Numéro FSP »** : FS-XX
- **L « Type FRICE »** : Enhancement
- **M « Description / Analyse – Proposition TO-BE »** : Scan et conversion automatique du format GTIN vers l'article NN pour utiliser directement le numéro du fabricant lors des encodages (n° de série...).
- **N « Statut »** : Analysé
- **P « Complexité »** : S
- **Q « Commentaires / points ouverts »** :
  > Prérequis : le fournisseur doit envoyer le bon code barres & GTIN doit être connu dans nos systèmes
  >
  > Prévoir la fonctionnalité afin d'être prêt lorsque les GTIN seront maintenus dans le MMD Infrabel.
- **R « Analyse alternative Standard SAP »** : Le standard EWM reconnaît le GTIN/EAN de l'unité de mesure dans les champs de vérification produit en RF, y compris des GTIN supplémentaires, et décode les codes GS1-128. Le GTIN n'est pas converti en n° article dans tous les écrans. L'alternative consiste à maintenir les GTIN fournisseurs dans la fiche article et à les scanner en champ de vérification. L'écart porte sur les écrans où la conversion n'est pas standard ; prérequis : GTIN maintenus par MMD.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 46
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-03-002-130
- **B « Date workshop »** : 2026-11-25
- **C « Ancien ID deck »** : INB-032 (doublon deck)
- **D « Titre »** : Confirmation automatique AS/RS (LR35)
- **E « BR lié(s) »** : BR-03-002-130
- **F « Description formalisée BR »** : En cas de AS/RS (automatic storage and retrieval system)  (ex vers la LR35), le système doit confirmer la mise en stock dans la BIN prévue
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.6 – Stockage
- **I « Sous-section blueprint »** : 3.6.5 – Association de la HU à la BIN
- **J « Système »** : Interface externe
- **K « Numéro FSP »** : FS-20
- **L « Type FRICE »** : Interface
- **M « Description / Analyse – Proposition TO-BE »** : Intégration des tours (Hänel, Kardex, Modula) dans un même outil ; interfaces à mettre en place.
- **N « Statut »** : À analyser
- **P « Complexité »** : M
- **Q « Commentaires / points ouverts »** : Doublon INB-032 du deck (aussi utilisé pour péremption) résolu par la convention BR
- **R « Analyse alternative Standard SAP »** : Le standard EWM confirme la tâche à réception du message /SCWM/WMTOCO envoyé par le système externe, ou via MFS. L'alternative consiste à utiliser cette confirmation IDoc standard pour la LR35. Rien ne manque côté EWM si le système Kardex sait envoyer le message. L'écart porte sur le côté fournisseur et le mapping.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 50
Mots-clés trouvés : 107, 109
Statut : Statut = Analysé

- **A « GAP ID »** : BR-01-005-100 (couvert)
- **C « Ancien ID deck »** : —
- **D « Titre »** : Annulation réception 2ème étape / rejet livraison
- **E « BR lié(s) »** : BR-01-005-100
- **F « Description formalisée BR »** : Le système doit permettre d'annuler une réception de manière simple afin de simplifier le processus
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Sous-section blueprint »** : 3.4.2.4 – Annulation de la réception 2ème étape
- **J « Système »** : EWM
- **K « Numéro FSP »** : Standard
- **L « Type FRICE »** : —
- **M « Description / Analyse – Proposition TO-BE »** : Couvert par la solution existante de Gent-Zeehaven (annulation entrée marchandises / reject inbound delivery).
- **N « Statut »** : Analysé
- **P « Complexité »** : —
- **R « Analyse alternative Standard SAP »** : Le standard EWM permet d'annuler une entrée marchandises et de rejeter une livraison (quantités remises à zéro sur la PO). La solution de Gent-Zeehaven s'appuie déjà dessus. Aucun développement attendu ; vérifier le comportement avec le flux 107/109.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 51
Mots-clés trouvés : NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP --
- **F « Description formalisée BR »** : Dans le cas d’un article NNN/Consommation directe, l’opérateur doit être en mesure d’encoder le numéro de série du fabriquant pour chaque article
- **G « Couvert par (réf. BR) »** : Gap
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Sous-section blueprint »** : 3.5.4 Encodage numéro de série fabricant
- **N « Statut »** : A confirmer avec business
- **P « Complexité »** : /
- **Q « Commentaires / points ouverts »** : Quelle est la finalité d'introduire un numéro de série pour un article nnn/consommation directe
- **R « Analyse alternative Standard SAP »** : Le standard EWM gère les numéros de série via un profil de numéro de série sur l'article. Un article NNN n'a pas de fiche article et ses HU sont techniquement vides : la saisie de numéros de série n'est pas possible en standard. L'alternative consiste à noter le n° de série hors EWM (PO, document de réception). Le besoin métier est à confirmer avant toute analyse.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Inbound », ligne 52
Mots-clés trouvés : fournisseur
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : BR-03-001-030
- **E « BR lié(s) »** : BR-03-001-030
- **F « Description formalisée BR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **Q « Commentaires / points ouverts »** :
  > 07-07-2026 : à ajouter dans le blueprint (section 3.3.2.) -> ok
  > 27-08-2026 : Quel est le besoin réel? / Quelles infos précisément avons-nous besoin? : 
  >    > Numéro de touret du fournisseur (comme numéro externe à la HU)?
  >    > Taille du touret? -> Est-ce que cette info est tjs dispo sur l'étiquette? Si oui, quid si on change de fournisseur et qu'on n'a plus cette info (actuellement non exigé dansles conditions logistiques)?
  > 27-08-2026 : après discussion avec Business :
  > -> Ne pas tenir compte de la dimension du touret
  > -> Pouvoir encoder l'identifiant unique du touret
  > -> Il n'y a pas tjs d'étiquette du fournisseur (donc encodage facultatif)
  > -> Associer l'identifiant au numéro HU (attention que cet identifiant pourrait être lié à d'autres num HU vu que la bobine nous reviendra ultérieurement par le fournisseur)
  > -> Il doit être possible de retrouver les liens entre identifiant et HU à partir du numéro de l'identifiant

### Onglet « GAP List Outbound » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 4
Mots-clés trouvés : retour
Statut : Statut = Attente réponse business REPL

- **A « GAP ID »** : GAP BR-05-004-050
- **B « Date workshop »** : 2026-10-22
- **C « Titre »** : Création de la livraison sortante conditionnée à la disponibilité du stock
- **D « BR lié(s) »** : BR-05-004-050
- **E « Description formalisée BR »** : La création de la livraison sortante (créée par replenishment) doit tenir compte de la disponibilité du stock (que l'on travaille avec des STO / réservations) → existe déjà en eWM actuellement
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **H « Sous-section blueprint »** : 3.1
- **I « Système »** : S/4
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Une livraison sortante ne peut être générée que si le stock est disponible dans le système, quel que soit le type de livraison (STO / réservation). 
- **M « Statut »** : Attente réponse business REPL
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** :
  > Point ouvert : commentaires blueprint — attente du retour de Gilles sur la génération des BL en lien avec l'ATP (Kayali 04/08) ; Youssef 25/08 : en cours.
  >
  > Attente Retour Replenishment - meeting 22/10
- **S « Gap impliquant d'autres équipes ? »** : oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Aucun bon 8* n'est créé sans stock disponible, que la demande soit un STO ou une réservation.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 5
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-003-010
- **C « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **D « BR lié(s) »** : BR-05-003-010
- **E « Description formalisée BR »** : Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports. Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle). Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **H « Sous-section blueprint »** : 3.1
- **I « Système »** : EWM
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Deck : standard Infrabel (VL01NO – solution Bascoup). À reclarifier avec le business pour lister tous les cas de figure des bons 8* sans référence.
- **M « Statut »** : Analysé 
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  > Fait partie du flux 5C Création de bon sans référence. Pas encore traité durant session Blueprint. A retirer du blueprint outbound car repris dans flux NNN? 
  > Mentionner dans le blueprint la possibilité d'utiliser la transaction VL06no pour sortir des articles sur un bon sans réference, c'est du standard et déja utilisé aujourd'hui. Juste expliquer la possibilité.
- **U « Résultat attendu »** : Les HU non gérées en stock sont rattachées au bon 8* sans référence de leur destinataire et localisées en zone de staging jusqu'au transport.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 6
Mots-clés trouvés : avoir
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-05-004-090
- **C « Titre »** : Critères d'affectation des livraisons aux vagues de picking
- **D « BR lié(s) »** : BR-05-004-090
- **E « Description formalisée BR »** : Les vagues de picking doivent prendre en compte : la date de besoin ; le calendrier d'expédition des milkruns (routes) ; la disponibilité du stock ; la disponibilité des ressources matérielles ; la localisation des articles (picking par aire d'activité) ; le besoin du client qui ne souhaite pas que ses articles soient consolidés avec d'autres commandes ; le besoin du client d'être livré d'une quantité particulière à une date précise (lié à ODD)
- **F « Couvert par (réf. BR) »** : Gap (potentiel)
- **G « Section blueprint »** : 3.2 – Lancer les vagues de picking
- **H « Sous-section blueprint »** : 3.2.1 – Création et mise à jour automatique des vagues de picking
- **I « Système »** : EWM
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** :
  > Blueprint : l'affectation d'une OBD à une vague résulte de la combinaison de deux critères — sa route (qui détermine la série de vagues) et sa date de besoin (qui détermine l'occurrence retenue au sein de la série). La vague retenue est le lancement qui précède la date de besoin, et non le lancement calendairement le plus proche ; les fenêtres se succèdent sans recouvrement ni interruption. La date de création de l'OBD n'intervient pas. Exemple route Luttre (lancement le jeudi) documenté dans le blueprint.
  >
  > Concernant le calendrier milkrun, le besoin est d'avoir une vague Milkrun meme si la création des BL se fait depuis IM. relation 1:1 entre job Milkrun et Wave milkrun.
- **M « Statut »** : Analysé
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** :
  >  si on considère que le job planifié dans S4 détermine l'occurrence dans SAP EWM, nous n'avons pas de développement à faire. A confirmer avec le business & bernard.
  >
  > A confirmer si nécessaire après la discussion avec REPL le 22/10
  >
  > 27/10 onleve de la wave la disponibité du stock car si pas de stock pas BL. Pour les ressource, pas besoin car on bloque les emplacement dans lesquels on ne veut pas picker
  > Gilles confirme le split de wave par Aire d'activité n'est pas nécessaire.
  >
  > Wave à part pour les ODD
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:w:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7BAD109957-E5E8-4E04-9DE8-65F2A2609C2D%7D&file=Planification%20jobs.docx&action=default&mobileredirect=true
- **R « Analyse alternative Standard SAP »** : Le standard EWM affecte les postes de livraison aux vagues par wave templates et enregistrements de conditions (par exemple route), avec des heures de lancement définies par wave template : route et date de besoin sont des critères exploitables. La disponibilité du stock est contrôlée à la création du BL, et la disponibilité des ressources n'intervient pas dans l'affectation aux vagues (note BA du 28/07). L'alternative consiste à laisser le job planifié S/4 déterminer l'occurrence et à utiliser la détermination standard par route côté EWM ; dans ce cas, aucun développement n'est nécessaire (commentaire de la ligne). Si l'affectation doit se faire dans EWM, la règle de fenêtre de besoins (lancement qui précède la date de besoin) n'est pas identifiée comme standard. L'écart porte sur cette règle ; solution à discuter avec le business et Bernard (voir colonne Lien document d'analyse).
- **U « Résultat attendu »** : Chaque livraison sortante rejoint automatiquement la vague de sa route dont la fenêtre couvre sa date de besoin, quelle que soit sa date de création.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 7
Mots-clés trouvés : avoir
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-004-120-A
- **C « Titre »** : Alerte dynamique DC à l'arrivée d'une demande T8/T9
- **D « BR lié(s) »** : BR-05-004-120-A
- **E « Description formalisée BR »** : Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail ? popup ? étiquette imprimée ? warning dans un rapport ?)
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.2 – Lancer les vagues de picking
- **H « Sous-section blueprint »** : 3.2.1 – Création et mise à jour automatique des vagues de picking
- **I « Système »** : EWM / Fiori
- **K « Type FRICE »** : Enhancement (PPF) et/ou App Fiori
- **L « Description / Analyse – Proposition TO-BE »** :
  > Blueprint : le DC doit être alerté activement de l'arrivée d'un T8/T9 ; l'information doit prendre la forme d'un signal global visible par l'ensemble du personnel du DC, non adressé à une personne ou un rôle ; ce signal ne doit pas perturber les activités de manutention en cours. Un dashboard dynamique affichant les T8/T9 à traiter en urgence, mis à jour automatiquement, sera disponible à tous les utilisateurs du DC. 
  > un Ecran avec couleur différentes par statuts picking etc
- **M « Statut »** : À analyser
- **N « Complexité »** : M
- **O « Commentaires / points ouverts »** :
  > Deck : GAP au niveau du système d'alerte (email + PPF selon le statut de la livraison, ou app Fiori). Renvoi au blueprint Reporting pour les écrans Fiori — coordonner les deux documents.
  > 25/09/2026 : première jet de Ronet :
  >
  > - Calendrier des milkruns (tournée fixée par semaine, la même toutes les semaines)
  >
  > - ODD
  >
  > - Urgences (T8/T9)
  >
  > - Par rapport au moyen/type de transport ? > câble ? à rediscuter
- **P « Owner »** : Moustafa
- **R « Analyse alternative Standard SAP »** : Le standard EWM peut déclencher des actions PPF (impression, e-mail) selon le statut de la livraison, affiche les livraisons et leur statut dans /SCWM/MON, et offre le Warehouse Cockpit et des apps KPI Fiori (voir onglet Reporting). L'alternative consiste à regrouper les T8/T9 dans des vagues urgentes dédiées (BR-05-004-120-C) et à afficher sur un écran du DC une vue filtrée sur ces vagues. Un signal global non nominatif, rafraîchi automatiquement et visible par tout le DC, n'existe pas tel quel en standard ; la piste du fichier BR est un dispositif de type ZIM1_WM_FOLLOWUP (Schaerbeek). L'écart porte sur cet affichage dynamique ; à coordonner avec le blueprint Reporting.
- **U « Résultat attendu »** : Le DC voit l'arrivée de chaque T8/T9 via un signal global visible par tous, sans perturber les tâches en cours.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 19
Mots-clés trouvés : fournisseur
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-005-060-B
- **B « Date workshop »** : 2026-12-08
- **C « Titre »** : Alignement des quantités du Supply Catalogue sur les conditionnements
- **D « BR lié(s) »** : BR-05-005-060-B
- **E « Description formalisée BR »** : Les quantités de commande proposées au client dans le Supply Catalogue doivent être alignées avec et limitées par les quantités de picking réalisables par le DC : plusieurs quantités de sortie peuvent être proposées pour un même article ; les quantités de sortie peuvent varier selon le conditionnement associé à un fournisseur ; les quantités du Supply Catalogue doivent être alignées avec les conditionnements de la commande auprès du fournisseur ; le client doit pouvoir indiquer dans sa commande si l'arrondi est permis
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.4 – Flux de picking
- **H « Sous-section blueprint »** : 3.4.5 – Prélèvement et confirmation de la quantité
- **I « Système »** : Supply Catalogue + S/4
- **K « Type FRICE »** : Interface / Enhancement hors EWM
- **L « Description / Analyse – Proposition TO-BE »** :  Le périmètre est principalement hors EWM (Supply Catalog et master data de conditionnement) mais conditionne le comportement de picking de BR-05-005-060-A.
- **M « Statut »** : A confirmer avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** : Ce GAP relève-t-il du périmètre EWM 2.0 ou du Supply Catalogue ?
- **S « Gap impliquant d'autres équipes ? »** : oui
- **T « Service impacté »** : ISC 61 - Michel Hainaut + MMD
- **U « Résultat attendu »** : Les quantités commandables dans le Supply Catalogue correspondent aux quantités que le DC peut prélever, et le client indique si l'arrondi est permis.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 20
Mots-clés trouvés : litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-005-140
- **C « Titre »** : Substitution de bobine avec code d'exception, photo et commentaire
- **D « BR lié(s) »** : BR-05-005-140
- **E « Description formalisée BR »** : Lors du picking de bobines, le magasinier doit pouvoir substituer une bobine par une bobine sœur en précisant le code d'exception (ex. bobine cassée). En fonction du code d'exception, il doit être possible d'insérer une photo / commentaire qui sera envoyé au coordinateur
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 3.4 – Flux de picking
- **H « Sous-section blueprint »** : 3.4.5 – Prélèvement et confirmation de la quantité
- **I « Système »** : EWM – RF
- **K « Type FRICE »** : Enhancement
- **L « Description / Analyse – Proposition TO-BE »** : Workflow de prise de photo suite à un souci rencontré durant le picking
- **M « Statut »** : À analyser
- **O « Commentaires / points ouverts »** : Deck (12/6) : question ouverte sur le lien avec la gestion des plaintes — à mutualiser avec la FSP litiges / workflow incidents de l'inbound.
- **U « Résultat attendu »** : Le coordinateur reçoit, pour chaque substitution de bobine, le code d'exception accompagné d'une photo ou d'un commentaire.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 31
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : BR-05-006-050 (couvert)
- **C « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **D « BR lié(s) »** : BR-05-006-050
- **E « Description formalisée BR »** : Pouvoir associer une livraison de marchandises NNN / consommation directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport — tracking de HU : localisation et statut
- **F « Couvert par (réf. BR) »** : Standard Infrabel
- **G « Section blueprint »** : 3.5 – Consolider le picking
- **H « Sous-section blueprint »** : 3.5.1 – Proposition de repackaging des HU de picking
- **I « Système »** : EWM
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Deck : standard Infrabel — solution Bascoup.
- **M « Statut »** : À analyser
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** : Recouvrement avec la GAP list Inbound (lien de tracking dans la notification) — à traiter une seule fois.
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B13A437E1-6D50-4818-A91A-1F3D15E15126%7D&file=EWM%202.0%20-%20consolidations.pptx&action=edit&mobileredirect=true&wdwpf=doclib-t
- **U « Résultat attendu »** : Les HU NNN / consommation directe sont consolidées dans un transport et suivies (localisation, statut).

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 41
Mots-clés trouvés : NNN, avoir
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-01-002-0020-B
- **C « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **D « BR lié(s) »** : BR-01-002-0020-B
- **E « Description formalisée BR »** : Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée afin d'avoir une traçabilité des articles (sauf contre-indication par le TOM)
- **F « Couvert par (réf. BR) »** : Gap 
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.1.2 – Distribution
- **I « Système »** : EWM
- **K « Type FRICE »** : Enhancement (PPF) + Form
- **L « Description / Analyse – Proposition TO-BE »** : Après réception de la confirmation du transporteur, le système envoie automatiquement les informations de transport au client destinataire par mail. Cette fonctionnalité doit pouvoir être activée / désactivée dans le système.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : M
- **O « Commentaires / points ouverts »** : BR de la famille inbound BR-01-002 (notification NNN / conso directe) réutilisé côté outbound — vérifier la cohérence de numérotation et le recouvrement avec la FSP inbound de notification automatique au demandeur.
- **U « Résultat attendu »** : Le demandeur est informé automatiquement que son matériel part avec la prochaine tournée, sauf contre-indication du TOM.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 45
Mots-clés trouvés : NNN
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-06-003-030
- **C « Titre »** : Sortie de marchandises déclenchée par la sortie physique (caméra SSCC / GPS)
- **D « BR lié(s) »** : BR-06-003-030
- **E « Description formalisée BR »** : La sortie des marchandises dans le système IM doit être effectuée au moment où la marchandise quitte le DC (y compris via interface EDI avec le transporteur ou la plateforme qui gère les balises GPS ou le système caméra qui reconnaît les étiquettes SSCC)
- **F « Couvert par (réf. BR) »** : Gap
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.2.4 – Sortie des articles du DC ; 4.1.3.1 – Détecter sortie des HU d'expédition
- **I « Système »** : Interface externe
- **K « Type FRICE »** : Interface
- **L « Description / Analyse – Proposition TO-BE »** : Blueprint : une fois la sortie de marchandises enregistrée dans EWM, la sortie IM est effectuée automatiquement au même moment ; la sortie physique doit correspondre à la sortie comptable. Pour les articles NNN / consommation directe, les articles quittent le DC sans enregistrement de la sortie comptable. Deck : la synchronisation EWM / S4 est standard ; le GAP porte sur l'interface avec le système caméra reconnaissant les étiquettes SSCC.
- **M « Statut »** : À analyser
- **N « Complexité »** : /
- **P « Owner »** : Youssef
- **U « Résultat attendu »** : La sortie comptable correspond à la sortie physique : elle est enregistrée au moment où la marchandise quitte le DC, y compris par détection automatique (caméra SSCC, GPS, EDI).

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Outbound », ligne 47
Mots-clés trouvés : refus
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : BR-02-002-050 
- **C « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **D « BR lié(s) »** : BR-02-002-050
- **E « Description formalisée BR »** :
  > Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone — scan à l'enlèvement par le magasinier
  >
  > Le magasinier sort les HU d’expédition de l’entrepôt une par une. Pour chaque HU, il confirme la sortie dans le système ainsi que l’endroit par lequel celle-ci quitte le DC (GAP).
- **G « Section blueprint »** : 4.1 – Flux expédition
- **H « Sous-section blueprint »** : 4.1.2.2 – Confirmer la sortie des HU d'expédition
- **I « Système »** : EWM – RF
- **K « Type FRICE »** : —
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** : Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.A réexpliquer le BR
- **U « Résultat attendu »** : Le transporteur enlève la bonne HU refusée, contrôlée par scan, même si du matériel identique se trouve dans la même zone.

### Onglet « GAP List Internal » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Internal », ligne 2
Mots-clés trouvés : retour
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-04-001-010
- **B « Titre »** : Gestion et suivi des incidents de non-conformité
- **C « BR lié(s) »** : BR-04-001-010 ; BR-04-001-020-A ; BR-04-001-020-B 
- **D « Description formalisée BR »** : Lorsqu’une anomalie est constatée sur un article, permettre le blocage de la BIN pour empêcher le picking, la communication d’un incident au destinataire compétent, l’ajout de pièces jointes (ex. photo) et le suivi de cet incident dans le système.
- **E « Section blueprint »** : Non-conformités / blocage
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** : Relier le blocage de la BIN ou l’isolement des pièces non conformes à un incident suivi dans le système. Conserver qui a bloqué le stock, quand et pourquoi. Permettre l’ajout de justificatifs, notamment des photos. Identifier l’interlocuteur chargé de statuer, lui communiquer l’incident avec un appel à action et permettre le retour de sa décision au DC. Assurer le suivi du sort de l’article, que le signalement émane du DC ou d’un autre service, afin que les pièces ne restent pas bloquées sans traitement.
- **K « Statut »** : À analyser
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** : Définir le destinataire avec Gilles Moerenhout, Delphine Demoulin et Replenishment, l’objet de rattachement, le workflow et les modalités d’application de la décision. 
- **O « Analyse alternative Standard SAP »** : Le standard EWM permet de bloquer une BIN en mise en stock et en picking, de passer le stock en stock bloqué par changement de type de stock (/SCWM/POST) et de signaler l'anomalie par un code d'exception qui peut déclencher une alerte ou une tâche de suivi. Côté S/4, l'avis qualité Q3 (problème interne) documente l'incident avec pièces jointes, tâches assignées et statuts. L'alternative consiste à combiner le blocage du stock et un avis Q3 créé par le DC. Le lien automatique entre le blocage de la BIN et l'incident, avec retour de la décision au DC, n'existe pas en standard. 
- **P « Gap impliquant d'autres équipes ? »** : Oui
- **Q « Service impacté »** : Replenishment

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Internal », ligne 3
Mots-clés trouvés : mitraille
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-04-002-010-A
- **B « Titre »** : Retrait du stock selon statut article
- **C « BR lié(s) »** : BR-04-002-010 ; BR-04-002-010-A
- **D « Description formalisée BR »** : Émettre des tâches de picking regroupées dans une vague dédiée pour les articles Z3 destinés à la mitraille et les autres statuts retenus, sans validation préalable du coordinateur.
- **E « Section blueprint »** : Gestion des statuts / mitraille
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** : Générer une vague dédiée et les tâches de retrait sur la base du statut de l’article, sans validation préalable du coordinateur. Le magasinier exécute ces tâches pour retirer les articles concernés. La liste des statuts sera définie au build.
- **K « Statut »** : À analyser
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** : Définir déclenchement, fréquence et destination. 
- **O « Analyse alternative Standard SAP »** : L'alternative consiste à sélectionner le stock des articles Z3 et à créer les transferts avec ces fonctions, manuellement ou par job. La sélection automatique du stock selon le statut article S/4 pour alimenter la vague n'existe pas en standard. L'écart porte sur ce déclenchement : transferts, vagues et tâches restent standard.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Internal », ligne 6
Mots-clés trouvés : refus
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-04-004-020-A
- **B « Titre »** : Propositions de relocalisation à valider
- **C « BR lié(s) »** : BR-04-004-020 ; BR-04-004-020-A
- **D « Description formalisée BR »** :
  > Le système doit pouvoir relancer une optimisation du stockage (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
  > Comment ? rapport à transformer en vague ? vague de picking que le coordintateur peut accepter/refuser?plus grandes palettes, ou dans le mauvais type de rotation de stock)"
  > ex : une palette pleine n'a plus que qq articles -> la palette devient une boîte."[
- **E « Section blueprint »** : Mouvements internes / optimisation
- **G « Système »** : EWM
- **J « Description / Analyse – Proposition TO-BE »** : Proposer une réserve de travail regroupant les possibilités de relocalisation des HU vers des emplacements mieux adaptés, notamment lorsqu’une HU occupe un emplacement surdimensionné. Le coordinateur accepte ou refuse chaque proposition. Les propositions acceptées donnent lieu à des tâches de transfert.
- **K « Statut »** : À analyser
- **M « Complexité »** : XL
- **N « Commentaires / points ouverts »** : Très complexe à mettre en place
- **O « Analyse alternative Standard SAP »** : Le standard EWM propose le réarrangement (/SCWM/REARR) : sur la base du slotting, il compare l'emplacement actuel à l'emplacement optimal (index de slotting), liste les propositions et crée les tâches de transfert pour celles que l'utilisateur retient. L'alternative consiste à utiliser ce réarrangement, qui couvre déjà la validation par le coordinateur. Slotting et réarrangement sont des fonctions EWM avancées. Une réserve de propositions dimensionnelles (petite palette dans une grande BIN) n'existe pas en standard. 

### Onglet « GAP List Reporting » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 2
Mots-clés trouvés : labo
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-010-A
- **B « Titre »** : Daily Huddle – charge de travail du jour
- **C « BR lié(s) »** : BR-07-001-010-A
- **D « Description formalisée BR »** :
  > Daily Huddle : rapport statique reprenant 
  > - les tâches à effectuer pour la journée à venir avec les ressources disponibles (humaines et matérielles)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.1 – Daily Huddle et charge de travail
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report / Config (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Rapport de charge du jour (ou J+1) par flux (réception, putaway, picking, mouvements internes, inventaire) : nombre de Warehouse Tasks / Warehouse Orders ouverts, mis en regard des ressources disponibles (magasiniers, engins). Seules les tâches portant sur des emplacements disponibles sont comptées : un emplacement bloqué manuellement (ressource matérielle indisponible, ex. chariot en panne) sort la tâche de la charge réalisable. Affichage sur l'écran du Daily Huddle.
- **L « Statut »** : Analysé
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** : Sous-BR absent de l'Excel BR (seul le parent BR-07-001-010 existe, couvert par « Gap »). Définir la liste des flux et la maille (jour J ou J+1). Définir la modélisation des ressources matérielles (Resources / Resource Groups EWM).
- **Q « Analyse alternative Standard SAP »** : Warehouse KPIs – Operations (cartes WT ouvertes du jour) ; Warehouse Monitor /SCWM/MON (WT/WO ouverts par process type ou activity area) ; Warehouse Cockpit + Measurement Services ; Labor Management (charge planifiée vs capacité). Reste spécifique : exclusion des tâches sur emplacements bloqués.
- **T « Résultat attendu »** : Le team lead dispose chaque matin d'une vue de la charge réalisable par flux au regard des ressources disponibles.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 3
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-010-B
- **B « Titre »** : Taux de service – jauge Daily Huddle
- **C « BR lié(s) »** : BR-07-001-010-B
- **D « Description formalisée BR »** : - le taux de service -> jauge global du taux de service (taux de plaintes vs nb de lignes de picking)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.2 – Taux de service
- **H « Système »** : EWM + customer care? Table plainte qualité?
- **J « Type FRICE »** : Report + Interface?
- **K « Description / Analyse – Proposition TO-BE »** : KPI affiché en pourcentage sur l'écran du Daily Huddle : (lignes de picking – lignes en plainte) / lignes de picking, sur une période glissante J-30 → J décalée quotidiennement. Dénominateur : WT de picking confirmées (EWM). Numérateur : plaintes clients issues de Customer Care, ventilées par catégorie (erreur administrative, erreur de picking, problème fournisseur).
- **L « Statut »** : Analysé
- **M « Complexité »** : M
- **N « Commentaires / points ouverts »** :
  > Le texte du BR dans le blueprint (« nombre de plaintes / nb de lignes de picking ») diffère de l'Excel (« taux de plaintes vs nb de lignes de picking ») : réaligner mot pour mot. Définition du KPI (taux de service vs taux de plaintes), période et calcul à valider. Maintien de Customer Care à l'horizon EWM 2.0 à confirmer. Sous-BR absent de l'Excel.
  >
  > Update 21/10/26 : Gaps repris dans le projet customer care 
  > -> out of scope EWM
- **Q « Analyse alternative Standard SAP »** : Aucune app standard ne croise plaintes externes et lignes de picking. Dénominateur disponible en standard (historique des WT confirmées). Jauge possible via Warehouse Cockpit / KPI Fiori.
- **R « Gap impliquant d'autres équipes ? »** : oui
- **S « Service impacté »** : Customer Care, SP, Replenishment
- **T « Résultat attendu »** : Le DC suit son taux de service glissant sur 30 jours, globalement et par catégorie de plainte.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 4
Mots-clés trouvés : 109
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-001-020
- **B « Titre »** : Dashboard global des opérations
- **C « BR lié(s) »** : BR-07-001-020
- **D « Description formalisée BR »** :
  > Dashboard global avec :
  > - les réceptions du jour à recevoir et déjà faites (1ière étape est à faire) (en temps réel)
  > - les réceptions dont la 2ième étape est à faire et déjà faite (en temps réel)
  > - les réceptions avec check QM à faire et déjà faites (en temps réel)
  > - les mises en stock du jour à faire et déjà faites (en temps réel)
  > - les préparatons du jour à faire et déjà faites (en temps réel)
  > - les consolidations du jour à faire et déjà faites (en temps réel)
  > - les expéditions/enlèvements du jour à faire et déjà faits (en temps réel)
  > - les inventaires du jour à faire et déjà faits (en temps réel)
  > - Alerte T8/T9 à traiter et déjà traités (en temps réel)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 3 – Pilotage quotidien des opérations
- **G « Sous-section blueprint »** : 3.3 – Dashboard global des opérations
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report (App analytique)
- **K « Description / Analyse – Proposition TO-BE »** : Dashboard temps réel de l'avancement du jour par flux, en « à faire / fait » : réception 1re étape (checklist, création de l'Inbound Delivery), réception 2e étape (GR 109/101), contrôles QM (Inspection Documents QIE), putaway, picking, consolidation, expédition / enlèvement (Goods Issue), inventaires du jour, alertes T8/T9. Données regroupées par flux sous forme de graphes.
- **L « Statut »** : Analysé
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** : Dépend de GAP BR-01-001-010-A (checklist) et de GAP BR-05-004-120-A (alerte T8/T9) pour les données custom. Définir la notion de « jour » par flux.
- **Q « Analyse alternative Standard SAP »** : Warehouse KPIs – Operations et apps KPI warehouse (WT ouvertes, livraisons en retard, délais GR/GI) ; Warehouse Monitor (tous objets, en liste) ; Warehouse Cockpit. Reste spécifique : vue unique agrégée multi-flux incluant 1re/2e étape, QM, consolidation et T8/T9.
- **T « Résultat attendu »** : Les coordinateurs voient en un écran l'avancement et la charge restante de tous les flux du DC.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 6
Mots-clés trouvés : refus, fournisseur
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-002-020
- **B « Titre »** : Livraisons et camions refusés
- **C « BR lié(s) »** : BR-07-002-020
- **D « Description formalisée BR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 4 – Suivi des réceptions
- **G « Sous-section blueprint »** : 4.2 – Livraisons et camions refusés
- **H « Système »** : S/4 (EWM embedded)
- **J « Type FRICE »** : Report
- **K « Description / Analyse – Proposition TO-BE »** : Rapport des livraisons entrantes refusées sur base de la checklist d'acceptation (motif de refus, fournisseur, PO/STO, date, transporteur), y compris lorsqu'aucune entrée de marchandises (MIGO / GR) n'a été comptabilisée.
- **L « Statut »** : Analysé
- **M « Complexité »** : S
- **N « Commentaires / points ouverts »** : Dépend entièrement de GAP BR-01-001-010-A (checklist d'acceptation/refus) : le rapport exploite les données de la checklist custom.
- **Q « Analyse alternative Standard SAP »** : Aucune : un refus sans GR n'est pas un objet standard.
- **T « Résultat attendu »** : Le DC trace les livraisons et camions refusés et leurs motifs, même sans entrée de marchandises.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 14
Mots-clés trouvés : avoir
Statut : Statut = A confirmer avec Business

- **A « GAP ID »** : BR-07-006-010
- **B « Titre »** : Statut des commandes et suivi du SLA
- **C « BR lié(s) »** : BR-07-006-010
- **D « Description formalisée BR »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **E « Couvert par (réf. BR) »** : GAP Potentiel
- **F « Section blueprint »** : 6 – Suivi des commandes et des expéditions
- **G « Sous-section blueprint »** : 6.1 – Statut des commandes et suivi du SLA
- **H « Système »** : EWM / Fiori
- **J « Type FRICE »** : Report (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Suivi des livraisons sortantes avec statut et date des étapes picking, packing et Goods Issue, comparées à la date de besoin pour mesurer le respect du SLA.
- **L « Statut »** : A confirmer avec Business
- **M « Complexité »** : S
- **N « Commentaires / points ouverts »** : Excel BR : « Gap ». Définir le SLA (écart vs date de besoin) et le destinataire de l'information.
- **Q « Analyse alternative Standard SAP »** : Statuts et dates standard de l'Outbound Delivery Order ; Warehouse Monitor ; apps KPI livraisons en retard / délai de GI.
- **T « Résultat attendu »** : Le DC maîtrise son SLA et informe les clients de façon fiable.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 17
Mots-clés trouvés : NNN
Statut : Statut = Analysé

- **A « GAP ID »** : GAP BR-07-008-010
- **B « Titre »** : Productivité par étape du processus
- **C « BR lié(s) »** : BR-07-008-010
- **D « Description formalisée BR »** :
  > Rapport de productivité pour chaque étape du process
  > ex : Le système doit permettre au teamlead de sortir des KPIs sur le taux de picking (nb picking / unité de temps) réalisé afin d'analyser le taux de performance et les root causes éventuelles
  > Le système doit être capable de suivre le temps travaillé pour déterminer un coût vérité.
- **E « Couvert par (réf. BR) »** : GAP
- **F « Section blueprint »** : 8 – Suivi de la productivité
- **G « Sous-section blueprint »** : 8.1 – Productivité par étape du processus
- **H « Système »** : EWM
- **J « Type FRICE »** : Config / Report (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Rapport statique sur période : nombre de lignes / WT confirmées par unité de temps, par étape et par utilisateur (vérification documentaire, réception 1 et 2, putaway, picking, consolidation 1 et 2, chargement, GI, flux internes, QM, NNN). Suivi du temps travaillé pour calculer un coût réel.
- **L « Statut »** : Analysé
- **M « Complexité »** : L
- **N « Commentaires / points ouverts »** :  Étapes hors WT (checklist, consolidation, chargement) à tracer. « Coût vérité » : source du temps travaillé (RH ?).
- **Q « Analyse alternative Standard SAP »** :  historique des WT pour un calcul simple.
- **R « Gap impliquant d'autres équipes ? »** : oui
- **T « Résultat attendu »** : Le team lead analyse la performance par étape et par utilisateur et détermine un coût réel.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Reporting », ligne 18
Mots-clés trouvés : labo
Statut : Statut = A confirmer avec Business

- **A « GAP ID »** : BR-07-008-020
- **B « Titre »** : Suivi des activités complémentaires
- **C « BR lié(s) »** : BR-07-008-020
- **D « Description formalisée BR »** :
  > Dans un objectif de mesurage de la productivité, d'évaluation de l'efficacité des processus et de planification des ressources opérationnelles, le système doit permettre d'identifier, de distinguer et d'isoler certaines tâches ou ensembles de tâches exécutés par les manutentionnaires du DC qui ne relèvent pas des activités logistiques standard.
  >
  > Ex. : 
  > - reconditionnement d'articles à la réception
  > - comptage d'articles à la réception
  > - découpe de câbles
  > - assemblage de kits
  > - ....
  > - toute autre opération à valeur ajoutée réalisée en dehors des processus logistiques standards
  >
  > Le système doit permettre de tracer ces activités de manière distincte afin qu'elles puissent être exploitées pour le reporting opérationnel, l'analyse de performance des processus, le suivi de la productivité et la planification de la main-d'œuvre.
- **E « Couvert par (réf. BR) »** : GAP Potentiel
- **F « Section blueprint »** : 8 – Suivi de la productivité
- **G « Sous-section blueprint »** : 8.2 – Suivi des activités complémentaires
- **H « Système »** : EWM
- **J « Type FRICE »** : Config (à trancher)
- **K « Description / Analyse – Proposition TO-BE »** : Traçabilité distincte des activités à valeur ajoutée hors flux standard (reconditionnement, comptage à la réception, découpe de câbles, assemblage de kits…) pour mesurer leur temps et les intégrer à la productivité et à la planification des ressources.
- **L « Statut »** : A confirmer avec Business
- **M « Complexité »** : —
- **N « Commentaires / points ouverts »** : BR introuvable dans l'Excel Business Requirements : texte repris du blueprint, à vérifier. Texte blueprint : « Reporting » seulement, à rediscuter avec Gilles. Découpe de câbles déjà spécifique (BR-05-005-150).
- **Q « Analyse alternative Standard SAP »** : VAS orders et kitting EWM ; tâches indirectes Labor Management.
- **T « Résultat attendu »** : Les activités à valeur ajoutée sont mesurées séparément des flux standard.

### Onglet « GAP List QM » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 2
Mots-clés trouvés : échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet sont placé dans emplacement qualité pour quitter le DC 
- **Q « Lien document d'analyse »** : https://infrabel.sharepoint.com/:p:/r/sites/104379/_layouts/15/Doc.aspx?sourcedoc=%7B2F1AB41C-724F-47FA-8351-7DAE1CB99627%7D&file=Flux%20QM%20%E2%80%93%20EWM%202.0.pptx&action=edit&mobileredirect=true&wdwpf=doclib-t
- **R « Analyse alternative Standard SAP »** : Standard ne couvre pas pas la sortie d'echantillon en dehors du Warehouse Number. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 3
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 332 vers 243L automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 4
Mots-clés trouvés : refus, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet accepté ou refusé pour quitter le DC 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 5
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **L « Description / Analyse – Proposition TO-BE »** : Mouvement 332 vers 243A automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 6
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-01-001-050-B
- **C « Titre »** : Activation du contrôle qualité interne au DC
- **D « BR lié(s) »** : BR-01-001-050-00, BR-01-001-050-B, BR-01-003-040
- **E « Description formalisée BR »** : Il doit être possible d'activer le contrôle qualité interne au DC
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR – BR splitté)
- **G « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 3.3.2 – Vérification conformité & quantité article
- **I « Système »** : S/4 QM + EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : A la 2ème étape de réception, un contrôle qualité interne au DC peut être déclenché sur un article. Les quantités concernées sont mises en stock qualité dans l'attente de la décision d'emploi.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA 07-07-2026 : ajouter le numéro du BR dans le blueprint QM. BA 29-06-2026 : justification à rechallenger (blocage facturation, split stock Q / stock libre) – réponse 06-07-2026 : « si nécessaire, oui ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : lot de contrôle à l'entrée marchandises activé via la vue QM de la fiche article, stock en Q jusqu'à la décision d'emploi. Un déclenchement ponctuel à l'initiative du DC n'est probablement pas couvert tel quel.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Comptabilité fournisseurs
- **U « Résultat attendu »** : Définir le déclencheur (fiche article, PO, décision du magasinier), le responsable de la décision d'emploi et l'impact sur la facturation.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 7
Mots-clés trouvés : retour, refus, labo, échantillon
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-000-010
- **C « Titre »** : Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **D « BR lié(s) »** : BR-02-000-010 ; BR-02-001-010
- **E « Description formalisée BR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 000 Commun quelle que soit la décision QM prise (référentiel BR)
- **I « Système »** : S/4 QM + EWM (QIE)
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : La DU prise sur le lot d'inspection s'applique à toutes les HU du lot, quel que soit leur emplacement (DC ou labo). Les échantillons envoyés au labo ne sont pas réintégrés au lot. A l'acceptation, la palette est libérée et devient disponible pour le picking au même moment.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Classé « Fonctionnalité QM – Pas listé dans les flux ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : QIE gère le prélèvement d'échantillons et la décision au niveau du lot ; les HU rattachées au lot sont postées selon la décision. Points à vérifier : HU situées hors du DC et traitement du stock échantillon.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Labo
- **U « Résultat attendu »** : Confirmer avec QM le cycle de vie des échantillons (consommation, destruction, retour) et la représentation du labo dans SAP.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 8
Mots-clés trouvés : refus, litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-000-020
- **C « Titre »** : Flux de communication du contrôleur vers acheteur et DC (acceptation / refus)
- **D « BR lié(s) »** : BR-02-000-020 ; à rapprocher de GAP BR-01-003-100
- **E « Description formalisée BR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 000 Commun quelle que soit la décision QM prise (référentiel BR)
- **I « Système »** : S/4 QM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Workflow / Output
- **L « Description / Analyse – Proposition TO-BE »** : A la DU le contrôleur déclenche une notification vers l'acheteur et vers le DC en cas de refus partiel ou complet, et vers le DC en cas d'acceptation.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Réutilisation possible du canal litiges (GAP BR-01-003-100) à étudier.
- **R « Analyse alternative Standard SAP »** : Pas de notification automatique standard identifiée à la décision d'emploi ; développement ou réutilisation du workflow litiges probable.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Replenishment (achats)
- **U « Résultat attendu »** : Définir les destinataires, le canal (mail, tuile Fiori) et le contenu de la notification.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 9
Mots-clés trouvés : labo, échantillon
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-001-010
- **C « Titre »** : Traçabilité des échantillons DC ↔ labo
- **D « BR lié(s) »** : BR-02-001-010 ; BR-02-000-010
- **E « Description formalisée BR »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 001 Mettre le matériel à disposition de l'inspection (stock Q) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : Les échantillons sont gérés en HU. Chaque déplacement DC → labo → DC est confirmé par scan et l'HU est positionnée dans un emplacement représentant le labo (flux physique = flux SAP).
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed. Traçabilité HU à travers le E2E ».
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : mouvements HU standard EWM vers un storage type « Labo ». 
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM / Labo
- **U « Résultat attendu »** : Confirmer la localisation du labo (interne au DC ou site distinct) et le mode de suivi attendu.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 10
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-001-020
- **C « Titre »** : Remplacement du contrôle chez le fournisseur par un contrôle à la réception
- **D « BR lié(s) »** : BR-02-001-020
- **E « Description formalisée BR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 001 Mettre le matériel à disposition de l'inspection (stock Q) (référentiel BR)
- **I « Système »** : S/4 QM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config / Enhancement (à trancher)
- **L « Description / Analyse – Proposition TO-BE »** : L'inspecteur remplace ponctuellement le contrôle prévu chez le fournisseur par un contrôle à la réception. Le matériel est alors mis en stock qualité à la réception dans l'attente de la décision.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Besoin principalement porté par QM ; impact EWM = mise en stock qualité à la réception.
- **R « Analyse alternative Standard SAP »** : changement manuel du type d'inspection
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : QM
- **U « Résultat attendu »** : Confirmer avec QM le mécanisme de bascule et son impact sur la réception EWM.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 11
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-02-002-010
- **C « Titre »** : HU dédiées au retour fournisseur
- **D « BR lié(s) »** : BR-02-002-010
- **E « Description formalisée BR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **F « Couvert par (réf. BR) »** : Standard 
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : Le matériel refusé destiné au retour fournisseur reste géré en HU dans EWM tant qu'il se trouve dans le magasin.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed ».
- **R « Analyse alternative Standard SAP »** : Gestion des HU standard EWM (stock HU managed). Un développement n'est probablement nécessaire que pour des besoins spécifiques au retour.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer si le standard HU managed couvre entièrement le besoin.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 12
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP possible BR-02-002-020
- **C « Titre »** : Étapes de refus et de renvoi guidées par scanner
- **D « BR lié(s) »** : BR-02-002-020
- **E « Description formalisée BR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM – RF
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : L'agent suit les étapes de refus et de renvoi du matériel au scanner : prélèvement des HU refusées, dépôt en zone de retour et préparation de l'enlèvement.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists.
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : tâches magasin RF standard sur une livraison sortante de retour fournisseur.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Définir les étapes de refus à guider au scanner.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 13
Mots-clés trouvés : retour, refus, rebut, fournisseur
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-02-002-030
- **C « Titre »** : Étiquetage du matériel rebuté pour retour fournisseur
- **D « BR lié(s) »** : BR-02-002-030
- **E « Description formalisée BR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR) – principe HU managed
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Form
- **L « Description / Analyse – Proposition TO-BE »** : Le matériel rebuté, en entier ou partiellement, est identifié par une étiquette de retour fournisseur.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists.
- **R « Analyse alternative Standard SAP »** : Impression d'étiquette HU standard via PPF ; un contenu spécifique « retour fournisseur » nécessite un formulaire.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Définir le contenu de l'étiquette de retour.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 14
Mots-clés trouvés : retour, refus, fournisseur, 922, 108
Statut : Statut = À analyser

- **A « GAP ID »** : BR-02-002-040
- **C « Titre »** : Document de renvoi fournisseur lié au PO (bon 8000)
- **D « BR lié(s) »** : BR-02-002-040 ; lié à GAP BR-01-003-110
- **E « Description formalisée BR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **F « Couvert par (réf. BR) »** : Standard 
- **G « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **H « Sous-section blueprint »** : 002 Implémenter la décision (lot refusé) (référentiel BR)
- **I « Système »** : S/4 + EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : À déterminer
- **L « Description / Analyse – Proposition TO-BE »** : Le renvoi chez le fournisseur repose sur un document lié au PO, dont la référence est transmise par Replenishment au fournisseur et sert au transporteur pour la prise de rendez-vous et l'identification de la marchandise.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. Référentiel : « x (Créer bon sans référence) ». Solution à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922).
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : livraison de retour fournisseur référencée au PO (standard S/4 / EWM).
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Trancher le type de document de retour en cohérence avec GAP BR-01-003-110.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 15
Mots-clés trouvés : refus
Statut : Statut = A clarifier avec business

- **A « GAP ID »** : GAP BR-02-002-050
- **C « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **D « BR lié(s) »** : BR-02-002-050
- **E « Description formalisée BR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **F « Couvert par (réf. BR) »** : —
- **G « Section blueprint »** : 4.1 – Flux expédition (Blueprint Outbound)
- **H « Sous-section blueprint »** : 4.1.2.2 – Confirmer la sortie des HU d'expédition
- **I « Système »** : EWM – RF
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : —
- **L « Description / Analyse – Proposition TO-BE »** : Le magasinier scanne la HU refusée au moment de son enlèvement afin de confirmer la sortie de la bonne HU, notamment lorsque d'autres HU contenant le même article se trouvent dans la même zone.
- **M « Statut »** : A clarifier avec business
- **N « Complexité »** : /
- **O « Commentaires / points ouverts »** : Repris de la GAP List Outbound (ID sans préfixe « GAP »). Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.
- **R « Analyse alternative Standard SAP »** : Piste à vérifier : chargement RF standard par scan de HU sur l'unité de transport (TU).
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer si le chargement RF standard sur TU suffit.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 17
Mots-clés trouvés : avoir, 917
Statut : Statut = À analyser

- **A « GAP ID »** : — (couvert EWM GZH)
- **C « Titre »** : Isolement / quarantaine du stock non conforme avec traçabilité
- **D « BR lié(s) »** : BR-04-001-020-00, BR-04-001-020-A
- **E « Description formalisée BR »** :
  > Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au client
  > (pourquoi bloqué, historique...)
  > - Isoler sur place (dans la bin) = empêcher le picking sur ces pièces 
  > - ou transférer vers une zone quarantaine
- **F « Couvert par (réf. BR) »** : EWM GZH (référentiel BR)
- **G « Section blueprint »** : Blueprint Internal Processes – Stockage
- **H « Sous-section blueprint »** : 001 Gérer les articles non conformes à sortir du stock (référentiel BR)
- **I « Système »** : EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Config
- **L « Description / Analyse – Proposition TO-BE »** : Le stock non conforme est bloqué sur place ou transféré vers une zone de quarantaine (ex. 917) le temps de l'analyse. Le système trace qui a bloqué le stock, quand et pourquoi.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA 01-09-2026 : il doit être possible de sortir les articles de la BIN et de les mettre en 917 ; on veut bloquer le stock et avoir son tracking (qui, quand, pourquoi).
- **R « Analyse alternative Standard SAP »** : Changement de type de stock (libre → bloqué) et tâche magasin vers un type de stockage de quarantaine. La restitution « qui / quand / pourquoi » est à vérifier dans les documents standard.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer que le standard GZH couvre la traçabilité du motif de blocage.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 18
Mots-clés trouvés : retour, litige
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-04-001-020-B
- **C « Titre »** : Suivi de la décision sur un article bloqué pour non-conformité
- **D « BR lié(s) »** : BR-04-001-020-B ; BR-04-001-020-A
- **E « Description formalisée BR »** :
  > pas encore de BR > à discuter avec autre pilier > fichier "Input à valider" ID34
  >
  > Besoin détecté : quand article est bloqué pour picking et en attente d'une décision -> assurer suivi du sort de l'article pour qu'il ne s'éternise pas dans le stock
  > -> Assurer le suivi des incidents
  > (Note : traiter ce point dans les "flux internes")
- **F « Couvert par (réf. BR) »** : — (BR en cours de formalisation)
- **G « Section blueprint »** : Blueprint Internal Processes – Stockage
- **H « Sous-section blueprint »** : 001 Gérer les articles non conformes à sortir du stock (référentiel BR)
- **I « Système »** : S/4 / Fiori
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Workflow
- **L « Description / Analyse – Proposition TO-BE »** : Lorsqu'un doute sur la conformité d'un article en stock est émis (DC ou autre service), les pièces sont rendues indisponibles au picking. Le système identifie l'interlocuteur chargé de statuer, l'informe avec un appel à action et assure le suivi jusqu'au retour décisionnel vers le DC.
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Absent des GAP Lists. BA statut 1 (actions BA) – ID34 du fichier « Input à valider ». À discuter avec un autre pilier ; à traiter dans les flux internes.
- **R « Analyse alternative Standard SAP »** : Pas de workflow standard identifié couvrant le cycle complet ; réutilisation possible du workflow litiges (GAP BR-01-003-100) ou des notifications QM.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment / Gestionnaire technique / QM
- **U « Résultat attendu »** : Formaliser le BR avec l'autre pilier et définir les acteurs du circuit de décision.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 19
Mots-clés trouvés : retour, NNN
Statut : Statut = A confirmer avec business

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **D « BR lié(s) »** : BR-05-001-010
- **E « Description formalisée BR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article. 
  > L'article doit alors se trouver dans une zone particulière.
- **F « Couvert par (réf. BR) »** : — (sans classification au référentiel BR)
- **G « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **H « Sous-section blueprint »** : 3.5.5 – Immatriculation
- **I « Système »** : EWM
- **J « Numéro FSP »** : Standard
- **K « Type FRICE »** : Config / Enhancement
- **L « Description / Analyse – Proposition TO-BE »** : Suivi de la HU partant à l'immatriculation et de son retour ; zone particulière dédiée (magasin vers magasin)
- **M « Statut »** : A confirmer avec business
- **N « Complexité »** : —
- **O « Commentaires / points ouverts »** : Repris de la GAP List Inbound. Confirmer que la solution présentée répond au besoin métier. BA 07-07-2026 : parties « immatriculation » et « QM » du flux Réc 2 pour stock à traiter dans le blueprint QM.
- **R « Analyse alternative Standard SAP »** : Transfert magasin vers magasin et HU managed standard ; indication automatique « article à immatriculer » à analyser.
- **S « Gap impliquant d'autres équipes ? »** : Non
- **T « Service impacté »** : —
- **U « Résultat attendu »** : Confirmer que la solution présentée répond au besoin métier.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 21
Mots-clés trouvés : litige, 107, 109
Statut : Statut = À analyser

- **A « GAP ID »** : GAP possible BR-07-002-030
- **C « Titre »** : Rapport des litiges de réception par ligne de PO
- **D « BR lié(s) »** : BR-07-002-030 ; à rapprocher de GAP BR-01-003-100
- **E « Description formalisée BR »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **F « Couvert par (réf. BR) »** : Gap (référentiel BR)
- **G « Section blueprint »** : 4 – Suivi des réceptions (Blueprint Reporting)
- **H « Sous-section blueprint »** : 4.3 – Litiges à la réception par ligne de commande
- **I « Système »** : S/4 / EWM
- **J « Numéro FSP »** : —
- **K « Type FRICE »** : Report
- **L « Description / Analyse – Proposition TO-BE »** : Le rapport restitue, par ligne de PO, les litiges détectés à toutes les étapes de réception (checklist, 107, 109).
- **M « Statut »** : À analyser
- **N « Complexité »** : À évaluer
- **O « Commentaires / points ouverts »** : Lien QM indirect (litiges / non-conformités). Dépend de la base litiges (GAP BR-01-003-100).
- **R « Analyse alternative Standard SAP »** : Pas de rapport standard consolidant checklist et mouvements 107/109 par ligne de PO.
- **S « Gap impliquant d'autres équipes ? »** : Oui
- **T « Service impacté »** : Replenishment
- **U « Résultat attendu »** : Confirmer les sources de litiges à agréger et le niveau de détail attendu.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 22
Mots-clés trouvés : refus
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : TOM est interessé de recevoir l'info lors d'un refus durant le déchargeent du caion
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** : /

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 23
Mots-clés trouvés : labo, échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : Echantillons DC - Labo
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** :
  > Attention, dans certains cas, 2 échantillons sont
  > nécessaires -> Un sur place dans le DC et un au labo,
  > par ex

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List QM », ligne 26
Mots-clés trouvés : échantillon
Statut : (aucune valeur dans une colonne « Statut »)

- **A « GAP ID »** : GAP XXXX
- **C « Titre »** : Echantillons détruit 
- **D « BR lié(s) »** : Lié meeting TOM 10/06/26
- **E « Description formalisée BR »** :
  > Pour des pièces qui seront détruites, introduire une
  > ligne supplémentaire dans le PO "pièces gratuites"

### Onglet « GAP List Immatriculation » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Immatriculation », ligne 2
Mots-clés trouvés : retour
Statut : Statut = À analyser

- **A « GAP ID »** : GAP BR-05-001-010
- **C « Titre »** : Génération automatique de l’envoi en immatriculation
- **D « BR lié(s) »** : BR-05-001-010
- **E « Description formalisée BR »** : Suivre automatiquement les articles envoyés à l’immatriculation et les localiser dans une zone dédiée. Après leur dépôt en staging immatriculation, générer automatiquement les mouvements et le bon 8* nécessaires à leur envoi.
- **F « Section blueprint »** : Immatriculation
- **G « Sous-section blueprint »** : Envoi vers immatriculation
- **H « Système »** : EWM / S/4HANA
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Après la réception et la confirmation du dépôt des HU dans la BIN de staging immatriculation, le système génère automatiquement les mouvements nécessaires et le bon 8* vers le lieu d’immatriculation. Ce bon permet de poursuivre le picking, les deux consolidations et la sortie de marchandises, directement depuis le BL ou via un TU, selon les flux communs. 
- **L « Statut »** : À analyser
- **N « Complexité »** : L
- **O « Commentaires / points ouverts »** : Préciser les mouvements techniques, les magasins source/destination, les règles de génération et de regroupement du bon 8*. Confirmer la couverture des contraintes de picking, traçabilité et MRP avec les équipes concernées. Pour le retour : responsable du transfert et document de référence du garage Draisine à préciser. Décisions utilisateur du 28/09 : ne pas figer 411/311 ; conserver les deux étapes de réception au retour. Les flux communs sont réutilisés ; le dépôt direct en staging immatriculation lors de la réception fait l’objet d’un GAP distinct. Ancienne ligne Inbound 37 remplacée par un renvoi, sans double comptage.
- **P « Analyse alternative Standard SAP »** : Le standard SAP permet de créer une livraison sortante pour un transfert entre magasins, via une commande de transfert (STO, livraisons créées par VL10B) ou sans référence (VL01NO), puis de la traiter dans EWM comme toute livraison : picking, deux consolidations et sortie de marchandises depuis le BL ou via TU. Les HU déposées en staging immatriculation sont localisées et visibles dans /SCWM/MON. L'alternative consiste à créer le bon 8* manuellement dès que le dépôt en staging est confirmé. La création automatique du bon 8* et des mouvements à la confirmation du dépôt n'existe pas en standard.
- **S « Résultat attendu »** : Déclencher l’envoi en immatriculation depuis le staging sans saisie manuelle des mouvements et du bon 8*, en assurant la traçabilité et la disponibilité correcte du stock.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List Immatriculation », ligne 4
Mots-clés trouvés : fournisseur
Statut : (aucune valeur dans une colonne « Statut »)

- **C « Titre »** : Etiquette GR contenant le numéro d'immatriculation + numéro de série SAP (pas fournisseur) 

### Onglet « GAP List NNN » (ligne d’en-tête détectée : L1)

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 2
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-010
- **B « Titre »** : Orientation vers le flux NNN / consommation directe
- **C « BR lié(s) »** : BR-01-002-010
- **D « Description formalisée BR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : Fin de réception première étape / sélection du flux deuxième étape
- **H « Système »** : EWM
- **I « Numéro FSP »** : FS-XX
- **J « Type FRICE »** : Enhancement / Config à qualifier
- **K « Description / Analyse – Proposition TO-BE »** : Identifier dès la fin de la première étape les articles non destinés au stock et orienter leur réception deuxième étape vers le parcours NNN/consommation directe avec HU techniquement vides.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Les articles NNN n'ayant pas de fiche article gérée en stock dans EWM, l'orientation automatique vers un parcours de HU techniquement vides n'existe pas en standard.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 3
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Parcours RF de réception des HU NNN techniquement vides
- **C « BR lié(s) »** : BR-01-002-010 (orientation) ; détail RF issu du blueprint/deck
- **D « Description formalisée BR »** : Présenter les HU de la zone de réception selon l’ordre opérationnel et permettre leur traitement malgré l’absence de contenu article EWM.
- **E « Couvert par (réf. BR) »** : Extension du parcours RF existant
- **F « Section blueprint »** : 3.5 – NNN / Consommation directe
- **G « Sous-section blueprint »** : 3.5.1 et contrôle de réception ; deck RF
- **H « Système »** : EWM / S/4
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Sélection de zone, liste des HU à traiter, ordre FIFO/priorité et passage à la HU suivante. Donner accès à la déclaration d’anomalie. Enregistrer l’avancement de réception de chaque HU pour alimenter les conditions 101, déclenché uniquement quand toutes les HU sont recues et qu'aucune n'est litigieuse.
- **L « Statut »** : Analysé 
- **N « Complexité »** : L
- **P « Analyse alternative Standard SAP »** : Le standard EWM travaille en RF sur des HU contenant du stock article ; une HU vide peut être créée, étiquetée et déplacée, mais sa « réception » ligne par ligne sans contenu EWM n'existe pas en standard. L'alternative consiste à contrôler les articles sur la base de la PO hors RF et à n'utiliser le RF que pour localiser la HU. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 4
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-05-003-010-A
- **B « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **C « BR lié(s) »** : BR-05-003-010-A
- **D « Description formalisée BR »** : Localiser les HU non gérées en stock dans une zone de staging pour préparer leur expédition, enlèvement ou transfert.
- **E « Couvert par (réf. BR) »** : Couverture à vérifier
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.8 – Mise en staging zone « Cons. Directe »
- **H « Système »** : EWM
- **I « Numéro FSP »** : Standard
- **J « Type FRICE »** : Config / Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Le magasinier choisit et scanne la bin de dépose. Enregistrer la localisation de la HU techniquement vide et la dépose. Pas de proposition automatique de bin ni de logique porteur de mise en stock.
- **L « Statut »** : Analysé 
- **N « Complexité »** : S
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de déplacer une HU, même vide, vers un emplacement scanné par l'opérateur (/SCWM/ADHU ou déplacement de HU en RF) et de la retrouver dans /SCWM/MON. L'alternative consiste à utiliser ce déplacement de HU standard vers la BIN de staging « Consommation Directe ». Rien de spécifique n'est nécessaire pour la localisation.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 5
Mots-clés trouvés : retour, refus, litige, rebut, fournisseur, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-003-020
- **B « Titre »** : Anomalies NNN : blocage de toute la livraison et de ses HU
- **C « BR lié(s) »** : (famille BR-01-003-020)
- **D « Description formalisée BR »** : En cas d’anomalie NNN/consommation directe détectée à la première ou à la deuxième étape, bloquer toute la livraison et toutes les HU associées, même réparties sur plusieurs colis.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.9.1 – Anomalie détectée à la 1ère étape ; 3.5.9.2 – Anomalie détectée à la 2ème étape
- **H « Système »** : EWM / S/4
- **I « Numéro FSP »** : FS-16
- **J « Type FRICE »** : Enhancement
- **K « Description / Analyse – Proposition TO-BE »** : Première étape : bloquer toute la livraison. Deuxième étape : déclaration d’anomalie depuis le RF et lien avec le cockpit litiges ; bloquer tout le contenu de la livraison, y compris les HU déjà contrôlées et déposées, pour empêcher leur picking. Dépose manuelle des HU concernées en zone litige. L’acceptation de l’acheteur suffit à lever le blocage de toutes les HU, sans contrôle supplémentaire imposé. En cas de refus : clôture de la livraison et traitement retour fournisseur ou rebut. Le 101 et le mail restent conditionnés à la réception et à la dépose de toutes les HU sans litige bloquant.
- **L « Statut »** : Analysé 
- **N « Complexité »** : XL
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de rejeter une livraison et d'ajuster les quantités par poste avec des process codes, et de bloquer une BIN (par exemple la lane litige). Les HU NNN étant techniquement vides, les blocages de stock standard ne s'appliquent pas. L'alternative consiste à déposer les HU en lane litige, à bloquer cette BIN et à suivre le litige dans un avis qualité Q2. Le blocage de toute la livraison et de toutes ses HU, y compris celles déjà déposées ailleurs, avec levée sur décision acheteur, n'existe pas en standard. L'écart porte sur ce blocage groupé et le lien avec le cockpit litiges.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 6
Mots-clés trouvés : retour, refus, fournisseur, NNN, 122
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Retour fournisseur NNN / consommation directe
- **C « BR lié(s) »** : BR à confirmer
- **D « Description formalisée BR »** : Définir le traitement du retour fournisseur des HU NNN/consommation directe après refus de l’acheteur.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : NNN / Consommation directe
- **G « Sous-section blueprint »** : Traitement du refus et retour fournisseur
- **H « Système »** : EWM / S/4
- **J « Type FRICE »** : À déterminer
- **K « Description / Analyse – Proposition TO-BE »** : Analyser le flux physique des HU techniquement vides, les documents nécessaires, la traçabilité et les impacts comptables selon l’avancement de la réception, notamment avant ou après le 101. Définir le traitement de la livraison entrante et de la PO. Aucune clôture, annulation ou solution de retour n’est arrêtée à ce stade.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** : Le standard SAP gère le retour fournisseur par mouvement de retour (122) après le 101, ou par rejet de la livraison entrante avant le 101 (la quantité repasse à zéro sur la PO). Pour la sortie physique, le bon 8* sans référence (VL01NO) utilisé pour les NNN peut porter les HU vers le fournisseur. L'alternative consiste à combiner ces documents selon l'avancement de la réception. Aucun élément ne montre à ce stade un besoin hors standard. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 7
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Réception comptable 101 après traitement de toute la livraison NNN
- **C « BR lié(s) »** : BR spécifique à confirmer
- **D « Description formalisée BR »** : Déclencher le 101 seulement lorsque toutes les HU de la livraison sont réceptionnées et déposées, sans litige bloquant.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – NNN / Consommation directe
- **G « Sous-section blueprint »** : 3.5.6 – Réception comptable
- **H « Système »** : S/4 / EWM
- **K « Description / Analyse – Proposition TO-BE »** : Automatiser le 101 à partir de la livraison entrante après vérification de toutes ses HU. Une HU non réceptionnée, non déposée ou un litige bloquant empêche le déclenchement.
- **L « Statut »** : Analysé 
- **N « Complexité »** : L
- **P « Analyse alternative Standard SAP »** : Le standard SAP comptabilise l'entrée marchandises 101 d'un poste de PO en consommation directe dans S/4 (MIGO ou sur la livraison entrante), sans stock EWM. L'alternative consiste à poster le 101 manuellement une fois toutes les HU contrôlées et déposées. 

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 8
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-020-A
- **B « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **C « BR lié(s) »** : BR-01-002-020-A
- **D « Description formalisée BR »** : Après réception NNN/consommation directe, informer automatiquement le demandeur de la disponibilité du matériel avec numéro de HU, localisation et numéro de PO.
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.7 – Notification automatique au client
- **H « Système »** : EWM
- **I « Numéro FSP »** : FS-15
- **K « Description / Analyse – Proposition TO-BE »** : Envoyer le mail lorsque toutes les HU de la livraison sont réceptionnées et déposées et qu’aucun litige ne bloque la livraison. Aucun mail tant que ces conditions ne sont pas réunies.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Le mail au demandeur avec HU, localisation et PO, envoyé seulement quand toutes les HU sont déposées sans litige, n'existe pas en standard, pas plus que la détermination du demandeur.
- **Q « Gap impliquant d'autres équipes ? »** : oui
- **R « Service impacté »** : SP, replenishment

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 9
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-05-006-050-B
- **B « Titre »** : Traçabilité des HU NNN et visibilité du destinataire
- **C « BR lié(s) »** : BR-05-006-050-B
- **D « Description formalisée BR »** :
  > "Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut"
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **G « Sous-section blueprint »** : 3.5.7–3.5.8 ; préparation expédition
- **H « Système »** : EWM 
- **I « Numéro FSP »** : FS-XX
- **K « Description / Analyse – Proposition TO-BE »** : Suivre localisation et statut de chaque HU techniquement vide. Afficher le destinataire dans le moniteur pour retrouver les HU et préparer leur expédition. Conserver les liens livraison entrante/PO 
- **L « Statut »** : Analysé 
- **N « Complexité »** : S
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet de suivre la localisation et le statut de chaque HU, même vide, dans /SCWM/MON, avec les liens vers la livraison entrante. L'alternative consiste à utiliser le monitor et à retrouver le destinataire via la PO. L'affichage du destinataire directement sur la HU dans le monitor n'existe pas en standard. L'écart porte sur ce champ et son affichage ; le suivi de la HU reste standard.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 10
Mots-clés trouvés : NNN, avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-003-010
- **B « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **C « BR lié(s) »** : BR-05-003-010-B
- **D « Description formalisée BR »** : Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports. Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle). Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP
- **E « Couvert par (réf. BR) »** : Standard Infrabel
- **F « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **G « Sous-section blueprint »** : 3.1
- **H « Système »** : EWM
- **J « Type FRICE »** : —
- **K « Description / Analyse – Proposition TO-BE »** : Création manuelle du bon 8 sans référence avec un article technique d’emballage (palette, boîte…). Rattacher les HU NNN techniquement vides au flux sortant pour le destinataire et l’adresse de livraison. Solution de la présentation retenue.
- **L « Statut »** : Analysé 
- **N « Complexité »** : /
- **P « Analyse alternative Standard SAP »** : Solution standard Infrabel : bon 8* sans référence (VL01NO) avec un article technique d'emballage, traité dans EWM comme une livraison sortante, comme à Bascoup. Les HU NNN sont rattachées au flux sortant pour le destinataire et l'adresse de livraison. Pas d'écart par rapport au standard ; le rattachement des HU est traité dans la ligne de sélection par destinataire.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 11
Mots-clés trouvés : litige, NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP — ID à attribuer
- **B « Titre »** : Sélection et préparation des HU NNN par destinataire
- **C « BR lié(s) »** : BR-05-003-010-B ; complément blueprint NNN
- **D « Description formalisée BR »** : Sélectionner pour le bon 8 les HU NNN disponibles du destinataire, en excluant toutes les HU des livraisons bloquées.
- **E « Couvert par (réf. BR) »** : Gap / extension à qualifier
- **F « Section blueprint »** : Préparation NNN / consommation directe
- **G « Sous-section blueprint »** : Picking et déplacement des HU vides
- **H « Système »** : EWM
- **J « Type FRICE »** : Enhancement / Config à qualifier
- **K « Description / Analyse – Proposition TO-BE »** : Après création manuelle du bon 8, sélectionner les HU par destinataire à partir des données liées à la HU. Empêcher le picking de toute HU appartenant à une livraison bloquée, même déjà déposée. Vérifier la création et l’exécution RF des tâches de déplacement des HU techniquement vides vers la préparation.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** : Le standard EWM permet d'emballer des HU dans une HU d'expédition et de les rattacher au bon 8* au moment de la préparation. L'alternative consiste à sélectionner les HU du destinataire depuis /SCWM/MON (via la PO) et à bloquer la lane litige pour qu'aucune HU bloquée n'en sorte. La sélection automatique des HU par destinataire et l'exclusion des HU d'une livraison bloquée déjà déposées hors litige n'existent pas en standard. 
- **S « Résultat attendu »** : Préparer uniquement les HU autorisées pour le bon destinataire.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 12
Mots-clés trouvés : NNN
Statut : Statut = Analysé 

- **A « GAP ID »** : BR-05-006-050 (couvert)
- **B « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **C « BR lié(s) »** : BR-05-006-050-A
- **D « Description formalisée BR »** : Pouvoir associer une livraison de marchandises NNN / consommation directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport — tracking de HU : localisation et statut
- **E « Couvert par (réf. BR) »** : Standard Infrabel
- **F « Section blueprint »** : 3.5 – Consolider le picking
- **G « Sous-section blueprint »** : 3.5.1 – Proposition de repackaging des HU de picking
- **H « Système »** : EWM
- **J « Type FRICE »** : —
- **K « Description / Analyse – Proposition TO-BE »** : Consolider les HU NNN techniquement vides dans la HU d’expédition du bon 8, contenant un article technique d’emballage. Conserver les liens entre HU et la cohérence du destinataire lors du regroupement et de l’affectation au transport.
- **L « Statut »** : Analysé 
- **N « Complexité »** : —
- **P « Analyse alternative Standard SAP »** : Couvert par le standard : EWM permet d'emballer les HU NNN vides dans la HU d'expédition du bon 8* (HU imbriquée) et d'affecter cette HU au transport (TU), avec suivi de localisation et de statut.

#### GAP_List_EWM2.0_Ronet_27-10.xlsx — onglet « GAP List NNN », ligne 13
Mots-clés trouvés : avoir
Statut : Statut = Analysé 

- **A « GAP ID »** : GAP BR-01-002-020-B
- **B « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **C « BR lié(s) »** : BR-01-002-020-B
- **D « Description formalisée BR »** : Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée afin d'avoir une traçabilité des articles (sauf contre-indication par le TOM)
- **E « Couvert par (réf. BR) »** : Gap
- **F « Section blueprint »** : 4.1 – Flux expédition
- **G « Sous-section blueprint »** : 4.1.1.2 – Distribution
- **H « Système »** : EWM
- **J « Type FRICE »** : Enhancement (PPF) + Form
- **K « Description / Analyse – Proposition TO-BE »** : Après réception de la confirmation du transporteur, le système envoie automatiquement les informations de transport au client destinataire par mail. Cette fonctionnalité doit pouvoir être activée / désactivée dans le système.
- **L « Statut »** : Analysé 
- **N « Complexité »** : M
- **P « Analyse alternative Standard SAP »** :  Le mail au demandeur sur confirmation du transporteur, avec interrupteur métier, n'existe pas en standard.

---

## Business_Requirements.xlsx
Source : Drive 1i_gU0lllY9zc0nFiBbZ_k_5oqVSoVCHaVj6BqzgE7y8 (Google Sheet)

Nombre d’extraits : **184**

### Onglet « BR - Feuille de travail » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 3
Mots-clés trouvés : fournisseur

- **A « Num ligne »** : 2
- **B « Source »** : WS GZH
- **C « Idée de base »** : Het systeem moet ons in staat stellen om teveel-leveringen (overstock) als 'blocked stock' te kunnen rapporteren. Alsook scannen in VL31N.
- **D « Etape processus »** : _01_Réception_Ontvangst
- **F « Sujets communs »** : Overdelivery
- **H « Texte d'origine »** : NL
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** :
  > Le système doit permettre d'encoder les overdelivery dès la première étape afin de garantir la vue complète de ce qui est livré par le fournisseur (SLA / SPM supplier performance monitoring) 
  > + blocage des qtés supp en "blocked stock"?
- **S « Geformaliseerde beschrijving NL »** : Het systeem moet toestaan om overleveringen al vanaf de eerste stap te registreren, zodat een volledig overzicht wordt gegarandeerd van wat door de leverancier wordt geleverd (SLA/SPM leverancierprestatiebewaking).
- **U « Statut »** : Annulé
- **V « Catégorie »** : Fonctionnalité
- **W « Code Proc-SsProc »** : #N/A
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 9
Mots-clés trouvés : refus

- **A « Num ligne »** : 8
- **B « Source »** : Philippe
- **C « Idée de base »** : Le magasinier doit disposer d'une check list contrôle à la réception pour contrôler tous les points avant l'acceptation de déchargement. Cf (vérifier les documents de livraison)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-01-001-010
- **K « Description formalisée FR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : Het systeem moet de magazijnmedewerker in staat stellen om de checklist voor acceptatie/weigering van een levering te beheren, om zo het opvolgen van de checklist en de traceerbaarheid van de redenen voor weigering te garanderen.
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-001
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 12
Mots-clés trouvés : refus, litige, fournisseur

- **A « Num ligne »** : 11
- **B « Source »** : Peter
- **C « Idée de base »** : Ne pas oublier d'identifier un/des canaux de communication entre opérateur à la réception et un contacte au replenishment, pour essayer de résoudre tout ce qui n'est pas clair, le plus vite possible, afin d'éviter des refus de choses qui auraient pu être évités (qté sur PO etc...)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** :
  > Canal com
  > Customer Care
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 100
- **J « NR BR »** : BR-01-003-100
- **K « Description formalisée FR »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de communication autour des litiges d'un PO. Eviter de poser la même question à un fournisseur par 3 personnes différentes d'Infrabel
- **L « Repl »** : 1
- **N « MMD »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AD « QM2 »** : INDIR
- **AE « Count »** : 3

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 13
Mots-clés trouvés : fournisseur

- **A « Num ligne »** : 12
- **B « Source »** : Christophe
- **C « Idée de base »** : on doit pouvoir ecrire des informations lors de la 2° étape de la réception pour mentionner des pièces abîmées /non qualité ou différence de quantité % à la note d'envoie. Sous forme d'un mail automatique qui sera envoyé vers une mail box acheteur pour communiquer avec fournisseur de fàcon rapide et documentée. ajout de photos et scanning de document.
- **D « Etape processus »** : _01_Réception_Ontvangst
- **F « Sujets communs »** : Article non-conforme
- **H « Texte d'origine »** : FR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Voir ligne 2
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 14
Mots-clés trouvés : refus, avoir

- **A « Num ligne »** : 13
- **B « Source »** : Jonathan
- **C « Idée de base »** : idéalement, le système devrait limiter le nombre de façon de travailler => soit on ne décharge pas, et un document de refus pourrait être généré par le système (pour avoir un suivi des plaintes) soit c'est accepté, et tout se traite via la même transaction (inbound delivery)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 000 Commun aux sous-processus
- **F « Sujets communs »** : Standardisation STO / PO ..
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-01-000-010
- **K « Description formalisée FR »** : Le système doit permettre une solution intégrée : une seule façon de réceptionner / refuser des livraisons (STO, PO..) afin de standardiser / simplifier / faciliter l'apprentissage + reporting
- **S « Geformaliseerde beschrijving NL »** : Het systeem moet een geïntegreerde oplossing bieden: één uniforme manier om leveringen (STO, PO, ...) te ontvangen/weigeren, zodat het proces gestandaardiseerd, vereenvoudigd en het leren vergemakkelijkt wordt + reporting
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-000
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : INDIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 17
Mots-clés trouvés : 107

- **A « Num ligne »** : 16
- **B « Source »** : Delphine
- **C « Idée de base »** : Simplifier l'annulation d'une  réception (actuellement : annulation du 107, mise à jour de la livraison entrante)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** : Annulation réception
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 120
- **J « NR BR »** : BR-01-003-120
- **K « Description formalisée FR »** : Le système doit permettre d'annuler une réception de manière simple afin de simplifier le processus
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : EWM Standard
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 18
Mots-clés trouvés : 107, 109

- **A « Num ligne »** : 17
- **B « Source »** : Delphine
- **C « Idée de base »** : Simplifier l'annulation d'une  réception (actuellement : annulation du 109, annulation du 107, mise à jour de la livraison entrante)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **F « Sujets communs »** : Annulation réception
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 100
- **J « NR BR »** : BR-01-005-100
- **K « Description formalisée FR »** : Le système doit permettre d'annuler une réception de manière simple afin de simplifier le processus
- **S « Geformaliseerde beschrijving NL »** :
  > Het systeem moet toelaten om een ontvangst op een eenvoudige manier te annuleren om het proces te vereenvoudigen.
  >
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-005
- **X « Couvert par »** : EWM GZH
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 19
Mots-clés trouvés : avoir

- **A « Num ligne »** : 18
- **B « Source »** : Christophe
- **C « Idée de base »** : On doit pouvoir directement identifier lors de la première étape de réception , les articles pour  commandes T8 & T9 afin de les traiter en cross docking ou via une zone séparée
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** : Article urgent
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-01-003-030
- **K « Description formalisée FR »** :
  > Le système doit permettre, en amont de la 1ière étape, d'indiquer une priorité sur un article qui nécessite une procédure d'urgence afin que le magasinier soit au courant et puisse prendre les actions nécessaires (=by-passer le FIFO) à la deuxième étape de la réception.
  > Replenishment doit avoir la possibilité d'indiquer dans SAP (dans PO? / MD04?) cette notion d'urgence
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **T « Correction à la description formalisée »** : 2025-10-23
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : Gap
- **Y « SP2 »** : INDIR
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 3

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 20
Mots-clés trouvés : avoir

- **A « Num ligne »** : 19
- **B « Source »** : WS Rec
- **C « Idée de base »** : Point à discuter sur les T9
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 004 Lancer les vagues de picking
- **F « Sujets communs »** : Article urgent
- **G « Type »** : BR
- **I « Numéro »** : 120
- **J « NR BR »** : BR-05-004-120
- **K « Description formalisée FR »** :
  > 1. Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail? popup? étiquette imprimée? warning dans un rapport?...)
  > La demande T8/T9 doit être monitorée.
  > 2. Une demande T8/T9 doit être ajoutée automatiquement à une vague de picking "urgente"
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-004
- **Y « SP2 »** : INDIR
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 3

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 22
Mots-clés trouvés : NNN

- **A « Num ligne »** : 21
- **B « Source »** : Jürgen
- **C « Idée de base »** :
  > visueel verschil als directe consumptie of op stock
  >
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-01-002-010
- **K « Description formalisée FR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : Het systeem moet aan het einde van de eerste stap aangeven dat het artikel niet voor opslag is (NNN / directe consumptie) om de juiste stroom te bepalen in de tweede stap.
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-002
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 27
Mots-clés trouvés : litige, fournisseur

- **A « Num ligne »** : 26
- **B « Source »** : Manon
- **C « Idée de base »** : le système doit pouvoir permettre d'introduire le code signature du jour dans la livraison entrante
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **F « Sujets communs »** : Code signature
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 070
- **J « NR BR »** : BR-01-001-070
- **K « Description formalisée FR »** : le système doit générer le code signature aléatoire au moment de la check list et l'associer à la livraison entrante afin de facilement pouvoir retrouver le code en cas de litige avec le fournisseur / transporteur
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **T « Correction à la description formalisée »** : 2025-10-23
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-001
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 34
Mots-clés trouvés : 107, 109

- **A « Num ligne »** : 33
- **B « Source »** : Manon
- **C « Idée de base »** : Lors de l'annulation de la réception 109, le système doit mettre à jour la 107 et la livraison entrante automatiquement + si on annule la 107, le système doit mettre à jour la livraison entrante
- **D « Etape processus »** : _01_Réception_Ontvangst
- **F « Sujets communs »** : Annulation réception
- **H « Texte d'origine »** : FR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Voir ligne 17
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 35
Mots-clés trouvés : refus

- **A « Num ligne »** : 34
- **B « Source »** : Peter
- **C « Idée de base »** : Pouvoir être 'simple' pour annuler la réception si lot QM est refusé
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-02-002-020
- **K « Description formalisée FR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-002
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AD « QM2 »** : DIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 42
Mots-clés trouvés : litige, fournisseur, 107

- **A « Num ligne »** : 41
- **B « Source »** : Manon
- **C « Idée de base »** :
  > Dans le cas d'un overdelivery déjà détecté au VL31N, pouvoir encoder les qtés inscrites sur le bon de livraison.
  > SAP transmet automatiquement l'information à l'acheteur avec :
  > - info du PO
  > - article confirmé
  > - qté supp
  > - endroit de localisation de la livraison (Z2#)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** :
  > Overdelivery
  > Flux de comm --> Litige
  > Customer care
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-01-003-020
- **K « Description formalisée FR »** :
  > - Dans le cas d'un overdelivery détecté sur le bon de livraison, pouvoir encoder les qtés inscrites sur le bon de livraison en 1ere étape de livraison.
  >
  > Il doit être possible d'identifier la localisation du matériel dans l'entrepôt --> les colis de l'étape 1 doivent être visibles dans eWM.
  > '- Est-ce que nous bloquons la quantité totale ou bien l'overdelivery sur la ligne de commande concernée ? --> on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées.
  > Seul le mouvement 107 est généré sur les articles dont les quantités sont correctes.
  > Le mouvement 107 n'est pas généré pour l'article en litige.
  > Il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
  >
  > Un litige est automatiquement créé avec :
  > - info du PO
  > - article confirmé
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : Gap
- **AA « DC »** : DIR
- **AB « REPL / ACHATS »** : DIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 43
Mots-clés trouvés : avoir

- **A « Num ligne »** : 42
- **B « Source »** : Jonathan
- **C « Idée de base »** : le coordinateur et dTL doivent pouvoir avoir des statistiques sur le nombre de livraisons reçues par jour
- **D « Etape processus »** : _07_Reporting
- **E « Etape sous-processus »** : 002 Réception
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Déjà repris dans "Num ligne 211"
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 07-002
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 45
Mots-clés trouvés : avoir

- **A « Num ligne »** : 44
- **B « Source »** : Elsy
- **C « Idée de base »** : L'agent est piloté par le système pour l'enlogement mais il doit avoir la possibilité de changer l'emplacement de destination si celui n'est pas accessible/déjà occupé/... 
- **D « Etape processus »** : _03_PrépStockage_Opslagvoorbereiding
- **H « Texte d'origine »** : FR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : -> Procédure d'exception 
- **S « Geformaliseerde beschrijving NL »** :
  > -> Uitzonderingsprocedure
  >
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AA « DC »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 55
Mots-clés trouvés : retour

- **A « Num ligne »** : 54
- **B « Source »** : Manon
- **C « Idée de base »** : Au retour de l'article suite à son immatriculation, un document doit être joint avec les référence du COPO
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 001 Faire immatriculer les articles
- **F « Sujets communs »** : COPO - Draisine
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** :
  > n-a pour ce projet
  > A rediscuter avec garage draisine
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 05-001
- **AC « IO5 »** : DIR
- **AE « Count »** : 1

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 56
Mots-clés trouvés : refus

- **A « Num ligne »** : 55
- **B « Source »** : Manon
- **C « Idée de base »** : Lors de la réception 1, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-01-001-020
- **K « Description formalisée FR »** : Lors de la vérification de la check list, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu afin de pouvoir décider de la réception/refus de l'article plus rapidement
- **S « Geformaliseerde beschrijving NL »** : Bij ontvangst 1, direct bij het invoeren van het PO-nummer informatie ontvangen als er een inspectiepartij wordt verwacht, zodat sneller kan worden besloten over de acceptatie of weigering van het artikel.
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-001
- **X « Couvert par »** : Gap
- **AB « REPL / ACHATS »** : DIR
- **AD « QM2 »** : INDIR
- **AE « Count »** : 2

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 57
Mots-clés trouvés : labo, échantillon

- **A « Num ligne »** : 56
- **B « Source »** : Peter
- **C « Idée de base »** : Doit pouvoir garder une trace des échantillons envoiés vers labo (lot QM ICT)
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-02-001-010
- **K « Description formalisée FR »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-001
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 60
Mots-clés trouvés : avoir

- **A « Num ligne »** : 59
- **B « Source »** : Jonathan
- **C « Idée de base »** : le système doit permettre d'enregistrer la livraison de qqch qui sera déchargé dans une autre zone du magasin (parc à câble, extérieur, Verdun...)
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 050
- **J « NR BR »** : BR-01-003-050
- **K « Description formalisée FR »** : Le système doit permettre d'enregistrer la livraison de marchandises qui sera déchargée dans une autre zone du magasin (parc à câble, extérieur, Verdun...) afin d'avoir une traçabilité des marchandises déchargées et de l'endroit de déchargement.
- **S « Geformaliseerde beschrijving NL »** : Het systeem moet de mogelijkheid bieden om de levering van iets te registreren dat zal worden gelost in een andere zone van de winkel (kabelpark, buitenruimte, Verdun, ...) om traceerbaarheid te garanderen van wat er wordt gelost en waar.
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 65
Mots-clés trouvés : refus

- **A « Num ligne »** : 64
- **B « Source »** : Jonathan
- **C « Idée de base »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés
- **D « Etape processus »** : _07_Reporting
- **E « Etape sous-processus »** : 002 Réception
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-07-002-020
- **K « Description formalisée FR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 07-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 67
Mots-clés trouvés : NNN, avoir

- **A « Num ligne »** : 66
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que 
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO) 
  > - et que son matériel sera expédié avec la prochaine tournée
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-01-002-020
- **K « Description formalisée FR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que 
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO) 
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** :
  > Zodra de ontvangst van een artikel NNN/directe consumptie is uitgevoerd, moet er automatisch een e-mail naar de aanvrager worden verzonden met de volgende informatie:
  >
  > Dat zijn materiaal beschikbaar is (info: het HU-nummer / de locatie / het PO-nummer)
  > En dat zijn materiaal met de volgende ronde zal worden verzonden
  > om de traceerbaarheid van de artikelen te garanderen
  > (behalve in geval van tegenindicatie door de TOM)
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 79
Mots-clés trouvés : fournisseur

- **A « Num ligne »** : 78
- **B « Source »** : WS GZH
- **C « Idée de base »** : Le système doit permettre à l'inspecteur (réceptionnaire QM) de pouvoir décider qu'une livraison peut être acceptée au DC en "stock bloqué" afin de pouvoir venir faire l'inspection facultativement au DC à la place de chez le fournisseur
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-02-001-020
- **K « Description formalisée FR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **V « Catégorie »** : Fonctionnalité
- **W « Code Proc-SsProc »** : 02-001
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 80
Mots-clés trouvés : refus

- **A « Num ligne »** : 79
- **B « Source »** : WS GZH
- **C « Idée de base »** : Le système doit permettre aux magasiniers d'identifier le matériel soumis à un contrôle qualité (B678) afin de ne pas faire entrer et donc livrer au client du matériel…
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-01-001-030
- **K « Description formalisée FR »** : Le système doit permettre aux magasiniers d'identifier le matériel soumis à un contrôle qualité chez le fabricant (B678 - document d'inspection 0101) refusé afin de refuser le déchargement
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **V « Catégorie »** : Contrainte
- **W « Code Proc-SsProc »** : 01-001
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 107
Mots-clés trouvés : avoir

- **A « Num ligne »** : 106
- **B « Source »** : WS Prep Stock
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 090
- **J « NR BR »** : BR-01-005-090
- **K « Description formalisée FR »** :
  > Informations nécessaires sur les étiquettes après avoir défini le type de HU : 
  > - Numéro de lot
  > - Date de péremption
- **M « SP »** : ?
- **S « Geformaliseerde beschrijving NL »** :
  > Benodigde informatie op de etiketten na het definiëren van het type HU:
  > Batchnummer
  > Houdbaarheidsdatum
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-005
- **X « Couvert par »** : EWM GZH
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 108
Mots-clés trouvés : fournisseur, 107

- **A « Num ligne »** : 107
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble 
  > - afin d'utiliser le numéro du touret comme numéro HU
  > - afin d'utiliser l'information relative à la dimension du touret
- **D « Etape processus »** : _03_PrépStockage_Opslagvoorbereiding
- **E « Etape sous-processus »** : 001 Appliquer les règles de conditionnement
- **F « Sujets communs »** : Gestion bobines
- **G « Type »** : BR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-03-001-030
- **K « Description formalisée FR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 03-001
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 109
Mots-clés trouvés : fournisseur, 108

- **A « Num ligne »** : 108
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : S'il n'y a pas d'étiquette fournisseur pour le touret, il doit être possible d'en imprimer une nouvelle
- **D « Etape processus »** : _03_PrépStockage_Opslagvoorbereiding
- **E « Etape sous-processus »** : 001 Appliquer les règles de conditionnement
- **F « Sujets communs »** : Gestion bobines
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Pas pertinent car un numéro SSCC détermine la HU
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 03-001
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 110
Mots-clés trouvés : 109

- **A « Num ligne »** : 109
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Au moment de la génération d'une étiquette HU touret, il doit être possible d'indiquer la dimension du touret
- **D « Etape processus »** : _03_PrépStockage_Opslagvoorbereiding
- **E « Etape sous-processus »** : 001 Appliquer les règles de conditionnement
- **F « Sujets communs »** : Gestion bobines
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Standard SAP eWM
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 03-001
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 112
Mots-clés trouvés : retour

- **A « Num ligne »** : 111
- **B « Source »** : Christophe
- **C « Idée de base »** :
  > Le système doit pouvoir gérer le flux "retour en magasin" de réservations COPO préparées mais non enlevées dans le délai accordé. Afin d'annuler la préparation de commande et refaire la mise en stock dans le magasin.
  > Remarque : On considère que tous les autres flux "retour " sont redirigés vers Schaerbeek qui dispatchera, au besoin,  vers les DC's ==> STO normal 
- **D « Etape processus »** : _08_Autre_Anders
- **E « Etape sous-processus »** : Autre
- **F « Sujets communs »** : Retour
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Hors scope -> Le mag2/8 effectue un STO de retour vers le répartiteur (GZH/Sch/Ronet)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 08-010
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 114
Mots-clés trouvés : refus

- **A « Num ligne »** : 113
- **B « Source »** : Peter
- **C « Idée de base »** : (art. non conformes) Het systeem moet kunnen aanduiden, wanneer op basis van afmetingen/volumetrie, een stock dermate verminderd is, waardoor een transfert naar een kleinere locatie aanbevolen wordt.
- **D « Etape processus »** : _04_Stockage_Opslag
- **E « Etape sous-processus »** : 004 Gérer les mouvements internes
- **F « Sujets communs »** : Optimisation
- **G « Type »** : BR
- **H « Texte d'origine »** : NL
- **I « Numéro »** : 010
- **J « NR BR »** : BR-04-004-010
- **K « Description formalisée FR »** :
  > Le système doit pouvoir proposer à l'utilisateur d'optimiser le stockage (passage d'un type de magasin (ex Rack) vers un autre type de magasin (ex VNS) 
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser?
  > ex : une palette pleine n'a plus que qq articles -> la palette devient une boîte.
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 04-004
- **X « Couvert par »** : EWM Standard
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 123
Mots-clés trouvés : 122

- **A « Num ligne »** : 122
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Suite à un picking, si la bin est vide, le magasinier doit pouvoir confirmer qu'il n'y a plus d'article -> l'inventaire sur cette bin doit être pris en compte
- **D « Etape processus »** : _04_Stockage_Opslag
- **F « Sujets communs »** : Bin vide
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Voir ligne 113
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 129
Mots-clés trouvés : avoir

- **A « Num ligne »** : 128
- **B « Source »** : Philippe / Manon
- **C « Idée de base »** :
  > Le sytème doit pouvoir nous piloter dans la gestion du stock dormant:
  > - Produire un rapport d'articles qui sont sans mouvements depuis X temps (par ex: 1 an)
  > - Créer une vague d'inventaire sur base du rapport pour recompter physiquement ce stock et filmer la palette + créer une étiquette avec article, desc, date, mention "stock dormant",...
  > - Créer une vague de picking sur ce stock dormant afin de de relocaliser en zone de massification => densifier les HU dormantes dans une HU globale + mettre en stock dans une bin où il peut déjà y avoir d'autres HU
- **D « Etape processus »** : _04_Stockage_Opslag
- **E « Etape sous-processus »** : 005 Gérer le stock dormant
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-04-005-010
- **K « Description formalisée FR »** :
  > Le sytème doit pouvoir nous piloter dans la gestion du stock dormant:
  > - Produire un rapport d'articles qui sont sans mouvements depuis X temps (par ex: 1 an)
  >
  > - Créer une vague de picking sur ce stock dormant afin de le relocaliser en zone de massification => densifier les HU dormantes dans une HU globale + mettre en stock dans une bin où il peut déjà y avoir d'autres HU
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 04-005
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 130
Mots-clés trouvés : mitraille

- **A « Num ligne »** : 129
- **B « Source »** : Philippe / Manon
- **C « Idée de base »** : Le système doit pouvoir nous piloter dans la gestion du stock non-conforme: produire un rapport d'articles en stock déclarés morts ou (proches d'être) périmés
- **D « Etape processus »** : _04_Stockage_Opslag
- **E « Etape sous-processus »** : 002 Gérer les articles FEFO
- **F « Sujets communs »** : Date péremption
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-04-002-010
- **K « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Rapport pour les articles bientôt périmés
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 04-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 131
Mots-clés trouvés : mitraille, fournisseur

- **A « Num ligne »** : 130
- **B « Source »** : Philippe / Manon
- **C « Idée de base »** :
  > Le système doit permettre:
  > - au magasinier de signaler une anomalie constatée (marchandise déteriorée ou qui ne correspond pas aux caractéristiques) et de remonter l'info aux coordinateurs (mail + photo)
  > - au coordinateur d'assurer le suivi de l'anomalie (vague de mitraille, plainte fournisseur,...)
- **D « Etape processus »** : _04_Stockage_Opslag
- **E « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **F « Sujets communs »** : Quarantaine
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-04-001-010
- **K « Description formalisée FR »** :
  > Le système doit permettre l'ajout d'une pièce jointe (ex photo) pour enrichir une plaine
  > BR Nice to have
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 04-001
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 132
Mots-clés trouvés : refus

- **A « Num ligne »** : 131
- **B « Source »** : Jelena
- **C « Idée de base »** : Le flux de communication autour de l'acceptation / refus de lot d'inspection - visuel et par e-mail - doit être rediscuté et traduit en Business Requirements
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-02-000-020
- **K « Description formalisée FR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-000
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 134
Mots-clés trouvés : refus

- **A « Num ligne »** : 133
- **B « Source »** : Jonathan
- **C « Idée de base »** :
  > Une palette P2 a été placée dans une bin P4 => il faut remettre en P2
  > Une palette d'un article type A qui est dans une BIN type B (classification ABC) doit pouvoir être identifié pour renvoyer dans la bonne zone
- **D « Etape processus »** : _04_Stockage_Opslag
- **E « Etape sous-processus »** : 004 Gérer les mouvements internes
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-04-004-020
- **K « Description formalisée FR »** :
  > Le système doit pouvoir relancer une optimisation du stockage (ex : une petite palette dans une bin qui permet de 
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser?plus grandes palettes, ou dans le mauvais type de rotation de stock)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 04-004
- **X « Couvert par »** : EWM Standard
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 136
Mots-clés trouvés : retour

- **A « Num ligne »** : 135
- **B « Source »** : Mathieu Raison
- **C « Idée de base »** :
  > Omzetting van ATB --> STO: beperkt tot 1x/week om de ATBs te laten consolideren (bv. in geval van retours in SP) --> anders kan het voor ruimteproblemen zorgen in SPs (artikelen zijn geretourneerd in SPs maar zijn tussentijd al gepikt in DCs)
  > + JVC/MR 21/11: 
  > - Ronet: job DA tourne tous les jours, job DA --> STO tourne la veille de la prépa.
  > - A GZH: pick tous les jours
  > Il faut le même fonctionnement std pour tous les SPs/DCs 
  >
- **D « Etape processus »** : _08_Autre_Anders
- **E « Etape sous-processus »** : Autre
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Hors scope - Flux MRP en amont de eWM.
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 08-010
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 150
Mots-clés trouvés : retour

- **A « Num ligne »** : 149
- **B « Source »** : Mathieu Raison
- **C « Idée de base »** :
  > Retours?
  >
- **D « Etape processus »** : _08_Autre_Anders
- **E « Etape sous-processus »** : Autre
- **F « Sujets communs »** : Retour
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Repris dans "Num ligne 208"
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 08-010
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 152
Mots-clés trouvés : avoir

- **A « Num ligne »** : 151
- **B « Source »** : Jelena
- **C « Idée de base »** : Après avoir choisi le document - base de picking, est-ce que c'est utile de clarifier, via BR, d'où et comment ce document est généré ? 
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 004 Lancer les vagues de picking
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 05-004
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 154
Mots-clés trouvés : retour, fournisseur

- **A « Num ligne »** : 153
- **B « Source »** : Christophe
- **C « Idée de base »** : Le système doit pouvoir, en cas de non conformité (QA & #) traiter les retours de commandes (PO's) vers le fournisseurs afin de mettre le matériel à disposition pour enlèvement et de tracer ce flux retour.
- **D « Etape processus »** : _08_Autre_Anders
- **E « Etape sous-processus »** : Autre
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Repris dans "Num ligne 223"
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 08-010
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 155
Mots-clés trouvés : retour, refus, litige, fournisseur

- **A « Num ligne »** : 154
- **B « Source »** : Christophe
- **C « Idée de base »** : Le système doit pouvoir tracer le retour d'une quantité trop livrée si l'acheteur refuse une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** : Overdelivery
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 110
- **J « NR BR »** : BR-01-003-110
- **K « Description formalisée FR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 157
Mots-clés trouvés : litige

- **A « Num ligne »** : 156
- **B « Source »** : Workshop
- **D « Etape processus »** : _01_Réception_Ontvangst
- **E « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **F « Sujets communs »** : Scan bon livraison
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 080
- **J « NR BR »** : BR-01-003-080
- **K « Description formalisée FR »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …) 
- **L « Repl »** : 1
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 01-003
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 158
Mots-clés trouvés : labo

- **A « Num ligne »** : 157
- **B « Source »** : Wk prep QM
- **C « Idée de base »** : Il doit être possible, pour tout article à inspecter, de tracer la marchandise dans son flux externe (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **I « Numéro »** : Annulé
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 159
Mots-clés trouvés : refus, labo, échantillon

- **A « Num ligne »** : 158
- **B « Source »** : Wk prep QM
- **C « Idée de base »** : Il doit être possible de prendre la DU (acceptée / partiellement acceptée / refusée) sur un lot d'inspection que la marchandise est entièrement envoyée pour inspection / seul un échantillon est envoyé (= types magasin différents)
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-02-000-010
- **K « Description formalisée FR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-000
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 160
Mots-clés trouvés : retour, refus, rebut, fournisseur

- **A « Num ligne »** : 159
- **B « Source »** : Démo QM
- **C « Idée de base »** : Il faut pouvoir identifier le matériel rebuté en entier ou en partiel pour le retour fournisseur (étiquette)
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-02-002-030
- **K « Description formalisée FR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 161
Mots-clés trouvés : retour, refus, fournisseur

- **A « Num ligne »** : 160
- **B « Source »** : Démo QM
- **C « Idée de base »** : HU Managed pour le retour fournisseur, identifié dans eWM tant que c'est dans le magasin
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-02-002-010
- **K « Description formalisée FR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 162
Mots-clés trouvés : refus, fournisseur, 161

- **A « Num ligne »** : 161
- **B « Source »** : Démo QM
- **C « Idée de base »** : Il faut pouvoir contrôler que le fournisseur enlève la bonne HU refusée, même s'il y a le même matériel se trouve dans la même zone. Scan à l'enlèvement par le fournisseur
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 050
- **J « NR BR »** : BR-02-002-050
- **K « Description formalisée FR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 163
Mots-clés trouvés : refus, fournisseur

- **A « Num ligne »** : 162
- **B « Source »** : Démo QM
- **C « Idée de base »** : Quand on contacte le fournisseur, dans SAP on a besoin d'une expédition / enlèvement à prévoir, une espèce bon 8K, le fournisseur transmet le N° de doc au transporteur. Ce doc assure le suivi à l'exped.
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **E « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **G « Type »** : BR
- **H « Texte d'origine »** : FR
- **I « Numéro »** : 040
- **J « NR BR »** : BR-02-002-040
- **K « Description formalisée FR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 02-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 164
Mots-clés trouvés : refus

- **A « Num ligne »** : 163
- **B « Source »** : Démo QM
- **D « Etape processus »** : _02_CheckQM_Qmverificatie
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Le système doit permettre au controlleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : #N/A
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 166
Mots-clés trouvés : fournisseur

- **A « Num ligne »** : 165
- **B « Source »** : Philippe de Montjoye
- **C « Idée de base »** : Pour un article géré par lot avec date de péremption ou sans, il faut garantir la présence de l'étiquette sur chaque pièce individuelle en format data matrix scannable dans les self-scans SP
- **D « Etape processus »** : _06_Expédition_Verzending
- **E « Etape sous-processus »** : Réception chez le client…
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** :
  > Hors scope (cette question doit être réglée en amont d'eWM)
  > L'étiquettage doit être effectué chez le fournisseur
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 06-004
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 168
Mots-clés trouvés : avoir

- **A « Num ligne »** : 167
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Tous les articles qui sont soumis à immatriculation doivent avoir un numéro de nomenclature (plus de Non NN) afin de gérer les flux articles avec la traçabilité classique de SAP
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 001 Faire immatriculer les articles
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Hors scope
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 05-001
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 169
Mots-clés trouvés : mitraille

- **A « Num ligne »** : 168
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > Le système doit permettre d'effectuer une sortie de marchandises de manière distincte (via des codes mouvements différents? / Via des imputations spécifiques?...) pour 
  > - les articles Z3 (à mitrailler)
  > - articles périmés 
  > - articles déteriorés
  > afin de pouvoir distinguer les types de sortie de marchandises
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 002 Gérer la mitraille
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** :
  > Hors scope eWM2.0.
  > Imputation IM
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 05-002
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 170
Mots-clés trouvés : avoir

- **A « Num ligne »** : 169
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > Avoir des HU de préparation liées au bon 8* sans référence
  > Ces HU sont liés à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 003 Créer le bon sans référence
- **F « Sujets communs »** : Bon sans réf
- **G « Type »** : BR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-05-003-010
- **K « Description formalisée FR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-003
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 172
Mots-clés trouvés : avoir

- **A « Num ligne »** : 171
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) afin de préparer le huddle de J-1
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 004 Lancer les vagues de picking
- **G « Type »** : BR
- **I « Numéro »** : 040
- **J « NR BR »** : BR-05-004-040
- **K « Description formalisée FR »** :
  > A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) (= vagues de picking) afin de préparer le huddle de J-1
  > -> std eWM
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-004
- **X « Couvert par »** : EWM Standard
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 175
Mots-clés trouvés : avoir

- **A « Num ligne »** : 174
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Les coordinateurs doivent pouvoir créer manuellement de nouvelles vagues de picking dans le but de gérer les demandes ponctuelles / urgentes
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 004 Lancer les vagues de picking
- **G « Type »** : BR
- **I « Numéro »** : 080
- **J « NR BR »** : BR-05-004-080
- **K « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de lancer une tâche de picking en plus de la vague initalement prévue (cas des demandes ponctuelles (ex  j'ai besoin d'un ruban d'imprimante / urgentes)
  > -> std eWM
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-004
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 181
Mots-clés trouvés : avoir

- **A « Num ligne »** : 180
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > En fonction de la localisation des articles et du volume à picker, les coordinateurs doivent avoir la possibilité de choisir si le picking s'effectuera par 
  > - poste de travail / clients (= multi-picking)
  > - client / poste de travail (= picking par destination)
  > * poste de travail = LR35, TOUR, ETAG, ...
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 004 Lancer les vagues de picking
- **G « Type »** : BR
- **I « Numéro »** : 100
- **J « NR BR »** : BR-05-004-100
- **K « Description formalisée FR »** :
  > Le picking doit s'effectuer par aire d'activité / clients (= multi-picking).
  > Il doit être possible d'isoler un client dans des vagues de picking séparées
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-004
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 199
Mots-clés trouvés : avoir

- **A « Num ligne »** : 198
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** :
  > Lors de la consolidation d'un client : 
  >   - le magasinier scanne une première HU de préparation afin que le système active la consolidation de ce client
  >   - Si le picking du client n'est pas terminé, un message d'avertissement doit être affiché pour prévenir le magasinier
  >   - le magasinier précise ensuite le type d'HU d'expédition nécessaire (palette, boîte) et éventuellement le nombre de HU si connu.
  >   - Une étiquette de HU d'expédition est imprimée   
  >   - La liste des BIN de consolidation est affichée à l'écran du scanner
  >   - Le magasinier choisit l'ordre des HU de préparation à consolider et les confirme au fur et à mesure
  >   - Chaque HU de préparation et la HU d'expédition doivent être scannées afin de confirmer que la HU de préparation a quitté la BIN de consolidation et qu'elle est maintenant dans la HU d'expédition
  >   - Le magasinier doit avoir la possibilité d'imprimer une nouvelle HU d'expédition si la HU précédente est physiquement pleine
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 006 Consolider la marchandise
- **G « Type »** : BR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-05-006-010
- **K « Description formalisée FR »** :
  > Une fois le picking pour une logique de consolidation terminé, le système doit permettre le pilotage de l'emballage des HU de préparation (HU non gérée en stock y compris) afin d'obtenir des HU d'expédition
  >
  > Il existe plusieurs logiques de consolidation : par destination / COPO / réservation? / ODD
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-006
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 206
Mots-clés trouvés : NNN

- **A « Num ligne »** : 205
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Pouvoir associer une livraison de marchandises NNN / cons directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.
- **D « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **E « Etape sous-processus »** : 006 Consolider la marchandise
- **F « Sujets communs »** : Bon sans réf
- **G « Type »** : BR
- **I « Numéro »** : 050
- **J « NR BR »** : BR-05-006-050
- **K « Description formalisée FR »** :
  > Pouvoir associer une livraison de marchandises NNN / cons directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.
  > -> Tracking de HU : localisation et statut
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 05-006
- **X « Couvert par »** : EWM Bascoup
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 209
Mots-clés trouvés : retour

- **A « Num ligne »** : 208
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Qui s'occupe des retours? Comment?
- **D « Etape processus »** : _08_Autre_Anders
- **E « Etape sous-processus »** : Autre
- **F « Sujets communs »** : Retour
- **G « Type »** : BR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-08-010-030
- **K « Description formalisée FR »** : Le système doit pouvoir gérer des HU non nomenclaturées qui peuvent entrer, être mises en cross-dock et ressortir ensuite pour être expédié vers le DC Sch
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 08-010
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 223
Mots-clés trouvés : avoir

- **A « Num ligne »** : 222
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Le coordinateur doit avoir la possibilité de créer des demandes de transport exceptionnelles (hors EDI) vers un transporteur accrédité qui n'a pas de contrat
- **D « Etape processus »** : _06_Expédition_Verzending
- **E « Etape sous-processus »** : 001 Demander le transport
- **G « Type »** : BR
- **I « Numéro »** : 050
- **J « NR BR »** : BR-06-001-050
- **K « Description formalisée FR »** : Possibilité d'utilisation de l'EDI light avec envoi au transporteur avant la sortie de marchandise
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 06-001
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 224
Mots-clés trouvés : retour, litige, fournisseur, NNN, avoir

- **A « Num ligne »** : 223
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Le coordinateur doit avoir la possibilité de créer des demandes d'enlèvement (hors EDI) sans lien avec une facturation
- **D « Etape processus »** : _06_Expédition_Verzending
- **E « Etape sous-processus »** : 002 Mise à disposition pour enlèvement
- **G « Type »** : BR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-06-002-010
- **K « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de créer une référence unique qui permet de regrouper plusieurs HU afin d'identifier la marchandise à enlever de manière univoque (cette référence unique est remise au fournisseur -> Le transporteur se présente alors au comptoir avec cette référence unique)
  > (ex : retour litige fournisseur, enlèvement d'un NNN/cons directe,...)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 06-002
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 227
Mots-clés trouvés : avoir

- **A « Num ligne »** : 226
- **B « Source »** : Philippe / Manon / Delphine
- **C « Idée de base »** : Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises
- **D « Etape processus »** : _06_Expédition_Verzending
- **E « Etape sous-processus »** : 003 Charger les marchandises
- **G « Type »** : BR
- **I « Numéro »** : 020
- **J « NR BR »** : BR-06-003-020
- **K « Description formalisée FR »** : Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 06-003
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 236
Mots-clés trouvés : 107, 109

- **A « Num ligne »** : 235
- **B « Source »** : Christophe
- **C « Idée de base »** : Liste des Po line en étape 107, mais pas encore finalisé en 109 (# jours)
- **D « Etape processus »** : _07_Reporting
- **E « Etape sous-processus »** : 002 Réception
- **G « Type »** : BR
- **I « Numéro »** : Annulé
- **K « Description formalisée FR »** : Le rapport opérationnel 107-109 existe déjà
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : Annulé
- **W « Code Proc-SsProc »** : 07-002
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 239
Mots-clés trouvés : litige, 107, 109

- **A « Num ligne »** : 238
- **B « Source »** : Christophe
- **C « Idée de base »** : Rapport par PO line, par période,  sur les anomalies détectées à la réception étape 107 & 109
- **D « Etape processus »** : _07_Reporting
- **E « Etape sous-processus »** : 002 Réception
- **F « Sujets communs »** : Customer Care
- **G « Type »** : BR
- **I « Numéro »** : 030
- **J « NR BR »** : BR-07-002-030
- **K « Description formalisée FR »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 07-002
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

#### Business_Requirements.xlsx — onglet « BR - Feuille de travail », ligne 247
Mots-clés trouvés : avoir

- **A « Num ligne »** : 246
- **B « Source »** : WS Reporting
- **D « Etape processus »** : _07_Reporting
- **E « Etape sous-processus »** : 006 Prep expédition
- **G « Type »** : BR
- **I « Numéro »** : 010
- **J « NR BR »** : BR-07-006-010
- **K « Description formalisée FR »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **S « Geformaliseerde beschrijving NL »** : #NAME?
- **U « Statut »** : OK
- **W « Code Proc-SsProc »** : 07-006
- **X « Couvert par »** : Gap
- **AE « Count »** : 0

### Onglet « Business Requirements 20260220 » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 2
Mots-clés trouvés : refus

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 000 Commun aux sous-processus
- **C « NR BR »** : BR-01-000-010
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Vérif doc)
  > x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit permettre une solution intégrée : une seule façon de réceptionner / refuser des livraisons (STO, PO..) afin de standardiser / simplifier / faciliter l'apprentissage + reporting
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet een geïntegreerde oplossing mogelijk maken: een enkele manier om leveringen te ontvangen/weigeren (STO, PO, enz.) om het leerproces en de rapportage te standaardiseren/vereenvoudigen/bevorderen

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 3
Mots-clés trouvés : retour, NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 000 Commun aux sous-processus
- **C « NR BR »** : BR-01-000-020
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** :
  > x
  > x
- **F « Description formalisée FR »** : Le système doit permettre d'effectuer une demande de mise à jour des master data (flux d'appro / master data locale / dynamics…?) afin d'augmenter la qualité de la base de données et de faciliter la communication avec MMD (voir aussi 'PACI' GZH)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > BR liés : BR-01-000-020, BR-01-005-010, BR-01-005-040 et BR-01-005-050
  > 06-07-2026 : Suite discussion avec JST, Philippe, Manon : 
  > - A la deuxième étape de la réception (et uniquement à ce moment là) : 
  >   > Pouvoir initier le flux de modification d'une donnée qui se trouve dans Master Data IM (champ texte, photo...). L'initiation de la demande est obligatoire. Tant que ce n'est pas fait, le flux est bloqué. Il doit être possible de suspendre cette obligation temporairement à l'initiative du DC pour palier à des contraintes opérationnelles.
  >   > Pouvoir modificer une donnée qui se trouve dans Master Data eWM -> Nous en sommes owners; toute personne du DC doit pouvoir modifier ces champs. La modification est obligatoire. Tant que ce n'est pas fait, le flux est bloqué. Il doit être possible de suspendre cette obligation temporairement à l'initiative du DC pour palier à des contraintes opérationnelles.
  >   > Pour les champs pour lesquels une info doit exister (photo, poids, dimensions, emballage primaire, caractère dangereux, aire de stockage...) : une popup doit apparaître au magasinier lui indiquant que la valeur est manquante et lui permettant (obligatoire) de lancer un flux de mise à jour (MD-IM) le mettre à jour (MD-eWM)
  > NB : A Ronet, ils font déjà l'exercice d'encoder dans Fox des informations qui pourront être reprises dans eWM
  > Retour de GZH (Bart Pillen) 05/08/2026 :
  > Oorspronkelijk :
  > 	Ontvangst onmogelijk wanneer data ontbrekend
  > 	Blocage afgezet na aantal weken, wegens te groot volume dat niet werd ontvangen
  > 	Input data : afin d'assurer la cohérence et fiabilité des données encodées, il faudrait écrire des guidelines ou cadenasser les champs ex. Format (dd/mm/yy), nombre de chiffres après la virgule
  > 	Alternative : bloquer la réception seulement pour certains champs, qui contiennent des infos nécessaires au DC
  > 	Rôle : pas confier à tout le monde > limiter à certains profils (assurer fiabilité input > coordinateur)
- **I « BA - actions
docu »** : #VALUE!
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om een aanvraag tot update van de masterdata (appro-flow / lokale masterdata / dynamics...?) uit te voeren om de kwaliteit van de database te verbeteren en de communicatie met MMD te vergemakkelijken.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 4
Mots-clés trouvés : retour, refus, litige

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « NR BR »** : BR-01-001-010
- **D « BR intégré dans flux eWM2.0 »** : x (Vérif doc)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit permettre au magasinier de gérer la check list d'acceptation/refus d'une livraison afin de garantir le suivi de la check list et la traçabilité des raisons du refus
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 25-06-2026 : proposition BRM : tuile dans Fiori où chaque litige sera répertorié. -> Chaque équipe identifiée aura accès à cette tuile avec un filtre sur son domaine d'expertise. Le détail de ce concept sera défini lors des gaps. -> ok pour JST ? Oui
  > 25-06-2026 : remarque : question pour BRM : quid d'un besoin de retour vers le DC? 
  > 29-06-2026 : réponse BRM : Le retour d'info ne sera pas géré via cette base de données. -> Ce sujet est encore à développer. Relancer Christophe pour voir où il en est dans son analyse
  > 02-07-2026 : retour de Christophe par mail : "Je prévois de finaliser pour fin de semaine 29 (17-07-2026)"
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de magazijnmedewerker in staat stellen de checklist voor aanvaarding/weigering van een levering te beheren om de opvolging van de checklist en de traceerbaarheid van de redenen voor weigering te garanderen
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 5
Mots-clés trouvés : refus

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « NR BR »** : BR-01-001-020
- **D « BR intégré dans flux eWM2.0 »** : x (Vérif doc)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Lors de la vérification de la check list, recevoir une information dès l'entrée du numéro de PO s'il y a un lot d'inspection attendu afin de pouvoir décider de la réception/refus de l'article plus rapidement
- **J « Geformaliseerde beschrijving NL »** : Bij het controleren van de checklist ontvang je bij het invoeren van het PO-nummer informatie als er een inspectiebatch wordt verwacht, zodat je sneller kan beslissen of het artikel wordt aanvaard of geweigerd.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 6
Mots-clés trouvés : refus

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « NR BR »** : BR-01-001-030
- **D « BR intégré dans flux eWM2.0 »** : x (Vérif doc)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit permettre aux magasiniers d'identifier le matériel soumis à un contrôle qualité chez le fabricant (B678 - document d'inspection 0101) refusé afin de refuser le déchargement
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet magazijnmedewerkers in staat stellen om materiaal te identificeren dat bij de fabrikant aan een kwaliteitscontrole is onderworpen (B678 - inspectiedocument 0101) en is geweigerd, zodat het lossen kan worden geweigerd.
- **N « QM »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 8
Mots-clés trouvés : refus, avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « NR BR »** : BR-01-001-050-00
- **D « BR intégré dans flux eWM2.0 »** : Voir Split
- **F « Description formalisée FR »** :
  > Le système doit attirer l'attention du magasinier sur des conditions particulières précisées au préalable dans le PO (telle que contrôler visuellement le colisage) afin  d'éviter la réception d'articles potentiellement défectueux
  > Le magasinier doit confirmer le contrôle et introduire des photos
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > BR liés : BR-01-001-050-00 (A et B), BR-01-003-040
  > 02-06-2026
  > Fiche article champ "Texte d'inspection" prévu pour le contrôle visuel du colisage.
  > -> On souhaite un autre champ dans le PO?? -> A voir avec Philippe et Manon
  > besoin de 2 ordres =
  > - l'acheteur/copo (en amont de la chaîne) doivent avoir la possibilité de transmettre une info particulière destinée au magasinier au moment de la vérification doc / REC1 / REC2 (ex. emballage spécifique, personnes à contacter, ..... autres points d'attention)
  > - possbilité (dès que possible) de joindre des éléments informatifs (photos, free text, ....) à la livraison (refus de livraison)
  > 25-06-2026 : Discuté avec BRM
  > 25-06-2026 : Voir avec JST si vraiment nécessaire. 
  > 25-06-2026 : Vu avec JST : 
  >   - Pouvoir faire apparaître le champ de la fiche article
  >   - Activer la fonctionnalité du contrôle qualité par le DC (on ne part pas sur le solution d'un champ dans le PO qui serait compléter par Repl)
  > 29-06-2026 : info remise à BRM
  > 29-06-2026 : rechallenger la solution du contrôle qualité par le DC avec JST. Est-ce vraiment justifié de bloquer des articles/facturation, split des articles (Q/stock), de lancer tout le processus de contrôle qualité? (voir BR-01-001-050-B) -> 06-07-2026 : si nécessaire, oui
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet de magazijnmedewerker wijzen op bijzondere voorwaarden die vooraf in de PO zijn vermeld (zoals het visueel controleren van de verpakking) om te voorkomen dat mogelijk defecte artikelen in ontvangst worden genomen.
  > De magazijnmedewerker moet de controle bevestigen en foto's invoeren.
- **K « Repl »** : 1
- **N « QM »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 12
Mots-clés trouvés : litige, fournisseur

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « NR BR »** : BR-01-001-070
- **D « BR intégré dans flux eWM2.0 »** : x (Vérif doc)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : le système doit générer le code signature aléatoire au moment de la check list et l'associer à la livraison entrante afin de facilement pouvoir retrouver le code en cas de litige avec le fournisseur / transporteur
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 02-06-2026
  > Code générique à la journée ou à la livraison entrante?
  > - Si code à la journée risque que le transporteur le note lui-même et s'en aille
  > - Si code à chaque livraison entrante, la livraison entrante doit être complétée à ce moment là
  > (+ question de l'acceptation sous réserves -> incident à générer??)
  > -> A voir avec JST
  > 12-06-2026 : On garde la possibilité de générer un code par livraison (sert également de contrôle du travail du magasinier : passer par la checklist). La réception 1 reste une seconde étape mais doit être effectuée le jour de la livraison
  > (impression d'une étiquette avec le code du jour que le magasinier collera sur le BL du fournisseur et sera scanné lors du VL32N). Le code ne doit pas nécessairement être lié au 18* dans le système
  > 15-06-2026 : discuté avec BRM
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet op het moment van de checklist een willekeurige handtekeningcode genereren en deze koppelen aan de inkomende levering, zodat de code gemakkelijk kan worden teruggevonden in geval van een geschil met de leverancier/vervoerder.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 13
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « NR BR »** : BR-01-002-010
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet aan het einde van de eerste stap aangeven dat het artikel niet voor de voorraad is (NNN / directe consumptie) om de juiste stroom voor de tweede stap te bepalen.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 14
Mots-clés trouvés : NNN, avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « NR BR »** : BR-01-002-020-00
- **D « BR intégré dans flux eWM2.0 »** : Voir Split
- **F « Description formalisée FR »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que 
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO) 
  > - et que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 08-07-2026 : Comment savoir si un NNN/cons direct devra être enlevé sur site par le demandeur ou expédié lors de la prochaine tournée?
  > 10-07-26 follow-up BP : règle > les articles NNN / cons direct sont expédiés
- **J « Geformaliseerde beschrijving NL »** :
  > Zodra de ontvangst van een artikel NNN/directe consumptie is gebeurd, moet er automatisch een e-mail naar de aanvrager worden gestuurd met de volgende informatie 
  > - zijn materiaal is beschikbaar (info: het HU-nummer / de locatie / PO-nummer) 
  > - en dat zijn materiaal met de volgende rit zal worden verzonden
  > om de traceerbaarheid van de artikelen te garanderen
  > (tenzij anders aangegeven door de TOM)
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 15
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « NR BR »** : BR-01-002-020-A
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 NNN)
- **F « Description formalisée FR »** : Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel est arrivé au DC (info : le numéro de HU / la localisation / num PO) 
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 08-07-2026 : Comment savoir si un NNN/cons direct devra être enlevé sur site par le demandeur ou expédié lors de la prochaine tournée?
  > 10-07-26 follow-up BP : règle > les articles NNN / cons direct sont expédiés

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 16
Mots-clés trouvés : NNN, avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « NR BR »** : BR-01-002-020-B
- **D « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée
  > afin d'avoir une traçabilité des articles
  > (sauf contre-indication par le TOM)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 08-07-2026 : Comment savoir si un NNN/cons direct devra être enlevé sur site par le demandeur ou expédié lors de la prochaine tournée?
  > 10-07-26 follow-up BP : règle > les articles NNN / cons direct sont expédiés

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 18
Mots-clés trouvés : litige, fournisseur, 107

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-020-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > - Dans le cas d'un overdelivery détecté sur le bon de livraison, pouvoir encoder les qtés inscrites sur le bon de livraison en 1ere étape de livraison.
  >
  > Il doit être possible d'identifier la localisation du matériel dans l'entrepôt --> les colis de l'étape 1 doivent être visibles dans eWM.
  > '- Est-ce que nous bloquons la quantité totale ou bien l'overdelivery sur la ligne de commande concernée ? --> on bloque la ligne de la livraison concernée globale (les autres lignes ne sont pas bloquées.
  > Seul le mouvement 107 est généré sur les articles dont les quantités sont correctes.
  > Le mouvement 107 n'est pas généré pour l'article en litige.
  > Il ne doit pas être possible d'effectuer la 2e étape de réception pour la ligne concernée tant que la décision sur l'overdelivery n'a pas été prise et mise en place. Après la régularisation, la deuxième étape devient possible
  >
  > Un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **J « Geformaliseerde beschrijving NL »** :
  > - Als een overdelivery op de leveringsbon wordt vastgesteld, moet het mogelijk zijn om de hoeveelheden die op de leveringsbon vermeld staan in de eerste leveringsfase in te voeren.
  >
  > Het moet mogelijk zijn om de locatie van het materiaal in het magazijn te identificeren --> de pakketten van stap 1 moeten zichtbaar zijn in eWM.
  > '- Blokkeren we de totale hoeveelheid of de overdelivery op de betreffende orderregel? --> we blokkeren de betreffende globale orderregel (de andere regels worden niet geblokkeerd).
  > Alleen beweging 107 wordt gegenereerd voor artikelen met de juiste hoeveelheden.
  > Beweging 107 wordt niet gegenereerd voor het betwiste artikel.
  > Het mag niet mogelijk zijn om de tweede ontvangststap voor de betreffende regel uit te voeren zolang er geen beslissing over de overdelievery is genomen en uitgevoerd. Na regularisatie wordt de tweede stap mogelijk
  >
  > Er wordt automatisch een geschil aangemaakt met :
  > - de info van de PO
  > - artikel bevestigd
  > - extra hoeveelheid
  > - locatie van de betrokken regel in SAP
  > Dit om de extra geleverde hoeveelheden op leverancier (fout leverancier / Infrabel) + locatie te traceren
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 22
Mots-clés trouvés : litige, 107

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-020-D
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Dans le cas d'un overdelivery détecté sur le bon de livraison, seul le mouvement 107 est généré sur les articles dont les quantités sont correctes. Le mouvement 107 n'est pas généré pour l'article en litige.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 24
Mots-clés trouvés : litige, fournisseur

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-020-F
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités supplémentaires livrées par fournisseur (erreur fournisseur / Infrabel) + emplacement
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 25
Mots-clés trouvés : retour, avoir, 107

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-030
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 stock)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit permettre, en amont de la 1ière étape, d'indiquer une priorité sur un article qui nécessite une procédure d'urgence afin que le magasinier soit au courant et puisse prendre les actions nécessaires (=by-passer le FIFO) à la deuxième étape de la réception.
  > Replenishment doit avoir la possibilité d'indiquer dans SAP (dans PO? / MD04?) cette notion d'urgence
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 02-06-2026
  > A rediscuter avec Christophe. Un T8/T9 ne peut être fait que s'il y a déjà du stock
  > Retour de Christophe le 16-06-2026 : 
  > - Urgence T8/T9 :
  > Urgence sur base d’un STO :
  > Création d’une « Route » = T8-T9 🡺 Mais uniquement s’il y a du stock dans le magasin.
  > Et cela déclenche l’impression d’’étiquette sur base de la création d’un bon « 8000 ».
  > Cette étiquette sort sur une imprimante dédiée et localisée dans le magasin.
  > -> Géré hors eWM 2.0.
  >
  > - Urgence sur article pas en stock :
  >  !!! Encore à développer !!!
  > Le STO sera identifié avec une « Route » = ?? (Encore à définir)
  > STO urgent mais stock inexistant ou insuffisant et en attente de livraison.
  > Il faut alors pouvoir prévenir le magasinier « Warning » lors de la 1° étape (107) de réception pour l’avertir que le NN est urgent et doit être traité de manière urgente.
  > Stocker alors dans une zone tampon pour traiter la réception et le picking de façon plus rapide.
  > -> Géré par eWM 2.0.
  >
  > 25-06-2026 : discuté avec BRM. Voir avec JST. Quelle est la définition de l'urgence? L'urgence est sur l'article (la date du besoin est proche ou dépassée) et non sur le besoin du COPO -> On devrait alors parler d'un article à traiter en "priorité" (1ère étape / 2ième étape..) et non d'urgence. A distinguer d'une vraie urgence (T8/T9) sur un article qui n'est pas en stock (comme déjà connu à Sch où Peter a été appelé)
  > 25-06-2026 : discuté avec JST. 2 situations possibles : 
  >    -> mettre l'article en "priorité" mais on garde le flux complet (rec doc / rec1 / rec2 / putaway (peut-être dans des rack "Cross Dock"?) / picking...)
  >    -> création d'un nouveau Txx (T7?) pour un T8/T9 d'un article pas en stock (déjà en cours de discussion hors eWM2.0) -> correspond au besoin de Christophe
  >
  > A ajouter dans fichier "Input à valider" -> Gilles
  > Principes à prendre en compte dans la définition de priorisation : 
  > - Tenir compte de la date de besoin d’un article
  > - Chaque réception d’articles doit pouvoir être flagué manuellement (timestamp + user id de la personne qui émet le flag) afin d’assurer un traitement prioritaire lors de l’inbound du DC (piste de solution ? : flag du CRD dans tcode ZQM_QC-GR)
  > - FIFO
  > - ...
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet het mogelijk maken om, voorafgaand aan de eerste stap, een prioriteit aan te geven voor een item dat een spoedprocedure vereist, zodat de magazijnmedewerker hiervan op de hoogte is en de nodige actie kan ondernemen (= door de FIFO te omzeilen) in de 2e fase van de ontvangst.
  > Replenishment moet de mogelijkheid bieden om in SAP (in PO? / MD04?) deze notie van urgentie aan te geven
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 26
Mots-clés trouvés : NNN, avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-040
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** :
  > x
  > x
- **F « Description formalisée FR »** : Le système doit attirer l'attention du magasinier sur des remarques du DC sur certains articles
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > BR liés : BR-01-001-050-00 (A et B), BR-01-003-040
  > 29-06-2026 : A voir avec JST : est-ce que cela correspond au "contrôle qualité interne au DC" ou le champ "texte inspection" de la fiche article? Ou est-ce autre chose?
  > Le champ "texte inspection" sera déjà utilisé pour être affiché lors de la vérification documentaire
  > 06-07-2026 : discuté avec JST, Philippe et Manon :
  > - A la réception doc -> On check le PO, le lot d'inspection, conditions logistiques (pas de popup supplémentaire)
  > - A la 1ière étape -> Popup doit apparaître (ex : "attention article dangereux")
  > - A la 2ième étape -> Popup doit apparaître (ex : "merci de vérifier que les pieds sont bien livrés avec les armoires" - "merci de vérifier la couleur exacte de l'article"...). Sur 1 PO particulier ou sur un article particulier / en one shot ou tout le temps
  > - Contrôle qualité interne Infrabel -> Avoir la possibilité d'effectuer un contrôle au sein du DC
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de magazijnmedewerker attenderen op opmerkingen van het DC over bepaalde artikelen

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 27
Mots-clés trouvés : avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-050
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit permettre d'enregistrer la livraison de marchandises qui sera déchargée dans une autre zone du magasin (parc à câble, extérieur, Verdun...) afin d'avoir une traçabilité des marchandises déchargées et de l'endroit de déchargement.
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om de levering van goederen te registreren die in een ander deel van het magazijn (kabelpark, buiten, Verdun...) worden gelost, zodat de geloste goederen en de plaats van lossing traceerbaar zijn.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 29
Mots-clés trouvés : litige

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-080
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …) 
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de door de magazijnmedewerker gescande ontvangstdocumenten automatisch kunnen archiveren onder het betreffende PO-nummer, zodat aankopers de documenten in geval van een geschil (factuur, leveringsbewijs, enz.) gemakkelijker kunnen terugvinden.  
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 30
Mots-clés trouvés : avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-090
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit permettre de localiser les articles suite à la 1ière étape de réception afin de garantir un traitement FIFO à la deuxième étape
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 25-06-2026 : A la fin de la 1ière étape, met-on les articles dans une staging zone en vrac ou dans des BIN dans la staging zone?
  > Inconvénient : Scan des HU et BIN à la fin de la 1ière étape
  > Avantage : A à 2ième étape, on retrouve la HU plus facilement car guidé par le num de BIN
  > Techniquement on pourrait prévoir les 2 solutions et les activer ou pas en fonction du DC
  >  -> JST
  > 25-06-2026 : discuté avec JST -> on travaille avec des BIN. Prévoir la possibilité de mettre plusieurs HU dans une même BIN/staging zone. Avoir la possibilité de facilement créer de nouvelles BIN sans passer par BRM
  > 29-06-2026 : info remise à BRM
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om de artikelen na de eerste ontvangstfase te lokaliseren om een FIFO-verwerking in de tweede fase te garanderen.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 31
Mots-clés trouvés : litige, fournisseur

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-100
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 1)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de communication autour des litiges d'un PO. Eviter de poser la même question à un fournisseur par 3 personnes différentes d'Infrabel
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet een communicatiekanaal (geschillenbeheer) tussen de ontvangst, de replenishment en de andere diensten garanderen om problemen sneller te kunnen oplossen. Bijvoorbeeld door de communicatiegeschiedenis rond geschillen over een PO bij te houden.  Voorkom dat dezelfde vraag aan een leverancier door drie verschillende personen van Infrabel wordt gesteld.
- **K « Repl »** : 1
- **M « MMD »** : 1
- **N « QM »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 32
Mots-clés trouvés : retour, refus, litige, fournisseur

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 003 Réceptionner PO 1ière étape pour stock
- **C « NR BR »** : BR-01-003-110
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 stock)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de terugzending van een hoeveelheid naar de leverancier kunnen traceren als de aankoper de levering geheel of gedeeltelijk weigert, zodat dit kan worden gedocumenteerd in geval van een geschil over de facturering.
- **K « Repl »** : 1
- **N « QM »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 34
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **C « NR BR »** : BR-01-005-010
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** :
  > x
  > x
- **F « Description formalisée FR »** : Le système doit pouvoir au moment de la 2° étape de réception afficher la quantité contenue de l'emballage primaire de chaque article afin de, en cas de différence, faire remonter l'information
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > BR liés : BR-01-000-020, BR-01-005-010, BR-01-005-040 et BR-01-005-050
  > 29-06-2026 : Voir avec JST : l'emballage primaire = ?
  > 06-07-2026 : Emballage primaire = emballage qui touche l'article (ex : sachet dans le cadre des électrodes)
- **J « Geformaliseerde beschrijving NL »** : Bij de 2e ontvangstfase moet het systeem de hoeveelheid in de primaire verpakking van elk artikel kunnen weergeven, zodat bij verschillen de informatie kan worden doorgegeven.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 37
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **C « NR BR »** : BR-01-005-040
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** :
  > x
  > x
- **F « Description formalisée FR »** :
  > Le système doit permettre au magasinier de corriger/ajouter les photos, poids et dimensions d'un article dans les master data eWM à la réception afin d'augmenter la qualité de la base de données article.
  > Un flux d'ajout/correction des master data IM doit être également lancé.
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : BR liés : BR-01-000-020, BR-01-005-010, BR-01-005-040 et BR-01-005-050
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet de magazijnmedewerker in staat stellen om foto's, gewichten en afmetingen van een artikel in de eWM-masterdata bij ontvangst te corrigeren/toe te voegen om de kwaliteit van de artikeldatabase te verbeteren.
  > Er moet ook een flow worden gestart voor het toevoegen/corrigeren van IM-master data.
- **M « MMD »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 38
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **C « NR BR »** : BR-01-005-050
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** :
  > x
  > x
- **F « Description formalisée FR »** : Le système doit pouvoir bloquer la mise en stock si des informations mater data sont manquantes (photos, poids, dimensions, caractère dangereux..) (doit être désactivable) afin d'augmenter la qualité de la base de données article
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : BR liés : BR-01-000-020, BR-01-005-010, BR-01-005-040 et BR-01-005-050
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de opslag kunnen blokkeren als er masterdata-informatie ontbreekt (foto's, gewicht, afmetingen, gevaarlijkheid, enz.)  (moet uitgeschakeld zijn) om de kwaliteit van de artikeldatabase te verbeteren.
- **M « MMD »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 42
Mots-clés trouvés : avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **C « NR BR »** : BR-01-005-090
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 stock)
- **F « Description formalisée FR »** :
  > Informations nécessaires sur les étiquettes après avoir défini le type de HU : 
  > - Numéro de lot
  > - Date de péremption
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : 07-07-2026 : à ajouter dans le blueprint (section 3.3.7.) -> ok
- **J « Geformaliseerde beschrijving NL »** :
  > Vereiste informatie op de etiketten nadat het type HU werd gedefinieerd: 
  > - Batchnummer
  > - Vervaldatum
- **L « SP »** : ?

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 44
Mots-clés trouvés : avoir

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 005 Réceptionner PO 2ième étape pour stock
- **C « NR BR »** : BR-01-005-110
- **D « BR intégré dans flux eWM2.0 »** : x (Mettre en stock)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit pouvoir gérer les articles qui ont plusieurs "morceaux" (ex: perche caténaire qui a un sac en + avec les câbles, alors qu'il n'y a que 1 NN) -> Notion de Sales Kit. Il n'est pas toujours possible de créer des BOM ou Kit pour tout. 
  > Le système devrait gérer et nous guider pour dire, ce NN, ce sont 2 étiquettes avec 1/2 et 2/2 comme les meubles ikea)
  > - Ou les 2 "morceaux" sont stockés dans la même BIN
  > - Ou les 2 "morceaux" sont stockés dans des BIN différentes
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > Il faut distinguer trois notions : kit (au sens courant), kit (notion SAP/Infrabel) et BOM (notion SAP/Infrabel).
  >
  > • Kit - notion SAP/Infrabel : au départ (à la réception), plusieurs articles distincts existent, chacun avec son propre NN. À un moment donné, lors d'un OF (ordre de fabrication), ces éléments (= composants) subissent une transformation et deviennent un nouvel article doté d’un nouveau NN. (ex Kit KSS Maroula : 342101330000 Kit Pièces électriques BSD)
  > • BOM - notion SAP/Infrabel : une BOM est un regroupement de plusieurs articles (plusieurs NN) répondant à un besoin client. Lorsqu’un client commande une BOM, il commande un ensemble d’articles préalablement constitués (ex. ATW-TX = un appareil + une batterie). Les articles qui composent la BOM ont un NN distinct et peuvent être commandés séparément. (une BOM n'est pas gérée au niveau du stock, c'est transparent pour un DC)
  > • Kit - sens courant : concerné par ce BR
  >
  > Notion visée par ce BR = kit au sens courant : càd l’article composé de plusieurs composants physiques distincts. Ex. une armoire IKEA connue sous une seule référence commerciale et constituée de 3 colis distincts.
  >
  > Transposé à Infrabel :
  > - 1 seul NN est commandé sur le PO
  > - 1 seul NN est réceptionné
  > - cet article peut être composé de plusieurs composants physiques distincts
  > - ces composants peuvent être stockés ensemble dans une même HU et dans une même BIN ou répartis dans plusieurs HU et/ou plusieurs BIN
  >
  > ex. 1 armoire électrique = 1 NN, est constituée de 1 pied + 1 armoire
  >
  > Besoins :
  > - Le système doit pouvoir identifier qu'un article NN est composé de plusieurs composants physiques distincts
  > - Chaque composant doit avoir ses propres caractéristiques (poids, dimension, aire de stockage...)
  > - Le système doit afficher le nombre de composants constituant l'article
  > - Lors de la mise en stock, le manutentionnaire doit pouvoir décider à sa discrétion de répartir différents composants d’un même article NN en éléments distincts
  > - Le système doit permettre :
  >      o le stockage de tous les composants dans une même HU et une même BIN
  >      o le stockage des composants dans plusieurs HU
  >      o le stockage des composants dans plusieurs BIN
  >      o le stockage des composants dans différentes aires de stockage
  >      o toute combinaison des deux modes de stockage
  > - Lors du picking, le système doit indiquer au manutentionnaire qu'un article NN est composé de plusieurs composants
  > - Le système doit afficher le nombre total de composants attendus
  > - Lors du picking d'un article NN composé de plusieurs composants, le système doit guider le manutentionnaire vers l'ensemble des emplacements
  > - La clôture de la tâche de picking n’est possible qu'après confirmation du picking de la totalité des composants
  > - Le système doit permettre le suivi de l'état d'avancement du picking (ex. 1/3, 2/3, 3/3)
  > - Le système doit imprimer une étiquette par composant (1/3, 2/3, 3/3)
  >
  > Ex existants : 
  > - 385202400000 - DMR (lien : https://infrabel.sharepoint.com/:u:/r/sites/104379/Gedeelde%20documenten/03%20Design%20Documentation/Blueprint/Dmr%20.eml?csf=1&web=1&e=e3Idin)
  > - 078370530000 - Poste transf 1kV/230V GSM-R (type d'armoires qui doit être livré avec pied et transformateur (donc 2 ou 3 palettes pour 1 NN))
  > - 078371420000 - Arm. 1kV/110V 3,15 kVA (type d'armoires qui doit être livré avec pied et transformateur (donc 2 ou 3 palettes pour 1 NN))
  > - 071070010000 - Poteau basculant de 12m
- **I « BA - actions
docu »** : #VALUE!
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet artikelen kunnen beheren die uit meerdere “stukken” bestaan (bijv. een bovenleidingsstaak die ook een zak met kabels heeft, ook al is er maar 1 NN) -> Sales Kit-concept. Het is niet altijd mogelijk om voor alles BOM's of kits aan te maken.  
  > Het systeem zou dit moeten beheren en ons moeten begeleiden om te zeggen dat deze NN bestaat uit 2 etiketten met 1/2 en 2/2, zoals bij Ikea-meubels)
  > - waarbij de 2 "stukken" worden opgeslagen in hetzelfde BIN
  > - waarbij de 2 "stukken" worden opgeslagen in verschillende BIN's
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 46
Mots-clés trouvés : refus, labo, échantillon

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **C « NR BR »** : BR-02-000-010
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **F « Description formalisée FR »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot d'inspection et ne se trouvent pas sur le même site). Par exemple, une palette bloquée pour inspection est envoyée vers le magasin, les échantillons sont envoyés au labo (autre bin à définir...). Les échantillons sont acceptés, la palette est libérée au même moment et devient disponible pour picking.
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om, in het geval van monsters die gescheiden zijn van de rest van de partij, de hele partij te aanvaarden of te weigeren zonder de monsters opnieuw op te nemen (alle HU's moeten kunnen worden geaccepteerd/geweigerd, zelfs wanneer ze deel uitmaken van dezelfde inspectiebatch en zich niet op dezelfde locatie bevinden). Bijvoorbeeld: een pallet dat voor inspectie is geblokkeerd, wordt naar het magazijn gestuurd, de monsters worden naar het laboratorium gestuurd (andere bin te definiëren...). De monsters worden aanaard, de pallet wordt tegelijkertijd vrijgegeven en komt beschikbaar voor orderpicking.
- **N « QM »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 47
Mots-clés trouvés : refus

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 000 Commun quelle que soit la décision QM prise
- **C « NR BR »** : BR-02-000-020
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **F « Description formalisée FR »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de controleur in staat stellen om de communicatiestroom naar de aankoper en naar DC te starten in het geval van gedeeltelijke of volledige weigering van de producten, en naar DC in geval van acceptatie.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 48
Mots-clés trouvés : labo, échantillon

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **C « NR BR »** : BR-02-001-010
- **D « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **F « Description formalisée FR »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om de verzending te traceren van de monsters die geblokkeerd zijn voor inspectie op een buitenlocatie vóór de beslissing (-> van DC naar lab / van lab naar DC, etc.) (fysieke stroom = SAP stroom)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 49
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **C « NR BR »** : BR-02-001-020
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité QM - Pas listé dans les flux
- **F « Description formalisée FR »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de inspecteur/controleur in staat stellen de controle bij de leverancier te vervangen door de controle bij ontvangst in gevallen waarin men zich niet bij de leverancier kan verplaatsen.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 50
Mots-clés trouvés : retour, refus, fournisseur

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **C « NR BR »** : BR-02-002-010
- **D « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **F « Description formalisée FR »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om HU's voor retourzendingen naar de leverancier, geïdentificeerd in eWM zolang deze zich in het magazijn bevinden, te beheren, om zo volledige traceerbaarheid te garanderen.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 51
Mots-clés trouvés : refus

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **C « NR BR »** : BR-02-002-020
- **D « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **F « Description formalisée FR »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de medewerker in staat stellen om de stappen voor het weigeren en terugsturen van materiaal met behulp van een scanner te volgen, om volledige traceerbaarheid te garanderen en fouten te voorkomen.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 52
Mots-clés trouvés : retour, refus, rebut, fournisseur

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **C « NR BR »** : BR-02-002-030
- **D « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **F « Description formalisée FR »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet het mogelijk maken om volledig of gedeeltelijk afgekeurd materiaal voor retourzending naar de leverancier te identificeren met etiketten om de traceerbaarheid te garanderen.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 53
Mots-clés trouvés : refus, fournisseur

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **C « NR BR »** : BR-02-002-040
- **D « BR intégré dans flux eWM2.0 »** : x (Créer bon sans référence)
- **F « Description formalisée FR »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour prendre le rendez-vous et préciser la marchandise à enlever.
- **J « Geformaliseerde beschrijving NL »** : Het terugsturen van materiaal naar de leverancier moet gebeuren op basis van een document (bijvoorbeeld bon 8000...) dat gekoppeld is aan de Purchase Order, zodat de referentie van dit document - dat handmatig door replenishment naar de leverancier wordt gestuurd - door de vervoerder kan worden gebruikt om een afspraak te maken en aan te geven welke goederen moeten worden opgehaald.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 54
Mots-clés trouvés : refus

- **A « Etape processus »** : _02_CheckQM_Qmverificatie
- **B « Etape sous-processus »** : 002 Implémenter la décision (lot refusé)
- **C « NR BR »** : BR-02-002-050
- **D « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **J « Geformaliseerde beschrijving NL »** : We moeten kunnen controleren of de vervoerder de juiste geweigerde HU ophaalt, zelfs als er hetzelfde materiaal in dezelfde zone aanwezig is. Scan bij het ophalen door de magazijnmedewerker.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 59
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _03_PrépStockage_Opslagvoorbereiding
- **B « Etape sous-processus »** : 001 Appliquer les règles de conditionnement
- **C « NR BR »** : BR-03-001-030
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 stock)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 07-07-2026 : à ajouter dans le blueprint (section 3.3.2.) -> ok
  > 27-08-2026 : Quel est le besoin réel? / Quelles infos précisément avons-nous besoin? : 
  >    > Numéro de touret du fournisseur (comme numéro externe à la HU)?
  >    > Taille du touret? -> Est-ce que cette info est tjs dispo sur l'étiquette? Si oui, quid si on change de fournisseur et qu'on n'a plus cette info (actuellement non exigé dansles conditions logistiques)?
  > 27-08-2026 : après discussion avec Business :
  > -> Ne pas tenir compte de la dimension du touret
  > -> Pouvoir encoder l'identifiant unique du touret
  > -> Il n'y a pas tjs d'étiquette du fournisseur (donc encodage facultatif)
  > -> Associer l'identifiant au numéro HU (attention que cet identifiant pourrait être lié à d'autres num HU vu que la bobine nous reviendra ultérieurement par le fournisseur)
  > -> Il doit être possible de retrouver les liens entre identifiant et HU à partir du numéro de l'identifiant
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet de leveranciersetiketten van de kabelhaspels kunnen lezen om het nummer van de haspel en de informatie over de afmetingen van de haspel als extern nummer in de HU op te nemen.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 76
Mots-clés trouvés : avoir, 917

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **C « NR BR »** : BR-04-001-020-A
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **F « Description formalisée FR »** :
  > Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au client
  > (pourquoi bloqué, historique...)
  > - Isoler sur place (dans la bin) = empêcher le picking sur ces pièces 
  > - ou transférer vers une zone quarantaine
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  >
  > 01-09-2026 : Souhaite-t-on vraiment pouvoir les mettre physiquement en zone de quarantaine ou bien suivi via SAP? -> 
  > 01-09-2026 : Après discussion avec Jonathan : Il doit être possible, par exemple de les sortir de la BIN et de les mettre en 917 le temps de les analyser.
  > -> On veut pouvoir bloquer le stock et avoir son tracking : qui l'a bloqué, quand, pourquoi

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 77
Mots-clés trouvés : retour

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **C « NR BR »** : BR-04-001-020-B
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **F « Description formalisée FR »** :
  > pas encore de BR > à discuter avec autre pilier > fichier "Input à valider" ID34
  >
  > Besoin détecté : quand article est bloqué pour picking et en attente d'une décision -> assurer suivi du sort de l'article pour qu'il ne s'éternise pas dans le stock
  > -> Assurer le suivi des incidents
  > (Note : traiter ce point dans les "flux internes")
- **G « BA - action en cours »** : 1
- **H « BA - actions »** :
  > ID34 fichier "Input à valider"  : 
  >
  > Après qu’un article a été pris en stock, il est possible que des questions surgissent quant à sa conformité (ex. : une pièce ne correspond pas au descriptif du NN, des doutes surgissent quant au vieillissement ou aux caractéristiques de la pièce, etc.). Ces questionnements peuvent émaner du DC (ex. lors d’un picking) ou d’un autre service (Replenishment, gestionnaire technique, etc.).
  >
  > En attendant qu’il soit statué sur la conformité de l’article, les pièces concernées sont rendues indisponibles au picking client.
  >
  > Lorsque l’initiative émane du DC, celui-ci doit pouvoir identifier l’interlocuteur chargé de statuer sur la question. Les personnes concernées doivent recevoir l’information ainsi qu’un appel à action.
  >
  > Que l’initiative émane du DC ou d’un autre service, le DC a besoin d’un retour décisionnel de la part des personnes chargées de statuer. Le suivi doit pouvoir être assuré par le système.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 78
Mots-clés trouvés : mitraille

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 002 Gérer les articles FEFO
- **C « NR BR »** : BR-04-002-010-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Rapport pour les articles bientôt périmés
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet : 
  > - Rapport over binnenkort verlopen items
  > - Orderpicking taken op Z3 items (voor schroot)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 79
Mots-clés trouvés : mitraille

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 001 Gérer les articles non conformes à sortir du stock
- **C « NR BR »** : BR-04-002-010-A
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **G « BA - action en cours »** : 2
- **H « BA - actions »** :
  > 03-09-2026 : Wave spécifique pour les articles à mitrailler -> articles dont le statut = Z3
  > -> Doit-on tenir compte d'autres statuts / d'autres cas (ex : dates de préremption,..) ?
  > Suite discussion avec Business 03-09-2026 : 
  > - Pas de validation par le coordinateur nécessaire
  > - Fonctionnalité -> idem que BR-05-005-160-D mais sur base du statut de l'article (et donc pas la date de péremption) (la liste des statuts sera définie lors du Build)
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet : 
  > - Rapport over binnenkort verlopen items
  > - Orderpicking taken op Z3 items (voor schroot)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 80
Mots-clés trouvés : avoir

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 005 Stockage
- **C « NR BR »** : BR-04-002-010-B
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit émettre : 
  > - Rapport pour les articles bientôt périmés
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 2 choses à discuter / repenser : 
  > - Rapport accessible pour avoir une vue d'ensemble des articles avec un statut spécifique (ex Z3) 
  > - Envoi périodique de ce rapport à qui de droit (repl?) pour les conscientiser
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet : 
  > - Rapport over binnenkort verlopen items
  > - Orderpicking taken op Z3 items (voor schroot)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 85
Mots-clés trouvés : avoir

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 003 Effectuer les inventaires (cycle count)
- **C « NR BR »** : BR-04-003-040-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > Le système doit permettre de lancer, à tout moment,  le comptage d'un article spécifique afin de contrôler l'exactitude  du niveau d'inventaire pour des articles critiques et/ou pour vérifier des N° de série de certains articles.
  > Remarque du workshop du 29-05-26
  > Souhaits : 
  > - Avoir une bonne gestion d'un recomptage. Pouvoir relancer un recomptage.
  > - Avoir une file d'attente des BIN à inventorier à laquelle le magasinier peut se connecter (en période creuse par exemple)
  > - Pouvoir inventorier une palette "dormante" filmée juste en confirmant la HU (le magasinier ne doit pas défilmer la palette et recompter les articles) -> fonctionnalité existe déjà à GZH pour les câbles -> scan du touret confirme automatiquement les métrés du câble
- **H « BA - actions »** : Voir BR-04-003-040-B
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet op elk moment een telling van een specifiek item kunnen starten om de nauwkeurigheid van het voorraadniveau voor kritieke items te controleren en/of om de serienummers van bepaalde items te verifiëren.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 87
Mots-clés trouvés : avoir

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 003 Effectuer les inventaires (cycle count)
- **C « NR BR »** : BR-04-003-040-B
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Avoir une bonne gestion d'un recomptage. Pouvoir relancer un recomptage.
- **G « BA - action en cours »** : 2
- **H « BA - actions »** :
  > 01-09-2026 : quel est le souci actuel du recomptage? Pas d'historique? Recomptage pas considéré comme inventaire?
  > Suite discussion avec Business 03-09-2026 : 
  > -> Tracking de qui a compté, combien, quand
  > -> Regénérer une liste de recomptage (en plus de la liste d'inventaire initiale) pour que ça apparaisse sur le scanner (un autre magasinier doit pouvoir effectuer le recomptage)
  > -> S'il y a recomptage d'une BIN, celle-ci doit rester bloquée
  > -> Il n'y a validation de l'inventaire qu'après confirmation
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet op elk moment een telling van een specifiek item kunnen starten om de nauwkeurigheid van het voorraadniveau voor kritieke items te controleren en/of om de serienummers van bepaalde items te verifiëren.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 88
Mots-clés trouvés : avoir

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 003 Effectuer les inventaires (cycle count)
- **C « NR BR »** : BR-04-003-040-C
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Avoir une file d'attente des BIN à inventorier à laquelle le magasinier peut se connecter (en période creuse par exemple)
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet op elk moment een telling van een specifiek item kunnen starten om de nauwkeurigheid van het voorraadniveau voor kritieke items te controleren en/of om de serienummers van bepaalde items te verifiëren.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 90
Mots-clés trouvés : refus

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 004 Gérer les mouvements internes
- **C « NR BR »** : BR-04-004-010
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit pouvoir proposer (décision du workshop 29-05-26) autoriser l'utilisateur le magasinier d'optimiser le stockage (passage d'un type de magasin (ex Rack) vers un autre type de magasin (ex VNS) 
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser? (décision du workshop 29-05-26) -> pas de rapport mais fonctionnalité directement accessible au magasinier
  > ex : une palette pleine n'a plus que qq articles -> la palette devient une boîte.
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet de gebruiker de mogelijkheid bieden om de opslag te optimaliseren (overgang van het ene type magazijn (bijv. rack) naar een ander type magazijn (bijv. VNS) 
  > Hoe? Rapport om te zetten in een wave? Picking wave die de coördinator kan aanvaarden/weigeren?
  > Bijvoorbeeld: een volle pallet bevat nog maar een paar artikelen -> de pallet wordt een doos.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 91
Mots-clés trouvés : refus

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 004 Gérer les mouvements internes
- **C « NR BR »** : BR-04-004-020-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > Le système doit pouvoir relancer une optimisation du stockage (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
  > Comment ? rapport à transformer en vague? vague de picking que le coordintateur peut accepter/refuser?plus grandes palettes, ou dans le mauvais type de rotation de stock)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 03-09-2026 : BR à affiner correctement avec le business
  > - Souhaite-t-on un rapport permettant des analyses
  > - Au niveau des tâches : 
  >    > Créaton de vagues de tâches que le coordinateur accepte/refuse -> ce qui permet de lancer les tâches?
  >    > ou bien d'office des vagues de tâches qui sont créées pour le magasinier?
  > Suite discussion avec Business 03-09-2026 -> BR splité
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet een optimalisatie van de opslag kunnen herstarten (bijv. een kleine pallet in een bin die het mogelijk maakt om
  > Hoe? Rapport kan worden omgezet in een wave? Picking wave die de coördinator kan accepteren/weigeren?grotere pallets, of in het verkeerde type voorraadrotatie)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 92
Mots-clés trouvés : refus

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 004 Gérer les mouvements internes
- **C « NR BR »** : BR-04-004-020-A
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit proposer une optimisation de stockage sous forme de réserve de travail. Le coordinateur doit pouvoir accepter/refuser chaque ligne proposée (piste de solution : file d'attente, wave..)
  > (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
- **G « BA - action en cours »** : 2
- **H « BA - actions »** : Attention BR a été splité
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet een optimalisatie van de opslag kunnen herstarten (bijv. een kleine pallet in een bin die het mogelijk maakt om
  > Hoe? Rapport kan worden omgezet in een wave? Picking wave die de coördinator kan accepteren/weigeren?grotere pallets, of in het verkeerde type voorraadrotatie)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 100
Mots-clés trouvés : avoir

- **A « Etape processus »** : _04_Stockage_Opslag
- **B « Etape sous-processus »** : 005 Gérer le stock dormant
- **C « NR BR »** : BR-04-005-010
- **D « BR intégré dans flux eWM2.0 »** : Fonctionnalité - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le sytème doit pouvoir nous piloter dans la gestion du stock dormant:
  > - Produire un rapport d'articles qui sont sans mouvements depuis X temps (par ex: 1 an)
  > - Créer une vague de picking sur ce stock dormant afin de le relocaliser en zone de massification => densifier les HU dormantes dans une HU globale + mettre en stock dans une bin où il peut déjà y avoir d'autres HU
  > Remarque du workshop du 29-05-26
  > Souhait : 
  > - Avoir une file d'attente des BIN à massifier à laquelle le magasinier peut se connecter (en période creuse par exemple)
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet ons kunnen begeleiden bij het beheer van de slapende voorraad:
  > - Een rapport opstellen van items die al X tijd niet zijn verplaatst (bijv. 1 jaar)
  >
  > - Een picking wave creëren voor deze slapende voorraad om deze te verplaatsen naar de massificatiezone => de slapende HU's verdichten in een globale HU + opslaan in een bin waar mogelijk al andere HU's staan

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 101
Mots-clés trouvés : NNN

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 001 Faire immatriculer les articles
- **C « NR BR »** : BR-05-001-010
- **D « BR intégré dans flux eWM2.0 »** :
  > x (REC 2 stock)
  > x (REC 2 NNN/cons dir)
- **E « BR intégré dans blueprint »** :
  > …
  > x
- **F « Description formalisée FR »** :
  > Le système doit permettre de suivre automatiquement un article qui part à l'immatriculation afin de garder une traçabilité de l'article. 
  > L'article doit alors se trouver dans une zone particulière.
- **G « BA - action en cours »** : 2
- **H « BA - actions »** : 07-07-2026 : Ne pas oublier de traiter la partie "immatriculation" et "QM" du flux Réc 2 pour stock -> A traiter dans le blueprint QM
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet een item automatisch kunnen traceren wanneer het vertrekt voor registratie, zodat het item kan worden getraceerd. 
  > Het item moet zich dan in een specifieke zone bevinden.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 102
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 003 Créer le bon sans référence
- **C « NR BR »** : BR-05-003-010-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…
- **J « Geformaliseerde beschrijving NL »** :
  > Niet-beheerde HU's in voorraad hebben die gekoppeld zijn aan de bon 8* zonder referentie om de traceerbaarheid van HU's en transporten te beheren.
  > Bon 8* is gekoppeld aan een ontvanger en een leveringsadres (SP / COPO / ZLEV / handmatig adres)
  > Deze HU's kunnen worden gelokaliseerd in een stagingzone om de verzending / afhaling / overdracht naar SP voor te bereiden.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 103
Mots-clés trouvés : NNN

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 003 Créer le bon sans référence
- **C « NR BR »** : BR-05-003-010-A
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 NNN)
- **F « Description formalisée FR »** : Pouvoir localiser des HU non gérées en stock dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 104
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 003 Créer le bon sans référence
- **C « NR BR »** : BR-05-003-010-B
- **D « BR intégré dans flux eWM2.0 »** : x (créer bon sans référence)
- **F « Description formalisée FR »** :
  > Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports.
  > Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 108
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 004 Lancer les vagues de picking
- **C « NR BR »** : BR-05-004-040
- **D « BR intégré dans flux eWM2.0 »** : x (Lancer vague)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) (= vagues de picking) afin de préparer le huddle de J-1
  > -> std eWM
- **J « Geformaliseerde beschrijving NL »** :
  > Twee dagen voor de leveringsdatum moet het mogelijk zijn om het verwachte pickingwerk voor de volgende dag (dag 1) (= picking waves) te bekijken om de huddle van D-1 voor te bereiden
  > -> std eWM

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 112
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 004 Lancer les vagues de picking
- **C « NR BR »** : BR-05-004-080
- **D « BR intégré dans flux eWM2.0 »** : x (Lancer vague)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de lancer une tâche de picking en plus de la vague initalement prévue (cas des demandes ponctuelles (ex  j'ai besoin d'un ruban d'imprimante / urgentes)
  > -> std eWM
- **J « Geformaliseerde beschrijving NL »** :
  > De coördinator moet de mogelijkheid hebben om naast de oorspronkelijk geplande wave een extra orderpickingtaak te starten (bijvoorbeeld bij punctuele aanvragen (ik heb een printerlint nodig / spoedgevallen)
  > -> std eWM
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 118
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 004 Lancer les vagues de picking
- **C « NR BR »** : BR-05-004-120-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > 1. Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail? popup? étiquette imprimée? warning dans un rapport?...)
  > La demande T8/T9 doit être monitorée.
  > 2. Une demande T8/T9 doit être ajoutée automatiquement à une vague de picking "urgente"
- **J « Geformaliseerde beschrijving NL »** :
  > 1. Het systeem moet de coördinatoren dynamisch waarschuwen dat er een T8/T9-aanvraag is ingediend, zodat het orderpicken kan plaatsvinden (e-mail? pop-up? afgedrukt etiket? warning in een rapport?...)
  > De T8/T9-aanvraag moet worden gemonitored.
  > 2. Een T8/T9-aanvraag moet automatisch worden toegevoegd aan een "urgente" picking wave.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 119
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 004 Lancer les vagues de picking
- **C « NR BR »** : BR-05-004-120-A
- **D « BR intégré dans flux eWM2.0 »** : x (Lancer vague)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail? popup? étiquette imprimée? warning dans un rapport?...)
  >
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > Besoins : 
  > 	- Le DC doit être alerté de manière active de l'arrivée d'un T8/T9
  > 	- L'information doit prendre la forme d'un signal global, visible par l'ensemble du personnel du DC. Elle ne doit pas être adressée à une personne ou à un rôle spécifique. 
  > 	- Ce signal ne doit pas perturber les activités de manutention en cours (par exemple, en générant des tâches de picking qui viendraient s'ajouter aux tâches magasin déjà en cours).
  > 	- Il doit être possible de suivre l'évolution du statut du T8/T9 (par exemple : ouvert, pické, expédié, etc.).
  >
  > Piste de solution : 
  > - un dispositif de type ZIM1_WM_FOLLOWUP pour les T8/T9, affiché sur des écrans visibles par tous dans le DC. 
  > - L'objectif est de permettre à chacun de visualiser la présence de lignes T8/T9 ainsi que leur statut. 
  > - À approfondir : les informations à afficher et le mode de visualisation des données.
- **J « Geformaliseerde beschrijving NL »** :
  > 1. Het systeem moet de coördinatoren dynamisch waarschuwen dat er een T8/T9-aanvraag is ingediend, zodat het orderpicken kan plaatsvinden (e-mail? pop-up? afgedrukt etiket? warning in een rapport?...)
  > De T8/T9-aanvraag moet worden gemonitored.
  > 2. Een T8/T9-aanvraag moet automatisch worden toegevoegd aan een "urgente" picking wave.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 126
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 005 Préparer la marchandise
- **C « NR BR »** : BR-05-005-020
- **D « BR intégré dans flux eWM2.0 »** : x (Prep march)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Quel que soit le poste de picking, plusieurs magasiniers doivent pouvoir prélever de la marchandise en même temps
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : JST : "C'est le type de problématique qu'on pourrait avoir dans EWM et dans tous les DC... plusieurs agents qui travaillent sur la même commande... le même dossier (dans fox)…" -> Provient de la problématique à Sch où plusieurs personnes ne savaient pas travailler sur le même OT
- **J « Geformaliseerde beschrijving NL »** : Ongeacht de pickingpost moeten meerdere magazijnmedewerkers tegelijkertijd goederen kunnen picken

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 130
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 005 Préparer la marchandise
- **C « NR BR »** : BR-05-005-060-00
- **D « BR intégré dans flux eWM2.0 »** : Voir Split
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : eWM doit permettre le piece picking et le picking à l'arrondi
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 06-08-2026 : Est-ce que ce BR signifie bien que, en fonction de l'unité de sortie définie dans la fiche article, le système doit adapter les qtés à picker.
  > Ex : besoin de 3 pièces mais unité de sortie = 1 boîte (qui contient 5 pièces). Donc picking d'une boîte
  >
  > 06-08-2026 : L'idéal : master data correct et donc l'arrondi se fait en amont (voir ex ci-dessus) -> Le supply catalogue doit afficher l'unité de picking définie par les DC
  > Proposition de solution : 2 aires de stockage : en palette / en vrac
  >
  > 06-08-2026 : spliter le BR + développer le besoin - Gilles
  > - besoin qu'un même NN doit être possible de faire du piece picking et full picking (voir BR avec 2 aires d'activité)
  > - Correspondance entre les qtés commandées (supply catalogue) et qtés de sortie possible (unité de picking). -> ex des colles qui sont livrées en conditionnements différents en fonction du fournisseur
- **J « Geformaliseerde beschrijving NL »** : eWM moet stukpicking en afronding bij picking mogelijk maken.
- **L « SP »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 132
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 005 Préparer la marchandise
- **C « NR BR »** : BR-05-005-060-B
- **D « BR intégré dans flux eWM2.0 »** : x (Prep march)
- **F « Description formalisée FR »** :
  > Les quantités de commande proposées au client dans le Supply Catalogue doivent être alignées avec et limitées par les quantités de picking réalisables par le DC.
  >
  > - plusieurs quantités de sortie peuvent être proposées pour un même article
  > - les quantités de sortie d'un article peuvent varier en fonction du conditionnement associé à un fournisseur (il pourrait exister plusiseurs conditionnements pour le même fournisseur)
  > - les quantités du Supply Catalogue doivent être alignées avec les conditionnements de la  commande auprès du fournisseur
  > - le client doit pouvoir indiquer dans sa commande si l'arrondi est permis 
  > si oui > arrondi en fonction conditionnement
  > si pas > on respecte quantité commandée
- **G « BA - action en cours »** : 1
- **H « BA - actions »** : à discuter avec autre pilier (cf. fichier "Input à valider")

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 147
Mots-clés trouvés : retour

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 005 Préparer la marchandise
- **C « NR BR »** : BR-05-005-150
- **D « BR intégré dans flux eWM2.0 »** : x (Prep march)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Le système doit permettre d'effectuer une découpe de câble : 
  > - Le scanner doit indiquer qu'une découpe est nécessaire. 
  > - La bobine mère est déplacée depuis sa zone de stockage vers la dérouleuse de câble -> le magasinier scanne l'emplacement de la dérouleuse
  > - Le magasinier scanne le touret récepteur et l'enrouleuse (s'il n'existe pas de HU de stockage sur le touret récepteur, il doit être possible d'imprimer une nouvelle HU de stockage)
  > - La coupe doit être confirmée
  > - La bobine demandée par le client est scannée pour confirmer le picking
  > - L'autre bobine est relocalisée
  > - S'il existe un numéro de lot sur la bobine mère, celui-ci doit être également lié à la bobine fille
  > remplacé par les commentaires du 21/08/2026 sous BA-actions
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 06-08-2026 : A revoir avec le business : 
  > - le scanner doit-il indiquer qu'une découpe est nécessaire? Ou bien le magasinier le décide de lui-même en fonction du métrage demandé et du métrage de la bobine?
  > - Intérêt de scanner enrouleuse / dérouleuse?
  > - Actuellement, proposition de BRM : utilisation d'un work station (poste de travail = lieu d'emballage / déballage) 
  >
  > 21/08/2026 :
  > - picking : à la réception de la commande client, le coordinateur analyse dans le système les quantités de câble disponibles par bobine afin de déterminer le mode de préparation approprié : 1. une découpe sur une bobine spécifique pour satisfaire la quantité demandée / 2. une bobine complète doit être pickée sans découpe (piece picking). Sur cette base, il crée les tâches de picking correspondantes.
  > - suivi bobines : les bobines doivent pouvoir être situées en tout temps. Le déplacement des bobines vers l'endroit de découpe et leur retour doit être enregistré.
  > - distinction types de picking : afin de permettre le suivi de la productivité et l'organisation du travail, le système doit permettre de distinguer : 1. les opérations de picking nécessitant une découpe de câble et 2. le picking d'une bobine complète sans découpe (piece picking).
- **J « Geformaliseerde beschrijving NL »** :
  > Het systeem moet het mogelijk maken om de kabel door te knippen: 
  > - De scanner moet aangeven dat er kabel moet worden doorgesneden. 
  > - De moederhaspel wordt verplaatst van de opslagruimte naar de kabeloproller -> de magazijnmedewerker scant de locatie van de kabeloproller
  > - De magazijnmedewerker scant de ontvangende haspel en de kabeloproller (als er geen opslag HU op de ontvangende haspel is, moet het mogelijk zijn om een nieuwe opslag HU af te drukken)
  > - De kabelversnijding moet worden bevestigd
  > - De door de klant gevraagde haspel wordt gescand om het picking te bevestigen
  > - De andere haspel wordt verplaatst
  > - Als er een batchnummer op de moedershaspel staat, moet dit ook worden gekoppeld aan de dochterhaspel

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 148
Mots-clés trouvés : avoir

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 005 Préparer la marchandise
- **C « NR BR »** : BR-05-005-160-00
- **D « BR intégré dans flux eWM2.0 »** : x (Prep march)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Gestion FEFO : le picking d'articles avec numéro de lot s'effectue dans des BIN spécifiques
  > Il faut garantir que le matériel proche de sa date de péremption ne soit pas expédié (le problème doit être réglé en amont par IM par replenishment)
  > Remarque du workshop du 29-05-26
  > Définition d'une date de péremption : article dont la date de péremption est atteinte + dont la date de péremption sera atteinte endéans xx jours.
  > Souhaits : 
  > - Le délai de péremption pourrait être différent en fonction du client :
  >  --> SP1 : délai plus long
  >  --> COPO chantier sur le weekend à venir : délai plus court
  > - Avoir une file d'attente des articles périmés à picker à laquelle le magasinier peut se connecter (en période creuse par exemple).
  > - Rapport de cette wave doit être envoyée à replenishment.
  > Note : S'il ne fallait pas picker ces articles car les master data ne sont pas correctes, cela sera constaté avant la mise à disposition/expédition de ces articles. -> il sera alors demandé de mettre à jour les master data.
  > Contrainte : les articles avec date de péremption doivent être gérés dans SAP (MMD)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : Spliter ce BR avec les remarques ajoutées lors du workshop (qui étaient initalement mises dans le BR-04-002-010) - Gilles
- **J « Geformaliseerde beschrijving NL »** :
  > FEFO-beheer: het orderpicking van artikelen met een batchnummer gebeurt in specifieke BIN's
  > Er moet voor worden gezorgd dat materiaal dat bijna vervallen is, niet wordt verzonden (het probleem moet vooraf worden opgelost door IM via replenishment)
  > Beperking: artikelen met een vervaldatum moeten worden beheerd in SAP (MMD)
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 160
Mots-clés trouvés : NNN

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 006 Consolider la marchandise
- **C « NR BR »** : BR-05-006-050-00
- **D « BR intégré dans flux eWM2.0 »** : Voir split
- **F « Description formalisée FR »** :
  > Pouvoir associer une livraison de marchandises NNN / cons directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.
  > -> Tracking de HU : localisation et statut
- **J « Geformaliseerde beschrijving NL »** :
  > Het moet mogelijk zijn om een levering van NNN-goederen / directe consumptie te koppelen aan een verzend-HU die is gegenereerd op basis van een verzendbon zonder referentie (of met verwijzing naar een PO) om deze te consolideren in één transport.
  > -> HU-tracking: locatie en status

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 162
Mots-clés trouvés : NNN

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 006 Consolider la marchandise
- **C « NR BR »** : BR-05-006-050-B
- **D « BR intégré dans flux eWM2.0 »** : x (Etape 2 NNN)
- **F « Description formalisée FR »** :
  > Pouvoir tracer la HU d'un articles NNN / cons directe
  > -> Tracking de HU : localisation et statut

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 167
Mots-clés trouvés : NNN

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : 007 Déplacer la marchandise pour mise en zone d'expédition / d'enlèvement
- **C « NR BR »** : BR-05-007-020
- **D « BR intégré dans flux eWM2.0 »** : Application du principe HU managed. Traçabilité HU à travers le E2E
- **F « Description formalisée FR »** : Le système doit permettre le Track & Trace de chaque étape du flux (en attente de préparation / préparation en cours / consolidation terminée / envoi en cours / livré à destination)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 30-07-2026 - Il faut préciser les besoins. Quel besoin veut-on couvrir?
  > - Track & trace pour client : à partir d'un certain moment, le client doit pouvoir suivre les jalons (que veut-on tracer ? HU, BL, article, …..
  > - Analyse flux livraison : àpd création BL > réception par le client ? Aussi étapes entre sortie DC et réception SP > inclure cheminement chez le transporteur (ex. redispatch des colis au sein du HUB distributeur) > intégrer les données reçues du transporteur
  >
  > 30-07-2026 : Vu avec JST : 
  > Au niveau des étapes au sein du DC : capter les jalons de chaque étape (à partir du picking jusqu'à l'expédition (+ réc 2 pour les NNN/cons dir. Voir BR-01-002-020-A)
  > Au niveau du transport : EDI du transporteur (ou autre input extérieur - ex : balise) nous renvoie les informations liées au transport (date / heure / étape..)
  > Au niveau de la réception chez le client : capter le moment où les HU sont réceptionnées par le client 
  >
  > 04-08-2026 : Delphine - Action pour BA : retirer ce BR des différents BPMN (ex : picking et lancer vagues) et traiter ce BR comme une fonctionnalité à part
  > - Lancement vagues (lancer vagues) -> ok
  > - Picking (haut-gauche) -> ok
  > - Consolider expédition (haut-gauche) -> ok
  > - Expédition (haut-gauche) -> ok
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet elke fase van de stroom (moet worden klaargemaakt / wordt klaargemaakt / consolidatie voltooid / verzending in uitvoering / afgeleverd op bestemming) kunnen volgen en traceren
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 175
Mots-clés trouvés : retour, litige, fournisseur, NNN, avoir

- **A « Etape processus »** : _06_Expédition_Verzending
- **B « Etape sous-processus »** : 002 Mise à disposition pour enlèvement
- **C « NR BR »** : BR-06-002-010
- **D « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **F « Description formalisée FR »** :
  > Le coordinateur doit avoir la possibilité de créer une référence unique qui permet de regrouper plusieurs HU afin d'identifier la marchandise à enlever de manière univoque (cette référence unique est remise au fournisseur -> Le transporteur se présente alors au comptoir avec cette référence unique)
  > (ex : retour litige fournisseur, enlèvement d'un NNN/cons directe,...)
- **G « BA - action en cours »** : 0
- **H « BA - actions »** : Dans le cadre d'un enlèvement (ex : retour litige fournisseur, enlèvement d'un NNN/cons directe,...), les articles et HU à enlever et formant un ensemble doivent être identifiés sous une référence unique. Cette référence unique doit permettre d'identifier l'ensemble des articles et HU concernés lors de l'enlèvement par le transporteur.
- **J « Geformaliseerde beschrijving NL »** :
  > De coördinator moet een unieke referentie kunnen aanmaken waarmee meerdere HU's kunnen worden gegroepeerd om de op te halen goederen eenduidig te identificeren (deze unieke referentie wordt aan de leverancier gegeven -> de vervoerder gaat vervolgens naar het loket met deze unieke referentie)
  > (bijv. retourzending bij leveranciersgeschil, ophaling NNN/directe consumptie, enz.)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 176
Mots-clés trouvés : avoir

- **A « Etape processus »** : _06_Expédition_Verzending
- **B « Etape sous-processus »** : 003 Charger les marchandises
- **C « NR BR »** : BR-06-003-020
- **D « BR intégré dans flux eWM2.0 »** : x (Expédition)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises
- **J « Geformaliseerde beschrijving NL »** : De coördinator moet de verwijdering van de verzend-HU's uitgevoerd door de milkrun-chauffeur kunnen invoeren in geval van een technisch probleem bij de afhaling van de goederen

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 181
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 001 Global
- **C « NR BR »** : BR-07-001-010-B
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Daily Huddle : rapport statique reprenant 
  > - le taux de service -> jauge global du taux de service (nb de plaintes vs nb de lignes de picking)
- **G « BA - action en cours »** : 2
- **H « BA - actions »** :
  > Définir le taux de service
  > - par jour? Par mois?
  > - nb de plaintes -> où les trouve-t-on? Customer care?
  > 14-09-2026 : suite discussion avec Philippe / Manon
  > Le taux de service est utilie pour des discussions avec SP et Repl mais également pour les magasiniers du DC. C'est donc une pourcentage que l'on souhaite afficher sur l'écran du Daily Huddle (même écran qui reprend les données relatives à la charge de travail du jour).
  > Calcul du taux de service (encore à valider) : par mois (J-30 -> Jour j) (pas un mois calendrier mais mouvant d'un jour à l'autre).
  > Le nombre de plaintes pourraient être récupérées depuis Customer Care si d'ici l'implémentation eWM2.0, c'est tjs bien cette application qui est utilisée
  > En plus du taux de service global, pouvoir spliter le pourcentage en fonction des catégories des plaintes (ex : Erreur admin, erreur picking, pbl fournisseur...)
  >
  > 19-10-2026 : (Bernard) : Ce BR sera couvert par un rapport PowerBi développé dans le cadre du projet customer care --> hos scope projet EWM
- **J « Geformaliseerde beschrijving NL »** :
  > Daily Huddle: statisch rapport met 
  > - de taken die de komende dag moeten worden uitgevoerd met de beschikbare middelen (mensen en materiaal)
  > - het servicepercentage -> algemene graadmeter van het serviceniveau (aantal klachten vs. aantal pickingregels)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 183
Mots-clés trouvés : avoir

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 001 Global
- **C « NR BR »** : BR-07-001-030
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Il doit être possible de monitorer, en temps réel, l'avancée de chaque étape du flux (-> chaque graphe du dashboard global doit pouvoir être exploité)
- **G « BA - action en cours »** : 2
- **H « BA - actions »** :
  > 10-09-2026 : Quel est le besoin de ce BR exactement?
  > - Drilldown des graphes du dashboard?
  > - Rapport de productivité? Que veut-on mesurer exactement?
  >    > Qui a fait quoi à quel moment?
  >    > ??
  > 14-09-2026 : suite discussion avec Philippe / Manon
  > L'objectif serait d'avoir un détail par graphe reprenant l'évolution de chaque ligne -> Quelle ligne est réellement traitée, par qui, quand (timestamp), le statut du traitement (commencé, en cours, ...), ...  (voir ZIM1_WM_FOLLOWUP de Schaerbeek). C'est donc bien un rapport en real time
- **J « Geformaliseerde beschrijving NL »** : Het moet mogelijk zijn om de voortgang van elke fase van de stroom in realtime te volgen (-> elke grafiek op het globale dashboard moet bruikbaar zijn)
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 184
Mots-clés trouvés : NNN, avoir

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 002 Réception
- **C « NR BR »** : BR-07-002-010
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Pour toutes les marchandises réceptionnées à la 1ière étape, le magasinier doit pouvoir identifier "l'en-cours", le volume encore à traiter, et savoir où il est localisé
- **G « BA - action en cours »** : 2
- **H « BA - actions »** :
  > 10-09-2026 : Quel est le besoin de ce BR?
  > Pourquoi le magasinier a besoin d'un rapport? Il aura sur son scanner les informations nécessaires sur le prochain colis à traiter et l'endroit où il se trouve
  > "1ière étape" -> parle-t-on bien des articles NN ainsi que des NNN/cons direct et STO
  > 14-09-2026 : suite discussion avec Philippe / Manon
  > Ce BR n'a plus lieu d'être car le magasinier sera guidé par son scanner sur les HU à traiter, en respectant le FIFO. L'emplacement de la HU lui sera désigné.
  > Les coordinateurs doivent avoir la possibilité, pour toute HU, de pouvoir déterminer son emplacement.
- **J « Geformaliseerde beschrijving NL »** : Voor alle goederen die in fase 1 worden ontvangen, moet de magazijnmedewerker het "werk in uitvoering", het volume dat nog verwerkt moet worden, kunnen identificeren en weten waar het zich bevindt.

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 185
Mots-clés trouvés : refus

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 002 Réception
- **C « NR BR »** : BR-07-002-020
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Reporting sur les livraisons refusées même quand il n'y a pas de MIGO d'entrée - savoir tracker les camions refusés (reporting sur la check list)
- **J « Geformaliseerde beschrijving NL »** : Rapporteren over afgekeurde leveringen, zelfs als er geen inkomende MIGO is - weten hoe je afgekeurde vrachtwagens kunt volgen ((rapportage op de checklist)

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 186
Mots-clés trouvés : litige, 107, 109

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 002 Réception
- **C « NR BR »** : BR-07-002-030
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **J « Geformaliseerde beschrijving NL »** : Rapport per PO-regel over geschillen die bij ontvangst zijn geconstateerd (alle fasen samen: checklist, 107, 109, enz.).

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 187
Mots-clés trouvés : avoir

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 005 Stockage
- **C « NR BR »** : BR-07-005-010
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** :
  > Rapport de tri A/B/C : le système doit permettre de challenger les paramètres A/B/C en fonction de l'historique de mouvements afin d'optimiser les emplacements de stockage :
  > -> Est-ce que les marchandises sont référencées dans les bonnes zones A/B/C ? (zones A/B/C replenishement vs zones A/B/C sur base des mouvements magasin) -> Tenir compte des déplacements des marchandises dans le magasin : ce qui bouge le plus doit être le plus à portée de main
  > -> Au sein de chaque zone A/B/C, pouvoir réarranger les palettes en fonction de la fréquence des mouvements
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 15-09-2026 : Pour notre info : enregistrement de la réunion définition des BR :
  > Actuellement le système tient compte du calcul du MRP add-on (donc de replenishment), c'est à dire des mouvements de consommation. Pour les DC, on souhaite que le système tienne compte du calcul des mouvements magasin ("slotting / rearrangement").
  > Ainsi, le système doit proposer de stocker telle pallete en zone "A" car elle a un taux de picking élevé, une autre palette en zone "B" car son taux de picking est plus faible. Au sein même de la zone "A", proposer une BIN davantage en début de rayon si le taux de picking est très élevé
  > A discuter : 
  > Le souhait initial était d'avoir un "rapport" qui propose des transferts d'articles d'une BIN à l'autre en fonction du calcul des mouvements magasin et, si ces propositions sont acceptées, généréer des tâches magasin pour le magasinier.
  > Question : va-t-on réellement passer du temps à transférer ces articles pour les repicker plus tard lorsqu'il faudra les expédier? -> Suite discussion avec JST : oui bien sûr étant donné que le magasinier pourrait devoir aller picking 10x dans cette palette pour des commandes différentes
  > (Il faut évidemment prévoir, pour le putaway de ces articles que le système propose d'office les BINs les plus adéquates en fonction de ce calcul)
- **J « Geformaliseerde beschrijving NL »** :
  > A/B/C-sorteerrapport: het systeem moet het mogelijk maken om de A/B/C-parameters te controleren op basis van de verplaatsingsgeschiedenis om de opslaglocaties te optimaliseren:
  > -> Staan de goederen in de juiste A/B/C-zones? (Replenishment zones A/B/C vs zones A/B/C op basis van magazijnbewegingen) -> Houd rekening met de verplaatsingen van goederen in  het magazijn: wat het meest beweegt moet het meest binnen handbereik zijn
  > -> Binnen elke A/B/C-zone moet het mogelijk zijn om de pallets te herschikken op basis van de frequentie van de bewegingen

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 193
Mots-clés trouvés : return, mitraille

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 005 Stockage
- **C « NR BR »** : BR-07-005-070
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Rapport avec la liste des articles avec "plant specific material status" = Z2-Z3-Z5-ZD pour lancer un traitement spécifique.
- **G « BA - action en cours »** : 1
- **H « BA - actions »** :
  > 10-09-2026 Voir avec Christophe quel est son besoin. Quelle action spécifique il souhaite lancer
  > 14-09-2026 : mail sent à Christophe. 
  > Réponse : "Ces statuts concernent des articles qui ne sont plus utilisés pour différentes raisons et donc indisponible pour le picking. Le but est de pouvoir régulièrement lancer des campagnes de picking sur ces articles spécifiques afin de les sortir du magasin et de les traiter respectivement.
  > ... Oui, en effet on pourrait imaginer que Replenishment puissent sortir des liste de picking par traitement spécifique ou je pensait plus à ce que le système puisse générer lui-même des propositions de listes de picking pour sortir des articles du magasin ."
  > -> Question que je me pose : une fois que nous piquons ces articles, comment savoir ce que nous devons en faire ? 
  > - Vont-ils d’office à la mitraille quel que soit le statut ? 
  > - Est-ce que l’action est fonction du statut ? Si oui, quelle action pour quel statut ?
  > - Ou encore, est-ce que replenishment doit nous dire ce qu’on doit en faire en fonction de la situation ? Et donc pourrait différer d’un NN à l’autre -> Dans ce cas, j’imagine qu’il faudra qu’on intègre cette fonctionnalité dans le cadre de eWM2.0
  >
  > En cours de discussion avec Christophe
- **I « BA - actions
docu »** :
  > proposition faite à REPL > cf. fichier 'input à valider' :
  > "BR-07-005-070-A
  > Au terme du cycle de vie d’un article, celui-ci doit pouvoir être retiré de la chaîne de distribution. À cette fin, le système doit permettre l’attribution d’un statut spécifique à l’article. Ce statut détermine notamment le traitement à appliquer à l’article.
  > Exemples de statuts existants - Plant specific material status :
  > • Z2 : Return to DC’s
  > • Z3 : Destroy on site
  > • Z5 : Item Deleted
  > • ZD : …
  > BR-07-005-070-B
  > Le système doit empêcher l’expédition vers les clients des articles auxquels un statut interdisant leur distribution a été attribué.
  > BR-07-005-070-C
  > Le statut attribué doit déterminer le traitement final à appliquer à l’article, par exemple : mitraille, vente, stockage centralisé, ...
  > BR-07-005-070-D
  > Selon le statut attribué, les articles concernés présents en stock doivent être affectés à une vague de picking dédiée afin de permettre leur évacuation du stock au moment opportun.
  > Un rapport identifiant les articles intégrés à cette vague de picking doit être transmis à Replenishment à intervalles réguliers."
- **J « Geformaliseerde beschrijving NL »** : Rapport met lijst van items met "plant specific material status" = Z2-Z3-Z5-ZD om een specifieke verwerking te starten.
- **K « Repl »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 194
Mots-clés trouvés : avoir

- **A « Etape processus »** : _07_Reporting
- **B « Etape sous-processus »** : 006 Prep expédition
- **C « NR BR »** : BR-07-006-010
- **D « BR intégré dans flux eWM2.0 »** : Reporting - Pas listé dans les flux
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **J « Geformaliseerde beschrijving NL »** : Een orderstatusrapport maken (wanneer is picking gestart / zijn de goederen verpakt / zijn de goederen verzonden) om onze SLA te controleren en een betrouwbare informatiebasis voor klanten te hebben

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 202
Mots-clés trouvés : retour

- **A « Etape processus »** : _08_Autre_Anders
- **B « Etape sous-processus »** : Autre
- **C « NR BR »** : BR-08-010-030
- **D « BR intégré dans flux eWM2.0 »** : A traiter dans les flux "retour"
- **F « Description formalisée FR »** : Le système doit pouvoir gérer des HU non nomenclaturées qui peuvent entrer, être mises en cross-dock et ressortir ensuite pour être expédié vers le DC Sch
- **G « BA - action en cours »** : 0
- **H « BA - actions »** :
  > 10/06/26 - @ JST: que veut-on exactement? Réceptionner une HU existante (vide) ou créer une nouvelle HU (vide)
  > 12-06-2026 : HU créée en amont (ex retour) pour être utilisée dans l'EDI, arrive au DC de Ronet et cross-dock pour être expédiée à Sch
- **J « Geformaliseerde beschrijving NL »** : Het systeem moet HU's zonder naamlijstnummer kunnen verwerken die binnenkomen, worden gecrossdockt en vervolgens worden verzonden naar het DC Sch
- **L « SP »** : 1

#### Business_Requirements.xlsx — onglet « Business Requirements 20260220 », ligne 204
Mots-clés trouvés : NNN

- **A « Etape processus »** : _08_Autre_Anders
- **B « Etape sous-processus »** : Autre
- **C « NR BR »** : BR-08-010-050
- **D « BR intégré dans flux eWM2.0 »** :
  > x (Etape 2 stock)
  > x (Etape 2 NNN)
- **E « BR intégré dans blueprint »** : x
- **F « Description formalisée FR »** : Dans le cas de suivi par numéros de série, et dans d'autres cas potentiellement, Le système doit scanner et convertir automatiquement le format "GTIN" en article "NN" afin d'utiliser directement le N° du fabriquant lors des différents encodages. (PRJ0030 - Philippe de Montjoye).
- **J « Geformaliseerde beschrijving NL »** : In het geval van serienummer tracering, en mogelijk ook in andere gevallen, moet het systeem automatisch het "GTIN"-formaat scannen en omzetten naar een "NN"-item om het nummer van de fabrikant rechtstreeks te kunnen gebruiken voor de verschillende invoerbewerkingen. (PRJ0030 - Philippe de Montjoye).
- **L « SP »** : 1

### Onglet « Management Summary » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « Management Summary », ligne 2
Mots-clés trouvés : retour, NNN

- **A** : Replenishment
- **B « Etape de processus »** : Sujets importants sur lesquels le projet eWM 2.0 va essayer d'apporter une réponse (BR validé)
- **C « _01_Réception_Ontvangst »** :
  > le système doit permettre pour chaque ligne de réception :
  >  - Enregistrer toutes les étapes du processus  de réception , du déchargement à la préparation pour stockage (y compris le retour en cas de surquantité).
  >  - Indiquer et gérer systématiquement  tout écart qualitatif et/ou quantitatif (+&-) & DATA et informer directement les personnes concernées.
  >  - Archiver sous le N° de PO tous les documents et information ou photos utiles pour le suivi.
  >  - s'assurer de la mise en diponibilité du stock dans un délai raisonnnable avec gestion des priorités (T8/T9).

#### Business_Requirements.xlsx — onglet « Management Summary », ligne 3
Mots-clés trouvés : fournisseur

- **B « Etape de processus »** : Sujets importants sur lesquels le projet eWM 2.0 ne répondra pas (idées mises hors scope)
- **C « _01_Réception_Ontvangst »** :
  >  - Gestion des quantités par emballage primaire ==> il se peut que la quantité de l'emballage primaire ne soit pas celle renseignée dans le supply catalogue ( # visses / boîte - ….). Cela peut arriver si il y a plusieurs fournisseurs pour un même article. ==> risque de problème lors de la préparation de commande car l'emballage primair ne peut pas toujours être ouvert et les pièces comptées.
  >  - Livraison en avance : pas de possibilité de suivre les réceptions % aux dates demandées/confirmées.

#### Business_Requirements.xlsx — onglet « Management Summary », ligne 4
Mots-clés trouvés : fournisseur

- **B « Etape de processus »** : Lessons Learned
- **C « _01_Réception_Ontvangst »** :
  > Les instructions transmises en amont aux fournisseurs sont essentielles à un fonctionnement fluide et efficace lors de la réception :
  >  - Ducment de transport complet avec référence
  >  - Introduction de QR code pour PO N° / Item N°
  >  - 1 article / emballage
  >  - Livrer la quantité commandée en 1X
  >  ....

### Onglet « Master Data » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « Master Data », ligne 3
Mots-clés trouvés : mitraille

- **A « Code_Proc_Desc »** : _02_CheckQM_Qmverificatie
- **B « _01_Réception_Ontvangst »** : 001 Vérifier les documents de livraison
- **C « _02_CheckQM_Qmverificatie »** : 001 Mettre le matériel à disposition de l'inspection (stock Q)
- **D « _03_PrépStockage_Opslagvoorbereiding »** : 002 Mettre en stock
- **E « _04_Stockage_Opslag »** : 002 Gérer les articles FEFO
- **F « _05_PrépExpédition_Verzendvoorbereiding »** : 002 Gérer la mitraille
- **G « _06_Expédition_Verzending »** : 002 Mise à disposition pour enlèvement
- **H « _07_Reporting »** : 002 Réception
- **I « Processus »** : Réception des marchandises / Goederenontvangst
- **J « Code_Proc_Desc 
(pour utilisation dans liste déroulante) »** : _01_Réception_Ontvangst
- **K « Code Sous-Processus & Desc »** : 001 Vérifier les documents de livraison
- **L « Code Processus »** : 01
- **M « Code Sous-Processus »** : 001
- **N « Code Proc-SsProc »** : 01-001
- **P « Couvert par »** : EWM Bascoup

#### Business_Requirements.xlsx — onglet « Master Data », ligne 4
Mots-clés trouvés : refus, NNN

- **A « Code_Proc_Desc »** : _03_PrépStockage_Opslagvoorbereiding
- **B « _01_Réception_Ontvangst »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « _02_CheckQM_Qmverificatie »** : 002 Implémenter la décision (lot refusé)
- **E « _04_Stockage_Opslag »** : 003 Effectuer les inventaires (cycle count)
- **F « _05_PrépExpédition_Verzendvoorbereiding »** : 003 Créer le bon sans référence
- **G « _06_Expédition_Verzending »** : 003 Charger les marchandises
- **H « _07_Reporting »** : 003 QM
- **I « Processus »** : Réception des marchandises / Goederenontvangst
- **J « Code_Proc_Desc 
(pour utilisation dans liste déroulante) »** : _01_Réception_Ontvangst
- **K « Code Sous-Processus & Desc »** : 002 Réceptionner PO pour NNN / Cons directe
- **L « Code Processus »** : 01
- **M « Code Sous-Processus »** : 002
- **N « Code Proc-SsProc »** : 01-002
- **P « Couvert par »** : EWM Standard

#### Business_Requirements.xlsx — onglet « Master Data », ligne 12
Mots-clés trouvés : refus

- **I « Processus »** : Check QM (interne infrabel) / QM-verificatie (intern Infrabel)
- **J « Code_Proc_Desc 
(pour utilisation dans liste déroulante) »** : _02_CheckQM_Qmverificatie
- **K « Code Sous-Processus & Desc »** : 002 Implémenter la décision (lot refusé)
- **L « Code Processus »** : 02
- **M « Code Sous-Processus »** : 002
- **N « Code Proc-SsProc »** : 02-002

#### Business_Requirements.xlsx — onglet « Master Data », ligne 23
Mots-clés trouvés : mitraille

- **I « Processus »** : Préparation pour expédition / Verzendvoorbereiding
- **J « Code_Proc_Desc 
(pour utilisation dans liste déroulante) »** : _05_PrépExpédition_Verzendvoorbereiding
- **K « Code Sous-Processus & Desc »** : 002 Gérer la mitraille
- **L « Code Processus »** : 05
- **M « Code Sous-Processus »** : 002
- **N « Code Proc-SsProc »** : 05-002

### Onglet « Blueprint - questions » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 3
Mots-clés trouvés : retour

- **A « Etape processus »** : _08_Autre_Anders
- **B « Etape sous-processus »** : Autre
- **C « BA - action en cours »** : 0
- **D « BA - actions »** :
  > 25-06-2026 : Pour IMM :
  > Idée d'utiliser des magasins différents (sous la même division que le DC) par "garage" avec transfert entre les magasins (déjà testé par BRM et cela fonctionne) :
  >   - Sortie du DC : 8*
  >   - Retour par un 18* (que IMM doit créer)
  > -> pas d'impact sur le MRP car le stock est sous la division (même en cas de revue de l'architecture SAP, il y a moyen que le MRP prenne compte de tout le stock présent dans les différents magasins)
  > A présenter à JST

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 4
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « BA - action en cours »** : 0
- **D « BA - actions »** :
  > dans le cas d'un NNN, doit-on pouvoir encoder n° de série? (l'article n'est pas dans SAP, donc il n'y aura pas de trigger - si n° série présent sur article, doit-il quand même être encodé?
  > 10-07-26 follow-up BP : pour NN conso dir, cela devrait être possible. Pour NNN, cela incomberait au service en charge de l'immatriculation / contrôle légal?
  > 14-07-2026 : info remise à BRM

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 5
Mots-clés trouvés : NNN

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 002 Réceptionner PO pour NNN / Cons directe
- **C « BA - action en cours »** : 0
- **D « BA - actions »** :
  > Dans le cas d'un NNN, comment savoir si l'article doit être envoyé en immatriculation/(Q)?
  > 10-07-26 follow-up BP : trigger dans le PO > signal pour bifurquer vers IMM (garage Draisine, ....). Il n'y aura problablement pas de génération de n° IMM (comme pour les NN). Il reviendra au garage Draisine de générer le n° IMM + l'enregistrer (où / comment ...? > sujet à évoquer dans le cadre 'solution access draisine - immatriculation'?)
  > 14-07-2026 : info remise à BRM

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 6
Mots-clés trouvés : fournisseur

- **A « Etape processus »** : _01_Réception_Ontvangst
- **B « Etape sous-processus »** : 001 Vérifier les documents de livraison
- **C « BA - action en cours »** : 0
- **D « BA - actions »** :
  > Tenir compte de la réception des STO sur base de l'ASN
  >  - Pour le moment Bernard nous annonce 1 ASN par bon 8*
  >  - Possibilité de réceptionner sur base du num HU? (Attention de faire qd même un split pour un T8 - mais qui normalement partira dans une HU à part)
  > Note : "Toute la livraison" = plusieurs HU qui contiennent elles-mêmes plusieurs bon 8* (parfois des bons 8* partiels!)
  > But : Pouvoir réceptionner par HU (si HU-managed chez l'expéditeur) pour minimiser le nombre de lignes à l'écran à la vérification documentaire
  > Note : SAP génère automatiquement un 18* lors de la sortie de marchandises d’un BL 8* sortant d’un quelconque magasin (IM / WM / eWM) mais qui a pour destination un magasin eWM (attention que ce 18* est généré lors de la sortie de stock et donc trop tard pour que le numpéro apparaisse sur les documents du transporteur)
  > 27-08-2026 : Réception en HU pourrait être possible mais uniquement si l'expédition du magasin cédant se fait par HU -> et donc, ne serait pas possible pour les fournisseurs (à moins qu'on achète un autre module SAP qui permet la création de HU et que les fournisseurs se plient à cette exigence) --> On reste sur la réception des HU pour des STO

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 19
Mots-clés trouvés : avoir

- **C « BA - action en cours »** : 2
- **D « BA - actions »** :
  > Dans le cadre des flux IMM et Ctrl Q, est-ce qu'un mouvement comptable peut/doit/ne doit pas avoir lieu?
  > 25-09-2026 : discussion avec le business
  > Dans le AS IS  l'article n'est physiquement plus dans le DC mais dans SAP elle est tjs dans sa BIN. Il serait alors encore possible de picker dessus.  
  > Besoins : 
  > -> On ne doit pas pouvoir picker dessus pour les clients (on doit pouvoir l'envoyer au RS pour ctrl Q / garage draisine pour Imm)
  > -> Le MRP ne doit pas effectuer du réappro
  > -> Tjs pouvoir le tracer
  > Question pour BRM : possible d'avoir les mêmes flux pour Imm et Ctrl Q?

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 21
Mots-clés trouvés : NNN

- **C « BA - action en cours »** : 3
- **D « BA - actions »** :
  > Comment déterminer le client d'un NNN/cons dir quand la demande est faite sur un SP? 
  > Si la demande est faite sur le mag A du DC, l'info est connue. Comment ça se passe déjà actuellement?
  > 25-09-2026 : discussion avec le business
  > -> demandeur dans le PO
  > -> Le DC Ronet s'occupe de ces commandes avec sa casquette CLI. Les commandes sur les SP n'arrivent pas au DC

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 23
Mots-clés trouvés : avoir

- **A « Etape processus »** : _08_Autre_Anders
- **B « Etape sous-processus »** : Cross Dock
- **C « BA - action en cours »** : 2
- **D « BA - actions »** :
  > Les articles qui arrivent de Sch à GZH et qui doivent être envoyés à Ostende (vrai cross-dock)
  >    - ne seront pas mis physiquement en stock mais les mouvements comptables doivent avoir lieu.
  >    - avec les autres pièces pickées seront consolidés.

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 25
Mots-clés trouvés : refus, mitraille

- **A « Etape processus »** : _08_Autre_Anders
- **B « Etape sous-processus »** : Mitraille
- **C « BA - action en cours »** : 2
- **D « BA - actions »** :
  > Qui prend en charge financièrement la mise en mitraille d'un article réceptionné et qui est refusé (acheteur nous dit de le mettre en mitraille). 
  > 30-09-2026 : suite discussion avec Phil/Manon 
  > Si il s'agit d'articles qui sont en cours de réception -> comme ils ne sont pas encore réceptionnés en stock, aucun mouvement n'est effectué dans SAP et donc aucune imputation n'est effectuée
  > S'il s'agit d'articles déjà en stock et que la mise en mitraille est de la responsabilité du DC c'est le centre de coût du DC qui est utilisé. Si pas, une recherche est effectuée pour connaître le centre de coût à utiliser

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 26
Mots-clés trouvés : retour

- **B « Etape sous-processus »** : MMD
- **C « BA - action en cours »** : 2
- **D « BA - actions »** : Faire retour meeting Elsy avec Bernard

#### Business_Requirements.xlsx — onglet « Blueprint - questions », ligne 27
Mots-clés trouvés : échantillon, NNN, 107

- **A « Etape processus »** : _05_PrépExpédition_Verzendvoorbereiding
- **B « Etape sous-processus »** : Ctrl Q
- **C « BA - action en cours »** : 3
- **D « BA - actions »** :
  > Contrôle Q : pistes à évoquer :
  >    1. Contrôle Q après 18* - sans aller jusqu'au 107 (comme NNN - conso dir) : ensuite entamer flux Q
  >    2. Boucler inbound standard (Mise en stock sous Q) - ensuite faire picking échantillon pour contrôle Q / workstation

### Onglet « How To » (ligne d’en-tête détectée : L2)

#### Business_Requirements.xlsx — onglet « How To », ligne 4
Mots-clés trouvés : retour

- **A « 0 »** : 1
- **B « Plus d'action à prendre »** : En attente de retour d'un tiers

### Onglet « Feuil2 » (ligne d’en-tête détectée : L2)

#### Business_Requirements.xlsx — onglet « Feuil2 », ligne 4
Mots-clés trouvés : refus

- **B « BR-07-005-010 »** : BR-04-004-020-A
- **C « Rapport de tri A/B/C : le système doit permettre de challenger les paramètres A/B/C en fonction de l'historique de mouvements afin d'optimiser les emplacements de stockage :
-> Est-ce que les marchandises sont référencées dans les bonnes zones A/B/C ? (zones A/B/C replenishement vs zones A/B/C sur base des mouvements magasin) -> Tenir compte des déplacements des marchandises dans le magasin : ce qui bouge le plus doit être le plus à portée de main
-> Au sein de chaque zone A/B/C, pouvoir réarranger les palettes en fonction de la fréquence des mouvements »** :
  > Le système doit proposer une optimisation de stockage sous forme de réserve de travail. Le coordinateur doit pouvoir accepter/refuser chaque ligne proposée (piste de solution : file d'attente, wave..)
  > (ex : une petite palette dans une bin qui permet de stocker une plus grande palette doit recevoir une tâche de transfert pour être relocalisée dans une plus petite bin)
- **D « Via un rapport dynamique (Mouvement interne), Le système doit pour afficher les emplacements pouvant être optimiser selon les propositions du système sur base du slotting et rearrangement. Le coordinateur peut accepter les propositions du système et ainsi déplacer »** : Pas encore repris dans le blueprint. Seulement dans notre feedback du blueprint "Internal process document"

#### Business_Requirements.xlsx — onglet « Feuil2 », ligne 7
Mots-clés trouvés : avoir

- **A « Optimisation de stockage »** : Articles avec date de péremption
- **B « BR-07-005-010 »** : BR-07-005-060
- **C « Rapport de tri A/B/C : le système doit permettre de challenger les paramètres A/B/C en fonction de l'historique de mouvements afin d'optimiser les emplacements de stockage :
-> Est-ce que les marchandises sont référencées dans les bonnes zones A/B/C ? (zones A/B/C replenishement vs zones A/B/C sur base des mouvements magasin) -> Tenir compte des déplacements des marchandises dans le magasin : ce qui bouge le plus doit être le plus à portée de main
-> Au sein de chaque zone A/B/C, pouvoir réarranger les palettes en fonction de la fréquence des mouvements »** : Rapport avec la liste des articles périmés ou qui arrivent à xx jours avant la date de péremption
- **D « Via un rapport dynamique (Mouvement interne), Le système doit pour afficher les emplacements pouvant être optimiser selon les propositions du système sur base du slotting et rearrangement. Le coordinateur peut accepter les propositions du système et ainsi déplacer »** : Le coordinateur doit pouvoir consulter un rapport lui permettant d'afficher les articles périmés ou qui arrivent bientôt à expiration. La sélectionne des dates doit être dynamique. 
- **E « -> ok

J'ai mis un commentaire à Moustapha pour que le texte soit plus compréhensible. Le but : 
Rapport proposant au coordinateur le transfert d'articles d'une BIN vers une autre en fonction du calcul des mouvements magasin.
Une fois le transfert accepté, générer une tâche magasin. »** :
  > Pour moi, ces deux BR se rejoignent. Je ne comprends d'ailleurs pas bien ce qui est noté dans le blueprint pour le BR-04-002-010-B.
  > Si on veut vraiment ce rapport, je laisserais donc juste ce qui est noté pour le BR-07-005-060.
  > Mais par contre, je me demande quel est l'objectif de ce rapport?
- **F** :
  > Pour les articles soumis à une date de péremption dont la durée résiduelle est inférieure au seuil minimal et pour les articles ayant un statut spécifique (liste des statuts à définir):
  > - ces articles doivent être bloqués pour picking
  > - ces articles doivent être pris en compte pour un réappro éventuel
  > - ces articles doivent être affectés à une vague de picking dédiée afin de permettre leur évacuation 
  > - un rapport doit être consultable 
  >    > pour tous ces articles et BIN impliquées (-> permet d'avoir une vue sur les BIN qui seront bientôt vidées - car des tâches magasin existent déjà) + envoi régulier de cette liste à repl
  >    > pour tous ces articles déjà pickés (-> permet d'avoir une vue sur des activités "hors flux classique d'un DC")
  >
  > Note : à aucun moment le coordinateur doit prendre d'action

#### Business_Requirements.xlsx — onglet « Feuil2 », ligne 11
Mots-clés trouvés : mitraille

- **A « Optimisation de stockage »** : Articles avec statut spécifique
- **B « BR-07-005-010 »** : BR-04-002-010-A
- **C « Rapport de tri A/B/C : le système doit permettre de challenger les paramètres A/B/C en fonction de l'historique de mouvements afin d'optimiser les emplacements de stockage :
-> Est-ce que les marchandises sont référencées dans les bonnes zones A/B/C ? (zones A/B/C replenishement vs zones A/B/C sur base des mouvements magasin) -> Tenir compte des déplacements des marchandises dans le magasin : ce qui bouge le plus doit être le plus à portée de main
-> Au sein de chaque zone A/B/C, pouvoir réarranger les palettes en fonction de la fréquence des mouvements »** :
  > Le système doit émettre : 
  > - Tâches de picking sur les articles Z3 (pour mitraille)
- **D « Via un rapport dynamique (Mouvement interne), Le système doit pour afficher les emplacements pouvant être optimiser selon les propositions du système sur base du slotting et rearrangement. Le coordinateur peut accepter les propositions du système et ainsi déplacer »** : Le système devra émettre des tâches de picking spécifiques pour les articles ayant un statut particulier. 
- **E « -> ok

J'ai mis un commentaire à Moustapha pour que le texte soit plus compréhensible. Le but : 
Rapport proposant au coordinateur le transfert d'articles d'une BIN vers une autre en fonction du calcul des mouvements magasin.
Une fois le transfert accepté, générer une tâche magasin. »** : Remarque que nous avons mise : idem que BR-05-005-160-D mais sur base du statut de l'article (liste des statuts à définir)

### Onglet « 1 BR Réception » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 1 BR Réception », ligne 4
Mots-clés trouvés : NNN

- **A « Etape processus »** : 1
- **B « Processus »** : Réception
- **C « Etape sous-processus »** : 2
- **D « Sous-processus »** : Réceptionner PO pour NNN / Cons directe
- **E « Type flux »** : PO
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Une fois la réception effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que 
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO) 
  > - et que son matériel sera expédié avec la prochaine tournée

#### Business_Requirements.xlsx — onglet « 1 BR Réception », ligne 14
Mots-clés trouvés : 107

- **A « Etape processus »** : 1
- **B « Processus »** : Réception
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Lors de l'annulation de la réception 107, le système doit mettre à jour la livraison automatiquement
- **G « Numéroration vers le As-Is »** : #REF!

#### Business_Requirements.xlsx — onglet « 1 BR Réception », ligne 15
Mots-clés trouvés : avoir, 107, 109

- **A « Etape processus »** : 1
- **B « Processus »** : Réception
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Lors de l'annulation de la réception 109 :
  > Pouvoir avoir le choix d'annuler 
  > - juste 109 
  > - ou 109+107+livraison
  > Le système doit effectuer les modification/annulation automatiquement
- **G « Numéroration vers le As-Is »** : #REF!

#### Business_Requirements.xlsx — onglet « 1 BR Réception », ligne 22
Mots-clés trouvés : retour

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Au retour de l'article suite à son immatriculation, un document doit être joint avec les référence du COPO
- **G « Numéroration vers le As-Is »** : #REF!

### Onglet « 2 BR Check QM » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 2 BR Check QM », ligne 4
Mots-clés trouvés : labo

- **A « Etape processus »** : 2
- **B « Processus »** : Check QM (interne infrabel)
- **C « Etape sous-processus »** : 2
- **D « Sous-processus »** : Envoi des lots pour contrôle qualité
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Il doit être possible, pour tout article à inspecter, de tracer la marchandise dans son flux externe (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)

#### Business_Requirements.xlsx — onglet « 2 BR Check QM », ligne 6
Mots-clés trouvés : refus

- **A « Etape processus »** : 2
- **B « Processus »** : Check QM (interne infrabel)
- **C « Etape sous-processus »** : 3
- **D « Sous-processus »** : Implémentation de la décision (lot refusé)

#### Business_Requirements.xlsx — onglet « 2 BR Check QM », ligne 10
Mots-clés trouvés : refus, échantillon

- **A « Etape processus »** : 2
- **B « Processus »** : Check QM (interne infrabel)
- **C « Etape sous-processus »** : 5
- **D « Sous-processus »** : Implémentation de la décision (lot accepté)
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Il doit être possible de prendre la DU (acceptée / partiellement acceptée / refusée) sur un lot d'inspection que la marchandise est entièrement envoyée pour inspection / seul un échantillon est envoyé (= types magasin différents)

#### Business_Requirements.xlsx — onglet « 2 BR Check QM », ligne 14
Mots-clés trouvés : refus, fournisseur, échantillon

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Business Requirements QM :
  > Inspection chez le fournisseur
  > Blocage à la réception
  > Acceptation / Refus
  > Circulation des échantillons

### Onglet « 4 BR Stockage » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 4 BR Stockage », ligne 17
Mots-clés trouvés : mitraille, avoir

- **A « Etape processus »** : 4
- **B « Processus »** : Stockage
- **C « Etape sous-processus »** : 4
- **D « Sous-processus »** : Gestion stock dormant
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Le sytème doit pouvoir nous piloter dans la gestion du stock dormant:
  > - Produire un rapport d'articles qui sont sans mouvements depuis X temps (par ex: 1 an)
  > - Créer une vague d'inventaire sur base du rapport pour recompter physiquement ce stock et filmer la palette + créer une étiquette avec article, desc, date, mention "stock dormant",...
  > - Créer une vague de picking sur ce stock dormant afin de de relocaliser en zone de massification => densifier les HU dormantes dans une HU globale + mettre en stock dans une bin où il peut déjà y avoir d'autres HU
- **H « Remarque »** :
  > Stock dormant = articles actifs dans SAP mais qui n'ont plus de mouvement depuis une période donnée
  >
  > Stock mort = articles déclarés à supprimer/mitrailler dans SAP

#### Business_Requirements.xlsx — onglet « 4 BR Stockage », ligne 20
Mots-clés trouvés : mitraille, fournisseur

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Le système doit permettre:
  > - au magasinier de signaler une anomalie constatée (marchandise déteriorée ou qui ne correspond pas aux caractéristiques) et de remonter l'info aux coordinateurs (mail + photo)
  > - au coordinateur d'assurer le suivi de l'anomalie (vague de mitraille, plainte fournisseur,...)

### Onglet « 5 BR Prep expédition » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 2
Mots-clés trouvés : avoir

- **A « Etape processus »** : 5
- **B « Processus »** : Préparation pour expédition
- **C « Etape sous-processus »** : 1
- **D « Sous-processus »** : Faire immatriculer les articles
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Tous les articles qui sont soumis à immatriculation doivent avoir un numéro de nomenclature (plus de Non NN) afin de gérer les flux articles avec la traçabilité classique de SAP

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 4
Mots-clés trouvés : retour, mitraille

- **A « Etape processus »** : 5
- **B « Processus »** : Préparation pour expédition
- **C « Etape sous-processus »** : 2
- **D « Sous-processus »** : Gestion de la mitraille
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Le système doit permettre d'effectuer une sortie de marchandises de manière distincte (code mouvements différents? / imputation spécifique?) pour 
  > - les articles Z3 (à mitrailler)
  > - articles périmés 
  > - articles déteriorés
  > afin de pouvoir distinguer les types de sortie de marchandises
- **H « Remarque »** : A rediscuter sur le flux "retour"

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 8
Mots-clés trouvés : avoir

- **A « Etape processus »** : 5
- **B « Processus »** : Préparation pour expédition
- **C « Etape sous-processus »** : 4
- **D « Sous-processus »** : Préparer le chargement avec bon sans référence
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Avoir des HU de préparation liées au bon 8* sans référence
  > Ces HU sont liés à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle)
  > Pouvoir localiser ces HU dans une zone de staging pour préparer l'expédition / enlèvement / transfert vers SP…

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 13
Mots-clés trouvés : avoir

- **A « Etape processus »** : 5
- **B « Processus »** : Préparation pour expédition
- **C « Etape sous-processus »** : 6
- **D « Sous-processus »** : Lancer les vagues de picking
- **E « Type flux »** : 1
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) afin de préparer le huddle de J-1

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 22
Mots-clés trouvés : avoir

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > En fonction de la localisation (LR35 / tours..) et du volume à picker, les coordinateurs doivent avoir la possibilité de choisir si le picking s'effectuera par 
  > - emplacement / clients (= multi-picking)
  > - client / emplacements (= picking par destination)

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 42
Mots-clés trouvés : avoir

- **A « Etape processus »** : 5
- **B « Processus »** : Préparation pour expédition
- **C « Etape sous-processus »** : 8
- **D « Sous-processus »** : Consolider la marchandise
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** :
  > Lors de la consolidation d'un client : 
  >   - le magasinier scanne une première HU de préparation afin que le système active la consolidation de ce client
  >   - Si le picking du client n'est pas terminé, un message d'avertissement doit être affiché pour prévenir le magasinier
  >   - le magasinier précise ensuite le type d'HU d'expédition nécessaire (palette, boîte) et éventuellement le nombre de HU si connu.
  >   - Une étiquette de HU d'expédition est imprimée   
  >   - La liste des BIN de consolidation est affichée à l'écran du scanner
  >   - Le magasinier choisit l'ordre des HU de préparation à consolider et les confirme au fur et à mesure
  >   - Chaque HU de préparation et la HU d'expédition doivent être scannées afin de confirmer que la HU de préparation a quitté la BIN de consolidation et qu'elle est maintenant dans la HU d'expédition
  >   - Le magasinier doit avoir la possibilité d'imprimer une nouvelle HU d'expédition car la HU précédente est physiquement pleine

#### Business_Requirements.xlsx — onglet « 5 BR Prep expédition », ligne 45
Mots-clés trouvés : NNN

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Pouvoir associer une livraison de marchandises NNN / cons directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport.

### Onglet « 6 BR Expédition » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 6 BR Expédition », ligne 5
Mots-clés trouvés : avoir

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Le coordinateur doit avoir la possibilité de créer des demandes de transport exceptionnelles (hors EDI) vers un transporteur accrédité qui n'a pas de contrat

#### Business_Requirements.xlsx — onglet « 6 BR Expédition », ligne 7
Mots-clés trouvés : avoir

- **A « Etape processus »** : 6
- **B « Processus »** : Expédition pour marchandises
- **C « Etape sous-processus »** : 2
- **D « Sous-processus »** : Mise à disposition pour enlèvement
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Le coordinateur doit avoir la possibilité de créer des demandes d'enlèvement (hors EDI) sans lien avec une facturation

#### Business_Requirements.xlsx — onglet « 6 BR Expédition », ligne 11
Mots-clés trouvés : avoir

- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Le coordinateur doit avoir la possibilité d'encodage le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu lors de l'enlèvement des marchandises

### Onglet « 8 BR Retour » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « 8 BR Retour », ligne 2
Mots-clés trouvés : retour

- **A « Etape processus »** : 8
- **B « Processus »** : Retour
- **F « Proposition Bus Req (Philippe, Manon, Delphine) »** : Qui s'occupe des retours? Comment?

### Onglet « Ex à GZH » (ligne d’en-tête détectée : L1)

#### Business_Requirements.xlsx — onglet « Ex à GZH », ligne 2
Mots-clés trouvés : fournisseur

- **A** : Fonctionnalité / Functionaliteit
- **B « Réception des marchandises / Goederenontvangst »** : Le système doit permettre au magasinier de transmettre des photos à la réception dans le cas d'une non-conformité afin de enrichir le dossier de réclamation/plainte
- **C « Check QM / QM verificatie »** : Le système doit permettre à l'inspecteur (réceptionnaire QM) de pouvoir décider qu'une livraison peut être acceptée au DC en "stock bloqué" afin de pouvoir venir faire l'inspection facultativement au DC à la place de chez le fournisseur
- **E « Stockage / Opslag »** : Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au client
- **F « Préparation pour expédition / Verzendvoorbereiding »** : Het systeem moet de operator in staat stellen om een complete en correcte artikel database te kunnen tonen, die ten allen tijden beschikbaar is op pc, PDA (EWM). En bovendien eventueel de mogelijkheid bieden aan de operator om via een directie functie/link eventuele anomalieën te melden aan MMD of zelf aan te passen in de fiche
- **G « Expédition et full EDI / Verzending& Full EDI »** : Le système doit permettre au coordinateur de demander le transport dès la fin de la consolidation de toute la marchandise sans faire le GI au-préalable afin de suivre la marchandise dans le système (système = physique)
- **H « Reporting »** : Le système doit permettre au teamlead de sortir des KPIs sur le taux de pikking réalisé afin d'analyser le taux de performance et les root causes éventuelles
- **I « Autre »** : Het systeem moet userfriendly zijn zodat "magazin" het een "gemak" vindt om er me te werken

---

## Blueprint_Immatriculation.docx
Source : Drive 1X2G6g-Njdf8oRYLU5IEeamgviLk_1TDZX34qURDCfdY (Google Doc)
Texte de référence : `Blueprint_Immatriculation.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **9**

#### Blueprint_Immatriculation.docx — ligne 3 — section : Introduction
Mots-clés trouvés : retour

> Ce document décrit le flux logistique des articles envoyés à l’immatriculation, depuis leur réception au DC de Ronet jusqu’à leur retour et leur mise en stock éventuelle. Il précise les opérations réalisées par le magasinier, les traitements attendus du système et les échanges avec le lieu d’immatriculation, notamment le garage Draisine.

#### Blueprint_Immatriculation.docx — ligne 20 — section : Introduction
Mots-clés trouvés : retour

> Retour après immatriculation | Création du document de retour → vérification documentaire → première et deuxième étapes de réception → mise en stock éventuelle.

#### Blueprint_Immatriculation.docx — ligne 47 — section : Introduction
Mots-clés trouvés : retour

> 4. Retour après immatriculation

#### Blueprint_Immatriculation.docx — ligne 48 — section : Introduction
Mots-clés trouvés : retour

> 4.1 Préparer le retour vers Ronet

#### Blueprint_Immatriculation.docx — ligne 49 — section : Introduction
Mots-clés trouvés : retour

> Le retour nécessite un document permettant de recevoir les articles au DC. Pour cela, un  transfert du magasin du lieu d’immatriculation vers le magasin A, avec génération d’une livraison entrante est prévu. Le responsable de cette opération reste à déterminer entre le DC et l’atelier, notamment le garage Draisine.

#### Blueprint_Immatriculation.docx — ligne 50 — section : Introduction
Mots-clés trouvés : retour

> Pour le retour depuis le garage Draisine, le document de référence et son mode de création restent à confirmer.

#### Blueprint_Immatriculation.docx — ligne 52 — section : Introduction
Mots-clés trouvés : retour

> À l’arrivée des articles, le magasinier effectue la vérification documentaire suivant le processus Inbound. Le document de retour permet d’identifier la réception à traiter. Lorsque le retour est effectué par un transporteur, le chauffeur présente le document de référence prévu pour ce flux.

#### Blueprint_Immatriculation.docx — ligne 55 — section : Introduction
Mots-clés trouvés : retour

> Les articles retournés après immatriculation by-passent la réception première étape et sont traités à la deuxième étape de réception. Les contrôles et confirmations sont exécutés selon le processus Inbound applicable au retour.

#### Blueprint_Immatriculation.docx — ligne 57 — section : Introduction
Mots-clés trouvés : retour

> Au retour d’immatriculation, les articles font l’objet d’une nouvelle réception à Ronet. Après la vérification documentaire, ils sont réceptionnés directement en deuxième étape, puis orientés vers leur emplacement de stockage.

---

## CR_meetings_2026-11-13.docx
Source : Drive 1ZUNd1HEMUHV4XR9cOhnu8WTR4eHe3AtL
Texte de référence : `CR_meetings_2026-11-13.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **11**

#### CR_meetings_2026-11-13.docx — ligne 30 — section : | Action | Responsable | Échéance | Meeting
Mots-clés trouvés : retour

> 9 | Contacter Brice (en congé) sur le problème d'annulation lié à la livraison « 813 222 75 post 20 813 » (référence dictée, à vérifier) | Moustafa | Au retour de Brice | 4

#### CR_meetings_2026-11-13.docx — ligne 41 — section : Points ouverts et décisions à prendre
Mots-clés trouvés : retour

> Interface RF / PDA | Recueillir le retour des opérateurs de Gand et Bascoup sur l'intuitivité réelle | 2

#### CR_meetings_2026-11-13.docx — ligne 42 — section : Points ouverts et décisions à prendre
Mots-clés trouvés : fournisseur

> Automatisation | Qui optimise la séquence d'appel des plateaux des 9 tours : SAP, WMS intermédiaire ou WCS fournisseur ? | 1

#### CR_meetings_2026-11-13.docx — ligne 67 — section : Réception
Mots-clés trouvés : 109

> Bouton EM → mouvement 109 ; HU en zone réception/staging avant rangement.

#### CR_meetings_2026-11-13.docx — ligne 80 — section : Stockage automatisé (Kardex, tours)
Mots-clés trouvés : fournisseur

> Répartition des rôles SAP / WMS intermédiaire / contrôleur fournisseur (WCS) à définir clairement pour éviter les renvois de responsabilité.

#### CR_meetings_2026-11-13.docx — ligne 123 — section : Power BI et productivité
Mots-clés trouvés : 109

> Inbound à couvrir : mouvements 101, 109 et autres mouvements de réception. Power BI alimenté par Excel écarté.

#### CR_meetings_2026-11-13.docx — ligne 156 — section : Codes-barres
Mots-clés trouvés : refus

> Le système doit rejeter un code qui ne correspond pas à l'action (exemple Ariane : DataMatrix attendu, code linéaire refusé).

#### CR_meetings_2026-11-13.docx — ligne 168 — section : Options d'interface
Mots-clés trouvés : fournisseur

> Surcouche externe (Kinaptis) | Affichage libre des données SAP « en 15 jours » (promesse jugée optimiste) | 750–800 par utilisateur et par an, non par utilisateur actif ; fournisseur et support en plus

#### CR_meetings_2026-11-13.docx — ligne 172 — section : Options d'interface
Mots-clés trouvés : retour

> Recueillir le retour de Gand et Bascoup : les opérateurs s'y sont habitués, cela ne prouve pas que c'est intuitif. Cible : un magasinier formé rapidement comprend le flux seul.

#### CR_meetings_2026-11-13.docx — ligne 181 — section : Synthèse par GAP
Mots-clés trouvés : NNN

> GAP BR-01-002-020-A | E-mail auto après réception d'un article NNN / consommation directe (n° HU, localisation, n° PO, départ avec la prochaine tournée sauf contre-indication du TOM) | Nombre et moment des notifications ouverts

#### CR_meetings_2026-11-13.docx — ligne 183 — section : Synthèse par GAP
Mots-clés trouvés : retour

> GAP BR-05-005-120-D | Ship complete : annulation des ordres si prélèvement incomplet, remise en stock, re-picking au retour du stock, alerte Replenishment | Besoin reconnu, priorité à décider

---

## Follow-up_Ronet.xlsx
Source : Drive 1G8BX6Axh6DYg5uShPktWBV96ilVCXgkb2OqcnhY9_jo (Google Sheet)

Nombre d’extraits : **4**

### Onglet « Blueprint » (ligne d’en-tête détectée : L1)

#### Follow-up_Ronet.xlsx — onglet « Blueprint », ligne 9
Mots-clés trouvés : retour

- **A « Domaine »** : Retours
- **B « Action »** : Lister GAP  
- **C « Responsable »** : Youssef 
- **D « Échéance »** : 2026-09-18
- **E « Statut »** : En cours
- **F « Commentaire »** : Session prévu la semaine du 2/11

#### Follow-up_Ronet.xlsx — onglet « Blueprint », ligne 15
Mots-clés trouvés : retour

- **A « Domaine »** : Retours
- **B « Action »** : Rédiger le BPR
- **C « Responsable »** : Youssef
- **E « Statut »** : A faire
- **F « Commentaire »** : Open point to be discussed Session prévu la semaine du 2/11

#### Follow-up_Ronet.xlsx — onglet « Blueprint », ligne 18
Mots-clés trouvés : NNN

- **A « Domaine »** : NNN
- **B « Action »** : Lister GAP  
- **C « Responsable »** : Youssef 
- **D « Échéance »** : 2026-09-18
- **E « Statut »** : Fait

#### Follow-up_Ronet.xlsx — onglet « Blueprint », ligne 19
Mots-clés trouvés : NNN

- **A « Domaine »** : NNN
- **B « Action »** : Rédiger le BPR
- **C « Responsable »** : Youssef 
- **E « Statut »** : Fait

---

## Taches_Follow-up_Ronet_05-11.xlsx
Source : Drive 1VTI_8IX-41ImN7hEMS7-d-R67VLt0n3zBeEqeai_wLM (Google Sheet)

Nombre d’extraits : **2**

### Onglet « Tâches Follow-up Ronet — 05-11- » (ligne d’en-tête détectée : L2)

#### Taches_Follow-up_Ronet_05-11.xlsx — onglet « Tâches Follow-up Ronet — 05-11- », ligne 17
Mots-clés trouvés : retour

- **A « Tâche »** : Blueprint Retour — intégrer sorties réunion Tours/VLM
- **B « Responsable »** : Moustafa
- **C « Échéance »** : À planifier
- **D « Statut »** : À faire
- **E « Commentaire »** : Suite réunion Tours ; baser sur doc Retour + notes séance

### Onglet « Proposition fusion » (ligne d’en-tête détectée : L2)

#### Taches_Follow-up_Ronet_05-11.xlsx — onglet « Proposition fusion », ligne 6
Mots-clés trouvés : retour

- **A « Tâche proposée (après fusion) »** : F4 — Pack Tours : réunion + retours blueprint
- **B « Responsable »** : Moustafa / Youssef
- **C « Échéance »** : 09/11/2026 puis suite
- **D « Statut proposé »** : À venir / À faire
- **E « Lignes absorbées / sources »** :
  > • T-044 Réunion Tours/Kardex
  > • Blueprint Retour — intégrer sorties réunion Tours/VLM
- **F « Note »** : Fusionner seulement si le Blueprint Retour sort bien de la séance Tours ; sinon garder 2 lignes.

---

## Prep_meeting_Bernard_2026-11-05.md
Source : Drive 1g5XHh1GZB6zSVdU2ojXRK7wTt1PSE_Wu
Texte de référence : `Prep_meeting_Bernard_2026-11-05.md` (numéros de ligne de ce fichier)

Nombre d’extraits : **0**

---

## fiche_capture_meeting_2026-11-03.md
Source : Drive 1OuXavjgWpBSaPWUD-yamEzDpCYsrKduH
Texte de référence : `fiche_capture_meeting_2026-11-03.md` (numéros de ligne de ce fichier)

Nombre d’extraits : **1**

#### fiche_capture_meeting_2026-11-03.md — ligne 18 — section : Points ouverts blueprint (inchangés sans réponses)
Mots-clés trouvés : retour

> - Responsable création document de retour depuis Draisine (DC vs atelier).

---

## Plan_decisions_GAP_List_Ronet_v0.1.xlsx
Source : Drive 1RXojz-xxgQxQEwoJgdIf8z0f1HcSocFZ

Nombre d’extraits : **64**

### Onglet « Synthèse » (ligne d’en-tête détectée : L5)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Synthèse », ligne 26
Mots-clés trouvés : retour
Statut : Statut = Onglets 'GAP List Retours' et 'GAP Integration Tours' : vides (0 ligne).

- **A « Statut »** : Onglets 'GAP List Retours' et 'GAP Integration Tours' : vides (0 ligne).

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Synthèse », ligne 37
Mots-clés trouvés : retour, fournisseur
Statut : Statut = Retour fournisseur (onglet QM)

- **A « Statut »** : Retour fournisseur (onglet QM)
- **B « Inbound »** : 1
- **C « Outbound »** : 2
- **D « Internal »** : 2
- **E « Reporting »** : 5

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Synthèse », ligne 39
Mots-clés trouvés : NNN
Statut : Statut = NNN / Consommation directe

- **A « Statut »** : NNN / Consommation directe
- **B « Inbound »** : 1
- **C « Outbound »** : 3
- **D « Internal »** : 5
- **E « Reporting »** : 9

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Synthèse », ligne 53
Mots-clés trouvés : retour, fournisseur, NNN, 922, 108
Statut : Statut = 8. Retour fournisseur : AS-IS (mvt 108) ou flux retour standard (mvt 922) ; type de document ; cas NNN

- **A « Statut »** : 8. Retour fournisseur : AS-IS (mvt 108) ou flux retour standard (mvt 922) ; type de document ; cas NNN
- **B « Inbound »** : GAP BR-01-003-110 ; BR-02-002-040 ; GAP NNN retour fournisseur
- **E « Reporting »** : Inbound / QM / NNN
- **F « QM »** : Replenishment ; owner Bernard
- **H « NNN »** : Trancher en session Retours (semaine du 2/11)

### Onglet « Plan de décisions » (ligne d’en-tête détectée : L3)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 4
Mots-clés trouvés : litige
Statut : Statut = Analysé; Décision attendue * = Confirmer le GAP et l'objet litige commun (base litiges / avis Q2).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 22
- **E « GAP ID »** : GAP BR-01-003-100
- **F « BR lié(s) »** : BR-01-003-100
- **G « Titre »** : Canal de communication litiges + workflow incidents
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock ; 3.1 – Vérification documentaire
- **I « Statut »** : Analysé
- **J « Owner »** : Bernard
- **K « Commentaires / points ouverts (extrait) »** : Décisions BA 29/06 + update 14/07 (commentaires Word) ; GAP à confirmer avant ajout
- **L « Décision attendue * »** : Confirmer le GAP et l'objet litige commun (base litiges / avis Q2).
- **M « Qui tranche * »** : Replenishment (service impacté) ; owner Bernard
- **N « Prochaine étape * »** : Confirmer le GAP avec Replenishment puis valider la démo BRM.
- **O « Justification priorité * »** : Base litiges réutilisée par plusieurs GAP (QM, Outbound, Reporting) ; « GAP à confirmer avant ajout ».

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 5
Mots-clés trouvés : retour, fournisseur, 922, 108
Statut : Statut = Analysé; Décision attendue * = Choisir entre AS-IS (mail + mvt 108) et flux retour standard EWM (mvt 922).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 24
- **E « GAP ID »** : GAP BR-01-003-110 (à requalifier)
- **F « BR lié(s) »** : BR-01-003-110
- **G « Titre »** : Traçage du retour fournisseur après décision acheteur
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Statut »** : Analysé
- **J « Owner »** : Bernard
- **K « Commentaires / points ouverts (extrait) »** : Lié à BR-02-002-050 (deck QM : unité de transport + GAP 922)
- **L « Décision attendue * »** : Choisir entre AS-IS (mail + mvt 108) et flux retour standard EWM (mvt 922).
- **M « Qui tranche * »** : Replenishment (service impacté) ; owner Bernard
- **N « Prochaine étape * »** : Trancher en session Retours (Follow-up : semaine du 2/11).
- **O « Justification priorité * »** : Deux options ouvertes (AS-IS mvt 108 ou flux retour standard / mvt 922) ; conditionne QM BR-02-002-040 et le BPR Retours.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 8
Mots-clés trouvés : NNN
Statut : Statut = À analyser; Décision attendue * = Retenir une table de remarques DC (spécifique) ou les textes PO/livraison (standard).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 11
- **E « GAP ID »** : GAP BR-01-003-040
- **F « BR lié(s) »** : BR-01-003-040
- **G « Titre »** : Remarques DC sur article (scanner RF)
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Déplacé de la réception 1 vers la réception 2 (update 23/07)
- **L « Décision attendue * »** : Retenir une table de remarques DC (spécifique) ou les textes PO/livraison (standard).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Analyse BRM : comparer avec la solution BR-01-001-050 et proposer une option.
- **O « Justification priorité * »** : Statut « À analyser » ; recouvre partiellement BR-01-001-050.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 9
Mots-clés trouvés : litige
Statut : Statut = Analysé; Décision attendue * = Valider la démo de création automatique du litige (overdelivery).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 18
- **E « GAP ID »** : GAP BR-01-003-020-F
- **F « BR lié(s) »** : BR-01-003-020-F
- **G « Titre »** : Création automatique du litige
- **H « Section blueprint »** : 3.4 – Gestion des anomalies -- Réception stock
- **I « Statut »** : Analysé
- **J « Owner »** : Bernard
- **K « Commentaires / points ouverts (extrait) »** : Valider la démo de la solution proposée par BRM
- **L « Décision attendue * »** : Valider la démo de création automatique du litige (overdelivery).
- **M « Qui tranche * »** : Replenishment (service impacté) ; owner Bernard
- **N « Prochaine étape * »** : Planifier la démo BRM avec Replenishment.
- **O « Justification priorité * »** : Analysé ; validation de la démo BRM attendue par Replenishment.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 11
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Procédure de demande de mise à jour Master Data (D212 vers MMD).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 25
- **E « GAP ID »** : GAP BR-01-000-020
- **F « BR lié(s) »** : BR-01-000-020
- **G « Titre »** : Demande de mise à jour Master Data depuis EWM
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : Clarifier la procédure de mise à jour de master data
- **L « Décision attendue * »** : Procédure de demande de mise à jour Master Data (D212 vers MMD).
- **M « Qui tranche * »** : MMD (service impacté)
- **N « Prochaine étape * »** : Réunion MMD ; lier au RACI Master Data (Follow-up : Yassine, échéance 05/11).
- **O « Justification priorité * »** : Procédure MD à clarifier avec MMD (impact zone de clarification).

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 12
Mots-clés trouvés : NNN
Statut : Statut = À analyser; Décision attendue * = Liste des champs EWM corrigeables et mode de prise de photo.

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 26
- **E « GAP ID »** : GAP BR-01-005-040
- **F « BR lié(s) »** : BR-01-005-040
- **G « Titre »** : Correction/ajout des MD EWM à la réception (photos, poids, dimensions)
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Définir quelles sont les champs EWM concernés.
- **L « Décision attendue * »** : Liste des champs EWM corrigeables et mode de prise de photo.
- **M « Qui tranche * »** : MMD (service impacté)
- **N « Prochaine étape * »** : Analyse BRM + validation MMD.
- **O « Justification priorité * »** : À analyser ; champs EWM et prise de photo non définis.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 13
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Valider la règle de blocage désactivable et la procédure MD associée.

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 27
- **E « GAP ID »** : GAP BR-01-005-050
- **F « BR lié(s) »** : BR-01-005-050
- **G « Titre »** : Blocage de la mise en stock si MD manquantes (désactivable)
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : Clarifier la procédure de mise à jour de master data
- **L « Décision attendue * »** : Valider la règle de blocage désactivable et la procédure MD associée.
- **M « Qui tranche * »** : MMD (service impacté)
- **N « Prochaine étape * »** : Traiter avec BR-01-000-020.
- **O « Justification priorité * »** : Même procédure MD que BR-01-000-020.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 20
Mots-clés trouvés : fournisseur
Statut : Statut = Analysé; Décision attendue * = Confirmer l'input étiquette fournisseur.

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 30
- **E « GAP ID »** : GAP BR-03-001-030
- **F « BR lié(s) »** : BR-03-001-030
- **G « Titre »** : Étiquettes fournisseur des tourets de câbles
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : Confirmer l'input (quelle étiquette) sera envoyée de la part du fournisseur
- **L « Décision attendue * »** : Confirmer l'input étiquette fournisseur.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Rapprocher avec la ligne BR-03-001-030 (ligne 52) déjà répondue le 27/08.
- **O « Justification priorité * »** : Analysé ; dépend de l'étiquette fournisseur (voir aussi ligne 52, réponses business du 27/08).
- **P « Doublon / anomalie * »** : D11 : BR-03-001-030 présent sur 2 lignes Inbound

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 22
Mots-clés trouvés : fournisseur
Statut : Statut = (vide); Décision attendue * = Formaliser les réponses du 27/08 (identifiant unique du touret, encodage facultatif).

- **A « Processus * »** : Inbound – Réception
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 52
- **E « GAP ID »** : BR-03-001-030
- **F « BR lié(s) »** : BR-03-001-030
- **G « Titre »** : — (titre vide dans la source) Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble …
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** :
  > 07-07-2026 : à ajouter dans le blueprint (section 3.3.2.) -> ok
  > 27-08-2026 : Quel est le besoin réel? / Quelles infos précisément avons-nous besoin? : 
  >    > Numéro de touret du fournisseur (comme numéro externe à la HU)?
  >    > Taille du touret? -> Est-ce que cette info est tjs dispo sur l'étiquette? …
- **L « Décision attendue * »** : Formaliser les réponses du 27/08 (identifiant unique du touret, encodage facultatif).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Reporter les réponses du 27/08 dans la ligne GAP BR-03-001-030 (ligne 30) et attribuer un statut.
- **O « Justification priorité * »** : Réponses business du 27/08 déjà présentes ; statut vide.
- **P « Doublon / anomalie * »** : D11 : BR-03-001-030 présent sur 2 lignes Inbound ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 29
Mots-clés trouvés : retour
Statut : Statut = Attente réponse business REPL; Décision attendue * = Génération des BL conditionnée à l'ATP.

- **A « Processus * »** : Outbound – Génération BL & vagues
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 4
- **E « GAP ID »** : GAP BR-05-004-050
- **F « BR lié(s) »** : BR-05-004-050
- **G « Titre »** : Création de la livraison sortante conditionnée à la disponibilité du stock
- **H « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **I « Statut »** : Attente réponse business REPL
- **K « Commentaires / points ouverts (extrait) »** :
  > Point ouvert : commentaires blueprint — attente du retour de Gilles sur la génération des BL en lien avec l'ATP (Kayali 04/08) ; Youssef 25/08 : en cours.
  > Attente Retour Replenishment - meeting 22/10
- **L « Décision attendue * »** : Génération des BL conditionnée à l'ATP.
- **M « Qui tranche * »** : Replenishment ; Gilles (cité dans le commentaire)
- **N « Prochaine étape * »** : Relancer Gilles / Replenishment (suite meeting 22/10).
- **O « Justification priorité * »** : En attente Replenishment (retour de Gilles sur ATP).

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 35
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Retirer du blueprint Outbound (repris dans NNN) ou non.

- **A « Processus * »** : Outbound – Génération BL & vagues
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 5
- **E « GAP ID »** : BR-05-003-010
- **F « BR lié(s) »** : BR-05-003-010
- **G « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **H « Section blueprint »** : 3.1 – Prérequis – génération des livraisons sortantes (BL 8*)
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** :
  > Fait partie du flux 5C Création de bon sans référence. Pas encore traité durant session Blueprint. A retirer du blueprint outbound car repris dans flux NNN? 
  > Mentionner dans le blueprint la possibilité d'utiliser la transaction VL06no pour sortir des articles sur un bon sans réference, c'est du …
- **L « Décision attendue * »** : Retirer du blueprint Outbound (repris dans NNN) ou non.
- **M « Qui tranche * »** : Business (« à reclarifier avec le business »)
- **N « Prochaine étape * »** : Décision éditoriale blueprint ; lister les cas de bons 8* sans référence.
- **O « Justification priorité * »** : Standard Infrabel ; question de périmètre blueprint.
- **P « Doublon / anomalie * »** : D13 : BR-05-003-010 présent en OUT et NNN (reprise NNN)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 45
Mots-clés trouvés : litige
Statut : Statut = À analyser; Décision attendue * = Proposer/valider une variante de la solution litiges pour T8/T9.

- **A « Processus * »** : Outbound – Picking
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 21
- **E « GAP ID »** : GAP BR-05-005-190
- **F « BR lié(s) »** : BR-05-005-190
- **G « Titre »** : Mail automatique à Replenishment et au FMB sur code d'exception T8/T9
- **H « Section blueprint »** : 3.4 – Flux de picking
- **I « Statut »** : À analyser
- **J « Owner »** : Bernard Dehant
- **K « Commentaires / points ouverts (extrait) »** : Proposer/valider une variante de la soltuion pour le processus lititges
- **L « Décision attendue * »** : Proposer/valider une variante de la solution litiges pour T8/T9.
- **M « Qui tranche * »** : Replenishment (service impacté) ; owner Bernard Dehant
- **N « Prochaine étape * »** : Proposition BRM.
- **O « Justification priorité * »** : Variante de la solution litiges à proposer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 50
Mots-clés trouvés : litige
Statut : Statut = À analyser; Décision attendue * = Réutiliser la solution litiges / photos.

- **A « Processus * »** : Outbound – Picking
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 20
- **E « GAP ID »** : GAP BR-05-005-140
- **F « BR lié(s) »** : BR-05-005-140
- **G « Titre »** : Substitution de bobine avec code d'exception, photo et commentaire
- **H « Section blueprint »** : 3.4 – Flux de picking
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Deck (12/6) : question ouverte sur le lien avec la gestion des plaintes — à mutualiser avec la FSP litiges / workflow incidents de l'inbound.
- **L « Décision attendue * »** : Réutiliser la solution litiges / photos.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Analyse après décision GAP BR-01-003-100.
- **O « Justification priorité * »** : À mutualiser avec la FSP litiges inbound.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 60
Mots-clés trouvés : NNN
Statut : Statut = À analyser; Décision attendue * = Confirmer la solution Bascoup et le traitement unique avec Inbound.

- **A « Processus * »** : Outbound – Consolidation & emballage
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 31
- **E « GAP ID »** : BR-05-006-050 (couvert)
- **F « BR lié(s) »** : BR-05-006-050
- **G « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **H « Section blueprint »** : 3.5 – Consolider le picking
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Recouvrement avec la GAP list Inbound (lien de tracking dans la notification) — à traiter une seule fois.
- **L « Décision attendue * »** : Confirmer la solution Bascoup et le traitement unique avec Inbound.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Rapprocher avec GAP BR-05-006-050-B (Inbound/NNN).
- **O « Justification priorité * »** : Standard Infrabel ; recouvrement Inbound à traiter une fois.
- **P « Doublon / anomalie * »** : D13 : BR-05-006-050 présent en OUT et NNN (reprise NNN)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 73
Mots-clés trouvés : NNN
Statut : Statut = A clarifier avec business; Décision attendue * = Valider le besoin et l'interrupteur activable/désactivable ; corriger la numérotation BR.

- **A « Processus * »** : Outbound – Expédition & transport
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 41
- **E « GAP ID »** : GAP BR-01-002-0020-B
- **F « BR lié(s) »** : BR-01-002-0020-B
- **G « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **H « Section blueprint »** : 4.1 – Flux expédition
- **I « Statut »** : A clarifier avec business
- **K « Commentaires / points ouverts (extrait) »** : BR de la famille inbound BR-01-002 (notification NNN / conso directe) réutilisé côté outbound — vérifier la cohérence de numérotation et le recouvrement avec la FSP inbound de notification automatique au demandeur.
- **L « Décision attendue * »** : Valider le besoin et l'interrupteur activable/désactivable ; corriger la numérotation BR.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Vérifier la numérotation BR (0020 vs 020).
- **O « Justification priorité * »** : Recouvrement avec la FSP inbound et numérotation BR à vérifier.
- **P « Doublon / anomalie * »** : D12 : ID 'GAP BR-01-002-020-B' utilisé pour 2 objets (étiquette HU NNN / mail expédition) ; variante 'BR-01-002-0020-B' en Outbound ; A9 : BR noté 'BR-01-002-0020-B' (format BR à vérifier)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 75
Mots-clés trouvés : refus
Statut : Statut = A clarifier avec business; Décision attendue * = Confirmer si le scan sur TU avec porte suffit.

- **A « Processus * »** : Outbound – Expédition & transport
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Outbound
- **D « Ligne source »** : 47
- **E « GAP ID »** : BR-02-002-050
- **F « BR lié(s) »** : BR-02-002-050
- **G « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **H « Section blueprint »** : 4.1 – Flux expédition
- **I « Statut »** : A clarifier avec business
- **K « Commentaires / points ouverts (extrait) »** : Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.A réexpliquer le BR
- **L « Décision attendue * »** : Confirmer si le scan sur TU avec porte suffit.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Voir aussi QM ligne 15 (même BR).
- **O « Justification priorité * »** : BR à réexpliquer ; possible couverture par TU + porte.
- **P « Doublon / anomalie * »** : D8 : BR-02-002-050 présent en Outbound et en QM

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 81
Mots-clés trouvés : échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier la ligne (ID, BR, statut).

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 2
- **E « GAP ID »** : à vérifier (vide)
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : — (titre vide dans la source) Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot …
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier la ligne (ID, BR, statut).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Compléter la ligne ; présentation QM 29/11 (Follow-up).
- **O « Justification priorité * »** : Ligne sans ID, BR ni statut ; flux QM en cours (présentation 29/11 selon Follow-up).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 82
Mots-clés trouvés : échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier la ligne (ID, BR, statut).

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 3
- **E « GAP ID »** : à vérifier (vide)
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : — (titre vide dans la source) Mouvement 332 vers 243L automatique une fois que les echantillons ou le lot …
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier la ligne (ID, BR, statut).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Compléter la ligne ; présentation QM 29/11 (Follow-up).
- **O « Justification priorité * »** : Ligne sans ID, BR ni statut ; flux QM en cours (présentation 29/11 selon Follow-up).
- **P « Doublon / anomalie * »** : A7 : mouvement 332 vers 243L (ligne 3) vs 243A (ligne 5) : incohérence apparente ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 83
Mots-clés trouvés : échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier la ligne (ID, BR, statut).

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 4
- **E « GAP ID »** : à vérifier (vide)
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : — (titre vide dans la source) Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot …
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier la ligne (ID, BR, statut).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Compléter la ligne ; présentation QM 29/11 (Follow-up).
- **O « Justification priorité * »** : Ligne sans ID, BR ni statut ; flux QM en cours (présentation 29/11 selon Follow-up).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 84
Mots-clés trouvés : échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier la ligne (ID, BR, statut).

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 5
- **E « GAP ID »** : à vérifier (vide)
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : — (titre vide dans la source) Mouvement 332 vers 243A automatique une fois que les echantillons ou le lot …
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier la ligne (ID, BR, statut).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Compléter la ligne ; présentation QM 29/11 (Follow-up).
- **O « Justification priorité * »** : Ligne sans ID, BR ni statut ; flux QM en cours (présentation 29/11 selon Follow-up).
- **P « Doublon / anomalie * »** : A7 : mouvement 332 vers 243L (ligne 3) vs 243A (ligne 5) : incohérence apparente ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 85
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser; Décision attendue * = Déclencheur du contrôle QM interne au DC.

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 6
- **E « GAP ID »** : GAP possible BR-01-001-050-B
- **F « BR lié(s) »** : BR-01-001-050-00, BR-01-001-050-B, BR-01-003-040
- **G « Titre »** : Activation du contrôle qualité interne au DC
- **H « Section blueprint »** : 3.3 – Réception 2ème étape pour stock ; Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. BA 07-07-2026 : ajouter le numéro du BR dans le blueprint QM. BA 29-06-2026 : justification à rechallenger (blocage facturation, split stock Q / stock libre) – réponse 06-07-2026 : « si nécessaire, oui ».
- **L « Décision attendue * »** : Déclencheur du contrôle QM interne au DC.
- **M « Qui tranche * »** : QM / Comptabilité fournisseurs (service impacté)
- **N « Prochaine étape * »** : Présentation QM 29/11.
- **O « Justification priorité * »** : Déclencheur et impact facturation à définir.
- **P « Doublon / anomalie * »** : D10 : BR-01-001-050-B présent en Inbound (ligne incomplète) et en QM

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 86
Mots-clés trouvés : labo, échantillon
Statut : Statut = À analyser; Décision attendue * = Décision sur lot complet sans réintégration des échantillons.

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 7
- **E « GAP ID »** : GAP possible BR-02-000-010
- **F « BR lié(s) »** : BR-02-000-010 ; BR-02-001-010
- **G « Titre »** : Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Classé « Fonctionnalité QM – Pas listé dans les flux ».
- **L « Décision attendue * »** : Décision sur lot complet sans réintégration des échantillons.
- **M « Qui tranche * »** : QM / Labo (service impacté)
- **N « Prochaine étape * »** : Présentation QM 29/11.
- **O « Justification priorité * »** : Cycle de vie des échantillons à confirmer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 87
Mots-clés trouvés : refus, litige
Statut : Statut = À analyser; Décision attendue * = Destinataires, canal et contenu de la notification de DU.

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 8
- **E « GAP ID »** : GAP possible BR-02-000-020
- **F « BR lié(s) »** : BR-02-000-020 ; à rapprocher de GAP BR-01-003-100
- **G « Titre »** : Flux de communication du contrôleur vers acheteur et DC (acceptation / refus)
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Réutilisation possible du canal litiges (GAP BR-01-003-100) à étudier.
- **L « Décision attendue * »** : Destinataires, canal et contenu de la notification de DU.
- **M « Qui tranche * »** : QM / Replenishment (achats) (service impacté)
- **N « Prochaine étape * »** : Après décision GAP BR-01-003-100.
- **O « Justification priorité * »** : Réutilisation possible du canal litiges.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 88
Mots-clés trouvés : labo, échantillon
Statut : Statut = À analyser; Décision attendue * = Mode de suivi des échantillons DC ↔ labo.

- **A « Processus * »** : QM
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 9
- **E « GAP ID »** : GAP possible BR-02-001-010
- **F « BR lié(s) »** : BR-02-001-010 ; BR-02-000-010
- **G « Titre »** : Traçabilité des échantillons DC ↔ labo
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed. Traçabilité HU à travers le E2E ».
- **L « Décision attendue * »** : Mode de suivi des échantillons DC ↔ labo.
- **M « Qui tranche * »** : QM / Labo (service impacté)
- **N « Prochaine étape * »** : Présentation QM 29/11.
- **O « Justification priorité * »** : Localisation du labo à confirmer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 90
Mots-clés trouvés : fournisseur
Statut : Statut = À analyser; Décision attendue * = Mécanisme de bascule contrôle fournisseur → réception.

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 10
- **E « GAP ID »** : GAP possible BR-02-001-020
- **F « BR lié(s) »** : BR-02-001-020
- **G « Titre »** : Remplacement du contrôle chez le fournisseur par un contrôle à la réception
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Besoin principalement porté par QM ; impact EWM = mise en stock qualité à la réception.
- **L « Décision attendue * »** : Mécanisme de bascule contrôle fournisseur → réception.
- **M « Qui tranche * »** : QM (service impacté)
- **N « Prochaine étape * »** : Question QM.
- **O « Justification priorité * »** : Besoin porté par QM ; impact EWM limité.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 92
Mots-clés trouvés : avoir, 917
Statut : Statut = À analyser; Décision attendue * = Confirmer la traçabilité du motif de blocage en standard GZH.

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 17
- **E « GAP ID »** : — (couvert EWM GZH)
- **F « BR lié(s) »** : BR-04-001-020-00, BR-04-001-020-A
- **G « Titre »** : Isolement / quarantaine du stock non conforme avec traçabilité
- **H « Section blueprint »** : Blueprint Internal Processes – Stockage
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. BA 01-09-2026 : il doit être possible de sortir les articles de la BIN et de les mettre en 917 ; on veut bloquer le stock et avoir son tracking (qui, quand, pourquoi).
- **L « Décision attendue * »** : Confirmer la traçabilité du motif de blocage en standard GZH.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Démo GZH.
- **O « Justification priorité * »** : Couvert EWM GZH ; vérification.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 94
Mots-clés trouvés : litige
Statut : Statut = À analyser; Décision attendue * = Sources de litiges et niveau de détail.

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 21
- **E « GAP ID »** : GAP possible BR-07-002-030
- **F « BR lié(s) »** : BR-07-002-030 ; à rapprocher de GAP BR-01-003-100
- **G « Titre »** : Rapport des litiges de réception par ligne de PO
- **H « Section blueprint »** : 4 – Suivi des réceptions (Blueprint Reporting)
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Lien QM indirect (litiges / non-conformités). Dépend de la base litiges (GAP BR-01-003-100).
- **L « Décision attendue * »** : Sources de litiges et niveau de détail.
- **M « Qui tranche * »** : Replenishment (service impacté)
- **N « Prochaine étape * »** : Après décision GAP BR-01-003-100.
- **O « Justification priorité * »** : Dépend de la base litiges.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 95
Mots-clés trouvés : refus
Statut : Statut = (vide); Décision attendue * = Qualifier le besoin (GAP ou non).

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 22
- **E « GAP ID »** : GAP XXXX
- **F « BR lié(s) »** : Lié meeting TOM 10/06/26
- **G « Titre »** : TOM est interessé de recevoir l'info lors d'un refus durant le déchargeent du caion
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier le besoin (GAP ou non).
- **M « Qui tranche * »** : TOM (source : meeting TOM 10/06/26)
- **N « Prochaine étape * »** : Qualifier avec le TOM ; attribuer ID/BR si confirmé.
- **O « Justification priorité * »** : Ligne « GAP XXXX » sans ID/BR/statut (meeting TOM 10/06/26).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 96
Mots-clés trouvés : labo, échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier le besoin (GAP ou non).

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 23
- **E « GAP ID »** : GAP XXXX
- **F « BR lié(s) »** : Lié meeting TOM 10/06/26
- **G « Titre »** : Echantillons DC - Labo
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier le besoin (GAP ou non).
- **M « Qui tranche * »** : TOM (source : meeting TOM 10/06/26)
- **N « Prochaine étape * »** : Qualifier avec le TOM ; attribuer ID/BR si confirmé.
- **O « Justification priorité * »** : Ligne « GAP XXXX » sans ID/BR/statut (meeting TOM 10/06/26).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 99
Mots-clés trouvés : échantillon
Statut : Statut = (vide); Décision attendue * = Qualifier le besoin (GAP ou non).

- **A « Processus * »** : QM
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 26
- **E « GAP ID »** : GAP XXXX
- **F « BR lié(s) »** : Lié meeting TOM 10/06/26
- **G « Titre »** : Echantillons détruit
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier le besoin (GAP ou non).
- **M « Qui tranche * »** : TOM (source : meeting TOM 10/06/26)
- **N « Prochaine étape * »** : Qualifier avec le TOM ; attribuer ID/BR si confirmé.
- **O « Justification priorité * »** : Ligne « GAP XXXX » sans ID/BR/statut (meeting TOM 10/06/26).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 100
Mots-clés trouvés : retour, fournisseur, 922, 108
Statut : Statut = À analyser; Décision attendue * = Type de document de retour (bon 8000, livraison de retour).

- **A « Processus * »** : Retour fournisseur (onglet QM)
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 14
- **E « GAP ID »** : BR-02-002-040
- **F « BR lié(s) »** : BR-02-002-040 ; lié à GAP BR-01-003-110
- **G « Titre »** : Document de renvoi fournisseur lié au PO (bon 8000)
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Référentiel : « x (Créer bon sans référence) ». Solution à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922).
- **L « Décision attendue * »** : Type de document de retour (bon 8000, livraison de retour).
- **M « Qui tranche * »** : Replenishment (service impacté)
- **N « Prochaine étape * »** : Session Retours (semaine du 2/11) avec GAP BR-01-003-110.
- **O « Justification priorité * »** : Type de document de retour à trancher en cohérence avec GAP BR-01-003-110.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 101
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = A clarifier avec business; Décision attendue * = Étapes de refus/renvoi guidées au scanner.

- **A « Processus * »** : Retour fournisseur (onglet QM)
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 12
- **E « GAP ID »** : GAP possible BR-02-002-020
- **F « BR lié(s) »** : BR-02-002-020
- **G « Titre »** : Étapes de refus et de renvoi guidées par scanner
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : A clarifier avec business
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists.
- **L « Décision attendue * »** : Étapes de refus/renvoi guidées au scanner.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Session Retours (semaine du 2/11).
- **O « Justification priorité * »** : Étapes de refus à définir (flux retour).

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 102
Mots-clés trouvés : retour, refus, fournisseur
Statut : Statut = A clarifier avec business; Décision attendue * = Confirmer si le chargement RF standard sur TU suffit.

- **A « Processus * »** : Retour fournisseur (onglet QM)
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 15
- **E « GAP ID »** : GAP BR-02-002-050
- **F « BR lié(s) »** : BR-02-002-050
- **G « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **H « Section blueprint »** : 4.1 – Flux expédition (Blueprint Outbound)
- **I « Statut »** : A clarifier avec business
- **K « Commentaires / points ouverts (extrait) »** : Repris de la GAP List Outbound (ID sans préfixe « GAP »). Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.
- **L « Décision attendue * »** : Confirmer si le chargement RF standard sur TU suffit.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Traiter une seule fois avec Outbound ligne 47.
- **O « Justification priorité * »** : Doublon de l'Outbound ligne 47.
- **P « Doublon / anomalie * »** : D8 : BR-02-002-050 présent en Outbound et en QM

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 103
Mots-clés trouvés : retour, fournisseur
Statut : Statut = À analyser; Décision attendue * = Confirmer la couverture standard.

- **A « Processus * »** : Retour fournisseur (onglet QM)
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 11
- **E « GAP ID »** : GAP possible BR-02-002-010
- **F « BR lié(s) »** : BR-02-002-010
- **G « Titre »** : HU dédiées au retour fournisseur
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed ».
- **L « Décision attendue * »** : Confirmer la couverture standard.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Vérification BRM.
- **O « Justification priorité * »** : Probablement standard (HU managed).

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 104
Mots-clés trouvés : retour, rebut, fournisseur
Statut : Statut = A clarifier avec business; Décision attendue * = Contenu de l'étiquette de retour.

- **A « Processus * »** : Retour fournisseur (onglet QM)
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 13
- **E « GAP ID »** : GAP BR-02-002-030
- **F « BR lié(s) »** : BR-02-002-030
- **G « Titre »** : Étiquetage du matériel rebuté pour retour fournisseur
- **H « Section blueprint »** : Blueprint QM (à rédiger) – Check QM
- **I « Statut »** : A clarifier avec business
- **K « Commentaires / points ouverts (extrait) »** : Absent des GAP Lists.
- **L « Décision attendue * »** : Contenu de l'étiquette de retour.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Session Retours.
- **O « Justification priorité * »** : Contenu d'étiquette.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 105
Mots-clés trouvés : retour
Statut : Statut = À analyser; Décision attendue * = Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). Reste : mouvements techniques, magasins source/destination, règles du bon 8*, retour (garage Draisine).

- **A « Processus * »** : Immatriculation
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List Immatriculation
- **D « Ligne source »** : 2
- **E « GAP ID »** : GAP BR-05-001-010
- **F « BR lié(s) »** : BR-05-001-010
- **G « Titre »** : Génération automatique de l’envoi en immatriculation
- **H « Section blueprint »** : Immatriculation
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Préciser les mouvements techniques, les magasins source/destination, les règles de génération et de regroupement du bon 8*. Confirmer la couverture des contraintes de picking, traçabilité et MRP avec les équipes concernées. Pour le retour : responsable du transfert et document de référence du …
- **L « Décision attendue * »** : Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). Reste : mouvements techniques, magasins source/destination, règles du bon 8*, retour (garage Draisine).
- **M « Qui tranche * »** : Moustafa (décision orale scope) ; équipes concernées (commentaire)
- **N « Prochaine étape * »** : Meeting immatriculation (Follow-up 03/11) ; formaliser le scope ZIMB.
- **O « Justification priorité * »** : BPR Immatriculation « À faire » ; règles de génération du bon 8* à préciser.
- **P « Doublon / anomalie * »** : D9 : GAP BR-05-001-010 présent en Inbound, QM et Immatriculation

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 107
Mots-clés trouvés : fournisseur
Statut : Statut = (vide); Décision attendue * = Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). Reste : qualifier l'étiquette GR (n° d'immatriculation + n° de série SAP).

- **A « Processus * »** : Immatriculation
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Immatriculation
- **D « Ligne source »** : 4
- **E « GAP ID »** : à vérifier (vide)
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : Etiquette GR contenant le numéro d'immatriculation + numéro de série SAP (pas fournisseur)
- **I « Statut »** : (vide)
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). Reste : qualifier l'étiquette GR (n° d'immatriculation + n° de série SAP).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Qualifier la ligne (ID, BR, statut).
- **O « Justification priorité * »** : Ligne sans ID/BR/statut ; lié au développement n° d'immatriculation (Follow-up).
- **P « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 109
Mots-clés trouvés : NNN
Statut : Statut = A confirmer avec business; Décision attendue * = Confirmer que la ligne est bien remplacée (pas de double comptage).

- **A « Processus * »** : Immatriculation
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 37
- **E « GAP ID »** : GAP BR-05-001-010
- **F « BR lié(s) »** : BR-05-001-010
- **G « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : A confirmer avec business
- **K « Commentaires / points ouverts (extrait) »** : Confirmer que la solution présentée répond au besoin métier
- **L « Décision attendue * »** : Confirmer que la ligne est bien remplacée (pas de double comptage).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Mettre à jour le statut de cette ligne dans la GAP List (par l'équipe).
- **O « Justification priorité * »** : Ligne remplacée par l'onglet Immatriculation (selon la source).
- **P « Doublon / anomalie * »** : D9 : GAP BR-05-001-010 présent en Inbound, QM et Immatriculation ; A5 : ligne déclarée remplacée par l'onglet Immatriculation mais statut toujours 'A confirmer avec business'

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 110
Mots-clés trouvés : NNN
Statut : Statut = A confirmer avec business; Décision attendue * = Confirmer que la solution présentée répond au besoin.

- **A « Processus * »** : Immatriculation
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List QM
- **D « Ligne source »** : 19
- **E « GAP ID »** : GAP BR-05-001-010
- **F « BR lié(s) »** : BR-05-001-010
- **G « Titre »** : Suivi immatriculation (zone dédiée + traçabilité HU)
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : A confirmer avec business
- **K « Commentaires / points ouverts (extrait) »** : Repris de la GAP List Inbound. Confirmer que la solution présentée répond au besoin métier. BA 07-07-2026 : parties « immatriculation » et « QM » du flux Réc 2 pour stock à traiter dans le blueprint QM.
- **L « Décision attendue * »** : Confirmer que la solution présentée répond au besoin.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Traiter dans l'onglet Immatriculation.
- **O « Justification priorité * »** : Doublon de l'Inbound ligne 37 et de l'onglet Immatriculation.
- **P « Doublon / anomalie * »** : D9 : GAP BR-05-001-010 présent en Inbound, QM et Immatriculation

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 111
Mots-clés trouvés : retour, fournisseur, NNN
Statut : Statut = Analysé; Décision attendue * = Traitement du retour fournisseur NNN (avant/après 101).

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 1 - Bloquant pour le blueprint
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 6
- **E « GAP ID »** : GAP — ID à attribuer
- **F « BR lié(s) »** : BR à confirmer
- **G « Titre »** : Retour fournisseur NNN / consommation directe
- **H « Section blueprint »** : NNN / Consommation directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Traitement du retour fournisseur NNN (avant/après 101).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Session Retours (semaine du 2/11) ; attribuer un BR.
- **O « Justification priorité * »** : Aucune solution de retour arrêtée (source) ; lié au flux Retours.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 112
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Canal de notification et règle de détermination du demandeur.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 33
- **E « GAP ID »** : GAP BR-01-002-020-A
- **F « BR lié(s) »** : BR-01-002-020-A
- **G « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : Point ouvert lié au moyen de communication et à la détermination du demandeur
- **L « Décision attendue * »** : Canal de notification et règle de détermination du demandeur.
- **M « Qui tranche * »** : SP ; autres ? (service impacté)
- **N « Prochaine étape * »** : Question au business / SP ; aligner avec NNN ligne 8.
- **O « Justification priorité * »** : Point ouvert : moyen de communication et détermination du demandeur.
- **P « Doublon / anomalie * »** : D13 : GAP BR-01-002-020-A présent en IN et NNN (reprise NNN)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 113
Mots-clés trouvés : NNN
Statut : Statut = A confirmer avec business; Décision attendue * = Confirmer le besoin de n° de série fabricant pour NNN/conso directe.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 51
- **E « GAP ID »** : GAP --
- **F « BR lié(s) »** : à vérifier (vide)
- **G « Titre »** : — (titre vide dans la source) Dans le cas d’un article NNN/Consommation directe, l’opérateur doit être en …
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : A confirmer avec business
- **K « Commentaires / points ouverts (extrait) »** : Quelle est la finalité d'introduire un numéro de série pour un article nnn/consommation directe
- **L « Décision attendue * »** : Confirmer le besoin de n° de série fabricant pour NNN/conso directe.
- **M « Qui tranche * »** : Business (statut)
- **N « Prochaine étape * »** : Question au business ; attribuer ID/BR si confirmé.
- **O « Justification priorité * »** : Ligne sans ID ni BR ; finalité non établie.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 114
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Confirmer le BR du déclenchement du 101.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 7
- **E « GAP ID »** : GAP — ID à attribuer
- **F « BR lié(s) »** : BR spécifique à confirmer
- **G « Titre »** : Réception comptable 101 après traitement de toute la livraison NNN
- **H « Section blueprint »** : 3.5 – NNN / Consommation directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Confirmer le BR du déclenchement du 101.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Attribuer un BR.
- **O « Justification priorité * »** : BR spécifique à confirmer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 115
Mots-clés trouvés : NNN
Statut : Statut = À analyser; Décision attendue * = Confirmer le BR et le contenu de l'étiquette HU NNN.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List Inbound
- **D « Ligne source »** : 35
- **E « GAP ID »** : GAP BR-01-002-020-B
- **F « BR lié(s) »** : (BR à confirmer)
- **G « Titre »** : Étiquette HU NNN (destinataire + PO)
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : « (GAP) » sans ID dans le doc final
- **L « Décision attendue * »** : Confirmer le BR et le contenu de l'étiquette HU NNN.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Attribuer un BR ; ID GAP en conflit avec NNN ligne 13 (voir doublons).
- **O « Justification priorité * »** : Adaptation de formulaire ; BR à confirmer.
- **P « Doublon / anomalie * »** : D12 : ID 'GAP BR-01-002-020-B' utilisé pour 2 objets (étiquette HU NNN / mail expédition) ; variante 'BR-01-002-0020-B' en Outbound

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 116
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Qualifier Enhancement vs Config.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 2
- **E « GAP ID »** : GAP BR-01-002-010
- **F « BR lié(s) »** : BR-01-002-010
- **G « Titre »** : Orientation vers le flux NNN / consommation directe
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Qualifier Enhancement vs Config.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Qualification BRM.
- **O « Justification priorité * »** : Analysé ; type FRICE à qualifier.
- **P « Doublon / anomalie * »** : D13 : GAP BR-01-002-010 présent en IN et NNN (reprise NNN)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 117
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Attribuer un ID GAP / BR.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 3
- **E « GAP ID »** : GAP — ID à attribuer
- **F « BR lié(s) »** : BR-01-002-010 (orientation) ; détail RF issu du blueprint/deck
- **G « Titre »** : Parcours RF de réception des HU NNN techniquement vides
- **H « Section blueprint »** : 3.5 – NNN / Consommation directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Attribuer un ID GAP / BR.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Attribuer l'ID.
- **O « Justification priorité * »** : ID GAP à attribuer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 118
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Confirmer la couverture standard (ADHU).

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 4
- **E « GAP ID »** : GAP BR-05-003-010-A
- **F « BR lié(s) »** : BR-05-003-010-A
- **G « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **H « Section blueprint »** : 3.5 – Réception 2ème étape -- NNN / Consommation Directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : (vide)
- **L « Décision attendue * »** : Confirmer la couverture standard (ADHU).
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Démo standard.
- **O « Justification priorité * »** : Couverture standard à vérifier.
- **P « Doublon / anomalie * »** : D13 : GAP BR-05-003-010-A présent en IN et NNN (reprise NNN)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 119
Mots-clés trouvés : NNN
Statut : Statut = Analysé; Décision attendue * = Qualifier la sélection des HU par destinataire.

- **A « Processus * »** : NNN / Consommation directe
- **B « Priorité * »** : 3 - Peut attendre
- **C « Onglet d'origine »** : GAP List NNN
- **D « Ligne source »** : 11
- **E « GAP ID »** : GAP — ID à attribuer
- **F « BR lié(s) »** : BR-05-003-010-B ; complément blueprint NNN
- **G « Titre »** : Sélection et préparation des HU NNN par destinataire
- **H « Section blueprint »** : Préparation NNN / consommation directe
- **I « Statut »** : Analysé
- **K « Commentaires / points ouverts (extrait) »** : Préparer uniquement les HU autorisées pour le bon destinataire.
- **L « Décision attendue * »** : Qualifier la sélection des HU par destinataire.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Attribuer un ID ; vérifier la création RF des tâches.
- **O « Justification priorité * »** : Extension à qualifier ; ID à attribuer.

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Plan de décisions », ligne 121
Mots-clés trouvés : mitraille
Statut : Statut = À analyser; Décision attendue * = Règles de la vague de retrait Z3 / mitraille.

- **A « Processus * »** : Processus internes
- **B « Priorité * »** : 2 - Important
- **C « Onglet d'origine »** : GAP List Internal
- **D « Ligne source »** : 3
- **E « GAP ID »** : GAP BR-04-002-010-A
- **F « BR lié(s) »** : BR-04-002-010 ; BR-04-002-010-A
- **G « Titre »** : Retrait du stock selon statut article
- **H « Section blueprint »** : Gestion des statuts / mitraille
- **I « Statut »** : À analyser
- **K « Commentaires / points ouverts (extrait) »** : Définir déclenchement, fréquence et destination.
- **L « Décision attendue * »** : Règles de la vague de retrait Z3 / mitraille.
- **M « Qui tranche * »** : à vérifier
- **N « Prochaine étape * »** : Question au business.
- **O « Justification priorité * »** : Déclenchement, fréquence, destination à définir.

### Onglet « Doublons & anomalies » (ligne d’en-tête détectée : L3)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 24
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D12
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : ID 'GAP BR-01-002-020-B' utilisé pour 2 objets (étiquette HU NNN / mail expédition) ; variante 'BR-01-002-0020-B' en Outbound
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.35 (GAP BR-01-002-020-B) ; Outbound l.41 (GAP BR-01-002-0020-B) ; NNN l.13 (GAP BR-01-002-020-B)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 25
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : GAP BR-01-002-020-A présent en IN et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.33 (GAP BR-01-002-020-A) ; NNN l.8 (GAP BR-01-002-020-A)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 26
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : GAP BR-05-006-050-B présent en IN et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.34 (GAP BR-05-006-050-B) ; NNN l.9 (GAP BR-05-006-050-B)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 27
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : GAP BR-01-002-010 présent en IN et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.36 (GAP BR-01-002-010) ; NNN l.2 (GAP BR-01-002-010)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 28
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : GAP BR-01-003-020 présent en IN et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.39 (GAP BR-01-003-020) ; NNN l.5 (GAP BR-01-003-020)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 29
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : GAP BR-05-003-010-A présent en IN et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound l.38 (GAP BR-05-003-010-A) ; NNN l.4 (GAP BR-05-003-010-A)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 30
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : BR-05-003-010 présent en OUT et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Outbound l.5 (BR-05-003-010) ; NNN l.10 (BR-05-003-010)

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 31
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : D13
- **B « Type »** : Doublon apparent
- **C « Constat (sans fusion) »** : BR-05-006-050 présent en OUT et NNN (reprise NNN)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Outbound l.31 (BR-05-006-050 (couvert)) ; NNN l.12 (BR-05-006-050 (couvert))

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 34
Mots-clés trouvés : retour
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : A10
- **B « Type »** : Anomalie
- **C « Constat (sans fusion) »** : Onglets 'GAP List Retours' et 'GAP Integration Tours' vides (vérifié par export et lecture directe A1:Z200)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Retours / Integration Tours

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 35
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : A11
- **B « Type »** : Anomalie
- **C « Constat (sans fusion) »** : Variantes d'écriture des statuts (A analyser / À analyser / A Analyser ; 'Analysé ' avec espace final en Outbound et NNN ; A confirmer / À confirmer / À confirmer business)
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Tous onglets

#### Plan_decisions_GAP_List_Ronet_v0.1.xlsx — onglet « Doublons & anomalies », ligne 36
Mots-clés trouvés : NNN
Statut : (aucune valeur dans une colonne « Statut »)

- **A « Réf. »** : A12
- **B « Type »** : Anomalie
- **C « Constat (sans fusion) »** : IDs non normalisés : 'GAP --', 'GAP (Pas de BR)', 'GAP — ID à attribuer' (x4 NNN), 'GAP XXXX' (x5 QM), 'GAP BR-01-003-110 (à requalifier)', 'GAP BR-05-005-090 /'
- **D « Lignes concernées (onglet l. ligne (ID)) »** : Inbound, NNN, QM, Outbound

---

## Points_ouverts_GAP_List_Ronet_v0.1.xlsx
Source : Drive 1gcYchZ3OsmDAQxsk60S175-GzYJp0Pz4

Nombre d’extraits : **47**

### Onglet « Points ouverts » (ligne d’en-tête détectée : L3)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 7
Mots-clés trouvés : litige
Statut : Statut d'origine = Analysé

- **A « N° * »** : 4
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 18
- **D « GAP ID »** : GAP BR-01-003-020-F
- **E « BR lié(s) »** : BR-01-003-020-F
- **F « Titre »** : Création automatique du litige
- **G « Description courte »** :
  > "Dans le cas d'un overdelivery détecté sur le bon de livraison, un litige est automatiquement créé avec :
  > - info du PO
  > - article concerné
  > - qté supp
  > - endroit de localisation de la ligne concernée dans SAP
  > Ce afin de tracer les quantités …
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **J « Résultat attendu (source) »** : Valider la démo de la solution proposée par BRM
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Replenishment valide-t-il la solution de création automatique du litige présentée en démo (contenu : PO, article, qté supplémentaire, localisation) ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 9
Mots-clés trouvés : litige
Statut : Statut d'origine = Analysé

- **A « N° * »** : 6
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 21
- **D « GAP ID »** : GAP BR-01-003-080
- **E « BR lié(s) »** : BR-01-003-080
- **F « Titre »** : Archivage automatique des documents de réception sur le PO
- **G « Description courte »** : Le système doit pouvoir archiver automatiquement les documents de réception scannés par le magasinier sur le N° PO respectif, afin de faciliter la recherche des documents par les acheteurs en cas de litige (facture- preuve de livraison - …)
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : BR-01-003-070 (attachement à la livraison) = standard, sans GAP
- **J « Résultat attendu (source) »** : Valider la démo de la solution proposée par BRM
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Replenishment valide-t-il l'archivage automatique des bons de livraison scannés sur le n° de PO (job) tel que démontré ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 10
Mots-clés trouvés : litige
Statut : Statut d'origine = Analysé

- **A « N° * »** : 7
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 22
- **D « GAP ID »** : GAP BR-01-003-100
- **E « BR lié(s) »** : BR-01-003-100
- **F « Titre »** : Canal de communication litiges + workflow incidents
- **G « Description courte »** : Le système doit garantir un canal de communication (gestion des litiges) entre la réception, le replenishment et les autres services afin de donner la possibilité de résoudre des problèmes plus rapidement. Par exemple, garder les historiques de …
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : Décisions BA 29/06 + update 14/07 (commentaires Word) ; GAP à confirmer avant ajout
- **J « Résultat attendu (source) »** : Valider la démo de la solution proposée par BRM
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le GAP canal litiges / workflow incidents est-il confirmé, et quel objet sert de litige commun (base spécifique ou avis qualité Q2 standard) pour réception, Replenishment et acheteurs ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 12
Mots-clés trouvés : retour, refus, litige, fournisseur, 922, 108
Statut : Statut d'origine = Analysé

- **A « N° * »** : 9
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 24
- **D « GAP ID »** : GAP BR-01-003-110 (à requalifier)
- **E « BR lié(s) »** : BR-01-003-110
- **F « Titre »** : Traçage du retour fournisseur après décision acheteur
- **G « Description courte »** : Le système doit pouvoir tracer le retour d'une quantité vers le fournisseur si l'acheteur refuse tout ou une partie de la livraison afin de documenter en cas de litige au sujet de la facturation .
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : Lié à BR-02-002-050 (deck QM : unité de transport + GAP 922)
- **J « Résultat attendu (source) »** : Clarifier la procédure & tracabilité de l'acceptation/refus de la part de l'acheteur
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Pour le retour fournisseur après refus de l'acheteur, retient-on l'AS-IS (mail + mouvement 108) ou le flux retour standard EWM (mouvement 922) ? Quelle traçabilité de l'acceptation/refus de l'acheteur est attendue ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 18
Mots-clés trouvés : fournisseur
Statut : Statut d'origine = Analysé

- **A « N° * »** : 15
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 30
- **D « GAP ID »** : GAP BR-03-001-030
- **E « BR lié(s) »** : BR-03-001-030
- **F « Titre »** : Étiquettes fournisseur des tourets de câbles
- **G « Description courte »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information comme numéro externe au sein de la HU
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : Confirmer l'input (quelle étiquette) sera envoyée de la part du fournisseur
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **L « Doublon / anomalie * »** : D11 : BR-03-001-030 présent sur 2 lignes Inbound
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quelle étiquette le fournisseur enverra-t-il (contenu, format) pour l'identifiant du touret ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 20
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 17
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 33
- **D « GAP ID »** : GAP BR-01-002-020-A
- **E « BR lié(s) »** : BR-01-002-020-A
- **F « Titre »** : Notification automatique au demandeur (NNN/Conso Directe)
- **G « Description courte »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera …
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : Point ouvert lié au moyen de communication et à la détermination du demandeur
- **J « Résultat attendu (source) »** : Clarifier le besoin métier
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **L « Doublon / anomalie * »** : D13 : GAP BR-01-002-020-A présent en IN et NNN (reprise NNN)
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Comment le demandeur est-il déterminé (PO, réservation, autre) et par quel canal doit-il être notifié ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 21
Mots-clés trouvés : NNN
Statut : Statut d'origine = À analyser

- **A « N° * »** : 18
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 35
- **D « GAP ID »** : GAP BR-01-002-020-B
- **E « BR lié(s) »** : (BR à confirmer)
- **F « Titre »** : Étiquette HU NNN (destinataire + PO)
- **G « Description courte »** :
  > Une fois la réception d'un article NNN/cons directe effectuée, un mail doit être envoyé automatiquement au demandeur lui précisant que
  > - son matériel est disponible (info : le numéro de HU / la localisation / num PO)
  > - et que son matériel sera …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : « (GAP) » sans ID dans le doc final
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D12 : ID 'GAP BR-01-002-020-B' utilisé pour 2 objets (étiquette HU NNN / mail expédition) ; variante 'BR-01-002-0020-B' en Outbound
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Quel BR couvre l'étiquette HU NNN (destinataire + PO) ? L'ID 'GAP BR-01-002-020-B' est aussi utilisé pour le mail à l'expédition.

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 29
Mots-clés trouvés : NNN
Statut : Statut d'origine = A confirmer avec business

- **A « N° * »** : 26
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 51
- **D « GAP ID »** : GAP --
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Dans le cas d’un article NNN/Consommation directe, l’opérateur doit être en mesure d’encoder le numéro de série du fabriquant pour chaque article
- **H « Statut d'origine »** : A confirmer avec business
- **I « Commentaire d'origine »** : Quelle est la finalité d'introduire un numéro de série pour un article nnn/consommation directe
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quelle est la finalité d'encoder le n° de série fabricant pour un article NNN / consommation directe (sachant que le standard ne le permet pas sans fiche article) ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 30
Mots-clés trouvés : fournisseur
Statut : Statut d'origine = (vide)

- **A « N° * »** : 27
- **B « Onglet d'origine »** : GAP List Inbound
- **C « Ligne source »** : 52
- **D « GAP ID »** : BR-03-001-030
- **E « BR lié(s) »** : BR-03-001-030
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Le système doit pouvoir lire les étiquettes fournisseur des tourets de câble afin d'intégrer le numéro du touret et l'information relative à la dimension du touret comme numéro externe au sein de la HU
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** :
  > 07-07-2026 : à ajouter dans le blueprint (section 3.3.2.) -> ok
  > 27-08-2026 : Quel est le besoin réel? / Quelles infos précisément avons-nous besoin? : 
  >    > Numéro de touret du fournisseur (comme numéro externe à la HU)?
  >    > Taille du touret? -> Est-ce que cette info est tjs dispo sur l'étiquette? Si oui, quid si on change de fournisseur et qu'on n'a plus cette info (actuellement non exigé dansles conditions logistiques)?
  > 27-08-2026 : après discussion avec Business :
  > -> Ne pas tenir compte de la dimension du touret
  > -> Pouvoir encoder l'identifiant unique du touret
  > -> Il n'y a pas tjs d'étiquette du fournisseur (donc encodage facultatif)
  > -> Associer l'identifiant au numéro HU (attention que cet identifiant pourrait être lié à d'autres num HU vu que la bobine nous reviendra ultérieurement par le fournisseur)
  > -> Il doit être possible de retrouver les liens entre identifiant et HU à partir du numéro de l'identifiant
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : D11 : BR-03-001-030 présent sur 2 lignes Inbound ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Les réponses du 27/08 (pas de dimension, identifiant unique facultatif lié à la HU, recherche par identifiant) suffisent-elles à clôturer le point ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 34
Mots-clés trouvés : retour
Statut : Statut d'origine = Attente réponse business REPL

- **A « N° * »** : 31
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 4
- **D « GAP ID »** : GAP BR-05-004-050
- **E « BR lié(s) »** : BR-05-004-050
- **F « Titre »** : Création de la livraison sortante conditionnée à la disponibilité du stock
- **G « Description courte »** : La création de la livraison sortante (créée par replenishment) doit tenir compte de la disponibilité du stock (que l'on travaille avec des STO / réservations) → existe déjà en eWM actuellement
- **H « Statut d'origine »** : Attente réponse business REPL
- **I « Commentaire d'origine »** :
  > Point ouvert : commentaires blueprint — attente du retour de Gilles sur la génération des BL en lien avec l'ATP (Kayali 04/08) ; Youssef 25/08 : en cours.
  >
  > Attente Retour Replenishment - meeting 22/10
- **J « Résultat attendu (source) »** : Aucun bon 8* n'est créé sans stock disponible, que la demande soit un STO ou une réservation.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quel est le retour de Replenishment (Gilles) sur la génération des BL en lien avec l'ATP ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 35
Mots-clés trouvés : NNN, avoir
Statut : Statut d'origine = Analysé

- **A « N° * »** : 32
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 5
- **D « GAP ID »** : BR-05-003-010
- **E « BR lié(s) »** : BR-05-003-010
- **F « Titre »** : HU non gérées en stock liées à un bon 8* sans référence – staging
- **G « Description courte »** : Avoir des HU non gérées en stock liées au bon 8* sans référence afin de gérer la traçabilité des HU et des transports. Le bon 8* est lié à un réceptionnaire et à une adresse de livraison (SP / COPO / ZLEV / adresse manuelle). Pouvoir localiser ces …
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** :
  > Fait partie du flux 5C Création de bon sans référence. Pas encore traité durant session Blueprint. A retirer du blueprint outbound car repris dans flux NNN? 
  > Mentionner dans le blueprint la possibilité d'utiliser la transaction VL06no pour sortir des articles sur un bon sans réference, c'est du standard et déja utilisé aujourd'hui. Juste expliquer la possibilité.
- **J « Résultat attendu (source) »** : Les HU non gérées en stock sont rattachées au bon 8* sans référence de leur destinataire et localisées en zone de staging jusqu'au transport.
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **L « Doublon / anomalie * »** : D13 : BR-05-003-010 présent en OUT et NNN (reprise NNN)
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quels sont tous les cas de figure de bons 8* sans référence, et le point doit-il être retiré du blueprint Outbound au profit du flux NNN ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 37
Mots-clés trouvés : avoir
Statut : Statut d'origine = À analyser

- **A « N° * »** : 34
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 7
- **D « GAP ID »** : GAP BR-05-004-120-A
- **E « BR lié(s) »** : BR-05-004-120-A
- **F « Titre »** : Alerte dynamique DC à l'arrivée d'une demande T8/T9
- **G « Description courte »** : Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail ? popup ? étiquette imprimée ? warning dans un rapport ?)
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** :
  > Deck : GAP au niveau du système d'alerte (email + PPF selon le statut de la livraison, ou app Fiori). Renvoi au blueprint Reporting pour les écrans Fiori — coordonner les deux documents.
  > 25/09/2026 : première jet de Ronet :
  >
  > - Calendrier des milkruns (tournée fixée par semaine, la même toutes les semaines)
  >
  > - ODD
  >
  > - Urgences (T8/T9)
  >
  > - Par rapport au moyen/type de transport ? > câble ? à rediscuter
- **J « Résultat attendu (source) »** : Le DC voit l'arrivée de chaque T8/T9 via un signal global visible par tous, sans perturber les tâches en cours.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : Quel dispositif retenir pour l'alerte T8/T9 : dashboard dynamique (type ZIM1_WM_FOLLOWUP), PPF/mail, ou vues filtrées sur vagues urgentes ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 49
Mots-clés trouvés : litige
Statut : Statut d'origine = À analyser

- **A « N° * »** : 46
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 20
- **D « GAP ID »** : GAP BR-05-005-140
- **E « BR lié(s) »** : BR-05-005-140
- **F « Titre »** : Substitution de bobine avec code d'exception, photo et commentaire
- **G « Description courte »** : Lors du picking de bobines, le magasinier doit pouvoir substituer une bobine par une bobine sœur en précisant le code d'exception (ex. bobine cassée). En fonction du code d'exception, il doit être possible d'insérer une photo / commentaire qui sera …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Deck (12/6) : question ouverte sur le lien avec la gestion des plaintes — à mutualiser avec la FSP litiges / workflow incidents de l'inbound.
- **J « Résultat attendu (source) »** : Le coordinateur reçoit, pour chaque substitution de bobine, le code d'exception accompagné d'une photo ou d'un commentaire.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : La substitution de bobine avec code d'exception peut-elle réutiliser le workflow litiges / photos de l'inbound ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 50
Mots-clés trouvés : litige
Statut : Statut d'origine = À analyser

- **A « N° * »** : 47
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 21
- **D « GAP ID »** : GAP BR-05-005-190
- **E « BR lié(s) »** : BR-05-005-190
- **F « Titre »** : Mail automatique à Replenishment et au FMB sur code d'exception T8/T9
- **G « Description courte »** : Au moment d'un picking T8/T9, si un code d'exception est utilisé (BIN non accessible, diminution de la quantité, augmentation de la quantité), un mail automatique doit être envoyé à Replenishment et au FMB du DC afin que les opérationnels puissent …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Proposer/valider une variante de la soltuion pour le processus lititges
- **J « Résultat attendu (source) »** : Proposer/valider une variante de la soltuion pour le processus lititges
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : Quelle variante de la solution litiges (mail à Replenishment et FMB) est retenue pour les codes d'exception T8/T9 ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 60
Mots-clés trouvés : NNN
Statut : Statut d'origine = À analyser

- **A « N° * »** : 57
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 31
- **D « GAP ID »** : BR-05-006-050 (couvert)
- **E « BR lié(s) »** : BR-05-006-050
- **F « Titre »** : HU d'expédition pour NNN / consommation directe sans référence
- **G « Description courte »** : Pouvoir associer une livraison de marchandises NNN / consommation directe à une HU d'expédition générée à partir d'un bon d'expédition sans référence (ou en référence à un PO) pour la consolider dans un transport — tracking de HU : localisation et …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Recouvrement avec la GAP list Inbound (lien de tracking dans la notification) — à traiter une seule fois.
- **J « Résultat attendu (source) »** : Les HU NNN / consommation directe sont consolidées dans un transport et suivies (localisation, statut).
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D13 : BR-05-006-050 présent en OUT et NNN (reprise NNN)
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : La solution Bascoup couvre-t-elle le besoin, et la ligne peut-elle être traitée une seule fois avec GAP BR-05-006-050-B ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 68
Mots-clés trouvés : NNN, avoir
Statut : Statut d'origine = A clarifier avec business

- **A « N° * »** : 65
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 41
- **D « GAP ID »** : GAP BR-01-002-0020-B
- **E « BR lié(s) »** : BR-01-002-0020-B
- **F « Titre »** : Mail automatique au demandeur à l'expédition (activable / désactivable)
- **G « Description courte »** : Un mail doit être envoyé automatiquement au demandeur lui précisant que son matériel sera expédié avec la prochaine tournée afin d'avoir une traçabilité des articles (sauf contre-indication par le TOM)
- **H « Statut d'origine »** : A clarifier avec business
- **I « Commentaire d'origine »** : BR de la famille inbound BR-01-002 (notification NNN / conso directe) réutilisé côté outbound — vérifier la cohérence de numérotation et le recouvrement avec la FSP inbound de notification automatique au demandeur.
- **J « Résultat attendu (source) »** : Le demandeur est informé automatiquement que son matériel part avec la prochaine tournée, sauf contre-indication du TOM.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D12 : ID 'GAP BR-01-002-020-B' utilisé pour 2 objets (étiquette HU NNN / mail expédition) ; variante 'BR-01-002-0020-B' en Outbound ; A9 : BR noté 'BR-01-002-0020-B' (format BR à vérifier)
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le mail au demandeur à l'expédition est-il confirmé (activable/désactivable, sauf contre-indication du TOM) et quel BR exact (BR-01-002-020-B ?) s'applique ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 74
Mots-clés trouvés : refus
Statut : Statut d'origine = A clarifier avec business

- **A « N° * »** : 71
- **B « Onglet d'origine »** : GAP List Outbound
- **C « Ligne source »** : 47
- **D « GAP ID »** : BR-02-002-050
- **E « BR lié(s) »** : BR-02-002-050
- **F « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **G « Description courte »** :
  > Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone — scan à l'enlèvement par le magasinier
  > Le magasinier sort les HU d’expédition de l’entrepôt une par une. Pour …
- **H « Statut d'origine »** : A clarifier avec business
- **I « Commentaire d'origine »** : Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.A réexpliquer le BR
- **J « Résultat attendu (source) »** : Le transporteur enlève la bonne HU refusée, contrôlée par scan, même si du matériel identique se trouve dans la même zone.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D8 : BR-02-002-050 présent en Outbound et en QM
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le chargement RF standard par scan de HU sur la TU (porte liée) suffit-il à contrôler l'enlèvement de la bonne HU refusée ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 86
Mots-clés trouvés : mitraille
Statut : Statut d'origine = À analyser

- **A « N° * »** : 83
- **B « Onglet d'origine »** : GAP List Internal
- **C « Ligne source »** : 3
- **D « GAP ID »** : GAP BR-04-002-010-A
- **E « BR lié(s) »** : BR-04-002-010 ; BR-04-002-010-A
- **F « Titre »** : Retrait du stock selon statut article
- **G « Description courte »** : Émettre des tâches de picking regroupées dans une vague dédiée pour les articles Z3 destinés à la mitraille et les autres statuts retenus, sans validation préalable du coordinateur.
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Définir déclenchement, fréquence et destination.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quels déclencheur, fréquence et destination pour le retrait automatique des articles Z3 (mitraille) et des autres statuts ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 104
Mots-clés trouvés : avoir
Statut : Statut d'origine = A confirmer avec Business

- **A « N° * »** : 101
- **B « Onglet d'origine »** : GAP List Reporting
- **C « Ligne source »** : 14
- **D « GAP ID »** : BR-07-006-010
- **E « BR lié(s) »** : BR-07-006-010
- **F « Titre »** : Statut des commandes et suivi du SLA
- **G « Description courte »** : Créer un rapport de statut de commande (qd a-t-on lancé le picking / emballé les marchandises / expédié les marchandises) afin de maitriser notre SLA et avoir une base d'info fiable pour les clients
- **H « Statut d'origine »** : A confirmer avec Business
- **I « Commentaire d'origine »** : Excel BR : « Gap ». Définir le SLA (écart vs date de besoin) et le destinataire de l'information.
- **J « Résultat attendu (source) »** : Le DC maîtrise son SLA et informe les clients de façon fiable.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Comment le SLA est-il défini (écart vs date de besoin) et à qui l'information est-elle destinée ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 109
Mots-clés trouvés : échantillon
Statut : Statut d'origine = (vide)

- **A « N° * »** : 106
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 2
- **D « GAP ID »** : à vérifier (vide)
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet sont placé dans emplacement qualité pour quitter le DC
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Mouvement 331 depuis 243A (échantillons/lot vers emplacement qualité) : quel ID/BR rattacher, et le mouvement automatique est-il confirmé ? (ligne 3 et 5 : destination 243L vs 243A à vérifier)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 110
Mots-clés trouvés : labo, échantillon, 107
Statut : Statut d'origine = (vide)

- **A « N° * »** : 107
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 3
- **D « GAP ID »** : à vérifier (vide)
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Mouvement 332 vers 243L automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A7 : mouvement 332 vers 243L (ligne 3) vs 243A (ligne 5) : incohérence apparente ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Mouvement 332 vers 243L (arrivée au labo) : quel ID/BR rattacher, et le mouvement automatique est-il confirmé ? (ligne 3 et 5 : destination 243L vs 243A à vérifier)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 111
Mots-clés trouvés : refus, échantillon, 108
Statut : Statut d'origine = (vide)

- **A « N° * »** : 108
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 4
- **D « GAP ID »** : à vérifier (vide)
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Mouvement 331 depuis 243A automatique une fois que les echantillons ou le lot complet accepté ou refusé pour quitter le DC
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Mouvement 331 depuis 243A (lot accepté/refusé) : quel ID/BR rattacher, et le mouvement automatique est-il confirmé ? (ligne 3 et 5 : destination 243L vs 243A à vérifier)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 112
Mots-clés trouvés : labo, échantillon, 109
Statut : Statut d'origine = (vide)

- **A « N° * »** : 109
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 5
- **D « GAP ID »** : à vérifier (vide)
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : — (titre vide dans la source)
- **G « Description courte »** : Mouvement 332 vers 243A automatique une fois que les echantillons ou le lot complet sont arrivé au Labo qualité
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A7 : mouvement 332 vers 243L (ligne 3) vs 243A (ligne 5) : incohérence apparente ; A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Mouvement 332 vers 243A (arrivée au labo) : quel ID/BR rattacher, et le mouvement automatique est-il confirmé ? (ligne 3 et 5 : destination 243L vs 243A à vérifier)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 114
Mots-clés trouvés : retour, refus, labo, échantillon
Statut : Statut d'origine = À analyser

- **A « N° * »** : 111
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 7
- **D « GAP ID »** : GAP possible BR-02-000-010
- **E « BR lié(s) »** : BR-02-000-010 ; BR-02-001-010
- **F « Titre »** : Décision sur le lot complet sans réintégration des échantillons (HU multi-sites)
- **G « Description courte »** : Le système doit permettre, en cas d'échantillons séparés du reste du lot, d'accepter ou de refuser tout le lot sans reintégrer les échantillons (toutes les HU doivent pouvoir être acceptées / refusées même quand elles font partie du même lot …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Classé « Fonctionnalité QM – Pas listé dans les flux ».
- **J « Résultat attendu (source) »** : Confirmer avec QM le cycle de vie des échantillons (consommation, destruction, retour) et la représentation du labo dans SAP.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quel est le cycle de vie des échantillons (consommation, destruction, retour) et comment le labo est-il représenté dans SAP ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 115
Mots-clés trouvés : refus, litige
Statut : Statut d'origine = À analyser

- **A « N° * »** : 112
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 8
- **D « GAP ID »** : GAP possible BR-02-000-020
- **E « BR lié(s) »** : BR-02-000-020 ; à rapprocher de GAP BR-01-003-100
- **F « Titre »** : Flux de communication du contrôleur vers acheteur et DC (acceptation / refus)
- **G « Description courte »** : Le système doit permettre au controleur de lancer le flux de communication vers l'acheteur et vers DC en cas de refus partiel ou complet des produits, et vers DC en cas d'acceptation
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Réutilisation possible du canal litiges (GAP BR-01-003-100) à étudier.
- **J « Résultat attendu (source) »** : Définir les destinataires, le canal (mail, tuile Fiori) et le contenu de la notification.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quels destinataires, quel canal (mail, tuile Fiori) et quel contenu pour la notification à la décision d'emploi ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 116
Mots-clés trouvés : labo, échantillon
Statut : Statut d'origine = À analyser

- **A « N° * »** : 113
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 9
- **D « GAP ID »** : GAP possible BR-02-001-010
- **E « BR lié(s) »** : BR-02-001-010 ; BR-02-000-010
- **F « Titre »** : Traçabilité des échantillons DC ↔ labo
- **G « Description courte »** : Le système doit permettre de tracer l'envoi des échantillons bloqués pour inspection dans un endroit extérieur en amont de la prise de décision (-> du DC vers le labo / du labo vers le DC…) (flux physique = flux SAP)
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed. Traçabilité HU à travers le E2E ».
- **J « Résultat attendu (source) »** : Confirmer la localisation du labo (interne au DC ou site distinct) et le mode de suivi attendu.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le labo est-il interne au DC ou un site distinct, et quel suivi (scan HU) est attendu ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 117
Mots-clés trouvés : fournisseur
Statut : Statut d'origine = À analyser

- **A « N° * »** : 114
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 10
- **D « GAP ID »** : GAP possible BR-02-001-020
- **E « BR lié(s) »** : BR-02-001-020
- **F « Titre »** : Remplacement du contrôle chez le fournisseur par un contrôle à la réception
- **G « Description courte »** : Le système doit permettre à l'inspecteur / controleur de remplacer le contrôle chez le fournisseur par le contrôle à la réception dans des cas où on ne peut pas se déplacer chez le fournisseur
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Besoin principalement porté par QM ; impact EWM = mise en stock qualité à la réception.
- **J « Résultat attendu (source) »** : Confirmer avec QM le mécanisme de bascule et son impact sur la réception EWM.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Comment QM bascule-t-il du contrôle chez le fournisseur au contrôle à la réception, et quel impact sur la réception EWM ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 118
Mots-clés trouvés : retour, fournisseur
Statut : Statut d'origine = À analyser

- **A « N° * »** : 115
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 11
- **D « GAP ID »** : GAP possible BR-02-002-010
- **E « BR lié(s) »** : BR-02-002-010
- **F « Titre »** : HU dédiées au retour fournisseur
- **G « Description courte »** : Le système doit permettre de gérer des HU pour le retour fournisseur, identifiées dans eWM tant que c'est dans le magasin afin de garantir la traçabilité complète
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Référentiel : « Application du principe HU managed ».
- **J « Résultat attendu (source) »** : Confirmer si le standard HU managed couvre entièrement le besoin.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : Le standard HU managed couvre-t-il entièrement les HU dédiées au retour fournisseur ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 119
Mots-clés trouvés : refus
Statut : Statut d'origine = A clarifier avec business

- **A « N° * »** : 116
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 12
- **D « GAP ID »** : GAP possible BR-02-002-020
- **E « BR lié(s) »** : BR-02-002-020
- **F « Titre »** : Étapes de refus et de renvoi guidées par scanner
- **G « Description courte »** : Le système doit permettre à l'agent de suivre des étapes de refus et de renvoi du matériel avec l'aide de scanner afin de garantir la traçabilité totale et empêcher des erreurs
- **H « Statut d'origine »** : A clarifier avec business
- **I « Commentaire d'origine »** : Absent des GAP Lists.
- **J « Résultat attendu (source) »** : Définir les étapes de refus à guider au scanner.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quelles étapes de refus et de renvoi doivent être guidées au scanner ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 120
Mots-clés trouvés : retour, rebut, fournisseur
Statut : Statut d'origine = A clarifier avec business

- **A « N° * »** : 117
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 13
- **D « GAP ID »** : GAP BR-02-002-030
- **E « BR lié(s) »** : BR-02-002-030
- **F « Titre »** : Étiquetage du matériel rebuté pour retour fournisseur
- **G « Description courte »** : Le système doit permettre d'identifer le matériel rebuté en entier ou en partiel pour le retour fournisseur avec des étiquettes afin de garantir la traçabilité
- **H « Statut d'origine »** : A clarifier avec business
- **I « Commentaire d'origine »** : Absent des GAP Lists.
- **J « Résultat attendu (source) »** : Définir le contenu de l'étiquette de retour.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quel contenu pour l'étiquette du matériel rebuté (entier / partiel) ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 121
Mots-clés trouvés : retour, fournisseur, 922, 108
Statut : Statut d'origine = À analyser

- **A « N° * »** : 118
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 14
- **D « GAP ID »** : BR-02-002-040
- **E « BR lié(s) »** : BR-02-002-040 ; lié à GAP BR-01-003-110
- **F « Titre »** : Document de renvoi fournisseur lié au PO (bon 8000)
- **G « Description courte »** : Le renvoi du matériel chez le fournisseur doit se passer sur base d'un document (exemple bon 8000…) lié au Purchase Order afin que la référence de ce document - envoyé manuellement par replenishment au fournisseur - serve au transporteur pour …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. Référentiel : « x (Créer bon sans référence) ». Solution à aligner avec GAP BR-01-003-110 (mvt 108 vs flux retour / mvt 922).
- **J « Résultat attendu (source) »** : Trancher le type de document de retour en cohérence avec GAP BR-01-003-110.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quel document de retour lié au PO retenir (bon 8000, livraison de retour standard), en cohérence avec le choix mvt 108 vs 922 ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 122
Mots-clés trouvés : refus
Statut : Statut d'origine = A clarifier avec business

- **A « N° * »** : 119
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 15
- **D « GAP ID »** : GAP BR-02-002-050
- **E « BR lié(s) »** : BR-02-002-050
- **F « Titre »** : Contrôle de la HU refusée enlevée par le transporteur
- **G « Description courte »** : Il faut pouvoir contrôler que le transporteur enlève la bonne HU refusée, même s'il y a le même matériel qui se trouve dans la même zone. Scan à l'enlèvement par le magasinier.
- **H « Statut d'origine »** : A clarifier avec business
- **I « Commentaire d'origine »** : Repris de la GAP List Outbound (ID sans préfixe « GAP »). Scan HU une par une + confirmation de l'endroit de sortie ? C'est déjà rattaché au TU avec une door qui est liée.
- **J « Résultat attendu (source) »** : Confirmer si le chargement RF standard sur TU suffit.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D8 : BR-02-002-050 présent en Outbound et en QM
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le chargement RF standard sur TU suffit-il pour contrôler l'enlèvement de la HU refusée ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 124
Mots-clés trouvés : avoir, 917
Statut : Statut d'origine = À analyser

- **A « N° * »** : 121
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 17
- **D « GAP ID »** : — (couvert EWM GZH)
- **E « BR lié(s) »** : BR-04-001-020-00, BR-04-001-020-A
- **F « Titre »** : Isolement / quarantaine du stock non conforme avec traçabilité
- **G « Description courte »** : Le système doit permettre au responsable DC + magasinier de pouvoir isoler, rassembler et mettre en quarantine des pièces identifiées comme problématique (plainte ou autre…) afin de séparer le stock mauvais du stock qu'on va livrer au …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. BA 01-09-2026 : il doit être possible de sortir les articles de la BIN et de les mettre en 917 ; on veut bloquer le stock et avoir son tracking (qui, quand, pourquoi).
- **J « Résultat attendu (source) »** : Confirmer que le standard GZH couvre la traçabilité du motif de blocage.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : Le standard GZH trace-t-il qui a bloqué le stock, quand et pourquoi (zone 917) ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 125
Mots-clés trouvés : 122
Statut : Statut d'origine = À analyser

- **A « N° * »** : 122
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 18
- **D « GAP ID »** : GAP possible BR-04-001-020-B
- **E « BR lié(s) »** : BR-04-001-020-B ; BR-04-001-020-A
- **F « Titre »** : Suivi de la décision sur un article bloqué pour non-conformité
- **G « Description courte »** :
  > pas encore de BR > à discuter avec autre pilier > fichier "Input à valider" ID34
  > Besoin détecté : quand article est bloqué pour picking et en attente d'une décision -> assurer suivi du sort de l'article pour qu'il ne s'éternise pas dans le stock
  > -> …
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Absent des GAP Lists. BA statut 1 (actions BA) – ID34 du fichier « Input à valider ». À discuter avec un autre pilier ; à traiter dans les flux internes.
- **J « Résultat attendu (source) »** : Formaliser le BR avec l'autre pilier et définir les acteurs du circuit de décision.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Qui sont les acteurs du circuit de décision pour un article bloqué pour non-conformité, et quel BR formaliser ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 128
Mots-clés trouvés : litige, 107, 109
Statut : Statut d'origine = À analyser

- **A « N° * »** : 125
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 21
- **D « GAP ID »** : GAP possible BR-07-002-030
- **E « BR lié(s) »** : BR-07-002-030 ; à rapprocher de GAP BR-01-003-100
- **F « Titre »** : Rapport des litiges de réception par ligne de PO
- **G « Description courte »** : Rapport par PO line, sur les litiges détectés à la réception (toutes étapes confondues : check list, 107, 109..)
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Lien QM indirect (litiges / non-conformités). Dépend de la base litiges (GAP BR-01-003-100).
- **J « Résultat attendu (source) »** : Confirmer les sources de litiges à agréger et le niveau de détail attendu.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Quelles sources de litiges agréger (checklist, 107, 109) et à quel niveau de détail ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 129
Mots-clés trouvés : refus
Statut : Statut d'origine = (vide)

- **A « N° * »** : 126
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 22
- **D « GAP ID »** : GAP XXXX
- **E « BR lié(s) »** : Lié meeting TOM 10/06/26
- **F « Titre »** : TOM est interessé de recevoir l'info lors d'un refus durant le déchargeent du caion
- **G « Description courte »** : /
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Le TOM souhaite-t-il recevoir l'information lors d'un refus au déchargement du camion, et par quel canal ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 130
Mots-clés trouvés : labo, échantillon
Statut : Statut d'origine = (vide)

- **A « N° * »** : 127
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 23
- **D « GAP ID »** : GAP XXXX
- **E « BR lié(s) »** : Lié meeting TOM 10/06/26
- **F « Titre »** : Echantillons DC - Labo
- **G « Description courte »** :
  > Attention, dans certains cas, 2 échantillons sont
  > nécessaires -> Un sur place dans le DC et un au labo,
  > par ex
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Dans quels cas faut-il 2 échantillons (un au DC, un au labo) et comment les tracer ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 133
Mots-clés trouvés : échantillon
Statut : Statut d'origine = (vide)

- **A « N° * »** : 130
- **B « Onglet d'origine »** : GAP List QM
- **C « Ligne source »** : 26
- **D « GAP ID »** : GAP XXXX
- **E « BR lié(s) »** : Lié meeting TOM 10/06/26
- **F « Titre »** : Echantillons détruit
- **G « Description courte »** :
  > Pour des pièces qui seront détruites, introduire une
  > ligne supplémentaire dans le PO "pièces gratuites"
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Pour les échantillons détruits, la ligne supplémentaire « pièces gratuites » dans le PO est-elle la règle retenue, et qui la crée ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 134
Mots-clés trouvés : retour
Statut : Statut d'origine = À analyser

- **A « N° * »** : 131
- **B « Onglet d'origine »** : GAP List Immatriculation
- **C « Ligne source »** : 2
- **D « GAP ID »** : GAP BR-05-001-010
- **E « BR lié(s) »** : BR-05-001-010
- **F « Titre »** : Génération automatique de l’envoi en immatriculation
- **G « Description courte »** : Suivre automatiquement les articles envoyés à l’immatriculation et les localiser dans une zone dédiée. Après leur dépôt en staging immatriculation, générer automatiquement les mouvements et le bon 8* nécessaires à leur envoi.
- **H « Statut d'origine »** : À analyser
- **I « Commentaire d'origine »** : Préciser les mouvements techniques, les magasins source/destination, les règles de génération et de regroupement du bon 8*. Confirmer la couverture des contraintes de picking, traçabilité et MRP avec les équipes concernées. Pour le retour : responsable du transfert et document de référence du garage Draisine à préciser. Décisions utilisateur du 28/09 : ne pas figer 411/311 ; conserver les deux étapes de réception au retour. Les flux communs sont réutilisés ; le dépôt direct en staging immatriculation lors de la réception fait l’objet d’un GAP distinct. Ancienne ligne Inbound 37 remplacée par un renvoi, sans double comptage.
- **J « Résultat attendu (source) »** : Déclencher l’envoi en immatriculation depuis le staging sans saisie manuelle des mouvements et du bon 8*, en assurant la traçabilité et la disponibilité correcte du stock.
- **K « Motif d'inclusion * »** : Statut non clôturé
- **L « Doublon / anomalie * »** : D9 : GAP BR-05-001-010 présent en Inbound, QM et Immatriculation
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). — Question : Quels mouvements techniques, magasins source/destination et règles de génération/regroupement du bon 8* pour l'envoi en immatriculation (articles ZIMB) ? Qui porte le transfert retour et quel document du garage Draisine ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 136
Mots-clés trouvés : fournisseur
Statut : Statut d'origine = (vide)

- **A « N° * »** : 133
- **B « Onglet d'origine »** : GAP List Immatriculation
- **C « Ligne source »** : 4
- **D « GAP ID »** : à vérifier (vide)
- **E « BR lié(s) »** : à vérifier (vide)
- **F « Titre »** : Etiquette GR contenant le numéro d'immatriculation + numéro de série SAP (pas fournisseur)
- **G « Description courte »** : (vide)
- **H « Statut d'origine »** : (vide)
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut vide (non décidé)
- **L « Doublon / anomalie * »** : A8 : ligne incomplète (statut vide ; ID/BR/titre manquants ou 'GAP XXXX')
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Décision orale Moustafa 31/10, à formaliser : scope ZIMB seulement (pas ZIMA). — Question : Quel contenu exact de l'étiquette GR (n° d'immatriculation + n° de série SAP) et à quel moment l'imprimer ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 138
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 135
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 2
- **D « GAP ID »** : GAP BR-01-002-010
- **E « BR lié(s) »** : BR-01-002-010
- **F « Titre »** : Orientation vers le flux NNN / consommation directe
- **G « Description courte »** : Le système doit indiquer, à la fin de la première étape, que l'article n'est pas pour stock (NNN / cons directe) afin de déterminer le bon flux à effectuer à la deuxième étape
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **L « Doublon / anomalie * »** : D13 : GAP BR-01-002-010 présent en IN et NNN (reprise NNN)
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : L'orientation vers le flux NNN peut-elle être faite par configuration ou nécessite-t-elle un enhancement ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 139
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 136
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 3
- **D « GAP ID »** : GAP — ID à attribuer
- **E « BR lié(s) »** : BR-01-002-010 (orientation) ; détail RF issu du blueprint/deck
- **F « Titre »** : Parcours RF de réception des HU NNN techniquement vides
- **G « Description courte »** : Présenter les HU de la zone de réception selon l’ordre opérationnel et permettre leur traitement malgré l’absence de contenu article EWM.
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Quel ID GAP / BR attribuer au parcours RF de réception des HU NNN techniquement vides ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 140
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 137
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 4
- **D « GAP ID »** : GAP BR-05-003-010-A
- **E « BR lié(s) »** : BR-05-003-010-A
- **F « Titre »** : Localisation des HU non gérées en stock (staging Conso Directe)
- **G « Description courte »** : Localiser les HU non gérées en stock dans une zone de staging pour préparer leur expédition, enlèvement ou transfert.
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **L « Doublon / anomalie * »** : D13 : GAP BR-05-003-010-A présent en IN et NNN (reprise NNN)
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : Le déplacement de HU standard (/SCWM/ADHU) vers la BIN de staging Conso Directe couvre-t-il le besoin ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 141
Mots-clés trouvés : retour, refus, fournisseur, NNN, 122
Statut : Statut d'origine = Analysé

- **A « N° * »** : 138
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 6
- **D « GAP ID »** : GAP — ID à attribuer
- **E « BR lié(s) »** : BR à confirmer
- **F « Titre »** : Retour fournisseur NNN / consommation directe
- **G « Description courte »** : Définir le traitement du retour fournisseur des HU NNN/consommation directe après refus de l’acheteur.
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Confirmer business
- **N « Question à poser * »** : Comment traiter le retour fournisseur des HU NNN après refus de l'acheteur : rejet de la livraison avant 101, mouvement 122 après 101, bon 8* sans référence pour la sortie physique ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 142
Mots-clés trouvés : litige, NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 139
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 7
- **D « GAP ID »** : GAP — ID à attribuer
- **E « BR lié(s) »** : BR spécifique à confirmer
- **F « Titre »** : Réception comptable 101 après traitement de toute la livraison NNN
- **G « Description courte »** : Déclencher le 101 seulement lorsque toutes les HU de la livraison sont réceptionnées et déposées, sans litige bloquant.
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Autre
- **N « Question à poser * »** : Quel BR couvre le déclenchement du 101 après traitement de toutes les HU NNN sans litige ?

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Points ouverts », ligne 143
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « N° * »** : 140
- **B « Onglet d'origine »** : GAP List NNN
- **C « Ligne source »** : 11
- **D « GAP ID »** : GAP — ID à attribuer
- **E « BR lié(s) »** : BR-05-003-010-B ; complément blueprint NNN
- **F « Titre »** : Sélection et préparation des HU NNN par destinataire
- **G « Description courte »** : Sélectionner pour le bon 8 les HU NNN disponibles du destinataire, en excluant toutes les HU des livraisons bloquées.
- **H « Statut d'origine »** : Analysé
- **I « Commentaire d'origine »** : (vide)
- **J « Résultat attendu (source) »** : Préparer uniquement les HU autorisées pour le bon destinataire.
- **K « Motif d'inclusion * »** : Statut 'Analysé' mais point ouvert en commentaire / résultat attendu / BR / ID
- **M « Type d'action * »** : Analyser
- **N « Question à poser * »** : La sélection des HU NNN par destinataire peut-elle se faire depuis /SCWM/MON (standard) ou faut-il une sélection automatique ?

### Onglet « Comptage » (ligne d’en-tête détectée : L3)

#### Points_ouverts_GAP_List_Ronet_v0.1.xlsx — onglet « Comptage », ligne 35
Mots-clés trouvés : NNN
Statut : Statut d'origine = Analysé

- **A « Onglet d'origine »** : GAP List NNN
- **B « Statut d'origine »** : Analysé
- **C « Nombre de points »** : 6

---

## Index_Livrables_assistants.docx
Source : Drive 16U3nq-Jzv1QcqJX5In3OrILv3BrsCHbhrMdnj_ES6Ww (Google Doc)
Texte de référence : `Index_Livrables_assistants.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **4**

#### Index_Livrables_assistants.docx — ligne 18 — section : 02_Retour_Blueprint
Mots-clés trouvés : retour

> Infrabel SAP EWM 2.0 Blueprint - Retour Document FR_v0.1.docx | /workspace/ewm/blueprint_retour/... | Blueprint / Manager

#### Index_Livrables_assistants.docx — ligne 19 — section : 02_Retour_Blueprint
Mots-clés trouvés : retour

> Infrabel SAP EWM 2.0 Blueprint - Retour Document FR_v0.1.pdf | /workspace/ewm/blueprint_retour/... | Blueprint / Manager

#### Index_Livrables_assistants.docx — ligne 20 — section : 02_Retour_Blueprint
Mots-clés trouvés : retour

> Infrabel SAP EWM 2.0 Blueprint - Retour Extraits BPMN FR_v0.2.docx | /workspace/ewm/blueprint_retour/... | Blueprint / Manager

#### Index_Livrables_assistants.docx — ligne 21 — section : 02_Retour_Blueprint
Mots-clés trouvés : retour

> Infrabel SAP EWM 2.0 Blueprint - Retour Extraits BPMN FR_v0.2.pdf | /workspace/ewm/blueprint_retour/... | Blueprint / Manager

---

## Blueprint_Outbound_FR_Final_v1.0.txt
Source : déjà dans le dépôt : infrabel-ewm/00-pm/inputs/Blueprint_Outbound_FR_Final_v1.0.txt
Texte de référence : `../Blueprint_Outbound_FR_Final_v1.0.txt` (numéros de ligne de ce fichier)

Nombre d’extraits : **13**

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 146 — section : 2.2 Expédition
Mots-clés trouvés : retour

>    * Milkruns autres transports -- Milkrun câbles / Retour Schaerbeek / Livraison ponctuelles / Livraisons directes sur chantier

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 219 — section : 3.2.1 Création et mise à jour automatique des vagues de picking
Mots-clés trouvés : avoir

> Le système doit alerter les coordinateurs dynamiquement qu'une demande de T8/T9 est émise afin que le picking puisse avoir lieu (mail ? popup ? étiquette imprimée ? warning dans un rapport?)

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 223 — section : 3.2.1 Création et mise à jour automatique des vagues de picking
Mots-clés trouvés : avoir

> A J-2 par rapport à la date de livraison, avoir la possibilité de visualiser la charge de travail de picking prévue le lendemain (J-1) (= vagues de picking) afin de préparer le huddle de J-1

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 268 — section : 3.2.4 Création des tâches de picking
Mots-clés trouvés : avoir

> Le coordinateur doit avoir la possibilité de lancer une tâche de picking en plus de la vague initalement prévue (cas des demandes ponctuelles (ex j'ai besoin d'un ruban d'imprimante / urgentes)

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 346 — section : 3.4.3 Instructions de picking et confirmation de l'emplacement
Mots-clés trouvés : retour

> Les bobines doivent pouvoir être localisées à tout moment. Leurs déplacements vers le poste de découpe et leur retour sont enregistrés. (BR-05-005-150)

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 448 — section : 3.4.5.2 Gestion des exceptions lors du picking
Mots-clés trouvés : fournisseur

> - les quantités de sortie d'un article peuvent varier en fonction du conditionnement associé à un fournisseur (il pourrait exister plusiseurs conditionnements pour le même fournisseur)

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 449 — section : 3.4.5.2 Gestion des exceptions lors du picking
Mots-clés trouvés : fournisseur

> - les quantités du Supply Catalogue doivent être alignées avec les conditionnements de la commande auprès du fournisseur

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 789 — section : 4.1.1 Flux expédition – Coordinateur DC
Mots-clés trouvés : retour, litige, fournisseur

> * les retours de marchandises liés à un litige fournisseur ;

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 790 — section : 4.1.1 Flux expédition – Coordinateur DC
Mots-clés trouvés : NNN

> * les enlèvements d'articles NNN ou destinés à la consommation directe ;

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 832 — section : 4.1.2.2 Confirmer la sortie des HU d’expédition de l’entrepôt & confirmer l’endroit de sortie des HU d’expédition
Mots-clés trouvés : retour, refus

> Le même mécanisme de scan est appliqué lors du retour d’une HU refusée. Le magasinier scanne la HU au moment de son enlèvement afin de confirmer la sortie de la bonne HU, notamment lorsque d’autres HU contenant le même article se trouvent dans la même zone (BR-02-002-050 – GAP).

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 836 — section : 4.1.2.2 Confirmer la sortie des HU d’expédition de l’entrepôt & confirmer l’endroit de sortie des HU d’expédition
Mots-clés trouvés : échantillon

> Le système doit également permettre de localiser une HU et de consulter l’historique de ses différentes localisations. Cette traçabilité doit couvrir les mouvements réalisés tout au long du processus, y compris les éventuels passages par les flux d’échantillonnage QM et d’immatriculation.

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 854 — section : 4.1.2.4 Sortie des articles du DC
Mots-clés trouvés : NNN

> Dans le cas des articles NNN/Consommation les articles quittent le DC sans enregistrement de la sortie comptable dans le système.

#### Blueprint_Outbound_FR_Final_v1.0.txt — ligne 905 — section : 4.1.3.2 Hus prévues mais non-emportées & HU prévues & emportées
Mots-clés trouvés : avoir

> - Chaque composant doit avoir ses propres caractéristiques (poids, dimension, aire de stockage...)

---

