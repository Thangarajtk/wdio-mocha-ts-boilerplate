import LoginPage from '../pageobjects/login.page.ts'
import SecurePage from '../pageobjects/secure.page.ts'

import allure from '@wdio/allure-reporter';

describe('My Login application', () => {
    beforeEach(async () => {
        allure.addTag("E2E_Test");
        allure.addDescription('Login validation', 'markdown');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})
