import com.microsoft.playwright.options.LoadState
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class LetterPagesTest : E2ETestCase() {
    private val urlAndLetters = listOf(
        "letter/a" to "A",
        "letter/b" to "B",
        "letter/d" to "D",
        "letter/e" to "E",
        "letter/f" to "F",
        "letter/g" to "G",
        "letter/h" to "H",
        "letter/i" to "I",
        "letter/j" to "J",
        "letter/k" to "K",
        "letter/l" to "L",
        "letter/m" to "M",
        "letter/n" to "N",
        "letter/o" to "O",
        "letter/p" to "P",
        "letter/r" to "R",
        "letter/s" to "S",
        "letter/t" to "T",
        "letter/u" to "U",
        "letter/v" to "V",
        "letter/x" to "X",
        "letter/y" to "Y",
        "letter/ae" to "Æ",
        "letter/oe" to "Ø"
    )

    @Test
    fun testAllLetterPages() {
        for ((url, letter) in urlAndLetters) {
            val expectedTitle = "Old Danish words starting with letter $letter"
            page?.navigate("$appBaseUrl/$url") // Replace with your app URL
            page?.waitForLoadState(LoadState.NETWORKIDLE)
            assertEquals(expectedTitle, page?.title(), "Page should have correct title for URL: $url")
        }
    }
}