import { MainService } from './../../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrip',
  templateUrl: './mytrip.component.html',
  styleUrls: ['./mytrip.component.scss']
})
export class MytripComponent implements OnInit {

  constructor(private service: MainService) { }
  upcoming: any
  cancelled:any
  completed:any
  ngOnInit(): void {
    this.service.gettrip().subscribe((res: any) => {
      this.upcoming=res.upcoming
      this.cancelled=res.cancelled
      this.completed=res.completed
    })
  }

}
