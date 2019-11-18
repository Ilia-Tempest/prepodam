$( function() {
  var availableTags = [
    "Алгебра",
    "Геометрия",
    "Информатика",
    "История",
    "Обществознание",
    "Физика",
    "Химия",
    "Биология",
    "География",
    "Литература",
    "Русский язык",
    "Экология",
    "Основы безопасности жизнедеятельности (ОБЖ)",
    "Английский язык",
    "Музыка",
    "Изобразительное искусство (ИЗО)",
    "Искусство",
    "Мировая художественная культура (МХК)",
    "Технология",
    "Физическая культура"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );