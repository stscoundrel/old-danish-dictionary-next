import org.junit.jupiter.api.Test
import utils.E2ETestCase
import kotlin.test.assertEquals

class FrontpageTest : E2ETestCase() {
    @Test
    fun testFrontpageOpens() {
        page?.navigate(appBaseUrl)
    }

    @Test
    fun testFrontpageHasExpectedTitle() {
        page?.navigate(appBaseUrl)
        val expectedTitle = "Old Danish Dictionary - Otto Kalkar"
        val actualTitle = page?.title()
        assertEquals(expectedTitle, actualTitle)
    }
}