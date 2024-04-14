import org.junit.jupiter.api.Test
import utils.E2ETestCase
import kotlin.test.assertEquals

class BackToTopButtonTest : E2ETestCase() {
    @Test
    fun testBackToTopButtonWorks() {
        page?.navigate(appBaseUrl)

        // Scroll to bottom of page
        page?.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page?.waitForTimeout(1000.0)

        // Assert we're not at the top of the page
        val scrollY = page?.evaluate("window.scrollY") as Int
        assert(scrollY != 0)

        // Click back to top
        page?.click("div[aria-label='Back to top']")
        page?.waitForTimeout(2000.0)

        // Should have scrolled back up
        val scrollYAfterClick = page?.evaluate("window.scrollY") as Int
        assertEquals(0, scrollYAfterClick)
    }
}
