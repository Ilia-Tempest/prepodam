$( function() {
  var availableTags = [
    "Чистописание",
    "Чтение",
    "Труд",
    "Природоведение",
    "Математика",
    "Музыка (Пение)" ,
    "Изобразительное искусство (Рисование)" ,
    "Русский язык Физкультура Родной язык",
    "Основы религиозных культур и светской этики", 
    "Иностранный язык" ,
    "Граждановедение Краеведение ",
   " История ",
    "Литература",
    "Основы безопасности жизнедеятельности (ОБЖ) ",
    "Технология ",
   " География ",
    "Биология",
   " Информатика ",
   " Обществознание ",
   " Черчение ",
   " Алгебра ",
  "  Геометрия ",
    "Физика ",
    "Химия ",
    "Естествознание" ,
    "Основы экономики",
    "Правоведение ",
    "Философия ",
    "Экология ",
   " Астрономия ",
   " Начальная военная подготовка (НВП) ",
    "Мировая художественная культура (МХК) ",
   " факультативно Риторика"
  ];
  $( "#tag" ).autocomplete({
    source: availableTags
  });
} );
 
