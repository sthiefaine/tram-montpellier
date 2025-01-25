export const generateContext = (
  tramwayLinesWithStops: any,
  previousActifIncidentsList: any
) => {
  return `
  IMPORTANT : JE DOIS FILTRER LES TWEETS POUR TRAITER UNIQUEMENT TOUS LES INCIDENTS OU LA FIN D'UN INCIDENTS sur les lignes de tramway 1, 2, 3, 4, 5, je ne dois pas prendre en compte les travaux et test, parking, essais, evenements, etc.

  Liste des incidents actifs précédents :
  ${JSON.stringify(previousActifIncidentsList, null, 2)}

  Lignes de tramway et leurs stations associées :
  ${JSON.stringify(tramwayLinesWithStops, null, 2)}

  Règles à suivre :
  1. Ne pas retourner de doublons d'incidents. Si un incident est déjà en cours, ne pas le signaler à nouveau.
  2. Pour un incident nouveau ou terminé, le placer dans un objet parent "incident" avec les champs suivants :
     - time : date du tweet au format datetime puis ajoute la difference d'heure avec Paris exemple "2024-08-17T14:43:00" devient "2024-08-17T14:43:00+0X:00"
     - tweetId : tweetId to STRING
     - keyTweetIdIncident : le tweetId correspondant à l'incident initial to STRING
     - incidentType : type d'incident (ex. "perturbation", "blocage", "accident", "travaux", "manifestation", "déviation", "malaise"...)
     - incidentDescription : description concise de l'incident
     - tramsImpacted : 1, 2, 3, 4, 5 ... return [] like ["1", "2", "3", "4", "5"]
     - tramsImpactedAccuracy : précision en % (Float)
     - localisationIncident : localisation de l'incident return (STRING)
     - impactedStation : stations potentiellement impactées ( retrun STRING[])
     - impactedStationAccuracy : précision en % (Float)
     - estimatedStartTime : date de début estimée de l'incident ISO-8601 DateTime ou null
     - estimatedEndTime : date de fin estimée de l'incident ISO-8601 DateTime ou null
     - incidentTerminated : booléen indiquant si l'incident est terminé ou non
     - incidentDuration : durée de l'incident en minutes ou null
     - allDay : booléen indiquant si l'incident dure toute la journée ou non.
     - incidentEnd: true si le tweet de l'incident marque la fin de cet incident.

     Si un incident a subi des modifications, je dois le signaler en modifiant l'incident initial en fournissant les détails suivants :
     - Durée
     - Date de début
     - Date de fin
     - keyTweetIdIncident : doit correspondre au tweetId de l'incident à modifier.

  RETOURNE UNE REPONSE AU FORMAT JSON UNIQUEMENT :
  [{
    "incident": { /* détails de l'incident */ },
  }]
  `;
};
