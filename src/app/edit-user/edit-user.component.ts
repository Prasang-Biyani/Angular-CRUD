import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { IUser } from '../model/user.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  user: IUser;
  editForm: FormGroup;

  constructor(private _router: Router, private formBuilder: FormBuilder, private usersService: UserService) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid Action');
      this._router.navigate(['list']);
      return ;
    }
    this.editForm = this.formBuilder.group ({
        id : [],
        firstName : ['', Validators.required],
        lastName: ['', Validators.required],
    });

    this.usersService.getUserById(+userId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.usersService.updateUser(this.editForm.value).pipe(first())
    .subscribe( data => {
      this._router.navigate(['list']);
    },
    error => {
      alert(error);
    }
  );
}
}
