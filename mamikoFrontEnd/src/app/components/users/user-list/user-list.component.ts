import {Component, ViewChild, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  newUserForm: FormGroup;
  canVote = false;
  error: string;
  @ViewChild('form') myNgForm;

  constructor(private userService: UserService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.newUserForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'alterEgo': ['', [Validators.required]]
    });

    this.userService.getAllUsers().subscribe((users: Array<User>) => {
      this.users = users.sort((a, b) => {
        return b.id - a.id;
      });
    });
  }
}
