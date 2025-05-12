<script>
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
  
      let score = 0;
      for (const [key, value] of Object.entries(answers)) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === value) {
          score++;
        }
      }
  
      document.getElementById("result").textContent =
        `You correctly answered ${score} out of ${Object.keys(answers).length} questions.`;
    }
  </script>
