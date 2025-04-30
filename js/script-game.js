// Characters definition
const characters = {
    'A': 'بومة 🦉',
    'B': 'دولفين 🐬',
    'C': 'سلحفاة 🐢',
    'D': 'أسد 🦁'
};

// Priority weights (for tiebreaking)
const priority = {
    'D': 4,
    'B': 3,
    'A': 2,
    'C': 1
};

// Descriptions for each percentage range
const descriptions = {
    'A': {  // الأسد - الأحمر
        'high': "قائد وواضح، تحب السيطرة وتاخد قرارات بسرعة.",
        'mid': "عندك صفات قيادية لكن مش دايمًا بتفرض رأيك.",
        'low': "تميل للتعاون أكتر من السيطرة أو التوجيه."
    },
    'B': {  // البومة - الأزرق
        'high': "منطقي ومنظم، بتحلل كل حاجة قبل ما تتحرك.",
        'mid': "تحب الترتيب أحيانًا، لكن بتشتغل حسب الحاجة.",
        'low': "بتفضل البساطة ومش بتركز في التفاصيل كتير."
    },
    'C': {  // السلحفاة - الأخضر
        'high': "مسالم وخجول، بتحب تبعد عن المشاكل والضغط.",
        'mid': "هادئ وتحب الجو المستقر، بس مش دايمًا بتنسحب.",
        'low': "واضح ومباشر، ومش بتخاف من المواجهة."
    },
    'D': {  // الدولفين - الأصفر
        'high': "اجتماعي ومتفائل، بتحب الناس وتنشر طاقة حلوة.",
        'mid': "بتحب اللمة أحيانًا، لكن بتحتاج وقت لنفسك.",
        'low': "مش دايمًا اجتماعي، وبتحب الخصوصية أكتر."
    }
};

// Questions and options
const questions = [
    "أول يوم في السكن الجديد... بتعمل إيه؟",
    "وسط الزحمة والدوشة ، تتصرف إزاي؟",
    "حصل عطل في السكن... أول تصرف؟",
    "فطارك الصبح؟",
    "حد بيخبط عليك فجأة: 'يلا نخرج!'",
    "الكهرباء قطعت وإنت بتذاكر، تتعامل إزاي؟",
    "حد استعمل حاجتك بدون إذن ؟",
    "حصل خلاف مع زميلك في السكن؟",
    "وقت تنظيف الشقة؟",
    "ايه الي يخليك متنمش بليل؟"
];

const options = [
    ["A. أرتب حاجتي وأظبط أوضتي بدقة عشان أحس بالراحة",
     "B. أتعرف على زمايلي وأهزر معاهم",
     "C. أرتب حاجتي مع نفسي لحد محد يجي يكلمني",
     "D. أدخل أعرف نفسي وأوضح الحاجات اللي بتضايقني"],

    ["A. أروح مكان تاني هادي وأركز في شغلي",
     "B. أندمج في اللمة والهزار وأجل اللي بعمله",
     "C. أفضل مكاني وأتأقلم فالدوشة",
     "D. أطلب منهم يبطلوا الدوشة عادي"],

    ["A. أبلغ المسئولين وأتابع الحل",
     "B. أكلم زمايلي ونحاول نصلح العطل سوا",
     "C. أسيب حد تاني يكتشف العطل وهو يتصرف",
     "D. أشوف الحاجة دي بتتصلح إزاي وأصلحها"],

    ["A. أصحى بدري وأجهز فطار مرتب ومنظم",
     "B. أدور مين صاحي ونجهز الفطار سوا",
     "C. أعمل فطاري البسيط بهدوء لوحدي بدون دوشة",
     "D. آخد قهوتي السريعة وأتحرك فورًا"],

    ["A. أعتذر عشان متفقناش قبلها",
     "B. أكلم باقي الشلة عشان ننزل كلنا",
     "C. مش هقدر أقول لأ فهجهز وأنزل",
     "D. هشوف هنروح فين وعلى حسب المكان هقرر"],

    ["A. أشغل الكشاف وأكمل شغلي كأن مفيش حاجة حصلت",
     "B. أقلبها قعدة هزار وضحك مع زمايلي",
     "C. أفضل مكاني أفكر في اللي هعمله لحد ما النور يجي",
     "D. أنتهز الفرصة وأطلع أغير جو"],

    ["A. أرتب حاجتي بشكل أحسن عشان ماتتكررش",
     "B. أكلمه بهزار وأوضح له بلطافة",
     "C. هتكسف أحرجه وأتعامل عادي",
     "D. أواجهه مباشرة وبوضوح"],

    ["A. آخد وقتي وأفكر كويس قبل أي تصرف",
     "B. ألجأ لشخص تالت يحل المشكلة بروح خفيفة",
     "C. هتجنب الخناق قدر المستطاع بس لو اتكررت هاخدموقف",
     "D. أواجهه فورًا وأخلص الموضوع"],

    ["A. كل واحد ليه يوم في الأسبوع زي ما اتفقنا",
     "B. ننضف كلنا سوا",
     "C. كل واحد ينضف مكانه",
     "D. اللي فاضي ينضف مش قضية"],

    ["A. مفيش، ملتزم بمعاد نومي",
     "B. بعمل حاجة بحبها",
     "C. مشكلة معايا شاغلة تفكيري",
     "D. مذاكرة لسه مخلصتش"]
];

// Quiz state
let currentQuestion = 0;
const userAnswers = Array(questions.length).fill(null);

// DOM elements
const quizContainer = document.getElementById('quizContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.getElementById('progressBar');
const resultsDiv = document.getElementById('results');
const detailedResultsDiv = document.getElementById('detailedResults');
const primaryCharacterDiv = document.getElementById('primaryCharacter');
const restartBtn = document.getElementById('restartBtn');

// Initialize quiz
function initQuiz() {
    // Create all question containers
    questions.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.className = `question-container ${index === 0 ? 'active' : ''}`;
        questionContainer.id = `question-${index}`;
        
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = `${index + 1}. ${question}`;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options';
        
        options[index].forEach((option, optionIndex) => {
            const optionChar = option.charAt(0);
            const optionText = option.substring(3);
            
            const optionDiv = document.createElement('div');
            
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${index}`;
            radioInput.id = `q${index}-option${optionIndex}`;
            radioInput.value = optionChar;
            
            if (userAnswers[index] === optionChar) {
                radioInput.checked = true;
            }
            
            radioInput.addEventListener('change', () => {
                userAnswers[index] = optionChar;
                updateNextButton();
            });
            
            const label = document.createElement('label');
            label.className = 'option-label';
            label.htmlFor = `q${index}-option${optionIndex}`;
            label.textContent = option;
            
            optionDiv.appendChild(radioInput);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(optionsContainer);
        quizContainer.appendChild(questionContainer);
    });
    
    updateProgressBar();
    updateButtons();
}

// Navigation functions
function showQuestion(index) {
    document.querySelectorAll('.question-container').forEach(container => {
        container.classList.remove('active');
    });
    
    document.getElementById(`question-${index}`).classList.add('active');
    currentQuestion = index;
    
    updateProgressBar();
    updateButtons();
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateButtons() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'عرض النتائج';
    } else {
        nextBtn.textContent = 'التالي';
    }
    
    updateNextButton();
}

function updateNextButton() {
    nextBtn.disabled = userAnswers[currentQuestion] === null;
}

// Event listeners
nextBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        showResults();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
});

restartBtn.addEventListener('click', () => {
    // Reset quiz state
    currentQuestion = 0;
    userAnswers.fill(null);
    
    // Clear and reinitialize quiz
    quizContainer.innerHTML = '';
    initQuiz();
    
    // Show quiz, hide results
    quizContainer.style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    resultsDiv.style.display = 'none';
});

// Results calculation
function runQuiz(answers) {
    // Initialize scores
    const scores = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0
    };

    // Count the answers
    answers.forEach(answer => {
        if (scores.hasOwnProperty(answer)) {
            scores[answer]++;
        }
    });

    // Calculate percentages
    const totalAnswers = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = {};
    
    for (const [char, score] of Object.entries(scores)) {
        percentages[char] = (score / totalAnswers) * 100;
    }

    // Sort characters by percentage (highest first)
    const sortedPercentages = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1]);

    // Generate detailed results
    const detailedResults = sortedPercentages.map(([char, perc]) => {
        let level;
        if (perc >= 70) {
            level = 'high';
        } else if (perc >= 40) {
            level = 'mid';
        } else {
            level = 'low';
        }

        return {
            character: char,
            characterDisplay: characters[char],
            percentage: perc.toFixed(1),
            description: descriptions[char][level]
        };
    });

    // Determine primary character
    const topScore = Math.max(...Object.values(scores));
    const topCharacters = Object.keys(scores).filter(char => scores[char] === topScore);

    let finalCharacter;
    if (topCharacters.length === 1) {
        finalCharacter = topCharacters[0];
    } else {
        // Use priority for tiebreaking
        finalCharacter = topCharacters.reduce((a, b) => 
            priority[a] > priority[b] ? a : b
        );
    }

    return {
        scores,
        percentages,
        detailedResults,
        primaryCharacter: characters[finalCharacter]
    };
}

function showResults() {
    // Filter out any null answers (shouldn't happen with our UI)
    const validAnswers = userAnswers.filter(answer => answer !== null);
    
    // Calculate results
    const results = runQuiz(validAnswers);
    
    // Display detailed results
    detailedResultsDiv.innerHTML = '';
    
    results.detailedResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const character = document.createElement('div');
        character.className = 'character';
        character.textContent = `${result.characterDisplay}`;
        
        const percentage = document.createElement('span');
        percentage.className = 'percentage';
        percentage.textContent = ` (${result.percentage}%)`;
        character.appendChild(percentage);
        
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = result.description;
        
        resultItem.appendChild(character);
        resultItem.appendChild(description);
        
        detailedResultsDiv.appendChild(resultItem);
    });
    
    // Display primary character
    primaryCharacterDiv.textContent = `🎯 شخصيتك الأساسية هي: ${results.primaryCharacter} 🎉`;
    
    // Hide quiz, show results
    quizContainer.style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    resultsDiv.style.display = 'block';
}

// Initialize the quiz when the page loads
window.addEventListener('DOMContentLoaded', initQuiz);
