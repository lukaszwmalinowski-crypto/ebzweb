const trainingDetail = document.getElementById("trainingDetail");
const trainingTabs = document.querySelectorAll(".training-tab");
const agendaGrid = document.getElementById("agendaGrid");

function renderTrainingDetail(id) {
  const training = window.TRAININGS[id];
  if (!training || !trainingDetail) return;

  trainingDetail.innerHTML = `
    <div class="training-detail-grid">
      <div>
        <p class="card-kicker">Szczegóły szkolenia</p>
        <h3>${training.title}</h3>
        <p>${training.description}</p>
      </div>
      <div class="detail-facts">
        <div><strong>${training.duration}</strong><span>czas / termin</span></div>
        <div><strong>${training.organisation}</strong><span>organizacja pracy</span></div>
        <div><strong>${training.status}</strong><span>status materiałów</span></div>
      </div>
    </div>
  `;
}

trainingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    trainingTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderTrainingDetail(tab.dataset.training);
  });
});

function renderAgenda() {
  if (!agendaGrid) return;

  agendaGrid.innerHTML = window.AGENDA.map(([time, title, desc]) => `
    <article class="agenda-item">
      <span class="time">${time}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join("");
}

function setupSignupButtons() {
  const links = window.SIGNUP_LINKS || {};
  const dates = window.TRAINING_DATES || {};

  const mapping = [
    ["fakeNewsSignup", links.fakeNews, "fakeNewsDate", dates.fakeNews],
    ["gamificationSignup", links.gamification, "gamificationDate", dates.gamification],
    ["communicationSignup", links.communication, "communicationDate", dates.communication]
  ];

  mapping.forEach(([buttonId, url, dateId, date]) => {
    const button = document.getElementById(buttonId);
    const dateEl = document.getElementById(dateId);

    if (dateEl && date) {
      dateEl.textContent = date;
    }

    if (!button) return;

    if (url && url !== "#") {
      button.href = url;
      button.target = "_blank";
      button.rel = "noreferrer";
    } else {
      button.href = "#";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Formularz zapisu zostanie dodany wkrótce.");
      });
    }
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

function setupMenu() {
  const button = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

renderTrainingDetail("fake-news");
renderAgenda();
setupSignupButtons();
setupFaq();
setupMenu();
