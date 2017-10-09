function setup() {
    createCanvas(windowWidth, windowHeight); 
    
}

var team1Wins = 0;
var team2Wins = 0;
var team1WinStreak = 0;
var team2WinStreak = 0;

function mouseClicked() {
 background (200);
 var team1Offense = int(random (15,60));
 var team1Defense = int(random (0, 15));
 var team1OffenseExplosion = int(random(0,100));
 var team2OffenseExplosion = int(random(0,100));   
 var team1DefensiveLockdown = int(random(0,100));
 var team2DefensiveLockdown = int(random(0,100));    
 var team2Offense = int(random (15,60));
 var team2Defense = int(random (0, 15));
 var team2Score = team2Offense - team1Defense;
 var team1Score = team1Offense - team2Defense;
 var team1Yards = int(team1Score/10) * team1Offense + 150;
 var team2Yards = int(team2Score/10) * team2Offense + 150;
    if (team1Score == 1){
        team1Score -=1;
    }
    if (team2Score == 1){
        team2Score -= 1;
    }
    if (team1Score == 4){
        team1Score -=1;
    }
    if (team2Score == 4){
        team2Score -= 1;
    }
    if (team1Score == 2){
        team1Score ++;
    }
    if (team2Score == 2){
        team2Score ++;
    }
    if (team1Score == team2Score){
        var team1Offense = int(random (15,60));
        var team1Defense = int(random (0, 15));

    

        var team2Offense = int(random (15,60));
        var team2Defense = int(random (0, 15));
        var team2Score = team2Offense - team1Defense;
        var team1Score = team1Offense - team2Defense; 
    }
    
    
    textSize(40);
    textAlign(CENTER);
  
  text("Final Score: " + team1Score + " - " + team2Score, windowWidth/2, windowHeight/2);
  
    if (team1Score > team2Score){
        text("Team 1 Wins!", windowWidth/2, windowHeight/2 + 45);
        team1Wins ++;
        team1WinStreak++;
        team2WinStreak = 0;
    }
    if (team2Score > team1Score){
        text("Team 2 Wins!", windowWidth/2, windowHeight/2 + 45);
        team2Wins ++;
        team2WinStreak ++;
        team1WinStreak = 0;
    }
    text("Team 1 Wins: " + team1Wins, windowWidth/2, windowHeight/2 + 135);
    text("Team 2 Wins: " + team2Wins, windowWidth/2, windowHeight/2 + 180);
    if (team1OffenseExplosion > 99){
        team1Yards = team1Yards *=2;
        print("Team 1 went off!");
    }
    if (team2OffenseExplosion > 99){
        team2Yards = team2Yards *=2;
        print("Team 2 went off!");
    }
    if (team1DefensiveLockdown > 99 && team2OffenseExplosion < 99) {
        team2Yards = team2Yards/2;
        team2Yards = int(team2Yards);
        print("Team 2 got shut down!");
    }
    if (team2DefensiveLockdown > 99 && team1OffenseExplosion < 99) {
        team1Yards = team1Yards/2;
        team1Yards = int(team1Yards);
        print("Team 1 got shut down!");
    }
    if (team1Yards > team2Yards){
        text("Team 1 had " + team1Yards + " yards!", windowWidth/2, windowHeight/2 + 90);
    }
    if (team2Yards > team1Yards){
        text("Team 2 had " + team2Yards + " yards!", windowWidth/2, windowHeight/2 + 90);
    }
    if (team1Yards == team2Yards && team1Score > team2Score) {
        text("Team 1 had " + team1Yards + " yards!", windowWidth/2, windowHeight/2 + 90);
    }
    if (team1Yards == team2Yards && team2Score > team1Score) {
        text("Team 2 had " + team2Yards + " yards!", windowWidth/2, windowHeight/2 + 90);
    }
    if (team1WinStreak >= 3){
        text("Team 1 has won " + team1WinStreak + " in a row!", windowWidth/2, windowHeight/2 + 270);
    }
    if (team2WinStreak >= 3){
        text("Team 2 has won " + team2WinStreak + " in a row!", windowWidth/2, windowHeight/2 + 270);
    }
}

