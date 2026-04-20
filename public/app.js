async function loadData() {
  const res = await fetch("/api/peserta");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nama} - ${item.kelas} - Juz ${item.juz}
      <button onclick="hapus(${item.id})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

async function tambahData() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const juz = document.getElementById("juz").value;

  await fetch("/api/peserta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nama, kelas, juz }),
  });

  loadData();
}

async function hapus(id) {
  await fetch(`/api/peserta?id=${id}`, {
    method: "DELETE",
  });

  loadData();
}

loadData();
