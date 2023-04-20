import { Datas } from "./model";

class Dog implements Datas {
  public name: string = "zoe";
  public haircolor: string = "red";
  public date = new Date();

  possIt(): void {
    console.log();
    const par = document.createElement("p");
    document.body.appendChild(par);
    par.innerHTML =
      "My dog name is " +
      this.name.toUpperCase() +
      " and she have " +
      this.haircolor.toUpperCase() +
      " color";
    par.style.textAlign = "center";
    par.classList.add("ts-txt");
  }
}
export default Dog;
