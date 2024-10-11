let main_tap = document.querySelector('.main_tap');

main_tap.addEventListener('mouseup', (e) => {
    // Создаем элемент <p>
    let p = document.createElement('p');
    p.textContent = '+1';
    p.style.fontSize = '20px';
    p.style.color = '#000';
    p.style.position = 'absolute';

    // Получаем позицию родителя относительно окна
    let rect = main_tap.getBoundingClientRect();
    
    // Корректируем координаты, используя относительные значения
    p.style.top = `${e.clientY - rect.top}px`;
    p.style.left = `${e.clientX - rect.left}px`;

    // Добавляем элемент к контейнеру
    main_tap.appendChild(p);

    // Удаляем элемент через 1 секунду
    setTimeout(() => {
        p.remove();
    }, 1000);

    // Анимация движения вверх
    setInterval(() => {
        p.style.top = `${parseInt(p.style.top) - 1}px`;
    }, 10);

    // Уменьшаем элемент при нажатии и возвращаем обратно
    setTimeout(() => {
        main_tap.style.transform = 'scale(1)';
    }, 100);
});

main_tap.addEventListener('mousedown', (e) => {
    main_tap.style.transform = 'scale(0.9)';
});
