import org.junit.jupiter.api.Test
import utils.E2ETestCase
import kotlin.test.assertEquals

class WordPageTest : E2ETestCase() {
    private val wordPages = listOf(
        "Aflægsvejr" to "aflaegsvejr",
        "Flod" to "flod",
        "Ko(nni)ngedstter" to "ko(nni)ngedstter",
        "Laxgård" to "laxgard",
        "Opsvinge" to "opsvinge",
        "Ørregårdssted" to "orregardssted"
    )

    @Test
    fun testWordPagesLoad() {
        wordPages.forEach { (title, slug) ->
            page?.navigate("$appBaseUrl/word/$slug")
            val expectedTitle = "Old Danish Dictionary - $title"
            val actualH1Text = page?.textContent("h1")
            val actualTitle = page?.title()
            assertEquals(title, actualH1Text)
            assertEquals(expectedTitle, actualTitle)
        }
    }
}