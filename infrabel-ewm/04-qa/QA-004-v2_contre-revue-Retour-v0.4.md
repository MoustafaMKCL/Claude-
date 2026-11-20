# QA-004 v2 — Contre-revue du Blueprint Retour v0.4 (commit `b0cfc3e`)

> Relecteur : Consultant QA · 2026-11-20
> Livrable : `infrabel-ewm/03-blueprint/retour/Blueprint_Retour_FR_v0.4.md` (+ `.docx`), branche `ewm/blueprint`, commit `b0cfc3e`
> Périmètre : les remarques de QA-004 uniquement. J'ai comparé la v0.3 et la v0.4 au format `.md`, puis vérifié que le `.docx` concorde avec le `.md` sur les marqueurs : 10 « à valider » et 10 « Point ouvert » dans chacun.

## Verdict : **Validé QA**, avec une remarque mineure résiduelle

| Remarque | Statut | Vérification |
|---|---|---|
| BLQ-1 (choix 108 / 922, branche 108) | Levée | La « règle structurante » est retirée. Le choix entre l'option AS-IS (mail et mouvement 108) et le flux retour standard (mouvement 922) est déclaré ouvert au chapitre 3, avec renvoi au point ouvert 6. La justification inventée du GAP est retirée (§3.1.2), et BR-01-003-110 est tagué « à requalifier ». La branche du mouvement 108 est décrite en 3.1.4 (point ouvert 8). Le mouvement 922 n'est plus qu'une option en 5.1.2. Le tableau des scénarios est corrigé. |
| MAJ-1 (marqueurs « à valider ») | Levée | Les 10 marqueurs « lu sur la figure X, à valider » figurent dans le document, avec une remarque générale au §1. La note du mouvement 993 est complétée par « mais R2E… contrôle qualité » et rattachée à la branche « Articles acceptés ». Les notes « Pour BRM » des figures 9, 10 et 11 sont présentées comme besoins à qualifier (point ouvert 9). Le numéro de PO est limité au « cas QM ». |
| MAJ-2 (type de document de retour) | Levée | Le point ouvert est déclaré en 5.1.2 et fusionné au point ouvert 6. L'owner est Bernard, ce qui est conforme à la GAP List. |
| MAJ-3 (statuts de l'annexe) | Levée | J'ai revérifié dans la GAP List 27-10 : BR-02-002-040 (QM, Standard, À analyser), BR-02-002-050 (Outbound et QM), BR-06-002-010 (absent), BR-05-006-050-A et BR-05-003-010-B (NNN), BR-06-003-040 (Outbound, Gap, Enhancement + Interface, Analysé), BR-07-007-010 (Reporting, GAP, KPI, Analysé), BR-06-003-020 (absent). Tous les statuts sont exacts. |
| MIN-1 (tags et annexe) | Levée | Voir la remarque résiduelle ci-dessous. |
| MIN-2 (§5.3.5 et blueprint Outbound) | Levée | Point ouvert ajouté, et point ouvert 4 étendu à 5.3.5. |
| MIN-3 (registre au futur) | En attente | La convention dépend d'une décision du PM et de Moustafa. Ce point ne bloque pas la validation. |
| MIN-4 (périmètre, figure 1 et phrase tronquée) | Levée | Point ouvert 7, adressé à Moustafa. |
| MIN-5 (mouvements 107 et 109) | Levée | « Augmenter le stock en valeur (mouvement 107) » ; « le mouvement 109 ne sera pas effectué ». |
| MIN-6 (cas 2 de la figure 5) | Levée | Ajout d'une nouvelle ligne au PO par Replenishment, marqué « à valider ». |

## Remarque résiduelle (mineure, ne bloque pas la diffusion)

- **Annexe, ligne BR-06-003-020.** Le résumé indique « Confirmer la sortie et l'endroit de sortie des HU d'expédition ». Or le texte du BR, dans le fichier BR, est : « Le coordinateur doit avoir la possibilité d'encoder le retrait des HU d'expédition effectué par le chauffeur milkrun dans le cas où un problème technique est survenu… ». Le rattachement vient de la figure 12 et il est correct. Le résumé, lui, doit reprendre le BR. Il serait aussi utile d'ajouter « (lu sur la figure 12) » au tag des §5.3.4 et 5.3.5.

## Note pour le PM

Le sous-titre de la v0.4 indique encore « non validé QA ». Il est à mettre à jour avant de la transmettre à Moustafa en remplacement de la v0.3.
