const input = document.querySelector(".input");
const result = document.querySelector(".result");
const lastname = document.querySelector("lastname");
const firstname = document.querySelector("firstname");
const patronymicname = document.querySelector("patronymicname");

const splitName = () => {
  let str = document.querySelector("input").value;
  let text = str.trim();
  let names = text.split(" ");
  let lastname = names[0];
  let firstname = names[1];
  let patronymicname = names[2];
  let lastnamefinal =
    lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
  let firstnamefinal =
    firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
  let patronymicnamefinal =
    patronymicname[0].toUpperCase() + patronymicname.slice(1).toLowerCase();

  document.querySelector(".lastname").innerHTML = "Фамилия: " + lastnamefinal;
  document.querySelector(".firstname").innerHTML = "Имя: " + firstnamefinal;
  document.querySelector(".patronymicname").innerHTML =
    "Отчество: " + patronymicnamefinal;

  document.querySelector("input").value = "";
};
