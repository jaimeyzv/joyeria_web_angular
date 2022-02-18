import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users!: Array<IUser>;

  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {
    this.us.getUsers().subscribe((response) => {
      this.users = <Array<IUser>>response;
    });
  }
_onSubmit(id:any){
 sessionStorage.setItem('idu',id);
   this.router.navigate(['admin/users-update']);
}
  _delete(id:number,user:number){
      if(user != 1){
 var answer = window.confirm("¿Esta seguro de eliminar este usuario?");
                  if (answer) {
                      this.us.__delete(id).subscribe((rest)=>{
                                      this.users = this.users.filter((u)=>u.id !== id);
                                    });
                  }
                  else {

                  }
      }else{
        alert("No puedes eliminar un Administrador, solo por Base de Datos");
      }



  }





}
