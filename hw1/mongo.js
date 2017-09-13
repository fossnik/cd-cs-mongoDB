// Create Collection
db.createCollection(monsters)

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

function createMonster(name,health,lastfought,attacks,stats,db) {
	db.db.insert( {
			"name" : name,
			"health" : health,
			"lastfought" : lastfought,
			"attacks" : attacks,
			"stats" : stats
	} )
}

// Write the javascript code that would insert the four attributes into the “monster” collection.
 createMonster(monster1.name, monster1.health, monster1.lastfought, monster1.attacks, monster1.stats, "monsters");

// Write the code that would then console.log all the documents inside the collection.
console.log(
	db.monsters.find({})
)
