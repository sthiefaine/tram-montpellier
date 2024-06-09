export const generateContext = (
  tramwayLinesWithStops: any,
  previousActifIncidentsList: any
) => {
  return `
  IMPORTANT : JE DOIS FILTRER LES TWEETS POUR TRAITER UNIQUEMENT TOUS LES INCIDENTS OU LA FIN D'UN INCIDENTS sur les lignes de tramway 1, 2, 3, 4, 5, je ne dois pas prendre en compte les travaux.

  Liste des incidents actifs précédents :
  ${JSON.stringify(previousActifIncidentsList, null, 2)}

  Lignes de tramway et leurs stations associées :
  ${JSON.stringify(tramwayLinesWithStops, null, 2)}

  Règles à suivre :
  1. Ne pas retourner de doublons d'incidents. Si un incident est déjà en cours, ne pas le signaler à nouveau.
  2. Si un incident a été modifié, fournir les détails dans un objet parent "incidentModifications".
  3. Pour un nouvel incident, le placer dans un objet parent "incident" avec les champs suivants :
     - time : heure de l'incident en format ISO-8601 DateTime.
     - tweetId : tweetId (STRING)
     - keyTweetIdIncident : le tweetId correspondant à l'incident initial ou mis à jour (STRING)
     - incidentType : type d'incident (ex. "perturbation", "blocage", "accident", "travaux", "manifestation", "déviation", "malaise"...)
     - incidentDescription : description concise de l'incident
     - tramsImpacted : lignes de tramway impactées [1, 2, 3, 4, 5] (STRING[])
     - tramsImpactedAccuracy : précision en %
     - localisationIncident : localisation de l'incident (STRING)
     - impactedStation : stations potentiellement impactées (STRING[])
     - impactedStationAccuracy : précision en %
     - estimatedStartTime : date de début estimée de l'incident ou null
     - estimatedEndTime : date de fin estimée de l'incident ou null
     - incidentTerminated : booléen indiquant si l'incident est terminé ou non
     - incidentDuration : durée de l'incident en minutes ou null
     - allDay : booléen indiquant si l'incident dure toute la journée ou non.
     - incidentEnd: true si le tweet de l'incident marque la fin de cet incident.

     Pour un incident terminé, fournir les champs d'un nouvel incident, mais avec les valeurs correspondantes comme "incidentDuration" et le champ "incidentTerminated" en se bassant aussi sur les incidents précédents.

     Si un incident a subi des modifications, je dois le signaler en modifiant l'incident initial en fournissant les détails suivants :
     - Durée
     - Date de début
     - Date de fin
     - keyTweetIdIncident : doit correspondre au tweetId de l'incident à modifier.

  Je dois retourner une reponse en Format JSON :
  [{
    "incident": { /* détails de l'incident */ },
    "incidentModifications": { /* modifications de l'incident */ }
  }]
  `;
};
