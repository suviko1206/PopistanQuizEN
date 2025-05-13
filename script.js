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
    q4: "Vysakhovsk was settled by monarchists from the cities of Donetsk and Mariupol in the DPR in 1924.",
    q5: "Tzakenistan is officially classified as a cultural union within the Popistani constitution.",
    // ... up to q40
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
