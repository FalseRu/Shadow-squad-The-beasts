// Ожидаем полной загрузки DOM перед выполнением скриптов
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    const betaBtn = document.getElementById('betaBtn');
    const betaModal = document.getElementById('betaModal');
    const closeBtn = document.querySelector('.close');
    const betaForm = document.getElementById('betaForm');
    const contactForm = document.getElementById('contactForm');

    // Обработчик клика по кнопке "Доступ к бета"
    betaBtn.addEventListener('click', () => {
        betaModal.style.display = 'flex'; // Показываем модальное окно
    });

    // Обработчик клика по кнопке закрытия модального окна
    closeBtn.addEventListener('click', () => {
        betaModal.style.display = 'none'; // Скрываем модальное окно
    });

    // Обработчик клика по затемненной области вокруг модального окна
    window.addEventListener('click', (e) => {
        if (e.target === betaModal) {
            betaModal.style.display = 'none'; // Скрываем модальное окно
        }
    });

    // Обработчик отправки формы бета-доступа
    betaForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        
        // Получаем значения полей формы
        const email = document.getElementById('email').value;
        const region = document.getElementById('region').value;
        
        // В реальном приложении здесь была бы отправка данных на сервер
        // Для демонстрации просто показываем сообщение
        alert(`Спасибо за заявку! На адрес ${email} будет отправлено письмо с подтверждением. Ваш регион: ${region}`);
        
        // Скрываем модальное окно и сбрасываем форму
        betaModal.style.display = 'none';
        betaForm.reset();
    });

    // Обработчик отправки формы обратной связи
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        
        // Получаем значения полей формы
        const name = document.getElementById('name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('message').value;
        
        // В реальном приложении здесь была бы отправка данных на сервер
        // Для демонстрации просто показываем сообщение
        alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами по адресу ${email}.`);
        
        // Сбрасываем форму
        contactForm.reset();
    });
});