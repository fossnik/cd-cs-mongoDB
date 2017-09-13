// Create Collection
db.createCollection("monsters")

var monster1 = {
	"name" : "Godzilla",
	"health" : 100,
	"lastfought" : "1969",
	"attacks" : ["bite", "stomp", "thrash"],
	"stats" : {"attack" : 60, "defense": 50}
}
var monster2 = {
	"name" : "Cthulhu",
	"health" : 100,
	"lastfought" : "1069",
	"attacks" : ["thrash", "smite", "suffocate"],
	"stats" : {"attack" : 80, "defense": 70}
}

function createMonster(name,health,lastfought,attacks,stats) {
	db.database.insert( {
			"name" : name,
			"health" : health,
			"lastfought" : lastfought,
			"attacks" : attacks,
			"stats" : stats
	} )
}
