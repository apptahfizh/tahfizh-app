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
