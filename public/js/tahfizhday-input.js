async function handleSubmit() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const juz = document.getElementById("juz").value;

  if (!nama || !kelas || !juz) {
    alert("Semua data harus diisi!");
    return;
  }

  await fetch("/api/peserta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nama,
      kelas,
      juz,
      jenis: "tahfizh",
    }),
  });

  alert("Data tersimpan");

  // reset
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
  document.getElementById("juz").value = "";
}

function toggleList() {
  const section = document.getElementById("listSection");

  section.classList.toggle("hidden");

  if (!section.classList.contains("hidden")) {
    loadDataTahfizh();
  }
}

async function loadDataTahfizh() {
  const list = document.getElementById("list");
  if (!list) return;

  const res = await fetch("/api/peserta");
  const data = await res.json();

  const filtered = data.filter((item) => item.jenis === "tahfizh");

  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = "<p>Belum ada data</p>";
    return;
  }

  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.nama}</strong><br>
      Kelas: ${item.kelas}<br>
      Juz: ${item.juz}
    `;
    list.appendChild(li);
  });
}

async function handleSubmit() {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const juz = document.getElementById("juz").value;

  if (!nama || !kelas || !juz) {
    alert("Semua data harus diisi!");
    return;
  }

  await fetch("/api/peserta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nama,
      kelas,
      juz,
      jenis: "tahfizh",
    }),
  });

  alert("Data tersimpan");

  // reset
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
  document.getElementById("juz").value = "";

  // reload list kalau terbuka
  const section = document.getElementById("listSection");
  if (!section.classList.contains("hidden")) {
    loadDataTahfizh();
  }
}
