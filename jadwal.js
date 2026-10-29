/* ==========================================================
   JADWAL SIARAN RADIO DAHLIA FM BANDUNG
   File poster: img/program/prog-*.jpg
   ========================================================== */

const JADWAL = {
  senin: [
    ["00.00 - 03.00", "Bergadang", "Jaya Pucung"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Bang Apul & Ust Andi"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Erlan"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Sansan"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Abah Ndin & Teh Amel"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Baby Alia"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Dahlia Indonesia Asik", "Ricky Luven"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Yang Digoyang", "Minul"],
    ["22.00 - 24.00", "Mandi Madu Dahlia", "Andri Vie"]
  ],
  selasa: [
    ["00.00 - 03.00", "Bergadang", "Jaya Pucung"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Bang Apul & Ust Andi"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Erlan"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Sansan"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Abah Ndin & Teh Amel"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Baby Alia"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Dahlia Indonesia Asik", "Ricky Luven"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Yang Digoyang", "Minul"],
    ["22.00 - 24.00", "Mandi Madu Dahlia", "Andri Vie"]
  ],
  rabu: [
    ["00.00 - 03.00", "Bergadang", "Ranti"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Bang Apul & Ust Andi"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Erlan"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Putri Barbie"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Abah Ndin & Dedah"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Baby Alia"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Dahlia Indonesia Asik", "Ricky Luven"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Yang Digoyang", "Minul"],
    ["22.00 - 24.00", "Mandi Madu Dahlia", "Andri Vie"]
  ],
  kamis: [
    ["00.00 - 03.00", "Bergadang", "Ranti"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Bang Apul & Ust Andi"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Erlan"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Putri Barbie"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Abah Ndin & Dedah"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Baby Alia"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Dahlia Indonesia Asik", "Ricky Luven"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Yang Digoyang", "Minul"],
    ["22.00 - 24.00", "Mandi Madu Dahlia", "Andri Vie"]
  ],
  jumat: [
    ["00.00 - 03.00", "Bergadang", "Jaya Pucung"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Tommy & Ust Taufiq"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Adri"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Putri Barbie"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Teh Amel"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Ranti"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Dahlia Indonesia Asik", "Ricky Luven"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Yang Digoyang", "Minul"],
    ["22.00 - 24.00", "Mandi Madu Dahlia", "Idoy"]
  ],
  sabtu: [
    ["00.00 - 03.00", "Bergadang", "Jaya Pucung"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Tommy & Ust Taufiq"],
    ["06.00 - 08.00", "Kopi Dangdut Dahlia", "Adri"],
    ["08.00 - 10.00", "Bandar Dangdut Dahlia", "Putri Barbie"],
    ["10.00 - 11.00", "Dongeng Sunda", "Deden Mery"],
    ["11.00 - 13.00", "Dahlia Tatar Sunda", "Dedah & Oni"],
    ["13.00 - 15.00", "Dahlia Indonesia Pilihan", "Ranti"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Cari Jodoh Di Dahlia", "Andri Vie"],
    ["18.00 - 20.00", "Kontak Indonesia Pop", "Enno Riri"],
    ["20.00 - 22.00", "Wakuncar Dahlia", "Adri"],
    ["22.00 - 24.00", "Goyang Pantura", "Idoy"]
  ],
  minggu: [
    ["00.00 - 03.00", "Wayang Golek", "Tanpa Penyiar"],
    ["03.00 - 04.00", "Goyang Priangan", "Tanpa Penyiar"],
    ["04.00 - 06.00", "Obsesi Pagi", "Tommy & Ust Taufiq"],
    ["06.00 - 08.00", "Godain Dahlia", "Sansan & Putri Barbie"],
    ["08.00 - 10.00", "Top Dangdut Dahlia", "Minul"],
    ["10.00 - 11.00", "Cepot Ngagoda Dahlia", "Senda Riwanda"],
    ["11.00 - 13.00", "Karmila", "Putri Barbie"],
    ["13.00 - 15.00", "Top Hits Dahlia", "Enno Riri"],
    ["15.00 - 16.00", "Dahlia Indonesia Pilihan Nonstop", "Tanpa Penyiar"],
    ["16.00 - 18.00", "Cindai Dahlia", "Adri"],
    ["18.00 - 20.00", "Maung Garuda", "Baby Alia"],
    ["20.00 - 22.00", "Panggung Dangdut Dahlia", "Tommy"],
    ["22.00 - 24.00", "Goyang Pantura", "Idoy"]
  ]
};

/* ==========================================================
   MAPPING PROGRAM → GAMBAR POSTER
   ========================================================== */
const GAMBAR_PROGRAM = {
  "Bergadang":                        "img/program/prog-bergadang.jpg",
  "Goyang Priangan":                  "img/program/prog-goyang-priangan.jpg",
  "Obsesi Pagi":                      "img/program/prog-obsesi-pagi.jpg",
  "Kopi Dangdut Dahlia":              "img/program/prog-kopi-dangdut.jpg",
  "Bandar Dangdut Dahlia":            "img/program/prog-bandar-dangdut-dahlia.jpg",
  "Dongeng Sunda":                    "img/program/prog-dongeng-sunda.jpg",
  "Dahlia Tatar Sunda":               "img/program/prog-dahlia-tatar-sunda.jpg",
  "Dahlia Indonesia Pilihan":         "img/program/prog-dahlia-indonesia-pilihan.jpg",
  "Dahlia Indonesia Pilihan Nonstop": "img/program/prog-dahlia-indonesia-pilihan-nonstop.jpg",
  "Dahlia Indonesia Asik":            "img/program/prog-dahlia-indonesia-asik.jpg",
  "Kontak Indonesia Pop":             "img/program/prog-kontak-indonesia-pop.jpg",
  "Yang Digoyang":                    "img/program/prog-yang-digoyang.jpg",
  "Mandi Madu Dahlia":                "img/program/prog-mandi-madu-dahlia.jpg",
  "Cari Jodoh Di Dahlia":             "img/program/prog-cari-jodoh-dahlia.jpg",
  "Wakuncar Dahlia":                  "img/program/prog-wakuncar.jpg",
  "Goyang Pantura":                   "img/program/prog-goyang-pantura.jpg",
  "Wayang Golek":                     "img/program/prog-wayang-golek-dahlia.jpg",
  "Godain Dahlia":                    "img/program/prog-godain-dahlia.jpg",
  "Top Dangdut Dahlia":               "img/program/prog-top-dangdut-dahlia.jpg",
  "Cepot Ngagoda Dahlia":             "img/program/prog-si-cepot-ngagoda.jpg",
  "Karmila":                          "img/program/prog-karmila.jpg",
  "Top Hits Dahlia":                  "img/program/prog-top-hits-dahlia.jpg",
  "Cindai Dahlia":                    "img/program/prog-cindai-dahlia.jpg",
  "Maung Garuda":                     "img/program/prog-maung-geruda.jpg",
  "Panggung Dangdut Dahlia":          "img/program/prog-panggung-dangdut-dahlia.jpg"
};
