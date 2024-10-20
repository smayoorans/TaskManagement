import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  isEditMode = false;
  userId: number

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    const uid = this.route.snapshot.paramMap.get("id");
    this.userId = Number(uid);

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      password: [''],
      phone: ['', [Validators.required]],
    })

    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.userService.getUser(this.userId).subscribe(data => {

        this.userForm.patchValue({
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
        })
      }, error => {
        this.toastr.error("User is not found");
      });
    }
  }

  onSubmit() {
    let user = this.userForm.value;

    if (this.isEditMode == true) {
      user.id = this.userId;
      this.userService.updateUser(user).subscribe(data => {
        this.toastr.success("User is updated successfully");
        this.router.navigate(["/users"]);
      });
    } else {
      this.userService.createUser(user).subscribe(data => {
        this.toastr.success("User is created successfully");
        this.router.navigate(["/users"]);
      });
    }


  }

  cancel() {
    this.userForm.reset();
  }


}
