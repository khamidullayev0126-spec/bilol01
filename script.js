// Bilol portfoliosi
// Bilol, sahifadagi hamma ma'lumot shu obyektda. O'zingizga moslab o'zgartiring!
// - Rasm qo'shish: rasmingizni shu papkaga "photo.jpg" deb saqlang va photo: "photo.jpg" yozing.
// - Bo'sh qoldirilgan bo'limlar ("" yoki []) sahifada "tez orada" bo'lib ko'rinadi.
const ME = {
  firstName: "Bilol",
  lastName: "Bahriddinov",
  photo: "",                                   // masalan: "photo.jpg"
  role: "Junior dasturchi",
  goal: "Software Engineer bo'lish",
  about: "CoddyCamp o'quv markazining Junior guruhida dasturlashni o'rganyapman. Kelajakda Software Engineer bo'lib, foydali dasturlar yaratmoqchiman.",
  school: "CoddyCamp",
  group: "Junior guruhi",

  // Ko'nikmalar — o'zingiz bilganlarini qoldiring yoki qo'shing
  skills: ["Scratch", "Pictoblox", "AI", "Figma", "HTML", "CSS", "Bootstrap"],

  // Hozir nimani o'rganyapsiz va qanchalik o'zlashtirdingiz (0–100)
  now: { name: "JavaScript", percent: 20 },

  // Loyihalar: { title, desc, link }
  projects: [],

  // Aloqa: { label, href } — masalan { label: "Telegram", href: "https://t.me/username" }
  contacts: []
};

// ---------- Sahifani chizish ----------

const $ = id => document.getElementById(id);
const initials = ME.firstName[0] + ME.lastName[0];

// Avatar: rasm bo'lsa rasm, bo'lmasa bosh harflar
if (ME.photo) {
  const img = document.createElement("img");
  img.src = ME.photo;
  img.alt = ME.firstName;
  $("avatar").appendChild(img);
} else {
  $("avatar").textContent = initials;
}

$("name").textContent = `${ME.firstName} ${ME.lastName}`;
$("role").textContent = ME.role;
$("goal").textContent = ME.goal;
$("about").textContent = ME.about;
$("school").textContent = ME.school;
$("group").textContent = ME.group;
$("status").textContent = `${ME.now.name} o'rganyapman`;
$("year").textContent = new Date().getFullYear();

ME.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  $("skills").appendChild(li);
});

// "Hozir o'rganyapman" chizig'i: sahifa ochilgach asta to'ladi
$("now").textContent = ME.now.name;
$("progress-text").textContent = `${ME.now.percent}% — har kuni oldinga!`;
requestAnimationFrame(() => {
  $("progress-bar").style.width = ME.now.percent + "%";
});

// Loyihalar: bo'sh bo'lsa — "tez orada" kartochkasi
if (ME.projects.length === 0) {
  $("projects").innerHTML = `<div class="project empty"><h3>Birinchi loyiha tez orada</h3>
    <p>Hozir ustida ishlayapman. Tayyor bo'lgach, shu yerda paydo bo'ladi.</p></div>`;
} else {
  ME.projects.forEach(p => {
    const card = document.createElement(p.link ? "a" : "div");
    card.className = "project";
    if (p.link) { card.href = p.link; card.target = "_blank"; card.rel = "noopener"; }
    card.innerHTML = "<h3></h3><p></p>";
    card.querySelector("h3").textContent = p.title;
    card.querySelector("p").textContent = p.desc;
    $("projects").appendChild(card);
  });
}

// Aloqa
if (ME.contacts.length === 0) {
  $("contacts").innerHTML = "<p>Aloqa havolalari tez orada qo'shiladi.</p>";
} else {
  ME.contacts.forEach(c => {
    const a = document.createElement("a");
    a.textContent = c.label;
    a.href = c.href;
    if (c.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    $("contacts").appendChild(a);
  });
}
