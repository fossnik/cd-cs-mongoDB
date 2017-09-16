// {
//     "name": "Bat",
//     "Level": 4,
//     "health": 25,
//     "type": "Flying",
//     "attacks": ["scratch", "bite"],
//     "stats": {
//         "attack": 5,
//         "defense": 2,
//     }
//     "style": "cool"
// }

// var mongo = function(db) {
//
// };

// Write the command that will find all monsters with an attack lower than 10
var question1 = function(db) {
	db.monsters.find({"stats.attack":{"$lt": 10}})
}
// Write the command that will find all monsters with a level above 5 but below 15 inclusive
var question2 = function(db) {
	db.monsters.find({"stats.attack":{"$gt": 10,"$lte":15}})
}
// Write the command to find monsters that do not have the “bite” attack.
var question3 = function(db) {
	db.monsters.find({"attacks": {"$ne": "bite"}})
}
// Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
var question4 = function(db) {
	db.monsters.find({"Level": {"$lt": 6}},{"name": true, "Level": true, "health": true})
}
// Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
var question5 = function(db) {
	db.monsters.find({"stats.attack": {"$gt": 10,"$lt": 20}},{"health": false, "style": false})
}
// Write the command to find out how many monsters are in the collection.
var question6 = function(db) {a
	db.monsters.find({}).count()
}
// Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
var question7 = function(db) {
	db.monsters.find({}).sort({"Level":-1})
}
