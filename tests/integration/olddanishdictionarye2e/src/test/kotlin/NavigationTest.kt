import org.junit.jupiter.api.Test
import utils.E2ETestCase
import utils.setDesktopSize
import utils.setMobileSize

class Navigation : E2ETestCase() {
    @Test
    fun testDesktopNavigationWorks() {
        setDesktopSize(page)

        page?.navigate("$appBaseUrl/")

        // Click on the link to the letter 'a'
        page?.click("a[href='/letter/a']")
        page?.waitForURL("$appBaseUrl/letter/a")

        // Click on the link to the letter 'b'
        page?.click("a[href='/letter/b']")
        page?.waitForURL("$appBaseUrl/letter/b")
    }

    @Test
    fun testMobileNavigationWorks() {
        setMobileSize(page)

        page?.navigate("$appBaseUrl/")

        // Open mobile menu
        page?.click("div[aria-label='Open menu']")

        // Click on the link to the letter 'a' from the mobile menu
        page?.click("a[href='/letter/a']:visible")
        page?.waitForURL("$appBaseUrl/letter/a")

        // Open mobile menu again
        page?.click("div[aria-label='Open menu']")

        // Click on the link to the letter 'ø' from the mobile menu
        page?.click("a[href='/letter/oe']:visible")
        page?.waitForURL("$appBaseUrl/letter/oe")
    }

    @Test
    fun testMobileHomeIconWorks() {
        setMobileSize(page)

        page?.navigate("$appBaseUrl/letter/a")
        page?.waitForURL("$appBaseUrl/letter/a")

        // Click home button
        page?.click("img[alt='To home']")

        // Assert page was changed to home
        page?.waitForURL("$appBaseUrl/")
    }
}