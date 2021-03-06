// Create Collection
db.createCollection(monsters)

var monster1 = {
	"name" : "Godzilla",
	"health" : 100,
	"lastfought" : new Date(1969, 1, 1),
	"attacks" : ["bite", "stomp", "thrash"],
	"stats" : {"attack" : 60, "defense": 50}
}
var monster2 = {
	"name" : "Cthulhu",
	"health" : 100,
	"lastfought" : new Date(1069, 1, 1),
	"attacks" : ["thrash", "smite", "suffocate"],
	"stats" : {"attack" : 80, "defense": 70}
}

// Write the javascript code that would insert the four attributes into the “monster” collection.
function createMonster(name,health,lastfought,attacks,stats,db) {
	MONGO shell>>
	use db
	db.monster.insert( {
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

// Write the command that will find your monster based on it’s name
function findByName(name){
	return db.monsters.find({"name": name})
}

// Write the command that will find a monster based on one of the attacks it has
function findByAttack(attack){
	return db.monsters.find({"attacks": attack})
}

// Write the command that will find a monster based on their defense stat.
function findByStat(defense){
	return db.monsters.find({"stats.defense": defense})
}
