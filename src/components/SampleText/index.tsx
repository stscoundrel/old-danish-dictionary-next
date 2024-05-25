import Link from 'next/link'

export default function SampleText() {
  return (
      <>
        <p className="h4">
          A sample of Old Danish:
        </p>
        <p>
          <em>
          <Link href='/word/tage-2' prefetch={false}>Takær</Link> <Link href='/word/bonde' prefetch={false}>bondæ</Link> annær <Link href='/word/mand' prefetch={false}>man</Link> mæth <Link href='/word/sin-2' prefetch={false}>sin</Link> <Link href='/word/kvinde' prefetch={false}>kunæ</Link> <Link href='/word/og' prefetch={false}>oc</Link> <Link href='/word/komme' prefetch={false}>kumar</Link> <Link href='/word/sva' prefetch={false}>swa</Link> at <Link href='/word/han-2' prefetch={false}>han</Link> <Link href='/word/draebe' prefetch={false}>dræpær</Link> anti mannen [...]
          </em>

            <hr />

          <em>If a peasant finds another man with his wife and it
            happens that he does not kill the man [...]</em>
        </p>

        <p>
          - Excerpt from The Zealandic Law of Erik, 13th century.
        </p>
      </>
  )
}
