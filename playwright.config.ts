import { defineConfig, devices } from '@playwright/test'
require('dotenv').config()

/*
|--------------------------------------------------------------------------
| Configuração principal do Playwright
|--------------------------------------------------------------------------
|
| Aqui definimos:
| • onde os testes ficam
| • comportamento da execução
| • retries
| • browser utilizado
| • reporter
| • configurações compartilhadas
|
*/

export default defineConfig({

  // Pasta onde estão os arquivos de teste
  testDir: './tests',

  // Permite execução paralela dos testes
  fullyParallel: true,

  // Impede uso de test.only em ambiente de CI
  forbidOnly: !!process.env.CI,

  // Quantidade de retries em caso de falha
  // Em CI tenta novamente 2 vezes
  retries: process.env.CI ? 2 : 0,

  // Quantidade de workers em ambiente de CI
  workers: process.env.CI ? 1 : undefined,

  // Tipo de relatório gerado após execução
  reporter: 'html',

  /*
  |--------------------------------------------------------------------------
  | Configurações compartilhadas entre todos os testes
  |--------------------------------------------------------------------------
  */

  use: {

    // URL base da aplicação
    baseURL: process.env.BASE_URL,

    screenshot:'only-on-failure',

    // Gera trace automaticamente na primeira falha
    trace: 'on-first-retry',

    // Executa navegador visível
    // false = navegador aberto
    // true = headless
    headless: false

  },

  /*
  |--------------------------------------------------------------------------
  | Browsers utilizados nos testes
  |--------------------------------------------------------------------------
  */

  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    },

    /*
    |--------------------------------------------------------------------------
    | Outros browsers disponíveis
    |--------------------------------------------------------------------------
    */

    /*
    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari']
      }
    },
    */

    /*
    |--------------------------------------------------------------------------
    | Testes mobile
    |--------------------------------------------------------------------------
    */

    /*
    {
      name: 'Mobile Chrome',

      use: {
        ...devices['Pixel 5']
      }
    },

    {
      name: 'Mobile Safari',

      use: {
        ...devices['iPhone 12']
      }
    },
    */

    /*
    |--------------------------------------------------------------------------
    | Browsers instalados na máquina
    |--------------------------------------------------------------------------
    */

    /*
    {
      name: 'Microsoft Edge',

      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    },

    {
      name: 'Google Chrome',

      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome'
      }
    },
    */
  ],

  /*
  |--------------------------------------------------------------------------
  | Subir servidor automaticamente antes dos testes
  |--------------------------------------------------------------------------
  */

  /*
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  */
})