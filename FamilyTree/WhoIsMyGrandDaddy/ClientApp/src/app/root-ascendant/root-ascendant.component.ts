import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root-ascendant',
  templateUrl: './root-ascendant.component.html'
})
export class RootAscendantComponent {
  public people: FamilyTreeDB[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<FamilyTreeDB[]>(baseUrl + 'api/People').subscribe(result => {
      this.people = result;
      console.log("result" + JSON.stringify(this.people));
    }, error => console.error(error));
  }
}

interface FamilyTreeDB {
  fatherId: string;
  motherId: string;
  name: string;
  surname: string;
  birthdate: Date;
  identityNumber: string;
}
