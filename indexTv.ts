import { Tv } from "./Tv";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptInches = document.getElementById("iptInches") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const tblTv = document.getElementById("tblTv") as HTMLTableElement;

const tvs: Tv[] = [];

function saveTv() {
  const inchesValue = parseInt(iptInches.value);

  if (inchesValue > 80) {
    alert("As polegadas da TV não podem ser maior que 80");
    return; // Saia da função se a validação falhar
  }

  const tv = new Tv(
    iptBrand.value,
    parseInt(iptVoltage.value),
    inchesValue,
    parseInt(iptFees.value)
  );

  // Adiciona a TV ao array se passar a validação
  tvs.push(tv);
}

function listTv() {
  tblTv.innerHTML = "";

  for (let tv of tvs) {
    tblTv.innerHTML += `
          <tr>
            <td>${tv.brand}</td>
            <td>${tv.voltage}</td>
            <td>${tv.fees}</td>
            <td>${tv.inches}</td>
          </tr>
        `;
  }
}

btnSave?.addEventListener("click", saveTv);
btnList?.addEventListener("click", listTv);
