async function loadData() {
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

// auto load
document.addEventListener("DOMContentLoaded", loadData);
