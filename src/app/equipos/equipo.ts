export class Equipo {

  id: number;
  letra: string;
  draws: string;
  games_played: string;
  goal_differential: string;
  goals_against: string;
  goals_for: string;

 constructor(
   id: number,
   letra: string,
   draws: string,
   games_played: string,
   goal_differential: string,
   goals_against: string,
   goals_for: string,
 ) {
   this.id = id;
   this.letra = letra;
   this.draws = draws;
   this.games_played = games_played;
   this.goal_differential = goal_differential;
   this.goals_against = goals_against;
   this.goals_for = goals_for;
 }


}
