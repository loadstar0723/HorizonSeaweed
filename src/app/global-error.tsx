'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-dark-400">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              전역 오류가 발생했습니다
            </h2>
            <p className="text-gray-400 mb-8">
              애플리케이션에서 오류가 발생했습니다.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}