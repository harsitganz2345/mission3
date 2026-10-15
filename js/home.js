const courses = [
  {img:"images/card1.jpg",cat:"Bisnis",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👩🏻‍💼"},
  {img:"images/card2.jpg",cat:"Bisnis",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👩🏻‍🦰"},
  {img:"images/card3.jpg",cat:"Pemasaran",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👨🏻‍💼"},
  {img:"images/card4.jpg",cat:"Pengembangan Diri",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👩🏻‍💻"},
  {img:"images/card5.jpg",cat:"Desain",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👨🏻‍💻"},
  {img:"images/card6.jpg",cat:"Pemasaran",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👩🏻‍🎓"},
  {img:"images/card7.jpg",cat:"Pengembangan Diri",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👨🏻‍🦱"},
  {img:"images/card8.jpg",cat:"Desain",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👩🏻‍🏫"},
  {img:"images/card9.jpg",cat:"Bisnis",title:"Big 4 Auditor Financial Analyst",desc:"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",avatar:"👨🏻‍💼"}
];


const grid = document.getElementById("courseGrid");

function render(category = "Semua Kelas") {
  const list =
    category === "Semua Kelas"
      ? courses
      : courses.filter(c => c.cat === category);

  grid.innerHTML = list.map(c => `
    <article class="course-card">
      <div
        class="course-image"
        role="img"
        aria-label="${c.title}"
        style="background-image: url('${c.img}')"
      ></div>

      <h3>${c.title}</h3>
      <p class="course-desc">${c.desc}</p>

      <div class="mentor">
        <div class="avatar">${c.avatar}</div>
        <div>
          <strong>Jenna Ortega</strong>
          <span>Senior Accountant di Gojek</span>
        </div>
      </div>

      <div class="course-bottom">
        <div class="rating">
          <span class="stars">★★★</span><span>★★</span>
          <u>3.5 (86)</u>
        </div>
        <div class="price">Rp 300K</div>
      </div>
    </article>
  `).join("");
}
render();
document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.category);
  });
});
document.getElementById("newsletterForm").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Terima kasih! Subscribe berhasil (simulasi).");
});
