// This is Not Run
// No semi-colons
db.createCollection("monsters")

db.monsters.insert( {
	"name" : "Godzilla",
	"health" : 100,
	"lastfought" : "1969"},
	{"attacks" : ["bite", "stomp", "thrash"]},
	{"stats" : {"attack" : 60, "defense": 50}
} )

db.monsters.insert( {
	"name" : "Cthulhu",
	"health" : 100,
	"lastfought" : "1069"},
	{"attacks" : ["thrash", "smite", "suffocate"]},
	{"stats" : {"attack" : 80, "defense": 70}
} )
