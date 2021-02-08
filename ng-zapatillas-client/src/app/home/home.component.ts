import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../shared/zapatilla';
import {ZapatillaService} from '../shared/zapatilla.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zapatillas: Zapatilla[]=[];
  constructor(private zapatillaService: ZapatillaService) { }

  ngOnInit() {
   this.zapatillaService.getZapatillas().subscribe(
    (data: Zapatilla[]) => this.zapatillas = data
   );
  }
}
