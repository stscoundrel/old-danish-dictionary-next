import com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import utils.E2ETestCase
import utils.extractQueryParams
import utils.urlWithoutQueryParams
import kotlin.test.assertEquals

class SearchPageTest : E2ETestCase() {
    @BeforeEach
    fun forceDesktopSize() {
        page?.setViewportSize(1600, 1200)
    }

    @Test
    fun testSearchBarWorks() {
        page?.navigate(appBaseUrl)

        // Type in search bar.
        page?.getByTestId("searchbar-input")?.fill("abbot")
        page?.getByTestId("searchbar-submit")?.click()
        page?.waitForURL("$appBaseUrl/search?query=abbot")

        // Assert we entered search page with correct param.
        assertEquals("$appBaseUrl/search", urlWithoutQueryParams(page?.url()))
        assertEquals("query=abbot", extractQueryParams(page?.url()))
    }

    @Test
    fun testSearchPageKeepsSearchedKeywordInUrlUpdated() {
        page?.navigate("$appBaseUrl/search")

        // Type in search bar.
        page?.getByTestId("searchbar-input")?.fill("padde")
        page?.getByTestId("searchbar-submit")?.click()
        page?.waitForURL("$appBaseUrl/search?query=padde")

        // Assert query params were updated
        assertEquals("$appBaseUrl/search", urlWithoutQueryParams(page?.url()))
        assertEquals("query=padde", extractQueryParams(page?.url()))
    }

    @Test
    fun testSearchPageKeepsCriteriaInUrl() {
        page?.navigate("$appBaseUrl/search")

        // Type in search bar & change condition
        page?.getByTestId("searchform-input")?.fill("padde")
        page?.check("input[name=headword]")
        page?.getByTestId("searchform-submit")?.click()

        // Should've parsed both headword & criteria in the url.
        page?.waitForURL("$appBaseUrl/search?query=padde&criteria=headword")

        // Assert query params were updated
        assertEquals("$appBaseUrl/search", urlWithoutQueryParams(page?.url()))
        assertEquals("query=padde&criteria=headword", extractQueryParams(page?.url()))
    }

    @Test
    fun testSearchPageYieldsExpectedAmountOfResults() {
        page?.navigate("$appBaseUrl/search")

        // Search for "man" in headwords
        page?.getByTestId("searchform-input")?.fill("man")
        page?.check("input[name=headword]")
        page?.getByTestId("searchform-submit")?.click()
        page?.waitForURL("$appBaseUrl/search?query=man&criteria=headword")

        // Should find max allowed headwords.
        assertThat(page?.locator("main > ul > li")).hasCount(100)

        // Search for "manne" in headwords
        page?.getByTestId("searchform-input")?.fill("manne")
        page?.getByTestId("searchform-submit")?.click()

        // Should find 8 result.
        assertThat(page?.locator("main > ul > li")).hasCount(8)
    }

}