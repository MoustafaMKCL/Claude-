# Blueprint Retour v0.3 : ajouts, hypothèses et points à trancher

> Source : « Infrabel SAP EWM 2.0 Blueprint – Retour Extraits BPMN Draft » v0.2 (Moustafa Kayali, 02/11/2026), texte et figures BPMN.
> Livrable : `Blueprint_Retour_FR_v0.3.docx` (et sa source `Blueprint_Retour_FR_v0.3.md`), branche `ewm/blueprint`.

## 1. Ce qui a changé par rapport à la v0.2

- **Structure.** Le document suit maintenant le parcours d'un article refusé, et non plus la liste des flux BPMN : origine du refus et décision de l'acheteur, puis mitraille, retour fournisseur et traçabilité. Les titres d'étapes reprennent les libellés des blocs BPMN.
- **Registre.**
  - Les règles du TO BE sont écrites au futur.
  - Les droits sont exprimés avec « peut » et les obligations avec « devra ».
  - Les cas particuliers sont isolés dans des « Remarque : ».
- **Points ouverts.**
  - Ils sont déclarés dans le texte et repris dans un tableau en section 7.
  - Les deux commentaires Word de la v0.2 (mouvement 922 et étiquette ou information système) sont devenus des points ouverts.
- **Hors scope.** La note « Hors Scope : flux retour / flux vente de mitraille » du flux E2E est précisée : le retour de matériel défectueux vers Schaerbeek et la vente de mitraille sont hors scope. Le retour fournisseur et la mise à la mitraille du DC sont dans le périmètre de ce document.
- **Textes de BR.** Les BR cités tels quels sont convertis en règles TO BE taguées. L'annexe prend la forme d'un tableau BR → exigence → statut GAP → section.
- **Notes BRM des BPMN.** Leur contenu passe dans le texte :
  - le blocage de toute la livraison entrante NNN ;
  - le statut « clôturé » ;
  - la liste des porteurs à traiter ;
  - les BIN de destination ;
  - la traçabilité des HU au retour.
- **Phrase tronquée retirée.** La v0.2 contenait un fragment inachevé : « Le flux retour qui est hors s ».

## 2. Ce que j'ai ajouté ou supposé (à valider)

| Élément | Type | À valider |
|---|---|---|
| Tableau des 4 scénarios d'origine (section 3), avec la colonne « Articles en stock EWM ? » | Synthèse déduite du texte et des figures | Oui |
| « Articles acceptés → disponibles pour réception 1ère étape » (3.1.2) | Branche lue sur la figure 4, absente du texte | Oui |
| Remarque sur le PO mis à jour et l'absence de mouvement 993 pour les articles gratuits (3.1.2) | Note de la figure 4, peu lisible sur la capture | **Oui, prioritaire** |
| Mouvement 107 pour les quantités supplémentaires acceptées (3.1.3) | Lu sur la figure 5 | Oui |
| « Réparation par le fournisseur au DC → réception 1ère étape » (3.2.3) | Branche lue sur la figure 8 | Oui |
| Le coordinateur NNN : blocage de toute la livraison, clôture et déblocage (3.3) | Notes BRM de la figure 9, converties en règles | Oui |
| « Si aucune consolidation n'est nécessaire, le flux se poursuit » (3.2.2) | Branche « Non » de la figure 7 | Oui |
| « Si la totalité des HU n'est pas emportée → branche HU prévues et non emportées » (5.3.6) | Lu sur la figure 12, renvoi au flux d'expédition | Oui |
| Statut GAP List de BR-02-002-050 : « Outbound – À clarifier avec le business » | Repris de la GAP List Outbound du 27/10 (ligne #46, revue BP-001) | Non |
| Statut GAP List de BR-02-002-040 et BR-06-002-010 : « Non vérifié » | Absent du draft | Oui |
| Logo repris ; pied de page « General (Internal Property) » non repris | Mise en page : le gabarit Word de la v0.2 cassait les tableaux | Oui |

## 3. Points à trancher

1. **Mouvement 922** : est-il déclenché après « DU » ou après l'exécution du retour fournisseur dans EWM ? Que recouvre « DU » ? Je l'ai gardé tel quel.
2. **Bon sans référence ou bon lié au PO** : la section 5.1 crée un « bon d'expédition sans référence », alors que BR-02-002-040 et ton texte parlent d'un bon 8\* lié au PO initial. Est-ce le même document ? Le numéro de PO est-il un simple champ du bon sans référence ?
3. **Lien SAP entre un échantillon revenu du labo et le PO 45\* initial** : réconciliation par 917, par la réservation ou autrement (note de la figure 6) ?
4. **BR-02-002-030** : faut-il une étiquette physique ou une information système ? Le choix est à faire avec le business.
5. **BR-02-002-050** : à confirmer comme GAP, ou couvert par la TU et la porte en standard ? C'est la même question que Q17 de la revue Outbound.

**Hors note, mais à garder en tête** :
- La figure 1 indique « flux retour » hors scope, alors que ce document décrit un flux retour. La formulation de la section 1 lève l'ambiguïté. Il faudra peut-être aussi corriger l'annotation du BPMN E2E.
- Ronet est le site cible. Les exemples de Schaerbeek (table mezzanine, ateliers, atelier courant fort, ICT Ring station) sont conservés comme exemples, sans en faire des règles.
