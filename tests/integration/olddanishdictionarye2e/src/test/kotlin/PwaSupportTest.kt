import com.microsoft.playwright.Page
import org.junit.jupiter.api.Test
import utils.E2ETestCase
import kotlin.test.assertEquals

class PwaSupportTest : E2ETestCase() {
    @Test
    fun testWorkerRegistersAndPrecachesManifest() {
        val browserPage = requireNotNull(page)
        browserPage.navigate(appBaseUrl)
        assertEquals("/manifest.json", browserPage.locator("link[rel=manifest]").getAttribute("href"))
        browserPage.waitForFunction(
            "() => navigator.serviceWorker.controller !== null",
            null,
            Page.WaitForFunctionOptions().setTimeout(15000.0)
        )
        assertEquals("$appBaseUrl/sw.js", browserPage.evaluate("() => navigator.serviceWorker.controller.scriptURL"))
        val manifestCached = browserPage.evaluate("""async () => {
            const registration = await navigator.serviceWorker.ready;
            const manifest = await caches.match('/manifest.json', {ignoreSearch: true});
            return registration.scope === location.origin + '/' && manifest?.ok === true;
        }""")
        assertEquals(true, manifestCached)
    }
}
