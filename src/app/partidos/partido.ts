export class Partido {

  id: number;
  equipo1: string;
  equipo2: string;
  goles1: string;
  goles2: string;
 constructor(
   id: number,
   equipo1: string,
   equipo2: string,
   goles1: string,
   goles2: string
 ) {
   this.id = id;
   this.equipo1 = equipo1;
   this.equipo2 = equipo2;
   this.goles1 = goles1;
   this.goles2 = goles2;
 }


}
