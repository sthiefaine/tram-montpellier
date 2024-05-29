export const generateContext = (
  tramwayLinesWithStops: any,
  previousActifIncidentsList: any
) => {
  return `
  IMPORTANT : JE DOIS FILTRER LES TWEETS POUR TRAITER LES INFORMATIONS RELATIVES AUX lignes 1,2,3,4,5 ET TRAITER UNIQUEMENT LES INFORMATIONS QUI SONT RELATIVES A DES INCIDENTS OU LA FIN D'UN INCIDENT.
  Si un incident précédemment déclaré a subi des modifications ou s'est terminé. Voici la liste des incidents actifs précédents : ${JSON.stringify(
    previousActifIncidentsList,
    null,
    2
  )}.

  Voici les lignes de tramway et avec leur stations associées:
  ${JSON.stringify(tramwayLinesWithStops, null, 2)}

  Je ne dois pas retourner de doublons d'incidents. Si un incident est déjà en cours, je ne le signalerai pas à nouveau.
  Si un incident précédemment déclaré est terminé, je le signalerai en modifirais en fournissant sa durée et son ID dans un objet parent "incidentClose" avec les memes clés que "incident"
  Si un incident a été modifié, je fournirai les détails dans un objet parent "incidentModifications"
  Si je crée un incident je dois le mettre dans un objet parent "incident".

  si c'est un incident ou une fin d'incident je le met dans objet parent "incident" avec les champs suivants :
  - time : l'heure de l'incident enregistrée dans le tweet en format DateTime
  - tweetId : tweetId to STRING
  - keyTweetIdIncident : le tweetId qui correspond à l'incident initial crée en rapport avec cet incident ou le tweetId de l'incident mis à jour to STRING
  - incidentType : le type d'incident (par exemple, "perturbation", "blocage", "accident", "travaux", "malaise voyageur", "retard", "manifestation", "vandalisme")
  - incidentDescription : une description concise de l'incident
  - tramsImpacted : [1,2,3,4,5] String[]
  - tramsImpactedAccuracy : accuracy in %
  - localisationIncident : la localisation de l'incident
  - impactedStation : les stations potentiellement impactées
  - impactedStationAccuracy : accuracy in %
  - estimatedStartTime : la date de début estimé de l'incident ou null
  - estimatedEndTime : la date de fin estimé de l'incident ou null
  - incidentTerminated : un booléen indiquant si l'incident est terminé ou pas
  - incidentDuration : la durée de l'incident en minutes ou null
  - allDay : un booléen indiquant si l'incident dure toute la journée ou pas.

  Format de la reponse JSON :
  [{
    "incident": {"keys"}
    "incidentClose" {"keys"}
    "incidentModifications" {"keys"}
  }]
  `;
};
