import { Component, OnInit } from '@angular/core';

export interface fruits {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public selectAllValue: boolean = false;

  public options = [
    { value: 'Mostarda', isChecked: false },
    { value: 'Pimenta', isChecked: false },
    { value: 'Barbecue', isChecked: false },
  ];

  public options2 = [
    { value: 'Rock', isChecked: false, isDisabled: false },
    { value: 'AOR', isChecked: false, isDisabled: true },
    { value: 'Hard Rock', isChecked: false, isDisabled: true },
    { value: 'Metal melodico', isChecked: false, isDisabled: false },
    { value: 'Heavy metal', isChecked: false, isDisabled: false },
    { value: 'Thrash metal', isChecked: false, isDisabled: false },
  ];

  public options3 = [
    { value: 'Um drink no inferno', isChecked: false },
    { value: 'Um drink no inferno 2', isChecked: false },
    { value: 'Um drink no inferno 3', isChecked: false },
  ];

  //search

  searchTerm: string = '';

  items: fruits[] = [{ name:"abacaxi" }, { name:"mamão" }, { name:"goiaba" }, { name:"amora"}];

  chosenName: string = '';

  constructor() { }

  ngOnInit() {
  }

  ionChangeFunc(event: any) {

    console.log(event);

    console.log("Valor do Objeto:");
    console.log(event.detail.value);

    console.log("isChecked do Objeto:");
    console.log(event.detail.checked);

    console.log(this.options); //somente clicar não vai mudar o valor do objeto dentro do arrayList
  }

  getElement(option: any) {
    console.log(option);
    console.log(option.isChecked);
    console.log(option.value);

    this.options.forEach(item => {
      if (item.value == option.value) {
        item.isChecked = option.isChecked;
      }
    });

    console.log(this.options);
  }

  getElement2(option: any) {
    console.log(option);
    console.log(option.isChecked);
    console.log(option.value);

    this.options2.forEach(item => {
      if (item.value == option.value) {
        item.isChecked = option.isChecked;
      }
    });

    console.log(this.options2);
  }


  selectElement(option: any) {
    console.log(option);
    console.log(option.isChecked);
    console.log(option.value);

    this.options3.forEach(item => {
      if (item.value == option.value) {
        item.isChecked = option.isChecked;
      }
    });

    console.log(this.options3);
  }

  selectAll() {
    this.options3.map(item => {
      item.isChecked = !this.selectAllValue;
      return item;
    })
  }

  //search

  addValue(item: fruits) {
   this.searchTerm = item.name; 
   this.chosenName = item.name;
  }

  resetName() {
    this.searchTerm = '';
    this.chosenName = '';
  }

}
