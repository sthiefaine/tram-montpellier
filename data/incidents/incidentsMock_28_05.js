const incidents = `
  Voici les incidents traités et les modifications d'incidents :
  
  [
    {
      "incident": {
        "time": "2024-05-06T19:33:00.000Z",
        "tweetId": "1795146509517750457",
        "keyTweetIdIncident": "1795146509517750457",
        "incidentType": "perturbation",
        "incidentDescription": "Perturbations, suite à une manifestation, retards annoncés.",
        "tramsImpacted": [1, 2, 3, 4],
        "tramsImpactedAccuracy": 100,
        "localisationIncident": "multiple",
        "impactedStation": ["Corum", "Pl Europe", "Comédie", "Gare à L. Blum"],
        "impactedStationAccuracy": 80,
        "estimatedStartTime": null,
        "estimatedEndTime": null,
        "incidentTerminated": true,
        "incidentDuration": null,
        "allDay": false
      }
    },
    {
      "incident": {
        "time": "2024-05-06T19:36:00.000Z",
        "tweetId": "1795147246796738675",
        "keyTweetIdIncident": "1795147246796738675",
        "incidentType": "perturbation",
        "incidentDescription": "La ligne une est déviée dans les 2 sens, entre Corum et Pl Europe. Secteur Comédie, Gare à L. Blum non desservi.",
        "tramsImpacted": [1],
        "tramsImpactedAccuracy": 100,
        "localisationIncident": "multiple",
        "impactedStation": ["Corum", "Pl Europe", "Comédie", "Gare à L. Blum"],
        "impactedStationAccuracy": 80,
        "estimatedStartTime": null,
        "estimatedEndTime": null,
        "incidentTerminated": false,
        "incidentDuration": null,
        "allDay": false
      }
    },
    {
      "incident": {
        "time": "2024-05-06T19:55:00.000Z",
        "tweetId": "1795152034330542522",
        "keyTweetIdIncident": "1795152034330542522",
        "incidentType": "manifestation",
        "incidentDescription": "La ligne 3 est bloquée dans les deux sens, sur le secteur: OBSERVATOIRE",
        "tramsImpacted": [3],
        "tramsImpactedAccuracy": 100,
        "localisationIncident": "Observatoire",
        "impactedStation": ["Observatoire"],
        "impactedStationAccuracy": 100,
        "estimatedStartTime": null,
        "estimatedEndTime": null,
        "incidentTerminated": false,
        "incidentDuration": null,
        "allDay": false
      }
    },
    {
      "incidentClose": {
        "time": "2024-05-06T19:59:00.000Z",
        "tweetId": "1795153051726033001",
        "keyTweetIdIncident": "1795152034330542522",
        "incidentType": "perturbation",
        "incidentDescription": "Perturbation terminée. Retards temporaires sur quelques rames.",
        "tramsImpacted": [1, 2, 3, 4],
        "tramsImpactedAccuracy": 100,
        "localisationIncident": "multiple",
        "impactedStation": ["Observatoire"],
        "impactedStationAccuracy": 80,
        "estimatedStartTime": null,
        "estimatedEndTime": null,
        "incidentTerminated": true,
        "incidentDuration": null,
        "allDay": false
      }
    }
  ]
  `;
