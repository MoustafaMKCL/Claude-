# QA-001 v2 — Contre-revue de BP-001 v2

> Relecteur : Consultant QA · 2026-11-01
> Livrable relu : `infrabel-ewm/03-blueprint/revue-blueprint-outbound-vs-gap.md`, branche `ewm/blueprint`, commit `09cf64e` (v2)
> Périmètre : uniquement les remarques du rapport QA-001 (`QA-001_revue-BP-001_blueprint-outbound-vs-gap.md`)
> Sources de contrôle : identiques à QA-001 (BP texte et GL xlsx de la branche `ewm/pm`, fichier BR onglet 20260220)

## Verdict : **Validé QA**

Les 12 remarques de QA-001 sont traitées. Aucune remarque nouvelle n'est bloquante ou majeure.

## Contrôle point par point

| Remarque | Statut | Vérification |
|---|---|---|
| MAJ-1 (#40) | Levée | Classée PO. Aucune réécriture de L807. L'ID est corrigé en BR-01-002-020-B. Q15 est reformulée en question d'évolution du BR. |
| MAJ-2 (#37) | Levée | Classée PO, doublon de #56, comptée une seule fois. §4.3 est corrigé. |
| MAJ-3 (#46) | Levée | Classée PO, conditionnée à Q17. Le constat signale la fidélité de L832 au BR. |
| MAJ-4 (§1(b), #17) | Levée | #17 passe en PO, et le texte proposé pour L410 n'est plus qu'un point ouvert. La répartition est recalculée et contrôlée : C 2 + PO 31 + AL 16 + ABS 5 + DEC 2 = 56. Les 27 sujets distincts sont exacts : 31 lignes, moins les doublons #37, #50 et #55, moins #33, prérequis de #26. La distinction « notée dans la GL » / « confirmée » est introduite. |
| MAJ-5 (#14) | Levée | Le constat cite L390 (blueprint Internal) et L384–L385, citation vérifiée dans le BP. Le texte proposé devient un point ouvert avec renvoi. Q18 est ajoutée. |
| MAJ-6 (#4) | Levée | §4.14 est ajouté et aucun texte n'est proposé avant résolution. Q2 est complétée. |
| MIN-1 | Levée | §4.13 et H5 intègrent les vérifications dans le fichier BR. |
| MIN-2 | Levée | La phrase est retirée de L203 et déclarée en hypothèse H6. |
| MIN-3 | Levée | « bon 8* » et « STO ou réservation » sont repris. « bon 800 » ne subsiste qu'à l'intérieur d'une citation de la GL (#16), ce qui est correct. |
| MIN-4 | Levée | « transaction spécifique (développement) » est repris, avec la dépendance à Q1. |
| MIN-5 | Levée | Les deux variantes de déclaration des points ouverts sont proposées, et le choix est renvoyé en Q19. |
| MIN-6 | Levée | #28 est placé dans le bloc Consolidation. |

## Contrôle de non-régression

- Les 53 extraits `L… « … »` de la v2 ont été recontrôlés par script : ils sont tous fidèles.
- Aucune autre section n'a été modifiée en dehors des points QA-001, d'après le diff entre la v1 (`3238e2d`) et la v2.

## Remarque résiduelle (mineure, sans effet sur le verdict)

- **§1(b).** L'intitulé « 4 lignes se corrigent sans nouvel arbitrage métier » reste un peu fort : #2 dépend de Q1 (reformulation du BR) et #5 de Q3 (confirmation avec Bernard). Le texte le signale aussitôt après. Une formulation du type « sans arbitrage métier nouveau, sous réserve de Q1 et Q3 » serait plus exacte. À reprendre à l'occasion ; ce n'est pas requis pour la diffusion.
