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

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function goPage(url) {
  window.location.href = url;
}

async function tambahData(jenis) {
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const juz = document.getElementById("juz").value;

  await fetch("/api/peserta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nama, kelas, juz, jenis }),
  });

  alert("Data tersimpan");
}

if (document.getElementById("list")) {
  loadData();
}
async function loadData() {
  const list = document.getElementById("list");

  // kalau tidak ada list, hentikan
  if (!list) return;

  const res = await fetch("/api/peserta");
  const data = await res.json();

  list.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.nama} - ${item.kelas} - Juz ${item.juz}`;
    list.appendChild(li);
  });
}
