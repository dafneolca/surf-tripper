import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionService.get(params['id'])
        .subscribe((data) => {
          this.user = data;
        });
    });
  }


}
