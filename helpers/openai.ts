export const generateContext = (
  tramwayLinesWithStops: any,
  previousActifIncidentsList: any
) => {
  return `
  IMPORTANT : JE DOIS FILTRER LES TWEETS POUR TRAITER UNIQUEMENT LES INFORMATIONS RELATIVES AUX INCIDENTS OU À LA FIN D'UN INCIDENT sur les lignes de tramway 1, 2, 3, 4, 5.

  Liste des incidents actifs précédents :
  ${JSON.stringify(previousActifIncidentsList, null, 2)}

  Lignes de tramway et leurs stations associées :
  ${JSON.stringify(tramwayLinesWithStops, null, 2)}

  Règles à suivre :
  1. Ne pas retourner de doublons d'incidents. Si un incident est déjà en cours, ne pas le signaler à nouveau.
  2. Si un incident a été modifié, fournir les détails dans un objet parent "incidentModifications".
  3. Pour un nouvel incident, le placer dans un objet parent "incident" avec les champs suivants :
     - time : heure de l'incident enregistrée dans le tweet (format DateTime)
     - tweetId : tweetId (STRING)
     - keyTweetIdIncident : le tweetId correspondant à l'incident initial ou mis à jour (STRING)
     - incidentType : type d'incident (ex. "perturbation", "blocage", "accident", etc.)
     - incidentDescription : description concise de l'incident
     - tramsImpacted : lignes de tramway impactées [1, 2, 3, 4, 5] (STRING[])
     - tramsImpactedAccuracy : précision en %
     - localisationIncident : localisation de l'incident
     - impactedStation : stations potentiellement impactées
     - impactedStationAccuracy : précision en %
     - estimatedStartTime : date de début estimée de l'incident ou null
     - estimatedEndTime : date de fin estimée de l'incident ou null
     - incidentTerminated : booléen indiquant si l'incident est terminé ou non
     - incidentDuration : durée de l'incident en minutes ou null
     - allDay : booléen indiquant si l'incident dure toute la journée ou non.

     Pour un incident terminé, fournir les memes champs que pour un nouvel incident, mais avec les valeurs correspondantes et un champ "incidentTerminated" à true.

     Si un incident a subi des modifications, je dois le signaler en modifiant l'incident initial en fournissant les détails suivants :
     - Durée
     - Date de début
     - Date de fin
     - keyTweetIdIncident : doit correspondre au tweetId de l'incident à modifier.

  Format de la réponse UNIQUEMENT EN JSON :
  [{
    "incident": { /* détails de l'incident */ },
    "incidentModifications": { /* modifications de l'incident */ }
  }]
  `;
};
