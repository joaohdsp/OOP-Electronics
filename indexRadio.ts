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

  radio.brand = iptBrand.value;
  radio.voltage = parseInt(iptVoltage.value);
  radio.weight = parseInt(iptWeight.value);

  try {
    radio.setFees(parseInt(iptFees.value));
    radios.push(radio);
  } catch (error) {
    console.error("Os juros não podem ser maior que 50 no rádio");
    alert("Os juros não podem ser maior que 50 no rádio");
  }
}

function listRadio() {
  tblRadio.innerHTML = "";

  for (let radio of radios) {
    tblRadio.innerHTML += `
        <tr>
          <td>${radio.brand}</td>
          <td>${radio.voltage}</td>
          <td>${radio.fees}</td>
          <td>${radio.weight}</td>
        </tr>
      `;
  }
}

btnSave?.addEventListener("click", saveRadio);
btnList?.addEventListener("click", listRadio);
