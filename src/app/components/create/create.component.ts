import { Component, OnInit, Input } from '@angular/core';
import {CreateorderService} from './createorder.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Create Order';
  orderData = { name:'', item_price: ''};
  constructor(private CreateorderService: CreateorderService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addOrder() {
    
    this.CreateorderService.addOrder(this.orderData).subscribe((result) => {
      this.router.navigate(['/create']);
    }, (err) => {
      console.log(err);
    });
}
}
