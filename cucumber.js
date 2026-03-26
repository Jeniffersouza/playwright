module.exports = {
  default: {
    require: ['dist/support/**/*.js', 'dist/step_definitions/**/*.js'],
    paths: ['features/**/*.feature'],
    format: [
      'progress-bar',
      'json:reports/cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    parallel: 1,
    strict: true,
    language: 'pt'
  }
};