angular.module("BossControlls", [])

.controller("FactsController", [
	"$scope",
	function($scope) {
		$scope.fact = "This is a fact";
		$scope.facts = [
			{	
				header: "His only #1 hit came from someone else covering him",
				body: "The closest he came to #1 was with 1984's Dancing in the Dark, which peaked at #2 on the Billboard Hot 100. While he never topped the charts, Manfred Mann did get to #1 with a cover of Springsteen's Blinded by the Light.",
				source: "http://uproxx.com/media/bruce-springsteens-only-1-hit-came-when-another-band-covered-him-and-other-facts-about-the-boss/"
			},
			{
				header: "He tried to break into Graceland to see Elvis Presley",
				body: "After a show in Memphis in 1976, Springsteen climbed over the wall to Graceland, ran to the front door and asked to see Elvis. Security guards told him that The King was out of town (which was true) and escorted him off the property.",
				source: "http://www.maxim.com/entertainment/celebrate-bruce-springsteens-birthday-12-totally-boss-facts-2015-9"
			},
			{
				header: "Streets of Philadelphia, written for the film Philadelphia, won the Academy Award for Best Original Song in 1993",
				body: "Springsteen also won four Grammy Awards for the song, including Song of the Year, Best Rock Song, Best Male Rock Vocal Performance, and Best Song Written Specifically for a Motion Picture or Television.",
				source: "https://en.wikipedia.org/wiki/Streets_of_Philadelphia"
			}
		]
	}
])