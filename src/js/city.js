  // Выпадающая панель с поисковыми подсказками
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/SuggestView-docpage/
    var suggestView = new ymaps.SuggestView(
        'address', // ID input'а
        {
            offset: [-2, 3], // Отступы панели подсказок от её положения по умолчанию. Задаётся в виде смещений по горизонтали и вертикали относительно левого нижнего угла элемента input.
            width: 300, // Ширина панели подсказок
            results: 3, // Максимальное количество показываемых подсказок.
            provider: 'yandex#map', // Провайдер поисковых подсказок.
        });
