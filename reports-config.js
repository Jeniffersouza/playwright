const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

// Cria pasta reports se não existir
const reportsDir = 'reports';
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
  console.log(`📁 Pasta ${reportsDir} criada`);
}

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'Development',
    'Browser': 'Chromium',
    'Platform': process.platform,
    'Executed': 'Cucumber'
  }
};

try {
  if (fs.existsSync(options.jsonFile)) {
    reporter.generate(options);
    console.log('\n✅ Relatório gerado com sucesso em: reports/cucumber-report.html\n');
  } else {
    console.log('⚠️ Arquivo JSON não encontrado em:', options.jsonFile);
  }
} catch (error) {
  console.error('❌ Erro ao gerar relatório:', error.message);
}