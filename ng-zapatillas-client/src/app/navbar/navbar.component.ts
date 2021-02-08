import { Component, OnInit } from '@angular/core';
import { ZapatillaService } from '../shared/zapatilla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private zapatillaService: ZapatillaService, private router: Router) { }

  ngOnInit() {
  }

  newZapatilla(){
      // Get max zapatilla Id from the zapatilla list
      this.zapatillaService.getMaxZapatillaId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/zapatillas', this.id, 'new'])

  }

}
