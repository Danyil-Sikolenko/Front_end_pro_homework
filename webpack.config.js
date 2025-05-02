const path = require('path'); //це рядок коду на JavaScript, який використовується для підключення вбудованого модуля path у Node.js. Модуль path надає утиліти для роботи з файловими шляхами, наприклад, для об'єднання, нормалізації або отримання абсолютного шляху до файлу.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //плагін для стилів знайдени в документації вебпаку
// const { watch } = require('fs');


module.exports = { 
  mode: 'development', // Устанавливаем режим разработки
  entry: './src/index.js', // Главный файл проекта
  output: {
      filename: 'bundle.js', // Имя итогового JS-файла
      path: path.resolve(__dirname, 'dist'), // Путь для сохранения сборки
  },
  watch: true, //Включає режим слідкування це вотчер 
  module: {
      rules: [
          {
              test: /\.js$/, // Ищем файлы .js
              exclude: /node_modules/, // Исключаем файлы из node_modules
              use: { // Настройка Babel
                  loader: "babel-loader",
                  options: {
                      presets: [
                          ["@babel/preset-env", {
                              targets: "> 0.25%, not dead" // Поддержка современных браузеров
                          }]
                      ]
                  }
              }
          },
          {
              test: /\.scss$/i, // Ищем файлы SCSS
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                  'sass-loader'
              ]
          }
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: "style.css", // Имя итогового CSS-файла
      })
  ]
};


// Це базова структура у файлі webpack.config.js. module.exports — це об'єкт, який експортується у Node.js. У контексті Webpack, цей об'єкт використовується для визначення конфігурації, яку Webpack буде використовувати для складання вашого проєкту.
// Наприклад, у module.exports можна вказати наступне:
// - entry: точка входу вашого застосунку (файл, з якого починається виконання).
// - output: як і куди Webpack повинен зберігати зібрані файли.
// - module.rules: правила обробки файлів (наприклад, JavaScript, CSS або зображення).
// - plugins: додаткові плагіни для розширення функціональності Webpack





// тот код конфигурации webpack.config.js определяет, как Webpack будет собирать ваш проект. Вот разбор:
// - const path = require('path');
// Это встроенный модуль Node.js, который используется для работы с файловыми путями. В данном случае он понадобится для определения абсолютного пути к выходной папке.
// - module.exports
// Экспортирует объект конфигурации Webpack, который используется для управления процессом сборки.
// - entry: './src/index.js'
// Указывает точку входа для вашего приложения. Это файл, с которого Webpack начнет процесс сборки, определяя зависимости.
// - output: { ... }
// Указывает, как и где Webpack должен сохранить собранные файлы:
// - filename: 'bundle.js'
// Имя выходного файла, который будет содержать весь собранный код.
// - path: path.resolve(__dirname, 'dist')
// Определяет абсолютный путь к папке dist, где будет сохранен файл bundle.js.
// - __dirname указывает текущую директорию проекта.
// - path.resolve помогает создать абсолютный путь, объединяя __dirname и 'dist'.

