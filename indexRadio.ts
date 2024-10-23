import { Radio } from "./Radio";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptWeight = document.getElementById("iptWeight") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const tblRadio = document.getElementById("tblRadio") as HTMLTableElement;

const radios: Radio[] = [];

function saveRadio() {
  const feesValue = parseInt(iptFees.value);

  if (feesValue > 50) {
    alert("A porcentagem de juros nao pode ser maior que 50 no radio");
    return; // Saia da função se a validação falhar
  }

  const radio = new Radio(
    iptBrand.value,
    Number(iptVoltage.value),
    Number(iptWeight.value), // Definindo diretamente o peso aqui
    Number(iptFees.value)
  );

  // Adiciona a TV ao array se passar a validação
  radios.push(radio);
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
