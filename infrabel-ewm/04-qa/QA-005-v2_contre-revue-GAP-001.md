# QA-005 v2 — Contre-revue de GAP-001 v0.2 (commit `75ba16b`)

> Relecteur : Consultant QA · 2026-11-20
> Livrable : `infrabel-ewm/01-gap/retour/dossier-retour-consolide.md` (+ `.xlsx`), branche `ewm/gap`, commit `75ba16b`
> Périmètre : les remarques de QA-005 uniquement. J'ai comparé la v0.1 et la v0.2 du `.md`, puis vérifié que le `.xlsx` concorde avec le `.md`.

## Verdict : **Validé QA**

| Remarque | Statut | Vérification |
|---|---|---|
| MAJ-1 (image 8) | Levée | Le §0 cite BPv02 §41, « BPMN reception 2 ». I01 est retiré. Le §1 point 9, l'étape 2a du parcours et la question 3 sont corrigés : il reste seulement à confirmer que « reception 2 » désigne le flux 3. |
| MAJ-2 (BR-06-003-020) | Levée | C02 devient le point ouvert PO38, qui décrit le lien aux trois étapes de confirmation, conformément à l'image 13. C06 est retiré. |
| MAJ-3 (BR-02-002-050) | Levée | D15 devient le point ouvert PO37, avec la citation exacte de P18b et les sources contraires (BPv02 §72, G05 L47, AFG L59, BPO l.832). C04 est retiré et la question 5 est reformulée en question ouverte. |
| MAJ-4 (mitraille) | Levée | C05 est retiré. PO26 distingue les deux périmètres : lot refusé au contrôle qualité d'un côté, retraits Z* et péremption de l'autre. |
| MIN-1 à MIN-6 | Levées | D16 est attribuée à Locuteur 1. BR-06-003-020 est noté avec AFG L181 FIT. I04 est sorti des inventions et devient une remarque exacte. C03 est renvoyé à PO33. E01 précise que D14 est classée « déduit ». D12 porte un ⚠ renvoyant à G05 NNN L6. |

## Non-régression

- Les modifications se limitent aux points ci-dessus, plus la section « Historique ». Les ID retirés ne sont pas réattribués.
- Le `.xlsx` est aligné avec le `.md` :
  - D15 absente ;
  - PO37 et PO38 présents ;
  - onglet « 6.2 » réduit à C01 ;
  - onglet « 6.3 – Non marqué v0.4 » réduit à 2 lignes ;
  - onglet « Historique » ajouté.
- Le dossier comporte désormais 41 décisions, 38 points ouverts, 1 contradiction (C01, fondée) et 2 éléments non marqués « à valider » dans la v0.4. Ces nouveaux volumes sont à reprendre dans tout message d'envoi qui citerait les chiffres de la v0.1.

## Pour le PM

Deux constats restent valables pour le Blueprint Retour v0.4 :
- **C01** : le blocage de la livraison NNN est couvert par GAP BR-01-003-020 (FS-16) dans la GAP List 05-11. Le point ouvert 9 de la v0.4 est donc à corriger.
- **E13** : l'annexe de la v0.4 cite la GAP List 27-10 au lieu de la 05-11.

Il faudra les transmettre au Consultant Blueprint pour une v0.5.
