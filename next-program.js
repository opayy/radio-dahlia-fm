/* ==========================================================
   AUTO NEXT PROGRAM — Update otomatis sesuai jam WIB
   File: next-program.js
   ========================================================== */

function jamSekarangWIB() {
  return new Date().toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit', minute: '2-digit', hour12: false
  });
}

function keMenit(str) {
  const [h, m] = str.trim().replace('.', ':').split(':').map(Number);
  return h * 60 + (m || 0);
}

function pecahSlot(slot) {
  const [mulai, selesai] = slot.split('-').map(s => s.trim());
  return { mulai, selesai };
}

function dalamSlot(nowMin, mulai, selesai) {
  const a = keMenit(mulai);
  let b = keMenit(selesai);
  if (b === 0) b = 24 * 60;
  if (a <= b) return nowMin >= a && nowMin < b;
  return nowMin >= a || nowMin < b;
}

function cariProgram() {
  const now = jamSekarangWIB();
  const nowMin = keMenit(now);
  const namaHari = ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"];
  const hari = namaHari[new Date().getDay()];
  const jadwal = JADWAL[hari] || JADWAL.senin || [];

  let onAir = null, next = null;
  for (let i = 0; i < jadwal.length; i++) {
    const { mulai, selesai } = pecahSlot(jadwal[i][0]);
    if (dalamSlot(nowMin, mulai, selesai)) {
      onAir = jadwal[i];
      next = jadwal[(i + 1) % jadwal.length];
      break;
    }
  }
  return { onAir, next, now, hari };
}

function renderNextProgram() {
  const { onAir, next, now, hari } = cariProgram();
  if (!next) return;

  const [jam, nama, penyiar] = next;

  const img = document.getElementById('next-posters');
  if (img) {
    img.src = GAMBAR_PROGRAM[nama] || 'img/program/prog-bergadang.jpg';
    img.alt = `Poster ${nama}`;
  }

  const namaEl = document.getElementById('next-nama');
  const infoEl = document.getElementById('next-info');
  if (namaEl) namaEl.textContent = nama;
  if (infoEl) infoEl.textContent = `${jam} WIB • ${penyiar}`;

  console.log(`[${hari} ${now}] ON AIR: ${onAir?.[1] ?? '-'} | NEXT: ${nama} (${jam})`);
}

function preloadPoster() {
  Object.values(GAMBAR_PROGRAM).forEach(src => {
    const i = new Image();
    i.src = src;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNextProgram();
  preloadPoster();
  setInterval(renderNextProgram, 60 * 1000);
});
