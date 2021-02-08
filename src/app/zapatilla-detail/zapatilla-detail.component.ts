import {Component, OnInit} from '@angular/core';
import {ZapatillaService} from '../shared/zapatilla.service';
import {Zapatilla} from '../shared/zapatilla';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-zapatilla-detail',
  templateUrl: './zapatilla-detail.component.html',
  styleUrls: ['./zapatilla-detail.component.css']
})
export class ZapatillaDetailComponent implements OnInit {

  zapatilla: Zapatilla;
 zapatillaId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private zapatillaService: ZapatillaService) {}

  ngOnInit() {
    this.zapatillaId = parseInt(this.activatedroute.snapshot.params['zapatillaId']);
    this.zapatillaService.getZapatillaById(this.zapatillaId).subscribe(
      (data: Zapatilla) => this.zapatilla = data
    );
  }
  goEdit():void{
    this.router.navigate(['/zapatillas', this.zapatillaId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
