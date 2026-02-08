import org.junit.jupiter.api.Test
import utils.E2ETestCase
import kotlin.test.assertEquals

class BackButtonTest : E2ETestCase() {
    @Test
    fun testBackButtonWorks() {
        // First visit target page to ensure it's built for client navigation.
        page?.navigate("$appBaseUrl/letter/a")
        page?.navigate("$appBaseUrl/word/abbot")

        // Start main test.
        page?.navigate("$appBaseUrl/letter/a")

        // Navigate to a headword page.
        page?.click("text=abbot")
        page?.waitForURL("$appBaseUrl/word/abbot")

        // Try to go back using "back" button.
        page?.click("text=Back")
        page?.waitForURL("$appBaseUrl/letter/a")
    }
}
