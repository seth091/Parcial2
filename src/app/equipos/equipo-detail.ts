
import { Equipo } from "./equipo";


export class EquipoDetail extends Equipo {
 constructor (
 id: number,
 letra: string,
 pais: string,
 draws:number,
 games_played: number,
 goal_differential: number,
 goals_against: number,
 goals_for: number

 )
 /*country":"SEN","draws":0,"games_played":1,"goal_differential":-2,"goals_against":2,"goals_for":0, */
 {
  super( id, letra, pais, draws,games_played, goal_differential, goals_against, goals_for )
}

}
