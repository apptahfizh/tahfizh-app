async function loadData() {
  const res = await fetch("/api/peserta");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.nama} - ${item.kelas} - Juz ${item.juz}`;
    list.appendChild(li);
  });
}

async function tambahData() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const juz = document.getElementById("juz").value;

  if (!nama || !kelas || !juz) {
    alert("Isi semua data!");
    return;
  }

  await fetch("/api/peserta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama, kelas, juz }),
  });

  loadData();
}

loadData();
