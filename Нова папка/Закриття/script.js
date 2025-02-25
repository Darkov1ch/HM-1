
document.addEventListener("DOMContentLoaded", () => {
    const book = document.querySelector(".book");
    const pageContent = document.getElementById("page-content");
    const leftArea = document.querySelector(".click-area.left");
    const rightArea = document.querySelector(".click-area.right");

    const pages = [
        "Накрийте на стіл: Чітке визначення цілей – перший крок до успіху. Записуйте свої цілі на папері та встановлюйте дедлайни.",
        "Заздалегідь плануйте кожен день: Планування економить час. Складіть список завдань на день, тиждень і місяць.",
        "Правило 80/20: 20% зусиль дають 80% результатів. Зосередьтеся на найважливіших завданнях.",
        "Думайте про наслідки: Оцінюйте довгострокові наслідки своїх дій.",
        "Займайтесь творчою прокрастинацією: Усвідомлено відмовляйтеся від малозначущих завдань.",
        "Використовуйте закон примусової ефективності: Часу на все не вистачить, тому виконуйте найважливіші справи першими.",
        "Підвищуйте власну компетентність: Постійне навчання та розвиток підвищують продуктивність.",
        "Розбийте слона на шматочки: Великі завдання виконуйте поступово.",
        "Мотивуйте себе на дію: Позитивне мислення та внутрішня мотивація допомагають долати прокрастинацію.",
        "Якщо Ваш внутрішній голос – це Ви, то хто ж тоді слухає?"
    ];

    let currentPage = 0;

    function showPage(index) {
        const parts = pages[index].split(": ");
        pageContent.innerHTML = `<h1>${parts[0]}</h1><p>${parts[1] || ""}</p>`;
    }

    // Відкриття та закриття книги
    book.addEventListener("click", () => {
        if (!book.classList.contains("open")) {
            book.classList.add("open");
            showPage(currentPage);
        } else if (currentPage === 0) {
            book.classList.remove("open");
        }
    });

    // Перегортання сторінок праворуч
    rightArea.addEventListener("click", (event) => {
        event.stopPropagation(); 
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Перегортання сторінок ліворуч
    leftArea.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Перегортання сторінок за допомогою стрілок на клавіатурі
    document.addEventListener("keydown", (event) => {
        if (book.classList.contains("open")) {
            if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            } else if (event.key === "ArrowLeft" && currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            } else if (event.key === "Escape" && currentPage === 0) {
                book.classList.remove("open");
            }
        }
    });
});
