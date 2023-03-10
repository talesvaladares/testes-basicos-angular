// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

//é possivel rodar os teste em outros browsers, para isso é preciso instalar
//karma-browserEscolhido-launcher e importar aqui
//depois criar um script no package.json para rodar o teste no navegador escolhido

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),

      //foi instalado durante o curso
      require('karma-junit-reporter'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-test1'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLauchers: {
      FirefoxSemCabeca: {
        base: 'Firefox',
        flags: ['-headless']

      }
    }
  });
};
