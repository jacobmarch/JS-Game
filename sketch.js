function setup() {
  createCanvas(windowWidth, windowHeight); 

}

var team1Wins = 0;
var team2Wins = 0;

function mouseClicked() {
 background (200);
 var team1Offense = int(random (15,60));
 var team1Defense = int(random (0, 15));

    

 var team2Offense = int(random (15,60));
 var team2Defense = int(random (0, 15));
 var team2Score = team2Offense - team1Defense;
 var team1Score = team1Offense - team2Defense;
    if (team1Score == 1){
        team1Score -=1;
    }
    if (team2Score == 1){
        team2Score -= 1;
    }
    if (team1Score == team2Score){
        
    }
  textSize(40);
  textAlign(CENTER);
  text("Final Score: " + team1Score + " - " + team2Score, windowWidth/2, windowHeight/2);
  
    if (team1Score > team2Score){
        text("Team 1 Wins!", windowWidth/2, windowHeight/2 + 45);
        team1Wins ++;
    }
    if (team2Score > team1Score){
        text("Team 2 Wins!", windowWidth/2, windowHeight/2 + 45);
        team2Wins ++;
    }
    text("Team 1 Wins: " + team1Wins, windowWidth/2, windowHeight/2 + 90);
    text("Team 2 Wins: " + team2Wins, windowWidth/2, windowHeight/2 + 135);
}
