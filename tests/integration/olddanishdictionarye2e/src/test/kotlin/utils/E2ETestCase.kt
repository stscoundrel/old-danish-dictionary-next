package utils

import com.microsoft.playwright.Browser
import com.microsoft.playwright.BrowserContext
import com.microsoft.playwright.Page
import com.microsoft.playwright.Playwright
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
open class E2ETestCase {
    protected val appBaseUrl: String = "http://localhost:3000"

    // Shared between all tests in the class.
    private lateinit var playwright: Playwright
    private lateinit var browser: Browser

    // New instance for each test method.
    private lateinit var context: BrowserContext
    protected var page: Page? = null

    @BeforeAll
    fun launchBrowser() {
        playwright = Playwright.create()
        browser = playwright.chromium().launch()
    }

    @AfterAll
    fun closeBrowser() {
        playwright.close()
    }

    @BeforeEach
    fun createContextAndPage() {
        context = browser.newContext()
        page = context.newPage()
    }

    @AfterEach
    fun closeContext() {
        context.close()
    }
}