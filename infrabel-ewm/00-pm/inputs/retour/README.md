# Inputs « flux RETOUR » – DC Ronet (copie de travail PM)

Collecte du 2026-11-20 : toutes les sources repérées qui parlent du flux retour (retour fournisseur, articles refusés, litiges, mitraille / scrap, retour labo / échantillons, HU refusées, retours de matériel vers le DC). **Aucune synthèse ni analyse** : exports fidèles, versions texte et extraits recopiés mot pour mot. Ne pas modifier ces copies ; les originaux restent sur le Drive.

## Fichiers de travail

| Fichier | Contenu |
|---|---|
| `extraits_retour_par_source.md` | Pour chaque source (16 au total), recopie mot pour mot de chaque passage / ligne de tableur contenant un mot-clé retour, avec référence précise (onglet + ligne, ou section + ligne du .txt). Les règles de recherche sont décrites en tête du fichier. |
| `plaud_extraits_retour.md` | Inventaire des 28 enregistrements Plaud de la période, puis extraits des notes et des transcriptions (avec horodatage) pour les enregistrements qui parlent du retour ; repérage [DÉCISION ?]. |
| `*.txt` | Version texte intégrale de chaque .docx / .xlsx exporté. Docx : un paragraphe ou une ligne de tableau par ligne, titres préfixés par « # ». Xlsx : une ligne par ligne de tableur, préfixée par `[Onglet] L<n°>:`, cellules séparées par « | », retours à la ligne internes notés « ⏎ ». |

## Sources exportées

Colonne « Nb d’extraits » = nombre de passages / lignes recopiés dans `extraits_retour_par_source.md` (le mot « avoir » et les nombres 107, 109, 917… captent aussi du bruit, voir les règles en tête de ce fichier).

| Fichier | Source (ID Drive ou Plaud) | Ce qu’il contient | Nb d’extraits « retour » | Problème éventuel |
|---|---|---|---|---|
| Blueprint_Retour_v0.1.docx (+ .txt) | Drive 1anXmmEwPBPRhBXJo88FBKSSbWitEowPB | « Infrabel SAP EWM 2.0 Blueprint - Retour Document FR_v0.1 », brouillon du 02/11/2026 : flux F1 à F7 (refus de réception, litige / décision acheteur, retour fournisseur, mitraille, retours internes, HU qui reviennent au DC), BR associées, questions Q01… | 176 | 15 images (extraits BPMN) non textualisées dans le .txt |
| Blueprint_Retour_Extraits_BPMN_v0.2.docx (+ .txt) | Drive 1_xcUEpoiOm0IbA37_gINgg5bTSsmHmfU | Recueil des captures BPMN liées au retour, classées par flux (0 E2E, 1, 2B, 3, 3B, 5B, 5C, 9) | 17 | Document surtout composé de 15 images : le .txt ne contient que les titres et légendes |
| BR_Flux_Retour.xlsx (+ .txt) | Drive 1w_79ffJROhxwbaioUwlMtmDAGwobMgGF | BR directement liées au retour (onglet « BR Retour »), BR indirectes (« Liées indirectement »), questions au business (« Questions ») | 35 | – |
| GAP_List_Ronet_05-11.xlsx (+ .txt) | Drive 1P5wR7bFzspYiRKmlvdHM54usKEI0yuEGxhdx4Y1f31A (Google Sheet exporté en xlsx) | GAP List EWM2.0 Ronet du 05-11 : synthèse et analyse fit-gap, GAP Lists Inbound, Outbound, Internal, Reporting, QM, Immatriculation, NNN, Cross dock | 144 | Onglets « GAP List Retours » et « GAP Integration Tours » **vides** dans la source |
| GAP_List_EWM2.0_Ronet_27-10.xlsx (déjà dans `../`) | Drive 1m5QFzkRKBt7v1KFAU6XKheWaYlInt0hs5Hh_x8h_61s (export du 2026-11-01, non réexporté) | GAP List du 27-10 | 86 | Onglets « GAP List Retours » et « GAP Integration Tours » vides ; pas de .txt produit ici (fichier hors de ce dossier) |
| Business_Requirements.xlsx (+ .txt) | Drive 1i_gU0lllY9zc0nFiBbZ_k_5oqVSoVCHaVj6BqzgE7y8 (Google Sheet « Business Requiremens eWM 2-0 (2) ») | Liste maître des BR (feuille de travail, BR 20260220, onglets par étape dont « 8 BR Retour », Master Data, questions blueprint…) | 184 | Avertissement openpyxl sur un cache de tableau croisé (sans effet, le fichier s’ouvre) ; un même BR apparaît dans plusieurs onglets, donc extraits redondants |
| Blueprint_Immatriculation.docx (+ .txt) | Drive 1X2G6g-Njdf8oRYLU5IEeamgviLk_1TDZX34qURDCfdY (Google Doc exporté en docx) | Blueprint Immatriculation FR (retours d’immatriculation, document de retour depuis Draisine) | 9 | 7 images non textualisées |
| CR_meetings_2026-11-13.docx (+ .txt) | Drive 1ZUNd1HEMUHV4XR9cOhnu8WTR4eHe3AtL | « Comptes rendus des meetings – 13 11 2026 » | 11 | – |
| Follow-up_Ronet.xlsx (+ .txt) | Drive 1G8BX6Axh6DYg5uShPktWBV96ilVCXgkb2OqcnhY9_jo (Google Sheet) | Suivi Ronet : onglets Ronet, CR BRM, Blueprint, BUG | 4 | – |
| Taches_Follow-up_Ronet_05-11.xlsx (+ .txt) | Drive 1VTI_8IX-41ImN7hEMS7-d-R67VLt0n3zBeEqeai_wLM (Google Sheet) | Tâches Follow-up Ronet du 05-11-2026 et proposition de fusion | 2 | – |
| Prep_meeting_Bernard_2026-11-05.md | Drive 1g5XHh1GZB6zSVdU2ojXRK7wTt1PSE_Wu | Préparation réunion Bernard du 05/11 (RACI Master Data, kit-to-order STO) | 0 | Aucun mot-clé retour |
| fiche_capture_meeting_2026-11-03.md | Drive 1OuXavjgWpBSaPWUD-yamEzDpCYsrKduH | Capture meeting Immatriculation du 03/11 | 1 | – |
| Plan_decisions_GAP_List_Ronet_v0.1.xlsx (+ .txt) | Drive 1RXojz-xxgQxQEwoJgdIf8z0f1HcSocFZ | Plan de décisions sur la GAP List 27-10 (synthèse, plan, doublons & anomalies) | 64 | – |
| Points_ouverts_GAP_List_Ronet_v0.1.xlsx (+ .txt) | Drive 1gcYchZ3OsmDAQxsk60S175-GzYJp0Pz4 | Points ouverts de la GAP List 27-10 et comptage | 47 | – |
| Index_Livrables_assistants.docx (+ .txt) | Drive 16U3nq-Jzv1QcqJX5In3OrILv3BrsCHbhrMdnj_ES6Ww (Google Doc exporté en docx) | Index des livrables produits par les assistants EWM Ronet | 4 | – |
| Blueprint_Outbound_FR_Final_v1.0.txt (déjà dans `../`) | Drive 1420ge1w5ENWCdJW1APztJh7J3AoX_7t7V4tiOF5ZjEU (non réexporté) | Blueprint Outbound Final v1.0, texte | 13 | Les cellules de tableau y sont une par ligne : un extrait peut n’être qu’un fragment de tableau |
| plaud_extraits_retour.md | Plaud (28 enregistrements du 2026-11-12 au 2026-11-20) | Voir ci-dessous | 6 enregistrements pertinents + 3 marginaux | Aucun enregistrement entre le 2026-10-01 et le 2026-11-11 |

Tous les .docx et .xlsx exportés s’ouvrent avec python-docx / openpyxl (vérifié). Les téléchargements Drive ont été reçus directement en binaire (pas de double base64).

## Enregistrements Plaud pertinents

| Date | Titre | ID Plaud | Segments de transcription contenant un mot-clé |
|---|---|---|---|
| 2026-11-16 | 11-16 Revue: Priorisation par aire des réceptions, mise en stock et litiges | f_01a1e4f8687a75cabf8a714aa2f47922 | 28 |
| 2026-11-16 | 11-16 Atelier de priorisation: Gaps inbound et réception | f_01a1e493d0677d0ab666cc146a3a2270 | 76 |
| 2026-11-17 | 11-17 Revue des GAP: Priorisation, flux Interline et réception NTM | f_ea4ff59d44bd451180581bb7898fda23 | 16 |
| 2026-11-17 | 11-17 Revue des demandes: Conversion des paniers, commandes et prélèvement EWM | f_c9a4057a2e464a078f31536c68f91d0a | 1 |
| 2026-11-18 | 11-18 Atelier: Gaps internes et NIT-LN priorisés, standard et manuel distingués | f_01a1eee9569d7e8880ae6d3c3938f882 | 53 |
| 2026-11-18 | 11-18 Revue des BR Outbound: Notifications, sorties physiques et flux de kits | f_01a1ef4a8d8d75d2b74ba402ddaf286c | 5 |

Pertinence marginale (notes recopiées) : 11-19 Tickets SAP/EWM (f_7c7e3d3806614c94a11cf3421b26f544, transcription lue, 2 segments), 11-18 Split (f_01a1ee5115397ebe809a593e34a2fc47) et 11-17 Revue de gaps WM (f_f54e2825415940428ef5ef942694a05e), transcriptions non lues pour ces deux-là.

## Autres fichiers Drive trouvés par la recherche plein texte (non exportés)

Recherches effectuées : `fullText contains 'retour'` (2 pages, environ 66 résultats), `fullText contains 'litige'` (27 résultats), `fullText contains 'mitraille'` (13 résultats, tous déjà listés ci-dessus ou en PDF ci-dessous). Le contenu des fichiers ci-dessous **n’a pas été lu** : la raison indiquée est le titre / dossier et la recherche qui les a trouvés.

| Titre | ID Drive | Pourquoi il peut être pertinent |
|---|---|---|
| Infrabel SAP EWM 2.0 Blueprint - Retour Document FR_v0.1.pdf | 1McciAkE2ySuuEd1xbB_qp2vLMrZeUbg0 | Version PDF du blueprint Retour v0.1 (trouvé par retour, litige, mitraille) ; doublon du .docx exporté |
| Infrabel SAP EWM 2.0 Blueprint - Retour Extraits BPMN FR_v0.2.pdf | 1xYyMKCpL7mLeTOqo7mO16t62zSAA4gxU | Version PDF des extraits BPMN v0.2 ; doublon du .docx exporté |
| 02_Retour_Blueprint (dossier) | 1W8ladhKi-JBPe2jMlfDd39cH_Cq5-uW8 | Dossier qui contient les blueprints Retour ci-dessus |
| 5B_Flux_Mettre_à_disposition_eWM2.0_V2.bmp | 1YjHHAOnWOQ4OwMeyhssV1z335drMupvH | BPMN 5B (cité par le blueprint Retour pour la mitraille / le retour fournisseur) ; image, trouvée par « retour » |
| 5C_Création bon sans référence_eWM2.0_V2.bmp | 1iCdaB6wA7pGCR2nDfUBvn4rY0_5Z6Jo4 | BPMN 5C (bon sans référence, « e.a. Retour fournisseur » selon le blueprint Retour) ; image |
| GAP_List_EWM2.0_Ronet (1) | 1fHZrw8a_ZICsbDO4B6u8nK6TQcuJjmG19Oouik8EQL4 | Version antérieure (25-10) de la GAP List ; retour + litige |
| Infrabel SAP EWM 2.0 Blueprint - Outbound Document FR_Draft1 (1) | 1kIwLlal9cyLWMYs0byi4eR26j994bOEmZVHauKn44gs | Brouillon antérieur du blueprint Outbound ; retour + litige |
| Blueprint_Outbound_Final_annote.docx | 1iOn59VnYjgujCQa7Hpd1OjvtbaEPXuLb | Blueprint Outbound annoté ; retour + litige |
| Comparaison_couverture_Outbound_GAP_BR_Blueprint_05-11.xlsx | 1SalJxn2mEOFk3_divVqOQnWvakiWHEy7 | Comparaison GAP / BR / blueprint Outbound ; retour + litige |
| Controle_GAP_list_vs_Blueprint_Outbound.xlsx | 1Rj41xIG8CJThCoTwqtEkmAcUYhLmPfCR | Contrôle GAP list vs blueprint Outbound ; retour + litige |
| Controle_BR_Outbound_complet.xlsx | 1amk_-eeT_hZneE5NsiaGbp7RF5YQOuCf | Contrôle des BR Outbound ; retour + litige |
| Conception_Solution_EWM_Outbound_v3.xlsx | 13p6iRSOaKf55gdM9uEWHKs9miqYw_j3f | Conception solution Outbound ; retour + litige |
| GAP_Outbound_Priorisation.pptx | 1z2iM6BQrwzCmjb3q1gs-dzkk4UIa-er3 | Priorisation des GAP Outbound (BR-02-002-050 HU refusée y figure peut-être) ; retour + litige |
| Points ouverts business - GAP Outbound Ronet (2026-11-01) | 1otMmHv3BBjSNwywkVNWfBR-Zw0KdQSTqYwPAooHgjQc | Points ouverts business Outbound ; retour |
| Controle_points_BPR_vs_GAP_list_Outbound.xlsx | 1sUGlMjh7qs_HndSffeFVjR36_NLyxNog | Contrôle BPR vs GAP Outbound ; retour |
| Points_a_discuter_Business_Outbound_27-10.xlsx | 1T8k5l8EsyJrjOkUwHoFBMFK7kxEO4rNb | Points à discuter Outbound ; retour |
| Points_ouverts_reunion_Outbound.xlsx / .docx / points_ouverts_draft.csv | 1E0QoAhFMibJcM5Wn1fSS03pUYAkkpqSL / 10d7bP-X4QCZGonEPz3rW8fM2WdPD_Mz1 / 14SC09SVaxeJo-2yXqgXmiAvgOzQN99f1 | Points ouverts réunion Outbound ; retour |
| Modifications_Blueprint_Outbound_final_v2.xlsx | 1A68_M1M08vXl7MSUXCL0np4gqT-WO9c_ | Modifications du blueprint Outbound ; retour |
| Plan_finalisation_Blueprint_Outbound_v2.docx | 1AnT4OGv9doEAq9d83SmHDweAKjx2Pcpv | Plan de finalisation Outbound ; retour |
| Tracabilite_Draft_Outbound.xlsx | 14Y10gyFAunF-ve70BPPtTO7I1ohl2dSH | Traçabilité draft Outbound ; retour |
| CrossDock_Besoin_Options_Infrabel_v3.pptx / Approfondissement_Config_CrossDock_SAP_EWM.docx | 1V-i4VU9J-EpoVjFpsKnfLbozdPF_YiN0 / 1LiVPJcgp3bDWgOXt8B-qRNE-GQwqDiQA | Cross-dock (lié à BR-08-010-030 « HU non nomenclaturées », idée d’origine « Qui s’occupe des retours ? ») ; retour |
| Integration_Tours_VLM_EWM_2026-11-09.docx / .pdf | 18PJQ5Ri3SmLNu8gusJi7tYaC4-DgzfZ7 / 1GjQ1XKruTTEoRcxWG0mL3-P3bDvrbkNs | Intégration tours VLM ; retour (sens du mot non vérifié) |
| TCD_SAP_EWM_Infrabel.pptx | 1fh0x9YG4S_oL6ezAenoV0Fv9kk2OqyBb | Présentation EWM Infrabel ; retour |
| WT creation after UD based on Follow-up | 15r3BIyjpz5M7qt8EkoTsLc5hJwJjz1hZFlysd7R7E3Y | Spécification « tâche après décision d’utilisation » (QM) ; retour |
| I_FS_L_E3192 Set unlimited tolerance flag in STO | 11nw0wVIWZucV9HZsPDOjAhKm6Va-RNWgyF8GwYorHNY | Spécification STO ; retour |
| Notes Gemini « Réunion commencée à … » (2026-01-04, 01-09, 01-15, 01-19, 02-08, 02-25, 02-26, 03-15, 03-23, 03-26, 04-26, 06-05) | 11Ikdq2zFB67vL1rzcShOmuTeRzsBidNm0yvFB7Vhl1A, 1VCpaKDDRwNSlnpozIsa64cVYzlwM99ivCtyHWu1_bTk, 1bcpVr5sP9VPH2ElWcioNZXEoCSCM8w8Clc5H679u0gE, 1Xb_qInwS_K5Bz7I5K9D6znjGySuVg4imxnmW3GKDUDY, 1sz4X-Hp7hVT5es0Gk25q-_hQTCXJ3U036uw_zgSd5Gw, 1u8PZfsfzjdF9x1Wfmqliyx4BKOBKBhocKI8NaGQ_1so, 1xnVTbrKtUKcLMGyG-CvbjpGCvINjYc96LdmjaGPnJZw, 1VvlTjy4OJwYyGzCFIPlxyUNa3yYDWGb9Vrn9y6V8RvQ, 1Ec16OSV3l4JQDtQYdhq7zLCDP0KpEBylDVN9snvhfY8, 1a_zUeIL_CcQsXXfVOaK6n6SIQHc8_7Tc3B8VIq0pux8, 12pEsOiFfZPI7ZPIrBAyuR39XakX2MK5kEs6vId4c9DA, 1zpgJbIMGiOL6PUjsqAtwB_SRoY2aR8QS2S_WlAT89lw | Comptes rendus de réunions ; « retour » (et « litige » pour 02-25, 02-26, 03-23, 03-26). Rattachement au projet Ronet non vérifié |

Résultats écartés comme manifestement hors sujet (non listés en détail) : contrats, documents Reprobel, itinéraire de voyage, supports de formation génériques sur le prélèvement.

## Ce qui n’a pas pu être exporté ou lu

- Rien n’a échoué à l’export : les 14 fichiers demandés sont téléchargés et s’ouvrent.
- Images (captures BPMN) des blueprints : présentes dans les .docx mais non converties en texte. Le document « Extraits BPMN v0.2 » est donc presque vide en version .txt.
- Onglets « GAP List Retours » et « GAP Integration Tours » : vides dans les deux GAP Lists (05-11 et 27-10).
- Plaud : aucun enregistrement avant le 2026-11-12 sur la période demandée ; deux transcriptions de pertinence marginale non lues (voir ci-dessus).
- Les fichiers Drive supplémentaires listés ci-dessus n’ont pas été ouverts.
