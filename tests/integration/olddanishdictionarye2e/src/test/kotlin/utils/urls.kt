package utils

fun extractQueryParams(url: String?): String? {
    return url?.split("?")?.get(1)
}

fun urlWithoutQueryParams(url: String?): String? {
    return url?.split("?")?.get(0)
}