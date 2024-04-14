package utils

import com.microsoft.playwright.Page

fun setDesktopSize(page: Page?) {
    page?.setViewportSize(1600, 1200)
}

fun setMobileSize(page: Page?) {
    page?.setViewportSize(375, 660)
}