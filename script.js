function checkAnswers() {
  const answers = {
    q1: "Novoburg",
    q2: "Siqqelostan",
    q3: "Leonid Asgard",
    q4: "Donetsk People's Republic",
    q5: "a cultural union.",
    q6: "Federal Republic of Popistan",
    q7: "a state of Popistan.",
    q8: "Abkhazia",
    q9: "12th of June",
    q10: "United States of America",
    q11: "SOC",
    q12: "Red",
    q13: "German",
    q14: "1",
    q15: "KA",
    q16: "Banderovshchyna",
    q17: "Kžira",
    q18: "Bulgaria",
    q19: "Mäzdack",
    q20: "Îrav'qlom",
    q21: "PadliaKerguelen",
    q22: "Franz-Terж Arssai",
    q23: "Valdemar-Ŗafņa",
    q24: "Synt",
    q25: "Belarusian",
    q26: "Reformist",
    q27: "3",
    q28: "PP",
    q29: "None",
    q30: "Districts",
    q31: "Liechtenstein",
    q32: "Prilius Island",
    q33: "GAIC",
    q34: "Randomistan",
    q35: "Leyingen",
    q36: "Saarland",
    q37: "Russian Federation",
    q38: "Siqêϑy",
    q39: "Tačistan",
    q40: "Chinese"
  };

  const explanations = {
    q1: "Novoburg is the current capital of Popistan. It replaced the city of Mäzdack upon independence in 2020.",
    q2: "Siqqelostan is the oldest political entity on the Popistani continent.",
    q3: "Leonid Asgard was the transitional president of Popistan from 2020 until the first election in 2025.",
    q4: "Vysakhovsk was settled by monarchists from the cities of Donetsk and Mariupol in the modern-day DPR in 1924.",
    q5: "Tzakenistan is a cultural union between several Jewish towns and villages in Northern and Central Popistan.",
    q6: "The official name of the country is the Federal Republic of Popistan, which was adopted on the 19th of November 2109.",
    q7: "Smaragdyn became an equal state of Popistan after the 2109/2110 land reform.",
    q8: "The first country to recognize Popistani independence was the Republic of Abkhazia.",
    q9: "Popistan gained its independence from Ossetia on June 12th, 2020.",
    q10: "The United States invaded Popistan in 2094, 2107, and 2108. The 2109 proposal to build a military base is seen as the fourth invasion.",
    q11: "Popistan is one of the founding members of the SOC.",
    q12: "Red is not present on the current Popistani flag.",
    q13: "German is only used as a primary language by the Popi people.",
    q14: "The Russian version of the national anthem starts with the words 'Из руин она восстала' (From the ruins she has risen).",
    q15: "The Communist Alliance (previously Communist Party of Popistan) is one of the oldest parties of Popistan, founded in 2021.",
    q16: "Popistan never recognised the Banderovshchyna.",
    q17: "Kžira is an autonomous district of Nedariya.",
    q18: "Bulgaria is not a member of the BSCC.",
    q19: "Mäzdack is the state capital of Town Center and former colonial capital of Popistan.",
    q20: "The city of Îrav'qlom was founded by Siqêϑy in 356.",
    q21: "Padlia and Kerguelen are mainland Popistan's two closest neighbours.",
    q22: "President Franz-Terж Arssai of the Stickerless Party was elected on the 4th of April 2110.",
    q23: "Valdemar-Ŗafņa (previously known as the Balleney Islands) was established as a condominium with Tütelistan on February 22nd, 2110.",
    q24: "The Popistani synt (₰) is the national currency of Popistan. One synt is divided into 100 pennies (Pf).",
    q25: "Belarusian is not a national language of Popistan.",
    q26: "The Reformist ideal of ownership was ruled as unconstitutional in 2110, which led to the ban of the Reformist Party.",
    q27: "The average Popistani speaks 3 languages.",
    q28: "The two-letter abbreviation of Popistan is PP.",
    q29: "There is complete freedom of religion in Popistan and no religion is officially recognised or enforced by the government.",
    q30: "Each state is divided into districts. They were historically referred to as counties in Milonaia and states in Smaragdyn.",
    q31: "The original colonial settlers of Jarharat came from Liechtenstein.",
    q32: "Prilius Island in the Nether Exclaves is the northernmost point of Popistan.",
    q33: "The SOC and BSCAI (now BSCC) united to form the Global Anti-Imperialist Coälition (GAIC).",
    q34: "Randomistan is a state of Popistan.",
    q35: "Leyingen was settled by Popis.",
    q36: "The Saar Revolts occurred in the 2060s with French and Belgian support.",
    q37: "The Russian Federation never controlled Popistan.",
    q38: "Siqêϑy travelled to Milonaia in 359.",
    q39: "The Nedr name for Popistan is Tačistan, which replaced the 'Pupisten' spelling in 2107.",
    q40: "No national language of Popistan uses Chinese characters."
  };
  
  let score = 0;

  for (const [key, correctAnswer] of Object.entries(answers)) {
    const questionDiv = document.querySelector(`input[name="${key}"]`).closest('.question');
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    // Remove previous feedback
    const oldFeedback = questionDiv.querySelector('.feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = 'feedback';

    if (selected) {
      if (selected.value === correctAnswer) {
        score++;
        feedback.innerHTML = "✅ Correct<br><em>" + explanations[key] + "</em>";
        feedback.style.color = "green";
      } else {
        feedback.innerHTML = "❌ Incorrect<br><em>" + explanations[key] + "</em>";
        feedback.style.color = "red";
      }
    } else {
      feedback.innerHTML = `⚠️ No answer<br><em>${explanations[key]}</em>`;
      feedback.style.color = "orange";
    }

    questionDiv.appendChild(feedback);
  }

  document.getElementById("result").textContent =
    `You correctly answered ${score} out of ${Object.keys(answers).length} questions.`;
}

.navbar {
  background-color: #001f3f; /* deep navy */
  padding: 12px 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar li {
  display: inline;
}

.navbar a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #ffdd57; /* highlight on hover */
}

