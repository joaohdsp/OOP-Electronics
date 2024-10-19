import { Tv } from "./Tv";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;
const iptFees = document.getElementById("iptFees") as HTMLInputElement;
const iptVoltage = document.getElementById("iptVoltage") as HTMLInputElement;
const iptInches = document.getElementById("iptInches") as HTMLInputElement;
const tblTv = document.getElementById("tblTv") as HTMLTableElement;

const tvs: Tv[] = [];

function saveTv() {
  const tv = new Tv(iptBrand.value);

  tv.brand = iptBrand.value;
  tv.voltage = parseInt(iptVoltage.value);
  tv.fees = parseInt(iptFees.value);

  try {
    tv.setInches(parseInt(iptInches.value));
    tvs.push(tv);
  } catch (error) {
    console.error("As polegadas da TV não podem ser maior que 80");
    alert("As polegadas da TV não podem ser maior que 80");
  }
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
