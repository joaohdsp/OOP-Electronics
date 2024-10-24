import { Television } from "./Television";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptInches = document.getElementById("iptInches") as HTMLInputElement;
const tblTelevision = document.getElementById(
  "tblTelevision"
) as HTMLInputElement;

const televisions: Television[] = [];

function saveTelevision() {
  const television = new Television(iptBrand.value);
  television.setFees(Number(iptFees?.value));
  television.setVoltage(Number(iptVoltage?.value));
  try {
    television.setInches(Number(iptInches?.value));
    televisions.push(television);
  } catch (error) {
    console.error("As polegadas da TV não podem ser maior que 80");
    alert("As polegadas da TV não podem ser maior que 80");
    throw new Error("As polegadas da TV nao podem ser maior que 80");
  }
}

function listTelevision() {
  tblTelevision.innerHTML = "";

  for (let television of televisions) {
    tblTelevision.innerHTML += `
        <tr>
          <td>${television.getBrand()}</td>
          <td>${television.getVoltage()}</td>
          <td>${television.getFees()}</td>
          <td>${television.getInches()}</td>
        </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveTelevision);
btnList?.addEventListener("click", listTelevision);
