import { useParams } from "react-router-dom"

export default function CaseStudyPage() {
  const { slug } = useParams()

  return (
    <main className="mx-auto w-full max-w-screen-2xl px-6 md:px-12 py-16">
      <h1 className="text-2xl font-semibold">Case Study</h1>
      <p className="mt-4 text-slate-600">
        Slug: <span className="font-mono text-slate-900">{slug}</span>
      </p>
    </main>
  )
}