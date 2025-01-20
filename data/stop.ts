// "lignes_passantes": "3; 4",
type StopsData = {
  type: "FeatureCollection";
  name: string;
  features: {
    type: "Feature";
    properties: {
      description: string;
      lignes_passantes: string;
      lignes_et_directions: string;
      station: string;
      commune: string;
    };
    geometry: {
      type: "Point";
      coordinates: number[];
    };
  }[];
};

export const stopsData: StopsData = {
	"type" : "FeatureCollection",
	"name" : "MMM_MMM_ArretsTram",
	"features" : [
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8197874713, 43.6163200889 ]
			},
			"properties" : {
				"description" : "Mosson",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum; 1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8175618348, 43.6275670916 ]
			},
			"properties" : {
				"description" : "Halles de la Paillade",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8210906297, 43.6306290272 ]
			},
			"properties" : {
				"description" : "Saint-Paul",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8227358504, 43.6363584276 ]
			},
			"properties" : {
				"description" : "Hauts de Massane",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8277235644, 43.6389523505 ]
			},
			"properties" : {
				"description" : "Euromédecine",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8331822717, 43.6345763656 ]
			},
			"properties" : {
				"description" : "Malbosc",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8431393317, 43.63161528 ]
			},
			"properties" : {
				"description" : "Château d'Ô",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8484672315, 43.6346236695 ]
			},
			"properties" : {
				"description" : "Occitanie",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8656769541, 43.6269766449 ]
			},
			"properties" : {
				"description" : "Saint-Éloi",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8818029497, 43.6141890673 ]
			},
			"properties" : {
				"description" : "Corum",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Odysseum; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9099835986, 43.603322292 ]
			},
			"properties" : {
				"description" : "Millénaire",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8976851082, 43.6286194559 ]
			},
			"properties" : {
				"description" : "Charles de Gaulle",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9025825275, 43.6302083186 ]
			},
			"properties" : {
				"description" : "Clairval",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.908998915, 43.6314905156 ]
			},
			"properties" : {
				"description" : "La Galine",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9157045497, 43.6328256989 ]
			},
			"properties" : {
				"description" : "Centurions",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9222936884, 43.6341934161 ]
			},
			"properties" : {
				"description" : "Notre-Dame de Sablassou",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8101416663, 43.6174856649 ]
			},
			"properties" : {
				"description" : "Juvignac",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac; 3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Juvignac"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8259383996, 43.6155551962 ]
			},
			"properties" : {
				"description" : "Celleneuve",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8391786314, 43.6182689929 ]
			},
			"properties" : {
				"description" : "Pergola",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8396565986, 43.6135504845 ]
			},
			"properties" : {
				"description" : "Tonnelles",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8396546469, 43.6134522461 ]
			},
			"properties" : {
				"description" : "Tonnelles",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8741960126, 43.6055116384 ]
			},
			"properties" : {
				"description" : "Saint-Denis",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8767944405, 43.6064248697 ]
			},
			"properties" : {
				"description" : "Observatoire",
				"lignes_passantes" : "3; 4",
				"lignes_et_directions" : "3 Juvignac; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8767309578, 43.6063403063 ]
			},
			"properties" : {
				"description" : "Observatoire",
				"lignes_passantes" : "3; 4",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8797334716, 43.6052700549 ]
			},
			"properties" : {
				"description" : "Gare Saint-Roch - République",
				"lignes_passantes" : "3; 4",
				"lignes_et_directions" : "3 Juvignac; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8796717757, 43.605180034 ]
			},
			"properties" : {
				"description" : "Gare Saint-Roch - République",
				"lignes_passantes" : "3; 4",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9035829191, 43.5977784033 ]
			},
			"properties" : {
				"description" : "Pablo Picasso",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8723699459, 43.6116556033 ]
			},
			"properties" : {
				"description" : "Peyrou - Arc de Triomphe",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8802374167, 43.6058461545 ]
			},
			"properties" : {
				"description" : "Gare Saint-Roch",
				"lignes_passantes" : "1; 2",
				"lignes_et_directions" : "1 Mosson; 2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8831804274, 43.6071331178 ]
			},
			"properties" : {
				"description" : "Du Guesclin",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8865836852, 43.6085147201 ]
			},
			"properties" : {
				"description" : "Antigone",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8901869121, 43.60896581 ]
			},
			"properties" : {
				"description" : "Léon Blum",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.904054254, 43.6028118937 ]
			},
			"properties" : {
				"description" : "Mondial 98",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8940138668, 43.6074505567 ]
			},
			"properties" : {
				"description" : "Place de l'Europe",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Mosson; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8949595736, 43.6042366712 ]
			},
			"properties" : {
				"description" : "Rives du Lez",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Mosson; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8955945896, 43.6006361963 ]
			},
			"properties" : {
				"description" : "Moularès (Hôtel de Ville)",
				"lignes_passantes" : "1; 3",
				"lignes_et_directions" : "1 Mosson; 3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8993185951, 43.6015428327 ]
			},
			"properties" : {
				"description" : "Port Marianne",
				"lignes_passantes" : "1; 3",
				"lignes_et_directions" : "1 Mosson; 3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.909959899, 43.6034194512 ]
			},
			"properties" : {
				"description" : "Millénaire",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9204557496, 43.6038242298 ]
			},
			"properties" : {
				"description" : "Odysseum",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8173039806, 43.6212532642 ]
			},
			"properties" : {
				"description" : "Stade de la Mosson",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.817467083, 43.6275708907 ]
			},
			"properties" : {
				"description" : "Halles de la Paillade",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8210940793, 43.6307221859 ]
			},
			"properties" : {
				"description" : "Saint-Paul",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8226233737, 43.6363560132 ]
			},
			"properties" : {
				"description" : "Hauts de Massane",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8820319536, 43.6144988908 ]
			},
			"properties" : {
				"description" : "Corum",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9157380963, 43.6038151727 ]
			},
			"properties" : {
				"description" : "Place de France",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9209627161, 43.6492943054 ]
			},
			"properties" : {
				"description" : "Georges Pompidou",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8882249713, 43.6139188003 ]
			},
			"properties" : {
				"description" : "Les Aubes",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8656052668, 43.5887676874 ]
			},
			"properties" : {
				"description" : "Villeneuve d'Angoulême",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8663835295, 43.5923967115 ]
			},
			"properties" : {
				"description" : "Croix d'Argent",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8678049055, 43.5955321363 ]
			},
			"properties" : {
				"description" : "Mas Drevon",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8731478264, 43.593688852 ]
			},
			"properties" : {
				"description" : "Lemasson",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8758955019, 43.5949403291 ]
			},
			"properties" : {
				"description" : "Saint-Cléophas",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8467646219, 43.6114200087 ]
			},
			"properties" : {
				"description" : "Jules Guesde",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8549189603, 43.6103006155 ]
			},
			"properties" : {
				"description" : "Astruc",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8615783281, 43.6100442189 ]
			},
			"properties" : {
				"description" : "Les Arceaux",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8681139243, 43.6086014188 ]
			},
			"properties" : {
				"description" : "Plan Cabanes",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8727149021, 43.6062857901 ]
			},
			"properties" : {
				"description" : "Saint-Denis",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8901664558, 43.6088820264 ]
			},
			"properties" : {
				"description" : "Léon Blum",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8938880535, 43.6074697458 ]
			},
			"properties" : {
				"description" : "Place de l'Europe",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Odysseum; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8993714081, 43.6014689421 ]
			},
			"properties" : {
				"description" : "Port Marianne",
				"lignes_passantes" : "1; 3",
				"lignes_et_directions" : "1 Odysseum; 3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8760227111, 43.5948967376 ]
			},
			"properties" : {
				"description" : "Saint-Cléophas",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8760570432, 43.6030414105 ]
			},
			"properties" : {
				"description" : "Rondelet",
				"lignes_passantes" : "2; 4",
				"lignes_et_directions" : "2 Jacou; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.883212474, 43.6262269264 ]
			},
			"properties" : {
				"description" : "Aiguelongue",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8886985847, 43.6267117813 ]
			},
			"properties" : {
				"description" : "Saint-Lazare",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8978007104, 43.6285687499 ]
			},
			"properties" : {
				"description" : "Charles de Gaulle",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8842144733, 43.6036617572 ]
			},
			"properties" : {
				"description" : "Place Carnot",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9456813683, 43.572839694 ]
			},
			"properties" : {
				"description" : "Parc Expo",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9636858908, 43.5578973922 ]
			},
			"properties" : {
				"description" : "Pérols Étang de l'Or",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac; 3 Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8738012245, 43.614764753 ]
			},
			"properties" : {
				"description" : "Albert 1er - Cathédrale",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8882318566, 43.6140160282 ]
			},
			"properties" : {
				"description" : "Les Aubes",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8907643803, 43.5910426259 ]
			},
			"properties" : {
				"description" : "Garcia Lorca",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8695549989, 43.6189913729 ]
			},
			"properties" : {
				"description" : "Stade Philippidès",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.874049843, 43.6164974109 ]
			},
			"properties" : {
				"description" : "Place Albert 1er - Saint-Charles",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8781467669, 43.6147878517 ]
			},
			"properties" : {
				"description" : "Louis Blanc",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Mosson; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8817719876, 43.6142386994 ]
			},
			"properties" : {
				"description" : "Corum",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Mosson; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8798312172, 43.608336836 ]
			},
			"properties" : {
				"description" : "Comédie",
				"lignes_passantes" : "1; 2",
				"lignes_et_directions" : "1 Mosson; 2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8526353919, 43.6316996962 ]
			},
			"properties" : {
				"description" : "Hôpital Lapeyronie",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8615595994, 43.6291831286 ]
			},
			"properties" : {
				"description" : "Universités Sciences et Lettres",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8657642161, 43.6270330579 ]
			},
			"properties" : {
				"description" : "Saint-Éloi",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8681744284, 43.6226073092 ]
			},
			"properties" : {
				"description" : "Boutonnet - Cité des Arts",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8276645355, 43.6390369806 ]
			},
			"properties" : {
				"description" : "Euromédecine",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8332617925, 43.6346370736 ]
			},
			"properties" : {
				"description" : "Malbosc",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8430125541, 43.631608378 ]
			},
			"properties" : {
				"description" : "Château d'Ô",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8485518132, 43.6346583936 ]
			},
			"properties" : {
				"description" : "Occitanie",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Mosson",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9222280415, 43.634280612 ]
			},
			"properties" : {
				"description" : "Notre-Dame de Sablassou",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9247759227, 43.6385471085 ]
			},
			"properties" : {
				"description" : "Aube Rouge",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9294464707, 43.6467142195 ]
			},
			"properties" : {
				"description" : "Via Domitia",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8820997261, 43.6143998157 ]
			},
			"properties" : {
				"description" : "Corum",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8755880583, 43.599403985 ]
			},
			"properties" : {
				"description" : "Nouveau Saint-Roch",
				"lignes_passantes" : "2; 4",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8760591018, 43.6031434813 ]
			},
			"properties" : {
				"description" : "Rondelet",
				"lignes_passantes" : "2; 4",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre; 4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8834636045, 43.6170137213 ]
			},
			"properties" : {
				"description" : "Beaux-Arts",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8839939688, 43.6204017006 ]
			},
			"properties" : {
				"description" : "Jeu de Mail des Abbés",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.883222844, 43.6263357242 ]
			},
			"properties" : {
				"description" : "Aiguelongue",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.88865088, 43.6268173794 ]
			},
			"properties" : {
				"description" : "Saint-Lazare",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.884327096, 43.6037309224 ]
			},
			"properties" : {
				"description" : "Place Carnot",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8891001956, 43.6037613676 ]
			},
			"properties" : {
				"description" : "Voltaire",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8939349066, 43.6040644871 ]
			},
			"properties" : {
				"description" : "Rives du Lez - Consuls de Mer",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8948658841, 43.6125997944 ]
			},
			"properties" : {
				"description" : "Pompignane",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8379385601, 43.5708736726 ]
			},
			"properties" : {
				"description" : "Saint-Jean le Sec",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8497960948, 43.5752214658 ]
			},
			"properties" : {
				"description" : "Victoire 2",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8600876108, 43.5837659396 ]
			},
			"properties" : {
				"description" : "Sabines",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8196117408, 43.6162236126 ]
			},
			"properties" : {
				"description" : "Mosson",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9257936344, 43.5826948223 ]
			},
			"properties" : {
				"description" : "Boirargues",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Lattes"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9352176021, 43.578122717 ]
			},
			"properties" : {
				"description" : "EcoPôle",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9457819077, 43.5729360305 ]
			},
			"properties" : {
				"description" : "Parc Expo",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.957373761, 43.5654317865 ]
			},
			"properties" : {
				"description" : "Pérols Centre",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8196992555, 43.6162583714 ]
			},
			"properties" : {
				"description" : "Mosson",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8258108458, 43.615551796 ]
			},
			"properties" : {
				"description" : "Celleneuve",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8320036017, 43.6195861214 ]
			},
			"properties" : {
				"description" : "Pilory",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8349817827, 43.6220004006 ]
			},
			"properties" : {
				"description" : "Hôtel du Département",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8949494932, 43.5994945488 ]
			},
			"properties" : {
				"description" : "Georges Frêche - Hôtel de Ville",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8959332079, 43.5935755283 ]
			},
			"properties" : {
				"description" : "La Rauze",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8910316796, 43.5912207794 ]
			},
			"properties" : {
				"description" : "Garcia Lorca",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8851092452, 43.5904102379 ]
			},
			"properties" : {
				"description" : "Restanque",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8803963483, 43.5921991537 ]
			},
			"properties" : {
				"description" : "Saint-Martin",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8911034246, 43.5911639353 ]
			},
			"properties" : {
				"description" : "Garcia Lorca",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8908139382, 43.5909793143 ]
			},
			"properties" : {
				"description" : "Garcia Lorca",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8525573269, 43.6316332005 ]
			},
			"properties" : {
				"description" : "Hôpital Lapeyronie",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8616027672, 43.6291119118 ]
			},
			"properties" : {
				"description" : "Universités Sciences et Lettres",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8735265502, 43.6080543839 ]
			},
			"properties" : {
				"description" : "Saint-Guilhem - Courreau",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8722533942, 43.6117255808 ]
			},
			"properties" : {
				"description" : "Peyrou - Arc de Triomphe",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8736696631, 43.6148040229 ]
			},
			"properties" : {
				"description" : "Albert 1er - Cathédrale",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8797290419, 43.608418975 ]
			},
			"properties" : {
				"description" : "Comédie",
				"lignes_passantes" : "1; 2",
				"lignes_et_directions" : "1 Odysseum; 2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8948454034, 43.6042230497 ]
			},
			"properties" : {
				"description" : "Rives du Lez",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Odysseum; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8954879956, 43.6005828328 ]
			},
			"properties" : {
				"description" : "Moularès (Hôtel de Ville)",
				"lignes_passantes" : "1; 3",
				"lignes_et_directions" : "1 Odysseum; 3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9040984141, 43.6027236134 ]
			},
			"properties" : {
				"description" : "Mondial 98",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.880123572, 43.6056964642 ]
			},
			"properties" : {
				"description" : "Gare Saint-Roch",
				"lignes_passantes" : "1; 2",
				"lignes_et_directions" : "1 Odysseum; 2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8174451571, 43.6212507106 ]
			},
			"properties" : {
				"description" : "Stade de la Mosson",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8680615278, 43.6225875472 ]
			},
			"properties" : {
				"description" : "Boutonnet - Cité des Arts",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.869455597, 43.6189900166 ]
			},
			"properties" : {
				"description" : "Stade Philippidès",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8741312562, 43.6165532348 ]
			},
			"properties" : {
				"description" : "Place Albert 1er - Saint-Charles",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8781360832, 43.6146987434 ]
			},
			"properties" : {
				"description" : "Louis Blanc",
				"lignes_passantes" : "1; 4",
				"lignes_et_directions" : "1 Odysseum; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8832926967, 43.6071058458 ]
			},
			"properties" : {
				"description" : "Du Guesclin",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8867149149, 43.6085761522 ]
			},
			"properties" : {
				"description" : "Antigone",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9157834998, 43.6037133922 ]
			},
			"properties" : {
				"description" : "Place de France",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.920333732, 43.603801821 ]
			},
			"properties" : {
				"description" : "Odysseum",
				"lignes_passantes" : "1",
				"lignes_et_directions" : "1 Odysseum",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8679174799, 43.5954680358 ]
			},
			"properties" : {
				"description" : "Mas Drevon",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8730643859, 43.5936186666 ]
			},
			"properties" : {
				"description" : "Lemasson",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8841383164, 43.6204326002 ]
			},
			"properties" : {
				"description" : "Jeu de Mail des Abbés",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8891220173, 43.6036572406 ]
			},
			"properties" : {
				"description" : "Voltaire",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8939540194, 43.6039580832 ]
			},
			"properties" : {
				"description" : "Rives du Lez - Consuls de Mer",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8306510472, 43.5749227613 ]
			},
			"properties" : {
				"description" : "Saint-Jean de Védas Centre",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou; 2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8379394268, 43.5708496179 ]
			},
			"properties" : {
				"description" : "Saint-Jean le Sec",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8498750985, 43.5751226919 ]
			},
			"properties" : {
				"description" : "Victoire 2",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8602254213, 43.5838328558 ]
			},
			"properties" : {
				"description" : "Sabines",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8657460009, 43.5887386438 ]
			},
			"properties" : {
				"description" : "Villeneuve d'Angoulême",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8665079593, 43.5924154124 ]
			},
			"properties" : {
				"description" : "Croix d'Argent",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8757312528, 43.5994043075 ]
			},
			"properties" : {
				"description" : "Nouveau Saint-Roch",
				"lignes_passantes" : "2; 4",
				"lignes_et_directions" : "2 Jacou; 4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8835458957, 43.6169605634 ]
			},
			"properties" : {
				"description" : "Beaux-Arts",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8950188267, 43.6125805293 ]
			},
			"properties" : {
				"description" : "Pompignane",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9026158644, 43.6301231462 ]
			},
			"properties" : {
				"description" : "Clairval",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9090397152, 43.6314012312 ]
			},
			"properties" : {
				"description" : "La Galine",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.915729099, 43.6327455958 ]
			},
			"properties" : {
				"description" : "Centurions",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9249050883, 43.638576197 ]
			},
			"properties" : {
				"description" : "Aube Rouge",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9294837561, 43.6467335185 ]
			},
			"properties" : {
				"description" : "Via Domitia",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9210843035, 43.6493401283 ]
			},
			"properties" : {
				"description" : "Georges Pompidou",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou",
				"station" : "Station de tramway",
				"commune" : "Castelnau-le-Lez"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.912801218, 43.6545233888 ]
			},
			"properties" : {
				"description" : "Jacou",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou; 2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Jacou"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8320876666, 43.6195123076 ]
			},
			"properties" : {
				"description" : "Pilory",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8350916513, 43.62193369 ]
			},
			"properties" : {
				"description" : "Hôtel du Département",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8396691795, 43.6174516708 ]
			},
			"properties" : {
				"description" : "Pergola",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8466834469, 43.6113439394 ]
			},
			"properties" : {
				"description" : "Jules Guesde",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8549393271, 43.6102153672 ]
			},
			"properties" : {
				"description" : "Astruc",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8624667633, 43.6098331624 ]
			},
			"properties" : {
				"description" : "Les Arceaux",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8680484847, 43.6085326786 ]
			},
			"properties" : {
				"description" : "Plan Cabanes",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9035134886, 43.5977542716 ]
			},
			"properties" : {
				"description" : "Pablo Picasso",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9257095616, 43.5825791865 ]
			},
			"properties" : {
				"description" : "Boirargues",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre / Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Lattes"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.914027829, 43.5713820834 ]
			},
			"properties" : {
				"description" : "Cougourlude",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Lattes Centre",
				"station" : "Station de tramway",
				"commune" : "Lattes"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.935109864, 43.5779989333 ]
			},
			"properties" : {
				"description" : "EcoPôle",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9573262463, 43.5654122998 ]
			},
			"properties" : {
				"description" : "Pérols Centre",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Pérols Étang de l'Or",
				"station" : "Station de tramway",
				"commune" : "Pérols"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.895050661, 43.5994176895 ]
			},
			"properties" : {
				"description" : "Georges Frêche - Hôtel de Ville",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8959500438, 43.5934813855 ]
			},
			"properties" : {
				"description" : "La Rauze",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8850597896, 43.5903288414 ]
			},
			"properties" : {
				"description" : "Restanque",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8803148097, 43.5921408127 ]
			},
			"properties" : {
				"description" : "Saint-Martin",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens B",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9140396595, 43.5712848821 ]
			},
			"properties" : {
				"description" : "Cougourlude",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac",
				"station" : "Station de tramway",
				"commune" : "Lattes"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.9051557326, 43.570671454 ]
			},
			"properties" : {
				"description" : "Lattes Centre",
				"lignes_passantes" : "3",
				"lignes_et_directions" : "3 Juvignac; 3 Lattes Centre",
				"station" : "Station de tramway",
				"commune" : "Lattes"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8736954308, 43.608021356 ]
			},
			"properties" : {
				"description" : "Saint-Guilhem - Courreau",
				"lignes_passantes" : "4",
				"lignes_et_directions" : "4 Garcia Lorca sens A",
				"station" : "Station de tramway",
				"commune" : "Montpellier"
			}
		},
		{
			"type" : "Feature",
			"geometry" : {
				"type" : "Point",
				"coordinates" : [ 3.8444219678, 43.572024184 ]
			},
			"properties" : {
				"description" : "La Condamine",
				"lignes_passantes" : "2",
				"lignes_et_directions" : "2 Jacou; 2 Saint-Jean de Védas Centre",
				"station" : "Station de tramway",
				"commune" : "Saint-Jean de Védas"
			}
    }
    ]
  }
