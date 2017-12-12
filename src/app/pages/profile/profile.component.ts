import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }


}
