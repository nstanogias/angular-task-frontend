import { Component, OnInit } from '@angular/core';
import {WelcomeDataService, WelcomeMessage} from '../welcome-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  messageFromService = '';
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['username'];
  }

  getWelcomeMessage() {
    this.service.fetchWelcomeMessage().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  private handleSuccessResponse(response: WelcomeMessage) {
    this.messageFromService = response.message;
  }

  private handleErrorResponse(error: any) {
    this.messageFromService = error.error.message;
  }
}
