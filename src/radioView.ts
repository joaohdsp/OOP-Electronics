import { Radio } from "./Radio";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptWeight = document.getElementById("iptWeight") as HTMLInputElement;
const tblRadio = document.getElementById("tblRadio") as HTMLTableElement;

const radios: Radio[] = [];

function saveRadio() {
  const radio = new Radio(iptBrand.value);
  radio.setWeight(Number(iptWeight?.value));
  radio.setVoltage(Number(iptVoltage?.value));
  try {
    radio.setFees(Number(iptFees?.value));
    radios.push(radio);
  } catch (error) {
    console.error("Os juros devem ser no max 50 para radios");
    alert("Os juros devem ser no max 50 para radios");
    throw new Error("Os juros devem ser no max 50 para radios");
  }
}

function listRadio() {
  tblRadio.innerHTML = "";

  for (let radio of radios) {
    tblRadio.innerHTML += `
        <tr>
          <td>${radio.getBrand()}</td>
          <td>${radio.getVoltage()}</td>
          <td>${radio.getFees()}</td>
          <td>${radio.getWeight()}</td>
        </tr>
    `;
  }
}

btnSave?.addEventListener("click", saveRadio);
btnList?.addEventListener("click", listRadio);
